import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

// This script runs in background, retrying the VLM API until it succeeds
// It processes one frame at a time with long delays between attempts

const PROMPT = `Analyze this UI design frame in extreme detail:
1. LAYOUT (grid, spacing, alignment, container widths)
2. TYPOGRAPHY (font families, sizes, weights, line heights)
3. COLOR PALETTE (all colors with hex codes)
4. ANIMATIONS (what motion is happening)
5. COMPONENTS (buttons, cards, nav - exact styles)
6. BACKGROUND EFFECTS (gradients, particles, blur)
7. IMAGES/MEDIA (display style, aspect ratios)
8. DESIGN STYLE (minimal, glassmorphism, etc.)
9. CSS TECHNIQUES (mix-blend-mode, clip-path, etc.)`;

const frames = [
  { id: 'v1_f002', path: '/home/z/my-project/upload/video1-frames/frame_002.jpg' },
  { id: 'v1_f004', path: '/home/z/my-project/upload/video1-frames/frame_004.jpg' },
  { id: 'v1_f006', path: '/home/z/my-project/upload/video1-frames/frame_006.jpg' },
  { id: 'v2_f002', path: '/home/z/my-project/upload/video2-frames/frame_002.jpg' },
  { id: 'v2_f005', path: '/home/z/my-project/upload/video2-frames/frame_005.jpg' },
  { id: 'v2_f008', path: '/home/z/my-project/upload/video2-frames/frame_008.jpg' },
  { id: 'v2_f012', path: '/home/z/my-project/upload/video2-frames/frame_012.jpg' },
  { id: 'v2_f015', path: '/home/z/my-project/upload/video2-frames/frame_015.jpg' },
  { id: 'v3_f002', path: '/home/z/my-project/upload/video3-frames/frame_002.jpg' },
  { id: 'v3_f005', path: '/home/z/my-project/upload/video3-frames/frame_005.jpg' },
  { id: 'v3_f008', path: '/home/z/my-project/upload/video3-frames/frame_008.jpg' },
  { id: 'v3_f011', path: '/home/z/my-project/upload/video3-frames/frame_011.jpg' },
  { id: 'v3_f014', path: '/home/z/my-project/upload/video3-frames/frame_014.jpg' },
];

const resultsDir = '/home/z/my-project/frame-results';
try { fs.mkdirSync(resultsDir, { recursive: true }); } catch {}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function log(msg) {
  const ts = new Date().toISOString();
  fs.appendFileSync('/home/z/my-project/analysis-log.txt', `[${ts}] ${msg}\n`);
  console.log(`[${ts}] ${msg}`);
}

async function analyzeFrame(zai, frame) {
  const outPath = `${resultsDir}/${frame.id}.txt`;
  
  // Skip if already done
  if (fs.existsSync(outPath)) {
    log(`SKIP ${frame.id} - already analyzed`);
    return true;
  }
  
  for (let attempt = 1; attempt <= 10; attempt++) {
    try {
      log(`${frame.id} attempt ${attempt}/10`);
      const buf = fs.readFileSync(frame.path);
      const b64 = buf.toString('base64');
      
      const resp = await zai.chat.completions.createVision({
        model: 'default',
        messages: [{
          role: 'user',
          content: [
            { type: 'text', text: PROMPT },
            { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${b64}` } }
          ]
        }],
        thinking: { type: 'disabled' }
      });
      
      const content = resp.choices[0]?.message?.content;
      fs.writeFileSync(outPath, content || 'NO CONTENT');
      log(`SUCCESS ${frame.id} (${(content || '').length} chars)`);
      return true;
    } catch (err) {
      log(`ERROR ${frame.id}: ${err.message.substring(0, 100)}`);
      if (err.message?.includes('429')) {
        const wait = 60000 * attempt; // 60s, 120s, 180s, etc.
        log(`Waiting ${wait/1000}s before retry...`);
        await sleep(wait);
      } else {
        fs.writeFileSync(outPath, `ERROR: ${err.message}`);
        return false;
      }
    }
  }
  
  fs.writeFileSync(outPath, 'MAX_RETRIES');
  return false;
}

async function main() {
  log('Starting background frame analysis...');
  
  let zai;
  for (let i = 0; i < 5; i++) {
    try {
      zai = await ZAI.create();
      log('Z-AI SDK initialized');
      break;
    } catch (err) {
      log(`SDK init error: ${err.message}`);
      await sleep(30000);
    }
  }
  
  if (!zai) {
    log('FATAL: Could not initialize SDK');
    return;
  }
  
  for (const frame of frames) {
    await analyzeFrame(zai, frame);
    // Long delay between frames
    await sleep(30000);
  }
  
  log('ALL FRAMES PROCESSED');
  
  // Compile summary
  const summary = { frames: [] };
  for (const frame of frames) {
    const outPath = `${resultsDir}/${frame.id}.txt`;
    if (fs.existsSync(outPath)) {
      summary.frames.push({
        id: frame.id,
        result: fs.readFileSync(outPath, 'utf-8')
      });
    }
  }
  fs.writeFileSync('/home/z/my-project/analysis-summary.json', JSON.stringify(summary, null, 2));
  log('Summary saved');
}

main().catch(err => {
  log(`FATAL: ${err.message}`);
});

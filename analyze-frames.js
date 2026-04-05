import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const PROMPT = `You are an expert UI/UX design analyst. Analyze this frame from a design reference video in EXTREME detail. Provide:

1. LAYOUT: Grid system, spacing, alignment, container widths, padding/margins visible
2. TYPOGRAPHY: Font families (estimate), sizes (px/rem), weights, line heights, letter spacing
3. COLOR PALETTE: All colors visible with hex codes (background, text, accents, gradients, shadows)
4. ANIMATIONS: What motion/transition/animation is happening in this frame
5. COMPONENTS: Buttons, cards, navigation, forms - exact styles (border-radius, shadows, padding, borders)
6. BACKGROUND EFFECTS: Gradients, particles, patterns, blur effects, noise
7. IMAGES/MEDIA: How images are displayed, aspect ratios, treatments (rounded corners, overlays, filters)
8. OVERALL DESIGN STYLE: Minimal, brutalist, glassmorphism, neumorphism, etc.
9. SPECIFIC CSS TECHNIQUES: Notable CSS tricks (mix-blend-mode, clip-path, backdrop-filter, etc.)

Be extremely precise about every visual element you can see.`;

const framesToAnalyze = [
  // Video 1 - Hero section concept
  { video: 1, frame: 2, path: '/home/z/my-project/upload/video1-frames/frame_002.jpg' },
  { video: 1, frame: 4, path: '/home/z/my-project/upload/video1-frames/frame_004.jpg' },
  { video: 1, frame: 6, path: '/home/z/my-project/upload/video1-frames/frame_006.jpg' },
  // Video 2 - AI layout generation
  { video: 2, frame: 2, path: '/home/z/my-project/upload/video2-frames/frame_002.jpg' },
  { video: 2, frame: 5, path: '/home/z/my-project/upload/video2-frames/frame_005.jpg' },
  { video: 2, frame: 8, path: '/home/z/my-project/upload/video2-frames/frame_008.jpg' },
  { video: 2, frame: 12, path: '/home/z/my-project/upload/video2-frames/frame_012.jpg' },
  { video: 2, frame: 15, path: '/home/z/my-project/upload/video2-frames/frame_015.jpg' },
  // Video 3 - Website design showcase
  { video: 3, frame: 2, path: '/home/z/my-project/upload/video3-frames/frame_002.jpg' },
  { video: 3, frame: 5, path: '/home/z/my-project/upload/video3-frames/frame_005.jpg' },
  { video: 3, frame: 8, path: '/home/z/my-project/upload/video3-frames/frame_008.jpg' },
  { video: 3, frame: 11, path: '/home/z/my-project/upload/video3-frames/frame_011.jpg' },
  { video: 3, frame: 14, path: '/home/z/my-project/upload/video3-frames/frame_014.jpg' },
];

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function analyzeFrame(zai, frameInfo, maxRetries = 5) {
  const { video, frame, path: imagePath } = frameInfo;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`[V${video} F${String(frame).padStart(3, '0')}] Attempt ${attempt}/${maxRetries}...`);
      
      const imageBuffer = fs.readFileSync(imagePath);
      const base64Image = imageBuffer.toString('base64');
      const mimeType = 'image/jpeg';
      
      const response = await zai.chat.completions.createVision({
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: PROMPT },
              { type: 'image_url', image_url: { url: `data:${mimeType};base64,${base64Image}` } }
            ]
          }
        ],
        thinking: { type: 'disabled' }
      });
      
      const content = response.choices[0]?.message?.content;
      return { video, frame, success: true, content };
    } catch (error) {
      if (error.message?.includes('429')) {
        const delay = Math.min(30000 * Math.pow(2, attempt - 1), 120000);
        console.log(`  Rate limited. Waiting ${delay/1000}s before retry...`);
        await sleep(delay);
      } else {
        console.log(`  Error: ${error.message}`);
        return { video, frame, success: false, error: error.message };
      }
    }
  }
  
  return { video, frame, success: false, error: 'Max retries exceeded' };
}

async function main() {
  console.log('Initializing Z-AI SDK...');
  const zai = await ZAI.create();
  
  const results = [];
  
  for (let i = 0; i < framesToAnalyze.length; i++) {
    const frameInfo = framesToAnalyze[i];
    const result = await analyzeFrame(zai, frameInfo);
    results.push(result);
    
    // Save progress after each frame
    const progressPath = '/home/z/my-project/analysis-progress.json';
    fs.writeFileSync(progressPath, JSON.stringify(results, null, 2));
    
    console.log(`  ${result.success ? 'SUCCESS' : 'FAILED'} - ${result.content?.substring(0, 80) || result.error}...`);
    console.log(`  Frame ${i+1}/${framesToAnalyze.length} complete.`);
    
    // Wait between frames to avoid rate limiting
    if (i < framesToAnalyze.length - 1) {
      console.log('  Waiting 20s before next frame...');
      await sleep(20000);
    }
  }
  
  // Save final results
  const outputPath = '/home/z/my-project/frame-analysis-complete.json';
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  
  console.log('\n=== ANALYSIS COMPLETE ===');
  console.log(`Results saved to: ${outputPath}`);
  
  // Print summary
  console.log('\n=== SUMMARY ===');
  for (const r of results) {
    console.log(`V${r.video} F${String(r.frame).padStart(3, '0')}: ${r.success ? 'OK' : 'FAILED'}`);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});

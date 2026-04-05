import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

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

const imagePath = process.argv[2];
const outputPath = process.argv[3];

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function main() {
  const zai = await ZAI.create();
  
  for (let attempt = 1; attempt <= 5; attempt++) {
    try {
      console.log(`Attempt ${attempt}/5...`);
      const buf = fs.readFileSync(imagePath);
      const b64 = buf.toString('base64');
      
      const resp = await zai.chat.completions.createVision({
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
      fs.writeFileSync(outputPath, content);
      console.log('SUCCESS: ' + content.substring(0, 100));
      return;
    } catch (err) {
      console.log(`Error: ${err.message}`);
      if (err.message?.includes('429')) {
        const wait = 30000 * Math.pow(2, attempt - 1);
        console.log(`Waiting ${wait/1000}s...`);
        await sleep(wait);
      } else {
        fs.writeFileSync(outputPath, `ERROR: ${err.message}`);
        return;
      }
    }
  }
  fs.writeFileSync(outputPath, 'MAX_RETRIES_EXCEEDED');
}

main();

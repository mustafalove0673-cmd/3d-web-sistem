import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

async function main() {
    const zai = await ZAI.create();
    const files = fs.readdirSync('/tmp/skills_imgs').filter(f => f.endsWith('.webp')).sort();
    
    // Analyze first 3 images one at a time
    for (let i = 0; i < 3; i++) {
        const file = files[i];
        const fullPath = `/tmp/skills_imgs/${file}`;
        const imageBuffer = fs.readFileSync(fullPath);
        const base64Image = imageBuffer.toString('base64');
        
        console.log(`\n=== Image ${i+1}: ${file} ===`);
        try {
            const response = await zai.chat.completions.createVision({
                messages: [{
                    role: 'user',
                    content: [
                        { type: 'text', text: 'Bu Instagram resminde yazılım araçları, GitHub repo isimleri veya skills listesi var mı? Varsa TÜM isimleri sırala. Her biri "owner/repo" veya "tool-name" formatında olsun. Repo yoksa "YOK" yaz.' },
                        { type: 'image_url', image_url: { url: `data:image/webp;base64,${base64Image}` } }
                    ]
                }],
                thinking: { type: 'disabled' }
            });
            console.log(response.choices[0]?.message?.content || 'NO RESPONSE');
        } catch(e) {
            console.log(`ERROR: ${e.message}`);
        }
        
        // Wait 5 seconds between images
        if (i < 2) {
            console.log('Waiting 5 seconds...');
            await new Promise(r => setTimeout(r, 5000));
        }
    }
}

main().catch(console.error);

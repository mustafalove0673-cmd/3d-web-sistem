import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

async function analyzeImage(zai, imagePath) {
    const imageBuffer = fs.readFileSync(imagePath);
    const base64Image = imageBuffer.toString('base64');
    
    try {
        const response = await zai.chat.completions.createVision({
            messages: [{
                role: 'user',
                content: [
                    { type: 'text', text: 'Bu resimde GitHub repo isimleri veya yazılım araçları listesi var mı? Varsa TÜM isimleri "owner/repo" formatında listele. Sadece listeyi yaz.' },
                    { type: 'image_url', image_url: { url: `data:image/webp;base64,${base64Image}` } }
                ]
            }],
            thinking: { type: 'disabled' }
        });
        return response.choices[0]?.message?.content || 'NO RESPONSE';
    } catch(e) {
        return `ERROR: ${e.message}`;
    }
}

async function main() {
    const zai = await ZAI.create();
    const dir = '/tmp/skills_imgs';
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.webp')).sort();
    
    let allResults = [];
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        console.log(`\n=== ${file} ===`);
        const result = await analyzeImage(zai, fullPath);
        console.log(result);
        allResults.push({ file: file.replace(/\.webp$/, ''), repos: result });
    }
    
    fs.writeFileSync('/tmp/vlm_results.json', JSON.stringify(allResults, null, 2));
    console.log('\n=== SAVED TO /tmp/vlm_results.json ===');
}

main().catch(console.error);

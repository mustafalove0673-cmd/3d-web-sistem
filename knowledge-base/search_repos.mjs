import ZAI from 'z-ai-web-dev-sdk';
import { writeFileSync } from 'fs';

const queries = [
  // Category 1: Color Palette Generators
  "site:github.com color palette generator tool open source",
  "site:github.com color scheme gradient generator",
  // Category 2: 3D Website Builders
  "site:github.com 3d website template threejs",
  "site:github.com webgl website builder template",
  // Category 3: Aura/Glow CSS
  "site:github.com neon glow css effect cyberpunk",
  "site:github.com holographic neon CSS effects library",
  // Category 4: Motion Graphics
  "site:github.com motion graphics library animation javascript",
  "site:github.com GSAP plugin animation collection",
  // Category 5: Dark Mode
  "site:github.com dark mode theme toggle system",
  "site:github.com dark mode css javascript theme switcher",
  // Category 6: Landing Pages
  "site:github.com premium landing page template awwwards",
  "site:github.com saas landing page template html css",
  // Category 7: Figma to Code
  "site:github.com figma to code conversion tool",
  "site:github.com design to code html react generator",
  // Category 8: Micro-interactions
  "site:github.com micro-interactions hover effects css",
  "site:github.com button hover effects card animation",
  // Category 9: Scroll Animation
  "site:github.com scroll animation library parallax",
  "site:github.com scroll triggered animation javascript",
  // Category 10: Glassmorphism
  "site:github.com glassmorphism neumorphism css ui",
  "site:github.com glass effect frosted glass css component",
  // Category 11: Typography
  "site:github.com creative typography font tools",
  "site:github.com kinetic typography variable fonts web",
  // Category 12: WebGL Shaders
  "site:github.com webgl shader library GLSL visual effects",
  "site:github.com GLSL shader collection web",
  // Category 13: Particles
  "site:github.com particle system generative art javascript",
  "site:github.com creative coding particles canvas",
  // Category 14: Responsive Design
  "site:github.com responsive design framework css",
  "site:github.com mobile first css framework adaptive",
  // Category 15: Portfolio
  "site:github.com portfolio template creative showcase",
  "site:github.com creative portfolio website template",
  // Category 16: E-commerce
  "site:github.com ecommerce premium theme luxury",
  "site:github.com online store template shopify alternative",
  // Category 17: Real Estate
  "site:github.com real estate website template property",
  "site:github.com villa apartment listing website template",
  // Category 18: Restaurant
  "site:github.com restaurant website template food delivery",
  "site:github.com cafe dining website template",
  // Category 19: SaaS Dashboard
  "site:github.com saas dashboard template admin panel analytics",
  "site:github.com admin dashboard template react",
  // Category 20: AI Web Tools
  "site:github.com AI chatbot web tool open source",
  "site:github.com AI image generator web interface",
];

async function main() {
  const zai = await ZAI.create();
  const allResults = {};
  
  for (let i = 0; i < queries.length; i++) {
    const catNum = Math.floor(i / 2) + 1;
    const catKey = `cat${catNum}`;
    
    console.log(`Searching query ${i+1}/${queries.length} (Cat ${catNum})...`);
    
    try {
      const results = await zai.functions.invoke('web_search', {
        query: queries[i],
        num: 10
      });
      
      if (!allResults[catKey]) allResults[catKey] = [];
      allResults[catKey].push(...(results || []));
      console.log(`  Found ${results?.length || 0} results`);
    } catch (e) {
      console.error(`  Error: ${e.message}`);
    }
    
    // Wait between requests to avoid rate limiting
    if (i < queries.length - 1) {
      await new Promise(r => setTimeout(r, 2500));
    }
  }
  
  writeFileSync('/home/z/my-project/knowledge-base/search_results_raw.json', JSON.stringify(allResults, null, 2));
  console.log(`\nDone! Saved results.`);
  
  // Print summary
  let total = 0;
  for (const [key, results] of Object.entries(allResults)) {
    console.log(`${key}: ${results.length} results`);
    total += results.length;
  }
  console.log(`Total: ${total}`);
}

main().catch(console.error);

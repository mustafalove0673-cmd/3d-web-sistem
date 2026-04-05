/**
 * SITE TEMPLATE SYSTEM v1.0
 * 
 * Tek Repo Yaklaşımı: Bu proje KENDİSİ ana template'tir.
 * 19 kurulu paket ile HER TÜRLÜ site üretilebilir.
 * 
 * "tema [konu]" yazıldığında:
 * 1. Konu analiz edilir → sektör eşleşir
 * 2. Renk paleti seçilir (color-system.ts)
 * 3. 3D konsepti belirlenir
 * 4. Section'lar oluşturulur
 * 5. Görseller AI ile üretilir
 */

// ─── TEK REPO: KURULU 19 PAKET → NE İŞE YARAR ───
export const INSTALLED_PACKAGES = {
  framework: {
    name: 'Next.js 16',
    package: 'next@16.1.1',
    repo: 'vercel/next.js',
    stars: '130K+',
    usage: 'Framework, SSR, API Routes, Image Optimization'
  },
  '3d-engine': {
    name: 'Three.js',
    package: 'three@0.183.2',
    repo: 'mrdoob/three.js',
    stars: '105K+',
    usage: '3D sahne, mesh, material, lighting, camera'
  },
  '3d-react': {
    name: 'React Three Fiber',
    package: '@react-three/fiber@9.5.0',
    repo: 'pmndrs/react-three-fiber',
    stars: '26K+',
    usage: 'React ile Three.js, Canvas, useFrame, useThree'
  },
  '3d-helpers': {
    name: 'Drei',
    package: '@react-three/drei@10.7.7',
    repo: 'pmndrs/drei',
    stars: '10K+',
    usage: 'Float, Sparkles, Stars, Text3D, Environment, OrbitControls'
  },
  '3d-post': {
    name: 'Postprocessing',
    package: '@react-three/postprocessing@3.0.4',
    repo: 'pmndrs/postprocessing',
    stars: '4K+',
    usage: 'Bloom, DepthOfField, Vignette, ChromaticAberration'
  },
  animation3d: {
    name: 'React Spring Three',
    package: '@react-spring/three@10.0.3',
    repo: 'pmndrs/react-spring',
    stars: '29K+',
    usage: '3D spring animasyon, fizik bazlı hareket'
  },
  timeline: {
    name: 'GSAP',
    package: 'gsap@3.14.2',
    repo: 'greensock/GSAP',
    stars: '20K+',
    usage: 'Timeline animasyon, ScrollTrigger, tween'
  },
  motion: {
    name: 'Framer Motion',
    package: 'framer-motion@12.23.2',
    repo: 'framer/motion',
    stars: '50K+',
    usage: 'React animasyon, page transition, useInView, hover'
  },
  scroll: {
    name: 'Lenis',
    package: '@studio-freight/lenis@1.0.42',
    repo: 'darkroomengineering/lenis',
    stars: '10K+',
    usage: 'Ultra-smooth scroll, scroll snap, parallax'
  },
  gesture: {
    name: 'Use Gesture',
    package: '@use-gesture/react@10.3.1',
    repo: 'pmndrs/use-gesture',
    stars: '10K+',
    usage: 'Drag, pinch, wheel interaction, 3D kontrol'
  },
  raycast: {
    name: 'Three Mesh BVH',
    package: 'three-mesh-bvh@0.9.9',
    repo: 'gkjohnson/three-mesh-bvh',
    stars: '2K+',
    usage: 'Hızlandırılmış raycasting, 3D collision'
  },
  state: {
    name: 'Zustand',
    package: 'zustand@5.0.6',
    repo: 'pmndrs/zustand',
    stars: '50K+',
    usage: 'Global state management, store'
  },
  ui: {
    name: 'shadcn/ui (Radix)',
    package: '@radix-ui/*',
    repo: 'shadcn-ui/ui',
    stars: '80K+',
    usage: 'Button, Card, Dialog, Sheet, Toast, Form, vb 48 component'
  },
  icons: {
    name: 'Lucide React',
    package: 'lucide-react@0.525.0',
    repo: 'lucide/lucide',
    stars: '10K+',
    usage: '1600+ SVG ikon, tüm section\'larda kullanılır'
  },
  theme: {
    name: 'Next Themes',
    package: 'next-themes@0.4.6',
    repo: 'pacocoursey/next-themes',
    stars: '7K+',
    usage: 'Dark/Light mode toggle'
  },
  styling: {
    name: 'Tailwind CSS 4',
    package: 'tailwindcss@4',
    repo: 'tailwindlabs/tailwindcss',
    stars: '85K+',
    usage: 'Utility-first CSS, responsive, dark mode'
  },
  database: {
    name: 'Prisma',
    package: 'prisma@6.11.1',
    repo: 'prisma/prisma',
    stars: '42K+',
    usage: 'ORM, SQLite veritabanı, schema'
  },
  email: {
    name: 'React Email',
    package: 'react-email@5.2.10',
    repo: 'resendl/react-email',
    stars: '15K+',
    usage: 'Email template builder, form gönderimi'
  },
  ai: {
    name: 'Z-AI Web Dev SDK',
    package: 'z-ai-web-dev-sdk@0.0.17',
    repo: 'z-ai/z-ai-web-dev-sdk',
    stars: 'Private',
    usage: 'LLM, VLM, Image Gen, TTS, ASR, Video, Web Search'
  }
} as const;

// ─── SEKTÖR → TEMPLATE EŞLEŞTİRMESİ ───
export type SectorType = 
  | 'luxury-beauty'
  | 'construction-architecture'
  | 'tech-startup'
  | 'restaurant-food'
  | 'art-gallery'
  | 'health-wellness'
  | 'automotive'
  | 'education'
  | 'marine-yachting'
  | 'e-commerce'
  | 'portfolio'
  | 'saas-dashboard'
  | 'real-estate'
  | 'default';

export interface SiteTemplate {
  sector: SectorType;
  sectorName: string;
  palette: string;           // color-system.ts'den palette key
  font: { heading: string; body: string };
  style: string;
  threeConcept: string;
  sections: string[];
  features: string[];
}

export const SECTOR_TEMPLATES: Record<SectorType, SiteTemplate> = {
  'luxury-beauty': {
    sector: 'luxury-beauty',
    sectorName: 'Lüks & Güzellik',
    palette: 'luxuryGold',
    font: { heading: 'Playfair Display', body: 'Inter' },
    style: 'Glassmorphism, soft glow, elegant, rose-gold',
    threeConcept: 'Distort Sphere + Gold Ring\'ler + Crystal + Parçacıklar',
    sections: ['Navbar', 'Hero3D', 'Hakkında', 'Hizmetler', 'Galeri', 'Randevu', 'İletişim', 'Footer'],
    features: ['3D sphere', 'gold particles', 'glassmorphism cards', 'smooth scroll', 'TR/EN']
  },
  'construction-architecture': {
    sector: 'construction-architecture',
    sectorName: 'İnşaat & Mimari',
    palette: 'architecturalSteel',
    font: { heading: 'Josefin Sans', body: 'Source Sans Pro' },
    style: 'Minimal, geometric, blueprints, clean lines, industrial',
    threeConcept: 'Blueprint grid + Rotating building wireframe + Construction particles',
    sections: ['Navbar', 'Hero3D', 'Hakkında', 'Projeler', 'Hizmetler', 'Referanslar', 'İletişim', 'Footer'],
    features: ['3D building wireframe', 'blueprint grid', 'counter animation', 'gallery', 'TR/EN']
  },
  'tech-startup': {
    sector: 'tech-startup',
    sectorName: 'Teknoloji & Startup',
    palette: 'auraGlow',
    font: { heading: 'Space Grotesk', body: 'DM Sans' },
    style: 'Cyberpunk, holographic, sharp, neon',
    threeConcept: 'Wireframe globe + Particle network + Hologram mesh',
    sections: ['Navbar', 'Hero3D', 'Özellikler', 'Nasıl Çalışır', 'Fiyatlandırma', 'FAQ', 'CTA', 'Footer'],
    features: ['3D globe', 'particle network', 'glassmorphism', 'animated counters', 'TR/EN']
  },
  'restaurant-food': {
    sector: 'restaurant-food',
    sectorName: 'Restoran & Yemek',
    palette: 'cinematicRed',
    font: { heading: 'Cormorant Garamond', body: 'Lato' },
    style: 'Warm, cinematic, depth of field',
    threeConcept: 'Floating elements + Steam particles + Warm lighting',
    sections: ['Navbar', 'Hero3D', 'Menü', 'Galeri', 'Şef', 'Rezervasyon', 'İletişim', 'Footer'],
    features: ['3D floating plates', 'steam particles', 'menu cards', 'parallax gallery', 'TR/EN']
  },
  'art-gallery': {
    sector: 'art-gallery',
    sectorName: 'Sanat & Galeri',
    palette: 'galaxyPurple',
    font: { heading: 'Syne', body: 'IBM Plex Sans' },
    style: 'Bold, experimental, kinetic typography',
    threeConcept: 'Floating frames + Light beams + Gallery walls',
    sections: ['Navbar', 'Hero3D', 'Sergi', 'Sanatçılar', 'Etkinlikler', 'İletişim', 'Footer'],
    features: ['3D floating frames', 'light beams', 'hover gallery', 'kinetic text', 'TR/EN']
  },
  'health-wellness': {
    sector: 'health-wellness',
    sectorName: 'Sağlık & Wellness',
    palette: 'organicGreen',
    font: { heading: 'Fraunces', body: 'Work Sans' },
    style: 'Clean, organic, rounded, soft',
    threeConcept: 'Organic shapes + DNA helix + Breathing animation',
    sections: ['Navbar', 'Hero3D', 'Hizmetler', 'Uzmanlar', 'Programlar', 'Randevu', 'İletişim', 'Footer'],
    features: ['3D organic shapes', 'breathing animation', 'soft cards', 'booking form', 'TR/EN']
  },
  'automotive': {
    sector: 'automotive',
    sectorName: 'Otomotiv',
    palette: 'cinematicRed',
    font: { heading: 'Orbitron', body: 'Barlow Condensed' },
    style: 'Aggressive, sharp, fast',
    threeConcept: 'Car wireframe + Speed particles + Dynamic camera',
    sections: ['Navbar', 'Hero3D', 'Modeller', 'Performans', 'Galeri', 'İletişim', 'Footer'],
    features: ['3D car wireframe', 'speed particles', 'dynamic camera', 'specs animation', 'TR/EN']
  },
  'education': {
    sector: 'education',
    sectorName: 'Eğitim & Üniversite',
    palette: 'architecturalSteel',
    font: { heading: 'Merriweather', body: 'Open Sans' },
    style: 'Trustworthy, academic, clean',
    threeConcept: 'Book mesh + Floating icons + Graduation cap',
    sections: ['Navbar', 'Hero3D', 'Programlar', 'Akademisyenler', 'Kampüs', 'Başvuru', 'Footer'],
    features: ['3D graduation cap', 'floating icons', 'program cards', 'application form', 'TR/EN']
  },
  'marine-yachting': {
    sector: 'marine-yachting',
    sectorName: 'Deniz & Yachting',
    palette: 'oceanBlue',
    font: { heading: 'Cinzel', body: 'Raleway' },
    style: 'Elegant, nautical, premium',
    threeConcept: 'Wave mesh + Floating boat + Water particles',
    sections: ['Navbar', 'Hero3D', 'Filomuz', 'Rotalar', 'Galeri', 'Rezervasyon', 'İletişim', 'Footer'],
    features: ['3D wave mesh', 'boat model', 'water particles', 'route map', 'TR/EN']
  },
  'e-commerce': {
    sector: 'e-commerce',
    sectorName: 'E-Ticaret',
    palette: 'luxuryGold',
    font: { heading: 'Playfair Display', body: 'Inter' },
    style: 'Premium shopping, clean product cards',
    threeConcept: 'Product showcase + Sparkles + Floating boxes',
    sections: ['Navbar', 'Hero3D', 'Kategoriler', 'Ürünler', 'Kampanyalar', 'Hakkımızda', 'Footer'],
    features: ['3D product view', 'product cards', 'cart system', 'sparkles', 'TR/EN']
  },
  'portfolio': {
    sector: 'portfolio',
    sectorName: 'Portfolio & CV',
    palette: 'galaxyPurple',
    font: { heading: 'Syne', body: 'DM Sans' },
    style: 'Creative, minimal, experimental',
    threeConcept: 'Interactive portfolio + Particle text + Morph shapes',
    sections: ['Navbar', 'Hero3D', 'Projeler', 'Yetenekler', 'Deneyim', 'İletişim', 'Footer'],
    features: ['3D morphing shapes', 'project cards', 'skill bars', 'timeline', 'TR/EN']
  },
  'saas-dashboard': {
    sector: 'saas-dashboard',
    sectorName: 'SaaS Dashboard',
    palette: 'auraGlow',
    font: { heading: 'Space Grotesk', body: 'Inter' },
    style: 'Clean, data-driven, modern UI',
    threeConcept: 'Data visualization + Animated charts + Globe',
    sections: ['Navbar', 'Hero3D', 'Özellikler', 'Fiyatlandırma', 'Entegrasyonlar', 'CTA', 'Footer'],
    features: ['3D data globe', 'animated charts', 'pricing cards', 'integration logos', 'TR/EN']
  },
  'real-estate': {
    sector: 'real-estate',
    sectorName: 'Gayrimenkul',
    palette: 'luxuryGold',
    font: { heading: 'Playfair Display', body: 'Inter' },
    style: 'Premium, trustworthy, elegant',
    threeConcept: 'Building wireframe + Map + Golden particles',
    sections: ['Navbar', 'Hero3D', 'Vitrin', 'Projeler', 'Hizmetler', 'İletişim', 'Footer'],
    features: ['3D building', 'property cards', 'map section', 'search filter', 'TR/EN']
  },
  'default': {
    sector: 'default',
    sectorName: 'Genel',
    palette: 'auraGlow',
    font: { heading: 'Space Grotesk', body: 'Inter' },
    style: 'Modern, clean, professional',
    threeConcept: 'Geometric shapes + Particles + Glow effects',
    sections: ['Navbar', 'Hero3D', 'Hakkında', 'Hizmetler', 'Galeri', 'İletişim', 'Footer'],
    features: ['3D geometric shapes', 'particles', 'glassmorphism', 'smooth scroll', 'TR/EN']
  }
};

// ─── KONU → SEKTÖR EŞLEŞTİRME ───
const TOPIC_SECTOR_MAP: Record<string, SectorType> = {
  // Lüks & Güzellik
  'güzellik': 'luxury-beauty', 'beauty': 'luxury-beauty', 'salon': 'luxury-beauty',
  'kuaför': 'luxury-beauty', 'saç': 'luxury-beauty', 'hair': 'luxury-beauty',
  'kozmetik': 'luxury-beauty', 'makyaj': 'luxury-beauty', 'moda': 'luxury-beauty',
  'spa': 'luxury-beauty', 'cilt bakımı': 'luxury-beauty', 'estetik': 'luxury-beauty',
  
  // İnşaat & Mimari
  'inşaat': 'construction-architecture', 'villa': 'construction-architecture',
  'mimari': 'construction-architecture', 'yapı': 'construction-architecture',
  'ofis': 'construction-architecture', 'iç mimarlık': 'construction-architecture',
  'dekorasyon': 'construction-architecture', 'construction': 'construction-architecture',
  'architecture': 'construction-architecture',
  
  // Teknoloji & Startup
  'teknoloji': 'tech-startup', 'startup': 'tech-startup', 'saas': 'tech-startup',
  'ai': 'tech-startup', 'yapay zeka': 'tech-startup', 'fintech': 'tech-startup',
  'yazılım': 'tech-startup', 'software': 'tech-startup', 'blockchain': 'tech-startup',
  'crypto': 'tech-startup', 'app': 'tech-startup', 'mobil': 'tech-startup',
  
  // Restoran & Yemek
  'restoran': 'restaurant-food', 'yemek': 'restaurant-food', 'cafe': 'restaurant-food',
  'kahve': 'restaurant-food', 'bar': 'restaurant-food', 'dining': 'restaurant-food',
  'fine dining': 'restaurant-food', 'pizza': 'restaurant-food', 'sushi': 'restaurant-food',
  
  // Sanat & Galeri
  'sanat': 'art-gallery', 'galeri': 'art-gallery', 'müze': 'art-gallery',
  'sergi': 'art-gallery', 'portfolio': 'portfolio', 'fotograf': 'art-gallery',
  'müzik': 'art-gallery', 'tasarım': 'art-gallery', 'design': 'art-gallery',
  
  // Sağlık & Wellness
  'sağlık': 'health-wellness', 'hastane': 'health-wellness', 'gym': 'health-wellness',
  'yoga': 'health-wellness', 'spor': 'health-wellness', 'wellness': 'health-wellness',
  'diyet': 'health-wellness', 'psikolog': 'health-wellness', 'klinik': 'health-wellness',
  
  // Otomotiv
  'otomotiv': 'automotive', 'araba': 'automotive', 'oto': 'automotive',
  'motorsiklet': 'automotive', 'araba galeri': 'automotive', 'rent a car': 'automotive',
  
  // Eğitim
  'eğitim': 'education', 'üniversite': 'education', 'kurs': 'education',
  'okul': 'education', 'akademi': 'education', 'lise': 'education',
  
  // Deniz & Yachting
  'deniz': 'marine-yachting', 'yachting': 'marine-yachting', 'marina': 'marine-yachting',
  'tekne': 'marine-yachting', 'gulet': 'marine-yachting', 'yat': 'marine-yachting',
  'balıkçılık': 'marine-yachting',
  
  // E-Ticaret
  'e-ticaret': 'e-commerce', 'mağaza': 'e-commerce', 'shop': 'e-commerce',
  'market': 'e-commerce', 'alışveriş': 'e-commerce', 'butik': 'e-commerce',
  
  // Gayrimenkul
  'emlak': 'real-estate', 'gayrimenkul': 'real-estate', 'daire': 'real-estate',
  'konut': 'real-estate', 'kiralık': 'real-estate', 'satılık': 'real-estate',
  'lüks': 'real-estate', 'luxury': 'real-estate', 'real estate': 'real-estate',
  
  // SaaS Dashboard
  'dashboard': 'saas-dashboard', 'CRM': 'saas-dashboard', 'ERP': 'saas-dashboard',
  'analytics': 'saas-dashboard', 'yönetim': 'saas-dashboard', 'admin': 'saas-dashboard',
};

/**
 * Konu metninden sektör template'ini bul
 */
export function getTemplateForTopic(topic: string): SiteTemplate {
  const lower = topic.toLowerCase().trim();
  
  // Doğrudan eşleşme
  for (const [keyword, sector] of Object.entries(TOPIC_SECTOR_MAP)) {
    if (lower.includes(keyword)) {
      return SECTOR_TEMPLATES[sector];
    }
  }
  
  // Varsayılan
  return SECTOR_TEMPLATES['default'];
}

/**
 * Site config oluştur - tema komutu için tüm bilgi tek yerde
 */
export function generateFullSiteConfig(topic: string) {
  const template = getTemplateForTopic(topic);
  
  return {
    topic,
    template,
    packages: INSTALLED_PACKAGES,
    cleanupScript: 'scripts/cleanup-site.sh',
    structure: {
      permanent: [
        'knowledge-base/',
        'CLAUDE.md',
        'src/lib/color-system.ts',
        'src/lib/repo-capabilities.ts',
        'src/lib/site-template.ts',
        'src/lib/utils.ts',
        'src/lib/db.ts',
        'src/hooks/',
        'src/components/ui/',
        'package.json',
        'prisma/',
        'scripts/',
      ],
      temporary: [
        'src/app/page.tsx',
        'src/app/layout.tsx',
        'src/app/globals.css',
        'src/components/sections/',
        'src/components/three/',
        'public/images/',
        'src/lib/language-store.ts',
      ]
    }
  };
}

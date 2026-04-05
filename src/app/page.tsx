'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain, Palette, Package, Layers, Trash2, Sparkles, 
  Globe, Zap, Shield, Code2, Eye, Cpu, Database,
  ChevronDown, ChevronUp, ExternalLink, AlertTriangle,
  CheckCircle2, Loader2, Search, Box, Cuboid, Settings
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// ─── VERİ TİPLERİ ───
interface PackageInfo {
  role: string;
  name: string;
  package: string;
  repo: string;
  stars: string;
  usage: string;
}

interface ColorPalette {
  id: string;
  name: string;
  why: string;
  colors: Record<string, string> | string[];
}

interface SitePlan {
  input: { topic: string; detectedSector: string };
  template: {
    sector: string;
    sectorName: string;
    style: string;
    threeConcept: string;
    sections: string[];
    features: string[];
    font: { heading: string; body: string };
  };
  colorPalette: {
    name: string;
    colors: Record<string, string>;
    gradient: string;
    glowEffect: string;
  };
  packages: PackageInfo[];
  availablePalettes: ColorPalette[];
}

interface SectorInfo {
  id: string;
  name: string;
  style: string;
  threeConcept: string;
  sections: string[];
  palette: string;
}

// ─── 19 KURULU PAKET ───
const PACKAGES: PackageInfo[] = [
  { role: 'Framework', name: 'Next.js 16', package: 'next@16.1.1', repo: 'vercel/next.js', stars: '130K+', usage: 'Framework, SSR, API Routes, Image Optimization' },
  { role: '3D Motor', name: 'Three.js', package: 'three@0.183.2', repo: 'mrdoob/three.js', stars: '105K+', usage: '3D sahne, mesh, material, lighting, camera' },
  { role: '3D React', name: 'React Three Fiber', package: '@react-three/fiber@9.5.0', repo: 'pmndrs/react-three-fiber', stars: '26K+', usage: 'Canvas, useFrame, useThree, React 3D' },
  { role: '3D Helper', name: 'Drei', package: '@react-three/drei@10.7.7', repo: 'pmndrs/drei', stars: '10K+', usage: 'Float, Sparkles, Stars, Text3D, Environment' },
  { role: '3D Post', name: 'Postprocessing', package: '@react-three/postprocessing@3.0.4', repo: 'pmndrs/postprocessing', stars: '4K+', usage: 'Bloom, DepthOfField, Vignette' },
  { role: '3D Animasyon', name: 'React Spring', package: '@react-spring/three@10.0.3', repo: 'pmndrs/react-spring', stars: '29K+', usage: 'Spring animasyon, fizik bazlı hareket' },
  { role: 'Timeline', name: 'GSAP', package: 'gsap@3.14.2', repo: 'greensock/GSAP', stars: '20K+', usage: 'Timeline animasyon, ScrollTrigger' },
  { role: 'Motion', name: 'Framer Motion', package: 'framer-motion@12.23.2', repo: 'framer/motion', stars: '50K+', usage: 'React animasyon, page transition, useInView' },
  { role: 'Smooth Scroll', name: 'Lenis', package: '@studio-freight/lenis@1.0.42', repo: 'darkroomengineering/lenis', stars: '10K+', usage: 'Ultra-smooth scroll, parallax' },
  { role: 'Gesture', name: 'Use Gesture', package: '@use-gesture/react@10.3.1', repo: 'pmndrs/use-gesture', stars: '10K+', usage: 'Drag, pinch, wheel interaction' },
  { role: 'Raycasting', name: 'Three Mesh BVH', package: 'three-mesh-bvh@0.9.9', repo: 'gkjohnson/three-mesh-bvh', stars: '2K+', usage: 'Hızlandırılmış raycasting' },
  { role: 'State', name: 'Zustand', package: 'zustand@5.0.6', repo: 'pmndrs/zustand', stars: '50K+', usage: 'Global state management' },
  { role: 'UI', name: 'shadcn/ui', package: '@radix-ui/*', repo: 'shadcn-ui/ui', stars: '80K+', usage: '48 component: Button, Card, Dialog...' },
  { role: 'Ikon', name: 'Lucide React', package: 'lucide-react@0.525.0', repo: 'lucide/lucide', stars: '10K+', usage: '1600+ SVG ikon' },
  { role: 'Theme', name: 'Next Themes', package: 'next-themes@0.4.6', repo: 'pacocoursey/next-themes', stars: '7K+', usage: 'Dark/Light mode toggle' },
  { role: 'Styling', name: 'Tailwind CSS 4', package: 'tailwindcss@4', repo: 'tailwindlabs/tailwindcss', stars: '85K+', usage: 'Utility-first CSS, responsive' },
  { role: 'Database', name: 'Prisma', package: 'prisma@6.11.1', repo: 'prisma/prisma', stars: '42K+', usage: 'ORM, SQLite veritabanı' },
  { role: 'Email', name: 'React Email', package: 'react-email@5.2.10', repo: 'resendl/react-email', stars: '15K+', usage: 'Email template builder' },
  { role: 'AI SDK', name: 'Z-AI SDK', package: 'z-ai-web-dev-sdk@0.0.17', repo: 'z-ai/z-ai-web-dev-sdk', stars: 'Private', usage: 'LLM, VLM, Image Gen, TTS, ASR, Video' },
];

// ─── 14 SEKTÖR TEMPLATE'İ ───
const SECTORS: SectorInfo[] = [
  { id: 'luxury-beauty', name: 'Lüks & Güzellik', style: 'Glassmorphism, soft glow, elegant', threeConcept: 'Distort Sphere + Gold Ring\'ler + Crystal', sections: ['Navbar','Hero3D','Hakkında','Hizmetler','Galeri','Randevu','İletişim','Footer'], palette: 'Luxury Gold' },
  { id: 'construction-architecture', name: 'İnşaat & Mimari', style: 'Minimal, geometric, blueprints', threeConcept: 'Blueprint grid + Building wireframe', sections: ['Navbar','Hero3D','Hakkında','Projeler','Hizmetler','Referanslar','İletişim','Footer'], palette: 'Architectural Steel' },
  { id: 'tech-startup', name: 'Teknoloji & Startup', style: 'Cyberpunk, holographic, neon', threeConcept: 'Wireframe globe + Particle network', sections: ['Navbar','Hero3D','Özellikler','Nasıl Çalışır','Fiyatlandırma','FAQ','CTA','Footer'], palette: 'Aura Glow' },
  { id: 'restaurant-food', name: 'Restoran & Yemek', style: 'Warm, cinematic, depth', threeConcept: 'Floating elements + Steam particles', sections: ['Navbar','Hero3D','Menü','Galeri','Şef','Rezervasyon','İletişim','Footer'], palette: 'Cinematic Red' },
  { id: 'art-gallery', name: 'Sanat & Galeri', style: 'Bold, experimental, kinetic', threeConcept: 'Floating frames + Light beams', sections: ['Navbar','Hero3D','Sergi','Sanatçılar','Etkinlikler','İletişim','Footer'], palette: 'Galaxy Purple' },
  { id: 'health-wellness', name: 'Sağlık & Wellness', style: 'Clean, organic, rounded', threeConcept: 'Organic shapes + DNA helix', sections: ['Navbar','Hero3D','Hizmetler','Uzmanlar','Programlar','Randevu','İletişim','Footer'], palette: 'Organic Green' },
  { id: 'automotive', name: 'Otomotiv', style: 'Aggressive, sharp, fast', threeConcept: 'Car wireframe + Speed particles', sections: ['Navbar','Hero3D','Modeller','Performans','Galeri','İletişim','Footer'], palette: 'Cinematic Red' },
  { id: 'education', name: 'Eğitim & Üniversite', style: 'Trustworthy, academic, clean', threeConcept: 'Book mesh + Graduation cap', sections: ['Navbar','Hero3D','Programlar','Akademisyenler','Kampüs','Başvuru','Footer'], palette: 'Architectural Steel' },
  { id: 'marine-yachting', name: 'Deniz & Yachting', style: 'Elegant, nautical, premium', threeConcept: 'Wave mesh + Boat + Water particles', sections: ['Navbar','Hero3D','Filomuz','Rotalar','Galeri','Rezervasyon','İletişim','Footer'], palette: 'Ocean Blue' },
  { id: 'e-commerce', name: 'E-Ticaret', style: 'Premium shopping, clean cards', threeConcept: 'Product showcase + Sparkles', sections: ['Navbar','Hero3D','Kategoriler','Ürünler','Kampanyalar','Hakkımızda','Footer'], palette: 'Luxury Gold' },
  { id: 'portfolio', name: 'Portfolio & CV', style: 'Creative, minimal, experimental', threeConcept: 'Particle text + Morph shapes', sections: ['Navbar','Hero3D','Projeler','Yetenekler','Deneyim','İletişim','Footer'], palette: 'Galaxy Purple' },
  { id: 'saas-dashboard', name: 'SaaS Dashboard', style: 'Clean, data-driven, modern', threeConcept: 'Data visualization + Globe', sections: ['Navbar','Hero3D','Özellikler','Fiyatlandırma','Entegrasyonlar','CTA','Footer'], palette: 'Aura Glow' },
  { id: 'real-estate', name: 'Gayrimenkul', style: 'Premium, trustworthy, elegant', threeConcept: 'Building wireframe + Golden particles', sections: ['Navbar','Hero3D','Vitrin','Projeler','Hizmetler','İletişim','Footer'], palette: 'Luxury Gold' },
];

// ─── ANA KOMPONENT ───
export default function Home() {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SitePlan | null>(null);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

  // Tema analiz et
  const analyzeTopic = useCallback(async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch('/api/tema', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: topic.trim() }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResult(data);
      setActiveTab('result');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Analiz başarısız');
    } finally {
      setLoading(false);
    }
  }, [topic]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0F] text-[#F8FAFC]">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,212,255,0.06)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(124,58,237,0.04)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.02)_0%,transparent_60%)]" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0A0A0F]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#7C3AED] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-base font-heading font-semibold tracking-tight">NOVA AI</h1>
              <p className="text-[10px] text-[#94A3B8] -mt-0.5">Web Site Üretim Sistemi v1.0</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-[#00D4FF]/30 text-[#00D4FF] text-xs">
              <Cpu className="w-3 h-3 mr-1" /> 19 Paket
            </Badge>
            <Badge variant="outline" className="border-[#7C3AED]/30 text-[#7C3AED] text-xs">
              <Database className="w-3 h-3 mr-1" /> 777+ Repo
            </Badge>
            <Badge variant="outline" className="border-[#00FF88]/30 text-[#00FF88] text-xs">
              <Globe className="w-3 h-3 mr-1" /> 14 Sektör
            </Badge>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab}>

            {/* Tab Navigation */}
            <TabsList className="bg-white/[0.04] border border-white/[0.06] mb-8 w-full sm:w-auto">
              <TabsTrigger value="overview" className="data-[state=active]:bg-[#00D4FF]/10 data-[state=active]:text-[#00D4FF]">
                <Eye className="w-4 h-4 mr-1.5" /> Genel Bakış
              </TabsTrigger>
              <TabsTrigger value="result" className="data-[state=active]:bg-[#7C3AED]/10 data-[state=active]:text-[#7C3AED]" disabled={!result}>
                <Zap className="w-4 h-4 mr-1.5" /> Sonuç
              </TabsTrigger>
            </TabsList>

            {/* ===== TAB 1: GENEL BAKIŞ ===== */}
            <TabsContent value="overview" className="space-y-6">

              {/* Hero: Tema Giriş */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-white/[0.03] border-white/[0.06] backdrop-blur-sm overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/5 via-transparent to-[#7C3AED]/5 pointer-events-none" />
                  <CardHeader className="pb-4 relative">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="w-5 h-5 text-[#00D4FF]" />
                      <CardTitle className="text-xl font-heading">AI Site Üretici</CardTitle>
                    </div>
                    <CardDescription className="text-[#94A3B8]">
                      Konu yaz, sistem otomatik sektörü, renk paletini, 3D konsepti ve section planını oluştur.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="flex gap-3">
                      <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                        <Input
                          value={topic}
                          onChange={(e) => setTopic(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && analyzeTopic()}
                          placeholder='Örnek: "villa inşaatı Ankara", "lüks güzellik salonu", "SaaS startup"'
                          className="pl-10 bg-white/[0.04] border-white/[0.08] text-white placeholder:text-[#475569] h-11 focus:border-[#00D4FF]/50"
                        />
                      </div>
                      <Button
                        onClick={analyzeTopic}
                        disabled={loading || !topic.trim()}
                        className="bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] hover:opacity-90 text-white h-11 px-6 font-medium"
                      >
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4 mr-1.5" />}
                        {loading ? 'Analiz...' : 'Analiz Et'}
                      </Button>
                    </div>
                    {error && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 flex items-center gap-2 text-red-400 text-sm">
                        <AlertTriangle className="w-4 h-4" />
                        {error}
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              {/* İstatistik Kartları */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Package, label: 'Kurulu Paket', value: '19', color: '#00D4FF', desc: 'npm install ile aktif' },
                  { icon: Code2, label: 'GitHub Repo', value: '777+', color: '#7C3AED', desc: 'Referans + bilgi' },
                  { icon: Layers, label: 'Sektör Template', value: '14', color: '#00FF88', desc: 'Otomatik eşleşme' },
                  { icon: Palette, label: 'Renk Paleti', value: '10', color: '#F97316', desc: 'Video analizinden' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Card className="bg-white/[0.03] border-white/[0.06] h-full">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <stat.icon className="w-4 h-4" style={{ color: stat.color }} />
                          <span className="text-xs text-[#94A3B8]">{stat.label}</span>
                        </div>
                        <div className="text-2xl font-heading font-bold" style={{ color: stat.color }}>{stat.value}</div>
                        <div className="text-[10px] text-[#64748B] mt-0.5">{stat.desc}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Sistem Yapısı: KALICI vs GEÇİCİ */}
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="bg-white/[0.03] border-white/[0.06]">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#00FF88]" />
                      <CardTitle className="text-sm font-heading">Sistem Dosyaları (KALICI)</CardTitle>
                      <Badge className="bg-[#00FF88]/10 text-[#00FF88] border-0 text-[10px]">ASLA SİLİNMEZ</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-1.5 text-xs">
                    {[
                      'knowledge-base/', 'CLAUDE.md (AI beyni)',
                      'src/lib/color-system.ts', 'src/lib/site-template.ts',
                      'src/lib/repo-capabilities.ts', 'src/lib/utils.ts, db.ts',
                      'src/hooks/ (use-lenis, use-mobile, use-scroll-reveal)',
                      'src/components/ui/ (48 shadcn component)',
                      'package.json (19 paket)', 'prisma/', 'scripts/',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-[#94A3B8]">
                        <CheckCircle2 className="w-3 h-3 text-[#00FF88] shrink-0" />
                        <code className="text-[11px]">{item}</code>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-white/[0.03] border-white/[0.06]">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Trash2 className="w-4 h-4 text-[#F97316]" />
                      <CardTitle className="text-sm font-heading">Site Dosyaları (GEÇİCİ)</CardTitle>
                      <Badge className="bg-[#F97316]/10 text-[#F97316] border-0 text-[10px]">SİL DİYİNCE GİDER</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-1.5 text-xs">
                    {[
                      'src/app/page.tsx', 'src/app/layout.tsx', 'src/app/globals.css',
                      'src/components/sections/', 'src/components/three/',
                      'public/images/', 'src/lib/language-store.ts',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-[#94A3B8]">
                        <AlertTriangle className="w-3 h-3 text-[#F97316] shrink-0" />
                        <code className="text-[11px]">{item}</code>
                      </div>
                    ))}
                    <Separator className="bg-white/[0.06] my-2" />
                    <div className="text-[10px] text-[#64748B]">
                      &quot;tema [konu]&quot; yazıldığında otomatik temizlenip yeniden oluşturulur.
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 19 Kurulu Paket */}
              <Card className="bg-white/[0.03] border-white/[0.06]">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Box className="w-4 h-4 text-[#00D4FF]" />
                    <CardTitle className="text-sm font-heading">Tek Repo: 19 Kurulu Paket</CardTitle>
                    <Badge className="bg-[#00D4FF]/10 text-[#00D4FF] border-0 text-[10px]">
                      HER ŞEY BURADA
                    </Badge>
                  </div>
                  <CardDescription className="text-[#94A3B8] text-xs">
                    Başka repo kurmaya gerek yok. Bu 19 paket ile HER TÜRLÜ Awwwards-seviye site üretilebilir.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {PACKAGES.map((pkg, i) => (
                      <motion.div
                        key={pkg.role}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.03 }}
                        className="bg-white/[0.03] border border-white/[0.04] rounded-lg p-3 hover:bg-white/[0.06] transition-colors"
                      >
                        <div className="flex items-start justify-between mb-1.5">
                          <span className="text-xs font-semibold text-white">{pkg.name}</span>
                          <Badge variant="outline" className="text-[9px] border-white/[0.08] text-[#94A3B8]">
                            {pkg.stars}
                          </Badge>
                        </div>
                        <code className="text-[10px] text-[#64748B] block mb-1">{pkg.package}</code>
                        <p className="text-[10px] text-[#94A3B8] leading-relaxed">{pkg.usage}</p>
                        <a
                          href={`https://github.com/${pkg.repo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[9px] text-[#00D4FF]/70 hover:text-[#00D4FF] mt-1.5"
                        >
                          github.com/{pkg.repo} <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 14 Sektör Template */}
              <Card className="bg-white/[0.03] border-white/[0.06]">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Cuboid className="w-4 h-4 text-[#7C3AED]" />
                    <CardTitle className="text-sm font-heading">14 Sektör Template</CardTitle>
                  </div>
                  <CardDescription className="text-[#94A3B8] text-xs">
                    &quot;tema [konu]&quot; yazıldığında otomatik eşleşir. Her template kendi renk paletini, 3D konseptini ve section planını içerir.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                    {SECTORS.map((sector, i) => (
                      <motion.div
                        key={sector.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.04 }}
                        onClick={() => { setTopic(sector.name); }}
                        className="bg-white/[0.03] border border-white/[0.04] rounded-lg p-3 hover:bg-white/[0.06] hover:border-white/[0.08] transition-all cursor-pointer group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-white group-hover:text-[#00D4FF] transition-colors">
                            {sector.name}
                          </span>
                          <Badge variant="outline" className="text-[9px] border-white/[0.06]">
                            {sector.palette}
                          </Badge>
                        </div>
                        <p className="text-[10px] text-[#94A3B8] mb-2">{sector.style}</p>
                        <div className="text-[9px] text-[#64748B]">
                          3D: {sector.threeConcept}
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {sector.sections.slice(0, 4).map((s) => (
                            <Badge key={s} className="text-[8px] bg-white/[0.04] border-0 text-[#64748B] px-1.5 py-0">
                              {s}
                            </Badge>
                          ))}
                          {sector.sections.length > 4 && (
                            <Badge className="text-[8px] bg-white/[0.04] border-0 text-[#64748B] px-1.5 py-0">
                              +{sector.sections.length - 4}
                            </Badge>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

            </TabsContent>

            {/* ===== TAB 2: SONUÇ ===== */}
            <TabsContent value="result">
              {result && <ResultPanel result={result} />}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] bg-[#0A0A0F]/80 backdrop-blur-xl py-4 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between text-xs text-[#64748B]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-[#00D4FF]" />
            <span>NOVA AI Web Site Üretim Sistemi</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Tek Repo: 19 Paket</span>
            <span className="text-[#475569]">|</span>
            <span>777+ GitHub Referans</span>
            <span className="text-[#475569]">|</span>
            <span>14 Sektör Template</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─── SONUÇ PANELİ ───
function ResultPanel({ result }: { result: SitePlan }) {
  const [expandedPackage, setExpandedPackage] = useState(false);

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        {/* Tespit Edilen */}
        <Card className="bg-white/[0.03] border-[#00D4FF]/20">
          <CardContent className="p-6">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className="bg-[#00D4FF]/10 text-[#00D4FF] border-0 text-sm px-3 py-1">
                {result.input.detectedSector}
              </Badge>
              <span className="text-sm text-[#94A3B8]">
                Konu: <span className="text-white font-medium">&quot;{result.input.topic}&quot;</span>
              </span>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {/* Renk Paleti */}
              <div className="bg-white/[0.03] rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Palette className="w-4 h-4 text-[#F97316]" />
                  <span className="text-xs font-semibold">Renk Paleti: {result.colorPalette.name}</span>
                </div>
                <div className="flex gap-1.5 flex-wrap">
                  {Object.entries(result.colorPalette.colors).slice(0, 6).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div
                        className="w-8 h-8 rounded-md border border-white/10"
                        style={{ backgroundColor: value as string }}
                      />
                      <span className="text-[8px] text-[#64748B] block mt-0.5">{key}</span>
                    </div>
                  ))}
                </div>
                <div
                  className="h-3 rounded-full mt-3"
                  style={{ background: result.colorPalette.gradient }}
                />
              </div>

              {/* 3D Konsept */}
              <div className="bg-white/[0.03] rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Cuboid className="w-4 h-4 text-[#7C3AED]" />
                  <span className="text-xs font-semibold">3D Konsept</span>
                </div>
                <p className="text-xs text-[#94A3B8]">{result.template.threeConcept}</p>
                <div className="mt-3 space-y-1">
                  <span className="text-[10px] text-[#64748B]">Font: {result.template.font.heading} + {result.template.font.body}</span>
                </div>
              </div>

              {/* Section Planı */}
              <div className="bg-white/[0.03] rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4 text-[#00FF88]" />
                  <span className="text-xs font-semibold">Section Planı ({result.template.sections.length})</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {result.template.sections.map((s, i) => (
                    <Badge key={s} className="text-[9px] bg-white/[0.04] border-0 text-[#94A3B8] px-1.5 py-0">
                      {i + 1}. {s}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mt-4">
              <span className="text-[10px] text-[#64748B] mb-2 block">Özellikler:</span>
              <div className="flex flex-wrap gap-1.5">
                {result.template.features.map((f) => (
                  <Badge key={f} className="text-[9px] bg-[#00D4FF]/5 text-[#00D4FF] border-[#00D4FF]/20">
                    {f}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Paket Listesi */}
      <Card className="bg-white/[0.03] border-white/[0.06]">
        <CardHeader className="pb-3 cursor-pointer" onClick={() => setExpandedPackage(!expandedPackage)}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Box className="w-4 h-4 text-[#00D4FF]" />
              <CardTitle className="text-sm font-heading">Kullanılacak {result.packages.length} Paket</CardTitle>
            </div>
            {expandedPackage ? <ChevronUp className="w-4 h-4 text-[#64748B]" /> : <ChevronDown className="w-4 h-4 text-[#64748B]" />}
          </div>
        </CardHeader>
        <AnimatePresence>
          {expandedPackage && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {result.packages.map((pkg) => (
                    <div key={pkg.role} className="bg-white/[0.02] rounded-md p-2.5 border border-white/[0.04]">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium">{pkg.name}</span>
                        <span className="text-[9px] text-[#64748B]">{pkg.stars}</span>
                      </div>
                      <p className="text-[10px] text-[#94A3B8] mt-0.5">{pkg.usage}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>

      {/* Alternatif Paletler */}
      {result.availablePalettes && result.availablePalettes.length > 0 && (
        <Card className="bg-white/[0.03] border-white/[0.06]">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-[#F97316]" />
              <CardTitle className="text-sm font-heading">Mevcut {result.availablePalettes.length} Renk Paleti</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {result.availablePalettes.map((palette) => {
                const colors = 'colors' in palette && typeof palette.colors === 'object' && !Array.isArray(palette.colors)
                  ? Object.values(palette.colors) as string[]
                  : palette.colors as string[];
                return (
                  <div key={palette.id} className="bg-white/[0.02] rounded-lg p-3 border border-white/[0.04]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium">{palette.name}</span>
                    </div>
                    <div className="flex gap-1">
                      {colors.slice(0, 7).map((c, ci) => (
                        <div key={ci} className="w-5 h-5 rounded-sm" style={{ backgroundColor: c }} />
                      ))}
                    </div>
                    <p className="text-[9px] text-[#64748B] mt-1.5">{palette.why}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

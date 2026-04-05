#!/bin/bash
# ============================================================
# NOVA Digital Arts - Site Cleanup Script
# Mevcut siteyi temizler, framework dosyalarını korur
# Kullanım: bash scripts/cleanup.sh
# ============================================================

set -e

PROJECT_DIR="/home/z/my-project"
echo "========================================="
echo "  NOVA Digital Arts - Site Cleanup"
echo "========================================="
echo ""

cd "$PROJECT_DIR"

# Dev server'ı durdur
echo "[1/6] Dev server durduruluyor..."
pkill -f "next dev" 2>/dev/null || true
sleep 2
echo "  ✅ Durdu"

# Section bileşenlerini temizle
echo "[2/6] Section bileşenleri temizleniyor..."
rm -f src/components/sections/Navbar.tsx 2>/dev/null || true
rm -f src/components/sections/HeroSection.tsx 2>/dev/null || true
rm -f src/components/sections/AboutSection.tsx 2>/dev/null || true
rm -f src/components/sections/ServicesSection.tsx 2>/dev/null || true
rm -f src/components/sections/GallerySection.tsx 2>/dev/null || true
rm -f src/components/sections/BookingSection.tsx 2>/dev/null || true
rm -f src/components/sections/ContactSection.tsx 2>/dev/null || true
rm -f src/components/sections/Footer.tsx 2>/dev/null || true
rm -f src/components/sections/FloatingButtons.tsx 2>/dev/null || true
rm -f src/components/sections/*.tsx 2>/dev/null || true
echo "  ✅ Temizlendi"

# Three.js bileşenlerini temizle
echo "[3/6] Three.js bileşenleri temizleniyor..."
rm -f src/components/three/Scene3D.tsx 2>/dev/null || true
rm -f src/components/three/Hero3D.tsx 2>/dev/null || true
rm -f src/components/three/FloatingShapes.tsx 2>/dev/null || true
rm -f src/components/three/*.tsx 2>/dev/null || true
echo "  ✅ Temizlendi"

# Görselleri temizle
echo "[4/6] Görseller temizleniyor..."
rm -f public/images/*.png 2>/dev/null || true
rm -f public/images/*.jpg 2>/dev/null || true
rm -f public/images/*.webp 2>/dev/null || true
rm -f public/images/*.svg 2>/dev/null || true
echo "  ✅ Temizlendi"

# Language store'u temizle
echo "[5/6] Language store temizleniyor..."
rm -f src/lib/language-store.ts 2>/dev/null || true
echo "  ✅ Temizlendi"

# page.tsx ve globals.css sıfırla
echo "[6/6] Ana dosyalar sıfırlanıyor..."
cat > src/app/page.tsx << 'PAGETEMPLATE'
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-dark">
      <main className="flex-1" />
    </div>
  );
}
PAGETEMPLATE
echo "  ✅ page.tsx sıfırlandı"

# Dev log'u temizle
> dev.log 2>/dev/null || true

echo ""
echo "========================================="
echo "  ✅ TEMİZLİK TAMAMLANDI!"
echo "========================================="
echo ""
echo "  KORUNAN DOSYALAR:"
echo "  - CLAUDE.md (beyin)"
echo "  - PROMPTS.md (komut rehberi)"
echo "  - scripts/ (script'ler)"
echo "  - src/components/ui/ (shadcn/ui)"
echo "  - src/lib/utils.ts, db.ts"
echo "  - src/hooks/"
echo "  - package.json, tailwind.config.ts, next.config.ts"
echo "  - prisma/"
echo "  - worklog.md"
echo ""
echo "  Yeni site oluşturmak için:"
echo "  Claude Code'a: tema [sektör/isim]"
echo ""

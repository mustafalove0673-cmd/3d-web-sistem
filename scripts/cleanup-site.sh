#!/bin/bash
# ═══════════════════════════════════════════════════════════════
# NOVA SITE CLEANUP v1.0
# Sistem dosyaları KORUNUR - Sadece web site kodları silinir
# ═══════════════════════════════════════════════════════════════

PROJECT_DIR="/home/z/my-project"

echo "🗑️  NOVA Site Cleanup başlıyor..."
echo "═══════════════════════════════════════════════════════"
echo ""

# KORUNAN DOSYALAR (SİSTEM):
echo "🧠 KORUNAN Sistem Dosyaları:"
echo "   ├── knowledge-base/     (777+ repo, video analizleri)"
echo "   ├── CLAUDE.md           (AI beyni)"
echo "   ├── src/lib/color-system.ts"
echo "   ├── src/lib/repo-capabilities.ts"
echo "   ├── src/lib/utils.ts"
echo "   ├── src/lib/db.ts"
echo "   ├── src/hooks/          (use-lenis, use-mobile, use-scroll-reveal)"
echo "   ├── src/components/ui/  (shadcn/ui - 48 component)"
echo "   ├── package.json"
echo "   ├── prisma/"
echo "   ├── scripts/"
echo "   └── tailwind.config.ts / next.config.ts"
echo ""

# SİLİNECEK DOSYALAR:
echo "🗑️  Silinen Web Site Dosyaları:"

# Section bileşenleri
if [ -d "$PROJECT_DIR/src/components/sections" ]; then
    rm -rf "$PROJECT_DIR/src/components/sections"/*
    echo "   ✅ src/components/sections/* temizlendi"
else
    mkdir -p "$PROJECT_DIR/src/components/sections"
    echo "   ℹ️  src/components/sections/ oluşturuldu"
fi

# Three.js bileşenleri
if [ -d "$PROJECT_DIR/src/components/three" ]; then
    rm -rf "$PROJECT_DIR/src/components/three"/*
    echo "   ✅ src/components/three/* temizlendi"
else
    mkdir -p "$PROJECT_DIR/src/components/three"
    echo "   ℹ️  src/components/three/ oluşturuldu"
fi

# Görseller
if [ -d "$PROJECT_DIR/public/images" ]; then
    rm -rf "$PROJECT_DIR/public/images"/*
    echo "   ✅ public/images/* temizlendi"
else
    mkdir -p "$PROJECT_DIR/public/images"
    echo "   ℹ️  public/images/ oluşturuldu"
fi

# Language store
if [ -f "$PROJECT_DIR/src/lib/language-store.ts" ]; then
    rm -f "$PROJECT_DIR/src/lib/language-store.ts"
    echo "   ✅ src/lib/language-store.ts silindi"
fi

# Site-specific store'lar
for f in "$PROJECT_DIR/src/lib/"*store*.ts "$PROJECT_DIR/src/lib/"*site*.ts; do
    if [ -f "$f" ]; then
        rm -f "$f"
        echo "   ✅ $(basename $f) silindi"
    fi
done

# Upload dizini
if [ -d "$PROJECT_DIR/public/upload" ]; then
    rm -rf "$PROJECT_DIR/public/upload"/*
    echo "   ✅ public/upload/* temizlendi"
fi

# Video frame'ler
if [ -d "/tmp/video_1_frames" ]; then
    rm -rf /tmp/video_1_frames
fi
if [ -d "/tmp/video_2_frames" ]; then
    rm -rf /tmp/video_2_frames
fi

echo ""
echo "═══════════════════════════════════════════════════════"
echo "✅ Temizlik tamam! Sistem korundu, web site kodları silindi."
echo "🔄 Yeni 'tema [konu]' komutu ile yeni site üretilebilir."
echo "═══════════════════════════════════════════════════════"

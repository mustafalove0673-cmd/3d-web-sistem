#!/bin/bash
# ============================================================
# NOVA Digital Arts - %100 Dogruluk Kontrol Script'i v2
# Tum kriterleri kontrol eder ve puan verir
# Kullanım: bash scripts/verify.sh
# ============================================================

PROJECT_DIR="/home/z/my-project"
cd "$PROJECT_DIR"

SCORE=0
TOTAL=100
ERRORS=""
WARNINGS=""

echo "========================================="
echo "  NOVA %100 DOGRULUK KONTROL v2"
echo "========================================="
echo ""

# ------------------------------------------
# [1] ESLint Sıfır Hata (10 puan)
# ------------------------------------------
echo -n "[1/10] ESLint kontrol... "
ESLINT_OUTPUT=$(npx eslint src/ 2>&1)
ESLINT_EXIT=$?

if [ $ESLINT_EXIT -eq 0 ] && [ -z "$ESLINT_OUTPUT" ]; then
  echo "✅ 10/10"
  SCORE=$((SCORE + 10))
else
  ESLINT_ERR_COUNT=$(echo "$ESLINT_OUTPUT" | wc -l)
  if [ "$ESLINT_ERR_COUNT" -le 2 ]; then
    echo "⚠️  5/10 ($ESLINT_ERR_COUNT satir)"
    SCORE=$((SCORE + 5))
  else
    echo "❌ 0/10"
  fi
  ERRORS="$ERRORS\n  - ESLint hatalari (toplam satir: $ESLINT_ERR_COUNT)"
fi

# ------------------------------------------
# [2] Compile Başarılı (10 puan)
# ------------------------------------------
echo -n "[2/10] Dev server kontrol... "
if ss -tlnp 2>/dev/null | grep -q ":3000"; then
  if [ -f "dev.log" ] && tail -20 dev.log 2>/dev/null | grep -q "Ready"; then
    echo "✅ 10/10"
    SCORE=$((SCORE + 10))
  elif [ -f "dev.log" ] && tail -20 dev.log 2>/dev/null | grep -qi "error\|failed\|unhandled"; then
    echo "❌ 0/10"
    ERRORS="$ERRORS\n  - Dev server log'larinda hata var"
  else
    echo "⚠️  7/10 (log belirsiz)"
    SCORE=$((SCORE + 7))
  fi
else
  echo "⚠️  5/10 (server calismiyor, baslat: bun run dev > dev.log 2>&1 &)"
  SCORE=$((SCORE + 5))
fi

# ------------------------------------------
# [3] Import Zinciri (10 puan)
# ------------------------------------------
echo -n "[3/10] Import zinciri kontrol... "
MISSING_COUNT=0

if [ -f "src/app/page.tsx" ]; then
  # page.tsx'deki @/ import'larini extract et
  while IFS= read -r line; do
    # Extract import path: @/components/... → src/components/...
    IMPORT_PATH=$(echo "$line" | sed -n "s/.*from '@\/\([^']*\)'.*/\1/p")
    if [ -n "$IMPORT_PATH" ]; then
      CHECK_FILE="src/$IMPORT_PATH.tsx"
      if [ ! -f "$CHECK_FILE" ]; then
        CHECK_FILE="src/$IMPORT_PATH.ts"
      fi
      if [ ! -f "$CHECK_FILE" ]; then
        MISSING_COUNT=$((MISSING_COUNT + 1))
      fi
    fi
  done < <(grep "from '@/" src/app/page.tsx 2>/dev/null || true)
fi

if [ "$MISSING_COUNT" -eq 0 ]; then
  echo "✅ 10/10"
  SCORE=$((SCORE + 10))
else
  echo "❌ 0/10 ($MISSING_COUNT eksik dosya)"
  ERRORS="$ERRORS\n  - Import zincirinde $MISSING_COUNT eksik dosya"
fi

# ------------------------------------------
# [4] 'use client' Doğru (10 puan)
# ------------------------------------------
echo -n "[4/10] 'use client' kontrol... "
CLIENT_ISSUES=0

# Three.js dosyalari 'use client' icermeli
for f in src/components/three/*.tsx; do
  if [ -f "$f" ]; then
    if ! head -3 "$f" | grep -q "'use client'"; then
      CLIENT_ISSUES=$((CLIENT_ISSUES + 1))
    fi
  fi
done

# Framer Motion kullanan section dosyalari
for f in src/components/sections/*.tsx; do
  if [ -f "$f" ]; then
    if grep -q "framer-motion\|useScroll\|useTransform\|motion\." "$f" 2>/dev/null; then
      if ! head -3 "$f" | grep -q "'use client'"; then
        CLIENT_ISSUES=$((CLIENT_ISSUES + 1))
      fi
    fi
  fi
done

if [ "$CLIENT_ISSUES" -eq 0 ]; then
  echo "✅ 10/10"
  SCORE=$((SCORE + 10))
else
  echo "❌ 0/10 ($CLIENT_ISSUES dosyada eksik)"
  ERRORS="$ERRORS\n  - 'use client' eksik: $CLIENT_ISSUES dosya"
fi

# ------------------------------------------
# [5] Suspense Sarılmış (10 puan)
# ------------------------------------------
echo -n "[5/10] Suspense kontrol... "
SUSPENSE_OK=true

if [ -f "src/components/sections/HeroSection.tsx" ]; then
  if grep -q "Scene3D\|from '@/components/three" src/components/sections/HeroSection.tsx 2>/dev/null; then
    if ! grep -q "Suspense" src/components/sections/HeroSection.tsx 2>/dev/null; then
      SUSPENSE_OK=false
    fi
  fi
fi

if [ "$SUSPENSE_OK" = true ]; then
  echo "✅ 10/10"
  SCORE=$((SCORE + 10))
else
  echo "❌ 0/10"
  ERRORS="$ERRORS\n  - Three.js Canvas Suspense ile sarilmamis"
fi

# ------------------------------------------
# [6] Görseller Mevcut (10 puan)
# ------------------------------------------
echo -n "[6/10] Görsel kontrol... "
IMG_COUNT=0
for ext in png jpg webp; do
  count=$(ls -1 public/images/*.$ext 2>/dev/null | wc -l)
  IMG_COUNT=$((IMG_COUNT + count))
done

if [ "$IMG_COUNT" -ge 5 ]; then
  echo "✅ 10/10 ($IMG_COUNT görsel)"
  SCORE=$((SCORE + 10))
elif [ "$IMG_COUNT" -ge 1 ]; then
  echo "⚠️  5/10 ($IMG_COUNT görsel)"
  SCORE=$((SCORE + 5))
  WARNINGS="$WARNINGS\n  - Sadece $IMG_COUNT görsel var (minimum 5)"
else
  echo "❌ 0/10"
  ERRORS="$ERRORS\n  - public/images/ klasöründe görsel yok"
fi

# ------------------------------------------
# [7] Mobile Responsive (10 puan)
# ------------------------------------------
echo -n "[7/10] Mobile responsive kontrol... "
MOBILE_SCORE=10

if [ -f "src/components/sections/HeroSection.tsx" ]; then
  # isMobile hook kontrolü
  if ! grep -q "isMobile\|window.innerWidth\|useMediaQuery" src/components/sections/HeroSection.tsx 2>/dev/null; then
    MOBILE_SCORE=$((MOBILE_SCORE - 5))
  fi
  # 3D gizleme kontrolü
  if grep -q "Scene3D\|Canvas\|three" src/components/sections/HeroSection.tsx 2>/dev/null; then
    if ! grep -q "isMobile\|!isMobile" src/components/sections/HeroSection.tsx 2>/dev/null; then
      MOBILE_SCORE=$((MOBILE_SCORE - 5))
    fi
  fi
fi

if [ "$MOBILE_SCORE" -ge 10 ]; then
  echo "✅ 10/10"
  SCORE=$((SCORE + 10))
elif [ "$MOBILE_SCORE" -ge 5 ]; then
  echo "⚠️  5/10"
  SCORE=$((SCORE + 5))
  WARNINGS="$WARNINGS\n  - Mobile responsive kismi eksik"
else
  echo "❌ 0/10"
  ERRORS="$ERRORS\n  - Mobile responsive eksik"
fi

# ------------------------------------------
# [8] Animasyonlar Var (10 puan)
# ------------------------------------------
echo -n "[8/10] Animasyon kontrol... "
ANIM_COUNT=0

if [ -f "src/app/globals.css" ]; then
  CSS_ANIMS=$(grep -c "@keyframes" src/app/globals.css 2>/dev/null || echo 0)
  ANIM_COUNT=$((ANIM_COUNT + CSS_ANIMS))
fi

FM_COUNT=$(grep -rl "framer-motion\|from 'framer-motion'" src/components/ 2>/dev/null | wc -l)
ANIM_COUNT=$((ANIM_COUNT + FM_COUNT * 2))

if [ "$ANIM_COUNT" -ge 15 ]; then
  echo "✅ 10/10 ($ANIM_COUNT animasyon)"
  SCORE=$((SCORE + 10))
elif [ "$ANIM_COUNT" -ge 8 ]; then
  echo "⚠️  7/10 ($ANIM_COUNT animasyon)"
  SCORE=$((SCORE + 7))
  WARNINGS="$WARNINGS\n  - Animasyon sayisi artirilabilir"
else
  echo "❌ 0/10 ($ANIM_COUNT animasyon)"
  ERRORS="$ERRORS\n  - Animasyon sayisi cok az"
fi

# ------------------------------------------
# [9] Sticky Footer (10 puan)
# ------------------------------------------
echo -n "[9/10] Sticky footer kontrol... "
FOOTER_SCORE=10

# page.tsx'de min-h-screen flex flex-col
if [ -f "src/app/page.tsx" ]; then
  if ! grep -q "min-h-screen" src/app/page.tsx 2>/dev/null; then
    FOOTER_SCORE=$((FOOTER_SCORE - 5))
  fi
fi

# Footer'da mt-auto veya page.tsx'de mt-auto
if [ -f "src/components/sections/Footer.tsx" ]; then
  if ! grep -q "mt-auto" src/components/sections/Footer.tsx 2>/dev/null; then
    if ! grep -q "mt-auto" src/app/page.tsx 2>/dev/null; then
      FOOTER_SCORE=$((FOOTER_SCORE - 5))
    fi
  fi
else
  FOOTER_SCORE=0
fi

if [ "$FOOTER_SCORE" -ge 10 ]; then
  echo "✅ 10/10"
  SCORE=$((SCORE + 10))
elif [ "$FOOTER_SCORE" -ge 5 ]; then
  echo "⚠️  5/10"
  SCORE=$((SCORE + 5))
else
  echo "❌ 0/10"
  ERRORS="$ERRORS\n  - Sticky footer eksik"
fi

# ------------------------------------------
# [10] Boş Alan Yok (10 puan)
# ------------------------------------------
echo -n "[10/10] Doluluk kontrol... "
SECTION_COUNT=0

for f in src/components/sections/*.tsx; do
  if [ -f "$f" ]; then
    SECTION_COUNT=$((SECTION_COUNT + 1))
  fi
done

if [ "$SECTION_COUNT" -ge 8 ]; then
  echo "✅ 10/10 ($SECTION_COUNT bölüm)"
  SCORE=$((SCORE + 10))
elif [ "$SECTION_COUNT" -ge 5 ]; then
  echo "⚠️  7/10 ($SECTION_COUNT bölüm)"
  SCORE=$((SCORE + 7))
  WARNINGS="$WARNINGS\n  - $SECTION_COUNT bölüm var (8+ önerilir)"
else
  echo "❌ 0/10 ($SECTION_COUNT bölüm)"
  ERRORS="$ERRORS\n  - Bölüm sayisi cok az"
fi

# ------------------------------------------
# SONUÇ
# ------------------------------------------
echo ""
echo "========================================="
echo "  SONUÇ: $SCORE / $TOTAL"
echo "========================================="

if [ $SCORE -ge 100 ]; then
  echo "  ✅ %100 DOGRULUK BASARILI!"
  echo "  🎉 Site hazir, kullaniciya sunulabilir."
elif [ $SCORE -ge 90 ]; then
  echo "  🟢 $SCORE% - Neredeyse mükemmel!"
elif [ $SCORE -ge 80 ]; then
  echo "  🟡 $SCORE% - Iyi ama düzeltilecek seyler var"
elif [ $SCORE -ge 60 ]; then
  echo "  🟠 $SCORE% - Düzeltmeler gerekli"
else
  echo "  🔴 $SCORE% - Ciddi hatalar var!"
fi

if [ -n "$ERRORS" ]; then
  echo ""
  echo "  HATALAR:"
  echo -e "$ERRORS"
fi

if [ -n "$WARNINGS" ]; then
  echo ""
  echo "  UYARILAR:"
  echo -e "$WARNINGS"
fi

echo ""
echo "========================================="

if [ $SCORE -ge 100 ]; then
  exit 0
else
  exit 1
fi

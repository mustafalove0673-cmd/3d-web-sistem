#!/bin/bash
# auto-fix-loop.sh - Claude Code için otomatik kontrol ve düzeltme döngüsü
# Kullanım: ./scripts/auto-fix-loop.sh

set -e
cd /home/z/my-project

MAX_ATTEMPTS=${MAX_FIX_ATTEMPTS:-5}
ATTEMPT=0
FIXED=false

echo "🔍 === OTOMATİK KONTROL DÖNGÜSÜ BAŞLADI ==="
echo ""

while [ $ATTEMPT -lt $MAX_ATTEMPTS ]; do
  ATTEMPT=$((ATTEMPT + 1))
  echo "🔄 Deneme $ATTEMPT/$MAX_ATTEMPTS"
  echo "---"

  # 1. ESLint Check
  echo "📝 ESLint kontrol ediliyor..."
  LINT_RESULT=$(npx eslint src/ 2>&1)
  LINT_EXIT=$?
  
  if [ $LINT_EXIT -ne 0 ]; then
    echo "❌ ESLint hataları bulundu:"
    echo "$LINT_RESULT"
    echo ""
    echo "⚠️  Lütfen bu hataları düzelt ve tekrar çalıştır."
    exit 1
  else
    echo "✅ ESLint temiz"
  fi

  # 2. Port Check
  echo "🔌 Port 3000 kontrol ediliyor..."
  if ss -tlnp 2>/dev/null | grep -q ":3000 "; then
    echo "✅ Dev server çalışıyor"
  else
    echo "⚠️  Dev server çalışmıyor, başlatılıyor..."
    pkill -f "next dev" 2>/dev/null || true
    sleep 2
    setsid bun run dev < /dev/null > dev.log 2>&1 &
    sleep 10
    if ss -tlnp 2>/dev/null | grep -q ":3000 "; then
      echo "✅ Dev server başlatıldı"
    else
      echo "❌ Dev server başlatılamadı"
      tail -20 dev.log
      exit 1
    fi
  fi

  # 3. Dev Log Check
  echo "📋 Dev log kontrol ediliyor..."
  sleep 3
  if [ -f dev.log ]; then
    ERRORS=$(grep -i "error\|Error\|500\|failed\|ReferenceError\|TypeError" dev.log 2>/dev/null | tail -5)
    if [ -n "$ERRORS" ]; then
      echo "❌ Dev log'da hatalar:"
      echo "$ERRORS"
      echo ""
      echo "⚠️  Bu hataları düzelt ve tekrar çalıştır."
      exit 1
    else
      echo "✅ Dev log temiz"
    fi
  fi

  # 4. Import Check
  echo "📦 Import kontrol ediliyor..."
  MISSING_IMPORTS=$(npx eslint src/ --rule 'no-unused-vars: off' --rule 'import/no-unresolved: off' 2>&1 | grep -i "is not defined\|not found" || true)
  if [ -n "$MISSING_IMPORTS" ]; then
    echo "❌ Eksik importlar:"
    echo "$MISSING_IMPORTS"
    echo ""
    echo "⚠️  Eksik importları düzelt."
    exit 1
  else
    echo "✅ Importlar tam"
  fi

  # 5. Image Check
  echo "🖼️  Görsel kontrol ediliyor..."
  if [ -d "public/images" ]; then
    IMAGE_COUNT=$(ls public/images/*.{png,jpg,webp,svg} 2>/dev/null | wc -l)
    echo "✅ $IMAGE_COUNT görsel bulundu"
  fi

  echo ""
  echo "═══════════════════════════════════════"
  echo "🎉 TÜM KONTROLLER GEÇTİ! ($ATTEMPT deneme)"
  echo "═══════════════════════════════════════"
  FIXED=true
  break
done

if [ "$FIXED" = false ]; then
  echo "❌ $MAX_ATTEMPTS deneme sonrasında hala hatalar var."
  exit 1
fi

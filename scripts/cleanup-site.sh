#!/bin/bash
cd /home/z/my-project
echo "🗑️ Cleaning site files..."
# Remove only site-specific files
rm -rf src/components/sections/*
rm -f src/app/page.tsx
rm -rf public/images/*
echo "✅ Site files cleaned. Systems preserved."
echo "Preserved: CLAUDE.md, scripts/, knowledge-base/, skills/, worklog.md, PROMPTS.md, src/components/three/, src/components/ui/, src/app/globals.css, src/app/layout.tsx"
git add -A
git commit -m "cleanup: site removed, systems preserved $(date '+%Y-%m-%d %H:%M:%S')"
git push origin main 2>&1
echo "Cleanup complete!"

#!/bin/bash
cd /home/z/my-project
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
git add -A
CHANGES=$(git diff --cached --stat)
if [ -z "$CHANGES" ]; then
  echo "No changes to commit"
  exit 0
fi
git commit -m "auto: update ${TIMESTAMP}" -m "${CHANGES}"
git push origin main 2>&1
echo "Auto-commit done at ${TIMESTAMP}"

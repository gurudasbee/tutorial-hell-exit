#!/bin/bash
# Update this path to your local repo path before scheduling
cd /path/to/your/repo || exit 1

echo "Commit on $(date -u '+%Y-%m-%d %H:%M:%S UTC')" >> daily_log.txt
git add .
git commit -m "Auto commit: $(date -u '+%Y-%m-%d %H:%M:%S UTC')" || echo "Nothing to commit"
git push origin main

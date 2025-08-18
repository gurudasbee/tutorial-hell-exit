# 🚀 Daily Git Workflow Cheat Sheet

## 1. Pull Latest Changes
```bash
*** git pull origin main
# Fetch & merge latest changes


*** git status
# See which files are modified/added

*** git add day-01/notes.md
# Stage today's file
# or git add . for all changes


*** git commit -m "Day 1: Learned basics of XYZ"
# Commit with short, meaningful message


*** git push origin main
# Push daily notes and code


*** git log --oneline --decorate --graph --all
# See commit history


*** git pull origin main
git status
git add day-01/notes.md  # or git add . for all changes
git commit -m "Day 1: Learned basics of XYZ"
git push origin main
git log --oneline --decorate --graph --all  # optional


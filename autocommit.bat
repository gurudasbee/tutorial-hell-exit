@echo off
REM Update this path to your local repo path before scheduling
cd /d C:\path\to\your\repo || exit /b 1

for /f "tokens=1-3 delims=/ " %%a in ("%date%") do (set today=%%c-%%a-%%b)
for /f "tokens=1-2 delims=: " %%a in ("%time%") do (set now=%%a:%%b)

echo Commit on %today% %now% UTC>> daily_log.txt
git add .
git commit -m "Auto commit: %today% %now% UTC" || echo Nothing to commit
git push origin main

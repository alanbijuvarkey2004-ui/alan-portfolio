@echo off
title Push Alan Portfolio to GitHub
cd /d "C:\Users\HP\.gemini\antigravity\scratch\alan-portfolio"
echo ========================================================
echo Pushing portfolio to https://github.com/alanbijuvarkey2004-ui/alan-portfolio
echo ========================================================
git push -u origin main
echo.
if %ERRORLEVEL% equ 0 (
    echo [SUCCESS] Your portfolio is now pushed to GitHub!
) else (
    echo [NOTE] If you saw an authentication prompt, please sign in.
)
pause

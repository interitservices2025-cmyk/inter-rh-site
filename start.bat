@echo off
echo ========================================
echo   INTER-RH — Installation du projet
echo ========================================
echo.

cd /d "d:\INTER-IT-PROJECTS\Inter-itservicesca\CLIENTS\Inter-rh site"

echo [1/2] Installation des dependances...
call npm install

if %errorlevel% neq 0 (
    echo ERREUR: npm install a echoue
    pause
    exit /b 1
)

echo.
echo [2/2] Demarrage du serveur de developpement...
echo.
echo    Ouvrez http://localhost:3000 dans votre navigateur
echo.
call npm run dev

pause

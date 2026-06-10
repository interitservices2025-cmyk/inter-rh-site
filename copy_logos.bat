@echo off
echo ====================================================
2026-06-10T19:05:32+01:00
echo   Copie des logos pour le site INTER-RH
echo ====================================================
echo.

set SRC_LOGO="C:\Users\HP\.gemini\antigravity-ide\brain\c6067383-307d-4457-b28d-5d1916827cea\media__1781114534668.png"
set SRC_FAVICON="C:\Users\HP\.gemini\antigravity-ide\brain\c6067383-307d-4457-b28d-5d1916827cea\media__1781114564813.jpg"

set DEST_DIR="d:\INTER-IT-PROJECTS\Inter-itservicesca\CLIENTS\Inter-rh site\public"

if not exist %DEST_DIR% (
    mkdir %DEST_DIR%
)

echo [1/2] Copie du logo principal...
copy /Y %SRC_LOGO% %DEST_DIR%"\logo.png"

echo [2/2] Copie du favicon...
copy /Y %SRC_FAVICON% %DEST_DIR%"\favicon.png"

echo.
echo ====================================================
echo   Copie terminee ! Les images sont dans le dossier public.
echo ====================================================
echo.
pause

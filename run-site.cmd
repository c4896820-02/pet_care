@echo off
cd /d "%~dp0"

if not exist "D:\Nodejs\node.exe" (
  echo Node.js not found at D:\Nodejs\node.exe
  pause
  exit /b 1
)

if not exist ".next\BUILD_ID" (
  echo Build output not found. Running Next.js build first...
  call "D:\Nodejs\npm.cmd" run build
  if errorlevel 1 (
    echo Build failed.
    pause
    exit /b 1
  )
)

echo Starting pet spa site at http://127.0.0.1:3000
start "" http://127.0.0.1:3000
"D:\Nodejs\node.exe" server.js

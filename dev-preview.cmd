@echo off
rem Prepend Node install dir so the preview spawn (which lacks the post-install PATH) finds node/npm.
set "PATH=C:\Program Files\nodejs;%PATH%"
cd /d "%~dp0skol-ai"
call npm run dev

@echo off
set EMULATOR_PATH=C:\Users\USER\AppData\Local\Android\Sdk\emulator
set ADB_PATH=C:\Users\USER\AppData\Local\Android\Sdk\platform-tools\adb.exe
set EMULATOR_NAME=Pixel_9

:: Start emulator if not already running
%ADB_PATH% get-state >nul 2>&1
if errorlevel 1 (
    echo Starting emulator: %EMULATOR_NAME%...
    start "" "%EMULATOR_PATH%\emulator.exe" -avd %EMULATOR_NAME%"
)

:: Wait for emulator to fully boot
echo Waiting for emulator to boot...
:wait_loop
%ADB_PATH% shell getprop sys.boot_completed | findstr "1" >nul
if errorlevel 1 (
    timeout /t 2 >nul
    goto wait_loop
)

echo Emulator booted successfully.

:: Start Expo and open the app in the emulator
npx expo start --android

pause

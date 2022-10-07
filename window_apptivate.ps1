Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force

$CurrentDir = Split-Path $MyInvocation.MyCommand.Path

$webDriverDllPath = $CurrentDir + "\WebDriver.dll"
$chromeDriverDirPath = $CurrentDir

#dll読み込み
Add-Type -Path $webDriverDllPath

#ドライバにオプションを読み込み用
$Options = New-Object OpenQA.Selenium.chrome.ChromeOptions

#DebuggerAddressを指定したCHROMEを操作する場合
#$Options.DebuggerAddress = "127.0.0.1:9222"
#

#chrome起動
$chromeDriver = New-Object OpenQA.Selenium.Chrome.ChromeDriver($chromeDriverDirPath,$Options)

#日本語化け対応 文字コードをSHIFT-JISに
#chcp 932

#URL開く
$chromeDriver.Url = "https://www.google.com/?hl=ja"

Start-Sleep 5

add-type -AssemblyName microsoft.VisualBasic

    $ps = Get-Process | Where-Object {$_.Name -eq "chrome"}
    foreach($process in $ps){
        if($process.MainWindowTitle -ne "") {
            [Microsoft.VisualBasic.Interaction]::AppActivate($process.ID);
        }
    }


Start-Sleep 5

$chromeDriver.Quit()

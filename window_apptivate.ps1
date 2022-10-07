Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force

$CurrentDir = Split-Path $MyInvocation.MyCommand.Path

$webDriverDllPath = $CurrentDir + "\WebDriver.dll"
$chromeDriverDirPath = $CurrentDir

#dll�ǂݍ���
Add-Type -Path $webDriverDllPath

#�h���C�o�ɃI�v�V������ǂݍ��ݗp
$Options = New-Object OpenQA.Selenium.chrome.ChromeOptions

#DebuggerAddress���w�肵��CHROME�𑀍삷��ꍇ
#$Options.DebuggerAddress = "127.0.0.1:9222"
#

#chrome�N��
$chromeDriver = New-Object OpenQA.Selenium.Chrome.ChromeDriver($chromeDriverDirPath,$Options)

#���{�ꉻ���Ή� �����R�[�h��SHIFT-JIS��
#chcp 932

#URL�J��
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

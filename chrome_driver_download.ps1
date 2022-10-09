Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force

$distination_folder = $Args[0]

Add-Type -AssemblyName System.Net.Http
# Add-Type -Path ".\HtmlAgilityPack.dll"

$chrome_ver = Get-ChildItem "C:\Program Files\Google\Chrome\Application\*" | Where-Object {$_.Name -match '^[0-9]'}
$chrome_ver = Split-Path $chrome_ver -Leaf
Write-Host "chrome_ver"
Write-Host $chrome_ver

$chrome_ver -match "^([0-9].*?)\." > $null
$chrome_ver_first = $Matches[1]

$chrome_filename = "chromedriver.exe"
$chrome_driver_folder = "./"
if ($distination_folder -ne $null) {
    $chrome_driver_folder = $distination_folder + "/"
}

$chrome_driver_fullpath = $chrome_driver_folder +  $chrome_filename
$cmd_str = $chrome_driver_fullpath + " --version"
if (Test-Path($chrome_driver_fullpath)) {
    Invoke-Expression $cmd_str | Tee-Object -Variable driver_ver_str > $null
    Write-Host $driver_ver_str
    $driver_ver_str -match " ([0-9].*?[0-9]) " > $null
    $driver_ver = $Matches[1]
    Write-Host $driver_ver

    $driver_ver -match "^([0-9].*?)\." > $null
    $driver_ver_first = $Matches[1]
    if ($driver_ver_first -eq $chrome_ver_first) {
        exit
    }
}

$ie = New-Object -ComObject InternetExplorer.Application
$ie.Navigate("https://chromedriver.storage.googleapis.com/index.html")
# $ie.Visible = $true

Start-Sleep 1

$target_driver_ver = ""
$a_tags = $ie.Document.getElementsByTagName("a")
foreach($a_tag in $a_tags){
    $driver_ver = $a_tag.innerHtml
    $driver_ver -match "^([0-9].*?)\." > $null
    $driver_ver_first = $Matches[1]
    if ($driver_ver_first -eq $chrome_ver_first) {
        $target_driver_ver = $driver_ver
    }
} 

Write-Host "target_driver_ver"
Write-Host $target_driver_ver

if ($target_driver_ver -eq "") {
    exit
}

$download_filename = "chromedriver_win32.zip"
$download_filebasename = [System.IO.Path]::GetFileNameWithoutExtension($download_filename)
$driver_filename = "chromedriver.exe"

$download_url = "https://chromedriver.storage.googleapis.com/" + $target_driver_ver + "/" + $download_filename
$script_folder = Split-Path $MyInvocation.MyCommand.Path -Parent
$download_fullpath = $script_folder + "\" + $download_filename

wget $download_url -OutFile $download_fullpath
Expand-Archive $download_fullpath
Copy-Item ($download_filebasename + "\" + $driver_filename) $script_folder -Force

Remove-Item $download_filebasename -Recurse -Force
Remove-Item $download_fullpath

if ($distination_folder -ne $null) {
    Move-Item ($script_folder + "\" + $driver_filename) $distination_folder -Force
}

$ie.quit()

<# () <> $a_tag = 
Write-Host
#>

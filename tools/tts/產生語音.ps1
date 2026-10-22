# 台灣生活日記 語音產生器（PowerShell 版）
# 用法：在這個資料夾按右鍵「在終端機開啟」，輸入
#   powershell -ExecutionPolicy Bypass -File .\產生語音.ps1
# 需要同一個資料夾裡的 tts_jobs.json。已做好的檔案會跳過，中斷後可以再執行一次接著做。
$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = [Text.Encoding]::UTF8
$key = Read-Host '貼上 Azure 語音服務的金鑰（金鑰 1）'
$region = Read-Host '區域（直接按 Enter 用 eastasia）'
if (-not $region) { $region = 'eastasia' }
$V = @{
  nar     = @('zh-TW-HsiaoChenNeural', '+0%',  '+0%')
  me_f    = @('zh-TW-HsiaoYuNeural',   '+4%',  '+0%')
  me_m    = @('zh-TW-YunJheNeural',    '+6%',  '+0%')
  f_young = @('zh-TW-HsiaoYuNeural',   '+8%',  '+0%')
  m_young = @('zh-TW-YunJheNeural',    '+10%', '+5%')
  f_adult = @('zh-TW-HsiaoChenNeural', '+0%',  '+0%')
  m_adult = @('zh-TW-YunJheNeural',    '+0%',  '+0%')
  m_old   = @('zh-TW-YunJheNeural',    '-10%', '-5%')
  f_old   = @('zh-TW-HsiaoChenNeural', '-10%', '-10%')
}
$jobs = Get-Content -Raw -Encoding UTF8 (Join-Path $PSScriptRoot 'tts_jobs.json') | ConvertFrom-Json
$out = Join-Path $PSScriptRoot 'audio'
New-Item -ItemType Directory -Force $out | Out-Null
$uri = "https://$region.tts.speech.microsoft.com/cognitiveservices/v1"
$headers = @{ 'Ocp-Apim-Subscription-Key' = $key; 'X-Microsoft-OutputFormat' = 'audio-16khz-32kbitrate-mono-mp3' }
$i = 0
foreach ($j in $jobs) {
  $i++
  $file = Join-Path $out ($j.h + '.mp3')
  if (Test-Path $file) { continue }
  $c = $V[$j.v]
  $text = [Security.SecurityElement]::Escape($j.t)
  $ssml = "<speak version='1.0' xml:lang='zh-TW'><voice name='$($c[0])'><prosody pitch='$($c[1])' rate='$($c[2])'>$text</prosody></voice></speak>"
  $body = [Text.Encoding]::UTF8.GetBytes($ssml)
  for ($try = 0; $try -lt 6; $try++) {
    try {
      Invoke-WebRequest -Uri $uri -Method Post -Headers $headers -ContentType 'application/ssml+xml' -Body $body -OutFile $file -UseBasicParsing
      break
    } catch {
      $code = 0; if ($_.Exception.Response) { $code = [int]$_.Exception.Response.StatusCode }
      if ($code -eq 401) { Write-Host '金鑰或區域不對，請檢查後再執行。'; exit 1 }
      if (Test-Path $file) { Remove-Item $file }
      Write-Host "  等一下再試（$code）"; Start-Sleep -Seconds (10 * ($try + 1))
    }
  }
  Write-Host ("{0}/{1}  {2}" -f $i, $jobs.Count, $j.t)
  Start-Sleep -Milliseconds 3100
}
$done = $jobs | Where-Object { Test-Path (Join-Path $out ($_.h + '.mp3')) } | ForEach-Object { $_.h }
[IO.File]::WriteAllText((Join-Path $out 'index.json'), (ConvertTo-Json @($done) -Compress))
Write-Host "完成：$($done.Count) / $($jobs.Count)。把 audio 資料夾放到遊戲 index.html 旁邊。"

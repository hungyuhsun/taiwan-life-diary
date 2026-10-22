# 語音（Azure 文字轉語音）

遊戲的 🔊 會先找 `audio/<雜湊>.mp3`，找不到才用裝置內建語音。音檔用 Azure AI 語音服務（免費 F0 方案即可）產生。

## 產生步驟

1. `node tools/tts/make-tool.js` → 得到 `tools/tts/語音產生器.html` 和 `tts_jobs.json`
2. 用 Chrome 或 Edge 開啟 `語音產生器.html`，貼上 Azure 語音服務的金鑰和區域
3. 先試聽每種聲音，再按「開始產生」（免費方案每分鐘約 20 句，全部約 2～3 小時，中斷後可接著做）
4. 下載 `audio.zip`，解壓縮後把 `audio/` 放到 `docs/`（和 `index.html` 同一層）

如果瀏覽器版連不上 Azure，改用 PowerShell 版（需要同資料夾的 `tts_jobs.json`）：

```
powershell -ExecutionPolicy Bypass -File .\產生語音.ps1
```

**金鑰不要放進 GitHub。** 

## 對應規則

- 檔名 = `hash(聲音設定 + '|' + 句子)`，句子先去掉括號內容和〔〕。`tts_jobs.js` 與 `src/template.html` 的 `normTts`／`ttsHash`／`VOICE_OF` 必須一致。
- 改了劇本句子，重新產生一次即可：已做好的句子會跳過，只做新的。
- 含 `{name}`（玩家名字）的句子不預先產生，播放時用裝置語音。
- 聲音設定（旁白、主角男女、年輕／成年／年長男女）在 `tail.html` 的 `VOICES` 和 `產生語音.ps1` 的 `$V`。

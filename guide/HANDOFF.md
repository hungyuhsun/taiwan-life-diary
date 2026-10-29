# 交接紀錄：台灣生活日記

更新：2026-10-29（台北時間）
用途：讓接手的人或 AI 從目前進度繼續工作。

標記說明：
- ✅ 已完成：程式碼或檔案已產生，並在測試環境驗證。
- 🔍 待驗證：已完成，但還沒在真實環境（真手機、真 Azure、正式伺服器）確認。
- ⏳ 待處理：還沒做。
- ❓ 狀態不明：要做的人不是 AI，目前沒有收到完成回報。

---

## 1. 專案目標

「台灣生活日記」是給 **臺中市立青年高中 僑生建教專班（3+4 學制）** 學生的華語學習生活模擬遊戲（TOCFL A1–B1）。

- 學生扮演從東南亞來台的僑生，走過前傳（出發前）和高中三年，共 12 章。
- 遊戲內容包括生活情境、在校與工廠輪調、華語檢定和直升科大。
- 劇情中出現的規定和時程，以青年高中的實際做法為準。
- 遊戲要能在學生的手機上玩，提供母語輔助翻譯，並且（新需求）沒有網路也能玩。
- 使用者（作者）是該校教師，用中文溝通，請用繁體中文回覆。

### 線上位置

| 項目 | 網址 |
|---|---|
| 遊戲 | https://app2.youth.tc.edu.tw/twdiary/ （伺服器路徑 `/var/www/html/twdiary/`） |
| 宣傳頁 | `/twdiary/about/` |
| 學生回饋問卷 | `/twdiary/feedback/` |
| 教師回饋問卷 | `/twdiary/feedback/teacher/` |
| 開源專案 | https://github.com/hungyuhsun/taiwan-life-diary （程式碼 MIT，內容 CC BY-NC-SA 4.0） |

---

## 2. 已確認的要求與事實（來自使用者，劇情必須遵守）

### 學制與輪調

- 僑生建教專班採輪調：A、B 兩組輪流在校上課和到工廠實習。
- 三年級下學期只有兩段：3–4 月、5–6 月。A 組 3–4 月實習，5–6 月在校。
- 三年級 1–2 月：A 組在校。
- 6 月初畢業典禮，但課要上到 6 月底。

### 法定與行政

- 僑生在台監護人預設是學校**校長**。
- 銜接直升的科技大學也是輪調專班，型態為 **421**：4 天到廠實習、2 天在校上課、1 天休息。
- 暑假直接到科大的合作廠商報到，並入住科大宿舍。

### 華語文能力測驗（TOCFL）

- 1 月不排考試，只有 3 月和 5 月。
- **畢業前沒有通過 B1，依規定無法直升大學，需要返國。** 遊戲要一直提醒學生華語的重要性；結局 `endFail` 就是這個情況。

### 大學到校面試

- 各大學分開到學校辦理，非資訊科也會來。
- 3 月、5 月各來一次（配合輪調組別）。
- 錄取結果當月就知道。

### 畢業照與紀念冊

- 畢業照在三上拍，10 月、11 月分組拍攝。
- 照片經班級幹部美編，三下才拿到畢業紀念冊。

### 主角與翻譯

- 主角共 7 國，每國一男一女，共 14 位：越南、印尼、泰國、緬甸、菲律賓、馬來西亞、柬埔寨。
- 輔助翻譯語言：越、印尼、英、泰、緬、高棉。
- 柬埔寨的入學面試設定為「不一定」，和越南、泰國相同。
- 高棉文為 AI 翻譯，**尚未經母語者校對**。

### 授權

- 內容採 CC BY-NC-SA 4.0，程式碼採 MIT。
- Repo 名稱 `taiwan-life-diary`，直接公開。

### 安全

- 開發者模式密碼不得寫進任何文件或 repo。
  - repo 內 `DEV_HASH=0`（停用）。
  - 作者本機工作版的 `template.html` 才有真正的雜湊值。設定方式：`node tools/dev-hash.js 密碼`。
- **Azure 語音金鑰只留在使用者電腦**，不要索取，也不要放進 GitHub。
- repo 內問卷的 `SCRIPT_URL`、`SHEET_ID` 是佔位字串。正式網址只在學校伺服器的版本裡。

---

## 3. 架構速覽

### 建置流程

`src/template.html` 加上 `src/story*.js`，由 `src/build.js`（`npm run build`）合併成單一檔案 `docs/index.html`，約 9 MB，圖片內嵌。

### 劇本格式

步驟類型與事件格式見 `guide/STORY_FORMAT.md`。每章的日程在 template 的 `DAYS0`～`DAYS12`，隨機事件在 `RND*`。

### 高棉文

- 翻譯表在 `i18n/km.json`，以英文原句為鍵。
- 建置時注入 `__KM__`；執行時 `addKm()` 補上 `.km`。

### 語音

1. `speak(text, voiceProfile)` 計算 `ttsHash(聲音設定 + '|' + normTts(句子))`。
2. 如果 `audio/index.json` 裡有這個雜湊，就播放 `audio/<hash>.mp3`；沒有就退回裝置的 speechSynthesis。
3. 角色對應的聲音設定在 `VOICE_OF`。主角依性別用 `me_f` 或 `me_m`，其他是旁白 `nar`。
4. `tools/tts/tts_jobs.js` 必須和 template 的 `normTts`、`ttsHash`、`VOICE_OF` 保持一致。

### 離線

- `docs/sw.js`：service worker。
  - 遊戲主頁：先上網拿新版，4 秒沒回應就用快取。
  - 字型：快取優先。
  - 語音：存在快取 `twdiary-audio`。
- `docs/manifest.json` 和圖示支援「加到主畫面」。
- 首頁「📶 離線・下載語音」和遊戲內 ⚙︎ 設定都能下載語音，可以暫停、續傳。

### 部署包裝

`build.js` 的 `PRE` 已經包含 manifest、apple-touch-icon 和 theme-color 標籤。

### 測試方式

用 Playwright（`/opt/node-tools/node_modules/playwright/index.mjs`）自動點完各章。

---

## 4. 已完成的工作

### 遊戲內容

- ✅ 前傳加上第 1–12 章（一年級到三年級畢業）。
- ✅ 第 11 章：扣繳憑單、志願表、春節、B1 報名與考試、大學到校。
- ✅ 第 12 章：錄取、報稅、最後一次 B1、畢業典禮、實習結束、6 種結局。
- ✅ 已用 Playwright 測試各章與分支：A/B 組、各科別、B1 有無通過。
- ✅ 加入柬埔寨主角（h13、h14 含便服）和柬埔寨媽媽圖，加入高棉文翻譯。高棉文翻譯表 733 條，覆蓋檢查 0 缺漏。
- ✅ 收集卡圖片已整合，包括 taxslip、unibrochure、uniadmit、diploma、yearbook 等。
- ✅ 全章節詞彙等級對照表：`guide/vocab-levels.xlsx`，另外交付過 `twdiary_vocab_all.xlsx`。
- ✅ 首頁按鈕整理：一個主按鈕、四格功能（前傳、旅程地圖、存檔代碼、離線・下載語音），底部放小連結；「重新開始」需要按兩次。

### 問卷與宣傳

- ✅ 學生問卷（含高棉文）與教師問卷（放在伺服器，不需要 claude.ai 帳號），都寫入同一份 Google 試算表。
  - 教師問卷寫入「教師回饋」工作表，該工作表由 Apps Script 自動建立。
  - 已刪除 claude.ai 上的教師問卷 artifact。
- ✅ 宣傳頁更新為全 12 章、加上高棉文，打包成 `twdiary_about.zip` 交付。

### 開源

- ✅ GitHub repo 已建立並推送。最新 commit 見 `git log`，本文件撰寫時為 `9dbeeb2`。

### 語音（Azure TTS）

- ✅ 使用者已用學校帳號在 Azure 建立語音服務（F0 免費方案，東亞區）。
- ✅ 句子清單共 2,781 句、約 4 萬字，分 9 種聲音設定。
- ✅ 瀏覽器版產生器 `tts_generator.html` 和 PowerShell 版 `make_audio.ps1`；檔名改成英文，避免 Windows 解壓縮亂碼。
- ✅ 遊戲改成優先播放音檔，沒有音檔時退回裝置語音。

### 難度（2026-10-27，回應試玩「太簡單」）

- ✅ 開局「難度」可選一般／挑戰（學生自己選），⚙︎ 設定裡也能切換。存在 `S.hard`。
- ✅ 挑戰模式：答錯不能重選、心情 −3，演完該選項的後果（`r`、`end`）後公布答案，再照正確選項的劇情走；聽力（`listen`）只能重播 2 次。一般模式不扣數值，行為和以前一樣。
- ✅ 母語翻譯顯示方式 `S.trMode`：一直顯示／點一下才顯示／不顯示。挑戰模式預設不顯示，學生改過設定（`S.trSet`）就不再自動切換。
- ✅ 章末「一次就答對」加上星等（90%／75%／50%），各章最佳紀錄另存在 `localStorage` 的 `twdiary_best`，重新開始也保留。
- 🔍 難度說明的高棉文為 AI 翻譯，尚未校對。

### 節奏、選章和小遊戲（2026-10-29，回應老師「12 章太長、不有趣」）

- ✅ 一週只選一次：原本每天上午、下午、晚上各選一次，現在每週跑完主線和隨機事件後選一件事。「晚上了，該睡覺了」和倒垃圾提醒改成不用點的小提示。整潔每週 −3，三週沒倒垃圾再 −5（`runDay`、`endDay`）。
- ✅ 宿舍內務檢查每章只留第一次（29 次 → 10 次）。
- ✅ 老師選章：首頁「選章節（上課用）」可以從任一章開始，也能複製上課連結 `?ch=7`。前面章節的主線當作看過；A2 預設通過（第 5 章起）、B1 預設還沒過、第 10 章起路線預設 `undecided`、存款至少 20,000（`jumpTo`、`startAt`）。已有存檔時會先確認，收集卡、稱號、好感度保留。
- ✅ 小遊戲（`src/story_mini.js`）：打掃房間 → 垃圾分類（5 樣，三個桶子）；逛夜市 → 聽朋友點餐、選食物、付剛好的錢（D11 第一次逛夜市結尾也會玩）。挑戰模式不能重選、點餐要先用聽的。成績存在 `S.mini`，不算進章末星等。
- ✅ 收集冊：首頁、⚙︎ 設定、章末都能打開，顯示收集卡、稱號、小遊戲紀錄、好感度。
- 🔍 小遊戲的緬甸文、高棉文為 AI 翻譯，尚未校對。含數字或點餐內容的句子沒有預錄語音，會用手機語音念。

### 離線遊玩

- ✅ 加入 service worker、manifest、圖示和下載語音功能。
- ✅ 在本機伺服器測試過：下載語音可以中斷再繼續；斷網後重新打開遊戲正常，「繼續遊戲」能接上進度，音檔從快取讀得到。

### 曾經規劃、已交付示意圖但未實作

- 經營／時間管理小遊戲：https://claude.ai/artifact/98ppvBPnCYvR55NYAfnHhn
- 情境對話冒險：https://claude.ai/artifact/PWgFye5S4ze3cxzoV4Yxy4

---

## 5. 待驗證

- 🔍 **Azure 實際產生語音**：只用假的 Azure 回應測試過。
  - 要確認瀏覽器版能否直接連上 Azure（CORS）。如果失敗，改用 PowerShell 版。
  - 要確認 9 種聲音的音高和語速是否合適。
- 🔍 **真手機離線**：iPhone Safari 和 Android Chrome 都還沒測過。要確認：
  - 加到主畫面
  - 斷網開啟
  - 語音快取
  - 字型離線顯示，尤其泰、緬、高棉文
- 🔍 **在遊戲中播放真正的 mp3**：測試時用的是假音檔。另外要確認 `playbackRate` 對應朗讀速度的效果。
- 🔍 **含玩家名字的句子**：例如「你好，我叫○○」，設計上用裝置語音念。實際和 Azure 聲音夾雜時聽起來是否突兀，還沒確認。
- 🔍 **高棉文翻譯**：需要母語者校對。

---

## 6. 狀態不明

這些是使用者要做的事，目前沒有收到完成回報，接手時請先詢問。

- ❓ 最新的 `twdiary_site_update.zip`（7 個檔案：`index.html`、`sw.js`、`manifest.json`、4 個圖示）是否已上傳到伺服器。
- ❓ 是否已用產生器做出 `audio/`，並上傳到 `/var/www/html/twdiary/audio/`。
- ❓ GitHub Pages 是否已啟用（Settings → Pages → main、`/docs`）。AI 透過 proxy 無法設定。
- ❓ GitHub About 說明與 topics 是否已設定。說明文字已提供，AI 無法設定。
- ❓ Codex for OSS 申請是否已送出。填寫內容已提供。
- ❓ 是否已通知學校相關人員。

---

## 7. 尚未完成（待處理）

### 1.1 版收尾

- ⏳ 依學生和教師問卷回饋修正內容。回應存在 Google 試算表 `1nTGPSY2y8R0hiW5rYzAlH_vXSVUV92WeMg3OQmkpzNU`，上次查看時還沒有回應。

### 未來版本

- ⏳ **1.2 各專業群科支線任務**：已暫停。需要各科老師提供證照、實習工作類型和情境。
- ⏳ **1.3 教師功能**：例如查看學生進度。
- ⏳ **1.4 TOCFL 練習模式**。
- ⏳ **經營／時間管理小遊戲**（使用者表示「列入未來策畫」）和**情境對話冒險模式**：都只有示意圖。
- ⏳ **2.0 大學篇**：421 輪調的科大生活。

---

## 8. 下一步的明確任務（建議順序）

1. **詢問使用者第 6 節各項的狀態**，尤其是伺服器是否已上傳最新檔案、語音是否已產生。
2. **協助產生語音**：
   - 使用者執行 `tools/tts/tts_generator.html`，或在 repo 執行 `node tools/tts/make-tool.js` 重新產生。
   - 試聽後如果要調整聲音，改 `tools/tts/tail.html` 的 `VOICES` 和 `make_audio.ps1` 的 `$V`。
   - 調整音高或語速**不會改變**檔名，但已產生的檔案要清除後重做。
3. **語音上線後驗證**：
   - 遊戲內 🔊 播放 Azure 聲音。
   - 「離線・下載語音」顯示「已下載 0 / 2781」，並能下載完成。
   - 斷網後能聽。
4. **真手機離線測試**（第 5 節），有問題就修 `docs/sw.js`。
5. 問卷有回應後，整理回饋並修正劇情或介面（1.1）。
6. **決定音檔是否放進 GitHub**：約 30 MB；授權與是否公開要先問使用者，並確認 Azure 服務條款。如果放，放在 `docs/audio/`。

---

## 9. 成果檔案位置

### A. GitHub repo（主要來源，最完整、最可靠）

`hungyuhsun/taiwan-life-diary`，分支 `main`：

```
src/                 template.html、story*.js、build.js、img/、bg/
data/bank.json       題庫（60 題）
i18n/km.json         高棉文翻譯表
docs/                網站：index.html（建置產物）、about/、feedback/（含 apps_script_Code.gs）、sw.js、manifest.json、圖示
guide/               STORY_FORMAT.md、ADD_COUNTRY.md、DEPLOY.md、vocab-levels.xlsx、HANDOFF.md（本文件）
tools/dev-hash.js    產生開發者密碼雜湊
tools/tts/           語音句子清單與產生器（README.md 有步驟）
```

### B. 作者的雲端工作環境（暫時性，會被回收，不可依賴）

- `/home/claude/ch1/`：工作版，含真正的 `DEV_HASH`、各種 `*.pre_*.js` 備份、Playwright 測試 `*.mjs`、`wrap.js`、`pwa/`、`tts_tool/`。
- `/home/claude/km/`：高棉文翻譯批次檔。
- `/mnt/user-data/outputs/`：交付給使用者的檔案。
  - `twdiary_index.html`（使用者改名為 `index.html` 上傳）
  - `twdiary_site_update.zip`
  - `twdiary_tts_tool.zip`
  - `twdiary_about.zip`
  - `twdiary_vocab_all.xlsx`

### C. 學校伺服器

`/var/www/html/twdiary/`。正式版的問卷網址和試算表 ID 只在這裡。

### D. Google 雲端硬碟交接資料夾

https://drive.google.com/drive/folders/1Y150IG4yE0mbwg119818gnxWXnZWvmqP

- 放本交接紀錄（Google 文件版）、各份說明文件，以及使用者手動上傳的原始碼壓縮檔。
- 內容是副本，**以 GitHub 為準**。更新本文件後，請一併更新雲端硬碟裡的「00 先讀我：交接紀錄」。

### E. Google 試算表

- ID：`1nTGPSY2y8R0hiW5rYzAlH_vXSVUV92WeMg3OQmkpzNU`
- 第一個工作表是學生回饋，另有「教師回饋」工作表。
- Apps Script 已部署為網頁應用程式。

---

## 10. 工作慣例

- 改劇情或介面後執行 `npm run build`，再把 `docs/index.html`（或整包 `docs/` 的相關檔案）交給使用者上傳。使用者沒有用 git 部署。
- 新增或修改句子後，執行 `node tools/tts/make-tool.js` 更新句子清單，再請使用者重跑產生器補做新句子（已做好的會跳過）。
- 新增英文翻譯句子時，要同時在 `i18n/km.json` 補上高棉文。
- 劇情裡的制度細節（輪調、檢定、法規）以使用者提供的事實為準。不確定時先問，不要自行編造學校規定。

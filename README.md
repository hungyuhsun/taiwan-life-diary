# 台灣生活日記 Taiwan Life Diary

給僑生建教專班學生的中文學習生活模擬遊戲。學生從家鄉報名、考華語文能力測驗開始，到在台灣三年的上課、輪調實習、打工、過節、報稅、升學面試和畢業，每天用中文處理真實的生活情境。

A Chinese-learning life-simulation game for overseas students in Taiwan's vocational cooperative (建教) programs. From applying at home and taking TOCFL A1, through three years of classes, rotating internships, part-time work, festivals, tax filing, university interviews and graduation — every day is a Chinese lesson.

- 前傳＋第 1–12 章（一年級到三年級畢業），每章約 15–20 分鐘
- 7 個國家、14 位主角；輔助翻譯：越南文、印尼文、泰文、緬甸文、高棉文、英文
- 對話可以按喇叭聽，拼音和翻譯可以開關
- 劇情依真實行事曆：輪調實習、勞健保、居留證、TOCFL A2／B1、3+4 升科大
- 單一 HTML 檔，不用安裝、不用帳號，進度存在瀏覽器，可用存檔代碼換裝置

原本是為臺中市立青年高級中等學校僑生建教專班製作。改作時請不要以學校官方名義發布。

## 直接玩 Play

- 遊戲：`docs/index.html`（用瀏覽器打開即可）
- 宣傳頁：`docs/about/`
- 開啟 GitHub Pages（Settings → Pages → Branch: `main`，資料夾 `/docs`）後，就有一個公開網址。

## 建置 Build

需要 Node.js 18 以上。

```bash
npm install
npm run build      # 產生 docs/index.html
```

| 路徑 | 內容 |
|---|---|
| `src/template.html` | 遊戲引擎、介面、每章日程（DAYS）、收集卡、結局 |
| `src/story*.js` | 劇本：`story.js` 第 1 章 … `story12.js` 第 12 章、`story_pre.js` 前傳 |
| `src/img/`、`src/bg/` | 人物、物品、背景圖（webp） |
| `data/bank.json` | 自己複習用的填空題庫 |
| `i18n/km.json` | 高棉文翻譯（以英文原句對照） |
| `docs/feedback/` | 學生、教師試玩回饋問卷（Google Apps Script 寫入試算表） |
| `docs/about/` | 多語宣傳頁 |
| `guide/` | 詞彙等級對照表、新增國家／語言、部署說明 |
| `tools/dev-hash.js` | 設定開發者模式（老師密碼） |

劇本格式：每句是 `T(中文, 越南文, 印尼文, 英文, 泰文, 緬甸文)`，事件是一串步驟（`say` 對話、`q` 題目、`poster` 海報、`fx` 數值、`card` 收集卡…）。詳見 `guide/STORY_FORMAT.md`。

## 開發者模式

標題頁的印章或「設定」標題連點 5 下，輸入老師密碼後，可以跳章節、跳日期、看結局畫面。開源版預設停用；要啟用請執行：

```bash
node tools/dev-hash.js 你的密碼
```

把印出的數字填進 `src/template.html` 的 `const DEV_HASH=…;`，再重新建置。程式只存雜湊值，但公開的雜湊值可以被暴力猜測，請用夠長的密碼。

## 回饋問卷

`docs/feedback/` 的問卷會把答案寫進 Google 試算表。設定步驟見 `guide/DEPLOY.md`：建立試算表 → 貼上 `apps_script_Code.gs` → 部署成網頁應用程式 → 把網址填進兩份問卷的 `SCRIPT_URL`。

## 授權 License

- 程式碼（`src/*.js`、`src/template.html` 的程式部分、`tools/`、`docs/feedback/` 的程式）：**MIT**，見 `LICENSE`
- 內容（劇情、對話、翻譯、圖片、詞彙表、宣傳文字）：**CC BY-NC-SA 4.0**，見 `LICENSE-CONTENT.md`
  - 可以分享和改作，要標示出處，不可商業使用，改作要用相同授權
- 第三方套件、字型、資料來源：見 `CREDITS.md`

## 參與 Contributing

歡迎回報錯字、規定不符、翻譯不通順的地方（開 Issue 時請寫章節和事件名稱）。高棉文等翻譯特別需要母語者校對。

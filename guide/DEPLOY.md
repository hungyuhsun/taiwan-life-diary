# 部署

## 網站

`docs/` 整個資料夾就是網站：

```
docs/index.html        遊戲（單一檔案，約 9 MB）
docs/about/            宣傳頁
docs/feedback/         學生回饋問卷
docs/feedback/teacher/ 教師回饋問卷
docs/sw.js、manifest.json、icon-*.png、apple-touch-icon.png  離線使用
docs/audio/            語音檔（自行產生，見 tools/tts/README.md）
```

## 離線使用

網站必須是 https。學生有網路時打開一次，遊戲和字型就會存在手機裡；「加到主畫面」後，沒有網路也能從圖示打開。語音在遊戲「設定 → 下載語音」下載（約 30 MB）。

`sw.js`、`manifest.json` 和圖示要和 `index.html` 放在同一層。更新遊戲時只要換掉 `index.html`，學生下次有網路打開就會拿到新版。

- **GitHub Pages**：Settings → Pages → Source 選 `Deploy from a branch`，Branch 選 `main`、資料夾 `/docs`。
- **學校伺服器**：把 `docs/` 裡的檔案放到網站目錄（例如 `/var/www/html/twdiary/`）。不需要資料庫或後端。

## 回饋問卷（Google 試算表）

1. 建立一份 Google 試算表，記下網址中 `/d/` 和 `/edit` 之間的 ID。
2. 第一個工作表第 1 列放學生問卷的欄位標題（順序見 `apps_script_Code.gs` 的 `FIELDS`）。教師問卷的「教師回饋」工作表會自動建立。
3. 試算表 → 擴充功能 → Apps Script，貼上 `docs/feedback/apps_script_Code.gs`，把 `SHEET_ID` 換成你的 ID。
4. 部署 → 新增部署作業 → 網頁應用程式；執行身分「我」、存取權「所有人」。
5. 把得到的 `/exec` 網址貼到 `docs/feedback/index.html` 和 `docs/feedback/teacher/index.html` 的 `SCRIPT_URL`。
6. 之後改程式：部署 → 管理部署作業 → 編輯 → 新版本（網址不變）。

## 宣傳頁

`docs/about/index.html` 的 `og:url`、`og:image` 和 QR Code 圖（`img/qr.png`）是原學校網址，換成你的網址再發布。

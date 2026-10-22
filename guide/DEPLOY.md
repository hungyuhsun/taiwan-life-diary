# 部署

## 網站

`docs/` 整個資料夾就是網站：

```
docs/index.html        遊戲（單一檔案，約 9 MB）
docs/about/            宣傳頁
docs/feedback/         學生回饋問卷
docs/feedback/teacher/ 教師回饋問卷
```

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

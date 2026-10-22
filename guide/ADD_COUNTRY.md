# 新增國家或語言

以加入柬埔寨（高棉文）為例。

## 1. 國家與主角

`src/template.html`：

- `HOMES` 加一筆：`{zh:'柬埔寨', loc:'កម្ពុជា', lang:'km'}`（`loc` 是母語國名，`lang` 是翻譯語言代碼）
- `HEROES` 的 `length` 加 2（每國一男一女，女生在前）
- `MAMA` 加 `'柬埔寨':'kh'`（媽媽圖 `src/img/mama_kh.webp`）
- `src/build.js` 的拼音清單加國名（`'柬埔寨'`），`{home}` 的拼音才會出現

圖片放進 `src/img/`：`h13.webp`、`h14.webp`（制服）、`h13_casual.webp`、`h14_casual.webp`（前傳便服）、`mama_kh.webp`。人物圖高 420 像素、去背。

## 2. 翻譯語言

如果是新語言：

- `LANGS` 加 `km:'ភាសាខ្មែរ'`
- 翻譯表 `i18n/km.json`：`{ "英文原句": "翻譯", … }`，涵蓋劇本、介面、行動按鈕和題庫
- 字型：Google Fonts 連結加上該語言的 Noto 字型，`--f-ui` 也加進去
- `swapTr` 加上男主角時室友名字的替換（阿蜜 → 阿傑）

檢查有沒有漏翻：在瀏覽器主控台跑一次遊戲內的 `addKm`，再找出所有有 `en` 卻沒有新語言的物件。

## 3. 跟國家有關的劇情

- 潑水節（第 4 章 `P01`）：`ifHome: ['th','my','km']` 由這三國的主角介紹
- 國際文化週（第 4 章 `k01a`）：攤位的國家數
- 前傳面試（`story_pre.js` `O04`）：目前只有緬甸一定要面試

## 4. 問卷與宣傳頁

- `docs/feedback/index.html`：國家選項、`LANGS`、語言按鈕、每題的翻譯
- `docs/about/index.html`：`T` 字典加一個語言區塊、語言按鈕、`HTMLLANG`

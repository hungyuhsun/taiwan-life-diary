# 劇本格式

每一章的劇本是一個 `src/storyN.js`，匯出 `N`（旁白）和 `EVENTS`（事件）。

## 翻譯字串

```js
const { T, P } = require('./story.js');
T('中文', '越南文', '印尼文', '英文', '泰文', '緬甸文')
```

高棉文不寫在劇本裡，而是放在 `i18n/km.json`，用英文原句對照（遊戲啟動時補上）。改了英文句子，記得也改 `km.json` 的鍵。

可以用的代換：`{name}` 名字、`{home}` 國家、`{dept}` 科別、`{work}` 實習地點（中文與翻譯都會換）。

## 事件

事件是一串步驟（陣列），依序執行：

| 步驟 | 說明 |
|---|---|
| `{ scene: 'dorm', npc: 'ayi' }` | 換場景和人物（場景見 `SCENES`，人物見 `PEOPLE`） |
| `{ n: N.key }` | 旁白（有母語翻譯） |
| `{ say: 'chen', zh: '…', listen: 1 }` | 角色說話；`listen: 1` 表示要先聽 |
| `{ q: { p, src, kind, opts, wrong, ok } }` | 選擇題；`opts` 每項 `{ zh, ok, r, then, end }` |
| `{ poster: [['欄位','內容'], …], title: '…' }` | 海報、單據、公告 |
| `{ fx: { hp, mood, money, zh, skill, pop, tidy, aff: { chen: 1 } } }` | 改數值與好感度 |
| `{ card: 'taxslip' }` / `{ title: 'tutor' }` | 給收集卡、稱號 |
| `{ setv: { route: 'work' } }` / `{ ifv: 'route', then, else }` | 設定、判斷變數 |
| `{ ifStatus: 'school' \| 'work', then, else }` | 依輪調（在校／實習）分支 |
| `{ ifDept: '資訊科', then, else }` | 依科別分支 |
| `{ ifHome: ['th','my','km'], then, else }` | 依主角國家的語言分支 |
| `{ ifScore: 3, then, else }` | 本事件答對幾題以上 |
| `{ ifMoney: 5300, then, else }` | 存款夠不夠 |
| `{ violation: 1 }` + `{ redo: 'R21' }` | 違規紀錄、之後再出現一次複習版 |
| `{ link: { href, label, zh, tr } }` | 外部連結 |

## 每章日程

`src/template.html` 的 `DAYS0`～`DAYS12`：每週一格，`main` 是主線事件、`mainAt` 是第幾個時段（0 上午、1 下午、2 晚上）、`onlyIf` 只在在校或實習時出現。`RND3`～`RND12` 是隨機事件池。

新增章節時，還要一起改：`days()`、`startChN()`、`renderEnd`（標題、完成語、下一章按鈕）、`EVNAME`、`EVDAY`、`JOURNEY`、`saveWhere`、`UI.chN／doneN／nextN`，以及 `src/build.js` 的 `require`。

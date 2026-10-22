/**
 * 台灣生活日記｜學生＋教師試玩回饋 — 接收問卷，寫進 Google 試算表
 * 學生寫入第 1 個工作表；教師（form=teacher）寫入「教師回饋」工作表（沒有會自動建立）
 * 設定方式：在試算表「擴充功能 → Apps Script」貼上本檔，按「部署 → 新增部署作業 → 網頁應用程式」
 *   執行身分：我；誰可以存取：所有人。部署後複製網址，貼到 feedback/index.html 的 SCRIPT_URL。
 */
const SHEET_ID = 'PASTE_YOUR_SHEET_ID_HERE'; // 試算表網址 /d/ 和 /edit 中間那一段
// 欄位順序要和試算表第 1 列一致
const FIELDS = ['lang','src','country','dept','grade','progress','device','fun','cont','rec','diff','trans','useful','helpful','hard','problems','probch','like','wish','ch','glang','ua'];

const T_SHEET = '教師回饋';
const T_HEAD = ['時間','稱呼','身分','試玩章節','校規與時程(1-5)','實習與薪資(1-5)','生活資訊(1-5)','情境真實度(1-5)',
  '校規與時程 修正','實習與薪資 修正','生活資訊 修正','情境真實度 修正','詞彙難度','中文自然度(1-5)','不自然的句子',
  '可檢查語言','翻譯問題','使用情境','希望的教師功能','推薦(1-5)','下一章情境','錯誤回報','裝置資訊(自動)'];
const T_FIELDS = ['name','role','chapters','acc_rules','acc_work','acc_life','acc_real','fix_rules','fix_work','fix_life','fix_real',
  'vocab','natural','naturalNote','langs','transNote','contexts','features','rec','nextScene','bugs','ua'];

function teacherSheet_(ss) {
  let sh = ss.getSheetByName(T_SHEET);
  if (!sh) {
    sh = ss.insertSheet(T_SHEET);
    sh.appendRow(T_HEAD);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, T_HEAD.length).setFontWeight('bold');
  }
  return sh;
}

function clean_(v) {
  let s = (v === undefined || v === null) ? '' : String(v);
  s = s.slice(0, 2000);
  // 防止試算表公式注入
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const d = JSON.parse(e.postData.contents || '{}');
    const ss = SpreadsheetApp.openById(SHEET_ID);
    if (d.form === 'teacher') {
      teacherSheet_(ss).appendRow([new Date()].concat(T_FIELDS.map(k => clean_(d[k]))));
    } else {
      ss.getSheets()[0].appendRow([new Date()].concat(FIELDS.map(k => clean_(d[k]))));
    }
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return ContentService.createTextOutput('台灣生活日記 回饋問卷：運作中');
}

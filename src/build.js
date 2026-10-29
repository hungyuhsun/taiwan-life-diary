// 建置：npm install && npm run build  →  docs/index.html（單一檔案，可直接放上網站）
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const { pinyin } = require('pinyin-pro');
const { P, N: N1, EVENTS: E1 } = require('./story.js');
const S2 = require('./story2.js');
const S3 = require('./story3.js');
const S4 = require('./story4.js');
const S5 = require('./story5.js');
const S6 = require('./story6.js');
const S7 = require('./story7.js');
const S8 = require('./story8.js');
const SL = require('./story_life.js');
const S9 = require('./story9.js');
const SQ = require('./story_tocfl.js');
const SP = require('./story_pre.js');
const S10 = require('./story10.js');
const S11 = require('./story11.js');
const S12 = require('./story12.js');
const { MINI } = require('./story_mini.js');
const N = { ...N1, ...S2.N, ...S3.N, ...S4.N, ...S5.N, ...S6.N, ...S7.N, ...S8.N, ...SL.N, ...S9.N, ...SQ.N, ...SP.N, ...S10.N, ...S11.N, ...S12.N }, EVENTS = { ...E1, ...S2.EVENTS, ...S3.EVENTS, ...S4.EVENTS, ...S5.EVENTS, ...S6.EVENTS, ...S7.EVENTS, ...S8.EVENTS, ...SL.EVENTS, ...S9.EVENTS, ...SQ.EVENTS, ...SP.EVENTS, ...S10.EVENTS, ...S11.EVENTS, ...S12.EVENTS };

const OV = { '嗎': 'ma', '呢': 'ne', '吧': 'ba', '個': 'ge', '們': 'men', '麼': 'me', '還': 'hái', '喔': 'o', '啦': 'la', '垃': 'lè', '圾': 'sè' };
const PUN = { '，': ',', '。': '.', '？': '?', '！': '!', '：': ':', '、': ',', '；': ';', '（': '(', '）': ')', '「': '"', '」': '"', '／': '/', '—': '-', '～': '~', '……': '…' };
const isZh = c => /[㐀-鿿]/.test(c);
function py1(t) {
  if (!t) return '';
  const chars = [...t];
  const arr = pinyin(t, { toneType: 'symbol', type: 'array', nonZh: 'consecutive' });
  const res = []; let i = 0;
  for (const p of arr) {
    if (i < chars.length && isZh(chars[i])) { res.push(OV[chars[i]] || p); i++; }
    else { let run = ''; while (i < chars.length && !isZh(chars[i])) { run += chars[i]; i++; }
      run = run.replace(/[，。？！：、；（）「」／—～]/g, m => PUN[m] || m); if (run.trim()) res.push(run); }
  }
  return res.join(' ').replace(/\s+([,.?!:;)"~…])/g, '$1').replace(/\(\s+/g, '(').replace(/\s+/g, ' ').trim();
}
function pyTok(t) { // keep {tokens}
  return t.split(/(\{\w+\})/).map(seg => /^\{\w+\}$/.test(seg) ? seg : py1(seg)).join(' ').replace(/\s+([,.?!:;)"~…])/g, '$1').replace(/\s+/g, ' ').trim();
}
const py = {};
const add = s => { if (s && !(s in py)) py[s] = pyTok(s); };
function walk(steps) {
  for (const st of steps) {
    if (st.say) { add(st.zh); if (st.homeVN) add(st.homeVN); }
    if (st.q) { st.q.opts.forEach(o => add(o.zh)); for (const k of ['ok', 'wrong']) if (st.q[k]) walk(st.q[k]); st.q.opts.forEach(o => { o.r && walk(o.r); o.then && walk(o.then); }); if (st.q.stem) add(st.q.stem); add(st.q.p.zh); }
    if (st.res) st.res.forEach(([, steps]) => walk(steps));
    if (st.link) add(st.link.zh);
    if (st.then) walk(st.then); if (st.else) walk(st.else);
  }
}
Object.values(EVENTS).forEach(walk);
Object.values(N).forEach(t => add(t.zh)); Object.values(P).forEach(t => add(t.zh));
(function stems(steps){ for (const st of steps) { if (st.q) { add(st.q.p.zh); if (st.q.stem) add(st.q.stem); } } })([].concat(...Object.values(EVENTS)));
for (const s of ['你想從哪裡開始？','這個星期要做什麼？']) add(s);
// 小遊戲：句子、垃圾和食物名稱、點餐詞組（詞組用 # 開頭，遊戲中再接起來）
Object.values(MINI.lines).forEach(add); MINI.trash.forEach(t => add(t[0])); MINI.food.forEach(f => add(f[0]));
for (const w of MINI.phrases) py['#' + w] = py1(w);
for (const w of ['越南', '印尼', '泰國', '緬甸', '菲律賓', '馬來西亞', '柬埔寨', '資訊科', '烘焙食品科', '餐飲管理科', '汽車科', '商用資訊科', '工作證', '口罩', '安全帽', '電腦公司', '麵包工廠', '餐廳廚房', '修車廠', '貿易公司'])
  py['#' + w] = py1(w);

// 題庫：自己複習時出的填空題（data/bank.json）
const bank = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'bank.json'), 'utf8'));
for (const q of bank) py[q.q] = py[q.q] || pyTok(q.q);

const IMG = {};
for (const f of fs.readdirSync(path.join(__dirname, 'img'))) {
  if (!f.endsWith('.webp')) continue;
  IMG[f.replace('.webp', '')] = 'data:image/webp;base64,' + fs.readFileSync(path.join(__dirname, 'img', f)).toString('base64');
}
const BG = {};
for (const f of fs.readdirSync(path.join(__dirname, 'bg'))) if (f.endsWith('.webp'))
  BG[f.replace('.webp', '')] = 'data:image/webp;base64,' + fs.readFileSync(path.join(__dirname, 'bg', f)).toString('base64');
const DATA = { events: EVENTS, P, N, py, bank, mini: MINI };
let html = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');
html = html.replace('/*__QRLIB__*/', () => fs.readFileSync(require.resolve('qrcode-generator/qrcode.js'),'utf8'));
html = html.replace('__DATA__', () => JSON.stringify(DATA)).replace('__IMG__', () => JSON.stringify(IMG)).replace('__BG__', () => JSON.stringify(BG)).replace('__KM__', () => fs.readFileSync(path.join(ROOT, 'i18n', 'km.json'),'utf8'));
const PRE = '<!doctype html><html lang="zh-Hant-TW"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><link rel="manifest" href="manifest.json"><link rel="apple-touch-icon" href="apple-touch-icon.png"><meta name="theme-color" content="#26324A"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-title" content="台灣生活日記"><style>[hidden]{display:none!important}body{margin:0}</style></head><body>\n';
fs.writeFileSync(path.join(ROOT, 'docs', 'index.html'), PRE + html + '\n</body></html>');
console.log('ok', Math.round(html.length / 1024) + 'KB', 'bank', bank.length, 'py', Object.keys(py).length);

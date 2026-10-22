// 產生語音工作清單：node tools/tts/tts_jobs.js  →  tools/tts/tts_jobs.json
// 每筆 { h: 檔名雜湊, v: 聲音設定, t: 要唸的文字 }。遊戲用相同的 voiceKey/norm/hash 找音檔。
const fs = require('fs'), path = require('path');
const SRC = fs.existsSync(path.join(__dirname, 'story.js')) ? __dirname : path.join(__dirname, '../../src');
const OUT = SRC === __dirname ? path.join(__dirname, 'out') : __dirname;
const mods = ['story.js','story2.js','story3.js','story4.js','story5.js','story6.js','story7.js','story8.js','story_life.js','story9.js','story_tocfl.js','story_pre.js','story10.js','story11.js','story12.js'];
const EVENTS = {}, N = {}; let P = {};
for (const m of mods) { const x = require(path.join(SRC, m)); Object.assign(EVENTS, x.EVENTS); Object.assign(N, x.N || {}); if (x.P) P = x.P; }

// 角色 → 聲音設定（與 template.html 的 VOICE_OF 一致）
const VOICE_OF = {
  rina:'f_young', amei:'f_young', alian:'f_young', newbie:'f_young', newbie2:'f_young',
  tongxue:'m_young', xiaoyang:'m_young', xuezhang:'m_young', ajie:'m_young', xinsheng:'m_young', xinsheng2:'m_young', cousin:'m_young',
  lin:'f_adult', li:'f_adult', customer:'f_adult', nurse:'f_adult', host:'f_adult', teacher:'f_adult', prof:'f_adult', officer:'f_adult', photog:'f_adult', mama:'f_adult',
  chen:'m_adult', clerk:'m_adult', coach:'m_adult', staff:'m_adult', stranger:'m_adult', guo:'m_adult',
  zhang:'m_old', huang:'m_old', passer:'m_old',
  ayi:'f_old', ajiao:'f_old',
};
const HOMES = ['越南','印尼','泰國','緬甸','菲律賓','馬來西亞','柬埔寨'];
const DEPTS = [['資訊科','電腦公司','工作證'],['烘焙食品科','麵包工廠','口罩'],['餐飲管理科','餐廳廚房','口罩'],['汽車科','修車廠','安全帽'],['商用資訊科','貿易公司','工作證']];
const norm = (t) => t.replace(/[（(].*?[)）]/g, '').replace(/[〔〕]/g, '').replace(/＿＿/g, '嗯').trim();
function hash(s) { let h1 = 0x811c9dc5, h2 = 0x01000193; for (let i = 0; i < s.length; i++) { const c = s.charCodeAt(i); h1 = Math.imul(h1 ^ c, 16777619); h2 = Math.imul(h2 ^ c, 2246822519) ^ (h2 >>> 13); }
  return (h1 >>> 0).toString(16).padStart(8, '0') + (h2 >>> 0).toString(16).padStart(8, '0'); }

// 展開代換字：{name} 不預先產生（每個人名字不同，播放時退回手機語音）
function expand(t) {
  if (/\{name\}/.test(t)) return [];
  let outs = [t];
  const sub = (arr, fn) => { const r = []; for (const o of outs) for (const v of arr) r.push(fn(o, v)); outs = r; };
  if (/\{home\}/.test(t)) sub(HOMES, (o, v) => o.replace(/\{home\}/g, v));
  if (/\{(dept|work|gear|gear2)\}/.test(t)) sub(DEPTS, (o, [d, w, g]) => o.replace(/\{dept\}/g, d).replace(/\{work\}/g, w).replace(/\{gear\}/g, g).replace(/\{gear2\}/g, g === '口罩' ? '安全帽' : '口罩'));
  if (/\{sib\}/.test(t)) sub(['妹妹', '弟弟'], (o, v) => o.replace(/\{sib\}/g, v));
  if (/\{senior\}/.test(t)) sub(['學姊', '學長'], (o, v) => o.replace(/\{senior\}/g, v));
  // 男主角時，劇本的「阿蜜」會換成「阿傑」
  if (outs.some(o => o.includes('阿蜜'))) outs = outs.concat(outs.map(o => o.replace(/阿蜜/g, '阿傑')));
  return outs;
}
const jobs = new Map();
const add = (v, raw) => { if (!raw || !/[一-鿿]/.test(raw)) return; for (const t of expand(raw)) { const n = norm(t); if (!n) continue; const k = v + '|' + n; if (!jobs.has(k)) jobs.set(k, { h: hash(k), v, t: n }); } };
const sayVoices = (who) => who === 'me' ? ['me_f', 'me_m'] : who === 'amei' ? ['f_young', 'm_young'] : [VOICE_OF[who] || 'nar'];

function walk(steps) {
  for (const st of steps || []) {
    if (!st) continue;
    if (st.n && st.n.zh) add('nar', st.n.zh);
    if (st.say) for (const v of sayVoices(st.say)) { add(v, st.zh); if (st.homeVN) add(v, st.homeVN); }
    if (st.link && st.link.zh) add('nar', st.link.zh);
    if (st.poster) { const raw = st.poster.map(([a, b]) => (a ? a + '，' : '') + b).join('。'); add('nar', raw); }
    if (st.q) {
      if (st.q.p && st.q.p.zh) add('nar', st.q.p.zh);
      if (st.q.stem) add('nar', st.q.stem);
      for (const o of st.q.opts || []) { if (o.ok || st.q.free) { add('me_f', o.zh); add('me_m', o.zh); } walk(o.r); walk(o.then); }
      walk(st.q.wrong); walk(st.q.ok);
    }
    if (st.res) st.res.forEach(([, s]) => walk(s));
    walk(st.then); walk(st.else);
  }
}
Object.values(EVENTS).forEach(walk);
Object.values(N).forEach(t => t && t.zh && add('nar', t.zh));
Object.values(P).forEach(t => t && t.zh && add('nar', t.zh));
for (const s of ['你想從哪裡開始？', '晚上了，該睡覺了。', '今天上午要做什麼？', '今天下午要做什麼？', '今天晚上要做什麼？', '你好，歡迎來到台灣。']) add('nar', s);
// 收集卡名稱
const tpl = fs.readFileSync(path.join(SRC, 'template.html'), 'utf8');
const cards = eval('(' + tpl.match(/const CARDS = (\{[^;]*\});/)[1] + ')');
Object.values(cards).forEach(c => add('nar', c));
// 題庫
const bankPath = fs.existsSync(path.join(SRC, '../data/bank.json')) ? path.join(SRC, '../data/bank.json') : null;
if (bankPath) JSON.parse(fs.readFileSync(bankPath, 'utf8')).forEach(b => { add('nar', b.full); add('nar', b.q); });
else { const d = JSON.parse(fs.readFileSync('/home/claude/build/data.json', 'utf8')); for (const sc of d.scenes) if ([1, 2, 3, 5, 6].includes(sc.n)) for (const q of sc.qs) if (q.t === 'R1') { add('nar', q.full); add('nar', q.q); } }

const arr = [...jobs.values()];
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'tts_jobs.json'), JSON.stringify(arr));
const chars = arr.reduce((s, j) => s + j.t.length, 0);
const byV = {}; arr.forEach(j => byV[j.v] = (byV[j.v] || 0) + 1);
console.log('jobs', arr.length, 'chars', chars, byV);

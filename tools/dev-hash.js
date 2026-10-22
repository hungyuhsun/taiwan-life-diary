// 產生開發者模式（老師密碼）的雜湊值。
// 用法：node tools/dev-hash.js 你的密碼
// 把印出來的數字貼到 src/template.html 的 const DEV_HASH=…; 再重新 npm run build。
// 只存雜湊值，不存密碼；但公開的雜湊值可以被暴力猜測，請用夠長的密碼（例如 10 字元以上、含英文和數字）。
const pw = process.argv[2];
if (!pw) { console.error('用法：node tools/dev-hash.js 你的密碼'); process.exit(1); }
const devHash = (str, seed = 7) => { let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
  for (let i = 0; i < str.length; i++) { const ch = str.charCodeAt(i); h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677); }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507); h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507); h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0); };
console.log(devHash('twdiary:' + pw.trim()));

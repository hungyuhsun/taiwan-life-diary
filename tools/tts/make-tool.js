// 產生「tts_generator.html」（把 tts_jobs.json 包進去）：node tools/tts/make-tool.js
const fs = require('fs'), path = require('path'), d = __dirname;
require('./tts_jobs.js');
const jobs = fs.readFileSync(path.join(d, 'tts_jobs.json'), 'utf8');
fs.writeFileSync(path.join(d, 'tts_generator.html'), fs.readFileSync(path.join(d, 'head.html'), 'utf8') + 'const JOBS=' + jobs + ';\n' + fs.readFileSync(path.join(d, 'tail.html'), 'utf8'));
console.log('寫入 tools/tts/tts_generator.html');

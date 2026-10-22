// 華語文能力測驗 A2（一年級下學期要通過）
// 考試由外部單位辦理，大約每兩個月一次；學校幫學生團體報名，報名費有優惠。
// Q01（第 3 章 3 月）：報名 A2　Q02（第 4 章 5 月）：考 A2　Q03（第 4 章 6 月）：公布成績
// Q04（第 5 章 8 月）：沒通過的同學重新報名再考；通過的同學幫同學複習。
const { T, P } = require('./story.js');

const N = {
  q01a: T('一年級下學期結束以前，大家要通過華語文能力測驗的基礎級（A2）。林老師發下報名表。', 'Trước khi kết thúc học kỳ 2 năm lớp 10, mọi người phải đậu TOCFL cấp Cơ sở (A2). Cô Lâm phát phiếu đăng ký.', 'Sebelum semester kedua kelas 10 berakhir, semua harus lulus TOCFL tingkat Dasar (A2). Bu Lin membagikan formulir pendaftaran.', 'Before the end of Year 1’s second semester, everyone must pass TOCFL Level 2 (A2). Ms. Lin hands out registration forms.', 'ก่อนจบภาคเรียนที่สองของปีหนึ่ง ทุกคนต้องสอบ TOCFL ระดับ A2 ให้ผ่าน ครูหลินแจกใบสมัคร', 'ပထမနှစ် ဒုတိယစာသင်နှစ်ဝက် မပြီးခင် အားလုံး TOCFL A2 အောင်ရမယ်။ ဆရာမလင်က လျှောက်လွှာ ဝေတယ်။'),
  q02a: T('五月中，你第一次參加華語文能力測驗。考場在別的學校，大家一起坐公車去。', 'Giữa tháng Năm, bạn thi TOCFL lần đầu tiên. Điểm thi ở trường khác, mọi người cùng đi xe buýt.', 'Pertengahan Mei, kamu ikut TOCFL untuk pertama kali. Tempat ujiannya di sekolah lain, semua naik bus bersama.', 'In mid-May you take TOCFL for the first time. The test site is at another school, so everyone goes together by bus.', 'กลางเดือนพฤษภาคม คุณสอบ TOCFL เป็นครั้งแรก สนามสอบอยู่โรงเรียนอื่น ทุกคนนั่งรถเมล์ไปด้วยกัน', 'မေလလယ်မှာ TOCFL ကို ပထမဆုံး ဖြေတယ်။ စာမေးပွဲဌာနက တခြားကျောင်းမှာမို့ အားလုံး ဘတ်စ်ကားနဲ့ အတူသွားတယ်။'),
  q02b: T('考完了！成績下個月才會出來。', 'Thi xong rồi! Tháng sau mới có kết quả.', 'Selesai ujian! Hasilnya baru keluar bulan depan.', 'Done! The results come out next month.', 'สอบเสร็จแล้ว! ผลสอบจะออกเดือนหน้า', 'ဖြေပြီးပြီ! ရလဒ်က နောက်လမှ ထွက်မယ်။'),
  q03a: T('林老師在班上公布華語文能力測驗的成績。', 'Cô Lâm công bố kết quả TOCFL trong lớp.', 'Bu Lin mengumumkan hasil TOCFL di kelas.', 'Ms. Lin announces the TOCFL results in class.', 'ครูหลินประกาศผลสอบ TOCFL ในห้อง', 'ဆရာမလင်က TOCFL ရလဒ်ကို အတန်းထဲမှာ ကြေညာတယ်။'),
  q03p: T('你通過了基礎級（A2）！', 'Bạn đã đậu cấp Cơ sở (A2)!', 'Kamu lulus tingkat Dasar (A2)!', 'You passed Level 2 (A2)!', 'คุณสอบผ่านระดับ A2 แล้ว!', 'A2 အောင်ပြီ!'),
  q03f: T('這次差一點點，沒有通過。林老師說，暑假會幫大家加強，八月還可以再考一次。', 'Lần này thiếu một chút nên chưa đậu. Cô Lâm nói hè này sẽ giúp mọi người ôn thêm, tháng Tám có thể thi lại.', 'Kali ini kurang sedikit, belum lulus. Bu Lin bilang liburan musim panas nanti akan membantu belajar, bulan Agustus bisa ujian lagi.', 'Just a little short this time — you didn’t pass. Ms. Lin says she’ll help everyone review over the summer, and you can retake it in August.', 'รอบนี้ขาดไปนิดเดียว ยังไม่ผ่าน ครูหลินบอกว่าช่วงปิดเทอมฤดูร้อนจะช่วยติวให้ เดือนสิงหาคมสอบใหม่ได้', 'ဒီတစ်ခါ နည်းနည်းလေး လိုလို့ မအောင်သေးဘူး။ နွေရာသီမှာ ဆရာမလင်က ထပ်သင်ပေးမယ်၊ သြဂုတ်လမှာ ပြန်ဖြေလို့ရတယ်။'),
  q04a: T('八月，你再考一次華語文能力測驗基礎級（A2）。這一次你比較不緊張了。', 'Tháng Tám, bạn thi lại TOCFL cấp Cơ sở (A2). Lần này bạn đỡ căng thẳng hơn.', 'Bulan Agustus, kamu ikut lagi TOCFL tingkat Dasar (A2). Kali ini kamu tidak terlalu gugup.', 'In August you retake TOCFL Level 2 (A2). This time you’re less nervous.', 'เดือนสิงหาคม คุณสอบ TOCFL ระดับ A2 อีกครั้ง รอบนี้ไม่ค่อยตื่นเต้นแล้ว', 'သြဂုတ်လမှာ TOCFL A2 ကို ပြန်ဖြေတယ်။ ဒီတစ်ခါ သိပ်မလန့်တော့ဘူး။'),
  q04p: T('一個月後成績出來了：你通過了！', 'Một tháng sau có kết quả: bạn đã đậu!', 'Sebulan kemudian hasilnya keluar: kamu lulus!', 'A month later the results arrive: you passed!', 'หนึ่งเดือนต่อมาผลออก: คุณสอบผ่าน!', 'တစ်လအကြာ ရလဒ်ထွက်လာတယ်။ အောင်ပြီ!'),
  q04f: T('還是差一點。林老師說：「沒關係，考試大概每兩個月就有一次，我們再練習。」', 'Vẫn thiếu một chút. Cô Lâm nói: “Không sao, khoảng hai tháng lại có một kỳ thi, chúng ta luyện tiếp.”', 'Masih kurang sedikit. Bu Lin bilang, “Tidak apa-apa, ujian ada kira-kira dua bulan sekali, kita latihan lagi.”', 'Still a little short. Ms. Lin says, “It’s okay — there’s a test about every two months. We’ll keep practicing.”', 'ยังขาดอีกนิด ครูหลินบอกว่า “ไม่เป็นไร สอบมีประมาณทุกสองเดือน เราฝึกกันต่อ”', 'နည်းနည်း လိုသေးတယ်။ ဆရာမလင်က “ရပါတယ်၊ စာမေးပွဲက နှစ်လတစ်ခါလောက်ရှိတယ်၊ ဆက်လေ့ကျင့်ကြမယ်” လို့ ပြောတယ်။'),
  q04h: T('你已經通過 A2 了。八月同學重新考試那天，你在 LINE 上幫還要考試的同學加油。', 'Bạn đã đậu A2 rồi. Ngày thi lại tháng Tám, bạn nhắn LINE cổ vũ các bạn còn phải thi.', 'Kamu sudah lulus A2. Pada hari ujian ulang bulan Agustus, kamu menyemangati teman yang masih harus ujian lewat LINE.', 'You’ve already passed A2. On the August retake day, you cheer on classmates who still have to take it on LINE.', 'คุณสอบผ่าน A2 แล้ว วันสอบซ่อมเดือนสิงหาคม คุณส่ง LINE ให้กำลังใจเพื่อนที่ยังต้องสอบ', 'A2 အောင်ပြီးပြီ။ သြဂုတ်လ ပြန်ဖြေတဲ့နေ့မှာ ဖြေရဦးမယ့် သူငယ်ချင်းတွေကို LINE ကနေ အားပေးတယ်။'),
};
const say = (who, zh, extra = {}) => ({ say: who, zh, ...extra });
const n = (k) => ({ n: N[k] });
const LIFE = '生活中文';

const EVENTS = {
  // 3 月：報名 A2（團體報名，報名費優惠）
  Q01: [
    { scene: 'classroom', npc: 'lin' },
    n('q01a'),
    { poster: [['考試', '華語文能力測驗　基礎級（A2）'], ['考試日期', '五月十七日'], ['報名截止', '三月三十一日'], ['報名', '學校團體報名，報名費有優惠'], ['要準備', '照片一張、居留證']], title: '報名說明' },
    { q: { p: T('考試是哪一天？', 'Ngày thi là ngày nào?', 'Ujiannya tanggal berapa?', 'What is the test date?', 'สอบวันไหน', 'စာမေးပွဲ ဘယ်နေ့လဲ။'), src: LIFE, opts: [
      { zh: '五月十七日', ok: 1 }, { zh: '三月三十一日', r: [say('lin', '那是報名截止的日子喔。')] }, { zh: '五月七日' }, { zh: '七月十五日' },
    ], wrong: [say('lin', '看「考試日期」那一行。')] } },
    say('lin', '學校幫大家團體報名，報名費比自己報名便宜。照片和居留證影本，這個星期五以前交給我。', { listen: 1 }),
    { q: { p: T('為什麼大家一起報名比較好？', 'Tại sao đăng ký cùng nhau thì tốt hơn?', 'Mengapa lebih baik mendaftar bersama?', 'Why is it better to register as a group?', 'ทำไมสมัครพร้อมกันถึงดีกว่า', 'အတူတူ လျှောက်တာ ဘာကြောင့် ပိုကောင်းလဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '報名費比較便宜', ok: 1 }, { zh: '考試比較簡單' }, { zh: '不用帶居留證' }, { zh: '可以不用考聽力' },
    ], wrong: [say('lin', '再聽一次。')] } },
    { q: { p: T('照片和居留證影本，要什麼時候交？', 'Ảnh và bản sao thẻ cư trú phải nộp khi nào?', 'Foto dan fotokopi ARC harus diserahkan kapan?', 'When must you hand in the photo and ARC copy?', 'รูปถ่ายและสำเนาบัตรถิ่นที่อยู่ต้องส่งเมื่อไร', 'ဓာတ်ပုံနဲ့ နေထိုင်ခွင့်ကတ် မိတ္တူကို ဘယ်တော့ အပ်ရမလဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '這個星期五以前', ok: 1 }, { zh: '五月十七日' }, { zh: '下個月' }, { zh: '考試那天' },
    ], wrong: [say('lin', '我說「星期五」喔。')], ok: [say('lin', '很好！每天聽一點中文，五月一定沒問題。')] } },
    { fx: { zh: 3, aff: { lin: 1 } } },
  ],
  // 5 月：考 A2
  Q02: [
    { scene: 'classroom', npc: 'teacher' },
    n('q02a'),
    { poster: [['報到', '早上八點半以前'], ['要帶', '准考證、居留證'], ['聽力', '五十分鐘'], ['閱讀', '六十分鐘']], title: '考試須知' },
    { q: { p: T('考試要帶什麼？', 'Đi thi phải mang gì?', 'Apa yang harus dibawa saat ujian?', 'What must you bring to the test?', 'ไปสอบต้องเอาอะไรไป', 'စာမေးပွဲကို ဘာယူသွားရမလဲ။'), src: LIFE, opts: [
      { zh: '准考證、居留證', ok: 1 }, { zh: '課本、手機' }, { zh: '便當、飲料' }, { zh: '健保卡、悠遊卡' },
    ], wrong: [say('teacher', '請看「要帶」那一行。')] } },
    say('teacher', '女：「你明天幾點上班？」男：「我九點上班，可是八點就要出門，因為坐公車要一個小時。」', { listen: 1 }),
    { q: { p: T('男生幾點出門？', 'Người nam ra khỏi nhà lúc mấy giờ?', 'Jam berapa laki-laki itu berangkat?', 'What time does the man leave home?', 'ผู้ชายออกจากบ้านกี่โมง', 'အမျိုးသား ဘယ်နှနာရီ အိမ်က ထွက်လဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '八點', ok: 1 }, { zh: '九點' }, { zh: '十點' }, { zh: '一點' },
    ], wrong: [] } },
    { poster: [['公告', '這個星期六下午兩點到五點，宿舍停水。'], ['', '請大家先準備好要用的水。']], title: '宿舍公告' },
    { q: { p: T('什麼時候停水？', 'Khi nào bị cúp nước?', 'Kapan air mati?', 'When will the water be off?', 'น้ำไม่ไหลเมื่อไร', 'ဘယ်အချိန် ရေပြတ်မလဲ။'), src: LIFE, opts: [
      { zh: '星期六下午', ok: 1 }, { zh: '星期六早上' }, { zh: '星期天下午' }, { zh: '每天晚上' },
    ], wrong: [] } },
    say('teacher', '男：「這件外套多少錢？」女：「本來一千二，今天打八折。」', { listen: 1 }),
    { q: { p: T('外套今天多少錢？', 'Hôm nay áo khoác giá bao nhiêu?', 'Berapa harga jaket hari ini?', 'How much is the jacket today?', 'วันนี้เสื้อแจ็กเก็ตราคาเท่าไร', 'ဒီနေ့ ဂျာကင်က ဘယ်လောက်လဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '九百六十元', ok: 1 }, { zh: '一千二百元' }, { zh: '八百元' }, { zh: '一千元' },
    ], wrong: [] } },
    { ifScore: 3, then: [{ setv: { tocflA2: 1 } }], else: [{ setv: { tocflA2: 0 } }] },
    n('q02b'),
    { fx: { zh: 5, hp: -10 } },
  ],
  // 6 月：公布 A2 成績
  Q03: [
    { scene: 'classroom', npc: 'lin' },
    n('q03a'),
    { ifv: 'tocflA2', then: [n('q03p'), { card: 'tocflA2cert' }, say('lin', '恭喜！下一個目標是 B1。'), { fx: { mood: 15, aff: { lin: 1 } } }],
      else: [n('q03f'), say('lin', '別難過，我們一起準備。'), { fx: { mood: -5 } }] },
  ],
  // 8 月：重新報名再考（沒通過的同學）
  Q04: [
    { ifv: 'tocflA2', then: [{ scene: 'room', npc: null }, n('q04h'), { fx: { pop: 2 } }], else: [
      { scene: 'classroom', npc: 'teacher' },
      n('q04a'),
      say('teacher', '男：「我們星期幾去看電影？」女：「星期五我要打工，星期六好嗎？」', { listen: 1 }),
      { q: { p: T('他們星期幾去看電影？', 'Họ đi xem phim vào thứ mấy?', 'Hari apa mereka menonton film?', 'Which day will they go to the movie?', 'พวกเขาไปดูหนังวันอะไร', 'သူတို့ ဘယ်နေ့ ရုပ်ရှင်သွားကြည့်မလဲ။'), src: LIFE, kind: 'listen', opts: [
        { zh: '星期六', ok: 1 }, { zh: '星期五' }, { zh: '星期天' }, { zh: '星期一' },
      ], wrong: [] } },
      { poster: [['公告', '圖書館星期一休息。'], ['', '星期二到星期日，早上九點到晚上九點開放。']], title: '圖書館公告' },
      { q: { p: T('圖書館哪一天不開？', 'Thư viện đóng cửa ngày nào?', 'Perpustakaan tutup hari apa?', 'Which day is the library closed?', 'ห้องสมุดปิดวันไหน', 'စာကြည့်တိုက် ဘယ်နေ့ ပိတ်လဲ။'), src: LIFE, opts: [
        { zh: '星期一', ok: 1 }, { zh: '星期二' }, { zh: '星期日' }, { zh: '每天都開' },
      ], wrong: [] } },
      { ifScore: 1, then: [{ setv: { tocflA2: 1 } }, n('q04p'), { card: 'tocflA2cert' }, { fx: { mood: 15 } }], else: [n('q04f')] },
      { fx: { zh: 5 } },
    ] },
  ],
};

module.exports = { N, EVENTS };

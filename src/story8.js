// 第八章劇本資料（二年級 4–6 月）：清明節、華語文能力測驗（B1）、客訴處理／健康檢查（依在校或實習）、母親節、端午節、二年級結業。
// 隨機事件：梅雨季衣服曬不乾、同學要闖紅燈（選錯有後果、教學、複習）。
// 詞彙：B1 持續增加（祖先、傳統、紀念、類似、本來、恐怕、由於、抱怨、處理、仔細、改善、品質、平安、成果、努力、安全）。
const { T, P } = require('./story.js');
const S3 = require('./story3.js');

const N = {
  e01a: T('四月初是清明節，學校放假。林老師在放假前介紹這個節日。', 'Đầu tháng Tư là Tết Thanh Minh, trường được nghỉ. Trước kỳ nghỉ, cô Lâm giới thiệu về ngày lễ này.', 'Awal April adalah Festival Qingming, sekolah libur. Sebelum libur, Bu Lin memperkenalkan hari raya ini.', 'Early April is Tomb-Sweeping Day, and school is off. Before the holiday, Ms. Lin introduces the festival.', 'ต้นเดือนเมษายนเป็นเทศกาลเชงเม้ง โรงเรียนหยุด ก่อนหยุดครูหลินแนะนำเทศกาลนี้', 'ဧပြီလဆန်းမှာ ချင်းမင်ပွဲတော်ဖြစ်ပြီး ကျောင်းပိတ်တယ်။ မပိတ်ခင် ဆရာမလင်က ဒီပွဲတော်ကို မိတ်ဆက်ပေးတယ်။'),
  e01b: T('放學後，你去便利商店，阿嬌拿了一卷潤餅給你。', 'Tan học, bạn đến cửa hàng tiện lợi, bà A Kiều đưa cho bạn một cuốn bánh cuốn Đài Loan.', 'Pulang sekolah, kamu ke minimarket, Nenek A Jiao memberimu satu gulung lumpia Taiwan.', 'After school, you go to the convenience store, and A-Jiao hands you a Taiwanese spring roll.', 'หลังเลิกเรียน คุณไปร้านสะดวกซื้อ คุณยายอาเจียวยื่นเปาะเปี๊ยะสดไต้หวันให้หนึ่งม้วน', 'ကျောင်းဆင်းတော့ စတိုးဆိုင်ကို သွားတယ်၊ အဖွားအာကျောင်က ကော်ပြန့်တစ်လိပ် ပေးတယ်။'),
  e02a: T('五月十日，你參加華語文能力測驗進階級（B1）。考場在另一所學校。', 'Ngày 10 tháng 5, bạn thi TOCFL cấp Tiến bộ (B1). Điểm thi ở một trường khác.', 'Tanggal 10 Mei, kamu ikut TOCFL tingkat Menengah (B1). Tempat ujiannya di sekolah lain.', 'On May 10th, you take the TOCFL Intermediate (B1) test at another school.', 'วันที่ 10 พฤษภาคม คุณสอบ TOCFL ระดับกลาง (B1) สนามสอบอยู่ที่โรงเรียนอื่น', 'မေလ ၁၀ ရက်မှာ TOCFL အလယ်အဆင့် (B1) စာမေးပွဲ ဖြေတယ်။ စာမေးပွဲဌာနက တခြားကျောင်းမှာပါ။'),
  e02b: T('考完試，你走出考場，覺得很累，可是也很有成就感。成績六月才會出來。', 'Thi xong, bạn bước ra khỏi phòng thi, thấy rất mệt nhưng cũng rất có cảm giác thành tựu. Tháng Sáu mới có kết quả.', 'Selesai ujian, kamu keluar ruangan, merasa lelah tapi juga bangga. Hasilnya baru keluar bulan Juni.', 'After the test, you walk out tired but proud. The results won’t come out until June.', 'สอบเสร็จ คุณเดินออกจากห้องสอบ รู้สึกเหนื่อยแต่ก็ภูมิใจ ผลสอบจะออกเดือนมิถุนายน', 'စာမေးပွဲပြီးတော့ ပင်ပန်းပေမဲ့ ဂုဏ်ယူစိတ်လည်း ရှိတယ်။ အဖြေက ဇွန်လမှ ထွက်မယ်။'),
  e03w: T('一位顧客打電話來抱怨，說上次買的產品有問題。張師傅請你一起處理。', 'Một khách hàng gọi điện phàn nàn rằng sản phẩm mua lần trước có vấn đề. Thầy Trương nhờ bạn cùng xử lý.', 'Seorang pelanggan menelepon untuk mengeluh bahwa produk yang dibeli bermasalah. Pak Zhang memintamu ikut menanganinya.', 'A customer calls to complain that the product they bought has a problem. Master Zhang asks you to help handle it.', 'ลูกค้าโทรมาร้องเรียนว่าสินค้าที่ซื้อไปมีปัญหา อาจารย์จางให้คุณช่วยจัดการ', 'ဖောက်သည်တစ်ယောက်က ဝယ်သွားတဲ့ ပစ္စည်း ပြဿနာရှိတယ်လို့ ဖုန်းဆက် တိုင်ကြားတယ်။ ဆရာကျန်းက အတူဖြေရှင်းဖို့ ခိုင်းတယ်။'),
  e03s: T('學校今天健康檢查。護理師先說明檢查的順序。', 'Hôm nay trường khám sức khỏe. Y tá giải thích thứ tự khám trước.', 'Hari ini ada pemeriksaan kesehatan di sekolah. Perawat menjelaskan urutan pemeriksaan.', 'Today is the school health check. The nurse first explains the order of the checks.', 'วันนี้โรงเรียนตรวจสุขภาพ พยาบาลอธิบายลำดับการตรวจก่อน', 'ဒီနေ့ ကျောင်းမှာ ကျန်းမာရေးစစ်ဆေးတယ်။ သူနာပြုက စစ်ဆေးမယ့် အစီအစဉ်ကို အရင်ရှင်းပြတယ်။'),
  e05a: T('五月的第二個星期日是母親節。你打視訊電話回家。', 'Chủ nhật thứ hai của tháng Năm là Ngày của Mẹ. Bạn gọi video về nhà.', 'Minggu kedua bulan Mei adalah Hari Ibu. Kamu menelepon video ke rumah.', 'The second Sunday in May is Mother’s Day. You video-call home.', 'วันอาทิตย์ที่สองของเดือนพฤษภาคมเป็นวันแม่ (ไต้หวัน) คุณวิดีโอคอลกลับบ้าน', 'မေလ ဒုတိယ တနင်္ဂနွေက အမေများနေ့ပါ။ အိမ်ကို ဗီဒီယိုကော် ဆက်တယ်။'),
  e06a: T('端午節到了，學校帶大家去河邊看龍舟比賽。', 'Tết Đoan Ngọ đến, trường đưa mọi người ra bờ sông xem đua thuyền rồng.', 'Festival Perahu Naga tiba, sekolah membawa semua ke tepi sungai menonton lomba perahu naga.', 'The Dragon Boat Festival is here, and the school takes everyone to the river to watch the races.', 'เทศกาลไหว้บ๊ะจ่างมาถึง โรงเรียนพาทุกคนไปริมแม่น้ำดูแข่งเรือมังกร', 'နဂါးလှေပွဲတော် ရောက်ပြီ၊ ကျောင်းက အားလုံးကို မြစ်ကမ်းကို နဂါးလှေပြိုင်ပွဲ ကြည့်ဖို့ ခေါ်သွားတယ်။'),
  e07a: T('二年級最後一天，林老師在班上公布華語文能力測驗的成績。', 'Ngày cuối cùng của lớp 11, cô Lâm công bố kết quả kỳ thi TOCFL trong lớp.', 'Hari terakhir kelas dua, Bu Lin mengumumkan hasil TOCFL di kelas.', 'On the last day of second year, Ms. Lin announces the TOCFL results in class.', 'วันสุดท้ายของปีสอง ครูหลินประกาศผลสอบ TOCFL ในห้อง', 'ဒုတိယနှစ် နောက်ဆုံးနေ့မှာ ဆရာမလင်က TOCFL အဖြေကို အတန်းထဲမှာ ကြေညာတယ်။'),
  e07p: T('你通過了進階級（B1）！你拿到了華語文能力測驗證書。', 'Bạn đã đậu cấp Tiến bộ (B1)! Bạn nhận được chứng chỉ TOCFL.', 'Kamu lulus tingkat Menengah (B1)! Kamu mendapat sertifikat TOCFL.', 'You passed the Intermediate level (B1)! You receive your TOCFL certificate.', 'คุณสอบผ่านระดับกลาง (B1)! คุณได้รับใบรับรอง TOCFL', 'အလယ်အဆင့် (B1) အောင်ပြီ။ TOCFL လက်မှတ် ရတယ်။'),
  e07f: T('這次差一點點沒有通過。不過，三年級還有機會再考。', 'Lần này chỉ thiếu một chút là đậu. Nhưng năm lớp 12 vẫn còn cơ hội thi lại.', 'Kali ini hampir lulus. Tapi di kelas tiga masih ada kesempatan ujian lagi.', 'You just missed passing this time. But you can take it again in third year.', 'ครั้งนี้ขาดอีกนิดเดียวก็ผ่าน แต่ปีสามยังมีโอกาสสอบอีก', 'ဒီတစ်ခါ နည်းနည်းလေးနဲ့ မအောင်ဘူး။ ဒါပေမဲ့ တတိယနှစ်မှာ ထပ်ဖြေခွင့် ရှိသေးတယ်။'),
  r16a: T('梅雨季到了，已經下了一個星期的雨。洗好的衣服一直曬不乾，還有一點臭味。', 'Mùa mưa phùn đến, đã mưa suốt một tuần. Quần áo giặt xong phơi mãi không khô, còn hơi có mùi.', 'Musim hujan plum tiba, sudah hujan seminggu. Pakaian yang dicuci tidak kering-kering dan agak bau.', 'Plum rain season is here, and it has rained for a week. The washed clothes won’t dry and are starting to smell.', 'ฤดูฝนเหมยมาถึง ฝนตกมาหนึ่งสัปดาห์แล้ว เสื้อผ้าที่ซักตากไม่แห้งและเริ่มมีกลิ่น', 'မိုးရာသီရောက်ပြီး တစ်ပတ်လုံး မိုးရွာနေတယ်။ လျှော်ထားတဲ့ အဝတ်တွေ မခြောက်ဘဲ အနံ့နည်းနည်း ထွက်နေတယ်။'),
  r17a: T('你和同學要去車站。路口是紅燈，還要等九十秒。', 'Bạn và bạn cùng lớp đi ra ga. Ở ngã tư đang đèn đỏ, còn phải chờ chín mươi giây.', 'Kamu dan teman mau ke stasiun. Di perempatan lampu merah, masih harus menunggu sembilan puluh detik.', 'You and a classmate are heading to the station. The light at the crossing is red, with ninety seconds left.', 'คุณกับเพื่อนจะไปสถานี ที่สี่แยกไฟแดง ต้องรออีกเก้าสิบวินาที', 'ခင်ဗျားနဲ့ သူငယ်ချင်း ဘူတာကို သွားမလို့။ လမ်းဆုံမှာ မီးနီ ဖြစ်နေပြီး စက္ကန့် ကိုးဆယ် စောင့်ရဦးမယ်။'),
  r17b: T('你們才跑到一半，一台機車突然轉過來，差一點撞到你們！', 'Hai bạn mới chạy được nửa đường, một chiếc xe máy bất ngờ rẽ tới, suýt nữa đâm vào!', 'Baru setengah jalan, sebuah motor tiba-tiba berbelok dan hampir menabrak kalian!', 'Halfway across, a scooter suddenly turns in and almost hits you!', 'วิ่งไปได้ครึ่งทาง มีมอเตอร์ไซค์เลี้ยวมากะทันหัน เกือบชนพวกคุณ!', 'တစ်ဝက်လောက်ပဲ ပြေးရသေးတယ်၊ ဆိုင်ကယ်တစ်စီး ရုတ်တရက် ကွေ့လာပြီး တိုက်မိလုနီးပါး ဖြစ်သွားတယ်။'),
  r17c: T('又遇到一個很長的紅燈。同學看起來很急。', 'Lại gặp một đèn đỏ rất lâu. Bạn cùng lớp trông rất vội.', 'Bertemu lampu merah yang lama lagi. Temanmu terlihat sangat terburu-buru.', 'Another long red light. Your classmate looks like they’re in a hurry.', 'เจอไฟแดงนานอีกแล้ว เพื่อนดูรีบมาก', 'မီးနီ ကြာကြာ ထပ်တွေ့ပြန်ပြီ။ သူငယ်ချင်းက အရမ်းလောနေပုံ ရတယ်။'),
};
const say = (who, zh, extra = {}) => ({ say: who, zh, ...extra });
const n = (k) => ({ n: N[k] });
const LIFE = '生活中文';
const WORK = '職場中文';
const Q_DO = T('你要怎麼做？', 'Bạn nên làm gì?', 'Apa yang harus kamu lakukan?', 'What should you do?', 'คุณควรทำอย่างไร', 'ဘာလုပ်သင့်လဲ။');

function inspection() {
  return [
    { scene: 'dorm', npc: 'ayi' },
    { n: S3.N.i01a },
    { n: S3.N.i01b },
    { ifTidy: 80, then: [say('ayi', '很乾淨，很好！'), { fx: { tidy: 5, aff: { ayi: 1 } } }],
      else: [say('ayi', '東西要放回去喔。垃圾也要記得倒。'), { fx: { tidy: -10 } }] },
  ];
}

// 4 月和 6 月各一次：實習的人處理客訴，在校的人做健康檢查（每個人兩種都會遇到）
const WORK_OR_SCHOOL = [
  { ifStatus: 'work', then: [
    { scene: 'work', npc: 'zhang' },
    n('e03w'),
    { scene: 'work', npc: 'customer' },
    say('customer', '你們的產品才用三天就壞了，我很不滿意！'),
    { q: { p: P.say, src: WORK, opts: [
      { zh: '真的很抱歉。請問是哪裡有問題？我們馬上處理。', ok: 1 },
      { zh: '不是我做的。', r: [say('customer', '那請你們的主管來！')] },
      { zh: '是不是你用錯了？', r: [say('customer', '你這是什麼態度？')] },
      { zh: '……（不說話）' },
    ], wrong: [say('zhang', '顧客生氣的時候，要先怎麼樣？')] } },
    { scene: 'work', npc: 'zhang' },
    say('zhang', '處理客訴，第一步先道歉，再仔細問清楚問題，最後告訴顧客我們會怎麼處理。', { listen: 1 }),
    { q: { p: T('處理客訴的第一步是什麼？', 'Bước đầu tiên khi xử lý khiếu nại là gì?', 'Apa langkah pertama menangani keluhan?', 'What is the first step in handling a complaint?', 'ขั้นแรกของการจัดการข้อร้องเรียนคืออะไร', 'တိုင်ကြားချက်ကို ဖြေရှင်းရာမှာ ပထမအဆင့်က ဘာလဲ။'), src: WORK, opts: [
      { zh: '先道歉', ok: 1 }, { zh: '先找理由' }, { zh: '先掛電話', r: [say('zhang', '那顧客會更生氣。')] }, { zh: '先下班' },
    ], wrong: [say('zhang', '再聽一次。')] } },
    say('zhang', '這個問題，我們會改善品質。你今天處理得很好。'),
    { fx: { skill: 6, aff: { zhang: 1 } } },
  ], else: [
    { scene: 'clinic', npc: 'nurse' },
    n('e03s'),
    { poster: [['1', '量身高、體重'], ['2', '檢查視力'], ['3', '量血壓'], ['注意', '抽血前八小時不能吃東西']], title: '健康檢查' },
    { q: { p: T('抽血前要注意什麼？', 'Trước khi lấy máu cần chú ý gì?', 'Apa yang harus diperhatikan sebelum ambil darah?', 'What should you remember before the blood test?', 'ก่อนเจาะเลือดต้องระวังอะไร', 'သွေးမဖောက်ခင် ဘာကို သတိထားရမလဲ။'), src: LIFE, opts: [
      { zh: '八小時不能吃東西', ok: 1 }, { zh: '要吃很多東西', r: [say('nurse', '這樣檢查結果會不準喔。')] }, { zh: '要喝咖啡' }, { zh: '要先跑步' },
    ], wrong: [say('nurse', '看「注意」那一行。')] } },
    say('nurse', '你的血壓有一點高。最近是不是常常熬夜？要多休息。', { listen: 1 }),
    { q: { p: T('護理師提醒你要注意什麼？', 'Y tá nhắc bạn chú ý điều gì?', 'Perawat mengingatkanmu tentang apa?', 'What does the nurse remind you to do?', 'พยาบาลเตือนให้คุณระวังอะไร', 'သူနာပြုက ဘာကို သတိထားဖို့ သတိပေးလဲ။'), src: LIFE, opts: [
      { zh: '多休息，不要熬夜', ok: 1 }, { zh: '多喝咖啡' }, { zh: '多玩手機' }, { zh: '少喝水' },
    ], wrong: [say('nurse', '再聽一次喔。')], ok: [say('nurse', '對，身體健康最重要。')] } },
    { fx: { hp: 10, mood: 3 } },
  ] },
];

const EVENTS = {
  // 4 月：清明節（祖先、傳統）
  E01: [
    { scene: 'classroom', npc: 'lin' },
    n('e01a'),
    say('lin', '清明節的時候，很多台灣人會回老家掃墓，紀念祖先。', { listen: 1 }),
    { q: { p: T('清明節的時候，很多人會做什麼？', 'Vào Tết Thanh Minh, nhiều người sẽ làm gì?', 'Saat Qingming, banyak orang melakukan apa?', 'What do many people do on Tomb-Sweeping Day?', 'ในเทศกาลเชงเม้ง หลายคนจะทำอะไร', 'ချင်းမင်ပွဲတော်မှာ လူအများစု ဘာလုပ်ကြလဲ။'), src: LIFE, opts: [
      { zh: '回老家掃墓', ok: 1 }, { zh: '看煙火' }, { zh: '吃月餅', r: [say('lin', '那是中秋節喔。')] }, { zh: '交換禮物' },
    ], wrong: [say('lin', '再聽一次。')] } },
    { scene: 'store', npc: 'ajiao' },
    n('e01b'),
    say('ajiao', '清明節要吃潤餅。這是我們家的傳統，每年都要做。'),
    { q: { p: P.say, src: LIFE, opts: [
      { zh: '謝謝阿嬌！我也想學怎麼做。', ok: 1, then: [say('ajiao', '好啊，明年來我家一起包！'), { fx: { aff: { ajiao: 2 } } }] },
      { zh: '我的國家也有類似的節日，大家會去看祖先。', ok: 1, then: [say('ajiao', '真的嗎？下次說給我聽。'), { fx: { aff: { ajiao: 1 }, pop: 2 } }] },
      { zh: '潤餅是什麼？我不要。', r: [say('ajiao', '吃吃看嘛！很好吃的。')] },
      { zh: '傳統好麻煩。' },
    ], wrong: [say('ajiao', '嗯？')] } },
    { fx: { mood: 10 } },
  ],

  // 5 月 10 日：華語文能力測驗進階級（B1）
  E02: [
    { scene: 'classroom', npc: 'teacher' },
    n('e02a'),
    { poster: [['報到', '早上八點半以前'], ['要帶', '准考證、居留證'], ['聽力', '五十分鐘'], ['閱讀', '六十分鐘']], title: '考試須知' },
    { q: { p: T('聽力測驗考多久？', 'Phần nghe thi bao lâu?', 'Berapa lama tes menyimak?', 'How long is the listening test?', 'การสอบฟังใช้เวลาเท่าไร', 'နားထောင်စာမေးပွဲ ဘယ်လောက်ကြာလဲ။'), src: LIFE, opts: [
      { zh: '五十分鐘', ok: 1 }, { zh: '六十分鐘' }, { zh: '八點半' }, { zh: '十五分鐘' },
    ], wrong: [say('teacher', '請看「聽力」那一行。')] } },
    say('teacher', '聽力測驗開始以後，不能離開座位；如果身體不舒服，請舉手。', { listen: 1 }),
    { q: { p: T('考試的時候身體不舒服，要怎麼做？', 'Khi thi mà thấy không khỏe, phải làm gì?', 'Jika merasa tidak enak badan saat ujian, harus bagaimana?', 'If you feel unwell during the test, what should you do?', 'ถ้ารู้สึกไม่สบายระหว่างสอบ ต้องทำอย่างไร', 'စာမေးပွဲဖြေနေတုန်း နေမကောင်းရင် ဘာလုပ်ရမလဲ။'), src: LIFE, opts: [
      { zh: '舉手', ok: 1 }, { zh: '直接離開', r: [say('teacher', '不可以離開座位喔。')] }, { zh: '大聲說話' }, { zh: '趴著睡覺' },
    ], wrong: [say('teacher', '請再聽一次。')] } },
    say('teacher', '男：「這個週末要不要去看電影？」女：「我本來想去，可是下星期一要交報告，恐怕沒有時間。」', { listen: 1 }),
    { q: { p: T('女生為什麼不去看電影？', 'Tại sao cô gái không đi xem phim?', 'Mengapa perempuan itu tidak pergi menonton film?', 'Why isn’t the woman going to the movie?', 'ทำไมผู้หญิงไม่ไปดูหนัง', 'အမျိုးသမီးက ဘာကြောင့် ရုပ်ရှင် မကြည့်တာလဲ။'), src: LIFE, opts: [
      { zh: '因為要準備報告', ok: 1 }, { zh: '因為不喜歡看電影' }, { zh: '因為沒有錢' }, { zh: '因為生病了' },
    ], wrong: [say('teacher', '注意聽「可是」後面的話。')] } },
    { poster: [['公告', '由於明天天氣不好，戶外教學改到下星期三。'], ['', '參加的同學，請在星期一以前交回家長同意書。']], title: '學校公告' },
    { q: { p: T('戶外教學為什麼改時間？', 'Tại sao buổi học ngoài trời đổi ngày?', 'Mengapa kegiatan luar kelas diganti waktunya?', 'Why was the field trip rescheduled?', 'ทำไมทัศนศึกษาเลื่อนเวลา', 'ပြင်ပလေ့လာရေးခရီးကို ဘာကြောင့် ရက်ပြောင်းတာလဲ။'), src: LIFE, opts: [
      { zh: '因為天氣不好', ok: 1 }, { zh: '因為老師生病' }, { zh: '因為下星期三放假' }, { zh: '因為沒有人參加' },
    ], wrong: [] } },
    { ifScore: 3, then: [{ setv: { tocflB1: 1 } }], else: [{ setv: { tocflB1: 0 } }] },
    n('e02b'),
    { fx: { zh: 5, hp: -10 } },
  ],

  E03: WORK_OR_SCHOOL,
  E04: WORK_OR_SCHOOL,

  // 5 月：母親節
  E05: [
    { scene: 'phone', npc: null },
    n('e05a'),
    { q: { p: P.say, src: LIFE, opts: [
      { zh: '媽，母親節快樂！謝謝你這麼辛苦照顧我。', ok: 1 },
      { zh: '媽，母親節快樂！我在台灣過得很好，你不用擔心。', ok: 1 },
      { zh: '媽，可以再給我一點錢嗎？' },
      { zh: '我很忙，先掛了。' },
    ], wrong: [say('amei', '今天是母親節耶，說點好聽的話吧！')] } },
    { scene: 'room', npc: 'amei' },
    say('amei', '我們一起做母親節卡片，寄回家好不好？'),
    { fx: { mood: 15, aff: { amei: 1 } } },
  ],

  // 6 月：端午節（龍舟、粽子、香包）
  E06: [
    { scene: 'river', npc: 'chen' },
    n('e06a'),
    say('chen', '端午節要吃粽子、看龍舟比賽，還要戴香包，保平安。', { listen: 1 }),
    { q: { p: T('端午節的時候，大家會做什麼？', 'Vào Tết Đoan Ngọ, mọi người sẽ làm gì?', 'Saat Festival Perahu Naga, orang melakukan apa?', 'What do people do at the Dragon Boat Festival?', 'ในเทศกาลไหว้บ๊ะจ่าง ทุกคนทำอะไร', 'နဂါးလှေပွဲတော်မှာ လူတွေ ဘာလုပ်ကြလဲ။'), src: LIFE, opts: [
      { zh: '吃粽子、看龍舟', ok: 1 }, { zh: '吃月餅、看煙火' }, { zh: '收紅包', r: [say('chen', '那是過年喔。')] }, { zh: '交換禮物' },
    ], wrong: [say('chen', '再聽一次。')] } },
    { scene: 'river', npc: 'amei' },
    say('amei', '給你一個香包！聞聞看，很香吧？'),
    { card: 'sachet' },
    { q: { p: T('戴香包是什麼意思？', 'Đeo túi thơm có ý nghĩa gì?', 'Apa arti memakai kantong wangi?', 'What does wearing a scented sachet mean?', 'การห้อยถุงหอมมีความหมายว่าอะไร', 'အမွှေးအိတ် ဆွဲထားတာ ဘာကို ဆိုလိုလဲ။'), src: LIFE, opts: [
      { zh: '保平安', ok: 1 }, { zh: '變漂亮' }, { zh: '考試考好' }, { zh: '賺大錢' },
    ], wrong: [say('amei', '老師剛剛說過喔。')] } },
    { fx: { mood: 15, aff: { amei: 1, chen: 1 } } },
  ],

  // 6 月底：二年級結業，公布 B1 成績
  E07: [
    { scene: 'classroom', npc: 'lin' },
    n('e07a'),
    { ifv: 'tocflB1', then: [n('e07p'), { card: 'tocflcert' }, say('lin', '恭喜你！你的努力有了成果。'), { fx: { mood: 20, zh: 5, aff: { lin: 2 } } }],
      else: [n('e07f'), say('lin', '雖然這次沒有通過，但是你進步很多。下次一定可以！'), { fx: { mood: 5, aff: { lin: 1 } } }] },
    { scene: 'classroom', npc: 'chen' },
    say('chen', '暑假以後就是三年級了。要開始準備升學，也要想想畢業以後要走哪一條路。'),
    { q: { p: P.say, src: LIFE, opts: [
      { zh: '我會好好想一想，也會努力準備。謝謝老師！', ok: 1 },
      { zh: '有問題的時候，可以來找老師討論嗎？', ok: 1, then: [say('chen', '當然可以，有問題就來找我。')] },
      { zh: '三年級還很久，不用想。', r: [say('chen', '時間過得很快喔。')] },
      { zh: '我不知道。' },
    ], wrong: [say('chen', '嗯？')] } },
    { fx: { mood: 5, aff: { chen: 1 } } },
  ],

  I15: inspection(),
  I16: inspection(),
  I17: inspection(),

  // 隨機：梅雨季衣服曬不乾
  R16: [
    { scene: 'room', npc: 'amei' },
    n('r16a'),
    say('amei', '怎麼辦？明天要穿的衣服還是濕的。'),
    { q: { p: Q_DO, src: LIFE, opts: [
      { zh: '去洗衣房，用烘衣機烘乾', ok: 1 },
      { zh: '在房間開除濕機', ok: 1 },
      { zh: '直接穿濕的衣服', r: [say('amei', '會感冒啦！')] },
      { zh: '用吹風機吹一整晚', r: [{ scene: 'dorm', npc: 'ayi' }, say('ayi', '吹風機吹太久很危險，不可以喔。')] },
    ], wrong: [say('amei', '還有別的辦法嗎？')], ok: [say('amei', '好主意！'), { fx: { mood: 3, tidy: 5 } }] } },
  ],
  // 隨機：同學要闖紅燈（選錯有後果，再教正確做法，之後複習）
  R17: [
    { scene: 'street', npc: 'tongxue' },
    n('r17a'),
    say('tongxue', '紅燈太久了，現在沒有車，我們直接過去吧！'),
    { q: { p: Q_DO, src: LIFE, opts: [
      { zh: '不行，等綠燈再過，安全比較重要。', ok: 1, then: [say('tongxue', '……好啦，等就等。'), { fx: { mood: 2 } }] },
      { zh: '我們等一下，順便看看地圖。', ok: 1, then: [say('tongxue', '也好，看看要從哪個出口進車站。')] },
      { zh: '好啊，快跑過去！', end: 1, r: [n('r17b'), { fx: { mood: -15, hp: -5 } },
        { scene: 'street', npc: 'passer' },
        say('passer', '闖紅燈很危險！被機車撞到怎麼辦？而且還會被罰錢。'),
        say('passer', '紅燈的時候要停下來，等綠燈再走。', { listen: 1 }),
        { q: { p: T('紅燈的時候要怎麼做？', 'Khi đèn đỏ phải làm gì?', 'Saat lampu merah harus bagaimana?', 'What do you do at a red light?', 'เวลาไฟแดงต้องทำอย่างไร', 'မီးနီချိန်မှာ ဘာလုပ်ရမလဲ။'), src: LIFE, opts: [
          { zh: '停下來，等綠燈再走', ok: 1 }, { zh: '跑快一點就好' }, { zh: '一邊看手機一邊過' }, { zh: '跟著別人一起闖' },
        ], wrong: [say('passer', '不對喔，再想一次。')], ok: [say('passer', '對，安全最重要。')] } },
        { redo: 'R17' }] },
      { zh: '你先過，我等你。', r: [say('tongxue', '……算了，我也等吧。')] },
    ], wrong: [say('tongxue', '你覺得呢？')], ok: [] } },
  ],
  // 複習：又遇到很長的紅燈
  R17b: [
    { scene: 'street', npc: 'tongxue' },
    n('r17c'),
    say('tongxue', '快遲到了啦！闖過去好不好？'),
    { q: { p: P.say, src: LIFE, opts: [
      { zh: '遲到就遲到，安全比較重要。我們等綠燈。', ok: 1, then: [{ fx: { mood: 5 } }] },
      { zh: '我先傳訊息跟老師說會晚一點到。', ok: 1, then: [{ fx: { mood: 5, pop: 1 } }] },
      { zh: '好，衝！', r: [say('tongxue', '……你上次不是差一點被撞到嗎？')] },
      { zh: '你自己決定。' },
    ], wrong: [say('tongxue', '嗯……那你說怎麼辦？')], ok: [] } },
  ],
};

module.exports = { N, EVENTS };

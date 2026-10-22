// 第九章劇本資料（三年級 7–9 月）：新生說明會（換你當學長姐）、B1 重新報名／華語小老師、中元節普渡、
// 實習當小組長（實習月份）、科大升學說明會（在校月份）、三年級開學與志願調查（直升科大／留台工作／回國）。
// 隨機事件：新生想家、手機掉在公車上。
// 詞彙：三年級以 B1 為主（經驗、建議、提醒、規定、安排、負責、溝通、意見、解決、資格、條件、申請、面試、未來、選擇、風俗、遺失、安慰、適應）。
const { T, P } = require('./story.js');
const S3 = require('./story3.js');

const N = {
  t01a: T('七月，新的一年級僑生到了。陳導師請你在新生說明會上，跟學弟妹分享在台灣生活的經驗。', 'Tháng Bảy, học sinh Hoa kiều lớp 10 mới đã đến. Thầy Trần nhờ bạn chia sẻ kinh nghiệm sống ở Đài Loan với các em tại buổi gặp mặt tân sinh.', 'Juli, siswa perantauan kelas satu yang baru tiba. Pak Chen memintamu berbagi pengalaman hidup di Taiwan dengan adik kelas di acara orientasi.', 'In July, the new first-year overseas students arrive. Mr. Chen asks you to share your experience of life in Taiwan at the orientation.', 'เดือนกรกฎาคม นักเรียนจีนโพ้นทะเลปีหนึ่งรุ่นใหม่มาถึง ครูเฉินขอให้คุณเล่าประสบการณ์ใช้ชีวิตในไต้หวันให้น้องๆ ฟังในงานปฐมนิเทศ', 'ဇူလိုင်လမှာ ပထမနှစ် ကျောင်းသားသစ်တွေ ရောက်လာတယ်။ ဆရာချန်က ကျောင်းသားသစ် မိတ်ဆက်ပွဲမှာ ထိုင်ဝမ်မှာ နေထိုင်ရတဲ့ အတွေ့အကြုံကို ညီငယ်ညီမငယ်တွေကို မျှဝေပေးဖို့ ခိုင်းတယ်။'),
  t01b: T('說明會結束後，一位新生跑來跟你說謝謝。你想起兩年前的自己。', 'Kết thúc buổi gặp mặt, một em tân sinh chạy đến cảm ơn bạn. Bạn nhớ lại chính mình hai năm trước.', 'Setelah acara, seorang siswa baru datang berterima kasih. Kamu teringat dirimu dua tahun lalu.', 'After the orientation, a new student comes over to thank you. You remember yourself two years ago.', 'หลังงานจบ น้องใหม่คนหนึ่งวิ่งมาขอบคุณ คุณนึกถึงตัวเองเมื่อสองปีก่อน', 'ပွဲပြီးတော့ ကျောင်းသားသစ်တစ်ယောက် ကျေးဇူးတင်ဖို့ ပြေးလာတယ်။ လွန်ခဲ့တဲ့ နှစ်နှစ်က ကိုယ့်ကိုယ်ကို သတိရသွားတယ်။'),
  t02a: T('暑假裡，林老師幫上次沒通過的同學加強準備，下個月可以再考一次華語文能力測驗。', 'Trong kỳ nghỉ hè, cô Lâm giúp các bạn lần trước chưa đậu ôn luyện thêm, tháng sau có thể thi lại TOCFL.', 'Saat libur musim panas, Bu Lin membantu siswa yang belum lulus untuk bersiap, bulan depan bisa ujian TOCFL lagi.', 'Over the summer, Ms. Lin helps students who didn’t pass last time prepare to retake the TOCFL next month.', 'ช่วงปิดเทอมฤดูร้อน ครูหลินช่วยติวเพื่อนที่ครั้งก่อนสอบไม่ผ่าน เดือนหน้าจะสอบ TOCFL อีกครั้งได้', 'နွေရာသီ ကျောင်းပိတ်ရက်မှာ ဆရာမလင်က မအောင်သေးတဲ့ ကျောင်းသားတွေကို ထပ်လေ့ကျင့်ပေးတယ်၊ နောက်လ TOCFL ထပ်ဖြေနိုင်တယ်။'),
  t02b: T('你已經通過 B1 了。林老師請你當華語小老師，幫學妹準備 A2 考試。', 'Bạn đã đậu B1 rồi. Cô Lâm nhờ bạn làm trợ giảng tiếng Hoa, giúp em khóa dưới ôn thi A2.', 'Kamu sudah lulus B1. Bu Lin memintamu menjadi tutor bahasa Mandarin untuk membantu adik kelas bersiap ujian A2.', 'You’ve already passed B1. Ms. Lin asks you to be a Chinese tutor and help a younger student prepare for the A2 test.', 'คุณสอบผ่าน B1 แล้ว ครูหลินขอให้คุณเป็นติวเตอร์ภาษาจีน ช่วยน้องเตรียมสอบ A2', 'B1 အောင်ပြီးပြီ။ ဆရာမလင်က တရုတ်စာ ဆရာငယ်လုပ်ပြီး ညီမလေးကို A2 စာမေးပွဲ ပြင်ဆင်ပေးဖို့ ခိုင်းတယ်။'),
  t02p: T('一個月後，成績出來了：這次你通過了 B1！', 'Một tháng sau có kết quả: lần này bạn đã đậu B1!', 'Sebulan kemudian hasilnya keluar: kali ini kamu lulus B1!', 'A month later, the results are in: this time you passed B1!', 'หนึ่งเดือนต่อมาผลออก: ครั้งนี้คุณสอบผ่าน B1!', 'တစ်လအကြာမှာ အဖြေထွက်တယ်- ဒီတစ်ခါ B1 အောင်ပြီ။'),
  t02f: T('這次還是差一點。林老師說，畢業前還有機會，不要放棄。', 'Lần này vẫn thiếu một chút. Cô Lâm nói trước khi tốt nghiệp vẫn còn cơ hội, đừng bỏ cuộc.', 'Kali ini masih kurang sedikit. Bu Lin bilang sebelum lulus masih ada kesempatan, jangan menyerah.', 'Still just short this time. Ms. Lin says there’s another chance before graduation — don’t give up.', 'ครั้งนี้ยังขาดอีกนิด ครูหลินบอกว่าก่อนจบยังมีโอกาส อย่ายอมแพ้', 'ဒီတစ်ခါလည်း နည်းနည်းလိုသေးတယ်။ ဆရာမလင်က ကျောင်းမပြီးခင် အခွင့်အရေး ရှိသေးတယ်၊ လက်မလျှော့နဲ့လို့ ပြောတယ်။'),
  t03a: T('這次實習，張師傅請你當小組長，負責安排學弟妹的工作。', 'Đợt thực tập này, thầy Trương nhờ bạn làm tổ trưởng, phụ trách sắp xếp công việc cho các em khóa dưới.', 'Magang kali ini, Pak Zhang memintamu menjadi ketua kelompok, bertanggung jawab mengatur pekerjaan adik-adik kelas.', 'This internship, Master Zhang makes you team leader, responsible for arranging the younger students’ work.', 'การฝึกงานครั้งนี้ อาจารย์จางให้คุณเป็นหัวหน้ากลุ่ม รับผิดชอบจัดงานให้รุ่นน้อง', 'ဒီအလုပ်သင်ကာလမှာ ဆရာကျန်းက ခင်ဗျားကို အဖွဲ့ခေါင်းဆောင်ခန့်ပြီး ညီငယ်တွေရဲ့ အလုပ်ကို စီစဉ်ဖို့ တာဝန်ပေးတယ်။'),
  t03b: T('下午，兩個學弟為了誰要做比較累的工作吵起來了。', 'Buổi chiều, hai em khóa dưới cãi nhau xem ai phải làm việc mệt hơn.', 'Sore hari, dua adik kelas bertengkar soal siapa yang harus mengerjakan pekerjaan yang lebih berat.', 'In the afternoon, two younger students start arguing about who has to do the harder job.', 'ตอนบ่าย รุ่นน้องสองคนทะเลาะกันว่าใครต้องทำงานที่เหนื่อยกว่า', 'နေ့လယ်ပိုင်းမှာ ညီငယ်နှစ်ယောက် ဘယ်သူက ပိုပင်ပန်းတဲ့ အလုပ်လုပ်ရမလဲဆိုပြီး ရန်ဖြစ်ကြတယ်။'),
  t04a: T('陳導師說明「3＋4」學制：三年高中加四年科大。大家入學的時候，就已經確定可以升上合作的科技大學。', 'Thầy Trần giải thích hệ “3+4”: ba năm trung học cộng bốn năm đại học khoa học kỹ thuật. Khi nhập học, các bạn đã được xác nhận sẽ lên học đại học đối tác.', 'Pak Chen menjelaskan sistem “3+4”: tiga tahun SMA ditambah empat tahun universitas teknologi. Saat masuk sekolah, kalian sudah dipastikan bisa lanjut ke universitas mitra.', 'Mr. Chen explains the “3+4” program: three years of high school plus four years at a university of technology. Your place at the partner university was already confirmed when you enrolled.', 'อาจารย์เฉินอธิบายระบบ “3+4” คือมัธยมสามปีบวกมหาวิทยาลัยเทคโนโลยีสี่ปี ตอนเข้าเรียนทุกคนได้รับการยืนยันแล้วว่าจะได้เรียนต่อมหาวิทยาลัยที่ร่วมมือกัน', 'ဆရာချန်က “၃+၄” စနစ်ကို ရှင်းပြတယ်။ အထက်တန်း ၃ နှစ်နဲ့ နည်းပညာတက္ကသိုလ် ၄ နှစ်ပါ။ ကျောင်းဝင်ကတည်းက ပူးပေါင်းတက္ကသိုလ်ကို ဆက်တက်ခွင့် သေချာပြီးသားပါ။'),
  t05a: T('農曆七月十五是中元節。公司和宿舍門口都擺了桌子，準備普渡拜拜。', 'Rằm tháng Bảy âm lịch là lễ Vu Lan. Trước cổng công ty và ký túc xá đều bày bàn để cúng cô hồn.', 'Tanggal 15 bulan 7 penanggalan lunar adalah Festival Hantu. Di depan perusahaan dan asrama ada meja untuk sembahyang.', 'The 15th day of the seventh lunar month is the Ghost Festival. Tables are set up outside the company and the dorm for offerings.', 'วันที่ 15 เดือน 7 ตามจันทรคติเป็นเทศกาลสารทจีน หน้าบริษัทและหอพักตั้งโต๊ะเตรียมไหว้', 'လပြက္ခဒိန် ခုနစ်လ ၁၅ ရက်က တစ္ဆေပွဲတော်ပါ။ ကုမ္ပဏီနဲ့ အဆောင်ရှေ့မှာ ပူဇော်ဖို့ စားပွဲတွေ ချထားတယ်။'),
  t06a: T('九月，三年級開學了。陳導師發下一張生涯調查表：讀完科大以後，你想走哪一條路？', 'Tháng Chín, năm lớp 12 khai giảng. Thầy Trần phát phiếu khảo sát định hướng: học xong đại học, bạn muốn đi con đường nào?', 'September, tahun ketiga dimulai. Pak Chen membagikan survei karier: setelah lulus universitas, jalan mana yang ingin kamu ambil?', 'September: Year 3 begins. Mr. Chen hands out a career survey: after you finish university, which path do you want to take?', 'เดือนกันยายน ปีสามเปิดเรียนแล้ว อาจารย์เฉินแจกแบบสำรวจเส้นทางอาชีพ: เรียนจบมหาวิทยาลัยแล้ว คุณอยากไปทางไหน', 'စက်တင်ဘာလ၊ တတိယနှစ် ကျောင်းဖွင့်ပြီ။ ဆရာချန်က အသက်မွေးဝမ်းကျောင်း စစ်တမ်းဝေတယ်။ တက္ကသိုလ်ပြီးရင် ဘယ်လမ်းကို ရွေးချင်လဲ။'),
  r19a: T('晚上，你聽到隔壁的新生在哭。她說她很想家，覺得什麼都聽不懂。', 'Buổi tối, bạn nghe thấy em tân sinh phòng bên khóc. Em nói rất nhớ nhà, cảm thấy không hiểu gì cả.', 'Malam hari, kamu mendengar siswa baru di kamar sebelah menangis. Dia bilang sangat rindu rumah dan merasa tidak mengerti apa-apa.', 'At night, you hear the new student next door crying. She says she misses home and can’t understand anything.', 'ตอนกลางคืน คุณได้ยินน้องใหม่ห้องข้างๆ ร้องไห้ เธอบอกว่าคิดถึงบ้านมาก รู้สึกว่าฟังอะไรก็ไม่เข้าใจ', 'ညဘက်မှာ ဘေးခန်းက ကျောင်းသားသစ် ငိုနေတာ ကြားတယ်။ အိမ်ကို အရမ်းလွမ်းပြီး ဘာမှ နားမလည်ဘူးလို့ ပြောတယ်။'),
  r20a: T('下了公車，你才發現手機不見了！可能掉在公車上了。', 'Xuống xe buýt rồi bạn mới phát hiện điện thoại không thấy đâu! Có lẽ rơi trên xe buýt.', 'Setelah turun dari bus, kamu baru sadar ponselmu hilang! Mungkin jatuh di bus.', 'After getting off the bus, you realize your phone is gone! It might have fallen on the bus.', 'ลงจากรถเมล์แล้วคุณเพิ่งรู้ว่าโทรศัพท์หาย! อาจจะตกอยู่บนรถเมล์', 'ဘတ်စ်ကားပေါ်က ဆင်းမှ ဖုန်း ပျောက်နေမှန်း သိတယ်။ ကားပေါ်မှာ ကျခဲ့တာ ဖြစ်နိုင်တယ်။'),
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
    { ifTidy: 80, then: [say('ayi', '很乾淨！你是學長姐了，要給學弟妹當榜樣喔。'), { fx: { tidy: 5, aff: { ayi: 1 } } }],
      else: [say('ayi', '東西要放回去喔。你是學長姐了，要給學弟妹當榜樣。'), { fx: { tidy: -10 } }] },
  ];
}

// 實習月份：當小組長（乙組 8 月、甲組 9 月）
const LEADER = [
  { scene: 'work', npc: 'zhang' },
  n('t03a'),
  { poster: [['早班', '八點到十二點：備料、檢查機台'], ['午班', '一點到五點：生產、清潔'], ['注意', '每個人輪流做，一週換一次']], title: '排班表' },
  { q: { p: T('排班表上，工作多久換一次？', 'Theo bảng phân ca, bao lâu đổi việc một lần?', 'Menurut jadwal, berapa lama sekali pekerjaan berganti?', 'According to the schedule, how often do jobs rotate?', 'ตามตารางเวร งานเปลี่ยนบ่อยแค่ไหน', 'အလှည့်ဇယားအရ အလုပ်ကို ဘယ်လောက်ကြာရင် တစ်ခါ လဲလဲ။'), src: WORK, opts: [
    { zh: '一週換一次', ok: 1 }, { zh: '一天換一次' }, { zh: '一個月換一次' }, { zh: '不用換' },
  ], wrong: [say('zhang', '看「注意」那一行。')] } },
  { scene: 'work', npc: 'xinsheng' },
  n('t03b'),
  say('xinsheng', '為什麼每次都是我做清潔？太不公平了！'),
  { q: { p: T('身為小組長，你要怎麼處理？', 'Là tổ trưởng, bạn sẽ xử lý thế nào?', 'Sebagai ketua kelompok, bagaimana kamu menanganinya?', 'As team leader, how do you handle it?', 'ในฐานะหัวหน้ากลุ่ม คุณจะจัดการอย่างไร', 'အဖွဲ့ခေါင်းဆောင်အနေနဲ့ ဘယ်လို ဖြေရှင်းမလဲ။'), src: WORK, opts: [
    { zh: '先聽兩個人的意見，再照排班表輪流做。', ok: 1 },
    { zh: '你們自己解決，不要找我。', r: [say('xinsheng', '……那要小組長做什麼？')] },
    { zh: '吵什麼？全部都給你做！', r: [say('xinsheng', '……'), { fx: { aff: { zhang: -1 } } }] },
    { zh: '去跟張師傅告狀。' },
  ], wrong: [say('zhang', '小組長要先聽聽大家怎麼說。')] } },
  { scene: 'work', npc: 'zhang' },
  say('zhang', '帶人最重要的是溝通。大家覺得公平，工作就會做得好。', { listen: 1 }),
  { q: { p: T('張師傅說，帶人最重要的是什麼？', 'Thầy Trương nói điều quan trọng nhất khi dẫn dắt người khác là gì?', 'Kata Pak Zhang, apa yang paling penting saat memimpin orang?', 'What does Master Zhang say matters most when leading people?', 'อาจารย์จางบอกว่าการนำคนสิ่งที่สำคัญที่สุดคืออะไร', 'ဆရာကျန်းက လူကို ဦးဆောင်ရာမှာ အရေးအကြီးဆုံးက ဘာလဲလို့ ပြောလဲ။'), src: WORK, opts: [
    { zh: '溝通', ok: 1 }, { zh: '大聲', r: [say('zhang', '大聲沒有用喔。')] }, { zh: '速度' }, { zh: '加班' },
  ], wrong: [say('zhang', '再聽一次。')] } },
  { card: 'leaderbadge' },
  { fx: { skill: 8, pop: 5, aff: { zhang: 2 } } },
];

// 在校月份：科大升學說明會（甲組 8 月、乙組 9 月）
const UNIV = [
  { scene: 'stage', npc: 'chen' },
  n('t04a'),
  { poster: [['學制', '3＋4：三年高中＋四年科大'], ['志願表', '只有資訊科要填（銜接兩所以上大學）'], ['說明會＋面試', '三年級下學期 3 月、5 月各一次'], ['參加哪一次', '看輪調：在學校的那一組參加'], ['留台工作', '要先讀完科大']], title: '升學說明' },
  { q: { p: T('科大的面試在什麼時候？', 'Phỏng vấn đại học vào lúc nào?', 'Kapan wawancara universitas?', 'When is the university interview?', 'สัมภาษณ์มหาวิทยาลัยเมื่อไร', 'တက္ကသိုလ် အင်တာဗျူး ဘယ်တော့လဲ။'), src: LIFE, opts: [
      { zh: '三年級下學期 3 月或 5 月，看輪調', ok: 1 }, { zh: '只有 5 月', r: [say('chen', '三月和五月各一次喔。')] }, { zh: '三年級上學期 9 月' }, { zh: '不用面試' },
    ], wrong: [say('chen', '看「說明會＋面試」那一行。')] } },
  { ifDept: '資訊科', then: [
    say('chen', '資訊科可以銜接兩所以上的大學，所以你們要先填志願表，再參加面試。', { listen: 1 }),
    { q: { p: T('資訊科的同學，面試以前要先做什麼？', 'Học sinh ngành Tin học phải làm gì trước khi phỏng vấn?', 'Siswa jurusan Informatika harus melakukan apa sebelum wawancara?', 'What must IT students do before the interview?', 'นักเรียนแผนกสารสนเทศต้องทำอะไรก่อนสัมภาษณ์', 'အိုင်တီဌာန ကျောင်းသားတွေ အင်တာဗျူးမတိုင်ခင် ဘာလုပ်ရမလဲ။'), src: LIFE, kind: 'listen', opts: [
        { zh: '先填志願表', ok: 1 }, { zh: '先買機車' }, { zh: '先辦護照' }, { zh: '先考駕照' },
      ], wrong: [say('chen', '再聽一次。')] } },
  ], else: [
    say('chen', '你們科只銜接一所大學，不用填志願表。三月或五月，你在學校的那一次直接參加面試就好。', { listen: 1 }),
    { q: { p: T('你們科要填志願表嗎？', 'Ngành của bạn có phải điền phiếu nguyện vọng không?', 'Apakah jurusanmu harus mengisi formulir pilihan?', 'Does your department need to fill in a preference form?', 'แผนกของคุณต้องกรอกใบเลือกอันดับไหม', 'သင့်ဌာနက ဆန္ဒလွှာ ဖြည့်ရမလား။'), src: LIFE, kind: 'listen', opts: [
        { zh: '不用，直接參加面試', ok: 1 }, { zh: '要，填三張' }, { zh: '要先考駕照' }, { zh: '不用面試' },
      ], wrong: [say('chen', '再聽一次。')] } },
  ] },
  { q: { p: T('高中畢業以後，可以馬上留在台灣工作嗎？', 'Tốt nghiệp trung học xong có thể ở lại Đài Loan làm việc ngay không?', 'Setelah lulus SMA, bisakah langsung bekerja di Taiwan?', 'Right after high school, can you stay in Taiwan to work?', 'จบมัธยมแล้ว อยู่ทำงานที่ไต้หวันได้ทันทีไหม', 'အထက်တန်းပြီးတာနဲ့ ထိုင်ဝမ်မှာ ချက်ချင်း အလုပ်လုပ်လို့ရလား။'), src: LIFE, opts: [
      { zh: '不行，要先讀完科大', ok: 1 }, { zh: '可以，馬上就能工作' }, { zh: '只要有駕照就可以' }, { zh: '只要會說中文就可以' },
    ], wrong: [say('chen', '看「留台工作」那一行。')] } },
  say('chen', '大學面試主要是了解你的中文程度。三年級下學期以前，也要通過華語文能力測驗 B1。', { listen: 1 }),
  { q: { p: T('大學面試主要想了解什麼？', 'Phỏng vấn đại học chủ yếu muốn biết điều gì?', 'Wawancara universitas terutama ingin mengetahui apa?', 'What does the university interview mainly check?', 'การสัมภาษณ์มหาวิทยาลัยต้องการรู้อะไรเป็นหลัก', 'တက္ကသိုလ် အင်တာဗျူးက အဓိက ဘာကို သိချင်တာလဲ။'), src: LIFE, kind: 'listen', opts: [
    { zh: '你的中文程度', ok: 1 }, { zh: '你家有幾個人' }, { zh: '你喜歡吃什麼' }, { zh: '你會不會唱歌' },
  ], wrong: [say('chen', '再聽一次。')], ok: [say('chen', '對，所以每天都要練習說中文。')] } },
  { fx: { zh: 3, aff: { chen: 1 } } },
];

const EVENTS = {
  // 7 月：新生說明會，換你分享經驗
  T01: [
    { scene: 'stage', npc: 'chen' },
    n('t01a'),
    say('chen', '你覺得，學弟妹剛到台灣，最需要知道哪一件事？'),
    { q: { p: P.say, src: LIFE, opts: [
      { zh: '學生證要先綁卡，坐公車十公里以內不用錢。', ok: 1 },
      { zh: '一年級上學期不能騎機車，沒有駕照更不能騎。', ok: 1 },
      { zh: '垃圾要分類，房間不能煮東西。', ok: 1 },
      { zh: '晚上可以不用回宿舍。', r: [say('chen', '……這可不能亂說喔！')] },
    ], wrong: [say('chen', '想想你剛來的時候，學到了什麼？')] } },
    { scene: 'stage', npc: 'xinsheng' },
    say('xinsheng', '學長姐，如果聽不懂老師說什麼，怎麼辦？'),
    { q: { p: P.say, src: LIFE, opts: [
      { zh: '可以請老師說慢一點，或是下課再問。我以前也是這樣。', ok: 1 },
      { zh: '聽不懂就算了。', r: [say('xinsheng', '……喔。')] },
      { zh: '不要上課就好。' },
      { zh: '我也不知道。' },
    ], wrong: [say('xinsheng', '……')], ok: [say('xinsheng', '謝謝學長姐！我會試試看。')] } },
    n('t01b'),
    { card: 'mentorbadge' },
    { fx: { pop: 5, mood: 10, aff: { chen: 1 } } },
  ],

  // 7 月：B1 重新報名再考，或當華語小老師
  T02: [
    { scene: 'classroom', npc: 'lin' },
    { ifv: 'tocflB1', then: [
      n('t02b'),
      { scene: 'classroom', npc: 'newbie' },
      say('newbie', '{senior}，「雖然……但是……」要怎麼用？'),
      { q: { p: T('你要怎麼舉例？', 'Bạn sẽ đưa ví dụ thế nào?', 'Bagaimana kamu memberi contoh?', 'Which example would you give?', 'คุณจะยกตัวอย่างอย่างไร', 'ဘယ်လို ဥပမာ ပေးမလဲ။'), src: LIFE, opts: [
        { zh: '雖然下雨，但是我們還是去上課。', ok: 1 }, { zh: '雖然下雨，所以我們去上課。', r: [say('newbie', '咦？好像怪怪的。')] }, { zh: '但是下雨，雖然去上課。' }, { zh: '因為下雨，但是去上課。' },
      ], wrong: [say('lin', '「雖然」後面要接「但是」，前後的意思不一樣。')], ok: [say('newbie', '懂了！謝謝{senior}！')] } },
      { title: 'tutor' },
      { fx: { pop: 5, aff: { lin: 1 } } },
    ], else: [
      n('t02a'),
      say('lin', '進階級的題目比較長。先看問題，再聽對話，就比較容易找到答案。', { listen: 1 }),
      { q: { p: T('林老師建議怎麼做？', 'Cô Lâm khuyên nên làm gì?', 'Apa saran Bu Lin?', 'What does Ms. Lin suggest?', 'ครูหลินแนะนำให้ทำอย่างไร', 'ဆရာမလင်က ဘာလုပ်ဖို့ အကြံပေးလဲ။'), src: LIFE, opts: [
        { zh: '先看問題，再聽對話', ok: 1 }, { zh: '先睡一下' }, { zh: '只聽不看' }, { zh: '跳過聽力' },
      ], wrong: [say('lin', '再聽一次。')] } },
      say('lin', '女：「你不是說要搬家嗎？」男：「本來是，可是房東說租金不漲了，所以我決定不搬了。」', { listen: 1 }),
      { q: { p: T('男生為什麼不搬家了？', 'Tại sao người đàn ông không chuyển nhà nữa?', 'Mengapa laki-laki itu tidak jadi pindah?', 'Why did the man decide not to move?', 'ทำไมผู้ชายไม่ย้ายบ้านแล้ว', 'အမျိုးသားက ဘာကြောင့် အိမ်မပြောင်းတော့တာလဲ။'), src: LIFE, opts: [
        { zh: '因為租金不漲了', ok: 1 }, { zh: '因為找不到房子' }, { zh: '因為房東不讓他搬' }, { zh: '因為太忙了' },
      ], wrong: [] } },
      { poster: [['通知', '由於颱風，原定九月三日的考試延到九月十日。'], ['', '已報名的考生不必重新報名。']], title: '考試延期通知' },
      { q: { p: T('已經報名的人要怎麼做？', 'Người đã đăng ký phải làm gì?', 'Yang sudah mendaftar harus bagaimana?', 'What do people who already registered need to do?', 'คนที่สมัครแล้วต้องทำอย่างไร', 'လျှောက်ထားပြီးသူတွေ ဘာလုပ်ရမလဲ။'), src: LIFE, opts: [
        { zh: '不用再報名', ok: 1 }, { zh: '要重新報名' }, { zh: '九月三日去考' }, { zh: '取消考試' },
      ], wrong: [] } },
      { ifScore: 2, then: [n('t02p'), { setv: { tocflB1: 1 } }, { card: 'tocflcert' }, { fx: { mood: 20, zh: 5, aff: { lin: 2 } } }],
        else: [n('t02f'), { fx: { mood: -5 } }] },
    ] },
  ],

  T03: LEADER,
  T04: UNIV,

  // 8 月：中元節普渡
  T05: [
    { scene: 'street', npc: 'ajiao' },
    n('t05a'),
    say('ajiao', '中元節要拜好兄弟。這個月晚上不要太晚回家，也不要在外面吹口哨喔。', { listen: 1 }),
    { q: { p: T('阿嬌提醒你這個月不要做什麼？', 'Bà A Kiều nhắc bạn tháng này đừng làm gì?', 'Nenek A Jiao mengingatkanmu untuk tidak melakukan apa bulan ini?', 'What does A-Jiao remind you not to do this month?', 'คุณยายอาเจียวเตือนไม่ให้ทำอะไรในเดือนนี้', 'အဖွား အာကျောင်က ဒီလမှာ ဘာမလုပ်ဖို့ သတိပေးလဲ။'), src: LIFE, opts: [
      { zh: '太晚回家、在外面吹口哨', ok: 1 }, { zh: '吃飯、睡覺' }, { zh: '去上課' }, { zh: '打電話回家' },
    ], wrong: [say('ajiao', '再聽一次喔。')] } },
    say('ajiao', '這是台灣的風俗，你們國家有類似的習慣嗎？'),
    { q: { p: P.say, src: LIFE, opts: [
      { zh: '我們國家也有拜祖先的節日，可是時間不一樣。', ok: 1 },
      { zh: '有，我們也會準備吃的東西拜拜。', ok: 1 },
      { zh: '這些都是迷信。', r: [say('ajiao', '這是我們的傳統，要尊重喔。')] },
      { zh: '我不想說。' },
    ], wrong: [say('ajiao', '嗯？')] } },
    { fx: { mood: 5, aff: { ajiao: 1 } } },
  ],

  // 9 月：三年級開學，生涯調查（3+4 都會升科大；記下科大畢業後的目標，第 12 章結局用）
  T06: [
    { scene: 'classroom', npc: 'chen' },
    n('t06a'),
    { poster: [['一', '科大畢業後，留在台灣工作'], ['二', '科大畢業後，回國發展'], ['三', '科大畢業後，繼續讀研究所'], ['說明', '沒有標準答案，之後還可以改']], title: '生涯調查表' },
    { q: { p: T('讀完科大以後，你現在最想走哪一條路？', 'Học xong đại học, bây giờ bạn muốn đi con đường nào nhất?', 'Setelah lulus universitas, jalan mana yang paling ingin kamu ambil sekarang?', 'After university, which path do you most want right now?', 'เรียนจบมหาวิทยาลัยแล้ว ตอนนี้คุณอยากไปทางไหนที่สุด', 'တက္ကသိုလ်ပြီးရင် အခု ဘယ်လမ်းကို အရွေးချယ်ချင်ဆုံးလဲ။'), src: LIFE, opts: [
      { zh: '留在台灣工作，累積經驗。', ok: 1, then: [{ setv: { route: 'work' } }, say('chen', '很好。要讀完科大才能留台工作，所以現在的成績和實習表現都很重要。')] },
      { zh: '回國發展，把在台灣學到的帶回去。', ok: 1, then: [{ setv: { route: 'home' } }, say('chen', '這也是很好的選擇。家人一定很驕傲。')] },
      { zh: '繼續讀研究所，學更多專業。', ok: 1, then: [{ setv: { route: 'grad' } }, say('chen', '有目標很好。華語和專業課都要繼續加油。')] },
      { zh: '我還不知道。', ok: 1, then: [{ setv: { route: 'undecided' } }, say('chen', '沒關係，還有時間，可以多跟家人討論。')] },
    ] } },
    say('chen', '不管選哪一條路，都要先把現在的事做好。有問題就來找我。'),
    { fx: { mood: 5, aff: { chen: 1 } } },
  ],

  I18: inspection(),
  I19: inspection(),
  I20: inspection(),

  // 隨機：新生想家（安慰學弟妹）
  R19: [
    { scene: 'dorm', npc: 'xinsheng' },
    n('r19a'),
    { q: { p: P.say, src: LIFE, opts: [
      { zh: '我剛來的時候也是這樣。慢慢就會習慣了，有問題可以來找我。', ok: 1 },
      { zh: '要不要一起打電話回家？或是去交誼廳喝杯熱茶？', ok: 1 },
      { zh: '不要哭了，很吵。', r: [say('xinsheng', '……對不起。')] },
      { zh: '想家就回家啊。' },
    ], wrong: [say('xinsheng', '……')], ok: [say('xinsheng', '謝謝學長姐，我覺得好多了。'), { fx: { mood: 5, pop: 3 } }] } },
  ],
  // 隨機：手機掉在公車上（遺失、失物招領）
  R20: [
    { scene: 'street', npc: 'passer' },
    n('r20a'),
    { q: { p: Q_DO, src: LIFE, opts: [
      { zh: '記下公車號碼和時間，打電話到客運公司問失物招領。', ok: 1 },
      { zh: '借別人的手機打給自己的手機。', ok: 1 },
      { zh: '算了，再買一支新的。', r: [{ fx: { money: -5000 } }, say('passer', '先問問看嘛，說不定找得到！')] },
      { zh: '在路邊一直等那台公車回來。' },
    ], wrong: [say('passer', '還有更好的辦法喔。')], ok: [say('passer', '找到了！司機把手機交到失物招領中心了。'), { fx: { mood: 10 } }] } },
  ],
};

module.exports = { N, EVENTS };

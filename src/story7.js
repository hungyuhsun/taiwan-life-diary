// 第七章劇本資料（二年級 1–3 月）：專題報告（在校）、尾牙（在職）、除夕圍爐、元宵猜燈謎、3 月輪調（交接／班會）、報名華語文能力測驗。
// 隨機事件：寒流用電暖器（宿舍違規，選錯有教學與複習）、室友晚上講電話太大聲。
// 詞彙：A2 為主，B1 持續增加（專題、負責、資料、結論、照顧、交接、注意事項、報名、截止、安全、違規）。
const { T, P } = require('./story.js');
const S3 = require('./story3.js');

const N = {
  z01a: T('一月，二年級要做專題報告。你們這一組有三個人，要一起做一個題目。', 'Tháng Một, lớp 11 phải làm báo cáo chuyên đề. Nhóm bạn có ba người, cùng làm một đề tài.', 'Januari, kelas dua harus membuat laporan proyek. Kelompokmu ada tiga orang dan mengerjakan satu topik bersama.', 'In January, second-years do a project presentation. Your group has three people working on one topic together.', 'เดือนมกราคม นักเรียนปีสองต้องทำรายงานโครงงาน กลุ่มของคุณมีสามคน ทำหัวข้อเดียวกัน', 'ဇန်နဝါရီလမှာ ဒုတိယနှစ်ကျောင်းသားတွေ ပရောဂျက်အစီရင်ခံစာ လုပ်ရတယ်။ ခင်ဗျားအဖွဲ့မှာ သုံးယောက်ရှိပြီး ခေါင်းစဉ်တစ်ခုကို အတူလုပ်ရတယ်။'),
  z01b: T('報告完，大家都拍手。林老師說你們的資料找得很清楚。', 'Báo cáo xong, mọi người vỗ tay. Cô Lâm nói nhóm bạn tìm tài liệu rất rõ ràng.', 'Setelah presentasi, semua bertepuk tangan. Bu Lin bilang data kalian sangat jelas.', 'After the presentation, everyone claps. Ms. Lin says your research was very clear.', 'รายงานเสร็จ ทุกคนปรบมือ ครูหลินบอกว่าข้อมูลของพวกคุณชัดเจนมาก', 'တင်ပြပြီးတော့ အားလုံး လက်ခုပ်တီးကြတယ်။ ဆရာမလင်က ခင်ဗျားတို့ အချက်အလက်တွေ အရမ်းရှင်းတယ်လို့ ပြောတယ်။'),
  z02a: T('一月底，公司辦尾牙。尾牙是老闆請員工吃飯，謝謝大家這一年的辛苦。', 'Cuối tháng Một, công ty tổ chức tiệc tất niên. Đó là bữa tiệc ông chủ mời nhân viên để cảm ơn một năm vất vả.', 'Akhir Januari, perusahaan mengadakan pesta akhir tahun. Bos mentraktir karyawan untuk berterima kasih atas kerja keras setahun.', 'At the end of January, the company holds its year-end banquet, where the boss treats the staff to thank them for the year’s hard work.', 'ปลายเดือนมกราคม บริษัทจัดงานเลี้ยงปีใหม่ เจ้านายเลี้ยงพนักงานเพื่อขอบคุณที่ทำงานหนักมาทั้งปี', 'ဇန်နဝါရီလကုန်မှာ ကုမ္ပဏီက နှစ်ကုန်ပွဲ လုပ်တယ်။ တစ်နှစ်လုံး ပင်ပန်းခဲ့တာကို ကျေးဇူးတင်ဖို့ သူဌေးက ဝန်ထမ်းတွေကို ကျွေးတာပါ။'),
  z02b: T('最後是抽獎。主持人念到你的名字了！你抽到了兩千元禮券！', 'Cuối cùng là bốc thăm. MC đọc tên bạn! Bạn trúng phiếu quà tặng hai nghìn đồng!', 'Terakhir undian. Pembawa acara menyebut namamu! Kamu dapat voucher dua ribu dolar!', 'Last comes the lucky draw. The host calls your name! You win a NT$2,000 gift voucher!', 'สุดท้ายเป็นการจับรางวัล พิธีกรอ่านชื่อคุณ! คุณได้บัตรของขวัญสองพันดอลลาร์!', 'နောက်ဆုံးမှာ ကံစမ်းမဲ ဖောက်တယ်။ အခမ်းအနားမှူးက ခင်ဗျားနာမည်ကို ခေါ်တယ်။ ငွေ နှစ်ထောင်တန် လက်ဆောင်ကတ် ရတယ်။'),
  z03a: T('寒假到了，今天是除夕。陳導師請留在台灣的僑生到他家吃年夜飯。', 'Kỳ nghỉ đông đến, hôm nay là đêm Giao thừa. Thầy Trần mời các học sinh Hoa kiều ở lại Đài Loan đến nhà ăn cơm tất niên.', 'Libur musim dingin tiba, hari ini malam Tahun Baru Imlek. Pak Chen mengundang siswa perantauan yang tinggal di Taiwan makan malam di rumahnya.', 'Winter break is here, and today is Lunar New Year’s Eve. Mr. Chen invites the overseas students staying in Taiwan to his home for the reunion dinner.', 'ปิดเทอมฤดูหนาวแล้ว วันนี้เป็นคืนส่งท้ายปีเก่า ครูเฉินชวนนักเรียนที่อยู่ไต้หวันไปกินข้าวเย็นส่งท้ายปีที่บ้าน', 'ဆောင်းရာသီ ကျောင်းပိတ်ရက်ရောက်ပြီ၊ ဒီနေ့ နှစ်ဟောင်းကုန်ည ဖြစ်တယ်။ ဆရာချန်က ထိုင်ဝမ်မှာ ကျန်နေတဲ့ ကျောင်းသားတွေကို အိမ်မှာ ညစာ စားဖို့ ဖိတ်တယ်။'),
  z03b: T('吃完飯，大家一起看電視，等新年到來。你覺得這裡好像也是你的家。', 'Ăn xong, mọi người cùng xem tivi chờ năm mới. Bạn thấy nơi này cũng giống như nhà mình.', 'Setelah makan, semua menonton TV menunggu tahun baru. Kamu merasa di sini juga seperti rumahmu.', 'After dinner, everyone watches TV together and waits for the new year. It feels like home here too.', 'กินข้าวเสร็จ ทุกคนดูทีวีรอปีใหม่ด้วยกัน คุณรู้สึกว่าที่นี่ก็เหมือนบ้านของคุณ', 'ထမင်းစားပြီးတော့ အားလုံး တီဗီကြည့်ရင်း နှစ်သစ်ကို စောင့်ကြတယ်။ ဒီနေရာကလည်း ကိုယ့်အိမ်လိုပဲလို့ ခံစားရတယ်။'),
  z04a: T('元宵節的晚上，廟口有很多燈籠，還可以猜燈謎。猜對可以拿到一個小燈籠。', 'Tối Tết Nguyên Tiêu, trước miếu có rất nhiều lồng đèn và trò đoán câu đố. Đoán đúng được một chiếc lồng đèn nhỏ.', 'Malam Cap Go Meh, di depan kuil banyak lampion dan ada tebak teka-teki. Yang benar dapat lampion kecil.', 'On the night of the Lantern Festival, there are lanterns everywhere outside the temple, and you can guess lantern riddles. Get one right and you win a small lantern.', 'คืนเทศกาลโคมไฟ หน้าศาลเจ้ามีโคมไฟเยอะมาก และมีทายปริศนา ทายถูกได้โคมไฟเล็กหนึ่งอัน', 'မီးအိမ်ပွဲတော်ညမှာ ဘုရားကျောင်းရှေ့မှာ မီးအိမ်တွေ အများကြီးရှိပြီး စကားထာ ဖြေလို့ရတယ်။ မှန်ရင် မီးအိမ်လေး တစ်လုံး ရတယ်။'),
  z04b: T('元宵節也要吃湯圓。湯圓是圓的，意思是一家人團圓。', 'Tết Nguyên Tiêu cũng phải ăn chè trôi nước. Bánh tròn, có nghĩa là gia đình đoàn tụ.', 'Saat Cap Go Meh juga makan onde-onde kuah. Bentuknya bulat, artinya keluarga berkumpul.', 'You also eat tangyuan at the Lantern Festival. They’re round, which stands for the family being together.', 'เทศกาลโคมไฟต้องกินบัวลอยด้วย บัวลอยกลม หมายถึงครอบครัวได้อยู่พร้อมหน้า', 'မီးအိမ်ပွဲတော်မှာ ဆန်လုံးပြုတ်လည်း စားရတယ်။ လုံးလို့ မိသားစု စုံညီခြင်းကို ဆိုလိုတယ်။'),
  z05w: T('三月一日，兩組輪調。你從學校回到公司實習，乙組的同學要把工作交接給你。', 'Ngày 1 tháng 3, hai nhóm luân phiên. Bạn từ trường trở lại công ty thực tập, bạn bên nhóm kia bàn giao công việc cho bạn.', 'Tanggal 1 Maret, dua kelompok bergantian. Kamu kembali magang di perusahaan, dan teman dari kelompok lain menyerahkan pekerjaannya kepadamu.', 'On March 1st, the two groups rotate. You go back to the company for your internship, and a classmate from the other group hands over the work to you.', 'วันที่ 1 มีนาคม สองกลุ่มสลับกัน คุณกลับไปฝึกงานที่บริษัท เพื่อนอีกกลุ่มส่งมอบงานให้คุณ', 'မတ်လ ၁ ရက်မှာ အဖွဲ့နှစ်ဖွဲ့ အလှည့်ပြောင်းတယ်။ ခင်ဗျား ကုမ္ပဏီကို အလုပ်သင်ပြန်ဆင်းပြီး တခြားအဖွဲ့က သူငယ်ချင်းက အလုပ်ကို လွှဲပေးတယ်။'),
  z05s: T('三月一日，兩組輪調。你從公司回到學校上課。今天第一節是班會。', 'Ngày 1 tháng 3, hai nhóm luân phiên. Bạn từ công ty trở lại trường học. Tiết đầu hôm nay là sinh hoạt lớp.', 'Tanggal 1 Maret, dua kelompok bergantian. Kamu kembali ke sekolah. Jam pertama hari ini rapat kelas.', 'On March 1st, the two groups rotate. You return from the company to school. First period today is the class meeting.', 'วันที่ 1 มีนาคม สองกลุ่มสลับกัน คุณกลับจากบริษัทมาเรียนที่โรงเรียน คาบแรกวันนี้เป็นประชุมห้อง', 'မတ်လ ၁ ရက်မှာ အဖွဲ့နှစ်ဖွဲ့ အလှည့်ပြောင်းတယ်။ ခင်ဗျား ကုမ္ပဏီကနေ ကျောင်းကို ပြန်လာတယ်။ ဒီနေ့ ပထမအချိန်က အတန်းအစည်းအဝေးပါ။'),
  z06a: T('三年級下學期以前，你要通過華語文能力測驗的進階級（B1）。考試大約每兩個月辦一次，林老師在班上說明怎麼報名。', 'Trước học kỳ 2 năm lớp 12, bạn phải đậu TOCFL cấp Tiến bộ (B1). Kỳ thi tổ chức khoảng hai tháng một lần; cô Lâm giải thích cách đăng ký.', 'Sebelum semester kedua kelas 12, kamu harus lulus TOCFL tingkat Menengah (B1). Ujian diadakan kira-kira dua bulan sekali; Bu Lin menjelaskan cara mendaftar.', 'Before the second semester of Year 3, you must pass TOCFL Level 3 (B1). The test is held about every two months, and Ms. Lin explains how to register.', 'ก่อนภาคเรียนที่สองของปีสาม คุณต้องสอบ TOCFL ระดับ B1 ให้ผ่าน การสอบจัดประมาณทุกสองเดือน ครูหลินอธิบายวิธีสมัคร', 'တတိယနှစ် ဒုတိယစာသင်နှစ်ဝက် မတိုင်ခင် TOCFL B1 အောင်ရမယ်။ စာမေးပွဲက နှစ်လတစ်ခါလောက် ရှိတယ်၊ ဆရာမလင်က လျှောက်ပုံကို ရှင်းပြတယ်။'),
  r14a: T('寒流來了，晚上只有十度。隔壁的同學從家裡帶來一台電暖器。', 'Đợt rét đến, buổi tối chỉ còn mười độ. Bạn phòng bên mang từ nhà đến một cái máy sưởi điện.', 'Gelombang dingin datang, malam hanya sepuluh derajat. Teman kamar sebelah membawa pemanas listrik dari rumah.', 'A cold front hits, and it’s only ten degrees at night. The student next door brought an electric heater from home.', 'ความหนาวมาเยือน ตอนกลางคืนเหลือสิบองศา เพื่อนห้องข้างๆ เอาฮีตเตอร์ไฟฟ้ามาจากบ้าน', 'အေးလှိုင်း ရောက်လာပြီး ညမှာ ဆယ်ဒီဂရီပဲ ရှိတယ်။ ဘေးခန်းက သူငယ်ချင်းက အိမ်ကနေ လျှပ်စစ်အပူပေးစက် ယူလာတယ်။'),
  r14b: T('「啪！」整層樓都跳電了，大家的燈都不亮了。宿舍阿姨馬上跑上來。', '“Tạch!” Cả tầng mất điện, đèn tắt hết. Cô quản lý ký túc xá chạy lên ngay.', '“Pet!” Listrik satu lantai padam, semua lampu mati. Ibu asrama langsung naik.', '“Click!” The whole floor loses power and all the lights go out. The dorm supervisor rushes upstairs.', '“แป๊ะ!” ไฟดับทั้งชั้น ไฟทุกห้องไม่ติด แม่บ้านหอรีบวิ่งขึ้นมา', '“ဖတ်!” တစ်ထပ်လုံး မီးပျက်သွားပြီး မီးတွေ အကုန်ငြိမ်းသွားတယ်။ အဆောင်အဒေါ်က ချက်ချင်း တက်လာတယ်။'),
  r14c: T('那天晚上，隔壁的插座冒煙了。還好阿姨發現得早。', 'Tối hôm đó, ổ cắm phòng bên bốc khói. May mà cô quản lý phát hiện sớm.', 'Malam itu, stopkontak kamar sebelah berasap. Untung ibu asrama cepat tahu.', 'That night, the outlet next door starts smoking. Luckily, the supervisor notices early.', 'คืนนั้น ปลั๊กห้องข้างๆ มีควันออกมา โชคดีที่แม่บ้านหอเห็นเร็ว', 'အဲဒီညမှာ ဘေးခန်းက ပလပ်ပေါက်က မီးခိုးထွက်လာတယ်။ ကံကောင်းလို့ အဒေါ်က စောစော တွေ့သွားတယ်။'),
  r14d: T('又是很冷的一天。阿蜜在網路上看電暖器，想要買一台。', 'Lại một ngày rất lạnh. A Mật xem máy sưởi trên mạng, muốn mua một cái.', 'Hari yang sangat dingin lagi. A-Mi melihat pemanas di internet dan ingin membeli satu.', 'Another very cold day. A-Mi is looking at electric heaters online and wants to buy one.', 'อีกวันที่หนาวมาก อาหมี่ดูฮีตเตอร์ในเน็ต อยากซื้อสักเครื่อง', 'နောက်တစ်ရက် အရမ်းအေးပြန်တယ်။ အာမိက အွန်လိုင်းမှာ အပူပေးစက် ကြည့်ပြီး ဝယ်ချင်နေတယ်။'),
  r15a: T('晚上十一點，阿蜜在房間裡大聲講視訊電話。你明天早上有考試。', 'Mười một giờ đêm, A Mật gọi video rất to trong phòng. Sáng mai bạn có bài thi.', 'Jam sebelas malam, A-Mi menelepon video dengan suara keras di kamar. Besok pagi kamu ada ujian.', 'It’s 11 p.m. and A-Mi is on a loud video call in the room. You have an exam tomorrow morning.', 'สี่ทุ่ม อาหมี่คุยวิดีโอคอลเสียงดังในห้อง พรุ่งนี้เช้าคุณมีสอบ', 'ည ၁၁ နာရီမှာ အာမိက အခန်းထဲမှာ ဗီဒီယိုကော် အသံကျယ်ကျယ် ပြောနေတယ်။ မနက်ဖြန် မနက် ခင်ဗျားမှာ စာမေးပွဲ ရှိတယ်။'),
};
const say = (who, zh, extra = {}) => ({ say: who, zh, ...extra });
const n = (k) => ({ n: N[k] });
const LIFE = '生活中文';
const WORK = '職場中文';
const Q_DO = T('你要怎麼做？', 'Bạn nên làm gì?', 'Apa yang harus kamu lakukan?', 'What should you do?', 'คุณควรทำอย่างไร', 'ဘာလုပ်သင့်လဲ။');
const Q_COLD = T('天氣很冷，宿舍裡可以怎麼保暖？', 'Trời rất lạnh, trong ký túc xá có thể giữ ấm thế nào?', 'Cuaca sangat dingin, bagaimana cara tetap hangat di asrama?', 'It’s very cold. How can you keep warm in the dorm?', 'อากาศหนาวมาก ในหอพักจะทำให้อบอุ่นได้อย่างไร', 'ရာသီဥတု အရမ်းအေးတယ်၊ အဆောင်မှာ ဘယ်လို နွေးအောင် လုပ်မလဲ။');

function inspection() {
  return [
    { scene: 'dorm', npc: 'ayi' },
    { n: S3.N.i01a },
    { n: S3.N.i01b },
    { ifTidy: 80, then: [say('ayi', '很乾淨，很好！'), { fx: { tidy: 5, aff: { ayi: 1 } } }],
      else: [say('ayi', '東西要放回去喔。垃圾也要記得倒。'), { fx: { tidy: -10 } }] },
  ];
}

const EVENTS = {
  // 1 月（在校組）：專題報告
  Z01: [
    { scene: 'classroom', npc: 'lin' },
    n('z01a'),
    { poster: [['題目', '台灣和我的家鄉'], ['時間', '每組報告十分鐘'], ['要交', '簡報和一張海報'], ['截止', '一月二十日']], title: '專題報告' },
    { q: { p: T('每一組要報告幾分鐘？', 'Mỗi nhóm báo cáo bao nhiêu phút?', 'Setiap kelompok presentasi berapa menit?', 'How many minutes does each group present?', 'แต่ละกลุ่มรายงานกี่นาที', 'အဖွဲ့တစ်ဖွဲ့ ဘယ်နှမိနစ် တင်ပြရမလဲ။'), src: LIFE, opts: [
      { zh: '十分鐘', ok: 1 }, { zh: '二十分鐘' }, { zh: '一個小時', r: [say('rina', '太久了啦！')] }, { zh: '五分鐘' },
    ], wrong: [say('lin', '再看一次「時間」那一行。')] } },
    { scene: 'classroom', npc: 'rina' },
    say('rina', '我們來分工吧！我負責找資料，阿蜜負責做海報，你負責做簡報，好不好？', { listen: 1 }),
    { q: { p: T('你負責做什麼？', 'Bạn phụ trách làm gì?', 'Kamu bertanggung jawab mengerjakan apa?', 'What are you responsible for?', 'คุณรับผิดชอบทำอะไร', 'ခင်ဗျား ဘာကို တာဝန်ယူရမလဲ။'), src: LIFE, opts: [
      { zh: '做簡報', ok: 1 }, { zh: '找資料', r: [say('rina', '找資料是我啦！')] }, { zh: '做海報' }, { zh: '什麼都不用做' },
    ], wrong: [say('rina', '再聽一次喔。')], ok: [say('rina', '好，我們一月二十日以前要做完！')] } },
    { scene: 'classroom', npc: 'lin' },
    say('lin', '報告得很好。最後，你們的結論是什麼？'),
    { q: { p: P.say, src: LIFE, opts: [
      { zh: '我們發現，台灣和我的家鄉有很多一樣的地方，也有不一樣的地方。', ok: 1 },
      { zh: '我不知道，是 Rina 做的。', r: [say('lin', '大家一起做的報告，每個人都要知道內容喔。')] },
      { zh: '報告完了，可以下課了嗎？' },
      { zh: '台灣比較好。', r: [say('lin', '結論要根據你們找到的資料喔。')] },
    ], wrong: [say('lin', '想想你們找到的資料。')] } },
    n('z01b'),
    { fx: { skill: 6, zh: 3, pop: 3, aff: { lin: 1, rina: 1 } } },
  ],

  // 1 月（在職組）：公司尾牙
  Z02: [
    { scene: 'work', npc: 'zhang' },
    n('z02a'),
    { poster: [['時間', '一月二十六日晚上六點'], ['地點', '公司對面的餐廳'], ['活動', '吃飯、表演、抽獎'], ['注意', '要穿工作服來']], title: '尾牙' },
    { q: { p: T('尾牙在哪裡？', 'Tiệc tất niên ở đâu?', 'Pesta akhir tahun di mana?', 'Where is the year-end banquet?', 'งานเลี้ยงจัดที่ไหน', 'နှစ်ကုန်ပွဲ ဘယ်မှာလဲ။'), src: WORK, opts: [
      { zh: '公司對面的餐廳', ok: 1 }, { zh: '公司裡面' }, { zh: '學校' }, { zh: '夜市' },
    ], wrong: [say('zhang', '再看一次「地點」。')] } },
    { scene: 'banquet', npc: 'host' },
    say('host', '請大家舉杯，敬我們的老闆！'),
    say('zhang', '你們還是學生，喝果汁就好。'),
    { q: { p: T('你拿著果汁去敬張師傅，要說什麼？', 'Bạn cầm nước trái cây đến mời thầy Trương, bạn nói gì?', 'Kamu membawa jus untuk bersulang dengan Pak Zhang, kamu bilang apa?', 'You raise your juice to Master Zhang. What do you say?', 'คุณถือน้ำผลไม้ไปชนแก้วกับอาจารย์จาง จะพูดว่าอะไร', 'ဖျော်ရည်ကိုင်ပြီး ဆရာကျန်းကို ဂုဏ်ပြုရင် ဘာပြောမလဲ။'), src: WORK, opts: [
      { zh: '師傅，謝謝您這一年的照顧！', ok: 1 },
      { zh: '師傅，你喝很多喔！', r: [say('zhang', '哈哈，我喝茶就好。')] },
      { zh: '師傅，明年要給我加薪喔！', r: [say('zhang', '……先把工作做好再說吧。')] },
      { zh: '我要先吃飯。' },
    ], wrong: [say('zhang', '想想要怎麼謝謝別人。')], ok: [say('zhang', '你辛苦了！明年也要加油。')] } },
    { scene: 'banquet', npc: 'host' },
    n('z02b'),
    { card: 'luckydraw' },
    { fx: { money: 2000, mood: 20, aff: { zhang: 2 } } },
  ],

  // 2 月：除夕到陳導師家吃年夜飯（吉祥話）
  Z03: [
    { scene: 'home', npc: 'chen' },
    n('z03a'),
    say('chen', '桌上有魚，可是魚不能吃完喔，要留一點。', { listen: 1 }),
    { q: { p: T('為什麼魚要留一點不吃完？', 'Tại sao phải để lại một ít cá?', 'Mengapa ikan harus disisakan sedikit?', 'Why do you leave some of the fish uneaten?', 'ทำไมต้องเหลือปลาไว้นิดหน่อย', 'ဘာကြောင့် ငါးကို နည်းနည်း ချန်ထားရလဲ။'), src: LIFE, opts: [
      { zh: '因為「年年有餘」，希望每年都有剩', ok: 1 },
      { zh: '因為魚不好吃', r: [say('chen', '很好吃喔！是有特別的意思。')] },
      { zh: '因為要給貓吃' },
      { zh: '因為太貴了' },
    ], wrong: [say('chen', '「魚」和「餘」的聲音一樣喔。')], ok: [say('chen', '對！你懂得很多。')] } },
    say('chen', '這是長年菜，葉子很長，意思是大家都會活得很久。'),
    { scene: 'home', npc: 'chen' },
    say('chen', '新的一年快到了，你要跟師母說什麼吉祥話？'),
    { q: { p: P.say, src: LIFE, opts: [
      { zh: '祝您新年快樂，身體健康！', ok: 1 },
      { zh: '恭喜發財，紅包拿來！', r: [say('chen', '哈哈，這個要跟熟的朋友說才可以。')] },
      { zh: '您看起來老了。', r: [say('chen', '過年不可以說這種話喔！')] },
      { zh: '謝謝，我吃飽了。' },
    ], wrong: [say('chen', '過年要說好聽的話。')], ok: [say('chen', '說得真好！')] } },
    n('z03b'),
    { fx: { mood: 20, zh: 3, aff: { chen: 2 } } },
  ],

  // 2 月：元宵節猜燈謎、吃湯圓
  Z04: [
    { scene: 'temple', npc: 'amei' },
    n('z04a'),
    say('amei', '這一題：「十張口，一顆心」，猜一個字。'),
    { q: { p: T('「十張口，一顆心」是哪一個字？', '“Mười cái miệng, một trái tim” là chữ nào?', '“Sepuluh mulut, satu hati” itu huruf apa?', '“Ten mouths, one heart” — which character is it?', '“สิบปาก หนึ่งใจ” คือตัวอักษรอะไร', '“ပါးစပ် ဆယ်ခု၊ နှလုံး တစ်လုံး” ဘယ်စာလုံးလဲ။'), src: LIFE, opts: [
      { zh: '思', ok: 1 }, { zh: '忙' }, { zh: '回' }, { zh: '品' },
    ], wrong: [say('amei', '把「十」和「口」放在一起，就是「田」。下面再加一個「心」……')], ok: [say('amei', '答對了！是「思」，想念的「思」。')] } },
    { card: 'lantern' },
    { scene: 'temple', npc: 'ajiao' },
    n('z04b'),
    say('ajiao', '來，吃一碗湯圓。你一個人在台灣，家人一定很想你。'),
    { q: { p: P.say, src: LIFE, opts: [
      { zh: '謝謝阿嬌！我等一下打電話給他們。', ok: 1 },
      { zh: '我不想他們。', r: [say('ajiao', '真的嗎？')] },
      { zh: '湯圓太甜了。' },
      { zh: '多少錢？', r: [say('ajiao', '不用錢啦，請你吃的！')] },
    ], wrong: [say('ajiao', '嗯？')], ok: [say('ajiao', '好孩子。')] } },
    { fx: { mood: 15, aff: { ajiao: 1, amei: 1 } } },
  ],

  // 3 月 1 日：兩組輪調。剛到公司的寫交接；回學校的開班會選幹部
  Z05: [
    { ifStatus: 'work', then: [
      { scene: 'work', npc: 'tongxue' },
      n('z05w'),
      { poster: [['機器', '每天下班前要清潔'], ['工具', '用完放回原位'], ['安全', '戴好手套和安全帽'], ['問題', '找張師傅']], title: '交接單' },
      { q: { p: T('工具用完要怎麼做？', 'Dùng xong dụng cụ phải làm gì?', 'Setelah memakai alat, harus bagaimana?', 'What do you do after using the tools?', 'ใช้เครื่องมือเสร็จต้องทำอย่างไร', 'ကိရိယာ သုံးပြီးရင် ဘာလုပ်ရမလဲ။'), src: WORK, opts: [
        { zh: '放回原位', ok: 1 }, { zh: '放在桌上就好' }, { zh: '帶回宿舍', r: [say('zhang', '公司的工具不能帶走！')] }, { zh: '丟掉' },
      ], wrong: [say('tongxue', '再看一次交接單。')] } },
      say('tongxue', '還有，三號機台這幾天聲音怪怪的，我已經跟師傅說了。', { listen: 1 }),
      { q: { p: T('哪一台機器有問題？', 'Máy nào có vấn đề?', 'Mesin mana yang bermasalah?', 'Which machine has a problem?', 'เครื่องไหนมีปัญหา', 'ဘယ်စက်မှာ ပြဿနာ ရှိလဲ။'), src: WORK, opts: [
        { zh: '三號機台', ok: 1 }, { zh: '一號機台' }, { zh: '八號機台' }, { zh: '都沒有問題' },
      ], wrong: [say('tongxue', '我再說一次喔。')], ok: [say('tongxue', '交給你了，加油！')] } },
      { scene: 'work', npc: 'zhang' },
      say('zhang', '交接要寫清楚，下一個人才不會出錯。'),
      { fx: { skill: 5, aff: { zhang: 1 } } },
    ], else: [
      { scene: 'classroom', npc: 'chen' },
      n('z05s'),
      say('chen', '這學期要選新的幹部。衛生股長要負責安排大家的打掃工作。', { listen: 1 }),
      { q: { p: T('衛生股長要負責什麼？', 'Cán sự vệ sinh phụ trách việc gì?', 'Petugas kebersihan kelas bertanggung jawab atas apa?', 'What is the class hygiene officer responsible for?', 'หัวหน้าฝ่ายสุขอนามัยรับผิดชอบอะไร', 'သန့်ရှင်းရေးတာဝန်ခံက ဘာကို တာဝန်ယူရလဲ။'), src: LIFE, opts: [
        { zh: '安排大家的打掃工作', ok: 1 }, { zh: '收班費' }, { zh: '上台唱歌' }, { zh: '幫老師買便當' },
      ], wrong: [say('chen', '再聽一次。')] } },
      say('chen', '有人推薦你當衛生股長。你願意嗎？'),
      { q: { p: P.say, src: LIFE, opts: [
        { zh: '好，我願意試試看！', ok: 1, then: [say('chen', '很好，大家給他拍拍手！'), { fx: { pop: 5 } }] },
        { zh: '我中文還不夠好，可是我可以幫忙。', ok: 1, then: [say('chen', '沒關係，有問題大家會幫你。'), { fx: { pop: 3 } }] },
        { zh: '不要，很麻煩。', r: [say('chen', '……好吧，那我們再問問別人。')] },
        { zh: '我不知道。' },
      ], wrong: [say('chen', '嗯？你可以說願意，也可以說你的想法。')] } },
      { fx: { mood: 5, aff: { chen: 1 } } },
    ] },
  ],

  // 3 月：報名華語文能力測驗（進階級 B1）
  Z06: [
    { scene: 'classroom', npc: 'lin' },
    n('z06a'),
    { poster: [['考試', '華語文能力測驗　進階級（B1）'], ['考試日期', '五月十日'], ['報名截止', '三月二十日'], ['報名', '學校團體報名，報名費有優惠'], ['要準備', '照片一張、居留證']], title: '報名說明' },
    say('lin', '學校會幫大家團體報名，報名費比自己報名便宜。沒考過也不用擔心，大概兩個月後還可以再考。'),
    { q: { p: T('報名截止是哪一天？', 'Hạn chót đăng ký là ngày nào?', 'Batas akhir pendaftaran tanggal berapa?', 'What is the registration deadline?', 'ปิดรับสมัครวันไหน', 'လျှောက်လွှာ နောက်ဆုံးရက် ဘယ်နေ့လဲ။'), src: LIFE, opts: [
      { zh: '三月二十日', ok: 1 }, { zh: '五月十日', r: [say('lin', '五月十日是考試的日子喔。')] }, { zh: '三月十日' }, { zh: '沒有截止' },
    ], wrong: [say('lin', '看「報名截止」那一行。')] } },
    say('lin', '進階級要聽得懂比較長的對話，每天聽十分鐘新聞，很有幫助。', { listen: 1 }),
    { q: { p: T('林老師建議每天做什麼？', 'Cô Lâm khuyên mỗi ngày nên làm gì?', 'Bu Lin menyarankan melakukan apa setiap hari?', 'What does Ms. Lin suggest doing every day?', 'ครูหลินแนะนำให้ทำอะไรทุกวัน', 'ဆရာမလင်က နေ့တိုင်း ဘာလုပ်ဖို့ အကြံပေးလဲ။'), src: LIFE, opts: [
      { zh: '聽十分鐘新聞', ok: 1 }, { zh: '看十分鐘手機' }, { zh: '睡十分鐘' }, { zh: '聽十首歌' },
    ], wrong: [say('lin', '再聽一次。')], ok: [say('lin', '對！加油，你一定可以的。')] } },
    { fx: { zh: 5, aff: { lin: 1 } } },
  ],

  I12: inspection(),
  I13: inspection(),
  I14: inspection(),

  // 隨機：寒流用電暖器（宿舍違規電器；選錯有後果，再教正確做法，之後複習）
  R14: [
    { scene: 'dorm', npc: 'tongxue' },
    n('r14a'),
    say('tongxue', '好冷喔！我們一起開電暖器吧，阿姨不會知道的。'),
    { q: { p: Q_DO, src: LIFE, opts: [
      { zh: '不行，宿舍不能用電暖器，很容易跳電。', ok: 1, then: [say('tongxue', '……好啦，那我多穿一件外套。'), { fx: { mood: 3 } }] },
      { zh: '我們多穿一件外套，蓋厚一點的被子就好。', ok: 1, then: [say('tongxue', '也對，我去拿被子。'), { fx: { mood: 3, aff: { tongxue: 1 } } }] },
      { zh: '好啊，插在延長線上一起用！', end: 1, r: [n('r14b'), { scene: 'dorm', npc: 'ayi' },
        say('ayi', '宿舍不能用電暖器！電太大會跳電，還可能發生火災。這台我先收走。'),
        { violation: 1 }, { fx: { mood: -15, hp: -5 } },
        say('ayi', '天氣冷的時候，要多穿衣服、蓋厚被子，喝熱的東西。'),
        { q: { p: Q_COLD, src: LIFE, opts: [
          { zh: '多穿衣服、蓋厚被子', ok: 1 }, { zh: '偷偷用電暖器' }, { zh: '開電鍋取暖' }, { zh: '一直洗熱水澡' },
        ], wrong: [say('ayi', '不對喔，再想一次。')], ok: [say('ayi', '對！安全最重要。')] } },
        { redo: 'R14' }] },
      { zh: '假裝沒看到', end: 1, r: [n('r14c'), { fx: { mood: -5 } },
        { scene: 'dorm', npc: 'ayi' },
        say('ayi', '看到同學用違規電器，要勸他，或告訴阿姨。不然大家都有危險。'),
        { q: { p: T('看到同學用違規電器，你要怎麼做？', 'Thấy bạn dùng thiết bị điện bị cấm, bạn nên làm gì?', 'Melihat teman memakai alat listrik terlarang, apa yang harus kamu lakukan?', 'You see a classmate using a banned appliance. What should you do?', 'เห็นเพื่อนใช้เครื่องใช้ไฟฟ้าต้องห้าม คุณควรทำอย่างไร', 'သူငယ်ချင်းက တားမြစ်ထားတဲ့ လျှပ်စစ်ပစ္စည်း သုံးတာ မြင်ရင် ဘာလုပ်မလဲ။'), src: LIFE, opts: [
          { zh: '勸他，或告訴宿舍阿姨', ok: 1 }, { zh: '假裝沒看到' }, { zh: '一起用' }, { zh: '拍照上網' },
        ], wrong: [say('ayi', '再想想看。')], ok: [say('ayi', '對，大家的安全最重要。')] } },
        { redo: 'R14' }] },
    ], wrong: [say('ayi', '記得：宿舍不能用電暖器喔。')], ok: [] } },
  ],
  // 複習：室友想買電暖器
  R14b: [
    { scene: 'room', npc: 'amei' },
    n('r14d'),
    say('amei', '這台電暖器在打折耶！我們買一台放在房間好不好？'),
    { q: { p: P.say, src: LIFE, opts: [
      { zh: '宿舍不能用電暖器，我們買厚一點的被子吧！', ok: 1, then: [say('amei', '對喔，我差點忘了。'), { fx: { mood: 5, aff: { amei: 1, ayi: 1 } } }] },
      { zh: '我們去交誼廳喝熱可可吧！', ok: 1, then: [say('amei', '好啊，走吧！'), { fx: { mood: 5, aff: { amei: 1 } } }] },
      { zh: '好啊，不要被阿姨看到就好。', r: [say('amei', '……你上次不是說會跳電嗎？')] },
      { zh: '買兩台！' },
    ], wrong: [say('amei', '嗯……你覺得呢？')], ok: [] } },
  ],
  // 隨機：室友晚上講電話太大聲（禮貌地提出請求）
  R15: [
    { scene: 'room', npc: 'amei' },
    n('r15a'),
    { q: { p: P.say, src: LIFE, opts: [
      { zh: '不好意思，可以小聲一點嗎？我明天要考試。', ok: 1 },
      { zh: '你可以去交誼廳講嗎？謝謝你。', ok: 1 },
      { zh: '吵死了！閉嘴！', r: [say('amei', '……你幹嘛這麼兇？'), { fx: { aff: { amei: -1 } } }] },
      { zh: '（什麼都不說，一直生氣）', r: [{ fx: { mood: -5 } }] },
    ], wrong: [say('amei', '嗯？你怎麼了？')], ok: [say('amei', '啊，對不起！我去外面講。你考試加油！'), { fx: { mood: 5, hp: 5, aff: { amei: 1 } } }] } },
  ],
};

module.exports = { N, EVENTS };

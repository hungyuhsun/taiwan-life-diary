// 前傳「第 0 章：出發前」＋開場動畫＋新生基礎訓練
// 時程參考青年高中僑生新生入學資訊網（overseas.youth.tc.edu.tw）與老師說明：
//   前一年 12 月～1 月底 在新生入學資訊網看招生訊息、決定科別、填線上意向表（優先預約）→ 1 月 華語文能力測驗 A1（報名要附證明）→ 2 月底～3 月初 到保薦單位報名
//   → 5 月中旬 各國筆試（緬甸面試）→ 7 月 20–31 日 僑委會正式分發榜單、錄取通知與簽證文件 → 辦簽證 → 7/25～8/25 搭機抵台
//   → 8 月 新生基礎訓練 → 廠商面試、分組 → 9 月開學
// 詞彙：A1 以下為主，旁白靠母語翻譯。zh = 中文；vi id en th my = 五種輔助語言。
const { T, P } = require('./story.js');

const N = {
  // ---------- 開場動畫（沒玩前傳的新玩家） ----------
  op1: T('入學前一年的十一月，學校開始招生宣導。你在青年高中的新生入學資訊網看到僑生專班的招生訊息，選好了想讀的科。', 'Tháng Mười Một năm trước khi nhập học, trường bắt đầu quảng bá tuyển sinh. Bạn xem thông tin lớp Hoa kiều trên trang tuyển sinh của trường Thanh Niên và chọn được ngành muốn học.', 'November setahun sebelum masuk, sekolah mulai promosi penerimaan. Kamu melihat info kelas siswa perantauan di situs SMA Youth dan memilih jurusan.', 'November, the year before you start: the school begins its admissions outreach. You read about the overseas-student program on Youth High School’s admissions website and choose a department.', 'เดือนพฤศจิกายนของปีก่อนเข้าเรียน โรงเรียนเริ่มประชาสัมพันธ์รับสมัคร คุณดูข้อมูลห้องเรียนนักเรียนจีนโพ้นทะเลบนเว็บไซต์ของโรงเรียนเยาวชน และเลือกแผนกที่อยากเรียน', 'ကျောင်းမဝင်ခင် တစ်နှစ်အလိုက် နိုဝင်ဘာလမှာ ကျောင်းက ကျောင်းသားခေါ်ယူရေး စတင်ကြော်ငြာတယ်။ Youth ကျောင်းရဲ့ ဝက်ဘ်ဆိုက်မှာ ကြည့်ပြီး တက်ချင်တဲ့ ဌာနကို ရွေးတယ်။'),
  op2: T('十二月，你到保薦單位報名。早一點報名完成，就可以參加學校的華語文學習輔導。', 'Tháng Mười Hai, bạn đến đơn vị bảo tiến đăng ký. Đăng ký sớm thì được tham gia lớp phụ đạo tiếng Hoa của trường.', 'Desember, kamu mendaftar di lembaga penjamin. Kalau mendaftar lebih awal, kamu bisa ikut bimbingan belajar bahasa Mandarin dari sekolah.', 'December: you apply at the sponsoring agency. Applying early lets you join the school’s Chinese tutoring program.', 'เดือนธันวาคม คุณไปสมัครที่หน่วยงานรับรอง สมัครเสร็จเร็วก็เข้าร่วมการติวภาษาจีนของโรงเรียนได้', 'ဒီဇင်ဘာလမှာ အာမခံအဖွဲ့မှာ လျှောက်လွှာတင်တယ်။ စောစော လျှောက်ပြီးရင် ကျောင်းရဲ့ တရုတ်စာ သင်တန်းကို တက်လို့ရတယ်။'),
  op3: T('二月，你參加華語文能力測驗，通過了入門級（A1）。二月底以前一定要通過。', 'Tháng Hai, bạn thi TOCFL và đậu cấp Nhập môn (A1). Trước cuối tháng Hai nhất định phải đậu.', 'Februari, kamu ikut TOCFL dan lulus tingkat Pemula (A1). Harus lulus sebelum akhir Februari.', 'February: you take the TOCFL and pass Level 1 (A1). You must pass by the end of February.', 'เดือนกุมภาพันธ์ คุณสอบ TOCFL และผ่านระดับ A1 ต้องผ่านก่อนสิ้นเดือนกุมภาพันธ์', 'ဖေဖော်ဝါရီလမှာ TOCFL ဖြေပြီး A1 အောင်တယ်။ ဖေဖော်ဝါရီလကုန် မတိုင်ခင် မဖြစ်မနေ အောင်ရမယ်။'),
  op4: T('一月，保薦單位把你的報名資料送去審查。你每個星期都上華語輔導課。', 'Tháng Một, đơn vị bảo tiến gửi hồ sơ của bạn đi xét duyệt. Tuần nào bạn cũng học lớp phụ đạo tiếng Hoa.', 'Januari, lembaga penjamin mengirim berkasmu untuk diperiksa. Setiap minggu kamu ikut kelas bimbingan bahasa Mandarin.', 'January: the agency sends your application for review. You attend Chinese tutoring every week.', 'เดือนมกราคม หน่วยงานรับรองส่งเอกสารของคุณไปพิจารณา คุณเรียนติวภาษาจีนทุกสัปดาห์', 'ဇန်နဝါရီလမှာ အာမခံအဖွဲ့က လျှောက်လွှာကို စိစစ်ဖို့ ပို့တယ်။ အပတ်တိုင်း တရုတ်စာ သင်တန်း တက်တယ်။'),
  op4m: T('一月，你到保薦單位參加面試，用中文做了自我介紹。', 'Tháng Một, bạn đến đơn vị bảo tiến phỏng vấn và tự giới thiệu bằng tiếng Hoa.', 'Januari, kamu diwawancarai di lembaga penjamin dan memperkenalkan diri dalam bahasa Mandarin.', 'January: you have your interview at the sponsoring agency and introduce yourself in Chinese.', 'เดือนมกราคม คุณไปสัมภาษณ์ที่หน่วยงานรับรอง และแนะนำตัวเป็นภาษาจีน', 'ဇန်နဝါရီလမှာ အာမခံအဖွဲ့မှာ အင်တာဗျူးဖြေပြီး တရုတ်လို မိတ်ဆက်တယ်။'),
  op5: T('五月底，錄取公告了！你收到青年高中的錄取通知書。', 'Cuối tháng Năm, có thông báo trúng tuyển! Bạn nhận được giấy báo trúng tuyển của trường Thanh Niên.', 'Akhir Mei, pengumuman penerimaan keluar! Kamu menerima surat penerimaan dari SMA Youth.', 'End of May: the admission results are out! You receive your acceptance letter from Youth High School.', 'ปลายเดือนพฤษภาคม ประกาศผลแล้ว! คุณได้รับหนังสือตอบรับจากโรงเรียนเยาวชน', 'မေလကုန်မှာ ဝင်ခွင့်ရလဒ် ထွက်ပြီ! Youth ကျောင်းရဲ့ ဝင်ခွင့်စာ ရတယ်။'),
  op6: T('六月辦好簽證。七月最後一週，你跟家人說再見，坐上飛機去台灣。', 'Tháng Sáu làm xong visa. Tuần cuối tháng Bảy, bạn chào tạm biệt gia đình và lên máy bay sang Đài Loan.', 'Juni visa selesai. Minggu terakhir Juli, kamu berpamitan dengan keluarga dan naik pesawat ke Taiwan.', 'Your visa is done in June. In the last week of July, you say goodbye to your family and fly to Taiwan.', 'เดือนมิถุนายนทำวีซ่าเสร็จ สัปดาห์สุดท้ายของเดือนกรกฎาคม คุณบอกลาครอบครัวแล้วขึ้นเครื่องบินไปไต้หวัน', 'ဇွန်လမှာ ဗီဇာ ရပြီ။ ဇူလိုင်လ နောက်ဆုံးပတ်မှာ မိသားစုကို နှုတ်ဆက်ပြီး ထိုင်ဝမ်ကို လေယာဉ်စီးလာတယ်။'),

  // ---------- 第 0 章 ----------
  o01a: T('入學前一年的十一月，{home}。學校開始招生宣導，你和媽媽一起在青年高中的新生入學資訊網上，看僑生專班的招生訊息。', 'Tháng Mười Một năm trước khi nhập học, ở {home}. Trường bắt đầu quảng bá tuyển sinh; bạn và mẹ cùng xem thông tin lớp Hoa kiều trên trang tuyển sinh của trường Thanh Niên.', 'November setahun sebelum masuk sekolah, di {home}. Sekolah mulai promosi penerimaan; kamu dan ibu melihat info kelas siswa perantauan di situs SMA Youth.', 'November, the year before you start. The school begins its admissions outreach, and you and Mom read about the overseas-student program on Youth High School’s website.', 'เดือนพฤศจิกายนของปีก่อนเข้าเรียน ที่บ้าน โรงเรียนเริ่มประชาสัมพันธ์รับสมัคร คุณกับแม่ดูข้อมูลห้องเรียนนักเรียนจีนโพ้นทะเลบนเว็บไซต์ของโรงเรียนเยาวชน', 'ကျောင်းမဝင်ခင် တစ်နှစ်အလိုက် နိုဝင်ဘာလ၊ အိမ်မှာ။ ကျောင်းက ကြော်ငြာ စလုပ်တယ်၊ အမေနဲ့အတူ Youth ကျောင်းရဲ့ ဝက်ဘ်ဆိုက်မှာ ပြည်ပ တရုတ်ကျောင်းသား အတန်းအကြောင်း ကြည့်တယ်။'),
  o01b: T('三年高中，四年科技大學，一邊上課，一邊實習。每一科去的實習工廠都不一樣，要先想好讀哪一科。', 'Ba năm trung học, bốn năm đại học, vừa học vừa thực tập. Mỗi ngành thực tập ở nhà máy khác nhau, nên phải nghĩ kỹ học ngành nào trước.', 'Tiga tahun SMA, empat tahun universitas, sambil belajar sambil magang. Tiap jurusan magang di tempat yang berbeda, jadi harus memikirkan jurusan dulu.', 'Three years of high school and four of university, studying while doing internships. Each department interns at different companies, so you need to decide on a department first.', 'มัธยมปลายสามปี มหาวิทยาลัยสี่ปี เรียนไปฝึกงานไป แต่ละแผนกฝึกงานที่ต่างกัน จึงต้องคิดก่อนว่าจะเรียนแผนกไหน', 'အထက်တန်း ၃ နှစ်၊ တက္ကသိုလ် ၄ နှစ်၊ စာသင်ရင်း အလုပ်သင်ရမယ်။ ဌာနတစ်ခုချင်းစီ အလုပ်သင်တဲ့နေရာ မတူလို့ ဘယ်ဌာန တက်မလဲ အရင်စဉ်းစားရမယ်။'),
  o02a: T('十二月，你和媽媽到保薦單位報名。早一點報名完成，就可以參加學校的華語文學習輔導。', 'Tháng Mười Hai, bạn và mẹ đến đơn vị bảo tiến đăng ký. Đăng ký sớm thì được tham gia lớp phụ đạo tiếng Hoa của trường.', 'Desember, kamu dan ibu mendaftar di lembaga penjamin. Kalau selesai lebih awal, kamu bisa ikut bimbingan belajar bahasa Mandarin dari sekolah.', 'December: you and Mom apply at the sponsoring agency. Finishing early means you can join the school’s Chinese tutoring program.', 'เดือนธันวาคม คุณกับแม่ไปสมัครที่หน่วยงานรับรอง สมัครเสร็จเร็วก็เข้าร่วมการติวภาษาจีนของโรงเรียนได้', 'ဒီဇင်ဘာလမှာ အမေနဲ့ အာမခံအဖွဲ့မှာ လျှောက်လွှာတင်တယ်။ စောစော ပြီးရင် ကျောင်းရဲ့ တရုတ်စာ သင်တန်း တက်လို့ရတယ်။'),
  o02b: T('報名完成了！從下個月開始，你每個星期上學校的華語輔導課，準備二月的華語文能力測驗。', 'Đăng ký xong rồi! Từ tháng sau, tuần nào bạn cũng học lớp phụ đạo tiếng Hoa của trường để chuẩn bị thi TOCFL tháng Hai.', 'Pendaftaran selesai! Mulai bulan depan, setiap minggu kamu ikut kelas bimbingan bahasa Mandarin dari sekolah untuk persiapan TOCFL bulan Februari.', 'Application done! From next month you’ll attend the school’s Chinese tutoring every week to prepare for the TOCFL in February.', 'สมัครเสร็จแล้ว! ตั้งแต่เดือนหน้า คุณจะเรียนติวภาษาจีนของโรงเรียนทุกสัปดาห์ เพื่อเตรียมสอบ TOCFL เดือนกุมภาพันธ์', 'လျှောက်ပြီးပြီ! နောက်လကစပြီး ဖေဖော်ဝါရီ TOCFL အတွက် ကျောင်းရဲ့ တရုတ်စာ သင်တန်းကို အပတ်တိုင်း တက်မယ်။'),
  o03a: T('二月，你參加華語文能力測驗。可以報名以後再考，可是二月底以前一定要通過入門級（A1）。', 'Tháng Hai, bạn thi TOCFL. Có thể thi sau khi đăng ký, nhưng trước cuối tháng Hai nhất định phải đậu cấp Nhập môn (A1).', 'Februari, kamu ikut TOCFL. Boleh ujian setelah mendaftar, tapi sebelum akhir Februari harus lulus tingkat Pemula (A1).', 'February: you take the TOCFL. You can test after applying, but you must pass Level 1 (A1) by the end of February.', 'เดือนกุมภาพันธ์ คุณสอบ TOCFL สอบหลังสมัครได้ แต่ต้องผ่านระดับ A1 ก่อนสิ้นเดือนกุมภาพันธ์', 'ဖေဖော်ဝါရီလမှာ TOCFL ဖြေတယ်။ လျှောက်ပြီးမှ ဖြေလို့ရပေမဲ့ ဖေဖော်ဝါရီလကုန် မတိုင်ခင် A1 မဖြစ်မနေ အောင်ရမယ်။'),
  o03p: T('成績出來了：你通過了 A1！', 'Có kết quả rồi: bạn đã đậu A1!', 'Hasilnya keluar: kamu lulus A1!', 'Results are in: you passed A1!', 'ผลสอบออกแล้ว: คุณผ่าน A1!', 'ရလဒ်ထွက်ပြီ။ A1 အောင်ပြီ!'),
  o03f: T('第一次差一點點。你繼續上輔導課，每天用單字卡練習，二月底以前再考一次，這次通過了 A1！', 'Lần đầu thiếu một chút. Bạn tiếp tục học lớp phụ đạo, luyện thẻ từ vựng mỗi ngày, thi lại trước cuối tháng Hai và lần này đã đậu A1!', 'Pertama kali kurang sedikit. Kamu terus ikut bimbingan, berlatih kartu kosakata setiap hari, ujian lagi sebelum akhir Februari, dan kali ini lulus A1!', 'Just short the first time. You keep going to tutoring, practice flashcards daily, retake it before the end of February — and pass A1!', 'ครั้งแรกขาดไปนิดเดียว คุณเรียนติวต่อ ฝึกบัตรคำศัพท์ทุกวัน สอบใหม่ก่อนสิ้นเดือนกุมภาพันธ์ ครั้งนี้ผ่าน A1!', 'ပထမအကြိမ် နည်းနည်းလိုတယ်။ သင်တန်းဆက်တက်၊ နေ့တိုင်း လေ့ကျင့်ပြီး ဖေဖော်ဝါရီလကုန် မတိုင်ခင် ပြန်ဖြေတော့ A1 အောင်တယ်!'),
  o04m: T('一月，你到保薦單位參加面試。這是你第一次用中文面試。', 'Tháng Một, bạn đến đơn vị bảo tiến để phỏng vấn. Đây là lần đầu bạn phỏng vấn bằng tiếng Hoa.', 'Januari, kamu mengikuti wawancara di lembaga penjamin. Ini pertama kalinya kamu diwawancarai dalam bahasa Mandarin.', 'January: you go to the sponsoring agency for your interview — your first interview in Chinese.', 'เดือนมกราคม คุณไปสัมภาษณ์ที่หน่วยงานรับรอง นี่เป็นการสัมภาษณ์ภาษาจีนครั้งแรกของคุณ', 'ဇန်နဝါရီလမှာ အာမခံအဖွဲ့မှာ အင်တာဗျူး သွားဖြေတယ်။ တရုတ်လို ပထမဆုံး အင်တာဗျူးပဲ။'),
  o04n: T('一月，緬甸的同學一定要面試，其他國家不一定，要看保薦單位怎麼安排。這次{home}的保薦單位沒有安排面試，你的資料直接送去審查。', 'Tháng Một. Học sinh Myanmar bắt buộc phải phỏng vấn, các nước khác thì tùy đơn vị bảo tiến sắp xếp. Lần này đơn vị bảo tiến ở {home} không xếp phỏng vấn, hồ sơ của bạn được gửi thẳng đi xét duyệt.', 'Januari. Siswa Myanmar wajib wawancara, negara lain belum tentu, tergantung lembaga penjamin. Kali ini lembaga penjamin di {home} tidak mengadakan wawancara, jadi berkasmu langsung diperiksa.', 'January. Students from Myanmar must be interviewed; elsewhere it depends on the sponsoring agency. This time your agency didn’t schedule an interview, so your documents go straight to review.', 'เดือนมกราคม นักเรียนจากเมียนมาต้องสัมภาษณ์ ประเทศอื่นไม่แน่เสมอไป ขึ้นกับหน่วยงานรับรอง ครั้งนี้หน่วยงานรับรองของคุณไม่ได้จัดสัมภาษณ์ เอกสารจึงถูกส่งไปพิจารณาเลย', 'ဇန်နဝါရီလ။ မြန်မာကျောင်းသားတွေ မဖြစ်မနေ အင်တာဗျူး ဖြေရတယ်၊ တခြားနိုင်ငံတွေကတော့ အာမခံအဖွဲ့ စီစဉ်ပုံပေါ် မူတည်တယ်။ ဒီတစ်ခါ ကိုယ့်အာမခံအဖွဲ့က အင်တာဗျူး မစီစဉ်လို့ စာရွက်စာတမ်းကို တိုက်ရိုက် စိစစ်ဖို့ ပို့လိုက်တယ်။'),
  o04w: T('你每個星期都上華語輔導課。老師說：多聽、多說，二月的考試就不怕。', 'Tuần nào bạn cũng học lớp phụ đạo tiếng Hoa. Cô giáo nói: nghe nhiều, nói nhiều thì không sợ kỳ thi tháng Hai.', 'Setiap minggu kamu ikut kelas bimbingan bahasa Mandarin. Gurunya bilang: banyak mendengar dan berbicara, ujian Februari tidak perlu ditakuti.', 'You go to Chinese tutoring every week. The teacher says: listen a lot and speak a lot, and February’s test won’t be scary.', 'คุณเรียนติวภาษาจีนทุกสัปดาห์ ครูบอกว่า ฟังเยอะ พูดเยอะ สอบเดือนกุมภาพันธ์ก็ไม่ต้องกลัว', 'အပတ်တိုင်း တရုတ်စာ သင်တန်း တက်တယ်။ ဆရာက များများနားထောင်၊ များများပြော၊ ဖေဖော်ဝါရီ စာမေးပွဲကို မကြောက်ရဘူးတဲ့။'),
  o05a: T('五月底，錄取公告了。媽媽比你還緊張。', 'Cuối tháng Năm, có thông báo trúng tuyển. Mẹ còn hồi hộp hơn cả bạn.', 'Akhir Mei, pengumuman penerimaan keluar. Ibu bahkan lebih tegang daripada kamu.', 'End of May: the admission results are announced. Mom is even more nervous than you.', 'ปลายเดือนพฤษภาคม ประกาศผลการรับสมัครแล้ว แม่ตื่นเต้นกว่าคุณอีก', 'မေလကုန်မှာ ဝင်ခွင့်ရလဒ် ကြေညာတယ်။ အမေက ကိုယ့်ထက်တောင် ပိုစိတ်လှုပ်ရှားနေတယ်။'),
  o06a: T('六月，學校寄來簽證文件的說明。你帶著錄取通知書，到台北經濟文化辦事處申請簽證。', 'Tháng Sáu, trường gửi hướng dẫn giấy tờ visa. Bạn mang giấy báo trúng tuyển đến Văn phòng Kinh tế Văn hóa Đài Bắc xin visa.', 'Juni, sekolah mengirim petunjuk dokumen visa. Kamu membawa surat penerimaan ke Kantor Dagang dan Ekonomi Taipei untuk mengajukan visa.', 'June: the school sends visa instructions. You take your acceptance letter to the Taipei Economic and Cultural Office to apply.', 'เดือนมิถุนายน โรงเรียนส่งคำแนะนำเอกสารวีซ่ามา คุณถือหนังสือตอบรับไปยื่นขอวีซ่าที่สำนักงานเศรษฐกิจและวัฒนธรรมไทเป', 'ဇွန်လမှာ ကျောင်းက ဗီဇာ လမ်းညွှန် ပို့လာတယ်။ ဝင်ခွင့်စာ ယူပြီး ထိုင်ပေ စီးပွားရေးနှင့် ယဉ်ကျေးမှုရုံးမှာ ဗီဇာ သွားလျှောက်တယ်။'),
  o06b: T('一個星期後，你拿到了簽證。護照上多了一頁台灣的簽證。', 'Một tuần sau, bạn nhận được visa. Hộ chiếu có thêm một trang visa Đài Loan.', 'Seminggu kemudian, visamu keluar. Di paspor ada satu halaman visa Taiwan.', 'A week later, you get your visa. There’s a new Taiwan visa page in your passport.', 'หนึ่งสัปดาห์ต่อมา คุณได้วีซ่าแล้ว ในหนังสือเดินทางมีวีซ่าไต้หวันเพิ่มมาหนึ่งหน้า', 'တစ်ပတ်အကြာ ဗီဇာ ရတယ်။ ပတ်စပို့ထဲမှာ ထိုင်ဝမ်ဗီဇာ တစ်မျက်နှာ တိုးလာတယ်။'),
  o07a: T('出發前一天晚上，你在整理行李。媽媽一直往你的行李箱裡放東西。', 'Tối trước ngày đi, bạn soạn hành lý. Mẹ cứ nhét thêm đồ vào vali của bạn.', 'Malam sebelum berangkat, kamu merapikan koper. Ibu terus memasukkan barang ke kopermu.', 'The night before you leave, you pack. Mom keeps putting more things into your suitcase.', 'คืนก่อนออกเดินทาง คุณจัดกระเป๋า แม่คอยใส่ของลงในกระเป๋าเดินทางของคุณไม่หยุด', 'ထွက်ခွာမယ့်ရက်ရဲ့ အရင်ညမှာ ခရီးဆောင်အိတ် ပြင်တယ်။ အမေက အိတ်ထဲကို ပစ္စည်းတွေ ထည့်ထည့်ပေးနေတယ်။'),
  o07b: T('台灣規定，肉乾、香腸這些肉做的東西不可以帶入境，被查到要罰很多錢。', 'Đài Loan quy định không được mang các sản phẩm từ thịt như khô thịt, lạp xưởng vào, nếu bị phát hiện sẽ bị phạt rất nặng.', 'Taiwan melarang membawa produk daging seperti dendeng dan sosis; jika ketahuan, dendanya sangat besar.', 'Taiwan doesn’t allow meat products like jerky or sausages to be brought in — if they’re found, the fine is very large.', 'ไต้หวันห้ามนำผลิตภัณฑ์จากเนื้อสัตว์ เช่น เนื้อแห้ง ไส้กรอก เข้าประเทศ ถ้าถูกตรวจพบจะโดนปรับเงินจำนวนมาก', 'ထိုင်ဝမ်မှာ အသားခြောက်၊ ဝက်အူချောင်းလို အသားထွက်ပစ္စည်းတွေ ယူမလာရဘူး၊ တွေ့ရင် ဒဏ်ငွေ အများကြီး ဆောင်ရမယ်။'),
  o07c: T('七月最後一週，出發的日子到了。你抱了抱媽媽，走進出境大廳。學校說，到了機場會有專車來接。下一站：台灣。', 'Tuần cuối tháng Bảy, ngày lên đường đã đến. Bạn ôm mẹ rồi bước vào sảnh xuất cảnh. Trường nói ở sân bay sẽ có xe đón. Điểm đến tiếp theo: Đài Loan.', 'Minggu terakhir Juli, hari keberangkatan tiba. Kamu memeluk ibu lalu masuk ke ruang keberangkatan. Sekolah bilang akan ada mobil jemputan di bandara. Tujuan berikutnya: Taiwan.', 'The last week of July: departure day. You hug Mom and walk into departures. The school says a car will meet you at the airport. Next stop: Taiwan.', 'สัปดาห์สุดท้ายของเดือนกรกฎาคม วันออกเดินทางมาถึง คุณกอดแม่แล้วเดินเข้าโถงขาออก โรงเรียนบอกว่าจะมีรถมารับที่สนามบิน จุดหมายต่อไป: ไต้หวัน', 'ဇူလိုင်လ နောက်ဆုံးပတ်၊ ထွက်ခွာမယ့်နေ့ ရောက်ပြီ။ အမေကို ဖက်ပြီး ထွက်ခွာခန်းမထဲ ဝင်သွားတယ်။ လေဆိပ်မှာ ကျောင်းကား လာကြိုမယ်တဲ့။ နောက်တစ်နေရာ — ထိုင်ဝမ်။'),

  // ---------- 第 6 章：協助學校招生（二年級 11 月） ----------
  s01a: T('十一月底，家鄉的學弟妹正在看明年的招生訊息。陳導師請大家幫忙介紹學校。晚上，你的表弟傳來 LINE。', 'Cuối tháng Mười Một, các em ở quê đang xem thông tin tuyển sinh năm sau. Thầy Trần nhờ mọi người giúp giới thiệu trường. Buổi tối, em họ bạn nhắn LINE.', 'Akhir November, adik-adik di kampung sedang melihat info penerimaan tahun depan. Pak Chen meminta semua membantu memperkenalkan sekolah. Malamnya, sepupumu mengirim LINE.', 'End of November: younger students back home are looking at next year’s admissions. Mr. Chen asks everyone to help introduce the school. That night, your cousin sends you a LINE message.', 'ปลายเดือนพฤศจิกายน น้องๆ ที่บ้านเกิดกำลังดูประกาศรับสมัครปีหน้า อาจารย์เฉินขอให้ทุกคนช่วยแนะนำโรงเรียน ตอนกลางคืน ลูกพี่ลูกน้องส่ง LINE มา', 'နိုဝင်ဘာလကုန်မှာ ဇာတိက ညီငယ်တွေ နောက်နှစ် ကျောင်းဝင်ခွင့် ကြော်ငြာကို ကြည့်နေကြတယ်။ ဆရာချန်က ကျောင်းကို မိတ်ဆက်ပေးဖို့ အကူအညီတောင်းတယ်။ ညမှာ ဝမ်းကွဲမောင်လေးက LINE ပို့လာတယ်။'),
  s01b: T('兩年前，你也是從這個網站開始的。現在換你幫學弟妹了。', 'Hai năm trước, bạn cũng bắt đầu từ trang web này. Bây giờ đến lượt bạn giúp các em.', 'Dua tahun lalu, kamu juga memulai dari situs ini. Sekarang giliranmu membantu adik-adik.', 'Two years ago, you started from this same website. Now it’s your turn to help the younger students.', 'สองปีก่อน คุณก็เริ่มจากเว็บไซต์นี้เหมือนกัน ตอนนี้ถึงตาคุณช่วยน้องๆ แล้ว', 'လွန်ခဲ့တဲ့ နှစ်နှစ်က ကိုယ်လည်း ဒီဝက်ဘ်ဆိုက်ကနေ စခဲ့တာ။ အခု ညီငယ်တွေကို ကူညီဖို့ ကိုယ့်အလှည့်ပဲ။'),
  // ---------- 第 1 章：新生基礎訓練（8 月第 1 週） ----------
  tr1a: T('八月。新生基礎訓練開始了：上華語課、認識學校的規定、學工廠安全。', 'Tháng Tám. Khóa huấn luyện cơ bản cho tân sinh bắt đầu: học tiếng Hoa, tìm hiểu nội quy trường, học an toàn nhà máy.', 'Agustus. Pelatihan dasar siswa baru dimulai: kelas bahasa Mandarin, mengenal peraturan sekolah, belajar keselamatan pabrik.', 'August. New-student orientation begins: Chinese classes, school rules, and factory safety.', 'เดือนสิงหาคม การอบรมพื้นฐานนักเรียนใหม่เริ่มแล้ว: เรียนภาษาจีน ทำความรู้จักกฎของโรงเรียน เรียนความปลอดภัยในโรงงาน', 'သြဂုတ်လ။ ကျောင်းသားသစ် အခြေခံသင်တန်း စတယ်။ တရုတ်စာ၊ ကျောင်းစည်းကမ်း၊ စက်ရုံဘေးကင်းရေး သင်ရမယ်။'),
};
const say = (who, zh, extra = {}) => ({ say: who, zh, ...extra });
const n = (k) => ({ n: N[k] });
const LIFE = '生活中文';
// 第一步：上青年高中的新生入學資訊網看招生訊息（前傳最前面；之後協助學校招生時再用一次）
const INFO1 = { link: { href: 'https://overseas.youth.tc.edu.tw', label: '青年高中 2027 年僑生新生入學資訊網', zh: '第一步：上青年高中的新生入學資訊網，看招生訊息和各科介紹。',
  tr: T('第一步：上青年高中的新生入學資訊網，看招生訊息和各科介紹。', 'Bước đầu tiên: vào trang thông tin tuyển sinh của trường Thanh Niên, xem thông báo tuyển sinh và giới thiệu các ngành.', 'Langkah pertama: buka situs info penerimaan siswa baru SMA Youth, lihat info pendaftaran dan pengenalan tiap jurusan.', 'Step one: visit Youth High School’s admissions website to read the admissions notice and the department introductions.', 'ขั้นแรก: เข้าเว็บไซต์ข้อมูลรับสมัครนักเรียนใหม่ของโรงเรียนเยาวชน ดูประกาศรับสมัครและข้อมูลแต่ละแผนก', 'ပထမအဆင့် — Youth ကျောင်းရဲ့ ကျောင်းသားသစ် ဝက်ဘ်ဆိုက်မှာ ကြော်ငြာနဲ့ ဌာနတစ်ခုချင်းစီ မိတ်ဆက်ကို ကြည့်ပါ။') } };
// 真實的入學資訊連結（遊戲裡的時程是簡化版）
const INFO = { link: { href: 'https://overseas.youth.tc.edu.tw', label: '青年高中 2027 年僑生新生入學資訊網', zh: '真實的報名時間和資料，請看學校的新生入學資訊網。',
  tr: T('真實的報名時間和資料，請看學校的新生入學資訊網。', 'Thời gian đăng ký và hồ sơ thực tế, hãy xem trang thông tin tuyển sinh của trường.', 'Untuk jadwal dan berkas pendaftaran yang sebenarnya, lihat situs info penerimaan siswa baru sekolah.', 'For the real application dates and documents, see the school’s admissions website.', 'ดูกำหนดการและเอกสารการสมัครจริงได้ที่เว็บไซต์ข้อมูลรับสมัครนักเรียนใหม่ของโรงเรียน', 'တကယ့် လျှောက်ရမယ့်ရက်နဲ့ စာရွက်စာတမ်းတွေကို ကျောင်းရဲ့ ကျောင်းသားသစ် ဝက်ဘ်ဆိုက်မှာ ကြည့်ပါ။') } };

const EVENTS = {
  // 前一年 11–12 月：在新生入學資訊網看招生訊息，決定想讀的科
  O01: [
    { scene: 'hometown', npc: 'mama' },
    n('o01a'),
    INFO1,
    say('mama', '你想去台灣讀書嗎？'),
    { q: { p: P.reply, src: LIFE, opts: [
      { zh: '想！我想去台灣讀書。', ok: 1 }, { zh: '我想吃飯。', r: [say('mama', '……先回答問題啦！')] }, { zh: '我是台灣人。' }, { zh: '我不知道他是誰。' },
    ], wrong: [say('mama', '你想不想去？')], ok: [say('mama', '好，我們一起看看。')] } },
    n('o01b'),
    { poster: [['學校', '青年高中'], ['學制', '3＋4（三年高中＋四年科大）'], ['上課', '一邊上課，一邊實習'], ['報名', '12 月就報名，可以參加華語輔導']], title: '招生資訊' },
    { q: { p: T('這個學校要讀幾年高中？', 'Ở trường này học cấp ba mấy năm?', 'Berapa tahun SMA di sekolah ini?', 'How many years of high school is it?', 'โรงเรียนนี้เรียนมัธยมปลายกี่ปี', 'ဒီကျောင်းမှာ အထက်တန်း ဘယ်နှနှစ် တက်ရမလဲ။'), src: LIFE, opts: [
      { zh: '三年', ok: 1 }, { zh: '四年', r: [say('mama', '四年是科技大學喔。')] }, { zh: '七年' }, { zh: '一年' },
    ], wrong: [say('mama', '看「學制」那一行。')] } },
    say('mama', '你想讀哪一科？'),
    { q: { p: P.reply, src: LIFE, opts: [
      { zh: '我想讀{dept}。', ok: 1 }, { zh: '我想讀台灣。' }, { zh: '我想吃台灣的東西。', r: [say('mama', '……那是去玩吧！')] }, { zh: '我想睡覺。' },
    ], wrong: [say('mama', '你想讀哪一科呢？')], ok: [say('mama', '好，那十二月就去保薦單位報名，早一點報名比較好。')] } },
    { fx: { mood: 5 } },
  ],
  // 2–3 月：到保薦單位報名、填志願、送件
  O02: [
    { scene: 'agency', npc: 'officer' },
    n('o02a'),
    say('officer', '你好。請給我你的護照。', { listen: 1 }),
    { q: { p: P.pick, src: LIFE, kind: 'listen', opts: [
      { zh: '護照', e: '🛂', ok: 1 }, { zh: '手機', e: '📱' }, { zh: '書包', e: '🎒' }, { zh: '水', e: '💧' },
    ], wrong: [say('officer', '護照。')] } },
    { poster: [['一', '國中（初中）成績單'], ['二', '身分證明文件（護照或身分證）'], ['三', '華語文能力測驗 A1：二月底以前通過']], title: '報名要交的資料' },
    { q: { p: T('報名的時候，不用交哪一個？', 'Khi đăng ký, không cần nộp cái nào?', 'Saat mendaftar, apa yang tidak perlu diserahkan?', 'Which one do you NOT need to hand in?', 'ตอนสมัคร ไม่ต้องส่งอะไร', 'လျှောက်တဲ့အခါ ဘာကို မအပ်ရဘူးလဲ။'), src: LIFE, opts: [
      { zh: '飛機票', ok: 1 }, { zh: '成績單' }, { zh: '身分證明文件' }, { zh: '護照' },
    ], wrong: [say('officer', '請再看一次表。')] } },
    say('officer', '這是志願表。你想讀什麼科？'),
    { q: { p: P.reply, src: LIFE, opts: [
      { zh: '我想讀{dept}。', ok: 1 }, { zh: '我想去夜市。', r: [say('officer', '夜市不是科喔！')] }, { zh: '我十五歲。' }, { zh: '我不要讀書。' },
    ], wrong: [say('officer', '你想讀哪一科？')], ok: [say('officer', '好，寫在這裡。')] } },
    n('o02b'),
  ],
  // 3 月：華語文能力測驗 A1（申請條件）
  O03: [
    { scene: 'classroom', npc: 'teacher' },
    n('o03a'),
    say('teacher', '女：「你好！你是哪國人？」男：「我是{home}人。」', { listen: 1 }),
    { q: { p: T('男生是哪國人？', 'Người nam là người nước nào?', 'Laki-laki itu orang mana?', 'Where is the man from?', 'ผู้ชายเป็นคนประเทศอะไร', 'အမျိုးသားက ဘယ်နိုင်ငံသားလဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '{home}人', ok: 1 }, { zh: '台灣人' }, { zh: '日本人' }, { zh: '美國人' },
    ], wrong: [] } },
    say('teacher', '男：「現在幾點？」女：「八點半。」', { listen: 1 }),
    { q: { p: T('現在幾點？', 'Bây giờ là mấy giờ?', 'Sekarang jam berapa?', 'What time is it now?', 'ตอนนี้กี่โมง', 'အခု ဘယ်နှနာရီလဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '八點半', ok: 1 }, { zh: '八點' }, { zh: '九點半' }, { zh: '四點半' },
    ], wrong: [] } },
    { poster: [['麵包', '30 元'], ['牛奶', '25 元'], ['蘋果', '20 元']], title: '價錢' },
    { q: { p: T('牛奶多少錢？', 'Sữa giá bao nhiêu?', 'Berapa harga susu?', 'How much is the milk?', 'นมราคาเท่าไร', 'နွားနို့ ဘယ်လောက်လဲ။'), src: LIFE, opts: [
      { zh: '二十五元', ok: 1 }, { zh: '三十元' }, { zh: '二十元' }, { zh: '五十二元' },
    ], wrong: [] } },
    { ifScore: 2, then: [n('o03p')], else: [n('o03f')] },
    { card: 'a1cert' },
    { fx: { zh: 3 } },
  ],
  // 5 月：緬甸面試；其他國家書面審查
  O04: [
    { ifHomeZh: ['緬甸'], then: [
      { scene: 'agency', npc: 'officer' },
      n('o04m'),
      say('officer', '你好，請坐。你叫什麼名字？', { listen: 1 }),
      { q: { p: P.reply, src: LIFE, opts: [
        { zh: '您好，我叫{name}。', ok: 1 }, { zh: '我坐這裡。' }, { zh: '我叫老師。', r: [say('officer', '哈哈，我不是老師喔，你呢？')] }, { zh: '再見。' },
      ], wrong: [say('officer', '你叫什麼名字？')] } },
      say('officer', '你為什麼想來台灣讀書？', { listen: 1 }),
      { q: { p: P.reply, src: LIFE, opts: [
        { zh: '我想學中文，也想學{dept}的技術。', ok: 1 }, { zh: '因為台灣的天氣很冷。' }, { zh: '我不想讀書。' }, { zh: '我喜歡睡覺。', r: [say('officer', '……在台灣要早起喔！')] },
      ], wrong: [say('officer', '慢慢說，沒關係。')], ok: [say('officer', '很好！你的中文說得不錯。')] } },
      { fx: { zh: 3 } },
    ], else: [
      { scene: 'hometown', npc: null },
      n('o04n'),
      { scene: 'classroom', npc: 'teacher' },
      say('teacher', '下個星期二晚上七點上課，記得帶課本。', { listen: 1 }),
      { q: { p: T('輔導課什麼時候上？', 'Lớp phụ đạo học lúc nào?', 'Kapan kelas bimbingan?', 'When is the tutoring class?', 'เรียนติวเมื่อไร', 'သင်တန်း ဘယ်တော့လဲ။'), src: LIFE, kind: 'listen', opts: [
        { zh: '星期二晚上七點', ok: 1 }, { zh: '星期四晚上七點' }, { zh: '星期二早上七點' }, { zh: '星期天下午' },
      ], wrong: [] } },
      n('o04w'),
      { q: { p: P.say, src: LIFE, opts: [
        { zh: '你好，我叫{name}，我是{home}人。', ok: 1 }, { zh: '你好，我叫台灣。' }, { zh: '我是老師，我叫媽媽。' }, { zh: '謝謝，對不起。' },
      ], wrong: [], ok: [] } },
    ] },
  ],
  // 5 月底：錄取公告，錄取通知書
  O05: [
    { scene: 'hometown', npc: 'mama' },
    n('o05a'),
    { poster: [['姓名', '{name}'], ['學校', '青年高中 僑生建教專班'], ['科別', '{dept}'], ['報到', '七月最後一週']], title: '錄取通知書' },
    { q: { p: T('什麼時候要到學校報到？', 'Khi nào phải đến trường nhập học?', 'Kapan harus melapor ke sekolah?', 'When must you report to the school?', 'ต้องไปรายงานตัวที่โรงเรียนเมื่อไร', 'ကျောင်းကို ဘယ်တော့ သတင်းပို့ရမလဲ။'), src: LIFE, opts: [
      { zh: '七月最後一週', ok: 1 }, { zh: '九月一日' }, { zh: '一月' }, { zh: '明天' },
    ], wrong: [say('mama', '看「報到」那一行。')] } },
    say('mama', '太好了！你考上了！'),
    { card: 'admitletter' },
    { fx: { mood: 20 } },
  ],
  // 6 月：辦簽證
  O06: [
    { scene: 'embassy', npc: 'officer' },
    n('o06a'),
    { poster: [['一', '護照'], ['二', '錄取通知書'], ['三', '照片兩張'], ['四', '簽證申請表']], title: '申請簽證' },
    { q: { p: T('申請簽證，要帶什麼？', 'Xin visa cần mang gì?', 'Apa yang harus dibawa untuk mengajukan visa?', 'What do you bring to apply for the visa?', 'ยื่นขอวีซ่าต้องเอาอะไรไป', 'ဗီဇာ လျှောက်ဖို့ ဘာယူသွားရမလဲ။'), src: LIFE, opts: [
      { zh: '護照和錄取通知書', ok: 1 }, { zh: '書包和水' }, { zh: '手機和耳機' }, { zh: '錢包和雨傘' },
    ], wrong: [say('officer', '請看申請表。')] } },
    say('officer', '一個星期以後來拿簽證。', { listen: 1 }),
    { q: { p: T('什麼時候可以拿簽證？', 'Khi nào có thể lấy visa?', 'Kapan visa bisa diambil?', 'When can you pick up the visa?', 'รับวีซ่าได้เมื่อไร', 'ဗီဇာ ဘယ်တော့ ယူလို့ရမလဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '一個星期以後', ok: 1 }, { zh: '明天' }, { zh: '一個月以後' }, { zh: '今天下午' },
    ], wrong: [say('officer', '一個星期。')] } },
    n('o06b'),
  ],
  // 7 月底：整理行李，出發
  O07: [
    { scene: 'hometown', npc: 'mama' },
    n('o07a'),
    say('mama', '這個肉乾你帶去吃。'),
    n('o07b'),
    { q: { p: T('哪一個不可以帶到台灣？', 'Cái nào không được mang sang Đài Loan?', 'Mana yang tidak boleh dibawa ke Taiwan?', 'Which one can’t you bring into Taiwan?', 'อะไรที่นำเข้าไต้หวันไม่ได้', 'ဘယ်ဟာကို ထိုင်ဝမ်ကို ယူမသွားရဘူးလဲ။'), src: LIFE, opts: [
      { zh: '肉乾', ok: 1 }, { zh: '衣服' }, { zh: '照片' }, { zh: '字典' },
    ], wrong: [say('mama', '……那肉乾我拿出來好了。')], ok: [say('me', '媽，肉乾不能帶。'), say('mama', '好好好，那帶這張全家福。')] } },
    { scene: 'airport', npc: 'mama' },
    n('o07c'),
    say('mama', '到了台灣，要打電話回家喔。'),
    { q: { p: P.reply, src: LIFE, opts: [
      { zh: '好，我到了就打電話給你。', ok: 1 }, { zh: '我不要打電話。' }, { zh: '我明天回家。' }, { zh: '你是誰？' },
    ], wrong: [say('mama', '要記得喔！')], ok: [say('mama', '加油！')] } },
    { fx: { mood: 10 } },
  ],
  // 第 6 章 11 月底：協助學校招生，把新生入學資訊網傳給家鄉的學弟妹
  S01: [
    { scene: 'phone', npc: 'cousin' },
    n('s01a'),
    say('cousin', '你在台灣的學校好不好？我也想去，要去哪裡看資料？'),
    { q: { p: P.reply, src: LIFE, opts: [
      { zh: '你先看青年高中的新生入學資訊網，上面有各科的介紹。', ok: 1 }, { zh: '你問媽媽就好。' }, { zh: '我也不知道。', r: [say('cousin', '你不是在那裡讀書嗎？')] }, { zh: '你直接坐飛機來。' },
    ], wrong: [say('cousin', '那我要看哪裡？')] } },
    { link: { href: 'https://overseas.youth.tc.edu.tw', label: '青年高中 2027 年僑生新生入學資訊網', zh: '你把新生入學資訊網的連結傳給表弟。',
      tr: T('你把新生入學資訊網的連結傳給表弟。', 'Bạn gửi đường link trang thông tin tuyển sinh cho em họ.', 'Kamu mengirim tautan situs info penerimaan siswa baru ke sepupumu.', 'You send your cousin the link to the admissions website.', 'คุณส่งลิงก์เว็บไซต์ข้อมูลรับสมัครให้ลูกพี่ลูกน้อง', 'ကျောင်းသားသစ် ဝက်ဘ်ဆိုက် လင့်ခ်ကို ဝမ်းကွဲမောင်လေးဆီ ပို့လိုက်တယ်။') } },
    say('cousin', '要怎麼報名？什麼時候報名？'),
    { q: { p: P.reply, src: LIFE, opts: [
      { zh: '十二月就到保薦單位報名，可以參加學校的華語輔導；二月底以前要通過華語文能力測驗 A1。', ok: 1 }, { zh: '九月來台灣再報名就好。' }, { zh: '不用考試，也不用報名。' }, { zh: '你先買機票。' },
    ], wrong: [say('cousin', '真的嗎？不是要先報名嗎？')], ok: [say('cousin', '好！我現在就開始學中文！')] } },
    n('s01b'),
    { fx: { pop: 3, mood: 10, aff: { chen: 1 } } },
  ],
  // 第 1 章 8 月第 1 週：新生基礎訓練
  TR1: [
    { scene: 'classroom', npc: 'chen' },
    n('tr1a'),
    say('chen', '這個月是新生基礎訓練。月底有廠商面試，面試以後分甲、乙兩組，九月開學。', { listen: 1 }),
    { q: { p: T('什麼時候廠商面試？', 'Khi nào phỏng vấn với nhà máy?', 'Kapan wawancara dengan perusahaan?', 'When are the company interviews?', 'สัมภาษณ์กับบริษัทเมื่อไร', 'ကုမ္ပဏီ အင်တာဗျူး ဘယ်တော့လဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '這個月月底', ok: 1 }, { zh: '九月開學' }, { zh: '明天早上' }, { zh: '下個星期一' },
    ], wrong: [say('chen', '再聽一次。')] } },
    { q: { p: T('基礎訓練要學什麼？', 'Huấn luyện cơ bản học những gì?', 'Apa yang dipelajari di pelatihan dasar?', 'What do you learn in orientation?', 'การอบรมพื้นฐานเรียนอะไร', 'အခြေခံသင်တန်းမှာ ဘာသင်ရလဲ။'), src: LIFE, opts: [
      { zh: '華語、學校規定、工廠安全', ok: 1 }, { zh: '唱歌、跳舞、畫畫' }, { zh: '開車、騎機車' }, { zh: '煮飯、洗衣服' },
    ], wrong: [say('chen', '想想剛剛說的。')], ok: [say('chen', '對！好好學，九月就要上場了。')] } },
    { fx: { zh: 2, aff: { chen: 1 } } },
  ],
};

module.exports = { N, EVENTS };

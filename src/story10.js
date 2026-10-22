// 第十章劇本資料（三年級 10–12 月）：小組長向主管報告／寫中文自傳（依在校、實習輪調）、
// B1 還沒過的同學重新報名（11 月場，學校團體報名）、模擬面試（科大面試主要看中文程度）、
// 交接給下一組、到郵局匯款回家（只能找合法管道、不要把存摺借人）、冬至湯圓、學期末跟導師談未來。
// 資訊科的志願表在三下 3 月說明會前填（第 11 章），本章只預告。
// 隨機事件：趕進度想跳過安全檢查（選錯→教學→複習）、被誤會、天冷感冒（這次有健保卡）、宿舍噪音。
// 詞彙：B1 為主（當面、當場、記錄、按照、狀態、背景、經驗、優點、缺點、理想、表達、收穫、重點、
//       聯絡、手續、費用、簽名、文件、收據、合法、傳統、特色、習慣、至少、否則、因此、堅持、追求）。
const { T, P } = require('./story.js');
const S3 = require('./story3.js');

const N = {
  v01a: T('十月，你是生產線的小組長。早上巡線的時候，你聽到三號機器的聲音跟平常不一樣。', 'Tháng Mười, bạn là tổ trưởng dây chuyền. Sáng đi kiểm tra, bạn nghe tiếng máy số 3 khác với mọi ngày.', 'Oktober, kamu ketua kelompok di lini produksi. Saat berkeliling pagi, kamu mendengar mesin nomor 3 berbunyi tidak seperti biasa.', 'October. You’re the team leader on the line. On your morning walk-through, machine No. 3 sounds different from usual.', 'เดือนตุลาคม คุณเป็นหัวหน้ากลุ่มในสายการผลิต ตอนเดินตรวจตอนเช้า คุณได้ยินเสียงเครื่องหมายเลข 3 ผิดไปจากปกติ', 'အောက်တိုဘာလ၊ ထုတ်လုပ်ရေးလိုင်းမှာ အဖွဲ့ခေါင်းဆောင်ပါ။ မနက် လှည့်စစ်တော့ စက်နံပါတ် ၃ အသံ ပုံမှန်နဲ့ မတူဘူး။'),
  v01b: T('張師傅說：發現問題要當場停機，當面報告，再寫在紀錄上。這樣下一班的人才知道發生了什麼事。', 'Thầy Trương nói: phát hiện vấn đề phải dừng máy ngay, báo cáo trực tiếp, rồi ghi vào sổ. Như vậy ca sau mới biết đã xảy ra chuyện gì.', 'Pak Zhang bilang: kalau menemukan masalah, langsung hentikan mesin, laporkan langsung, lalu tulis di catatan. Dengan begitu shift berikutnya tahu apa yang terjadi.', 'Master Zhang says: when you find a problem, stop the machine on the spot, report it in person, then write it in the log, so the next shift knows what happened.', 'อาจารย์จางบอกว่า: เจอปัญหาต้องหยุดเครื่องทันที รายงานต่อหน้า แล้วจดลงบันทึก กะต่อไปจะได้รู้ว่าเกิดอะไรขึ้น', 'ဆရာကြီးကျန်းက ပြဿနာတွေ့ရင် ချက်ချင်း စက်ရပ်၊ မျက်နှာချင်းဆိုင် အစီရင်ခံ၊ ပြီးရင် မှတ်တမ်းမှာ ရေးပါတဲ့။ ဒါမှ နောက်အလှည့်က ဘာဖြစ်ခဲ့လဲ သိမှာ။'),
  v02a: T('林老師說，三年級下學期的大學面試，要先準備一份中文自傳。今天上課練習寫。', 'Cô Lâm nói, để phỏng vấn đại học học kỳ 2 năm lớp 12, phải chuẩn bị trước một bản tự giới thiệu bằng tiếng Hoa. Hôm nay luyện viết trên lớp.', 'Bu Lin bilang, untuk wawancara universitas di semester kedua kelas 12, harus menyiapkan otobiografi berbahasa Mandarin. Hari ini berlatih menulis di kelas.', 'Ms. Lin says that for the university interview next spring, you need a short autobiography in Chinese. Today you practice writing one.', 'ครูหลินบอกว่า สำหรับการสัมภาษณ์มหาวิทยาลัยในภาคเรียนที่สองของปีสาม ต้องเตรียมอัตชีวประวัติภาษาจีน วันนี้ฝึกเขียนในห้อง', 'ဆရာမလင်က တတိယနှစ် ဒုတိယစာသင်နှစ်ဝက်က တက္ကသိုလ် အင်တာဗျူးအတွက် တရုတ်လို ကိုယ်ရေးအကျဉ်း ပြင်ထားရမယ်တဲ့။ ဒီနေ့ အတန်းထဲမှာ ရေးလေ့ကျင့်တယ်။'),
  v02b: T('林老師看了你的自傳：「寫得很清楚，有背景、有經驗、也有理想。面試以前再多念幾次。」', 'Cô Lâm đọc bản tự giới thiệu của bạn: “Viết rất rõ ràng, có hoàn cảnh, có kinh nghiệm, có cả ước mơ. Trước khi phỏng vấn hãy đọc thêm vài lần.”', 'Bu Lin membaca otobiografimu: “Tulisannya jelas, ada latar belakang, pengalaman, dan cita-cita. Sebelum wawancara, baca beberapa kali lagi.”', 'Ms. Lin reads it: “Very clear — background, experience and goals. Read it aloud a few more times before the interview.”', 'ครูหลินอ่านอัตชีวประวัติของคุณ: “เขียนชัดเจนดี มีภูมิหลัง มีประสบการณ์ และมีความฝัน ก่อนสัมภาษณ์อ่านออกเสียงอีกหลายๆ รอบนะ”', 'ဆရာမလင်က ဖတ်ပြီး “ရှင်းရှင်းလင်းလင်း ရေးထားတယ်၊ နောက်ခံ၊ အတွေ့အကြုံ၊ ရည်မှန်းချက် ပါတယ်။ အင်တာဗျူး မတိုင်ခင် နောက်ထပ် အကြိမ်ကြိမ် အသံထွက်ဖတ်ပါ” တဲ့။'),
  v03a: T('十月底，林老師在班上說：十一月有一場華語文能力測驗，學校會幫大家團體報名。', 'Cuối tháng Mười, cô Lâm nói trong lớp: tháng Mười Một có một kỳ thi TOCFL, trường sẽ đăng ký theo nhóm cho mọi người.', 'Akhir Oktober, Bu Lin mengumumkan: bulan November ada ujian TOCFL, sekolah akan mendaftarkan semua secara kelompok.', 'End of October. Ms. Lin announces there’s a TOCFL test in November, and the school will register everyone as a group.', 'ปลายเดือนตุลาคม ครูหลินประกาศว่า เดือนพฤศจิกายนมีสอบ TOCFL โรงเรียนจะสมัครแบบกลุ่มให้', 'အောက်တိုဘာလကုန်မှာ ဆရာမလင်က နိုဝင်ဘာမှာ TOCFL ရှိတယ်၊ ကျောင်းက အုပ်စုလိုက် လျှောက်ပေးမယ်လို့ ပြောတယ်။'),
  v03p: T('你已經通過 B1 了。林老師請你這個月每個星期三放學後，陪還沒通過的同學練習聽力。', 'Bạn đã đậu B1 rồi. Cô Lâm nhờ bạn tháng này, mỗi thứ Tư sau giờ học, luyện nghe cùng các bạn chưa đậu.', 'Kamu sudah lulus B1. Bu Lin memintamu bulan ini setiap Rabu sepulang sekolah menemani teman yang belum lulus berlatih menyimak.', 'You’ve already passed B1. Ms. Lin asks you to help classmates who haven’t passed practice listening every Wednesday after school this month.', 'คุณสอบผ่าน B1 แล้ว ครูหลินขอให้เดือนนี้ทุกวันพุธหลังเลิกเรียน คุณช่วยเพื่อนที่ยังไม่ผ่านฝึกการฟัง', 'B1 အောင်ပြီးသားမို့ ဒီလ ဗုဒ္ဓဟူးနေ့တိုင်း ကျောင်းဆင်းရင် မအောင်သေးတဲ့ သူငယ်ချင်းတွေနဲ့ နားထောင်တာ လေ့ကျင့်ပေးဖို့ ဆရာမလင်က ပြောတယ်။'),
  v03f: T('你還沒通過 B1。三年級下學期結束以前一定要通過，否則會影響升學。這次要重新報名。', 'Bạn chưa đậu B1. Trước khi kết thúc học kỳ 2 năm lớp 12 nhất định phải đậu, nếu không sẽ ảnh hưởng đến việc học lên. Lần này phải đăng ký lại.', 'Kamu belum lulus B1. Sebelum semester kedua kelas 12 berakhir harus lulus, kalau tidak akan memengaruhi kelanjutan studi. Kali ini harus mendaftar ulang.', 'You haven’t passed B1 yet. You must pass before the end of Year 3’s second semester, or it will affect your university entry. You need to register again.', 'คุณยังไม่ผ่าน B1 ต้องผ่านก่อนจบภาคเรียนที่สองของปีสาม ไม่อย่างนั้นจะกระทบการเรียนต่อ ครั้งนี้ต้องสมัครใหม่', 'B1 မအောင်သေးဘူး။ တတိယနှစ် ဒုတိယစာသင်နှစ်ဝက် မပြီးခင် မဖြစ်မနေ အောင်ရမယ်၊ မဟုတ်ရင် ဆက်တက်ဖို့ ထိခိုက်မယ်။ ဒီတစ်ခါ ပြန်လျှောက်ရမယ်။'),
  v04a: T('十一月，陳導師幫三年級辦模擬面試。他假裝是大學的老師，一個一個叫進會議室。', 'Tháng Mười Một, thầy Trần tổ chức phỏng vấn thử cho lớp 12. Thầy giả làm giáo viên đại học, gọi từng người vào phòng họp.', 'Bulan November, Pak Chen mengadakan wawancara simulasi untuk kelas 12. Ia berpura-pura menjadi dosen universitas dan memanggil satu per satu ke ruang rapat.', 'November. Mr. Chen holds mock interviews for Year 3. He plays a university professor and calls students into the meeting room one by one.', 'เดือนพฤศจิกายน อาจารย์เฉินจัดสัมภาษณ์จำลองให้นักเรียนปีสาม อาจารย์แกล้งเป็นอาจารย์มหาวิทยาลัย เรียกเข้าห้องประชุมทีละคน', 'နိုဝင်ဘာလမှာ ဆရာချန်က တတိယနှစ်အတွက် အင်တာဗျူး အစမ်း လုပ်ပေးတယ်။ တက္ကသိုလ်ဆရာ ဟန်ဆောင်ပြီး အစည်းအဝေးခန်းထဲ တစ်ယောက်ချင်း ခေါ်တယ်။'),
  v04b: T('陳導師說：「面試主要是了解你的中文程度。回答要完整，不要只說一個字。」資訊科的同學，三下 3 月說明會以前還要填志願表。', 'Thầy Trần nói: “Phỏng vấn chủ yếu để biết trình độ tiếng Hoa của em. Trả lời phải đầy đủ, đừng chỉ nói một chữ.” Học sinh ngành Tin học còn phải điền phiếu nguyện vọng trước buổi giới thiệu tháng Ba.', 'Pak Chen bilang: “Wawancara terutama untuk mengetahui tingkat bahasa Mandarinmu. Jawablah dengan lengkap, jangan hanya satu kata.” Siswa jurusan Informatika juga harus mengisi formulir pilihan sebelum sesi informasi bulan Maret.', 'Mr. Chen says: “The interview mainly checks your Chinese level. Answer in full sentences, not one word.” IT students must also fill in the preference form before the March information session.', 'อาจารย์เฉินบอกว่า: “การสัมภาษณ์ส่วนใหญ่ดูระดับภาษาจีน ตอบให้ครบ อย่าตอบคำเดียว” นักเรียนแผนกสารสนเทศต้องกรอกใบเลือกอันดับก่อนงานแนะแนวเดือนมีนาคมด้วย', 'ဆရာချန်က “အင်တာဗျူးက အဓိကအားဖြင့် တရုတ်စာ အဆင့်ကို ကြည့်တာ။ စကားလုံးတစ်လုံးတည်း မဖြေနဲ့၊ ပြည့်ပြည့်စုံစုံ ဖြေ” တဲ့။ အိုင်တီဌာနက မတ်လ ရှင်းလင်းပွဲ မတိုင်ခင် ဆန္ဒလွှာလည်း ဖြည့်ရမယ်။'),
  v05a: T('十一月中，華語文能力測驗的日子。這次你是重新報名的，你早上六點就醒了。', 'Giữa tháng Mười Một, ngày thi TOCFL. Lần này bạn đăng ký lại, sáu giờ sáng bạn đã tỉnh dậy.', 'Pertengahan November, hari ujian TOCFL. Kali ini kamu mendaftar ulang; jam enam pagi kamu sudah bangun.', 'Mid-November: TOCFL day. You registered again this time, and you’re awake by six a.m.', 'กลางเดือนพฤศจิกายน วันสอบ TOCFL ครั้งนี้คุณสมัครใหม่ ตื่นตั้งแต่หกโมงเช้า', 'နိုဝင်ဘာလလယ်၊ TOCFL ဖြေရမယ့်နေ့။ ဒီတစ်ခါ ပြန်လျှောက်ထားတာ၊ မနက် ခြောက်နာရီကတည်းက နိုးနေပြီ။'),
  v05p: T('一個月後，成績出來了：你通過了進階級（B1）！林老師比你還開心。', 'Một tháng sau có kết quả: bạn đã đậu cấp Tiến bộ (B1)! Cô Lâm còn vui hơn cả bạn.', 'Sebulan kemudian hasilnya keluar: kamu lulus tingkat Menengah (B1)! Bu Lin bahkan lebih senang darimu.', 'A month later: you passed Level 3 (B1)! Ms. Lin is even happier than you.', 'หนึ่งเดือนต่อมาผลออก: คุณผ่านระดับ B1! ครูหลินดีใจกว่าคุณอีก', 'တစ်လအကြာ ရလဒ်ထွက်တယ်၊ B1 အောင်ပြီ! ဆရာမလင်က ကိုယ့်ထက်တောင် ပိုပျော်နေတယ်။'),
  v05f: T('這次還差一點。林老師說：「下一次在三月，還有五月，還來得及。我們每天練十五分鐘。」', 'Lần này vẫn thiếu một chút. Cô Lâm nói: “Kỳ sau vào tháng Ba, còn tháng Năm nữa, vẫn còn kịp. Mỗi ngày mình luyện mười lăm phút.”', 'Kali ini masih kurang sedikit. Bu Lin bilang: “Ujian berikutnya bulan Maret, lalu Mei, masih sempat. Kita latihan lima belas menit setiap hari.”', 'Still a little short. Ms. Lin says: “The next ones are in March and May — there’s still time. Let’s practice fifteen minutes a day.”', 'ครั้งนี้ยังขาดอีกนิด ครูหลินบอกว่า: “ครั้งหน้าเดือนมีนาคม แล้วก็พฤษภาคม ยังทัน เราฝึกวันละสิบห้านาที”', 'ဒီတစ်ခါလည်း နည်းနည်းလိုသေးတယ်။ ဆရာမလင်က “နောက်တစ်ကြိမ်က မတ်လ၊ မေလမှာလည်း ရှိသေးတယ်၊ မီပါသေးတယ်။ နေ့တိုင်း ဆယ့်ငါးမိနစ် လေ့ကျင့်ကြမယ်” တဲ့။'),
  v05h: T('你已經通過 B1 了。考試那天早上，你在考場門口幫學弟妹加油，還提醒他們帶准考證。', 'Bạn đã đậu B1 rồi. Sáng hôm thi, bạn đứng ở cổng điểm thi cổ vũ các em và nhắc các em mang thẻ dự thi.', 'Kamu sudah lulus B1. Pagi hari ujian, kamu menyemangati adik-adik di depan tempat ujian dan mengingatkan mereka membawa kartu ujian.', 'You’ve already passed B1. On test morning, you cheer on the younger students at the gate and remind them to bring their admission tickets.', 'คุณผ่าน B1 แล้ว เช้าวันสอบ คุณไปให้กำลังใจน้องๆ หน้าสนามสอบ และเตือนให้พกบัตรเข้าสอบ', 'B1 အောင်ပြီးသားမို့ စာမေးပွဲနေ့ မနက် စာမေးပွဲဌာန တံခါးဝမှာ ညီငယ်တွေကို အားပေးပြီး ဝင်ခွင့်ကတ် ယူလာဖို့ သတိပေးတယ်။'),
  v06w: T('十一月最後一週。下個月輪調，你要把小組長的工作交接給下一組。', 'Tuần cuối tháng Mười Một. Tháng sau luân phiên, bạn phải bàn giao công việc tổ trưởng cho nhóm sau.', 'Minggu terakhir November. Bulan depan rotasi, kamu harus menyerahkan tugas ketua kelompok ke kelompok berikutnya.', 'Last week of November. Next month the groups rotate, so you must hand over your team-leader duties to the next group.', 'สัปดาห์สุดท้ายของเดือนพฤศจิกายน เดือนหน้าสลับกลุ่ม คุณต้องส่งมอบงานหัวหน้ากลุ่มให้กลุ่มถัดไป', 'နိုဝင်ဘာလ နောက်ဆုံးပတ်။ နောက်လ အလှည့်ပြောင်းမှာမို့ အဖွဲ့ခေါင်းဆောင် တာဝန်ကို နောက်အဖွဲ့ကို လွှဲပြောင်းရမယ်။'),
  v06s: T('十一月最後一週。下個月你要去實習，還要當小組長。上一組的學長給你一張交接單。', 'Tuần cuối tháng Mười Một. Tháng sau bạn đi thực tập và làm tổ trưởng. Anh khóa trên của nhóm trước đưa bạn một phiếu bàn giao.', 'Minggu terakhir November. Bulan depan kamu magang dan menjadi ketua kelompok. Kakak dari kelompok sebelumnya memberimu lembar serah terima.', 'Last week of November. Next month you start your internship as team leader. A senior from the previous group gives you a handover sheet.', 'สัปดาห์สุดท้ายของเดือนพฤศจิกายน เดือนหน้าคุณจะไปฝึกงานและเป็นหัวหน้ากลุ่ม รุ่นพี่กลุ่มก่อนให้ใบส่งมอบงานกับคุณ', 'နိုဝင်ဘာလ နောက်ဆုံးပတ်။ နောက်လ အလုပ်သင်သွားပြီး အဖွဲ့ခေါင်းဆောင် လုပ်ရမယ်။ အရင်အဖွဲ့က အစ်ကိုက လွှဲပြောင်းစာရွက် ပေးတယ်။'),
  v07a: T('十月底，媽媽傳 LINE：弟弟下個月要繳學費。你想把打工存的錢寄一些回家。', 'Cuối tháng Mười, mẹ nhắn LINE: tháng sau em trai phải đóng học phí. Bạn muốn gửi một ít tiền làm thêm đã dành dụm về nhà.', 'Akhir Oktober, ibu mengirim LINE: bulan depan adik harus membayar uang sekolah. Kamu ingin mengirim sebagian tabungan dari kerja paruh waktu ke rumah.', 'End of October. Mom messages you on LINE: your little brother’s school fees are due next month. You want to send home some of the money you saved from your part-time job.', 'ปลายเดือนตุลาคม แม่ส่ง LINE มาว่า เดือนหน้าน้องชายต้องจ่ายค่าเทอม คุณอยากส่งเงินที่เก็บจากงานพาร์ตไทม์กลับบ้านบ้าง', 'အောက်တိုဘာလကုန်မှာ အမေက LINE ပို့တယ်၊ နောက်လ မောင်လေး ကျောင်းလခ ပေးရမယ်တဲ့။ အချိန်ပိုင်းအလုပ်က စုထားတဲ့ ပိုက်ဆံ တချို့ အိမ်ကို ပို့ချင်တယ်။'),
  v07b: T('寄錢回家只能用合法的管道：郵局、銀行，或是合法登記的匯款公司。存摺和提款卡不能借給別人，不然可能變成詐騙集團的人頭帳戶。', 'Gửi tiền về nhà chỉ được dùng kênh hợp pháp: bưu điện, ngân hàng, hoặc công ty chuyển tiền đăng ký hợp pháp. Không được cho người khác mượn sổ tiết kiệm và thẻ rút tiền, nếu không có thể trở thành tài khoản đứng tên giùm cho băng lừa đảo.', 'Mengirim uang ke rumah hanya boleh lewat jalur resmi: kantor pos, bank, atau perusahaan pengiriman uang yang terdaftar. Buku tabungan dan kartu ATM tidak boleh dipinjamkan, kalau tidak bisa dipakai sindikat penipuan sebagai rekening boneka.', 'Only use legal channels to send money home: the post office, a bank, or a licensed remittance company. Never lend your passbook or ATM card to anyone — it could end up used as a mule account by scammers.', 'การส่งเงินกลับบ้านต้องใช้ช่องทางที่ถูกกฎหมายเท่านั้น: ไปรษณีย์ ธนาคาร หรือบริษัทโอนเงินที่จดทะเบียนถูกต้อง ห้ามให้ใครยืมสมุดบัญชีและบัตรเอทีเอ็ม ไม่อย่างนั้นอาจกลายเป็นบัญชีม้าของแก๊งหลอกลวง', 'အိမ်ကို ပိုက်ဆံပို့ရင် တရားဝင်လမ်းကြောင်းကိုပဲ သုံးရမယ်၊ စာတိုက်၊ ဘဏ်၊ ဒါမှမဟုတ် တရားဝင် မှတ်ပုံတင်ထားတဲ့ ငွေလွှဲကုမ္ပဏီ။ ငွေစုစာအုပ်နဲ့ ATM ကတ်ကို ဘယ်သူ့ကိုမှ မချေးရဘူး၊ မဟုတ်ရင် လိမ်လည်ဂိုဏ်းရဲ့ အကောင့်အဖြစ် အသုံးချခံရနိုင်တယ်။'),
  v08a: T('十二月二十二日，冬至。晚上，宿舍阿姨煮了一大鍋湯圓。', 'Ngày 22 tháng Mười Hai, Đông chí. Buổi tối, cô quản lý ký túc xá nấu một nồi chè trôi nước thật to.', 'Tanggal 22 Desember, hari Dongzhi. Malamnya, ibu asrama memasak sepanci besar tangyuan.', 'December 22nd, the Winter Solstice. In the evening, the dorm auntie cooks a big pot of tangyuan.', 'วันที่ 22 ธันวาคม วันตงจื้อ ตอนเย็นป้าหอพักต้มบัวลอยหม้อใหญ่', 'ဒီဇင်ဘာ ၂၂ ရက်၊ ဆောင်းရာသီ အလယ်နေ့။ ညမှာ အဆောင်အန်တီက ကောက်ညှင်းလုံး အိုးကြီးတစ်အိုး ပြုတ်တယ်။'),
  v09a: T('十二月底，三年級上學期快結束了。陳導師找你聊聊：讀完科大以後的路，你現在怎麼想？', 'Cuối tháng Mười Hai, học kỳ 1 năm lớp 12 sắp kết thúc. Thầy Trần gọi bạn nói chuyện: con đường sau khi học xong đại học, bây giờ em nghĩ sao?', 'Akhir Desember, semester pertama kelas 12 hampir selesai. Pak Chen mengajakmu bicara: setelah lulus universitas, sekarang kamu ingin ke mana?', 'Late December. The first semester of Year 3 is almost over. Mr. Chen asks to chat: after university, what are you thinking now?', 'ปลายเดือนธันวาคม ภาคเรียนแรกของปีสามใกล้จบแล้ว อาจารย์เฉินเรียกไปคุย: หลังเรียนจบมหาวิทยาลัย ตอนนี้คุณคิดอย่างไร', 'ဒီဇင်ဘာလကုန်၊ တတိယနှစ် ပထမစာသင်နှစ်ဝက် ပြီးခါနီးပြီ။ ဆရာချန်က စကားပြောဖို့ ခေါ်တယ်၊ တက္ကသိုလ်ပြီးရင် ဘယ်လမ်းကို အခု ဘယ်လိုတွေးလဲတဲ့။'),
  v09b: T('不管選哪一條路，陳導師都說：先把華語和專業學好，機會來的時候才把握得住。', 'Dù chọn con đường nào, thầy Trần cũng nói: hãy học tốt tiếng Hoa và chuyên ngành trước, khi cơ hội đến mới nắm bắt được.', 'Jalan mana pun yang dipilih, Pak Chen berkata: kuasai dulu bahasa Mandarin dan keahlianmu, supaya saat kesempatan datang kamu bisa meraihnya.', 'Whichever path you choose, Mr. Chen says: master your Chinese and your trade first, so you can seize the chance when it comes.', 'ไม่ว่าจะเลือกทางไหน อาจารย์เฉินบอกว่า: เรียนภาษาจีนกับวิชาชีพให้ดีก่อน เมื่อโอกาสมาจะได้คว้าไว้ได้', 'ဘယ်လမ်းရွေးရွေး ဆရာချန်က တရုတ်စာနဲ့ ကျွမ်းကျင်မှုကို အရင် ကောင်းကောင်းသင်ထား၊ အခွင့်အရေးလာရင် ဆုပ်ကိုင်နိုင်မယ်တဲ့။'),
  r21a: T('專題實作要趕進度，同學說：「安全檢查好麻煩，今天先跳過，比較快。」', 'Đồ án phải chạy tiến độ, bạn cùng lớp nói: “Kiểm tra an toàn phiền quá, hôm nay bỏ qua cho nhanh.”', 'Proyek harus dikejar, teman berkata: “Cek keselamatan merepotkan, hari ini dilewati saja biar cepat.”', 'Your project is behind schedule. A classmate says, “The safety check is such a hassle — let’s skip it today to save time.”', 'โปรเจกต์ต้องเร่งงาน เพื่อนพูดว่า: “ตรวจความปลอดภัยยุ่งยากจัง วันนี้ข้ามไปก่อน จะได้เร็ว”', 'ပရောဂျက်ကို အမြန်လုပ်ရမယ်၊ သူငယ်ချင်းက “ဘေးကင်းရေး စစ်တာ အလုပ်ရှုပ်တယ်၊ ဒီနေ့ ကျော်လိုက်ရအောင်၊ မြန်တယ်” တဲ့။'),
  r21b: T('機器忽然卡住，同學的手套被捲了進去。還好他馬上把手抽出來，只有擦傷，可是作品也壞了。', 'Máy đột nhiên bị kẹt, găng tay của bạn bị cuốn vào. May mà bạn rút tay ra kịp, chỉ bị trầy, nhưng sản phẩm cũng hỏng.', 'Mesin tiba-tiba macet, sarung tangan temanmu tertarik masuk. Untung ia segera menarik tangannya, hanya lecet, tapi hasil kerjanya rusak.', 'The machine suddenly jams and pulls in your classmate’s glove. Luckily he yanks his hand out with only a scrape — but the project piece is ruined.', 'เครื่องติดขึ้นมากะทันหัน ถุงมือของเพื่อนถูกดูดเข้าไป โชคดีที่ดึงมือออกทัน มีแค่แผลถลอก แต่ชิ้นงานก็พัง', 'စက်က ရုတ်တရက် ပိတ်သွားပြီး သူငယ်ချင်းရဲ့ လက်အိတ် ဆွဲဝင်သွားတယ်။ ကံကောင်းလို့ လက်ကို ချက်ချင်း ဆွဲထုတ်နိုင်တယ်၊ ပွန်းရုံပဲ၊ ဒါပေမဲ့ ပစ္စည်းက ပျက်သွားတယ်။'),
  r21c: T('又要趕進度了。這次是學弟說想跳過安全檢查。', 'Lại phải chạy tiến độ. Lần này là em khóa dưới muốn bỏ qua kiểm tra an toàn.', 'Harus mengejar target lagi. Kali ini adik kelas yang ingin melewati cek keselamatan.', 'Another rush. This time a younger student wants to skip the safety check.', 'ต้องเร่งงานอีกแล้ว ครั้งนี้รุ่นน้องอยากข้ามการตรวจความปลอดภัย', 'နောက်တစ်ခါ အမြန်လုပ်ရပြန်ပြီ။ ဒီတစ်ခါ ညီငယ်က ဘေးကင်းရေးစစ်တာကို ကျော်ချင်တယ်။'),
  r22a: T('學妹看到你跟同學一邊看她一邊笑，以為你們在說她壞話，一整天都不理你。', 'Em khóa dưới thấy bạn vừa nhìn em vừa cười với bạn cùng lớp, tưởng các bạn nói xấu em nên cả ngày không thèm nói chuyện.', 'Adik kelas melihatmu tertawa sambil melihat ke arahnya, mengira kalian membicarakan keburukannya, jadi seharian ia tidak mau bicara denganmu.', 'A younger student saw you laughing with a classmate while looking her way. She thinks you were talking about her and ignores you all day.', 'รุ่นน้องเห็นคุณหัวเราะกับเพื่อนพลางมองมาทางเธอ คิดว่าพวกคุณนินทาเธอ เลยไม่คุยด้วยทั้งวัน', 'ညီမငယ်က ကိုယ်နဲ့ သူငယ်ချင်း သူ့ကိုကြည့်ပြီး ရယ်နေတာ မြင်လို့ သူ့အကြောင်း မကောင်းပြောနေတယ် ထင်ပြီး တစ်နေကုန် စကားမပြောဘူး။'),
  r23a: T('天氣忽然變冷，你感冒了。這次你帶著健保卡去診所。', 'Trời đột ngột trở lạnh, bạn bị cảm. Lần này bạn mang thẻ bảo hiểm y tế đến phòng khám.', 'Cuaca tiba-tiba dingin dan kamu masuk angin. Kali ini kamu membawa kartu asuransi kesehatan ke klinik.', 'The weather turns cold suddenly and you catch a cold. This time you bring your NHI card to the clinic.', 'อากาศหนาวลงกะทันหัน คุณเป็นหวัด ครั้งนี้คุณพกบัตรประกันสุขภาพไปคลินิก', 'ရာသီဥတု ရုတ်တရက် အေးလာလို့ အအေးမိတယ်။ ဒီတစ်ခါ ကျန်းမာရေးအာမခံကတ် ယူပြီး ဆေးခန်းသွားတယ်။'),
  r23b: T('只付了掛號費和部分負擔，比一年級的時候便宜多了。', 'Chỉ trả phí đăng ký và phần tự chi trả, rẻ hơn nhiều so với hồi lớp 10.', 'Hanya membayar biaya pendaftaran dan bagian sendiri, jauh lebih murah daripada waktu kelas 10.', 'You pay just the registration fee and the co-payment — much cheaper than in Year 1.', 'จ่ายแค่ค่าลงทะเบียนและส่วนร่วมจ่าย ถูกกว่าตอนปีหนึ่งมาก', 'မှတ်ပုံတင်ကြေးနဲ့ အနည်းငယ်ပဲ ပေးရတယ်၊ ပထမနှစ်တုန်းကထက် အများကြီး သက်သာတယ်။'),
  r24a: T('晚上十一點多，隔壁房間還在大聲放音樂。你明天一早要上班。', 'Hơn mười một giờ đêm, phòng bên cạnh vẫn mở nhạc rất to. Sáng mai bạn phải đi làm sớm.', 'Lewat jam sebelas malam, kamar sebelah masih memutar musik keras. Besok pagi-pagi kamu harus bekerja.', 'It’s past 11 p.m. and the room next door is still blasting music. You have to work early tomorrow.', 'ห้าทุ่มกว่าแล้ว ห้องข้างๆ ยังเปิดเพลงเสียงดัง พรุ่งนี้เช้าคุณต้องไปทำงานแต่เช้า', 'ည ၁၁ နာရီကျော်ပြီ၊ ဘေးအခန်းက သီချင်း ကျယ်ကျယ် ဖွင့်နေတုန်း။ မနက်ဖြန် စောစော အလုပ်သွားရမယ်။'),
  v10a: T('十一月初，三年級要拍畢業照。這一天全班都回學校，實習的同學也請公假回來。', 'Đầu tháng Mười Một, lớp 12 chụp ảnh tốt nghiệp. Hôm nay cả lớp về trường, các bạn đang thực tập cũng xin nghỉ công vụ để về.', 'Awal November, kelas 12 berfoto kelulusan. Hari ini seluruh kelas kembali ke sekolah, yang sedang magang juga mendapat izin resmi untuk datang.', 'Early November: Year 3 graduation photos. The whole class is back at school today — those on internship got official leave to come.', 'ต้นเดือนพฤศจิกายน ปีสามถ่ายรูปรับปริญญา วันนี้ทั้งห้องกลับมาโรงเรียน เพื่อนที่ฝึกงานอยู่ก็ลาราชการกลับมา', 'နိုဝင်ဘာလအစ၊ တတိယနှစ် ဘွဲ့ဓာတ်ပုံ ရိုက်တယ်။ ဒီနေ့ တစ်တန်းလုံး ကျောင်းပြန်လာကြပြီး အလုပ်သင်နေသူတွေလည်း ခွင့်ယူပြီး ပြန်လာကြတယ်။'),
  v10b: T('拍完了。美編幹部說：照片要先排版、寫留言，三年級下學期才會做成畢業紀念冊。', 'Chụp xong rồi. Cán bộ thiết kế nói: ảnh phải dàn trang, viết lời nhắn trước, đến học kỳ 2 lớp 12 mới làm thành kỷ yếu.', 'Selesai berfoto. Pengurus desain bilang: foto harus ditata dan diberi pesan dulu, buku tahunan baru jadi di semester kedua kelas 12.', 'Done. The design officer says the photos still need layout and messages — the yearbook won’t be ready until next semester.', 'ถ่ายเสร็จแล้ว ฝ่ายออกแบบบอกว่า ต้องจัดหน้าและเขียนข้อความก่อน หนังสือรุ่นจะเสร็จในภาคเรียนที่สองของปีสาม', 'ရိုက်ပြီးပြီ။ ဒီဇိုင်းတာဝန်ခံက ဓာတ်ပုံတွေကို စာမျက်နှာစီ၊ မှတ်စုရေးရဦးမယ်၊ တတိယနှစ် ဒုတိယစာသင်နှစ်ဝက်ကျမှ ဘွဲ့မှတ်တမ်းစာအုပ် ဖြစ်မယ်တဲ့။'),
};
const say = (who, zh, extra = {}) => ({ say: who, zh, ...extra });
const n = (k) => ({ n: N[k] });
const LIFE = '生活中文';
const Q_DO = T('你要怎麼做？', 'Bạn sẽ làm gì?', 'Apa yang akan kamu lakukan?', 'What will you do?', 'คุณจะทำอย่างไร', 'ဘာလုပ်မလဲ။');

function inspection() {
  return [
    { scene: 'dorm', npc: 'ayi' },
    { n: S3.N.i01a },
    { n: S3.N.i01b },
    { ifTidy: 80, then: [say('ayi', '很乾淨，很好！'), { fx: { tidy: 5, aff: { ayi: 1 } } }],
      else: [say('ayi', '東西要放回去喔。垃圾也要記得倒。'), { fx: { tidy: -10 } }] },
  ];
}

// 實習組：向主管報告問題；在校組：寫中文自傳。10 月、12 月各出現一次，輪調後兩組都會玩到。
const REPORT_OR_RESUME = [
  { ifStatus: 'work', then: [
    { scene: 'work', npc: 'zhang' },
    n('v01a'),
    { q: { p: Q_DO, src: LIFE, opts: [
      { zh: '先按停止鍵，再去找張師傅報告。', ok: 1 },
      { zh: '應該沒關係，做完今天再說。', r: [say('zhang', '有問題要當場處理，不能等！')] },
      { zh: '自己打開機器修修看。', r: [say('zhang', '不行！你沒有受過訓練，很危險。')] },
      { zh: '傳 LINE 跟同學說就好。' },
    ], wrong: [say('zhang', '想一想，最安全的做法是什麼？')] } },
    say('me', '張師傅，三號機器的聲音不對，我已經先停機了。'),
    say('zhang', '什麼時候發現的？你做了什麼處理？', { listen: 1 }),
    { q: { p: P.reply, src: LIFE, opts: [
      { zh: '早上九點巡線的時候發現的，我先按了停止鍵，也跟大家說不要靠近。', ok: 1 },
      { zh: '我不知道，好像很久了。', r: [say('zhang', '報告要說清楚時間。')] },
      { zh: '不是我弄壞的！' },
      { zh: '聲音很大，很好聽。' },
    ], wrong: [say('zhang', '說清楚一點：什麼時候？你做了什麼？')] } },
    n('v01b'),
    { poster: [['日期', '十月十二日'], ['機器', '三號機'], ['狀態', '聲音異常，已停機'], ['處理', '已當面報告張師傅'], ['紀錄人', '{name}']], title: '機器異常紀錄' },
    { q: { p: T('紀錄上，機器現在是什麼狀態？', 'Theo sổ ghi, máy bây giờ đang ở trạng thái nào?', 'Menurut catatan, bagaimana status mesin sekarang?', 'According to the log, what is the machine’s status?', 'ตามบันทึก ตอนนี้เครื่องอยู่ในสถานะอะไร', 'မှတ်တမ်းအရ စက်က အခု ဘယ်လိုအခြေအနေလဲ။'), src: LIFE, opts: [
      { zh: '聲音異常，已經停機', ok: 1 }, { zh: '正常，可以用' }, { zh: '已經修好了' }, { zh: '被搬走了' },
    ], wrong: [say('zhang', '看「狀態」那一行。')], ok: [say('zhang', '做得好，這就是小組長的責任。'), { fx: { skill: 5, aff: { zhang: 1 } } }] } },
  ], else: [
    { scene: 'classroom', npc: 'lin' },
    n('v02a'),
    { poster: [['第一段', '背景：我是誰、從哪裡來'], ['第二段', '經驗：三年學到什麼'], ['第三段', '優點和缺點'], ['第四段', '理想：未來的計畫']], title: '中文自傳怎麼寫' },
    { q: { p: T('「三年在台灣學到什麼」要寫在哪一段？', '“Ba năm ở Đài Loan học được gì” viết ở đoạn nào?', '“Apa yang dipelajari selama tiga tahun di Taiwan” ditulis di paragraf mana?', 'Which paragraph is “what you learned in three years in Taiwan”?', '“สามปีที่ไต้หวันได้เรียนรู้อะไร” เขียนในย่อหน้าไหน', '“ထိုင်ဝမ်မှာ သုံးနှစ် ဘာသင်ခဲ့လဲ” ကို ဘယ်အပိုဒ်မှာ ရေးရမလဲ။'), src: LIFE, opts: [
      { zh: '第二段：經驗', ok: 1 }, { zh: '第一段：背景' }, { zh: '第三段：優點和缺點' }, { zh: '第四段：理想' },
    ], wrong: [say('lin', '再看一次表。')] } },
    say('lin', '寫缺點的時候，也要寫你怎麼改進。', { listen: 1 }),
    { q: { p: T('哪一句缺點寫得最好？', 'Câu nào viết về khuyết điểm tốt nhất?', 'Kalimat kekurangan mana yang paling baik?', 'Which sentence about a weakness is best?', 'ประโยคไหนเขียนข้อเสียได้ดีที่สุด', 'အားနည်းချက်ကို ဘယ်စာကြောင်းက အကောင်းဆုံး ရေးထားလဲ။'), src: LIFE, opts: [
      { zh: '我說話比較慢，所以每天練習用中文報告，現在進步很多。', ok: 1 },
      { zh: '我沒有缺點。', r: [say('lin', '每個人都有缺點喔，寫出來也沒關係。')] },
      { zh: '我很懶，什麼都不想做。' },
      { zh: '我的缺點是太帥了。', r: [say('lin', '……面試老師會笑出來喔。')] },
    ], wrong: [say('lin', '記得：缺點加上改進的方法。')] } },
    { q: { p: T('最後一段「理想」，你要怎麼寫？', 'Đoạn cuối “ước mơ”, bạn sẽ viết thế nào?', 'Paragraf terakhir “cita-cita”, bagaimana kamu menulisnya?', 'How will you write the last paragraph, “goals”?', 'ย่อหน้าสุดท้าย “ความฝัน” คุณจะเขียนอย่างไร', 'နောက်ဆုံးအပိုဒ် “ရည်မှန်းချက်” ကို ဘယ်လိုရေးမလဲ။'), src: LIFE, opts: [
      { zh: '我希望在科大把{dept}的技術學得更好，將來對家鄉和台灣都有幫助。', ok: 1 },
      { zh: '我想每天睡到中午。' },
      { zh: '我還沒想過，隨便。' },
      { zh: '我想當老闆，賺很多錢，不用上課。' },
    ], wrong: [say('lin', '理想要跟你讀的科系有關係。')] } },
    n('v02b'),
    { card: 'resume' },
    { fx: { zh: 5, aff: { lin: 1 } } },
  ] },
];

const EVENTS = {
  I21: inspection(),
  I22: inspection(),
  I23: inspection(),
  V01: REPORT_OR_RESUME,
  V02: REPORT_OR_RESUME,

  // 10 月底：B1 還沒過的同學重新報名（11 月場，學校團體報名）；已通過的同學當小老師
  V03: [
    { scene: 'classroom', npc: 'lin' },
    n('v03a'),
    { ifv: 'tocflB1', then: [
      n('v03p'),
      say('lin', '你可以教他們先看題目，再聽對話。', { listen: 1 }),
      { q: { p: T('林老師建議怎麼準備聽力？', 'Cô Lâm khuyên chuẩn bị phần nghe thế nào?', 'Bagaimana saran Bu Lin untuk persiapan menyimak?', 'How does Ms. Lin suggest preparing for listening?', 'ครูหลินแนะนำให้เตรียมการฟังอย่างไร', 'နားထောင်ပိုင်းကို ဘယ်လိုပြင်ဆင်ဖို့ ဆရာမလင် အကြံပေးလဲ။'), src: LIFE, kind: 'listen', opts: [
        { zh: '先看題目，再聽對話', ok: 1 }, { zh: '先睡覺，再看題目' }, { zh: '只看圖片' }, { zh: '一邊聽音樂一邊寫' },
      ], wrong: [say('lin', '再聽一次。')] } },
      { title: 'tutor' },
      { fx: { pop: 3, aff: { lin: 1 } } },
    ], else: [
      n('v03f'),
      { poster: [['考試', '華語文能力測驗　進階級（B1）'], ['考試日期', '十一月十五日'], ['報名', '學校團體報名，報名費有優惠'], ['截止', '十月三十一日']], title: '重新報名' },
      { q: { p: T('什麼時候以前要報名？', 'Phải đăng ký trước ngày nào?', 'Harus mendaftar sebelum tanggal berapa?', 'What’s the registration deadline?', 'ต้องสมัครก่อนวันไหน', 'ဘယ်နေ့မတိုင်ခင် လျှောက်ရမလဲ။'), src: LIFE, opts: [
        { zh: '十月三十一日', ok: 1 }, { zh: '十一月十五日', r: [say('lin', '那是考試的日子喔。')] }, { zh: '一月' }, { zh: '不用報名' },
      ], wrong: [say('lin', '看「截止」那一行。')] } },
      say('lin', '每天至少練習十五分鐘，否則很容易忘記。', { listen: 1 }),
      { q: { p: T('林老師說每天要練習多久？', 'Cô Lâm nói mỗi ngày phải luyện bao lâu?', 'Bu Lin bilang harus latihan berapa lama setiap hari?', 'How long does Ms. Lin say to practice each day?', 'ครูหลินบอกว่าต้องฝึกวันละเท่าไร', 'နေ့တိုင်း ဘယ်လောက်ကြာကြာ လေ့ကျင့်ရမလဲ။'), src: LIFE, kind: 'listen', opts: [
        { zh: '至少十五分鐘', ok: 1 }, { zh: '五分鐘就好' }, { zh: '一個星期一次' }, { zh: '不用練習' },
      ], wrong: [say('lin', '再聽一次。')], ok: [say('lin', '加油，這次一定可以！')] } },
      { fx: { zh: 3 } },
    ] },
  ],

  // 11 月：模擬面試（面試主要了解中文程度）
  V04: [
    { scene: 'meeting', npc: 'chen' },
    n('v04a'),
    say('chen', '請先用中文簡單介紹你自己。', { listen: 1 }),
    { q: { p: P.reply, src: LIFE, opts: [
      { zh: '老師好，我叫{name}，從{home}來，現在是{dept}三年級，在台灣已經兩年多了。', ok: 1 },
      { zh: '{name}。', r: [say('chen', '只說名字太短了，要說完整的句子。')] },
      { zh: '我不知道要說什麼。' },
      { zh: '我很緊張，可以不要問嗎？' },
    ], wrong: [say('chen', '慢慢說，說完整一點。')] } },
    say('chen', '你為什麼選{dept}？', { listen: 1 }),
    { q: { p: P.reply, src: LIFE, opts: [
      { zh: '因為我對這方面有興趣，實習的時候也學到很多，所以想在科大繼續學。', ok: 1 },
      { zh: '因為朋友都讀這一科。' },
      { zh: '隨便選的。', r: [say('chen', '面試的時候不可以說「隨便」喔。')] },
      { zh: '因為比較輕鬆。' },
    ], wrong: [say('chen', '說說你的興趣和經驗。')] } },
    say('chen', '這三年，你最大的收穫是什麼？', { listen: 1 }),
    { q: { p: P.reply, src: LIFE, opts: [
      { zh: '我學會了用中文跟同事溝通，也學會遇到問題要當面報告、負責到底。', ok: 1 },
      { zh: '我學會了吃臭豆腐。', r: [say('chen', '哈哈，這也是收穫，但是面試要說跟學習有關的。')] },
      { zh: '沒有什麼收穫。' },
      { zh: '我賺了很多錢。' },
    ], wrong: [say('chen', '想想學習和實習的經驗。')], ok: [say('chen', '很好！回答很完整。')] } },
    n('v04b'),
    { ifDept: '資訊科', then: [
      say('chen', '你是資訊科的，記得三月說明會以前要填志願表，先想想兩所大學的順序。'),
    ], else: [
      say('chen', '你們科只銜接一所大學，不用填志願表。三月或五月，在學校的那一組參加面試，現在多練習說話就好。'),
    ] },
    { q: { p: T('面試主要看什麼？', 'Phỏng vấn chủ yếu xem gì?', 'Wawancara terutama menilai apa?', 'What does the interview mainly assess?', 'การสัมภาษณ์ดูอะไรเป็นหลัก', 'အင်တာဗျူးက အဓိက ဘာကြည့်လဲ။'), src: LIFE, opts: [
      { zh: '中文程度', ok: 1 }, { zh: '穿什麼衣服' }, { zh: '會不會唱歌' }, { zh: '家裡有幾個人' },
    ], wrong: [] } },
    { fx: { zh: 5, aff: { chen: 1 } } },
  ],

  // 11 月中：B1 考試（重新報名的同學）；已通過的同學在考場外加油
  V05: [
    { ifv: 'tocflB1', then: [{ scene: 'street', npc: 'newbie' }, n('v05h'), { fx: { pop: 2 } }], else: [
      { scene: 'classroom', npc: 'teacher' },
      n('v05a'),
      say('teacher', '女：「你週末有空嗎？要不要一起去爬山？」男：「本來想去，可是天氣預報說會下大雨，不如改天吧。」', { listen: 1 }),
      { q: { p: T('男生為什麼不去爬山？', 'Tại sao người nam không đi leo núi?', 'Mengapa laki-laki itu tidak mendaki gunung?', 'Why isn’t the man going hiking?', 'ทำไมผู้ชายไม่ไปปีนเขา', 'အမျိုးသားက ဘာကြောင့် တောင်မတက်တာလဲ။'), src: LIFE, kind: 'listen', opts: [
        { zh: '因為會下大雨', ok: 1 }, { zh: '因為沒有空' }, { zh: '因為不喜歡爬山' }, { zh: '因為生病了' },
      ], wrong: [] } },
      { poster: [['通知', '因為電梯保養，本週三上午九點到十二點暫停使用。'], ['', '造成不便，敬請見諒。']], title: '大樓公告' },
      { q: { p: T('電梯為什麼暫停使用？', 'Tại sao thang máy tạm ngừng?', 'Mengapa lift berhenti beroperasi?', 'Why is the elevator out of service?', 'ทำไมลิฟต์หยุดใช้ชั่วคราว', 'ဓာတ်လှေကား ဘာကြောင့် ခဏရပ်ထားလဲ။'), src: LIFE, opts: [
        { zh: '因為要保養', ok: 1 }, { zh: '因為壞掉了' }, { zh: '因為停電' }, { zh: '因為放假' },
      ], wrong: [] } },
      say('teacher', '男：「這份文件今天下班以前要交，來得及嗎？」女：「來得及，我先把重點整理好，下午三點給你。」', { listen: 1 }),
      { q: { p: T('女生什麼時候交文件？', 'Người nữ nộp tài liệu lúc nào?', 'Kapan perempuan itu menyerahkan dokumen?', 'When will the woman hand in the document?', 'ผู้หญิงจะส่งเอกสารเมื่อไร', 'အမျိုးသမီးက စာရွက်စာတမ်းကို ဘယ်တော့ အပ်မလဲ။'), src: LIFE, kind: 'listen', opts: [
        { zh: '下午三點', ok: 1 }, { zh: '下班以後' }, { zh: '明天早上' }, { zh: '中午十二點' },
      ], wrong: [] } },
      { poster: [['', '自從開始每天走路上班，我不但瘦了，而且睡得更好。'], ['', '因此，我建議大家多走路。']], title: '短文' },
      { q: { p: T('作者每天走路上班以後，有什麼改變？', 'Sau khi đi bộ đi làm mỗi ngày, tác giả thay đổi gì?', 'Setelah berjalan kaki ke kantor setiap hari, apa perubahan penulis?', 'What changed after the writer started walking to work?', 'หลังจากเดินไปทำงานทุกวัน ผู้เขียนเปลี่ยนไปอย่างไร', 'နေ့တိုင်း လမ်းလျှောက်ပြီး အလုပ်သွားပြီးနောက် စာရေးသူ ဘာပြောင်းလဲလဲ။'), src: LIFE, opts: [
        { zh: '瘦了，也睡得更好', ok: 1 }, { zh: '變胖了' }, { zh: '常常遲到' }, { zh: '不想上班' },
      ], wrong: [] } },
      { ifScore: 3, then: [{ setv: { tocflB1: 1 } }, n('v05p'), { card: 'tocflcert' }, { fx: { mood: 20 } }], else: [n('v05f'), { fx: { mood: -5 } }] },
      { fx: { zh: 5, hp: -10 } },
    ] },
  ],

  // 11 月底：輪調前的交接（實習組交出去，在校組接下來）
  V06: [
    { ifStatus: 'work', then: [
      { scene: 'work', npc: 'zhang' },
      n('v06w'),
      say('zhang', '交接單要寫清楚，下一組才不會出錯。', { listen: 1 }),
      { q: { p: T('交接單上最重要的是什麼？', 'Điều quan trọng nhất trên phiếu bàn giao là gì?', 'Apa yang paling penting di lembar serah terima?', 'What matters most on a handover sheet?', 'อะไรสำคัญที่สุดในใบส่งมอบงาน', 'လွှဲပြောင်းစာရွက်မှာ အရေးကြီးဆုံးက ဘာလဲ။'), src: LIFE, opts: [
        { zh: '工作重點、注意事項和聯絡人', ok: 1 }, { zh: '我喜歡吃的東西' }, { zh: '同事的生日' }, { zh: '明天的天氣' },
      ], wrong: [say('zhang', '想想下一組最需要知道什麼。')] } },
    ], else: [
      { scene: 'classroom', npc: 'xuezhang' },
      n('v06s'),
      { poster: [['工作重點', '每天早上八點巡線一次'], ['注意事項', '三號機十月修過，聲音不對要馬上停機'], ['聯絡人', '張師傅（分機 205）'], ['交接人', '學長']], title: '交接單' },
      { q: { p: T('三號機聲音不對，要怎麼做？', 'Máy số 3 kêu lạ thì phải làm gì?', 'Kalau mesin nomor 3 berbunyi aneh, harus bagaimana?', 'What should you do if machine No. 3 sounds wrong?', 'ถ้าเครื่องหมายเลข 3 เสียงผิดปกติต้องทำอย่างไร', 'စက်နံပါတ် ၃ အသံမမှန်ရင် ဘာလုပ်ရမလဲ။'), src: LIFE, opts: [
        { zh: '馬上停機', ok: 1 }, { zh: '繼續做' }, { zh: '自己修' }, { zh: '下班再說' },
      ], wrong: [say('xuezhang', '看「注意事項」那一行。')] } },
      { q: { p: T('有問題要聯絡誰？', 'Có vấn đề thì liên lạc với ai?', 'Kalau ada masalah, hubungi siapa?', 'Who do you contact if there’s a problem?', 'มีปัญหาต้องติดต่อใคร', 'ပြဿနာရှိရင် ဘယ်သူ့ကို ဆက်သွယ်ရမလဲ။'), src: LIFE, opts: [
        { zh: '張師傅，分機 205', ok: 1 }, { zh: '宿舍阿姨' }, { zh: '便利商店店員' }, { zh: '不用聯絡' },
      ], wrong: [say('xuezhang', '看「聯絡人」那一行。')], ok: [say('xuezhang', '交給你了，加油！')] } },
    ] },
    { fx: { skill: 3 } },
  ],

  // 10 月底：到郵局匯款回家（只能找合法管道、不要把存摺借人）
  V07: [
    { scene: 'phone', npc: 'mama' },
    n('v07a'),
    { scene: 'street', npc: 'tongxue' },
    say('tongxue', '我認識一個人，幫你匯錢比較便宜，你把存摺和提款卡借他就好。'),
    { q: { p: P.reply, src: LIFE, opts: [
      { zh: '不行，存摺和提款卡不能借別人。我去郵局匯就好。', ok: 1 },
      { zh: '好啊，便宜就好。', r: [n('v07b'), say('tongxue', '……好啦，你說得對，我也不要找他了。')] },
      { zh: '那我把密碼也給他。', r: [n('v07b')] },
      { zh: '我讓他用我的名字開帳戶。', r: [n('v07b')] },
    ], wrong: [say('tongxue', '真的不行嗎？')], ok: [say('tongxue', '你說得對，安全比較重要。')] } },
    { scene: 'post', npc: 'guo' },
    say('guo', '您好，國外匯款請先填這張單子，要寫收款人的名字和帳號，最後在這裡簽名。', { listen: 1 }),
    { q: { p: T('匯款單最後要做什麼？', 'Cuối phiếu chuyển tiền phải làm gì?', 'Apa yang harus dilakukan di akhir formulir pengiriman uang?', 'What do you do at the end of the remittance form?', 'ท้ายแบบฟอร์มโอนเงินต้องทำอะไร', 'ငွေလွှဲပုံစံ နောက်ဆုံးမှာ ဘာလုပ်ရမလဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '簽名', ok: 1 }, { zh: '畫畫' }, { zh: '寫地址' }, { zh: '貼照片' },
    ], wrong: [say('guo', '在這裡簽名。')] } },
    { ifMoney: 5300, then: [
    { poster: [['匯款金額', '5,000 元'], ['手續費', '300 元'], ['合計', '5,300 元'], ['注意', '收據請保存好']], title: '匯款收據' },
    { q: { p: T('這次一共要付多少錢？', 'Lần này tổng cộng phải trả bao nhiêu?', 'Total yang harus dibayar berapa?', 'How much do you pay in total?', 'ครั้งนี้ต้องจ่ายทั้งหมดเท่าไร', 'ဒီတစ်ခါ စုစုပေါင်း ဘယ်လောက်ပေးရမလဲ။'), src: LIFE, opts: [
      { zh: '五千三百元', ok: 1 }, { zh: '五千元' }, { zh: '三百元' }, { zh: '八千元' },
    ], wrong: [say('guo', '金額加上手續費。')], ok: [say('guo', '收據請收好，有問題可以拿來查。'), { fx: { money: -5300, mood: 10 } }, { card: 'remitslip' }] } },
    ], else: [
    say('me', '我的存款不多，這次先寄兩千塊。'),
    { poster: [['匯款金額', '2,000 元'], ['手續費', '300 元'], ['合計', '2,300 元'], ['注意', '收據請保存好']], title: '匯款收據' },
    { q: { p: T('這次一共要付多少錢？', 'Lần này tổng cộng phải trả bao nhiêu?', 'Total yang harus dibayar berapa?', 'How much do you pay in total?', 'ครั้งนี้ต้องจ่ายทั้งหมดเท่าไร', 'ဒီတစ်ခါ စုစုပေါင်း ဘယ်လောက်ပေးရမလဲ။'), src: LIFE, opts: [
      { zh: '兩千三百元', ok: 1 }, { zh: '兩千元' }, { zh: '三百元' }, { zh: '五千元' },
    ], wrong: [say('guo', '金額加上手續費。')], ok: [say('guo', '收據請收好，有問題可以拿來查。'), { fx: { money: -2300, mood: 10 } }, { card: 'remitslip' }] } },
    ] },
  ],

  // 12 月 22 日：冬至吃湯圓
  V08: [
    { scene: 'dorm', npc: 'ayi' },
    n('v08a'),
    say('ayi', '冬至要吃湯圓。台灣人說，吃了湯圓就長大一歲喔！', { listen: 1 }),
    { q: { p: T('阿姨說吃了湯圓會怎麼樣？', 'Cô nói ăn chè trôi nước xong sẽ thế nào?', 'Kata bibi, apa yang terjadi setelah makan tangyuan?', 'What does Auntie say happens after eating tangyuan?', 'ป้าบอกว่ากินบัวลอยแล้วจะเป็นอย่างไร', 'အန်တီက ကောက်ညှင်းလုံးစားရင် ဘာဖြစ်မယ်လို့ ပြောလဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '長大一歲', ok: 1 }, { zh: '變漂亮' }, { zh: '不會感冒' }, { zh: '考試會通過' },
    ], wrong: [say('ayi', '再聽一次。')] } },
    say('ayi', '有紅的、白的，有甜的，也有鹹的。你要哪一種？'),
    { q: { p: P.reply, src: LIFE, opts: [
      { zh: '我想吃甜的，紅的白的都要，謝謝阿姨！', ok: 1 },
      { zh: '我都不要。', r: [say('ayi', '冬至一定要吃一點啦！')] },
      { zh: '我要鹹的，多放一點肉。', ok: 1 },
      { zh: '湯圓是什麼？可以吃嗎？' },
    ], wrong: [say('ayi', '你要哪一種？')] } },
    say('ayi', '你們家鄉冬天會吃什麼特別的東西嗎？'),
    { q: { p: P.say, src: LIFE, opts: [
      { zh: '我們那裡沒有冬天，可是過年的時候也有特別的傳統食物。', ok: 1 },
      { zh: '我們每天都吃湯圓。' },
      { zh: '我不想說。' },
      { zh: '冬天是什麼？' },
    ], wrong: [say('ayi', '說說看嘛！')], ok: [say('ayi', '每個地方都有自己的特色，真有意思。')] } },
    { card: 'tangyuan' },
    { fx: { mood: 15, aff: { ayi: 2 } } },
  ],

  // 12 月底：跟導師談未來（可以改變第 9 章生涯調查的選擇）
  V09: [
    { scene: 'office', npc: 'chen' },
    n('v09a'),
    { ifv: 'route', then: [say('chen', '九月的時候，你寫的是一個方向。現在還是一樣嗎？')], else: [say('chen', '九月的調查你還沒決定，現在有想法了嗎？')] },
    { q: { p: P.reply, src: LIFE, opts: [
      { zh: '我想讀完科大以後留在台灣工作。', ok: 1, then: [{ setv: { route: 'work' } }, say('chen', '那實習的表現和中文都很重要，要堅持下去。')] },
      { zh: '我想讀完科大以後回國，把技術帶回家鄉。', ok: 1, then: [{ setv: { route: 'home' } }, say('chen', '很好，你的經驗對家鄉一定很有幫助。')] },
      { zh: '我想繼續讀研究所，追求更專業的知識。', ok: 1, then: [{ setv: { route: 'grad' } }, say('chen', '有目標很好，成績要保持。')] },
      { zh: '我還在想，想多跟家人討論。', ok: 1, then: [{ setv: { route: 'undecided' } }, say('chen', '沒關係，還有時間，有問題就來找我。')] },
    ] } },
    n('v09b'),
    { fx: { mood: 5, aff: { chen: 1 } } },
  ],

  // 11 月初：拍畢業照（全班回校，實習的同學請公假）；紀念冊三下才會做好（第 12 章）
  V10: [
    { scene: 'campus', npc: 'photog' },
    n('v10a'),
    say('photog', '個人照先拍。衣服拉整齊，頭髮整理一下，下巴收一點。', { listen: 1 }),
    { q: { p: T('攝影師請你先做什麼？', 'Thợ chụp ảnh bảo bạn làm gì trước?', 'Fotografer memintamu melakukan apa dulu?', 'What does the photographer ask you to do first?', 'ช่างภาพให้คุณทำอะไรก่อน', 'ဓာတ်ပုံဆရာက အရင်ဆုံး ဘာလုပ်ခိုင်းလဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '把衣服拉整齊、整理頭髮', ok: 1 }, { zh: '換一件衣服' }, { zh: '戴上帽子' }, { zh: '把眼睛閉起來' },
    ], wrong: [say('photog', '再聽一次。')] } },
    say('photog', '好，看鏡頭——笑一下！不要太用力，自然一點。'),
    { q: { p: P.pick, src: LIFE, kind: 'listen', opts: [
      { zh: '看鏡頭', ok: 1 }, { zh: '看旁邊' }, { zh: '低頭' }, { zh: '轉過去' },
    ], wrong: [say('photog', '看這裡，看鏡頭喔。')] } },
    say('photog', '接下來拍團體照。高的同學站後面，矮的站前面。後面的往右邊靠一點。', { listen: 1 }),
    { q: { p: T('拍團體照，高的同學要站哪裡？', 'Chụp ảnh tập thể, bạn cao đứng ở đâu?', 'Untuk foto bersama, siswa yang tinggi berdiri di mana?', 'For the group photo, where do taller students stand?', 'ถ่ายรูปหมู่ คนตัวสูงต้องยืนตรงไหน', 'အုပ်စုဓာတ်ပုံမှာ အရပ်ရှည်တဲ့သူ ဘယ်မှာ ရပ်ရမလဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '後面', ok: 1 }, { zh: '前面' }, { zh: '中間' }, { zh: '旁邊' },
    ], wrong: [say('photog', '再聽一次。')] } },
    { q: { p: P.say, src: LIFE, opts: [
      { zh: '不好意思，我前面的同學擋到我了，我可以往旁邊一點嗎？', ok: 1 },
      { zh: '我不想拍。', r: [say('photog', '一輩子一次，大家一起拍嘛！')] },
      { zh: '快點，好熱喔！' },
      { zh: '（什麼都不說，被擋住了）', r: [say('photog', '後面那位同學，你被擋住了喔，往這邊一點。')] },
    ], wrong: [], ok: [say('photog', '好，往右一點……可以了！')] } },
    n('v10b'),
    { fx: { mood: 10, pop: 2 } },
  ],

  // 隨機：趕進度想跳過安全檢查（選錯→教學→複習）
  R21: [
    { scene: 'work', npc: 'tongxue' },
    n('r21a'),
    { q: { p: Q_DO, src: LIFE, opts: [
      { zh: '不行，按照規定先做安全檢查，來不及就跟老師說。', ok: 1, then: [say('tongxue', '……好啦，檢查完再做。'), { fx: { skill: 2 } }] },
      { zh: '我們一起檢查，兩個人做比較快。', ok: 1, then: [say('tongxue', '好主意，十分鐘就好了。')] },
      { zh: '好啊，跳過吧！', end: 1, r: [n('r21b'), { fx: { mood: -15, hp: -5 } }, { violation: 1 },
        { scene: 'work', npc: 'zhang' },
        say('zhang', '趕進度也不能跳過安全檢查。受傷了，作品也壞了，反而更慢。'),
        say('zhang', '不管多趕，都要按照規定先檢查。', { listen: 1 }),
        { q: { p: T('趕進度的時候，安全檢查要怎麼辦？', 'Khi chạy tiến độ, kiểm tra an toàn thì sao?', 'Saat mengejar target, bagaimana dengan cek keselamatan?', 'When you’re rushing, what about the safety check?', 'ตอนเร่งงาน การตรวจความปลอดภัยต้องทำอย่างไร', 'အမြန်လုပ်ရတဲ့အခါ ဘေးကင်းရေး စစ်တာကို ဘယ်လိုလုပ်မလဲ။'), src: LIFE, opts: [
          { zh: '還是要按照規定先檢查', ok: 1 }, { zh: '可以跳過' }, { zh: '做完再檢查' }, { zh: '叫別人檢查就好' },
        ], wrong: [say('zhang', '不對，再想一次。')], ok: [say('zhang', '對，安全第一。')] } },
        { redo: 'R21' }] },
      { zh: '你先做，我不管。', r: [say('tongxue', '……你是小組長耶！')] },
    ], wrong: [say('tongxue', '你覺得呢？')], ok: [] } },
  ],
  R21b: [
    { scene: 'work', npc: 'newbie' },
    n('r21c'),
    say('newbie', '時間快來不及了，安全檢查可以不要做嗎？'),
    { q: { p: P.say, src: LIFE, opts: [
      { zh: '不可以。我以前跳過一次，結果有人受傷。我們一起檢查。', ok: 1, then: [{ fx: { pop: 2, skill: 2 } }] },
      { zh: '先檢查，來不及我去跟師傅說明。', ok: 1, then: [{ fx: { pop: 1, skill: 2 } }] },
      { zh: '可以，快一點。', r: [say('newbie', '……你上次不是說很危險嗎？')] },
      { zh: '隨便你。' },
    ], wrong: [say('newbie', '那怎麼辦？')], ok: [] } },
  ],
  // 隨機：被誤會
  R22: [
    { scene: 'classroom', npc: 'newbie' },
    n('r22a'),
    { q: { p: Q_DO, src: LIFE, opts: [
      { zh: '當面跟她解釋：「我們剛剛在笑影片，不是在笑你。讓你誤會了，對不起。」', ok: 1, then: [say('newbie', '原來是這樣，我誤會了，對不起！'), { fx: { pop: 2, mood: 5 } }] },
      { zh: '不理她，過幾天就好了。', r: [say('newbie', '……'), { fx: { pop: -1 } }] },
      { zh: '在群組裡說她想太多。', r: [say('newbie', '你怎麼可以在群組裡說！'), { fx: { pop: -2 } }] },
      { zh: '請別人幫我說。' },
    ], wrong: [], ok: [] } },
  ],
  // 隨機：天冷感冒，這次有健保卡
  R23: [
    { scene: 'clinic', npc: 'nurse' },
    n('r23a'),
    say('nurse', '請給我健保卡。', { listen: 1 }),
    { q: { p: P.pick, src: LIFE, kind: 'listen', opts: [
      { zh: '健保卡', ok: 1 }, { zh: '學生證' }, { zh: '悠遊卡' }, { zh: '居留證' },
    ], wrong: [say('nurse', '健保卡喔。')] } },
    say('li', '你哪裡不舒服？'),
    { q: { p: P.reply, src: LIFE, opts: [
      { zh: '我從昨天晚上開始喉嚨痛，還有一點發燒。', ok: 1 }, { zh: '我很好。' }, { zh: '我想請假。' }, { zh: '我餓了。' },
    ], wrong: [say('li', '說說看哪裡不舒服？')], ok: [say('li', '多喝水，多休息。')] } },
    n('r23b'),
    { fx: { money: -150, hp: 10 } },
  ],
  // 隨機：宿舍噪音
  R24: [
    { scene: 'dorm', npc: 'tongxue' },
    n('r24a'),
    { q: { p: Q_DO, src: LIFE, opts: [
      { zh: '敲門，有禮貌地說：「不好意思，已經很晚了，可以小聲一點嗎？」', ok: 1, then: [say('tongxue', '啊，抱歉抱歉！我馬上關小聲。'), { fx: { pop: 1 } }] },
      { zh: '明天早上告訴宿舍阿姨。', ok: 1, then: [say('ayi', '好，我會提醒他們。宿舍十一點以後要安靜。')] },
      { zh: '用力敲牆壁。', r: [say('tongxue', '幹嘛啦！'), { fx: { pop: -1 } }] },
      { zh: '我也把音樂開更大聲。', r: [{ fx: { tidy: -5, pop: -2 } }, say('ayi', '這麼晚了，你們兩間都太吵了！')] },
    ], wrong: [], ok: [] } },
  ],
};

module.exports = { N, EVENTS };

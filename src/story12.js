// 第十二章劇本資料（三年級 4–6 月，高中最後一章）：畢業紀念冊美編（照片三上已拍好）、
// 錄取通知（面試當月公布；須在高中畢業前通過 B1 才能入學）、報名 5 月 B1（最後一場：沒過依規定無法直升，要返國）、
// 第一次報所得稅（收入不高不用繳；有被扣稅的要申報才能退）、5 月大學到校說明會＋面試（甲組在校參加；乙組傳經驗給同學）、
// 5 月 B1 考試、畢業典禮（發畢業紀念冊、互相留言）、高中實習結束（交接、歸還識別證、最後一份薪水）、
// 學期結束（上課到 6 月底；暑假直接到科大合作廠商報到並入住科大宿舍，型態 421）。
// 輪調：4 月甲組實習、乙組在校；5–6 月甲組在校、乙組實習。
// 結局：通過 B1 → 直升科大＋「四年後的你」（依第 10 章選的路線）；沒通過 → 依規定返國。
// 隨機事件：二手課本賣給學弟妹、搬出前的大型垃圾（要預約清運）。
const { T, P } = require('./story.js');
const S3 = require('./story3.js');

const N = {
  w01a: T('四月，班上的美編幹部在整理畢業紀念冊。照片三年級上學期就拍好了，現在要排版、寫留言。', 'Tháng Tư, cán bộ lớp phụ trách thiết kế đang làm kỷ yếu. Ảnh đã chụp từ học kỳ 1 lớp 12, giờ phải dàn trang và viết lời nhắn.', 'April, pengurus kelas bagian desain sedang menyusun buku tahunan. Foto sudah diambil di semester pertama kelas 12, sekarang tinggal tata letak dan menulis pesan.', 'April. The class design team is putting together the yearbook. The photos were taken last semester — now it’s layout and messages.', 'เดือนเมษายน ฝ่ายออกแบบของห้องกำลังทำหนังสือรุ่น รูปถ่ายไว้ตั้งแต่ภาคเรียนแรกของปีสาม ตอนนี้ต้องจัดหน้าและเขียนข้อความ', 'ဧပြီလ၊ အတန်းရဲ့ ဒီဇိုင်းတာဝန်ခံတွေက ဘွဲ့မှတ်တမ်းစာအုပ် ပြင်ဆင်နေကြတယ်။ ဓာတ်ပုံတွေက တတိယနှစ် ပထမစာသင်နှစ်ဝက်မှာ ရိုက်ပြီးသား၊ အခု စာမျက်နှာစီပြီး မှတ်စုရေးရမယ်။'),
  w02s: T('三月面試以後，錄取結果當月就出來了。四月第一天上課，陳導師把錄取通知發給你們這一組。', 'Sau buổi phỏng vấn tháng Ba, kết quả có ngay trong tháng. Ngày học đầu tháng Tư, thầy Trần phát giấy báo trúng tuyển cho nhóm bạn.', 'Setelah wawancara Maret, hasilnya keluar di bulan yang sama. Hari pertama sekolah di bulan April, Pak Chen membagikan surat penerimaan ke kelompokmu.', 'Results from the March interviews came out that same month. On the first school day of April, Mr. Chen hands your group the admission letters.', 'หลังสัมภาษณ์เดือนมีนาคม ผลออกภายในเดือนนั้นเลย วันแรกที่เรียนในเดือนเมษายน ครูเฉินแจกหนังสือตอบรับให้กลุ่มของคุณ', 'မတ်လ အင်တာဗျူးပြီးနောက် ရလဒ်က အဲဒီလထဲမှာပဲ ထွက်တယ်။ ဧပြီလ ပထမဆုံး ကျောင်းတက်ရက်မှာ ဆရာချန်က ကိုယ့်အဖွဲ့ကို ဝင်ခွင့်စာ ဝေပေးတယ်။'),
  w02w: T('四月，你在工廠實習。陳導師傳來訊息：三月那一組的錄取通知都出來了，你們五月面試，當月也會知道結果。', 'Tháng Tư, bạn đang thực tập ở nhà máy. Thầy Trần nhắn: nhóm tháng Ba đã có giấy báo trúng tuyển, các em phỏng vấn tháng Năm thì trong tháng cũng sẽ biết kết quả.', 'April, kamu magang di pabrik. Pak Chen mengirim pesan: surat penerimaan kelompok Maret sudah keluar. Kalian wawancara Mei, hasilnya juga keluar di bulan itu.', 'April. You’re at the factory. Mr. Chen messages: the March group’s letters are out. Your group interviews in May and will hear that same month.', 'เดือนเมษายน คุณฝึกงานอยู่ที่โรงงาน ครูเฉินส่งข้อความมาว่า หนังสือตอบรับของกลุ่มเดือนมีนาคมออกแล้ว พวกเธอสัมภาษณ์เดือนพฤษภาคม ก็จะรู้ผลภายในเดือนนั้น', 'ဧပြီလ၊ စက်ရုံမှာ အလုပ်သင်နေတယ်။ ဆရာချန်က မက်ဆေ့ပို့တယ်၊ မတ်လအဖွဲ့ရဲ့ ဝင်ခွင့်စာတွေ ထွက်ပြီ၊ မင်းတို့ မေလ အင်တာဗျူးလည်း အဲဒီလထဲမှာ ရလဒ်သိမယ်တဲ့။'),
  w03p: T('你已經通過 B1 了。林老師說，這是三下最後一場，請你多陪還沒過的同學練習。', 'Bạn đã đậu B1 rồi. Cô Lâm nói đây là kỳ thi cuối cùng của học kỳ 2 lớp 12, nhờ bạn luyện tập thêm với các bạn chưa đậu.', 'Kamu sudah lulus B1. Bu Lin bilang ini ujian terakhir semester ini, jadi dia memintamu menemani teman yang belum lulus berlatih.', 'You’ve passed B1. Ms. Lin says this is the last exam of the semester and asks you to practice with classmates who haven’t passed.', 'คุณผ่าน B1 แล้ว ครูหลินบอกว่านี่เป็นรอบสุดท้ายของภาคเรียน ขอให้คุณช่วยฝึกกับเพื่อนที่ยังไม่ผ่าน', 'B1 အောင်ပြီးပြီ။ ဒါ ဒီစာသင်နှစ်ဝက်ရဲ့ နောက်ဆုံးအကြိမ်မို့ မအောင်သေးတဲ့ သူငယ်ချင်းတွေနဲ့ များများ လေ့ကျင့်ပေးဖို့ ဆရာမလင်က ပြောတယ်။'),
  w03f: T('你還沒通過 B1。林老師很嚴肅地說：五月是最後一場。照規定，畢業以前沒通過，就不能直升科大，要回國。', 'Bạn chưa đậu B1. Cô Lâm nghiêm túc nói: tháng Năm là kỳ thi cuối cùng. Theo quy định, nếu trước khi tốt nghiệp chưa đậu thì không được học thẳng lên đại học, phải về nước.', 'Kamu belum lulus B1. Bu Lin berkata dengan serius: Mei adalah ujian terakhir. Sesuai aturan, kalau belum lulus sebelum wisuda, tidak bisa langsung masuk universitas dan harus pulang.', 'You haven’t passed B1. Ms. Lin is serious: May is the last exam. By the rules, if you don’t pass before graduating, you can’t go on to the university — you must return home.', 'คุณยังไม่ผ่าน B1 ครูหลินพูดอย่างจริงจังว่า เดือนพฤษภาคมเป็นรอบสุดท้าย ตามกฎ ถ้าไม่ผ่านก่อนจบ จะเรียนต่อมหาวิทยาลัยไม่ได้ ต้องกลับประเทศ', 'B1 မအောင်သေးဘူး။ ဆရာမလင်က လေးလေးနက်နက် ပြောတယ်၊ မေလက နောက်ဆုံးအကြိမ်ပဲ။ စည်းကမ်းအရ ကျောင်းမပြီးခင် မအောင်ရင် တက္ကသိုလ် တိုက်ရိုက်မတက်ရဘဲ နိုင်ငံပြန်ရမယ်။'),
  w04a: T('五月是報所得稅的月份。陳導師請大家把一月收到的扣繳憑單帶來教室。', 'Tháng Năm là tháng khai thuế thu nhập. Thầy Trần bảo mọi người mang giấy khấu trừ thuế nhận hồi tháng Một đến lớp.', 'Mei adalah bulan lapor pajak penghasilan. Pak Chen meminta semua membawa bukti potong yang diterima bulan Januari ke kelas.', 'May is tax-filing month. Mr. Chen asks everyone to bring the tax statements they got in January.', 'เดือนพฤษภาคมเป็นเดือนยื่นภาษีเงินได้ ครูเฉินให้ทุกคนเอาใบหักภาษีที่ได้รับเมื่อเดือนมกราคมมาที่ห้องเรียน', 'မေလက ဝင်ငွေခွန် တင်သွင်းရတဲ့လ။ ဇန်နဝါရီမှာ ရခဲ့တဲ့ အခွန်နုတ်ယူမှု အထောက်အထားကို အတန်းထဲ ယူလာဖို့ ဆရာချန်က ပြောတယ်။'),
  w04b: T('在國稅局，服務人員看了同學的居留證和憑單，幫他填好申報書。如果資料沒問題，扣的稅之後會退到他的帳戶。', 'Ở Cục thuế, nhân viên xem thẻ cư trú và giấy khấu trừ của bạn ấy, giúp điền tờ khai. Nếu hồ sơ không có vấn đề, tiền thuế đã khấu trừ sẽ được hoàn vào tài khoản sau.', 'Di kantor pajak, petugas memeriksa kartu izin tinggal dan bukti potong temanmu, lalu membantu mengisi formulir. Kalau datanya benar, pajak yang dipotong nanti dikembalikan ke rekeningnya.', 'At the tax office, the clerk checks his residence card and statement and helps him fill in the return. If everything is in order, the withheld tax will be refunded to his account.', 'ที่สำนักงานสรรพากร เจ้าหน้าที่ดูบัตรถิ่นที่อยู่และใบหักภาษีของเพื่อน แล้วช่วยกรอกแบบยื่น ถ้าข้อมูลถูกต้อง ภาษีที่ถูกหักจะคืนเข้าบัญชีภายหลัง', 'အခွန်ရုံးမှာ ဝန်ထမ်းက သူငယ်ချင်းရဲ့ နေထိုင်ခွင့်ကတ်နဲ့ အထောက်အထားကို ကြည့်ပြီး ပုံစံ ဖြည့်ပေးတယ်။ အချက်အလက် မှန်ရင် နုတ်ထားတဲ့ အခွန်ကို နောက်မှ သူ့အကောင့်ထဲ ပြန်ထည့်ပေးမယ်။'),
  w05a: T('五月，換你們這一組在學校。大學的老師又來了：上午說明會，下午面試。', 'Tháng Năm, đến lượt nhóm bạn ở trường. Thầy cô đại học lại đến: sáng giới thiệu, chiều phỏng vấn.', 'Mei, giliran kelompokmu di sekolah. Dosen universitas datang lagi: pagi sesi informasi, siang wawancara.', 'May. Now your group is at school. The university teachers are back: information session in the morning, interviews in the afternoon.', 'เดือนพฤษภาคม ถึงตากลุ่มคุณอยู่ที่โรงเรียน อาจารย์มหาวิทยาลัยมาอีกครั้ง: ช่วงเช้าบรรยาย ช่วงบ่ายสัมภาษณ์', 'မေလ၊ ကိုယ့်အဖွဲ့ ကျောင်းမှာ ရှိတဲ့အလှည့်။ တက္ကသိုလ်ဆရာတွေ ထပ်လာပြီ၊ မနက် မိတ်ဆက်ပွဲ၊ နေ့လယ် အင်တာဗျူး။'),
  w05b: T('五月底，錄取結果出來了。陳導師把錄取通知交給你：「恭喜！」', 'Cuối tháng Năm có kết quả. Thầy Trần đưa giấy báo trúng tuyển cho bạn: “Chúc mừng em!”', 'Akhir Mei hasilnya keluar. Pak Chen memberimu surat penerimaan: “Selamat!”', 'Late May: results are out. Mr. Chen hands you the letter: “Congratulations!”', 'ปลายเดือนพฤษภาคมผลออกแล้ว ครูเฉินยื่นหนังสือตอบรับให้คุณ: “ยินดีด้วย!”', 'မေလကုန်မှာ ရလဒ်ထွက်ပြီ။ ဆရာချန်က ဝင်ခွင့်စာ ပေးပြီး “ဂုဏ်ယူပါတယ်!” တဲ့။'),
  w05w: T('五月，你在工廠實習。午休的時候，學弟傳 LINE 問你：大學面試會問什麼？', 'Tháng Năm, bạn thực tập ở nhà máy. Giờ nghỉ trưa, một em khóa dưới nhắn LINE hỏi: phỏng vấn đại học sẽ hỏi gì?', 'Mei, kamu magang di pabrik. Saat istirahat siang, temanmu mengirim LINE: wawancara universitas akan menanyakan apa?', 'May. You’re at the factory. At lunch, a classmate messages: what does the university interview ask?', 'เดือนพฤษภาคม คุณฝึกงานอยู่ที่โรงงาน ตอนพักเที่ยง เพื่อนส่ง LINE ถามว่าสัมภาษณ์มหาวิทยาลัยจะถามอะไร', 'မေလ၊ စက်ရုံမှာ အလုပ်သင်နေတယ်။ နေ့လယ်နားချိန် သူငယ်ချင်းက LINE နဲ့ တက္ကသိုလ် အင်တာဗျူးမှာ ဘာမေးမလဲလို့ မေးတယ်။'),
  w06a: T('五月底，三年級下學期最後一場華語文能力測驗。你緊張得早上五點就醒了。', 'Cuối tháng Năm, kỳ thi TOCFL cuối cùng của học kỳ 2 lớp 12. Bạn hồi hộp đến mức năm giờ sáng đã tỉnh.', 'Akhir Mei, ujian TOCFL terakhir semester kedua kelas 12. Kamu begitu tegang sampai bangun jam lima pagi.', 'Late May: the last TOCFL of the semester. You’re so nervous you wake at five.', 'ปลายเดือนพฤษภาคม การสอบ TOCFL ครั้งสุดท้ายของภาคเรียนที่สองปีสาม คุณตื่นเต้นจนตื่นตั้งแต่ตีห้า', 'မေလကုန်၊ တတိယနှစ် ဒုတိယစာသင်နှစ်ဝက်ရဲ့ နောက်ဆုံး TOCFL။ စိတ်လှုပ်ရှားလွန်းလို့ မနက် ငါးနာရီကတည်းက နိုးနေတယ်။'),
  w06p: T('一個月後成績出來了：你通過了 B1！陳導師說：「直升科大的條件，你都準備好了。」', 'Một tháng sau có kết quả: bạn đậu B1! Thầy Trần nói: “Điều kiện học thẳng lên đại học, em đã đủ cả rồi.”', 'Sebulan kemudian hasilnya keluar: kamu lulus B1! Pak Chen bilang: “Semua syarat masuk universitas sudah kamu penuhi.”', 'A month later: you passed B1! Mr. Chen says, “You’ve met every requirement for the university.”', 'หนึ่งเดือนต่อมาผลออก: คุณผ่าน B1! ครูเฉินบอกว่า “เงื่อนไขการเรียนต่อมหาวิทยาลัย เธอพร้อมหมดแล้ว”', 'တစ်လအကြာ ရလဒ်ထွက်တယ်၊ B1 အောင်ပြီ! ဆရာချန်က “တက္ကသိုလ်တက်ဖို့ လိုအပ်ချက်တွေ အားလုံး ပြည့်ပြီ” တဲ့။'),
  w06f: T('成績出來了，這次還是差一點。陳導師很難過，可是規定就是規定。', 'Kết quả có rồi, lần này vẫn thiếu một chút. Thầy Trần rất buồn, nhưng quy định vẫn là quy định.', 'Hasilnya keluar, kali ini masih kurang sedikit. Pak Chen sedih, tapi aturan tetap aturan.', 'The results are in — still a little short. Mr. Chen is sad, but the rules are the rules.', 'ผลออกแล้ว ครั้งนี้ยังขาดอีกนิด ครูเฉินเสียใจมาก แต่กฎก็คือกฎ', 'ရလဒ်ထွက်ပြီ၊ ဒီတစ်ခါလည်း နည်းနည်းလိုသေးတယ်။ ဆရာချန် စိတ်မကောင်းဖြစ်ပေမဲ့ စည်းကမ်းက စည်းကမ်းပဲ။'),
  w06h: T('你已經通過 B1 了。考試那天，你在考場外面等同學，給他們一瓶水和一句加油。', 'Bạn đã đậu B1 rồi. Ngày thi, bạn đứng ngoài phòng thi chờ các bạn, đưa mỗi người một chai nước và một lời cổ vũ.', 'Kamu sudah lulus B1. Pada hari ujian, kamu menunggu teman-teman di luar ruang ujian, memberi sebotol air dan semangat.', 'You’ve passed B1. On exam day you wait outside for your classmates with water and a word of encouragement.', 'คุณผ่าน B1 แล้ว วันสอบคุณรอเพื่อนอยู่หน้าห้องสอบ ให้น้ำคนละขวดและคำให้กำลังใจ', 'B1 အောင်ပြီးပြီ။ စာမေးပွဲနေ့မှာ စာမေးပွဲခန်းအပြင်မှာ သူငယ်ချင်းတွေကို စောင့်ပြီး ရေတစ်ဗူးနဲ့ အားပေးစကား ပေးတယ်။'),
  w07a: T('六月初，畢業典禮。禮堂裡坐滿了人，你的家人在手機的另一邊看直播。', 'Đầu tháng Sáu, lễ tốt nghiệp. Hội trường kín người, gia đình bạn xem phát trực tiếp ở đầu bên kia điện thoại.', 'Awal Juni, upacara wisuda. Aula penuh orang, keluargamu menonton siaran langsung di ponsel.', 'Early June: graduation. The hall is full, and your family is watching the livestream on the other side of the phone.', 'ต้นเดือนมิถุนายน พิธีจบการศึกษา หอประชุมเต็มไปด้วยผู้คน ครอบครัวคุณดูถ่ายทอดสดอยู่อีกฝั่งของมือถือ', 'ဇွန်လအစ၊ ဘွဲ့နှင်းသဘင်။ ခန်းမထဲ လူပြည့်နေပြီး မိသားစုက ဖုန်းရဲ့ တစ်ဖက်ကနေ တိုက်ရိုက်ထုတ်လွှင့်မှု ကြည့်နေကြတယ်။'),
  w07b: T('典禮結束，大家拿到了畢業紀念冊，在走廊上互相簽名、寫留言。雖然畢業了，你們還要上課到六月底。', 'Lễ kết thúc, mọi người nhận kỷ yếu, ký tên và viết lời nhắn cho nhau ở hành lang. Dù đã tốt nghiệp, các bạn vẫn học đến cuối tháng Sáu.', 'Setelah upacara, semua menerima buku tahunan dan saling tanda tangan serta menulis pesan di lorong. Meski sudah wisuda, kalian masih sekolah sampai akhir Juni.', 'After the ceremony, everyone gets the yearbook and signs each other’s pages in the hallway. You’ve graduated, but classes go on until the end of June.', 'หลังพิธี ทุกคนได้รับหนังสือรุ่น แล้วเซ็นชื่อเขียนข้อความให้กันที่ทางเดิน ถึงจะจบแล้ว แต่ยังต้องเรียนถึงปลายเดือนมิถุนายน', 'အခမ်းအနားပြီးတော့ အားလုံး ဘွဲ့မှတ်တမ်းစာအုပ် ရကြပြီး စင်္ကြံမှာ အပြန်အလှန် လက်မှတ်ထိုး၊ မှတ်စုရေးကြတယ်။ ကျောင်းပြီးပေမဲ့ ဇွန်လကုန်အထိ စာသင်ရသေးတယ်။'),
  w08w: T('六月，是你在這家公司實習的最後一個月。下個月，你就要到科大的合作廠商報到了。', 'Tháng Sáu là tháng thực tập cuối cùng của bạn ở công ty này. Tháng sau bạn sẽ đến nhận việc ở doanh nghiệp liên kết của đại học.', 'Juni adalah bulan terakhir magangmu di perusahaan ini. Bulan depan kamu akan melapor ke perusahaan mitra universitas.', 'June is your last month at this company. Next month you’ll report to the university’s partner company.', 'เดือนมิถุนายนเป็นเดือนสุดท้ายที่คุณฝึกงานที่บริษัทนี้ เดือนหน้าคุณจะไปรายงานตัวที่บริษัทคู่ความร่วมมือของมหาวิทยาลัย', 'ဇွန်လက ဒီကုမ္ပဏီမှာ အလုပ်သင်ရတဲ့ နောက်ဆုံးလပဲ။ နောက်လ တက္ကသိုလ်ရဲ့ ပူးပေါင်းကုမ္ပဏီကို သွားသတင်းပို့ရမယ်။'),
  w08s: T('六月，你在學校上最後的課。週末，你帶著一張感謝卡回到實習的公司，跟張師傅道別。', 'Tháng Sáu, bạn học những buổi cuối ở trường. Cuối tuần, bạn mang một tấm thiệp cảm ơn về công ty thực tập để chào tạm biệt thầy Trương.', 'Juni, kamu mengikuti pelajaran terakhir di sekolah. Akhir pekan, kamu membawa kartu ucapan terima kasih ke perusahaan magang untuk berpamitan dengan Pak Zhang.', 'June: your last classes. On the weekend you bring a thank-you card to the company to say goodbye to Master Zhang.', 'เดือนมิถุนายน คุณเรียนคาบสุดท้ายที่โรงเรียน สุดสัปดาห์คุณถือการ์ดขอบคุณกลับไปที่บริษัทฝึกงาน เพื่อบอกลาอาจารย์จาง', 'ဇွန်လ၊ ကျောင်းမှာ နောက်ဆုံးအတန်းတွေ တက်နေတယ်။ စနေ၊ တနင်္ဂနွေမှာ ကျေးဇူးတင်ကတ်တစ်ခု ယူပြီး အလုပ်သင်ကုမ္ပဏီကို ပြန်သွားပြီး ဆရာကြီးကျန်းကို နှုတ်ဆက်တယ်။'),
  w09a: T('六月底，最後一天上課。你把房間整理乾淨，鑰匙交給宿舍阿姨。三年前你拖著行李走進來，現在要拖著行李走出去了。', 'Cuối tháng Sáu, ngày học cuối cùng. Bạn dọn sạch phòng, trả chìa khóa cho cô quản lý. Ba năm trước bạn kéo vali bước vào, giờ lại kéo vali bước ra.', 'Akhir Juni, hari sekolah terakhir. Kamu membersihkan kamar dan menyerahkan kunci ke bibi asrama. Tiga tahun lalu kamu masuk menarik koper, sekarang keluar menarik koper.', 'End of June, the last day of class. You clean your room and hand the key to the dorm auntie. Three years ago you wheeled your suitcase in; now you’re wheeling it out.', 'ปลายเดือนมิถุนายน วันเรียนวันสุดท้าย คุณทำความสะอาดห้องแล้วคืนกุญแจให้ป้าหอพัก สามปีก่อนคุณลากกระเป๋าเดินเข้ามา ตอนนี้ลากกระเป๋าเดินออกไป', 'ဇွန်လကုန်၊ နောက်ဆုံး ကျောင်းတက်ရက်။ အခန်းကို သန့်ရှင်းပြီး သော့ကို အဆောင်အန်တီကို ပြန်အပ်တယ်။ သုံးနှစ်အရင်က ခရီးဆောင်အိတ် ဆွဲပြီး ဝင်လာခဲ့တယ်၊ အခု ပြန်ဆွဲပြီး ထွက်သွားရမယ်။'),
  r27a: T('學妹看到你在整理書：「學姐，這些課本你還要嗎？可以賣給我嗎？」', 'Một em khóa dưới thấy bạn dọn sách: “Chị ơi, mấy cuốn sách này chị còn dùng không? Bán cho em được không?”', 'Adik kelas melihatmu merapikan buku: “Kak, buku-buku ini masih dipakai? Boleh dijual ke aku?”', 'A younger student sees you sorting books: “Do you still need these textbooks? Could you sell them to me?”', 'น้องเห็นคุณจัดหนังสืออยู่: “พี่คะ หนังสือเรียนพวกนี้ยังใช้อยู่ไหม ขายให้หนูได้ไหม”', 'ညီမငယ်က စာအုပ်စီနေတာ မြင်ပြီး “အစ်မ၊ ဒီစာအုပ်တွေ လိုသေးလား၊ ညီမကို ရောင်းလို့ရမလား” တဲ့။'),
  r28a: T('要搬出宿舍了，你有一張壞掉的小桌子和一個舊電風扇，不知道要丟在哪裡。', 'Sắp chuyển khỏi ký túc xá, bạn có một cái bàn nhỏ bị hỏng và một cái quạt cũ, không biết vứt ở đâu.', 'Mau pindah dari asrama, kamu punya meja kecil rusak dan kipas angin lama, tidak tahu harus dibuang di mana.', 'You’re moving out, and you have a broken little desk and an old electric fan. Where do they go?', 'กำลังจะย้ายออกจากหอ คุณมีโต๊ะเล็กที่พังกับพัดลมเก่าหนึ่งตัว ไม่รู้จะทิ้งที่ไหน', 'အဆောင်က ပြောင်းထွက်တော့မယ်၊ ကျိုးနေတဲ့ စားပွဲသေးလေးတစ်လုံးနဲ့ ပန်ကာအဟောင်းတစ်လုံး ရှိတယ်၊ ဘယ်မှာ ပစ်ရမလဲ မသိဘူး။'),
  // 結局
  endUni: T('七月，你到科大的合作廠商報到，住進了科大的宿舍。一個星期四天實習、兩天上課、一天休息，新的生活開始了。', 'Tháng Bảy, bạn đến nhận việc ở doanh nghiệp liên kết và dọn vào ký túc xá đại học. Mỗi tuần bốn ngày thực tập, hai ngày học, một ngày nghỉ — cuộc sống mới bắt đầu.', 'Juli, kamu melapor ke perusahaan mitra dan pindah ke asrama universitas. Empat hari magang, dua hari kuliah, satu hari libur setiap minggu — kehidupan baru dimulai.', 'July. You report to the university’s partner company and move into the university dorm. Four days of work, two days of class, one day off each week — a new life begins.', 'เดือนกรกฎาคม คุณไปรายงานตัวที่บริษัทคู่ความร่วมมือและย้ายเข้าหอของมหาวิทยาลัย ฝึกงานสี่วัน เรียนสองวัน หยุดหนึ่งวันต่อสัปดาห์ ชีวิตใหม่เริ่มต้นแล้ว', 'ဇူလိုင်လ၊ တက္ကသိုလ်ရဲ့ ပူးပေါင်းကုမ္ပဏီကို သတင်းပို့ပြီး တက္ကသိုလ်အဆောင်ထဲ ပြောင်းနေတယ်။ တစ်ပတ်ကို လေးရက် အလုပ်သင်၊ နှစ်ရက် စာသင်၊ တစ်ရက် အနား၊ ဘဝသစ် စပြီ။'),
  endWork: T('四年後，你從科大畢業，留在台灣工作。新來的僑生學弟妹叫你「前輩」，你常常跟他們說：中文要每天練習。', 'Bốn năm sau, bạn tốt nghiệp đại học và ở lại Đài Loan làm việc. Các em du học sinh mới gọi bạn là “tiền bối”, bạn hay dặn các em: tiếng Trung phải luyện mỗi ngày.', 'Empat tahun kemudian, kamu lulus universitas dan bekerja di Taiwan. Adik-adik pelajar baru memanggilmu “senior”, dan kamu sering bilang: bahasa Mandarin harus dilatih setiap hari.', 'Four years later, you graduate from university and stay to work in Taiwan. New students call you “senpai,” and you always tell them: practice Chinese every day.', 'สี่ปีต่อมา คุณจบมหาวิทยาลัยและทำงานอยู่ที่ไต้หวัน น้องนักเรียนใหม่เรียกคุณว่า “รุ่นพี่” คุณมักบอกพวกเขาว่า ภาษาจีนต้องฝึกทุกวัน', 'လေးနှစ်အကြာ တက္ကသိုလ်ပြီးပြီး ထိုင်ဝမ်မှာ ဆက်အလုပ်လုပ်တယ်။ ကျောင်းသားသစ်တွေက “စီနီယာ” လို့ ခေါ်ကြပြီး တရုတ်စာကို နေ့တိုင်း လေ့ကျင့်ပါလို့ အမြဲပြောတယ်။'),
  endHome: T('四年後，你從科大畢業，回到{home}。你用在台灣學到的技術和中文，在家鄉的台商公司工作，也常常幫家鄉的學弟妹介紹青年高中。', 'Bốn năm sau, bạn tốt nghiệp đại học và trở về {home}. Bạn dùng kỹ thuật và tiếng Trung học ở Đài Loan để làm việc cho công ty Đài Loan ở quê, và hay giới thiệu trường cho các em ở quê.', 'Empat tahun kemudian, kamu lulus universitas dan pulang ke {home}. Kamu bekerja di perusahaan Taiwan di kampung halaman dengan keterampilan dan bahasa Mandarin dari Taiwan, dan sering memperkenalkan sekolah kepada adik-adik di kampung.', 'Four years later, you graduate and return to {home}. You use the skills and Chinese you learned in Taiwan at a Taiwanese company back home — and often tell younger students about the school.', 'สี่ปีต่อมา คุณจบมหาวิทยาลัยแล้วกลับไป{home} คุณใช้ทักษะและภาษาจีนที่เรียนจากไต้หวันทำงานในบริษัทไต้หวันที่บ้านเกิด และมักแนะนำโรงเรียนให้น้อง ๆ ที่บ้านเกิด', 'လေးနှစ်အကြာ တက္ကသိုလ်ပြီးပြီး {home} ကို ပြန်တယ်။ ထိုင်ဝမ်မှာ သင်ခဲ့တဲ့ နည်းပညာနဲ့ တရုတ်စာကို သုံးပြီး ဇာတိက ထိုင်ဝမ်ကုမ္ပဏီမှာ အလုပ်လုပ်တယ်၊ ဇာတိက ညီငယ်ညီမငယ်တွေကိုလည်း ကျောင်းအကြောင်း မကြာခဏ မိတ်ဆက်ပေးတယ်။'),
  endGrad: T('四年後，你從科大畢業，又考上了研究所。你在實驗室裡寫報告，用的是三年前還看不懂的中文。', 'Bốn năm sau, bạn tốt nghiệp đại học và thi đậu cao học. Bạn viết báo cáo trong phòng thí nghiệm bằng thứ tiếng Trung mà ba năm trước bạn còn chưa đọc hiểu.', 'Empat tahun kemudian, kamu lulus universitas dan diterima di program magister. Kamu menulis laporan di laboratorium dengan bahasa Mandarin yang tiga tahun lalu belum kamu pahami.', 'Four years later, you graduate and get into a master’s program. In the lab you write reports in the Chinese you couldn’t read three years ago.', 'สี่ปีต่อมา คุณจบมหาวิทยาลัยแล้วสอบเข้าปริญญาโทได้ คุณเขียนรายงานในห้องแล็บด้วยภาษาจีนที่สามปีก่อนยังอ่านไม่ออก', 'လေးနှစ်အကြာ တက္ကသိုလ်ပြီးပြီး မဟာဘွဲ့ ဆက်တက်ခွင့် ရတယ်။ လွန်ခဲ့တဲ့ သုံးနှစ်က မဖတ်တတ်သေးတဲ့ တရုတ်စာနဲ့ ဓာတ်ခွဲခန်းထဲမှာ အစီရင်ခံစာ ရေးနေပြီ။'),
  endOpen: T('四年後，你從科大畢業。你還在想下一步要去哪裡，可是你知道：不管去哪裡，你都有能力重新開始。', 'Bốn năm sau, bạn tốt nghiệp đại học. Bạn vẫn đang nghĩ bước tiếp theo, nhưng bạn biết: dù đi đâu, bạn cũng có khả năng bắt đầu lại.', 'Empat tahun kemudian, kamu lulus universitas. Kamu masih memikirkan langkah selanjutnya, tapi kamu tahu: ke mana pun pergi, kamu mampu memulai lagi.', 'Four years later, you graduate. You’re still deciding what’s next — but you know that wherever you go, you can start again.', 'สี่ปีต่อมา คุณจบมหาวิทยาลัย คุณยังคิดอยู่ว่าจะไปทางไหนต่อ แต่คุณรู้ว่า ไม่ว่าไปที่ไหน คุณก็เริ่มต้นใหม่ได้', 'လေးနှစ်အကြာ တက္ကသိုလ်ပြီးတယ်။ နောက်တစ်ဆင့် ဘယ်သွားမလဲ စဉ်းစားနေဆဲ၊ ဒါပေမဲ့ ဘယ်ကိုသွားသွား အသစ်ပြန်စနိုင်တဲ့ စွမ်းရည် ရှိတယ်ဆိုတာ သိတယ်။'),
  endFail: T('因為沒有通過華語文能力測驗 B1，依照規定，你不能直升科大，七月要回國。你拿到了高中畢業證書，三年的經驗也都還在。陳導師說：「回去以後，中文不要停。」', 'Vì chưa đậu TOCFL B1, theo quy định bạn không thể học thẳng lên đại học, tháng Bảy phải về nước. Bạn vẫn có bằng tốt nghiệp trung học và ba năm kinh nghiệm. Thầy Trần nói: “Về rồi, đừng ngừng học tiếng Trung.”', 'Karena belum lulus TOCFL B1, sesuai aturan kamu tidak bisa langsung masuk universitas dan harus pulang bulan Juli. Kamu tetap mendapat ijazah SMA dan pengalaman tiga tahun. Pak Chen bilang: “Setelah pulang, jangan berhenti belajar Mandarin.”', 'Because you didn’t pass TOCFL B1, the rules say you can’t go on to the university, and you return home in July. You still have your high school diploma and three years of experience. Mr. Chen says: “Don’t stop studying Chinese when you get home.”', 'เพราะยังไม่ผ่าน TOCFL B1 ตามกฎคุณจึงเรียนต่อมหาวิทยาลัยไม่ได้ ต้องกลับประเทศในเดือนกรกฎาคม คุณยังได้ประกาศนียบัตรมัธยมและประสบการณ์สามปี ครูเฉินบอกว่า “กลับไปแล้ว อย่าหยุดเรียนภาษาจีนนะ”', 'TOCFL B1 မအောင်လို့ စည်းကမ်းအရ တက္ကသိုလ် တိုက်ရိုက်မတက်ရဘဲ ဇူလိုင်မှာ နိုင်ငံပြန်ရမယ်။ အထက်တန်း ဘွဲ့လက်မှတ်နဲ့ သုံးနှစ်တာ အတွေ့အကြုံကတော့ ရှိနေဆဲ။ ဆရာချန်က “ပြန်ရောက်ရင် တရုတ်စာ မရပ်နဲ့” တဲ့။'),
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

// B1 最後一場的考題（5 月）
const B1_LAST = [
  { scene: 'classroom', npc: 'teacher' },
  n('w06a'),
  say('teacher', '女：「這件外套有點大，可以換小一號的嗎？」男：「可以，不過小一號的只剩黑色，您要不要試試看？」', { listen: 1 }),
  { q: { p: T('小一號的外套是什麼顏色？', 'Áo khoác nhỏ hơn một cỡ màu gì?', 'Jaket ukuran lebih kecil warnanya apa?', 'What color is the smaller jacket?', 'เสื้อแจ็กเก็ตไซซ์เล็กลงหนึ่งไซซ์สีอะไร', 'တစ်ဆိုဒ် သေးတဲ့ ဂျာကင်က ဘာအရောင်လဲ။'), src: LIFE, kind: 'listen', opts: [
    { zh: '黑色', ok: 1 }, { zh: '白色' }, { zh: '紅色' }, { zh: '藍色' },
  ], wrong: [] } },
  { poster: [['徵人', '週末早班服務生，時間：早上七點到十一點'], ['條件', '會說中文，有餐廳經驗佳'], ['', '有興趣者，請帶履歷到櫃台']], title: '徵人啟事' },
  { q: { p: T('有興趣的人要怎麼做？', 'Người quan tâm phải làm gì?', 'Yang berminat harus bagaimana?', 'What should interested people do?', 'ผู้ที่สนใจต้องทำอย่างไร', 'စိတ်ဝင်စားသူတွေ ဘာလုပ်ရမလဲ။'), src: LIFE, opts: [
    { zh: '帶履歷到櫃台', ok: 1 }, { zh: '打電話給老闆' }, { zh: '週末直接來上班' }, { zh: '寄電子郵件' },
  ], wrong: [] } },
  say('teacher', '男：「你怎麼還沒出門？會議不是九點開始嗎？」女：「剛剛收到通知，會議改到下午兩點了。」', { listen: 1 }),
  { q: { p: T('會議改到什麼時候？', 'Cuộc họp dời sang lúc nào?', 'Rapat dipindah ke kapan?', 'When was the meeting moved to?', 'การประชุมเลื่อนไปเป็นเมื่อไร', 'အစည်းအဝေးကို ဘယ်အချိန် ပြောင်းလိုက်လဲ။'), src: LIFE, kind: 'listen', opts: [
    { zh: '下午兩點', ok: 1 }, { zh: '早上九點' }, { zh: '明天早上' }, { zh: '取消了' },
  ], wrong: [] } },
  { poster: [['', '以前大家習慣用現金，現在越來越多人用手機付款。'], ['', '雖然很方便，但是也要小心個人資料被偷。']], title: '短文' },
  { q: { p: T('作者提醒大家注意什麼？', 'Tác giả nhắc mọi người chú ý điều gì?', 'Penulis mengingatkan untuk memperhatikan apa?', 'What does the writer warn about?', 'ผู้เขียนเตือนให้ระวังเรื่องอะไร', 'စာရေးသူက ဘာကို သတိထားဖို့ သတိပေးလဲ။'), src: LIFE, opts: [
    { zh: '個人資料被偷', ok: 1 }, { zh: '現金不夠用' }, { zh: '手機太貴' }, { zh: '付款太慢' },
  ], wrong: [] } },
  { ifScore: 3, then: [{ setv: { tocflB1: 1 } }, n('w06p'), { card: 'tocflcert' }, { fx: { mood: 20 } }], else: [n('w06f'), { fx: { mood: -15 } }] },
  { fx: { zh: 5, hp: -10 } },
];

const EVENTS = {
  I27: inspection(),
  I28: inspection(),
  I29: inspection(),

  // 4 月：畢業紀念冊美編（照片三上已拍好）
  W01: [
    { scene: 'classroom', npc: 'tongxue' },
    n('w01a'),
    say('tongxue', '每個人要寫一段話給全班，一百字以內，四月二十號以前交給我。', { listen: 1 }),
    { q: { p: T('留言要在什麼時候以前交？', 'Lời nhắn phải nộp trước ngày nào?', 'Pesan harus diserahkan sebelum kapan?', 'When is the message due?', 'ข้อความต้องส่งก่อนวันไหน', 'မှတ်စုကို ဘယ်နေ့ မတိုင်ခင် အပ်ရမလဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '四月二十號', ok: 1 }, { zh: '四月十號' }, { zh: '五月二十號' }, { zh: '畢業典禮那天' },
    ], wrong: [say('tongxue', '再聽一次。')] } },
    { q: { p: T('你要在畢業紀念冊上寫什麼？', 'Bạn sẽ viết gì trong kỷ yếu?', 'Apa yang akan kamu tulis di buku tahunan?', 'What will you write in the yearbook?', 'คุณจะเขียนอะไรในหนังสือรุ่น', 'ဘွဲ့မှတ်တမ်းစာအုပ်မှာ ဘာရေးမလဲ။'), src: LIFE, opts: [
      { zh: '謝謝大家這三年的照顧。不管以後在哪裡，都希望我們常常聯絡。', ok: 1 },
      { zh: '終於可以離開這裡了。', r: [say('tongxue', '這樣寫，大家看了會難過喔。')] },
      { zh: '我不想寫。' },
      { zh: '記得還我錢。' },
    ], wrong: [say('tongxue', '寫一句祝福或感謝吧。')], ok: [say('tongxue', '寫得真好！')] } },
    say('tongxue', '我排版的時候發現有人的名字寫錯了，你可以幫我校對嗎？'),
    { poster: [['照片下面的名字', '陳道師、張師博、林老師'], ['', '請找出寫錯的字']], title: '校對' },
    { q: { p: T('哪一個名字寫錯了？', 'Tên nào bị viết sai?', 'Nama mana yang salah tulis?', 'Which names are misspelled?', 'ชื่อไหนเขียนผิด', 'ဘယ်နာမည်တွေ စာလုံးပေါင်းမှားလဲ။'), src: LIFE, opts: [
      { zh: '「陳道師」和「張師博」，應該是「陳導師」和「張師傅」', ok: 1 },
      { zh: '「林老師」' }, { zh: '都沒有錯' }, { zh: '只有「陳道師」' },
    ], wrong: [say('tongxue', '仔細看看每個字。')], ok: [say('tongxue', '還好你發現了！謝謝。')] } },
    { fx: { zh: 3, pop: 2 } },
  ],

  // 4 月：錄取通知（面試當月公布；須在高中畢業前通過 B1）
  W02: [
    { ifStatus: 'school', then: [
      { scene: 'classroom', npc: 'chen' },
      n('w02s'),
      { poster: [['錄取', '{dept}　→　科技大學（輪調專班）'], ['入學條件', '高中畢業前通過華語文能力測驗進階級（B1）'], ['報到', '七月到合作廠商報到，入住科大宿舍']], title: '錄取通知書' },
      { card: 'uniadmit' },
    ], else: [
      { scene: 'phone', npc: 'chen' },
      n('w02w'),
      { poster: [['錄取', '{dept}　→　科技大學（輪調專班）'], ['入學條件', '高中畢業前通過華語文能力測驗進階級（B1）'], ['報到', '七月到合作廠商報到，入住科大宿舍']], title: '錄取通知書（範例）' },
    ] },
    { q: { p: T('要怎樣才能入學？', 'Phải làm sao mới được nhập học?', 'Apa syarat agar bisa masuk?', 'What do you need to enroll?', 'ต้องทำอย่างไรจึงจะเข้าเรียนได้', 'ဘယ်လိုလုပ်မှ ကျောင်းဝင်ခွင့် ရမလဲ။'), src: LIFE, opts: [
      { zh: '高中畢業前通過 B1', ok: 1 }, { zh: '只要有錄取通知就好' }, { zh: '先買機車' }, { zh: '大學畢業前通過 A2' },
    ], wrong: [say('chen', '看「入學條件」那一行。')] } },
    say('chen', '照規定，畢業以前沒有通過 B1，就不能直升科大，要回國。所以華語一定不能放鬆。', { listen: 1 }),
    { q: { p: T('畢業以前沒通過 B1，會怎麼樣？', 'Nếu trước khi tốt nghiệp chưa đậu B1 thì sao?', 'Kalau belum lulus B1 sebelum wisuda, apa yang terjadi?', 'What happens if you haven’t passed B1 by graduation?', 'ถ้าไม่ผ่าน B1 ก่อนจบ จะเป็นอย่างไร', 'ကျောင်းမပြီးခင် B1 မအောင်ရင် ဘာဖြစ်မလဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '不能直升科大，要回國', ok: 1 }, { zh: '沒關係，大學再考' }, { zh: '多付學費就好' }, { zh: '換一間大學' },
    ], wrong: [say('chen', '再聽一次。')] } },
    { fx: { mood: 5, aff: { chen: 1 } } },
  ],

  // 4 月底：報名 5 月 B1（三下最後一場）
  W03: [
    { scene: 'classroom', npc: 'lin' },
    { ifv: 'tocflB1', then: [
      n('w03p'),
      { q: { p: T('同學說：「我閱讀很慢，怎麼辦？」你要怎麼回答？', 'Bạn nói: “Mình đọc rất chậm, làm sao đây?” Bạn trả lời thế nào?', 'Temanmu bilang: “Aku membaca lambat, bagaimana?” Apa jawabanmu?', 'A classmate says, “I read too slowly. What should I do?” How do you answer?', 'เพื่อนบอกว่า “ฉันอ่านช้ามาก ทำอย่างไรดี” คุณจะตอบว่าอะไร', 'သူငယ်ချင်းက “ငါ စာဖတ်တာ နှေးတယ်၊ ဘာလုပ်ရမလဲ” တဲ့၊ ဘယ်လို ဖြေမလဲ။'), src: LIFE, opts: [
        { zh: '先看問題，再找文章裡的關鍵字，不用每個字都看懂。', ok: 1 },
        { zh: '每個字都要查字典。' }, { zh: '不要看，用猜的。' }, { zh: '放棄閱讀，只做聽力。' },
      ], wrong: [], ok: [say('lin', '很好的建議！')] } },
      { fx: { pop: 3, aff: { lin: 1 } } },
    ], else: [
      n('w03f'),
      { poster: [['考試', '華語文能力測驗　進階級（B1）'], ['考試日期', '五月底'], ['報名截止', '四月三十日'], ['注意', '這是畢業前最後一場']], title: '報名通知' },
      { q: { p: T('這次報名什麼時候截止？', 'Lần này hạn đăng ký là khi nào?', 'Kapan batas pendaftaran kali ini?', 'When does registration close?', 'ครั้งนี้ปิดรับสมัครเมื่อไร', 'ဒီတစ်ခါ လျှောက်လွှာ ဘယ်တော့ ပိတ်မလဲ။'), src: LIFE, opts: [
        { zh: '四月三十日', ok: 1 }, { zh: '五月底', r: [say('lin', '五月底是考試的日子。')] }, { zh: '六月' }, { zh: '不用報名' },
      ], wrong: [say('lin', '看「報名截止」那一行。')] } },
      { q: { p: P.say, src: LIFE, opts: [
        { zh: '老師，我會報名。這個月每天放學後，可以來找您練習嗎？', ok: 1 },
        { zh: '我五月很忙，下次再考。', r: [say('lin', '沒有下次了！這是最後一場。')] },
        { zh: '考不過也沒關係吧。', r: [say('lin', '有關係，考不過就不能直升科大。')] },
        { zh: '我想請別人幫我考。' },
      ], wrong: [say('lin', '你要怎麼準備？')], ok: [say('lin', '當然可以！我們一起努力。')] } },
      { fx: { zh: 3, aff: { lin: 1 } } },
    ] },
  ],

  // 5 月：第一次報所得稅
  W04: [
    { scene: 'classroom', npc: 'chen' },
    n('w04a'),
    say('chen', '收入不高的話，算下來可能不用繳稅。可是憑單上如果有「扣繳稅額」，要申報，才能把稅退回來。', { listen: 1 }),
    { q: { p: T('憑單上有扣稅的人，要怎麼做才能退稅？', 'Người có tiền thuế bị khấu trừ phải làm gì để được hoàn thuế?', 'Yang pajaknya sudah dipotong harus bagaimana agar dikembalikan?', 'If tax was withheld, what must you do to get it back?', 'คนที่ถูกหักภาษีไว้ ต้องทำอย่างไรจึงจะได้ภาษีคืน', 'အခွန်နုတ်ခံရသူက ပြန်ရဖို့ ဘာလုပ်ရမလဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '要申報', ok: 1 }, { zh: '什麼都不用做' }, { zh: '打電話給老闆' }, { zh: '把憑單丟掉' },
    ], wrong: [say('chen', '再聽一次。')] } },
    { scene: 'classroom', npc: 'tongxue' },
    say('tongxue', '我的憑單上扣繳稅額是九百元。我不知道怎麼申報，你可以陪我去國稅局嗎？'),
    { q: { p: P.reply, src: LIFE, opts: [
      { zh: '好啊，記得帶居留證和扣繳憑單，還有你的存摺。', ok: 1 },
      { zh: '九百元很少，不要管了。', r: [say('tongxue', '可是那是我自己的錢耶。')] },
      { zh: '你把憑單給我，我幫你丟掉。' },
      { zh: '找網路上的代辦，給他你的密碼。', r: [say('chen', '個人資料和密碼不能給陌生人！有問題可以直接問國稅局。')] },
    ], wrong: [say('tongxue', '那要帶什麼？')], ok: [say('tongxue', '謝謝你！我們下課就去。')] } },
    { scene: 'office', npc: 'officer' },
    say('officer', '您好，請給我居留證和扣繳憑單。退稅要匯到哪個帳戶？', { listen: 1 }),
    { q: { p: T('辦理的人要哪些東西？', 'Nhân viên cần những gì?', 'Petugas meminta apa saja?', 'What does the clerk ask for?', 'เจ้าหน้าที่ขออะไรบ้าง', 'ဝန်ထမ်းက ဘာတွေ တောင်းလဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '居留證、扣繳憑單和帳戶', ok: 1 }, { zh: '護照和機票' }, { zh: '學生證和悠遊卡' }, { zh: '健保卡' },
    ], wrong: [say('officer', '居留證和扣繳憑單喔。')] } },
    n('w04b'),
    { fx: { zh: 3, pop: 1 } },
  ],

  // 5 月：大學到校說明會＋面試（甲組在校參加；乙組在實習，傳經驗給同學）
  W05: [
    { ifStatus: 'school', then: [
      { scene: 'stage', npc: 'prof' },
      n('w05a'),
      say('prof', '我們是輪調專班，一個星期四天到工廠實習，兩天在學校上課，一天休息。七月就要到合作廠商報到。', { listen: 1 }),
      { q: { p: T('什麼時候要到合作廠商報到？', 'Khi nào phải đến nhận việc ở doanh nghiệp liên kết?', 'Kapan harus melapor ke perusahaan mitra?', 'When do you report to the partner company?', 'ต้องไปรายงานตัวที่บริษัทคู่ความร่วมมือเมื่อไร', 'ပူးပေါင်းကုမ္ပဏီကို ဘယ်တော့ သတင်းပို့ရမလဲ။'), src: LIFE, kind: 'listen', opts: [
        { zh: '七月', ok: 1 }, { zh: '九月' }, { zh: '明年' }, { zh: '大學畢業以後' },
      ], wrong: [say('prof', '再聽一次。')] } },
      { scene: 'meeting', npc: 'prof' },
      say('prof', '請你用中文介紹一下自己，再說說為什麼想讀我們系。', { listen: 1 }),
      { q: { p: P.reply, src: LIFE, opts: [
        { zh: '老師好，我是{name}，{dept}三年級。實習的時候我發現自己對這方面很有興趣，所以想在科大學更專業的技術。', ok: 1 },
        { zh: '我是{name}，因為朋友都去。', r: [say('prof', '可以說說你自己的原因嗎？')] },
        { zh: '我不知道。' },
        { zh: '請看我的資料。' },
      ], wrong: [say('prof', '慢慢說，沒關係。')] } },
      say('prof', '一個星期四天實習、兩天上課，你覺得辛苦嗎？', { listen: 1 }),
      { q: { p: P.reply, src: LIFE, opts: [
        { zh: '一定會辛苦，可是我高中三年也是輪調，已經習慣安排時間了。', ok: 1 },
        { zh: '太辛苦了，我不想實習。', r: [say('prof', '……輪調專班一定要實習喔。')] },
        { zh: '不辛苦，我可以不睡覺。' },
        { zh: '我沒想過。' },
      ], wrong: [], ok: [say('prof', '很好，你的中文表達很清楚。')] } },
      n('w05b'),
      { card: 'uniadmit' },
      { fx: { zh: 5, mood: 10 } },
    ], else: [
      { scene: 'phone', npc: 'tongxue' },
      n('w05w'),
      { q: { p: P.reply, src: LIFE, opts: [
        { zh: '會問自我介紹、為什麼選這個系，還有上課聽不懂怎麼辦。說完整的句子，不要緊張！', ok: 1 },
        { zh: '我忘記了。', r: [say('tongxue', '拜託你再想一想嘛！')] },
        { zh: '不用準備，隨便說就好。', r: [say('tongxue', '真的嗎？我還是準備一下好了。')] },
        { zh: '已讀不回。' },
      ], wrong: [], ok: [say('tongxue', '謝謝！你是最好的學長姐！')] } },
      { fx: { pop: 3 } },
    ] },
  ],

  // 5 月底：B1 最後一場
  W06: [
    { ifv: 'tocflB1', then: [{ scene: 'street', npc: 'tongxue' }, n('w06h'), { fx: { pop: 2 } }], else: B1_LAST },
  ],

  // 6 月初：畢業典禮
  W07: [
    { scene: 'stage', npc: 'host' },
    n('w07a'),
    say('host', '請畢業生起立，向老師和家長鞠躬，謝謝他們三年來的照顧。', { listen: 1 }),
    { q: { p: T('主持人請畢業生做什麼？', 'Người dẫn chương trình mời học sinh tốt nghiệp làm gì?', 'Pembawa acara meminta lulusan melakukan apa?', 'What does the host ask the graduates to do?', 'พิธีกรให้ผู้สำเร็จการศึกษาทำอะไร', 'အခမ်းအနားမှူးက ကျောင်းဆင်းတွေကို ဘာလုပ်ခိုင်းလဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '起立鞠躬，謝謝老師和家長', ok: 1 }, { zh: '上台唱歌' }, { zh: '拍照' }, { zh: '回教室' },
    ], wrong: [say('host', '再聽一次。')] } },
    { card: 'diploma' },
    { scene: 'phone', npc: 'mama' },
    say('mama', '我們都看到了！你穿畢業服好帥、好漂亮！'),
    { q: { p: P.reply, src: LIFE, opts: [
      { zh: '謝謝媽媽！沒有你們的支持，我不可能走到今天。', ok: 1 },
      { zh: '好累，我要掛了。', r: [say('mama', '……好吧，那你先休息。')] },
      { zh: '還好啦。' },
      { zh: '你們怎麼沒有來？' },
    ], wrong: [], ok: [say('mama', '我們以你為榮。')] } },
    { scene: 'campus', npc: 'chen' },
    n('w07b'),
    { q: { p: T('你要在陳導師的紀念冊上寫什麼？', 'Bạn sẽ viết gì vào kỷ yếu của thầy Trần?', 'Apa yang akan kamu tulis di buku tahunan Pak Chen?', 'What will you write in Mr. Chen’s yearbook?', 'คุณจะเขียนอะไรในหนังสือรุ่นของครูเฉิน', 'ဆရာချန်ရဲ့ စာအုပ်မှာ ဘာရေးမလဲ။'), src: LIFE, opts: [
      { zh: '老師，謝謝您三年來的教導。我會記得您說的：遇到問題，當面說清楚。', ok: 1 },
      { zh: '老師再見。', ok: 1 },
      { zh: '老師，您的作業太多了。', r: [say('chen', '哈哈，以後你就會懂了。')] },
      { zh: '我不知道要寫什麼。' },
    ], wrong: [], ok: [say('chen', '畢業快樂！以後有問題，還是可以來找我。')] } },
    { card: 'yearbook' },
    { fx: { mood: 20, aff: { chen: 2 } } },
  ],

  // 6 月：高中實習結束（交接、歸還識別證、最後一份薪水）
  W08: [
    { scene: 'work', npc: 'zhang' },
    { ifStatus: 'work', then: [
      n('w08w'),
      say('zhang', '最後一天要做三件事：把工作交接給學弟妹、識別證還給人事室、確認最後一份薪水匯到哪個帳戶。', { listen: 1 }),
      { q: { p: T('最後一天不用做哪一件事？', 'Ngày cuối cùng KHÔNG cần làm việc nào?', 'Hal mana yang TIDAK perlu dilakukan di hari terakhir?', 'Which is NOT one of the last-day tasks?', 'วันสุดท้ายไม่ต้องทำเรื่องไหน', 'နောက်ဆုံးနေ့မှာ ဘယ်ဟာ မလုပ်ရဘူးလဲ။'), src: LIFE, kind: 'listen', opts: [
        { zh: '請大家吃大餐', ok: 1 }, { zh: '交接工作' }, { zh: '還識別證' }, { zh: '確認薪水帳戶' },
      ], wrong: [say('zhang', '再聽一次。')] } },
    ], else: [
      n('w08s'),
    ] },
    say('zhang', '你剛來的時候，連「安全帽」都不會說。現在你可以教學弟妹了。'),
    { q: { p: P.say, src: LIFE, opts: [
      { zh: '師傅，謝謝您這三年教我這麼多。到了科大，我也會好好努力。', ok: 1 },
      { zh: '終於不用來了！', r: [say('zhang', '……哈哈，你還是一樣直接。')] },
      { zh: '再見。' },
      { zh: '可以給我加薪嗎？' },
    ], wrong: [], ok: [say('zhang', '有空回來看看我們。加油！')] } },
    { fx: { mood: 10, aff: { zhang: 2 }, skill: 3 } },
  ],

  // 6 月底：最後一天上課、搬出宿舍、準備去科大
  W09: [
    { scene: 'dorm', npc: 'ayi' },
    n('w09a'),
    say('ayi', '房間很乾淨，鑰匙收到了。去了科大，要記得照顧好自己喔！'),
    { ifv: 'tocflB1', then: [
      { scene: 'office', npc: 'chen' },
      say('chen', '七月到科大的合作廠商報到，住科大的宿舍。居留證和護照一定要帶好。', { listen: 1 }),
      { q: { p: T('七月要做什麼？', 'Tháng Bảy phải làm gì?', 'Apa yang harus dilakukan bulan Juli?', 'What happens in July?', 'เดือนกรกฎาคมต้องทำอะไร', 'ဇူလိုင်မှာ ဘာလုပ်ရမလဲ။'), src: LIFE, kind: 'listen', opts: [
        { zh: '到合作廠商報到，住科大宿舍', ok: 1 }, { zh: '回國放暑假' }, { zh: '再考一次 B1' }, { zh: '回高中上課' },
      ], wrong: [say('chen', '再聽一次。')] } },
    ], else: [
      { scene: 'office', npc: 'chen' },
      say('chen', '回國的機票，學校會幫你確認。護照和居留證要帶好。'),
    ] },
    { fx: { tidy: 5, mood: 5 } },
  ],

  // 隨機：二手課本賣給學弟妹
  R27: [
    { scene: 'room', npc: 'newbie' },
    n('r27a'),
    { q: { p: Q_DO, src: LIFE, opts: [
      { zh: '這些我用不到了，送給你吧！裡面有我寫的筆記。', ok: 1, then: [say('newbie', '真的嗎？謝謝學長姐！'), { fx: { pop: 3 } }] },
      { zh: '一本五十塊，比買新的便宜很多。', ok: 1, then: [say('newbie', '好，我全部都要！'), { fx: { money: 200, pop: 1 } }] },
      { zh: '一本一千塊。', r: [say('newbie', '比新的還貴耶……')] },
      { zh: '我要丟掉，不給你。', r: [say('newbie', '……好吧。'), { fx: { pop: -1 } }] },
    ], wrong: [], ok: [] } },
  ],

  // 隨機：搬出前的大型垃圾
  R28: [
    { scene: 'recycle', npc: 'ayi' },
    n('r28a'),
    { q: { p: Q_DO, src: LIFE, opts: [
      { zh: '問宿舍阿姨大型垃圾要怎麼丟。', ok: 1, then: [say('ayi', '桌子這種大型家具要先預約清運；電風扇可以放回收區。'), { fx: { tidy: 5 } }] },
      { zh: '晚上偷偷放在路邊。', r: [say('ayi', '亂丟大型垃圾會被罰錢喔！要先預約清運。'), { fx: { tidy: -5 } }] },
      { zh: '留在房間裡，給下一個人用。', r: [say('ayi', '壞掉的東西不能留在房間喔。')] },
      { zh: '丟進一般垃圾桶。' },
    ], wrong: [], ok: [] } },
  ],
};

module.exports = { N, EVENTS };

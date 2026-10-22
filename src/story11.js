// 第十一章劇本資料（三年級 1–3 月）：扣繳憑單（5 月報稅要用）、三下日程與志願表（只有資訊科要填）、
// 學長回校分享（科大也是輪調專班，型態 421：4 天到廠實習、2 天在校上課、1 天休息；另外打工要先申請工作許可）、春節照顧學弟妹、
// 僑生的在台監護人預設是校長（志願表監護人欄由學校處理，志願順序仍要和家人討論）、
// B1 報名 3 月場（三下只有 3 月、5 月兩場）、實習年度考核、準備面試、
// 大學到校說明會＋面試（3 月、5 月各一次，在學校的那一組參加；實習組收到同學的 LINE）、3 月 B1 考試。
// 輪調：1–2 月甲組在校、乙組實習；3–4 月甲組實習、乙組在校（statusOf 的三下分段）。
// 隨機事件：學弟借錢（找導師、學校急難救助）、宿舍停水公告。
// 詞彙：B1 為主（憑單、給付、扣繳、所得、報稅、退稅、志願、順序、銜接、截止、許可、違法、限制、
//       留宿、登記、照顧、考核、出勤、態度、加強、建議、部門、表達、輪調專班、監護人、獎學金、簡章、儲水、維修、急難）。
const { T, P } = require('./story.js');
const S3 = require('./story3.js');

const N = {
  u01a: T('一月，宿舍阿姨拿給你一封公司寄來的信。信封上寫著：「各類所得扣繳暨免扣繳憑單」。', 'Tháng Một, cô quản lý ký túc xá đưa bạn một lá thư công ty gửi. Trên phong bì ghi: “Giấy chứng nhận khấu trừ thuế thu nhập”.', 'Januari, bibi asrama memberimu surat dari perusahaan. Di amplopnya tertulis: “Bukti potong pajak penghasilan”.', 'January. The dorm auntie hands you a letter from the company. The envelope says: “Withholding and Non-withholding Tax Statement.”', 'เดือนมกราคม ป้าหอพักยื่นจดหมายจากบริษัทให้คุณ บนซองเขียนว่า “ใบรับรองการหักภาษีเงินได้”', 'ဇန်နဝါရီလ၊ အဆောင်အန်တီက ကုမ္ပဏီက ပို့တဲ့ စာတစ်စောင် ပေးတယ်။ စာအိတ်ပေါ်မှာ “ဝင်ငွေခွန် နုတ်ယူမှု အထောက်အထား” လို့ ရေးထားတယ်။'),
  u01b: T('陳導師說：憑單上如果有扣稅，五月報稅以後，有可能退回來。所以每一張都要收好，不要丟掉。', 'Thầy Trần nói: nếu trên giấy có ghi đã khấu trừ thuế, sau khi khai thuế vào tháng Năm có thể được hoàn lại. Vì vậy giấy nào cũng phải giữ kỹ, đừng vứt.', 'Pak Chen bilang: kalau di bukti potong ada pajak yang dipotong, setelah lapor pajak bulan Mei mungkin bisa dikembalikan. Jadi setiap lembar harus disimpan, jangan dibuang.', 'Mr. Chen says: if tax was withheld, you may get it back after filing in May. So keep every statement — don’t throw any away.', 'ครูเฉินบอกว่า: ถ้าในใบมีการหักภาษีไว้ หลังยื่นภาษีเดือนพฤษภาคมอาจได้เงินคืน ดังนั้นต้องเก็บทุกใบไว้ อย่าทิ้ง', 'ဆရာချန်က စာရွက်ပေါ်မှာ အခွန်နုတ်ထားရင် မေလ အခွန်ဆောင်ပြီးနောက် ပြန်ရနိုင်တယ်တဲ့။ ဒါကြောင့် စာရွက်တိုင်း သေချာသိမ်း၊ မလွှင့်ပစ်နဲ့။'),
  u02a: T('一月中，陳導師把三年級下學期的重要日程發給大家。', 'Giữa tháng Một, thầy Trần phát lịch trình quan trọng của học kỳ 2 lớp 12 cho cả lớp.', 'Pertengahan Januari, Pak Chen membagikan jadwal penting semester kedua kelas 12.', 'Mid-January. Mr. Chen hands out the key dates for the second semester of Year 3.', 'กลางเดือนมกราคม ครูเฉินแจกกำหนดการสำคัญของภาคเรียนที่สองปีสามให้ทุกคน', 'ဇန်နဝါရီလလယ်၊ ဆရာချန်က တတိယနှစ် ဒုတိယစာသင်နှစ်ဝက်ရဲ့ အရေးကြီးတဲ့ အချိန်ဇယားကို ဝေပေးတယ်။'),
  u03a: T('一月底，已經在讀科大的學長回學校分享。他一邊讀大學，一邊在工廠打工。', 'Cuối tháng Một, anh khóa trên đang học đại học khoa học kỹ thuật về trường chia sẻ. Anh vừa học đại học vừa làm thêm ở nhà máy.', 'Akhir Januari, kakak kelas yang sudah kuliah di universitas teknologi datang ke sekolah untuk berbagi. Dia kuliah sambil kerja paruh waktu di pabrik.', 'Late January. A senior who’s now at the university of technology comes back to share. He studies and works part-time at a factory.', 'ปลายเดือนมกราคม รุ่นพี่ที่เรียนมหาวิทยาลัยเทคโนโลยีอยู่กลับมาแบ่งปันประสบการณ์ เขาเรียนไปด้วยทำงานพิเศษที่โรงงานไปด้วย', 'ဇန်နဝါရီလကုန်၊ နည်းပညာတက္ကသိုလ် တက်နေတဲ့ အစ်ကိုကြီး ကျောင်းကို ပြန်လာပြီး အတွေ့အကြုံ မျှဝေတယ်။ သူက တက္ကသိုလ်တက်ရင်း စက်ရုံမှာ အချိန်ပိုင်း လုပ်နေတယ်။'),
  u03b: T('學長說，大學的課比高中難，可是老師和同學都很願意幫忙。你對大學生活多了一點想像。', 'Anh nói môn học đại học khó hơn trung học, nhưng thầy cô và bạn bè đều sẵn lòng giúp. Bạn hình dung rõ hơn một chút về cuộc sống đại học.', 'Dia bilang kuliah lebih sulit dari SMA, tapi dosen dan teman-teman mau membantu. Kamu mulai bisa membayangkan kehidupan kampus.', 'He says university classes are harder than high school, but teachers and classmates are happy to help. You can picture university life a little better now.', 'เขาบอกว่าวิชาในมหาวิทยาลัยยากกว่ามัธยม แต่อาจารย์และเพื่อนก็ยินดีช่วย คุณเริ่มนึกภาพชีวิตมหาวิทยาลัยออกมากขึ้น', 'တက္ကသိုလ်ဘာသာတွေက အထက်တန်းထက် ခက်ပေမဲ့ ဆရာတွေ၊ သူငယ်ချင်းတွေက ကူညီချင်ကြတယ်တဲ့။ တက္ကသိုလ်ဘဝကို နည်းနည်း ပိုမြင်လာတယ်။'),
  u04a: T('春節到了。很多一年級的學弟妹第一次在台灣過年，有人一直看手機，好像很想家。', 'Tết đến rồi. Nhiều em lớp 10 lần đầu đón Tết ở Đài Loan, có em cứ nhìn điện thoại mãi, có vẻ rất nhớ nhà.', 'Imlek tiba. Banyak adik kelas 10 merayakan Imlek pertama di Taiwan. Ada yang terus melihat HP, sepertinya sangat rindu rumah.', 'Lunar New Year. Many first-years are spending their first New Year in Taiwan. Some keep staring at their phones — they look homesick.', 'ตรุษจีนมาถึงแล้ว น้องปีหนึ่งหลายคนฉลองปีใหม่ที่ไต้หวันเป็นครั้งแรก บางคนเอาแต่ดูมือถือ ดูเหมือนคิดถึงบ้านมาก', 'တရုတ်နှစ်သစ် ရောက်ပြီ။ ပထမနှစ် ညီငယ်ညီမငယ် အများအပြားက ထိုင်ဝမ်မှာ ပထမဆုံး နှစ်သစ်ကူးကြတယ်။ တချို့က ဖုန်းကိုပဲ ကြည့်နေပြီး အိမ်ကို အရမ်းလွမ်းပုံရတယ်။'),
  u04b: T('三年前，你也是這樣，第一次在台灣過年。現在，換你照顧學弟妹了。', 'Ba năm trước, bạn cũng như vậy, lần đầu đón Tết ở Đài Loan. Bây giờ đến lượt bạn chăm sóc các em.', 'Tiga tahun lalu, kamu juga begitu, Imlek pertama di Taiwan. Sekarang giliranmu menjaga adik-adik kelas.', 'Three years ago, that was you — your first New Year in Taiwan. Now it’s your turn to look after the younger students.', 'สามปีก่อน คุณก็เป็นแบบนี้ ฉลองปีใหม่ที่ไต้หวันครั้งแรก ตอนนี้ถึงตาคุณดูแลน้อง ๆ แล้ว', 'သုံးနှစ်အရင်က ကိုယ်လည်း ဒီလိုပဲ ထိုင်ဝမ်မှာ ပထမဆုံး နှစ်သစ်ကူးခဲ့တယ်။ အခု ညီငယ်ညီမငယ်တွေကို ကိုယ်က စောင့်ရှောက်ရမယ့် အလှည့်ပါ။'),
  u05p: T('你已經通過 B1 了。三月場快到了，林老師請你幫要考試的同學練習口說。', 'Bạn đã đậu B1 rồi. Kỳ thi tháng Ba sắp đến, cô Lâm nhờ bạn giúp các bạn sắp thi luyện nói.', 'Kamu sudah lulus B1. Ujian bulan Maret sudah dekat, Bu Lin memintamu membantu teman-teman yang akan ujian berlatih berbicara.', 'You’ve already passed B1. The March exam is coming, so Ms. Lin asks you to help classmates practice speaking.', 'คุณผ่าน B1 แล้ว รอบเดือนมีนาคมใกล้มาถึง ครูหลินขอให้คุณช่วยเพื่อนที่จะสอบฝึกพูด', 'B1 အောင်ပြီးပြီ။ မတ်လ စာမေးပွဲ နီးလာပြီမို့ ဆရာမလင်က စာမေးပွဲဖြေမယ့် သူငယ်ချင်းတွေကို စကားပြော လေ့ကျင့်ပေးဖို့ ပြောတယ်။'),
  u05a: T('你還沒通過 B1。三年級下學期只剩三月和五月兩場，林老師說這次一定要報名。', 'Bạn chưa đậu B1. Học kỳ 2 lớp 12 chỉ còn hai kỳ thi tháng Ba và tháng Năm, cô Lâm nói lần này nhất định phải đăng ký.', 'Kamu belum lulus B1. Semester kedua kelas 12 hanya tinggal dua ujian, Maret dan Mei. Bu Lin bilang kali ini harus mendaftar.', 'You haven’t passed B1 yet. Only two exams are left this semester — March and May. Ms. Lin says you must register this time.', 'คุณยังไม่ผ่าน B1 ภาคเรียนที่สองปีสามเหลือแค่สองรอบ คือมีนาคมกับพฤษภาคม ครูหลินบอกว่าครั้งนี้ต้องสมัครให้ได้', 'B1 မအောင်သေးဘူး။ တတိယနှစ် ဒုတိယစာသင်နှစ်ဝက်မှာ မတ်လနဲ့ မေလ နှစ်ကြိမ်ပဲ ကျန်တော့တယ်။ ဒီတစ်ခါ မဖြစ်မနေ လျှောက်ရမယ်လို့ ဆရာမလင်က ပြောတယ်။'),
  u06w: T('二月底，公司辦年度考核。張師傅拿著考核表，找你面談。', 'Cuối tháng Hai, công ty đánh giá cuối năm. Thầy Trương cầm phiếu đánh giá, gọi bạn nói chuyện.', 'Akhir Februari, perusahaan mengadakan penilaian tahunan. Pak Zhang membawa formulir penilaian dan mengajakmu bicara.', 'Late February: annual reviews at the company. Master Zhang brings your review form and calls you in.', 'ปลายเดือนกุมภาพันธ์ บริษัทจัดประเมินประจำปี อาจารย์จางถือแบบประเมินมาคุยกับคุณ', 'ဖေဖော်ဝါရီလကုန်၊ ကုမ္ပဏီက နှစ်ပတ်လည် အကဲဖြတ်တယ်။ ဆရာကြီးကျန်းက အကဲဖြတ်စာရွက် ကိုင်ပြီး တွေ့ဆုံဖို့ ခေါ်တယ်။'),
  u06s: T('二月底，雖然這兩個月你在學校上課，公司還是請你回去做年度考核面談。', 'Cuối tháng Hai, dù hai tháng nay bạn học ở trường, công ty vẫn mời bạn về để nói chuyện đánh giá cuối năm.', 'Akhir Februari, meski dua bulan ini kamu belajar di sekolah, perusahaan tetap memintamu datang untuk wawancara penilaian tahunan.', 'Late February. Even though you’ve been at school these two months, the company asks you to come in for your annual review.', 'ปลายเดือนกุมภาพันธ์ ถึงสองเดือนนี้คุณเรียนอยู่ที่โรงเรียน บริษัทก็ยังเรียกให้กลับไปคุยเรื่องการประเมินประจำปี', 'ဖေဖော်ဝါရီလကုန်၊ ဒီနှစ်လ ကျောင်းမှာ စာသင်နေပေမဲ့ ကုမ္ပဏီက နှစ်ပတ်လည် အကဲဖြတ် တွေ့ဆုံဖို့ ပြန်လာခိုင်းတယ်။'),
  u09a: T('三月，大學老師就要來學校了。你拿出十二月寫的中文自傳，想再改得更好。', 'Tháng Ba, thầy cô đại học sắp đến trường. Bạn lấy bản tự giới thiệu viết hồi tháng Mười Hai ra, muốn sửa cho hay hơn.', 'Maret, dosen universitas akan segera datang ke sekolah. Kamu mengeluarkan otobiografi yang kamu tulis bulan Desember dan ingin memperbaikinya.', 'March. University teachers are coming to school soon. You take out the autobiography you wrote in December and want to make it better.', 'เดือนมีนาคม อาจารย์มหาวิทยาลัยกำลังจะมาที่โรงเรียน คุณหยิบอัตชีวประวัติที่เขียนไว้เดือนธันวาคมออกมา อยากแก้ให้ดีขึ้น', 'မတ်လ၊ တက္ကသိုလ်ဆရာတွေ ကျောင်းကို လာတော့မယ်။ ဒီဇင်ဘာမှာ ရေးခဲ့တဲ့ တရုတ်လို ကိုယ်ရေးအကျဉ်းကို ထုတ်ပြီး ပိုကောင်းအောင် ပြင်ချင်တယ်။'),
  u07a: T('三月，大學的老師到學校來了。上午在禮堂辦說明會，下午進行面試。', 'Tháng Ba, thầy cô đại học đến trường. Buổi sáng có buổi giới thiệu ở hội trường, buổi chiều phỏng vấn.', 'Maret, dosen universitas datang ke sekolah. Pagi ada sesi informasi di aula, siang wawancara.', 'March. The university teachers arrive. Information session in the hall in the morning, interviews in the afternoon.', 'เดือนมีนาคม อาจารย์มหาวิทยาลัยมาที่โรงเรียน ช่วงเช้าจัดบรรยายแนะนำที่หอประชุม ช่วงบ่ายสัมภาษณ์', 'မတ်လ၊ တက္ကသိုလ်ဆရာတွေ ကျောင်းကို ရောက်လာပြီ။ မနက်ပိုင်း ခန်းမမှာ မိတ်ဆက်ပွဲ၊ နေ့လယ်ပိုင်း အင်တာဗျူး။'),
  u07b: T('下午，輪到你面試了。你深呼吸，敲了敲門，走進會議室。', 'Buổi chiều, đến lượt bạn phỏng vấn. Bạn hít thở sâu, gõ cửa rồi bước vào phòng họp.', 'Siang, giliranmu wawancara. Kamu menarik napas dalam, mengetuk pintu, lalu masuk ke ruang rapat.', 'Afternoon. It’s your turn. You take a deep breath, knock, and walk into the meeting room.', 'ช่วงบ่าย ถึงคิวคุณสัมภาษณ์ คุณหายใจลึก ๆ เคาะประตู แล้วเดินเข้าห้องประชุม', 'နေ့လယ်ပိုင်း ကိုယ့်အလှည့် ရောက်ပြီ။ အသက်ပြင်းပြင်းရှူ၊ တံခါးခေါက်ပြီး အစည်းအဝေးခန်းထဲ ဝင်သွားတယ်။'),
  u07c: T('走出會議室，你發現手心都是汗，可是心裡很輕鬆。', 'Bước ra khỏi phòng họp, bạn thấy lòng bàn tay đầy mồ hôi, nhưng trong lòng rất nhẹ nhõm.', 'Keluar dari ruang rapat, telapak tanganmu penuh keringat, tapi hatimu lega.', 'Walking out, your palms are sweaty — but you feel light.', 'เดินออกจากห้องประชุม คุณพบว่ามือเปียกเหงื่อ แต่ใจโล่งมาก', 'အခန်းထဲက ထွက်လာတော့ လက်ဖဝါးတွေ ချွေးတွေနဲ့ ရွှဲနေပေမဲ့ စိတ်ထဲ ပေါ့ပါးသွားတယ်။'),
  u07w: T('三月，你在工廠實習。午休的時候，在學校的同學傳來 LINE：大學老師今天來了。', 'Tháng Ba, bạn đang thực tập ở nhà máy. Giờ nghỉ trưa, bạn ở trường nhắn LINE: hôm nay thầy cô đại học đã đến.', 'Maret, kamu magang di pabrik. Saat istirahat siang, teman yang di sekolah mengirim LINE: dosen universitas datang hari ini.', 'March. You’re interning at the factory. At lunch, a classmate at school sends a LINE message: the university teachers came today.', 'เดือนมีนาคม คุณฝึกงานอยู่ที่โรงงาน ตอนพักเที่ยง เพื่อนที่อยู่โรงเรียนส่ง LINE มาว่า วันนี้อาจารย์มหาวิทยาลัยมาแล้ว', 'မတ်လ၊ စက်ရုံမှာ အလုပ်သင်နေတယ်။ နေ့လယ်စာ နားချိန်မှာ ကျောင်းမှာရှိတဲ့ သူငယ်ချင်းက LINE ပို့တယ်၊ ဒီနေ့ တက္ကသိုလ်ဆရာတွေ ရောက်လာတယ်တဲ့။'),
  u08a: T('三月中，華語文能力測驗的日子。這是三年級下學期的第一場，你提早一個小時出門。', 'Giữa tháng Ba, ngày thi TOCFL. Đây là kỳ thi đầu tiên của học kỳ 2 lớp 12, bạn ra khỏi nhà sớm một tiếng.', 'Pertengahan Maret, hari ujian TOCFL. Ini ujian pertama semester kedua kelas 12. Kamu berangkat satu jam lebih awal.', 'Mid-March: TOCFL day, the first of the semester. You leave an hour early.', 'กลางเดือนมีนาคม วันสอบ TOCFL นี่เป็นรอบแรกของภาคเรียนที่สองปีสาม คุณออกจากหอเร็วกว่าปกติหนึ่งชั่วโมง', 'မတ်လလယ်၊ TOCFL စာမေးပွဲနေ့။ တတိယနှစ် ဒုတိယစာသင်နှစ်ဝက်ရဲ့ ပထမဆုံးအကြိမ်မို့ တစ်နာရီစောပြီး ထွက်လာတယ်။'),
  u08p: T('一個月後，成績出來了：你通過了進階級（B1）！升學的條件準備好了。', 'Một tháng sau có kết quả: bạn đã đậu cấp B1! Điều kiện học lên đã sẵn sàng.', 'Sebulan kemudian hasilnya keluar: kamu lulus B1! Syarat melanjutkan studi sudah terpenuhi.', 'A month later: you passed B1! You’ve met the requirement for university.', 'หนึ่งเดือนต่อมาผลออก: คุณผ่าน B1! เงื่อนไขการเรียนต่อพร้อมแล้ว', 'တစ်လအကြာ ရလဒ်ထွက်တယ်၊ B1 အောင်ပြီ! ဆက်တက်ဖို့ လိုအပ်ချက် ပြည့်ပြီ။'),
  u08f: T('這次還差一點。五月還有最後一次機會，林老師會幫你再報名一次。', 'Lần này vẫn thiếu một chút. Tháng Năm còn cơ hội cuối cùng, cô Lâm sẽ giúp bạn đăng ký lại.', 'Kali ini masih kurang sedikit. Bulan Mei masih ada kesempatan terakhir, Bu Lin akan membantumu mendaftar lagi.', 'Still a little short. There’s one last chance in May — Ms. Lin will register you again.', 'ครั้งนี้ยังขาดอีกนิด เดือนพฤษภาคมยังมีโอกาสสุดท้าย ครูหลินจะช่วยสมัครให้อีกครั้ง', 'ဒီတစ်ခါလည်း နည်းနည်းလိုသေးတယ်။ မေလမှာ နောက်ဆုံးအခွင့်အရေး ရှိသေးတယ်၊ ဆရာမလင်က ထပ်လျှောက်ပေးမယ်။'),
  u08h: T('你已經通過 B1 了。考試那天，你在宿舍交誼廳，陪一年級的學弟妹練習 A2 的聽力。', 'Bạn đã đậu B1 rồi. Ngày thi, bạn ở phòng sinh hoạt ký túc xá, cùng các em lớp 10 luyện nghe A2.', 'Kamu sudah lulus B1. Pada hari ujian, kamu di ruang santai asrama menemani adik kelas 10 berlatih menyimak A2.', 'You’ve already passed B1. On exam day, you’re in the dorm lounge helping first-years practice A2 listening.', 'คุณผ่าน B1 แล้ว วันสอบคุณอยู่ที่ห้องนั่งเล่นหอพัก ช่วยน้องปีหนึ่งฝึกฟัง A2', 'B1 အောင်ပြီးပြီ။ စာမေးပွဲနေ့မှာ အဆောင် ဧည့်ခန်းမှာ ပထမနှစ် ညီငယ်ညီမငယ်တွေနဲ့ A2 နားထောင်ပိုင်း လေ့ကျင့်ပေးတယ်။'),
  r25a: T('晚上，一年級的學弟來找你：「學長姐，我這個月的錢不夠了，可以借我五千塊嗎？」', 'Buổi tối, một em lớp 10 đến tìm bạn: “Anh chị ơi, tháng này em hết tiền rồi, cho em mượn năm nghìn được không?”', 'Malam hari, adik kelas 10 datang: “Kak, uangku bulan ini tidak cukup. Boleh pinjam lima ribu?”', 'Evening. A first-year comes to you: “I’ve run out of money this month. Could you lend me five thousand?”', 'ตอนกลางคืน น้องปีหนึ่งมาหาคุณ: “พี่ครับ เดือนนี้เงินไม่พอแล้ว ขอยืมห้าพันได้ไหม”', 'ညဘက် ပထမနှစ် ညီငယ်တစ်ယောက် လာရှာတယ်၊ “အစ်ကို/အစ်မ၊ ဒီလ ပိုက်ဆံမလောက်တော့ဘူး၊ ငါးထောင် ချေးလို့ရမလား” တဲ့။'),
  r25b: T('借錢以前要想清楚。學弟如果真的有困難，導師和學校比較能幫忙，學校也有急難救助可以申請。', 'Trước khi cho mượn tiền phải suy nghĩ kỹ. Nếu em thật sự gặp khó khăn, thầy chủ nhiệm và nhà trường giúp được nhiều hơn, trường cũng có quỹ hỗ trợ khẩn cấp.', 'Sebelum meminjamkan uang, pikirkan baik-baik. Kalau adik kelas benar-benar kesulitan, wali kelas dan sekolah lebih bisa membantu, sekolah juga punya bantuan darurat.', 'Think before lending money. If he’s really in trouble, the homeroom teacher and the school can help more — the school has emergency aid he can apply for.', 'ก่อนให้ยืมเงินต้องคิดให้ดี ถ้าน้องลำบากจริง ครูประจำชั้นและโรงเรียนช่วยได้มากกว่า โรงเรียนก็มีเงินช่วยเหลือฉุกเฉินให้สมัคร', 'ငွေမချေးခင် သေချာစဉ်းစားပါ။ ညီငယ် တကယ်အခက်အခဲရှိရင် အတန်းပိုင်ဆရာနဲ့ ကျောင်းက ပိုကူညီနိုင်တယ်၊ ကျောင်းမှာ အရေးပေါ် ထောက်ပံ့ငွေလည်း လျှောက်လို့ရတယ်။'),
  r26a: T('宿舍門口貼了一張新的公告，很多人站在那裡看。', 'Trước cửa ký túc xá dán một thông báo mới, nhiều người đứng đọc.', 'Di pintu asrama ada pengumuman baru, banyak orang berdiri membacanya.', 'A new notice is posted at the dorm entrance. A crowd is reading it.', 'ที่หน้าประตูหอพักมีประกาศใหม่ติดอยู่ หลายคนยืนอ่าน', 'အဆောင်ဝမှာ ကြေညာချက်အသစ် ကပ်ထားပြီး လူအများကြီး ရပ်ဖတ်နေကြတယ်။'),
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

const EVENTS = {
  I24: inspection(),
  I25: inspection(),
  I26: inspection(),

  // 1 月：扣繳憑單（5 月報稅要用）
  U01: [
    { scene: 'dorm', npc: 'ayi' },
    n('u01a'),
    { poster: [['所得類別', '薪資'], ['給付總額', '312,000 元'], ['扣繳稅額', '0 元'], ['給付單位', '實習公司'], ['所屬年度', '去年']], title: '扣繳憑單' },
    { q: { p: T('去年公司一共給你多少薪水？', 'Năm ngoái công ty trả cho bạn tổng cộng bao nhiêu lương?', 'Berapa total gaji dari perusahaan tahun lalu?', 'How much did the company pay you in total last year?', 'ปีที่แล้วบริษัทจ่ายเงินเดือนให้คุณทั้งหมดเท่าไร', 'မနှစ်က ကုမ္ပဏီက လစာ စုစုပေါင်း ဘယ်လောက်ပေးခဲ့လဲ။'), src: LIFE, opts: [
      { zh: '三十一萬兩千元', ok: 1 }, { zh: '三千一百二十元' }, { zh: '零元', r: [say('ayi', '零元是「扣繳稅額」喔，不是薪水。')] }, { zh: '三百一十二元' },
    ], wrong: [say('ayi', '看「給付總額」那一行。')] } },
    say('ayi', '這張很重要，五月報稅的時候要用，不要丟掉喔。', { listen: 1 }),
    { q: { p: T('這張憑單什麼時候要用？', 'Khi nào phải dùng giấy này?', 'Kapan bukti potong ini dipakai?', 'When will you need this statement?', 'ใบนี้ต้องใช้เมื่อไร', 'ဒီစာရွက်ကို ဘယ်တော့ သုံးရမလဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '五月報稅的時候', ok: 1 }, { zh: '辦護照的時候' }, { zh: '去看醫生的時候' }, { zh: '不用，可以丟掉' },
    ], wrong: [say('ayi', '再聽一次。')] } },
    n('u01b'),
    { card: 'taxslip' },
    { fx: { zh: 3 } },
  ],

  // 1 月中：三下日程；只有資訊科要填志願表（3 月說明會前）
  U02: [
    { scene: 'classroom', npc: 'chen' },
    n('u02a'),
    { poster: [['三月', '大學說明會＋面試（在學校的那一組參加）'], ['五月', '大學說明會＋面試（另一組參加）'], ['華語文檢定 B1', '三月、五月各一場'], ['資訊科', '三月說明會以前交志願表'], ['六月初', '畢業典禮（上課到六月底）']], title: '三下重要日程' },
    { q: { p: T('大學為什麼要來學校兩次？', 'Tại sao trường đại học phải đến hai lần?', 'Mengapa universitas datang ke sekolah dua kali?', 'Why do the universities come twice?', 'ทำไมมหาวิทยาลัยต้องมาที่โรงเรียนสองครั้ง', 'တက္ကသိုလ်တွေ ဘာကြောင့် ကျောင်းကို နှစ်ခါလာရတာလဲ။'), src: LIFE, opts: [
      { zh: '因為要輪調，兩組輪流在學校', ok: 1 }, { zh: '因為第一次沒有人來' }, { zh: '因為要考兩次試' }, { zh: '因為老師忘記了' },
    ], wrong: [say('chen', '想想看，三月和五月在學校的是不是同一組？')] } },
    { ifDept: '資訊科', then: [
      say('chen', '資訊科銜接兩所以上的大學，所以要填志願表，排出你想去的順序。', { listen: 1 }),
      { poster: [['第一志願', '甲科技大學　資訊工程系'], ['第二志願', '乙科技大學　資訊管理系'], ['簽名', '學生、在台監護人（校長）'], ['截止', '二月底交給導師']], title: '志願表' },
      { q: { p: T('志願表要誰簽名？', 'Phiếu nguyện vọng cần ai ký tên?', 'Siapa yang harus menandatangani formulir pilihan?', 'Who needs to sign the preference form?', 'ใบเลือกอันดับต้องให้ใครเซ็นชื่อ', 'ဆန္ဒပုံစံမှာ ဘယ်သူ လက်မှတ်ထိုးရမလဲ။'), src: LIFE, opts: [
        { zh: '學生和在台監護人（校長）', ok: 1 }, { zh: '只有學生' }, { zh: '宿舍阿姨' }, { zh: '大學的老師' },
      ], wrong: [say('chen', '看「簽名」那一行。')] } },
      say('chen', '你們在台灣的監護人是校長，監護人簽名由學校處理。不過志願的順序，還是要先跟家人好好討論。', { listen: 1 }),
      { scene: 'phone', npc: 'mama' },
      { q: { p: P.say, src: LIFE, opts: [
        { zh: '媽媽，我要填大學的志願表，想先跟你討論一下順序。', ok: 1 },
        { zh: '媽媽，你幫我隨便選一個。', r: [say('mama', '這是你自己的未來，你要自己想清楚喔。')] },
        { zh: '我已經交了，不用告訴你。' },
        { zh: '志願表是什麼？我不想填。' },
      ], wrong: [say('mama', '你想說什麼？')], ok: [say('mama', '好，你先說說看你為什麼想去第一志願。')] } },
    ], else: [
      say('chen', '你們科只銜接一所大學，不用填志願表。三月或五月，你在學校的那一次參加說明會和面試就好。', { listen: 1 }),
      { q: { p: T('你們科要填志願表嗎？', 'Ngành của bạn có phải điền phiếu nguyện vọng không?', 'Apakah jurusanmu harus mengisi formulir pilihan?', 'Does your department fill in a preference form?', 'แผนกของคุณต้องกรอกใบเลือกอันดับไหม', 'ကိုယ့်ဌာနက ဆန္ဒပုံစံ ဖြည့်ရမလား။'), src: LIFE, kind: 'listen', opts: [
        { zh: '不用，只銜接一所大學', ok: 1 }, { zh: '要，填兩張' }, { zh: '要，請家長填' }, { zh: '不用，也不用面試' },
      ], wrong: [say('chen', '再聽一次。')] } },
    ] },
    { fx: { zh: 3, aff: { chen: 1 } } },
  ],

  // 1 月底：學長回校分享（科大也是輪調專班 421；另外打工要先申請工作許可）
  U03: [
    { scene: 'lounge', npc: 'xuezhang' },
    n('u03a'),
    say('xuezhang', '我們科大也是輪調專班，不過變成「四二一」：一個星期四天到工廠實習，兩天在學校上課，一天休息。', { listen: 1 }),
    { q: { p: T('科大的輪調專班，一個星期在學校上課幾天？', 'Lớp luân phiên ở đại học, mỗi tuần học ở trường mấy ngày?', 'Di kelas rotasi universitas, berapa hari seminggu belajar di kampus?', 'In the university rotation program, how many days a week are classes?', 'ในห้องเรียนสลับของมหาวิทยาลัย เรียนที่มหาวิทยาลัยสัปดาห์ละกี่วัน', 'တက္ကသိုလ် အလှည့်ကျ အတန်းမှာ တစ်ပတ်ကို ကျောင်းမှာ ဘယ်နှစ်ရက် စာသင်လဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '兩天', ok: 1 }, { zh: '四天', r: [say('xuezhang', '四天是到工廠實習喔。')] }, { zh: '一天' }, { zh: '五天' },
    ], wrong: [say('xuezhang', '再聽一次。')] } },
    say('xuezhang', '工廠實習是學校安排的課程。如果還想另外打工，一定要先問學校、申請工作許可。沒有許可就去打工，是違法的。', { listen: 1 }),
    { q: { p: T('上大學以後想另外打工，要先做什麼？', 'Lên đại học muốn làm thêm bên ngoài thì phải làm gì trước?', 'Kalau mau kerja paruh waktu tambahan saat kuliah, harus melakukan apa dulu?', 'What must you do first if you want an extra part-time job at university?', 'ขึ้นมหาวิทยาลัยแล้วอยากทำงานพิเศษเพิ่ม ต้องทำอะไรก่อน', 'တက္ကသိုလ်ရောက်ရင် အပိုအချိန်ပိုင်း လုပ်ချင်ရင် ဘာအရင်လုပ်ရမလဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '先問學校、申請工作許可', ok: 1 }, { zh: '買一台機車' }, { zh: '先去打工再說' }, { zh: '換一張居留證' },
    ], wrong: [say('xuezhang', '再聽一次。')] } },
    say('tongxue', '那我可以先去打工，以後再辦許可嗎？'),
    { q: { p: P.reply, src: LIFE, opts: [
      { zh: '不行，要先拿到工作許可，才可以開始工作。', ok: 1 },
      { zh: '可以，老闆不會發現。', r: [say('xuezhang', '被查到的話，會影響你的居留和學業，真的不可以。')] },
      { zh: '可以，做一個月就好。' },
      { zh: '不知道，你問別人。' },
    ], wrong: [say('xuezhang', '想想剛剛學長說的。')], ok: [say('xuezhang', '沒錯！先申請，再工作。')] } },
    n('u03b'),
    { fx: { zh: 3, mood: 5, aff: { xuezhang: 1 } } },
  ],

  // 2 月：春節，換你照顧學弟妹
  U04: [
    { scene: 'dorm', npc: 'xinsheng' },
    n('u04a'),
    say('xinsheng', '學長姐，台灣過年要說什麼？'),
    { q: { p: P.reply, src: LIFE, opts: [
      { zh: '可以說「新年快樂」、「恭喜發財」。見到長輩，可以說「祝您身體健康」。', ok: 1 },
      { zh: '說「生日快樂」就好。', r: [say('xinsheng', '咦？今天不是我的生日啊。')] },
      { zh: '說「再見」。' },
      { zh: '什麼都不用說。' },
    ], wrong: [say('xinsheng', '那要說什麼呢？')] } },
    { scene: 'dorm', npc: 'ayi' },
    say('ayi', '寒假留宿的同學，晚上十點以前要回宿舍，出去要先登記喔。', { listen: 1 }),
    { q: { p: T('寒假留宿，晚上幾點以前要回宿舍？', 'Ở lại ký túc xá dịp nghỉ đông, buổi tối phải về trước mấy giờ?', 'Selama libur musim dingin di asrama, harus kembali sebelum jam berapa?', 'Staying in the dorm over winter break, what time must you be back?', 'อยู่หอช่วงปิดเทอมฤดูหนาว ต้องกลับหอก่อนกี่โมง', 'ဆောင်းရာသီ ကျောင်းပိတ်ချိန် အဆောင်မှာနေရင် ညဘယ်နှစ်နာရီ မတိုင်ခင် ပြန်ရမလဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '十點以前', ok: 1 }, { zh: '十二點以前' }, { zh: '八點以前' }, { zh: '不用回來' },
    ], wrong: [say('ayi', '再聽一次。')] } },
    { scene: 'dorm', npc: 'xinsheng2' },
    { q: { p: Q_DO, src: LIFE, opts: [
      { zh: '找她一起吃年夜飯，聽她說說家鄉怎麼過年。', ok: 1, then: [say('xinsheng2', '謝謝你……我們家鄉過年也會一起吃飯。'), { fx: { pop: 2 } }] },
      { zh: '陪她打視訊電話回家，跟家人說新年快樂。', ok: 1, then: [say('xinsheng2', '看到媽媽，我就不那麼難過了。'), { fx: { pop: 2 } }] },
      { zh: '跟她說：「不要哭，很丟臉。」', r: [say('xinsheng2', '……'), { fx: { pop: -1 } }] },
      { zh: '不理她，讓她自己一個人。' },
    ], wrong: [], ok: [] } },
    n('u04b'),
    { fx: { mood: 10, pop: 2 } },
  ],

  // 2 月：B1 報名 3 月場（三下只有 3 月、5 月兩場）
  U05: [
    { scene: 'classroom', npc: 'lin' },
    { ifv: 'tocflB1', then: [
      n('u05p'),
      say('lin', '練習的時候，請他們說完整的句子，多用「因為……所以……」。', { listen: 1 }),
      { q: { p: T('林老師要同學多用什麼句型？', 'Cô Lâm muốn các bạn dùng mẫu câu nào?', 'Pola kalimat apa yang Bu Lin minta untuk sering dipakai?', 'Which pattern does Ms. Lin want them to use more?', 'ครูหลินอยากให้เพื่อนใช้รูปประโยคอะไรบ่อย ๆ', 'ဆရာမလင်က ဘယ်ဝါကျပုံစံကို များများသုံးခိုင်းလဲ။'), src: LIFE, kind: 'listen', opts: [
        { zh: '因為……所以……', ok: 1 }, { zh: '一邊……一邊……' }, { zh: '雖然……可是……' }, { zh: '不但……而且……' },
      ], wrong: [say('lin', '再聽一次。')] } },
      { title: 'tutor' },
      { fx: { pop: 3, aff: { lin: 1 } } },
    ], else: [
      n('u05a'),
      { poster: [['考試', '華語文能力測驗　進階級（B1）'], ['考試日期', '三月中'], ['報名', '學校團體報名，報名費有優惠'], ['截止', '二月二十日']], title: '報名通知' },
      { q: { p: T('三年級下學期還有幾次考試的機會？', 'Học kỳ 2 lớp 12 còn mấy cơ hội thi?', 'Masih ada berapa kesempatan ujian di semester kedua kelas 12?', 'How many chances are left this semester?', 'ภาคเรียนที่สองปีสามยังมีโอกาสสอบอีกกี่ครั้ง', 'တတိယနှစ် ဒုတိယစာသင်နှစ်ဝက်မှာ စာမေးပွဲ အခွင့်အရေး ဘယ်နှစ်ကြိမ် ကျန်သေးလဲ။'), src: LIFE, opts: [
        { zh: '兩次：三月和五月', ok: 1 }, { zh: '一次：一月', r: [say('lin', '一月沒有考試喔。')] }, { zh: '每個月都有' }, { zh: '沒有了' },
      ], wrong: [say('lin', '想想看我剛剛說的。')] } },
      say('lin', '別擔心，就算三月沒過，五月還可以再報名一次。可是越早通過越好。', { listen: 1 }),
      { q: { p: T('如果三月沒通過，怎麼辦？', 'Nếu tháng Ba không đậu thì sao?', 'Kalau bulan Maret tidak lulus, bagaimana?', 'What if you don’t pass in March?', 'ถ้าเดือนมีนาคมไม่ผ่านจะทำอย่างไร', 'မတ်လမှာ မအောင်ရင် ဘာလုပ်မလဲ။'), src: LIFE, kind: 'listen', opts: [
        { zh: '五月再報名一次', ok: 1 }, { zh: '不能讀大學了' }, { zh: '明年再考' }, { zh: '請老師幫我考' },
      ], wrong: [say('lin', '再聽一次。')], ok: [say('lin', '對！我們一起加油。')] } },
      { fx: { zh: 3 } },
    ] },
  ],

  // 2 月底：實習年度考核
  U06: [
    { scene: 'work', npc: 'zhang' },
    { ifStatus: 'work', then: [n('u06w')], else: [n('u06s')] },
    { poster: [['出勤', '全勤'], ['工作態度', '認真、負責'], ['需要加強', '跟其他部門溝通時，說話可以更清楚'], ['主管簽名', '張']], title: '實習考核表' },
    { q: { p: T('考核表上，你需要加強什麼？', 'Trên phiếu đánh giá, bạn cần cải thiện điều gì?', 'Di formulir penilaian, apa yang perlu kamu tingkatkan?', 'According to the review form, what do you need to improve?', 'ในแบบประเมิน คุณต้องปรับปรุงเรื่องอะไร', 'အကဲဖြတ်စာရွက်အရ ဘာကို ပိုကောင်းအောင် လုပ်ရမလဲ။'), src: LIFE, opts: [
      { zh: '跟其他部門溝通', ok: 1 }, { zh: '出勤' }, { zh: '工作態度' }, { zh: '主管簽名' },
    ], wrong: [say('zhang', '看「需要加強」那一行。')] } },
    say('zhang', '你覺得自己這一年表現得怎麼樣？', { listen: 1 }),
    { q: { p: P.reply, src: LIFE, opts: [
      { zh: '我學會了按照規定做事，也比較敢發問。不過跟其他部門溝通的時候，我還要再加強。', ok: 1 },
      { zh: '我覺得我很完美，沒有缺點。', r: [say('zhang', '每個人都有可以進步的地方喔。')] },
      { zh: '不知道。' },
      { zh: '做不好都是同事的問題。' },
    ], wrong: [say('zhang', '說說你的優點和要加強的地方。')] } },
    say('zhang', '對方聽不懂的時候，可以再說一次重點，或者寫下來給他看。', { listen: 1 }),
    { q: { p: T('張師傅建議怎麼加強溝通？', 'Thầy Trương khuyên cải thiện giao tiếp thế nào?', 'Apa saran Pak Zhang untuk memperbaiki komunikasi?', 'How does Master Zhang suggest improving communication?', 'อาจารย์จางแนะนำให้ปรับปรุงการสื่อสารอย่างไร', 'ဆက်သွယ်ပြောဆိုမှု ကောင်းလာအောင် ဆရာကြီးကျန်း ဘယ်လို အကြံပေးလဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '再說一次重點，或寫下來', ok: 1 }, { zh: '說話大聲一點' }, { zh: '不要跟別人說話' }, { zh: '請別人幫忙說' },
    ], wrong: [say('zhang', '再聽一次。')] } },
    { q: { p: P.say, src: LIFE, opts: [
      { zh: '謝謝師傅的建議，我會繼續努力。', ok: 1 }, { zh: '喔。' }, { zh: '我知道了，可以走了嗎？' }, { zh: '那是你的問題。' },
    ], wrong: [], ok: [say('zhang', '好，繼續加油！')] } },
    { fx: { skill: 3, aff: { zhang: 1 } } },
  ],

  // 3 月初：修改自傳、練習一分鐘自我介紹
  U09: [
    { scene: 'room', npc: 'tongxue' },
    n('u09a'),
    { poster: [['', '我從家鄉來台灣讀書，已經快三年了。'], ['', '我的優點是做事認真，遇到問題會當面報告。'], ['', '我的缺點是太緊張，＿＿我會先深呼吸，再慢慢說。']], title: '中文自傳（草稿）' },
    { q: { p: P.fill, src: LIFE, opts: [
      { zh: '不過', ok: 1 }, { zh: '因為' }, { zh: '所以' }, { zh: '如果' },
    ], wrong: [say('tongxue', '前面說缺點，後面說怎麼改進，要用表示轉折的詞。')] } },
    say('tongxue', '面試的自我介紹大概一分鐘就好，太長的話，老師會打斷你。', { listen: 1 }),
    { q: { p: T('自我介紹大概要多長？', 'Phần tự giới thiệu nên dài khoảng bao lâu?', 'Perkenalan diri sebaiknya berapa lama?', 'How long should the self-introduction be?', 'การแนะนำตัวควรยาวประมาณเท่าไร', 'ကိုယ့်ကိုယ်ကို မိတ်ဆက်တာ ဘယ်လောက်ကြာသင့်လဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '一分鐘左右', ok: 1 }, { zh: '十分鐘' }, { zh: '越長越好' }, { zh: '十秒鐘' },
    ], wrong: [say('tongxue', '再聽一次。')] } },
    { q: { p: P.say, src: LIFE, opts: [
      { zh: '各位老師好，我是{name}，{dept}三年級。三年的實習讓我學會負責和溝通，我希望到科大繼續學習專業。', ok: 1 },
      { zh: '我是{name}，就這樣。', r: [say('tongxue', '太短了，再多說一點你的經驗。')] },
      { zh: '各位老師好，我從小到大的故事是這樣的……（說了十分鐘）', r: [say('tongxue', '太長了！一分鐘就好。')] },
      { zh: '我不想自我介紹。' },
    ], wrong: [say('tongxue', '再練習一次。')], ok: [say('tongxue', '很好！清楚又簡單。')] } },
    { fx: { zh: 5 } },
  ],

  // 3 月：大學到校辦說明會＋面試（在學校的那一組參加；實習組收到同學的 LINE，五月參加）
  U07: [
    { ifStatus: 'school', then: [
      { scene: 'stage', npc: 'prof' },
      n('u07a'),
      say('prof', '我們是輪調專班，一個星期四天到工廠實習，兩天在學校上課，一天休息。學校宿舍，一年級新生優先。', { listen: 1 }),
      { q: { p: T('一個星期要到工廠實習幾天？', 'Mỗi tuần phải thực tập ở nhà máy mấy ngày?', 'Berapa hari seminggu magang di pabrik?', 'How many days a week are spent interning at the factory?', 'ต้องไปฝึกงานที่โรงงานสัปดาห์ละกี่วัน', 'တစ်ပတ်ကို စက်ရုံမှာ ဘယ်နှစ်ရက် အလုပ်သင်ရလဲ။'), src: LIFE, kind: 'listen', opts: [
        { zh: '四天', ok: 1 }, { zh: '兩天', r: [say('prof', '兩天是在學校上課喔。')] }, { zh: '一天' }, { zh: '五天' },
      ], wrong: [say('prof', '再聽一次。')] } },
      { q: { p: T('說明會最後可以發問，你要問什麼？', 'Cuối buổi giới thiệu được đặt câu hỏi, bạn sẽ hỏi gì?', 'Di akhir sesi boleh bertanya, kamu mau tanya apa?', 'You can ask a question at the end. What will you ask?', 'ท้ายการบรรยายถามคำถามได้ คุณจะถามอะไร', 'မိတ်ဆက်ပွဲအဆုံးမှာ မေးခွန်းမေးလို့ရတယ်၊ ဘာမေးမလဲ။'), src: LIFE, opts: [
        { zh: '老師，請問僑生有獎學金可以申請嗎？', ok: 1 },
        { zh: '請問大學的宿舍可以煮火鍋嗎？', r: [say('prof', '哈哈，宿舍裡不可以用電器煮東西喔。')] },
        { zh: '我可以不要上課嗎？' },
        { zh: '你們學校好玩嗎？' },
      ], wrong: [say('prof', '還有別的問題嗎？')], ok: [say('prof', '有的。成績好的同學可以申請，詳細的資料在簡章第五頁。')] } },
      { card: 'unibrochure' },
      { scene: 'meeting', npc: 'prof' },
      n('u07b'),
      say('prof', '請你用中文簡單介紹一下自己。', { listen: 1 }),
      { q: { p: P.reply, src: LIFE, opts: [
        { zh: '老師好，我是{name}，{dept}三年級。三年的實習讓我學會負責和溝通，我希望到科大繼續學習。', ok: 1 },
        { zh: '{name}。', r: [say('prof', '可以多說一點嗎？')] },
        { zh: '我很緊張，我忘記了。' },
        { zh: '你可以看我的資料就好。' },
      ], wrong: [say('prof', '慢慢說，沒關係。')] } },
      say('prof', '如果上課聽不懂，你會怎麼辦？', { listen: 1 }),
      { q: { p: P.reply, src: LIFE, opts: [
        { zh: '我會先把重點記下來，下課再問老師或同學，也會自己查資料。', ok: 1 },
        { zh: '聽不懂就睡覺。', r: [say('prof', '……這樣不太好喔。')] },
        { zh: '我會請同學幫我寫作業。' },
        { zh: '不會聽不懂。' },
      ], wrong: [say('prof', '想想你會怎麼做。')], ok: [say('prof', '很好。你的中文表達很清楚，謝謝你。')] } },
      n('u07c'),
      { fx: { zh: 5, mood: 10 } },
    ], else: [
      { scene: 'phone', npc: 'tongxue' },
      n('u07w'),
      say('tongxue', '老師面試問了自我介紹，還問上課聽不懂怎麼辦。你們五月那一次要加油喔！', { listen: 1 }),
      { q: { p: T('同學說面試問了什麼？', 'Bạn nói phỏng vấn đã hỏi gì?', 'Kata temanmu, wawancara menanyakan apa?', 'What does your classmate say the interview asked?', 'เพื่อนบอกว่าสัมภาษณ์ถามอะไร', 'သူငယ်ချင်းက အင်တာဗျူးမှာ ဘာမေးတယ်လို့ ပြောလဲ။'), src: LIFE, kind: 'listen', opts: [
        { zh: '自我介紹，還有上課聽不懂怎麼辦', ok: 1 }, { zh: '家裡有幾個人' }, { zh: '會不會唱歌' }, { zh: '喜歡吃什麼' },
      ], wrong: [say('tongxue', '再看一次我傳的訊息。')] } },
      { q: { p: P.reply, src: LIFE, opts: [
        { zh: '謝謝你告訴我！我五月在學校的時候，也會好好準備。', ok: 1 },
        { zh: '我不用面試吧？', r: [say('tongxue', '要啊！五月換你們在學校，大學會再來一次。')] },
        { zh: '已讀不回。' },
        { zh: '面試很無聊。' },
      ], wrong: [], ok: [say('tongxue', '加油！有問題再問我。')] } },
      { fx: { zh: 2, pop: 1 } },
    ] },
  ],

  // 3 月中：B1 考試（三下第一場；沒過的話五月還有最後一次）
  U08: [
    { ifv: 'tocflB1', then: [{ scene: 'lounge', npc: 'xinsheng' }, n('u08h'), { fx: { pop: 2 } }], else: [
      { scene: 'classroom', npc: 'teacher' },
      n('u08a'),
      say('teacher', '男：「這家餐廳要先排隊拿號碼，大概要等四十分鐘。」女：「那我們先去旁邊的書店逛逛，時間到了再回來。」', { listen: 1 }),
      { q: { p: T('他們等的時候要做什麼？', 'Trong lúc chờ họ sẽ làm gì?', 'Apa yang mereka lakukan sambil menunggu?', 'What will they do while waiting?', 'ระหว่างรอพวกเขาจะทำอะไร', 'စောင့်နေတုန်း သူတို့ ဘာလုပ်မလဲ။'), src: LIFE, kind: 'listen', opts: [
        { zh: '去旁邊的書店逛逛', ok: 1 }, { zh: '回家睡覺' }, { zh: '換一家餐廳' }, { zh: '在門口排隊' },
      ], wrong: [] } },
      { poster: [['公告', '本館三月起，週一休館。'], ['', '借書期限由兩週改為三週，逾期每天罰款五元。']], title: '圖書館公告' },
      { q: { p: T('現在借書可以借多久？', 'Bây giờ mượn sách được bao lâu?', 'Sekarang buku bisa dipinjam berapa lama?', 'How long can you borrow books now?', 'ตอนนี้ยืมหนังสือได้นานเท่าไร', 'အခု စာအုပ်ကို ဘယ်လောက်ကြာကြာ ငှားလို့ရလဲ။'), src: LIFE, opts: [
        { zh: '三週', ok: 1 }, { zh: '兩週' }, { zh: '五天' }, { zh: '一個月' },
      ], wrong: [] } },
      say('teacher', '女：「你不是說要搬家嗎？」男：「本來是這樣打算的，可是房東說可以不漲房租，我就決定再住一年。」', { listen: 1 }),
      { q: { p: T('男生為什麼不搬家了？', 'Tại sao người nam không chuyển nhà nữa?', 'Mengapa laki-laki itu tidak jadi pindah?', 'Why isn’t the man moving after all?', 'ทำไมผู้ชายไม่ย้ายบ้านแล้ว', 'အမျိုးသားက ဘာကြောင့် အိမ်မပြောင်းတော့တာလဲ။'), src: LIFE, kind: 'listen', opts: [
        { zh: '因為房租不漲了', ok: 1 }, { zh: '因為找不到房子' }, { zh: '因為房東不讓他走' }, { zh: '因為太忙了' },
      ], wrong: [] } },
      { poster: [['', '很多人以為多喝咖啡可以提神，其實喝太多反而會睡不好。'], ['', '第二天更累，只好再喝更多咖啡。']], title: '短文' },
      { q: { p: T('這篇短文想說什麼？', 'Đoạn văn muốn nói điều gì?', 'Apa maksud teks pendek ini?', 'What is the passage saying?', 'บทความสั้นนี้ต้องการบอกอะไร', 'ဒီစာတိုက ဘာပြောချင်တာလဲ။'), src: LIFE, opts: [
        { zh: '咖啡喝太多會睡不好，反而更累', ok: 1 }, { zh: '每天都應該喝很多咖啡' }, { zh: '咖啡可以治病' }, { zh: '晚上喝咖啡睡得更好' },
      ], wrong: [] } },
      { ifScore: 3, then: [{ setv: { tocflB1: 1 } }, n('u08p'), { card: 'tocflcert' }, { fx: { mood: 20 } }], else: [n('u08f'), { fx: { mood: -5 } }] },
      { fx: { zh: 5, hp: -10 } },
    ] },
  ],

  // 隨機：學弟借錢（找導師、學校急難救助）
  R25: [
    { scene: 'dorm', npc: 'xinsheng' },
    n('r25a'),
    { q: { p: Q_DO, src: LIFE, opts: [
      { zh: '我沒辦法借你這麼多。我陪你去找導師，學校有急難救助可以問問看。', ok: 1, then: [say('xinsheng', '好……謝謝你陪我去。'), { fx: { pop: 2 } }] },
      { zh: '先問他發生了什麼事，再一起想辦法。', ok: 1, then: [say('xinsheng', '我手機摔壞了，修理要好多錢……'), say('me', '我們明天去找導師，看看學校能不能幫忙。'), { fx: { pop: 2 } }] },
      { zh: '叫他去找網路上的借錢廣告。', r: [n('r25b'), say('chen', '網路上很多借錢廣告是詐騙，利息也很高，千萬不要去借！')] },
      { zh: '好，我借你，也不用寫什麼。', r: [n('r25b')] },
    ], wrong: [], ok: [] } },
  ],

  // 隨機：宿舍停水公告
  R26: [
    { scene: 'dorm', npc: 'ayi' },
    n('r26a'),
    { poster: [['停水通知', ''], ['時間', '本週二　上午九點到下午五點'], ['原因', '水管維修'], ['提醒', '請先儲水；停水期間，水龍頭請關好']], title: '宿舍公告' },
    { q: { p: T('什麼時候停水？', 'Khi nào cúp nước?', 'Kapan air dimatikan?', 'When will the water be off?', 'น้ำจะหยุดไหลเมื่อไร', 'ရေ ဘယ်တော့ ပိတ်မလဲ။'), src: LIFE, opts: [
      { zh: '星期二白天', ok: 1 }, { zh: '星期二晚上' }, { zh: '每天' }, { zh: '週末' },
    ], wrong: [say('ayi', '看「時間」那一行。')] } },
    { q: { p: T('停水以前要做什麼？', 'Trước khi cúp nước phải làm gì?', 'Apa yang harus dilakukan sebelum air dimatikan?', 'What should you do before the water goes off?', 'ก่อนน้ำหยุดไหลต้องทำอะไร', 'ရေမပိတ်ခင် ဘာလုပ်ရမလဲ။'), src: LIFE, opts: [
      { zh: '先儲水', ok: 1 }, { zh: '去洗衣服' }, { zh: '打開水龍頭' }, { zh: '搬出宿舍' },
    ], wrong: [say('ayi', '看「提醒」那一行。')], ok: [say('ayi', '對，水桶先裝滿，水龍頭要關好喔。')] } },
    { fx: { tidy: 3 } },
  ],
};

module.exports = { N, EVENTS };

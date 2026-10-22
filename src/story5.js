// 第五章劇本資料（二年級 7–9 月）：迎接新生、探索教育（三堂）、居留證延期、二年級開學；另含「上課」各科的小場景（L_ 開頭）。
// 詞彙：A2 為主，逐步加入 B1（挑戰、討論、行動、安全帶、延期、規費、在學證明）。zh = 中文；vi id en th my = 五種輔助語言。
const { T, P, N: N1 } = require('./story.js');
const S3 = require('./story3.js');

const N = {
  n01a: T('七月，新的學弟妹要來台灣了。這次換你去機場接他們。', 'Tháng Bảy, các em khóa mới sắp sang Đài Loan. Lần này đến lượt bạn ra sân bay đón các em.', 'Bulan Juli, adik kelas baru akan datang ke Taiwan. Kali ini giliranmu menjemput mereka di bandara.', 'In July, the new first-years are coming to Taiwan. This time it’s your turn to meet them at the airport.', 'เดือนกรกฎาคม น้องใหม่กำลังจะมาไต้หวัน ครั้งนี้ถึงตาคุณไปรับพวกเขาที่สนามบิน', 'ဇူလိုင်လမှာ ညီလေး ညီမလေး အသစ်တွေ ထိုင်ဝမ်ကို လာကြမယ်။ ဒီတစ်ခါ လေဆိပ်မှာ သွားကြိုဖို့ ခင်ဗျားအလှည့်ပါ။'),
  n01b: T('你想起一年前的自己，也是這樣緊張。', 'Bạn nhớ lại mình một năm trước, cũng hồi hộp như vậy.', 'Kamu teringat dirimu setahun lalu, juga gugup seperti ini.', 'You remember yourself a year ago, just as nervous.', 'คุณนึกถึงตัวเองเมื่อปีก่อน ก็ตื่นเต้นแบบนี้เหมือนกัน', 'လွန်ခဲ့တဲ့ တစ်နှစ်က ကိုယ့်ကိုယ်ကို သတိရတယ်၊ ဒီလိုပဲ စိတ်လှုပ်ရှားခဲ့တာ။'),
  n02a: T('你的居留證快到期了，要去移民署辦延期。', 'Thẻ cư trú của bạn sắp hết hạn, phải đến Sở Di dân làm gia hạn.', 'Izin tinggalmu hampir habis, kamu harus ke kantor imigrasi untuk memperpanjang.', 'Your resident certificate is about to expire, so you need to extend it at the immigration office.', 'บัตรถิ่นที่อยู่ของคุณใกล้หมดอายุ ต้องไปต่ออายุที่สำนักงานตรวจคนเข้าเมือง', 'နေထိုင်ခွင့်ကတ် သက်တမ်းကုန်တော့မယ်၊ လူဝင်မှုကြီးကြပ်ရေးရုံးမှာ သက်တမ်းတိုးရမယ်။'),
  n02b: T('辦好了！你鬆了一口氣。', 'Xong rồi! Bạn thở phào nhẹ nhõm.', 'Selesai! Kamu merasa lega.', 'Done! You breathe a sigh of relief.', 'เรียบร้อย! คุณโล่งใจ', 'ပြီးသွားပြီ။ စိတ်သက်သာရာ ရသွားတယ်။'),
  n03a: T('九月，二年級開學了。老師發了新的課表。', 'Tháng Chín, năm hai khai giảng. Thầy cô phát thời khóa biểu mới.', 'September, tahun kedua dimulai. Guru membagikan jadwal pelajaran baru.', 'In September, second year begins. The teacher hands out the new class timetable.', 'เดือนกันยายน เปิดเทอมปีสอง ครูแจกตารางเรียนใหม่', 'စက်တင်ဘာလမှာ ဒုတိယနှစ် ကျောင်းဖွင့်ပြီ။ ဆရာက အချိန်ဇယားအသစ် ဝေပေးတယ်။'),
  n03w: T('九月開始，你回到實習的地方。張師傅要教你新的工作。', 'Từ tháng Chín, bạn quay lại nơi thực tập. Thầy Trương sẽ dạy bạn việc mới.', 'Mulai September, kamu kembali ke tempat magang. Pak Zhang akan mengajarimu pekerjaan baru.', 'From September you are back at your internship. Master Zhang will teach you new work.', 'ตั้งแต่เดือนกันยายน คุณกลับไปที่ฝึกงาน อาจารย์จางจะสอนงานใหม่ให้', 'စက်တင်ဘာလကစပြီး အလုပ်သင်နေရာကို ပြန်သွားတယ်။ ဆရာကျန်းက အလုပ်အသစ် သင်ပေးမယ်။'),
  x01a: T('探索教育課到了！今天在操場上課，教練帶大家玩破冰遊戲。', 'Đến giờ Giáo dục trải nghiệm! Hôm nay học ở sân, huấn luyện viên dẫn mọi người chơi trò làm quen.', 'Saatnya Pendidikan Petualangan! Hari ini belajar di lapangan, pelatih mengajak bermain permainan perkenalan.', 'Adventure Education time! Today’s class is on the field, and the coach leads ice-breaker games.', 'ถึงเวลาวิชาการศึกษาเชิงผจญภัย! วันนี้เรียนที่สนาม โค้ชพาเล่นเกมละลายพฤติกรรม', 'စွန့်စားလေ့လာရေးအတန်း ရောက်ပြီ။ ဒီနေ့ ကွင်းထဲမှာ သင်တယ်၊ နည်းပြက ရင်းနှီးအောင် ကစားနည်းတွေ ဦးဆောင်တယ်။'),
  x01b: T('接下來是「信任倒」：一個人往後倒，其他人要接住他。', 'Tiếp theo là “ngã tin tưởng”: một người ngã ra sau, những người khác phải đỡ lấy.', 'Berikutnya “jatuh percaya”: satu orang jatuh ke belakang, yang lain harus menangkapnya.', 'Next is the “trust fall”: one person falls backward and the others must catch them.', 'ต่อไปคือ “ล้มไว้ใจ” คนหนึ่งล้มไปข้างหลัง คนอื่นต้องรับไว้', 'နောက်တစ်ခုက “ယုံကြည်မှုလဲချ” ပါ၊ တစ်ယောက်က နောက်ပြန်လဲချ၊ ကျန်တဲ့သူတွေက ဖမ်းထားရမယ်။'),
  x01c: T('今天你認識了很多新朋友。', 'Hôm nay bạn quen thêm nhiều bạn mới.', 'Hari ini kamu mengenal banyak teman baru.', 'Today you got to know many new friends.', 'วันนี้คุณได้รู้จักเพื่อนใหม่มากมาย', 'ဒီနေ့ သူငယ်ချင်းအသစ် အများကြီး သိခဲ့တယ်။'),
  x02a: T('今天的挑戰是「蜘蛛網」：全組要從網子的洞穿過去，不能碰到繩子。', 'Thử thách hôm nay là “mạng nhện”: cả nhóm phải chui qua lỗ lưới mà không chạm vào dây.', 'Tantangan hari ini “jaring laba-laba”: seluruh kelompok harus melewati lubang jaring tanpa menyentuh tali.', 'Today’s challenge is the “spider web”: the whole team must pass through the holes without touching the ropes.', 'ภารกิจวันนี้คือ “ใยแมงมุม” ทั้งกลุ่มต้องลอดผ่านช่องตาข่ายโดยไม่โดนเชือก', 'ဒီနေ့ စိန်ခေါ်မှုက “ပင့်ကူအိမ်” ပါ၊ အဖွဲ့လိုက် ပိုက်ကွန်ပေါက်တွေကို ကြိုးမထိဘဲ ဖြတ်ရမယ်။'),
  x02b: T('最後，全組都過去了！大家高興得跳起來。', 'Cuối cùng cả nhóm đều qua được! Mọi người vui đến nhảy cẫng lên.', 'Akhirnya seluruh kelompok berhasil! Semua melompat kegirangan.', 'In the end, the whole team makes it through! Everyone jumps for joy.', 'สุดท้ายทั้งกลุ่มก็ผ่านไปได้! ทุกคนดีใจจนกระโดด', 'နောက်ဆုံးမှာ အဖွဲ့လုံး ဖြတ်နိုင်သွားတယ်။ အားလုံး ဝမ်းသာလွန်းလို့ ခုန်ကြတယ်။'),
  x03a: T('最後一堂探索教育是攀岩。牆很高，你有一點怕。', 'Buổi Giáo dục trải nghiệm cuối cùng là leo tường. Bức tường rất cao, bạn hơi sợ.', 'Pelajaran terakhir adalah panjat dinding. Dindingnya tinggi, kamu agak takut.', 'The last Adventure Education class is wall climbing. The wall is tall, and you’re a little scared.', 'คาบสุดท้ายของการศึกษาเชิงผจญภัยคือปีนผนัง ผนังสูงมาก คุณกลัวนิดหน่อย', 'နောက်ဆုံး စွန့်စားလေ့လာရေးအတန်းက နံရံတက်ပါ။ နံရံက အရမ်းမြင့်တော့ နည်းနည်း ကြောက်တယ်။'),
  x03b: T('同學在下面喊：「加油！加油！」你一步一步爬到了最上面。', 'Các bạn ở dưới hô: “Cố lên! Cố lên!” Bạn leo từng bước lên tới đỉnh.', 'Teman-teman di bawah berteriak, “Semangat! Semangat!” Kamu memanjat selangkah demi selangkah sampai ke puncak.', 'Your classmates shout from below, “Go! Go!” Step by step, you climb all the way to the top.', 'เพื่อนข้างล่างตะโกน “สู้ๆ! สู้ๆ!” คุณปีนทีละก้าวจนถึงยอด', 'အောက်ကနေ သူငယ်ချင်းတွေက “အားတင်း! အားတင်း!” လို့ အော်ကြတယ်။ တစ်လှမ်းချင်း တက်ပြီး ထိပ်ဆုံးအထိ ရောက်သွားတယ်။'),
  r08a: T('颱風要來了，新聞說明天停班停課。', 'Bão sắp đến, tin tức nói ngày mai nghỉ làm nghỉ học.', 'Topan akan datang, berita bilang besok libur kerja dan sekolah.', 'A typhoon is coming. The news says work and school are canceled tomorrow.', 'พายุไต้ฝุ่นกำลังมา ข่าวบอกว่าพรุ่งนี้หยุดงานหยุดเรียน', 'တိုင်ဖွန်းမုန်တိုင်း လာတော့မယ်၊ မနက်ဖြန် အလုပ်ပိတ် ကျောင်းပိတ်တယ်လို့ သတင်းက ပြောတယ်။'),
  r09a: T('八月很熱，同學在操場上頭暈，臉很紅。', 'Tháng Tám rất nóng, một bạn bị chóng mặt ngoài sân, mặt đỏ bừng.', 'Agustus sangat panas, seorang teman pusing di lapangan, wajahnya merah.', 'August is very hot. A classmate feels dizzy on the field, and their face is red.', 'เดือนสิงหาคมร้อนมาก เพื่อนเวียนหัวที่สนาม หน้าแดงมาก', 'သြဂုတ်လက အရမ်းပူတယ်၊ ကွင်းထဲမှာ သူငယ်ချင်းတစ်ယောက် မူးလာပြီး မျက်နှာ နီရဲနေတယ်။'),
  r10a: T('房間裡到處都是室友的衣服和零食袋。', 'Trong phòng đầy quần áo và túi bánh kẹo của bạn cùng phòng.', 'Kamar penuh dengan baju dan bungkus camilan teman sekamar.', 'Your roommate’s clothes and snack bags are all over the room.', 'ในห้องเต็มไปด้วยเสื้อผ้าและถุงขนมของรูมเมต', 'အခန်းထဲမှာ အခန်းဖော်ရဲ့ အဝတ်တွေ မုန့်အိတ်တွေ အနှံ့ပဲ။'),
  r11a: T('晚上，隔壁寢室傳來火鍋的味道。同學偷偷用電鍋煮火鍋，還請你一起吃。', 'Buổi tối, mùi lẩu bay ra từ phòng bên cạnh. Một bạn lén dùng nồi điện nấu lẩu, còn mời bạn ăn cùng.', 'Malam hari, tercium bau hotpot dari kamar sebelah. Seorang teman diam-diam memasak hotpot dengan penanak nasi listrik dan mengajakmu makan.', 'At night, the smell of hot pot drifts from the next room. A classmate is secretly cooking hot pot in a rice cooker and invites you to eat.', 'ตอนกลางคืน กลิ่นหม้อไฟลอยมาจากห้องข้างๆ เพื่อนแอบใช้หม้อหุงข้าวไฟฟ้าต้มหม้อไฟ แล้วชวนคุณกินด้วย', 'ညဘက်မှာ ဘေးခန်းကနေ ဟော့ပေါ့ အနံ့ ထွက်လာတယ်။ သူငယ်ချင်းက ထမင်းအိုးနဲ့ ဟော့ပေါ့ကို တိတ်တိတ်လေး ချက်နေပြီး လာစားဖို့ ခေါ်တယ်။'),
  r11b: T('突然「啪」的一聲，整層樓都跳電了。宿舍阿姨馬上來查房。', 'Bỗng “tách” một tiếng, cả tầng bị mất điện. Dì quản lý lập tức đến kiểm tra phòng.', 'Tiba-tiba terdengar “tek”, listrik di seluruh lantai padam. Ibu asrama langsung datang memeriksa kamar.', 'Suddenly there’s a “pop” and the whole floor loses power. The dorm aunt comes to check the rooms right away.', 'ทันใดนั้นก็มีเสียง “แป๊ะ” ไฟดับทั้งชั้น ป้าหอพักมาตรวจห้องทันที', 'ရုတ်တရက် “ဖောက်” ခနဲ မြည်ပြီး တစ်ထပ်လုံး မီးပျက်သွားတယ်။ အဆောင်အန်တီက ချက်ချင်း အခန်းစစ်ဖို့ ရောက်လာတယ်။'),
  r11c: T('你回到房間，可是心裡一直很不安。', 'Bạn về phòng nhưng trong lòng cứ thấy bất an.', 'Kamu kembali ke kamar, tapi hatimu terus gelisah.', 'You go back to your room, but you can’t stop feeling uneasy.', 'คุณกลับห้อง แต่ใจยังไม่สบายใจเลย', 'အခန်းကို ပြန်သွားပေမဲ့ စိတ်ထဲမှာ မအေးချမ်းဘူး။'),
  r10b: T('週末，桌上又堆滿了室友的東西，垃圾桶也滿了。', 'Cuối tuần, bàn lại chất đầy đồ của bạn cùng phòng, thùng rác cũng đầy.', 'Akhir pekan, meja lagi-lagi penuh barang teman sekamar, tempat sampah juga penuh.', 'On the weekend, the desk is piled with your roommate’s things again, and the trash can is full.', 'วันหยุด โต๊ะเต็มไปด้วยของของรูมเมตอีกแล้ว ถังขยะก็เต็ม', 'စနေတနင်္ဂနွေမှာ စားပွဲပေါ် အခန်းဖော်ရဲ့ ပစ္စည်းတွေ ပြန်ပုံနေပြန်ပြီ၊ အမှိုက်ပုံးလည်း ပြည့်နေတယ်။'),
  r11d: T('同學拿出一個電磁爐，想在寢室煮泡麵。', 'Một bạn lấy ra cái bếp từ, muốn nấu mì gói trong phòng.', 'Seorang teman mengeluarkan kompor induksi, ingin memasak mi instan di kamar.', 'A classmate takes out an induction cooker and wants to cook instant noodles in the room.', 'เพื่อนหยิบเตาแม่เหล็กไฟฟ้าออกมา อยากต้มบะหมี่กึ่งสำเร็จรูปในห้อง', 'သူငယ်ချင်းက လျှပ်စစ်မီးဖိုလေး ထုတ်ပြီး အခန်းထဲမှာ ခေါက်ဆွဲပြုတ်ချင်တယ်။'),
  w4a: T('陳導師請你到辦公室一趟。', 'Thầy chủ nhiệm Trần mời bạn lên văn phòng.', 'Pak Chen memanggilmu ke kantor.', 'Mr. Chen asks you to come to the office.', 'ครูเฉินเรียกคุณไปที่ห้องพักครู', 'ဆရာချန်က ရုံးခန်းကို လာခဲ့ဖို့ ခေါ်တယ်။'),
  // 上課各科
  lguo: T('國文課開始了。', 'Giờ Quốc văn bắt đầu.', 'Pelajaran bahasa Tionghoa (Guowen) dimulai.', 'Chinese literature class begins.', 'คาบวิชาภาษาจีนเริ่มแล้ว', 'တရုတ်စာပေ အတန်း စပြီ။'),
  leng: T('英文課，老師用中文和英文上課。', 'Giờ tiếng Anh, thầy dạy bằng cả tiếng Hoa và tiếng Anh.', 'Pelajaran bahasa Inggris, guru mengajar dengan bahasa Mandarin dan Inggris.', 'In English class, the teacher teaches in both Chinese and English.', 'คาบภาษาอังกฤษ ครูสอนทั้งภาษาจีนและภาษาอังกฤษ', 'အင်္ဂလိပ်စာအတန်းမှာ ဆရာက တရုတ်လိုရော အင်္ဂလိပ်လိုရော သင်တယ်။'),
  lmath: T('數學課，老師在黑板上寫了一題。', 'Giờ Toán, thầy viết một bài lên bảng.', 'Pelajaran matematika, guru menulis satu soal di papan.', 'In math class, the teacher writes a problem on the board.', 'คาบคณิตศาสตร์ ครูเขียนโจทย์หนึ่งข้อบนกระดาน', 'သင်္ချာအတန်းမှာ ဆရာက ကျောက်သင်ပုန်းပေါ် ပုစ္ဆာတစ်ပုဒ် ရေးတယ်။'),
  lmusic: T('音樂課，大家一起學唱一首台灣的歌。', 'Giờ Âm nhạc, cả lớp cùng học hát một bài hát Đài Loan.', 'Pelajaran musik, semua belajar menyanyikan lagu Taiwan.', 'In music class, everyone learns to sing a Taiwanese song.', 'คาบดนตรี ทุกคนหัดร้องเพลงไต้หวันด้วยกัน', 'ဂီတအတန်းမှာ အားလုံး ထိုင်ဝမ်သီချင်းတစ်ပုဒ် အတူ သင်ဆိုကြတယ်။'),
  lpe: T('體育課，大家換上運動服，在操場集合。', 'Giờ Thể dục, mọi người thay đồ thể thao, tập trung ở sân.', 'Pelajaran olahraga, semua berganti baju olahraga dan berkumpul di lapangan.', 'In PE, everyone changes into sportswear and gathers on the field.', 'คาบพละ ทุกคนเปลี่ยนชุดกีฬาแล้วรวมตัวที่สนาม', 'ကာယပညာအတန်းမှာ အားလုံး အားကစားဝတ်စုံ လဲပြီး ကွင်းထဲ စုကြတယ်။'),
  lpro0: T('專業課，老師教大家用電腦寫報告。', 'Giờ chuyên ngành, thầy dạy cách viết báo cáo trên máy tính.', 'Pelajaran kejuruan, guru mengajari cara menulis laporan di komputer.', 'In your major class, the teacher shows how to write a report on the computer.', 'คาบวิชาเฉพาะ ครูสอนเขียนรายงานด้วยคอมพิวเตอร์', 'အထူးပြုဘာသာအတန်းမှာ ဆရာက ကွန်ပျူတာနဲ့ အစီရင်ခံစာ ရေးနည်း သင်တယ်။'),
  lpro1: T('專業課，老師教大家做麵包。', 'Giờ chuyên ngành, thầy dạy làm bánh mì.', 'Pelajaran kejuruan, guru mengajari membuat roti.', 'In your major class, the teacher shows how to make bread.', 'คาบวิชาเฉพาะ ครูสอนทำขนมปัง', 'အထူးပြုဘာသာအတန်းမှာ ဆရာက ပေါင်မုန့်လုပ်နည်း သင်တယ်။'),
  lpro2: T('專業課，老師教大家切菜。', 'Giờ chuyên ngành, thầy dạy cắt rau.', 'Pelajaran kejuruan, guru mengajari memotong sayur.', 'In your major class, the teacher shows how to cut vegetables.', 'คาบวิชาเฉพาะ ครูสอนหั่นผัก', 'အထူးပြုဘာသာအတန်းမှာ ဆရာက ဟင်းသီးဟင်းရွက် လှီးနည်း သင်တယ်။'),
  lpro3: T('專業課，老師教大家換輪胎。', 'Giờ chuyên ngành, thầy dạy thay lốp xe.', 'Pelajaran kejuruan, guru mengajari mengganti ban.', 'In your major class, the teacher shows how to change a tire.', 'คาบวิชาเฉพาะ ครูสอนเปลี่ยนยางรถ', 'အထူးပြုဘာသာအတန်းမှာ ဆရာက ဘီးလဲနည်း သင်တယ်။'),
  lpro4: T('專業課，老師教大家用電腦做表格。', 'Giờ chuyên ngành, thầy dạy làm bảng tính trên máy tính.', 'Pelajaran kejuruan, guru mengajari membuat tabel di komputer.', 'In your major class, the teacher shows how to make a table on the computer.', 'คาบวิชาเฉพาะ ครูสอนทำตารางด้วยคอมพิวเตอร์', 'အထူးပြုဘာသာအတန်းမှာ ဆရာက ကွန်ပျူတာနဲ့ ဇယားလုပ်နည်း သင်တယ်။'),
};
const say = (who, zh, extra = {}) => ({ say: who, zh, ...extra });
const n = (k) => ({ n: N[k] });
const LIFE = '生活中文';
const CLS = '課堂用語';

function inspection() {
  return [
    { scene: 'dorm', npc: 'ayi' },
    { n: S3.N.i01a },
    { n: S3.N.i01b },
    { ifTidy: 80, then: [say('ayi', '很乾淨，很好！'), { fx: { tidy: 5, aff: { ayi: 1 } } }],
      else: [say('ayi', '東西要放回去喔。垃圾也要記得倒。'), { fx: { tidy: -10 } }] },
  ];
}
// 一堂課：場景 → 說明 → 老師說一句 → 一題
function lesson(scene, key, line, p, opts, okLine) {
  return [
    { scene, npc: 'teacher' },
    n(key),
    say('teacher', line, { listen: 1 }),
    { q: { p, src: CLS, opts, wrong: [say('teacher', '再聽一次喔。')], ok: [say('teacher', okLine || '很好！')] } },
  ];
}

// 做了不好的選擇以後：有人教正確說法，再確認一次（答對才結束），之後還會再遇到一次類似情況
const Q_TIDY = T('室友不想收東西，你可以怎麼說？', 'Bạn cùng phòng không muốn dọn dẹp, bạn có thể nói gì?', 'Teman sekamar tidak mau beres-beres, kamu bisa bilang apa?', 'Your roommate doesn’t want to tidy up. What can you say?', 'รูมเมตไม่อยากเก็บของ คุณพูดว่าอะไรได้', 'အခန်းဖော်က ပစ္စည်းမသိမ်းချင်ဘူးဆိုရင် ဘာပြောလို့ရလဲ။');
const teachTidy = (msg) => [
  { scene: 'room', npc: 'rina' },
  say('rina', msg),
  say('rina', '你可以說：「我們一起收，很快就好了！」'),
  { q: { p: Q_TIDY, src: LIFE, opts: [
    { zh: '我們一起收，很快就好了！', ok: 1 }, { zh: '你自己收啦！' }, { zh: '不要管它。' }, { zh: '我幫你全部收好。' },
  ], wrong: [say('rina', '再想想看，怎麼說室友比較願意一起做？')], ok: [say('rina', '對！下次就這樣說。')] } },
  { redo: 'R10' },
];
const Q_COOK = T('同學請你在寢室煮火鍋，你要怎麼說？', 'Bạn rủ nấu lẩu trong phòng, bạn nói gì?', 'Teman mengajakmu memasak hotpot di kamar, kamu bilang apa?', 'A classmate asks you to cook hot pot in the room. What do you say?', 'เพื่อนชวนต้มหม้อไฟในห้อง คุณจะพูดว่าอะไร', 'သူငယ်ချင်းက အခန်းထဲမှာ ဟော့ပေါ့ချက်ဖို့ ခေါ်ရင် ဘာပြောမလဲ။');
const Q_SEE = T('看到同學在寢室煮東西，你可以怎麼做？', 'Thấy bạn nấu ăn trong phòng, bạn có thể làm gì?', 'Melihat teman memasak di kamar, apa yang bisa kamu lakukan?', 'If you see a classmate cooking in the room, what can you do?', 'ถ้าเห็นเพื่อนทำอาหารในห้อง คุณทำอะไรได้บ้าง', 'သူငယ်ချင်း အခန်းထဲမှာ ချက်ပြုတ်နေတာ မြင်ရင် ဘာလုပ်လို့ရလဲ။');

const EVENTS = {
  // 7 月：到機場接新生（主角變成學長姊）
  N01: [
    { scene: 'airport', npc: 'rina' },
    n('n01a'),
    say('rina', '今年我三年級了，你來幫我帶新生吧！'),
    n('n01b'),
    { scene: 'airport', npc: 'newbie' },
    say('newbie', '你、你好……我的中文……不太好……'),
    { q: { p: T('學妹很緊張，你要說什麼？', 'Em khóa dưới rất hồi hộp, bạn nói gì?', 'Adik kelas sangat gugup, kamu bilang apa?', 'The new student is very nervous. What do you say?', 'น้องใหม่ตื่นเต้นมาก คุณจะพูดว่าอะไร', 'ညီမလေးက အရမ်း စိတ်လှုပ်ရှားနေတယ်၊ ဘာပြောမလဲ။'), src: LIFE, opts: [
      { zh: '慢慢來，沒關係。', ok: 1 }, { zh: '快一點！', r: [say('newbie', '對、對不起……')] }, { zh: '我不知道。' }, { zh: '再見。' },
    ], wrong: [say('rina', '想想看，林老師以前怎麼跟你說？')], ok: [say('newbie', '謝謝{senior}！'), { fx: { pop: 3, mood: 10 } }] } },
    { scene: 'airport', npc: 'rina' },
    say('rina', '我們先去換錢，再去搭車回學校。', { listen: 1 }),
    { q: { p: T('要先做什麼？', 'Phải làm gì trước?', 'Harus melakukan apa dulu?', 'What do you do first?', 'ต้องทำอะไรก่อน', 'ဘာကို အရင်လုပ်ရမလဲ။'), src: LIFE, opts: [
      { zh: '先換錢', ok: 1 }, { zh: '先搭車', r: [say('rina', '沒有台幣，怎麼買車票呢？')] }, { zh: '先吃飯' }, { zh: '先睡覺' },
    ], wrong: [say('rina', '再聽一次喔。')], ok: [say('rina', '對！你現在是可靠的{senior}了。'), { fx: { aff: { rina: 1 } } }] } },
  ],

  // 探索教育（三堂，只有在校的同學會上到）
  X01: [
    { scene: 'adventure', npc: 'coach' },
    n('x01a'),
    say('coach', '大家圍成一個圓圈，說你的名字和一個喜歡的東西。'),
    { q: { p: P.say, src: LIFE, opts: [
      { zh: '我叫{name}，我喜歡唱歌。', ok: 1 }, { zh: '我叫唱歌。', r: [say('tongxue', '你的名字是唱歌嗎？')] }, { zh: '你喜歡我。' }, { zh: '我是圓圈。' },
    ], wrong: [say('coach', '先說名字，再說喜歡什麼。')], ok: [say('coach', '很好，大家拍拍手！')] } },
    n('x01b'),
    say('coach', '倒以前要問：「準備好了嗎？」大家說「好了」，你才可以倒。', { listen: 1 }),
    { q: { p: T('什麼時候才可以倒？', 'Khi nào mới được ngã?', 'Kapan boleh menjatuhkan diri?', 'When are you allowed to fall?', 'เมื่อไรถึงจะล้มได้', 'ဘယ်အချိန်မှ လဲချလို့ရလဲ။'), src: LIFE, opts: [
      { zh: '大家說「好了」以後', ok: 1 }, { zh: '馬上', r: [say('coach', '等一下！大家還沒準備好！')] }, { zh: '教練走了以後' }, { zh: '下課以後' },
    ], wrong: [say('coach', '安全第一，再聽一次。')], ok: [say('amei', '準備好了！我們接住你了！'), { fx: { aff: { amei: 1 } } }] } },
    n('x01c'),
    { fx: { mood: 10, pop: 3, hp: -10 } },
  ],
  X02: [
    { scene: 'adventure', npc: 'coach' },
    n('x02a'),
    say('coach', '碰到繩子，就要從頭開始。大家先討論，再行動。', { listen: 1 }),
    { q: { p: T('碰到繩子會怎麼樣？', 'Chạm vào dây thì sao?', 'Apa yang terjadi kalau menyentuh tali?', 'What happens if you touch the rope?', 'ถ้าโดนเชือกจะเป็นอย่างไร', 'ကြိုးကို ထိရင် ဘာဖြစ်မလဲ။'), src: LIFE, opts: [
      { zh: '要從頭開始', ok: 1 }, { zh: '可以繼續', r: [say('coach', '不行喔，要從頭開始。')] }, { zh: '馬上下課' }, { zh: '大家回家' },
    ], wrong: [say('coach', '再聽一次規則。')] } },
    { scene: 'adventure', npc: 'tongxue' },
    say('tongxue', '我太高了，過不去……'),
    { q: { p: T('同學過不去，你要怎麼說？', 'Bạn không qua được, bạn nói gì?', 'Temanmu tidak bisa lewat, kamu bilang apa?', 'Your classmate can’t get through. What do you say?', 'เพื่อนลอดไม่ผ่าน คุณจะพูดว่าอะไร', 'သူငယ်ချင်း မဖြတ်နိုင်ဘူး၊ ဘာပြောမလဲ။'), src: LIFE, opts: [
      { zh: '我們一起把你抬過去！', ok: 1 }, { zh: '你自己想辦法。', r: [say('tongxue', '……好吧。')] }, { zh: '我先走了。' }, { zh: '不要玩了。' },
    ], wrong: [say('coach', '這是團隊挑戰，要互相幫忙。')], ok: [say('tongxue', '謝謝你們！'), { fx: { aff: { tongxue: 1 } } }] } },
    n('x02b'),
    { fx: { mood: 10, pop: 5, hp: -10 } },
  ],
  X03: [
    { scene: 'climb', npc: 'coach' },
    n('x03a'),
    say('coach', '上去以前，一定要戴安全帽，穿好安全帶。', { listen: 1 }),
    { q: { p: T('上去以前要做什麼？', 'Trước khi leo phải làm gì?', 'Sebelum naik, harus melakukan apa?', 'What must you do before you climb?', 'ก่อนปีนต้องทำอะไร', 'မတက်ခင် ဘာလုပ်ရမလဲ။'), src: LIFE, opts: [
      { zh: '戴安全帽、穿安全帶', ok: 1 }, { zh: '先吃東西' }, { zh: '先拍照', r: [say('coach', '拍照可以等一下，安全第一。')] }, { zh: '把鞋子脫掉' },
    ], wrong: [say('coach', '再聽一次喔。')] } },
    say('coach', '累了就說「休息」，我會拉住繩子。', { listen: 1 }),
    { q: { p: T('累了要說什麼？', 'Mệt thì phải nói gì?', 'Kalau lelah, bilang apa?', 'What do you say when you’re tired?', 'ถ้าเหนื่อยต้องพูดว่าอะไร', 'ပင်ပန်းရင် ဘာပြောရမလဲ။'), src: LIFE, opts: [
      { zh: '休息', ok: 1 }, { zh: '加油' }, { zh: '再見', r: [say('coach', '你要去哪裡？哈哈！')] }, { zh: '快一點' },
    ], wrong: [say('coach', '要說「休息」喔。')] } },
    n('x03b'),
    { card: 'adventure' },
    { ifScore: 2, then: [say('coach', '你很勇敢！這是給你的勇氣之星。'), { title: 'brave' }, { fx: { mood: 15, pop: 5, hp: -15 } }],
      else: [say('coach', '你做到了！下次會更好。'), { fx: { mood: 10, hp: -15 } }] },
  ],

  // 8 月：居留證延期
  N02: [
    { scene: 'office', npc: 'chen' },
    n('n02a'),
    { poster: [['要帶', '護照、居留證'], ['', '在學證明、照片一張'], ['規費', '1,000 元'], ['時間', '星期一到星期五']], title: '居留證延期' },
    say('chen', '在學證明可以到教務處申請。'),
    { q: { p: T('延期要帶幾張照片？', 'Gia hạn cần mang mấy tấm ảnh?', 'Perpanjangan perlu membawa berapa foto?', 'How many photos do you need for the extension?', 'ต่ออายุต้องใช้รูปกี่ใบ', 'သက်တမ်းတိုးဖို့ ဓာတ်ပုံ ဘယ်နှပုံ ယူရမလဲ။'), src: LIFE, opts: [
      { zh: '一張', ok: 1 }, { zh: '兩張' }, { zh: '三張' }, { zh: '不用', r: [say('chen', '要帶喔，再看一次。')] },
    ], wrong: [say('chen', '再看一次。')] } },
    { q: { p: T('規費多少錢？', 'Lệ phí bao nhiêu tiền?', 'Biayanya berapa?', 'How much is the fee?', 'ค่าธรรมเนียมเท่าไร', 'အခကြေးငွေ ဘယ်လောက်လဲ။'), src: LIFE, opts: [
      { zh: '1,000 元', ok: 1 }, { zh: '100 元' }, { zh: '10,000 元', r: [say('chen', '沒有那麼貴啦。')] }, { zh: '不用錢' },
    ], wrong: [say('chen', '看「規費」那一行。')] } },
    { scene: 'office', npc: 'officer' },
    say('officer', '請先拿號碼牌，再到三號櫃台。', { listen: 1 }),
    { q: { p: T('要到幾號櫃台？', 'Phải đến quầy số mấy?', 'Harus ke loket nomor berapa?', 'Which counter should you go to?', 'ต้องไปช่องบริการหมายเลขเท่าไร', 'ကောင်တာ နံပါတ် ဘယ်လောက်ကို သွားရမလဲ။'), src: LIFE, opts: [
      { zh: '三號', ok: 1 }, { zh: '一號' }, { zh: '十三號' }, { zh: '三十號', r: [say('officer', '我們沒有那麼多櫃台喔。')] },
    ], wrong: [say('officer', '三號櫃台。')] } },
    say('officer', '好了，新的居留證兩個星期以後來拿。'),
    { fx: { money: -1000 } },
    n('n02b'),
  ],

  // 9 月：二年級開學（在校看課表；在職學新的工作）
  N03: [
    { ifStatus: 'school', then: [
      { scene: 'classroom', npc: 'chen' },
      n('n03a'),
      { poster: [['星期一', '國文、數學'], ['星期二', '英文、專業課'], ['星期三', '華語、體育'], ['星期四', '專業課、音樂'], ['星期五', '探索教育']], title: '二年級課表' },
      { q: { p: T('探索教育是星期幾？', 'Môn Giáo dục trải nghiệm học vào thứ mấy?', 'Pendidikan Petualangan hari apa?', 'What day is Adventure Education?', 'วิชาการศึกษาเชิงผจญภัยเรียนวันอะไร', 'စွန့်စားလေ့လာရေးပညာက ဘာနေ့လဲ။'), src: LIFE, opts: [
        { zh: '星期五', ok: 1 }, { zh: '星期一' }, { zh: '星期三' }, { zh: '星期六', r: [say('chen', '星期六不用上課喔。')] },
      ], wrong: [say('chen', '再看一次課表。')], ok: [say('chen', '對。二年級的課比較多，要加油。')] } },
    ], else: [
      { scene: 'work', npc: 'zhang' },
      n('n03w'),
      say('zhang', '今年你是二年級了，可以學比較難的工作。', { listen: 1 }),
      { q: { p: T('張師傅說什麼？', 'Thầy Trương nói gì?', 'Apa kata Pak Zhang?', 'What did Master Zhang say?', 'อาจารย์จางพูดว่าอะไร', 'ဆရာကျန်း ဘာပြောလဲ။'), src: LIFE, opts: [
        { zh: '學比較難的工作', ok: 1 }, { zh: '回家休息' }, { zh: '不用來上班', r: [say('zhang', '要來喔！')] }, { zh: '去教室上課' },
      ], wrong: [say('zhang', '再聽一次。')], ok: [{ fx: { skill: 3, aff: { zhang: 1 } } }] } },
    ] },
  ],

  I07: inspection(),
  I08: inspection(),

  // 第五章新增的隨機事件
  R08: [
    { scene: 'room', npc: 'amei' },
    n('r08a'),
    say('amei', '颱風來以前，我們要先去買東西。'),
    { q: { p: T('颱風來以前，要先準備什麼？', 'Trước khi bão đến, cần chuẩn bị gì?', 'Sebelum topan datang, apa yang harus disiapkan?', 'Before the typhoon comes, what should you prepare?', 'ก่อนพายุมา ต้องเตรียมอะไร', 'မုန်တိုင်းမလာခင် ဘာပြင်ဆင်ထားရမလဲ။'), src: LIFE, opts: [
      { zh: '水和吃的東西', ok: 1 }, { zh: '冰淇淋', r: [say('amei', '停電的話，冰淇淋會化掉喔！')] }, { zh: '新衣服' }, { zh: '電影票' },
    ], wrong: [say('amei', '要準備可以吃、可以喝的東西。')], ok: [say('amei', '對！還有手電筒。'), { fx: { money: -150, mood: 5, aff: { amei: 1 } } }] } },
  ],
  R09: [
    { scene: 'campus', npc: 'tongxue' },
    n('r09a'),
    { q: { p: T('你要怎麼做？', 'Bạn nên làm gì?', 'Apa yang harus kamu lakukan?', 'What should you do?', 'คุณควรทำอย่างไร', 'ဘာလုပ်သင့်လဲ။'), src: LIFE, opts: [
      { zh: '帶他到樹下休息、喝水', ok: 1 }, { zh: '叫他繼續跑', r: [say('tongxue', '我……真的很不舒服……')] }, { zh: '給他吃辣的' }, { zh: '不要管他' },
    ], wrong: [say('tongxue', '我好熱，想坐下來……')], ok: [say('tongxue', '謝謝你，我好多了。'), { fx: { mood: 5, aff: { tongxue: 1 } } }] } },
  ],

  // 宿舍：室友不收拾（隨機）
  R10: [
    { scene: 'room', npc: 'amei' },
    n('r10a'),
    say('amei', '好累喔，明天再收啦……'),
    { q: { p: P.say, src: LIFE, opts: [
      { zh: '我們一起收，很快就好了！', ok: 1, then: [say('amei', '好啦，一起收比較快！'), { fx: { tidy: 15, aff: { amei: 1 } } }] },
      { zh: '你自己收啦！', end: 1, r: [say('amei', '好啦好啦……'), { fx: { tidy: 5 } }, ...teachTidy('只叫室友自己收，他常常會拖到明天。一起做，他比較願意。')] },
      { zh: '我幫你全部收好。', end: 1, r: [say('amei', '太好了！下次也拜託你！'), { fx: { tidy: 15, hp: -10 } }, ...teachTidy('你不用全部幫他做，房間是大家的，要一起整理。')] },
      { zh: '不要管它。', end: 1, r: [{ n: N1.trash }, { fx: { tidy: -10 } }, ...teachTidy('房間是大家的，不能不管，不然阿姨檢查會不及格。')] },
    ], wrong: [say('amei', '……那我們一起收好了。')], ok: [] } },
  ],
  // 宿舍：偷煮火鍋（隨機；一起吃算嚴重違規）
  R11: [
    { scene: 'dorm', npc: 'tongxue' },
    n('r11a'),
    say('tongxue', '一起吃啦！阿姨不會知道的。'),
    { q: { p: T('你要怎麼做？', 'Bạn nên làm gì?', 'Apa yang harus kamu lakukan?', 'What should you do?', 'คุณควรทำอย่างไร', 'ဘာလုပ်သင့်လဲ။'), src: LIFE, opts: [
      { zh: '不行，寢室不能煮東西，很危險。', ok: 1, then: [say('tongxue', '……好啦，我收起來。'), { fx: { mood: 3 } }] },
      { zh: '去告訴宿舍阿姨', ok: 1, then: [{ scene: 'dorm', npc: 'ayi' }, say('ayi', '謝謝你告訴我，用電鍋煮東西很容易跳電，太危險了。'), { fx: { aff: { ayi: 2, tongxue: -1 } } }] },
      { zh: '好啊，一起吃！', end: 1, r: [n('r11b'), { scene: 'dorm', npc: 'ayi' }, say('ayi', '寢室不能用電器煮東西！這是嚴重違規。'), say('ayi', '你們都要寫悔過書，還要去愛校服務。'), { violation: 1 }, { fx: { tidy: -20, mood: -15, hp: -10 } },
        say('ayi', '下次同學請你在寢室煮東西，你要說：「不行，寢室不能煮東西，很危險。」'),
        { q: { p: Q_COOK, src: LIFE, opts: [
          { zh: '不行，寢室不能煮東西，很危險。', ok: 1 }, { zh: '好啊，一起吃！' }, { zh: '小聲一點就好。' }, { zh: '我不知道。' },
        ], wrong: [say('ayi', '不對喔，再想一次。')], ok: [say('ayi', '對！這樣說就對了。')] } },
        { redo: 'R11' }] },
      { zh: '假裝沒看到', end: 1, r: [n('r11c'), { fx: { mood: -5 } },
        { scene: 'dorm', npc: 'rina' },
        say('rina', '看到同學在寢室煮東西，可以勸他，也可以告訴宿舍阿姨。很容易跳電，甚至會發生火災。'),
        { q: { p: Q_SEE, src: LIFE, opts: [
          { zh: '勸他，或告訴宿舍阿姨', ok: 1 }, { zh: '假裝沒看到' }, { zh: '一起吃' }, { zh: '拍照上網' },
        ], wrong: [say('rina', '再想想看，這樣很危險喔。')], ok: [say('rina', '對！安全最重要。')] } },
        { redo: 'R11' }] },
    ], wrong: [say('ayi', '記得：宿舍裡不可以煮東西喔。')], ok: [] } },
  ],
  // 複習：之後再遇到一次類似情況（這次答錯可以重選，答對有小獎勵）
  R10b: [
    { scene: 'room', npc: 'amei' },
    n('r10b'),
    say('amei', '唉，我又忘記收了……'),
    { q: { p: P.say, src: LIFE, opts: [
      { zh: '我們一起收，很快就好了！', ok: 1 }, { zh: '你自己收啦！', r: [say('amei', '……好啦，明天再收。')] }, { zh: '不要管它。' }, { zh: '我幫你全部收好。', r: [say('amei', '太好了，那我去玩了！')] },
    ], wrong: [say('amei', '嗯……那你說怎麼辦？')], ok: [say('amei', '好！這次我來倒垃圾。'), { fx: { tidy: 15, mood: 5, aff: { amei: 1 } } }] } },
  ],
  R11b: [
    { scene: 'dorm', npc: 'tongxue' },
    n('r11d'),
    say('tongxue', '我好餓，在房間煮一下就好。'),
    { q: { p: P.say, src: LIFE, opts: [
      { zh: '不行，寢室不能煮東西，很危險。', ok: 1, then: [say('tongxue', '好啦……我收起來。'), { fx: { mood: 5, aff: { ayi: 1 } } }] },
      { zh: '我們去交誼廳用熱水泡就好。', ok: 1, then: [say('tongxue', '好主意！走吧。'), { fx: { mood: 5, aff: { tongxue: 1 } } }] },
      { zh: '好啊，煮大碗一點！', r: [say('tongxue', '……你上次不是被阿姨罵了嗎？')] }, { zh: '我不知道。' },
    ], wrong: [say('tongxue', '你覺得呢？')], ok: [] } },
  ],
  // 違規兩次：導師約談
  W4: [
    { scene: 'office', npc: 'chen' },
    n('w4a'),
    say('chen', '宿舍阿姨說，你這學期已經違規兩次了。'),
    say('chen', '再違規一次，就要請你搬出宿舍。', { listen: 1 }),
    { q: { p: T('陳導師說，再違規會怎麼樣？', 'Thầy Trần nói nếu vi phạm nữa thì sao?', 'Kata Pak Chen, kalau melanggar lagi bagaimana?', 'What does Mr. Chen say will happen if you break the rules again?', 'ครูเฉินบอกว่าถ้าทำผิดอีกจะเป็นอย่างไร', 'ဆရာချန်က ထပ်ချိုးဖောက်ရင် ဘာဖြစ်မလဲလို့ ပြောလဲ။'), src: LIFE, opts: [
      { zh: '要搬出宿舍', ok: 1 }, { zh: '可以多休息' }, { zh: '不會怎麼樣', r: [say('chen', '會喔，這不是開玩笑的。')] }, { zh: '要請大家吃飯' },
    ], wrong: [say('chen', '再聽一次。')], ok: [say('chen', '知道就好。有問題就來找我。')] } },
    { fx: { mood: -10 } },
  ],

  // 上課：上午隨機一科（華語課用原本的題庫）；下午專業課依科別
  L_GUO: lesson('classroom', 'lguo', '請把課本翻到第二十頁。', T('要翻到第幾頁？', 'Phải lật đến trang mấy?', 'Harus buka halaman berapa?', 'Which page should you turn to?', 'ต้องเปิดไปหน้าที่เท่าไร', 'စာမျက်နှာ ဘယ်နှစ်ကို လှန်ရမလဲ။'),
    [{ zh: '第二十頁', ok: 1 }, { zh: '第十二頁' }, { zh: '第二頁' }, { zh: '第二百頁' }]),
  L_ENG: lesson('classroom', 'leng', '「蘋果」的英文是什麼？', T('「蘋果」的英文是什麼？', 'Từ “蘋果” tiếng Anh là gì?', 'Apa bahasa Inggrisnya “蘋果”?', 'What is “蘋果” in English?', '“蘋果” ภาษาอังกฤษคืออะไร', '“蘋果” ကို အင်္ဂလိပ်လို ဘယ်လိုခေါ်လဲ။'),
    [{ zh: 'apple', ok: 1 }, { zh: 'banana' }, { zh: 'orange' }, { zh: 'egg' }], '對，apple！'),
  L_MATH: lesson('classroom', 'lmath', '十二加十八，等於多少？', T('十二加十八等於多少？', 'Mười hai cộng mười tám bằng bao nhiêu?', 'Dua belas ditambah delapan belas sama dengan berapa?', 'What is twelve plus eighteen?', 'สิบสองบวกสิบแปดเท่ากับเท่าไร', 'ဆယ့်နှစ် ပေါင်း ဆယ့်ရှစ် ဘယ်လောက်လဲ။'),
    [{ zh: '三十', ok: 1 }, { zh: '二十' }, { zh: '六' }, { zh: '三十八' }]),
  L_MUSIC: lesson('classroom', 'lmusic', '聲音要大一點，大家一起唱！', T('老師要大家怎麼唱？', 'Thầy muốn mọi người hát thế nào?', 'Guru ingin semua bernyanyi bagaimana?', 'How does the teacher want everyone to sing?', 'ครูอยากให้ทุกคนร้องแบบไหน', 'ဆရာက အားလုံးကို ဘယ်လို ဆိုစေချင်လဲ။'),
    [{ zh: '大聲一點', ok: 1 }, { zh: '小聲一點' }, { zh: '不要唱' }, { zh: '一個人唱' }]),
  L_PE: lesson('campus', 'lpe', '先跑兩圈，再休息五分鐘。', T('要跑幾圈？', 'Phải chạy mấy vòng?', 'Harus lari berapa putaran?', 'How many laps do you run?', 'ต้องวิ่งกี่รอบ', 'ဘယ်နှပတ် ပြေးရမလဲ။'),
    [{ zh: '兩圈', ok: 1 }, { zh: '五圈' }, { zh: '一圈' }, { zh: '十圈' }]),
  L_PRO0: lesson('work', 'lpro0', '寫完以後，一定要記得存檔。', T('寫完以後要做什麼？', 'Viết xong phải làm gì?', 'Setelah selesai menulis, harus apa?', 'What must you do after you finish writing?', 'เขียนเสร็จแล้วต้องทำอะไร', 'ရေးပြီးရင် ဘာလုပ်ရမလဲ။'),
    [{ zh: '存檔', ok: 1 }, { zh: '關燈' }, { zh: '刪掉' }, { zh: '吃飯' }]),
  L_PRO1: lesson('work', 'lpro1', '烤箱要先熱到一百八十度。', T('烤箱要熱到幾度？', 'Lò nướng phải làm nóng đến bao nhiêu độ?', 'Oven harus dipanaskan sampai berapa derajat?', 'What temperature should the oven be heated to?', 'ต้องอุ่นเตาอบถึงกี่องศา', 'မီးဖိုကို ဘယ်နှဒီဂရီအထိ ပူအောင်လုပ်ရမလဲ။'),
    [{ zh: '一百八十度', ok: 1 }, { zh: '十八度' }, { zh: '八十度' }, { zh: '一百度' }]),
  L_PRO2: lesson('work', 'lpro2', '切菜以前，要先洗手。', T('切菜以前要做什麼？', 'Trước khi cắt rau phải làm gì?', 'Sebelum memotong sayur, harus apa?', 'What should you do before cutting vegetables?', 'ก่อนหั่นผักต้องทำอะไร', 'ဟင်းသီးဟင်းရွက် မလှီးခင် ဘာလုပ်ရမလဲ။'),
    [{ zh: '洗手', ok: 1 }, { zh: '睡覺' }, { zh: '打電話' }, { zh: '吃東西' }]),
  L_PRO3: lesson('work', 'lpro3', '換輪胎要用扳手。', T('換輪胎要用什麼？', 'Thay lốp xe phải dùng gì?', 'Mengganti ban pakai apa?', 'What do you use to change a tire?', 'เปลี่ยนยางต้องใช้อะไร', 'ဘီးလဲဖို့ ဘာသုံးရမလဲ။'),
    [{ zh: '扳手', ok: 1 }, { zh: '筷子' }, { zh: '剪刀' }, { zh: '湯匙' }]),
  L_PRO4: lesson('work', 'lpro4', '標題要放在第一行。', T('標題要放在哪裡？', 'Tiêu đề phải đặt ở đâu?', 'Judul harus diletakkan di mana?', 'Where should the title go?', 'หัวข้อต้องวางไว้ที่ไหน', 'ခေါင်းစဉ်ကို ဘယ်မှာ ထားရမလဲ။'),
    [{ zh: '第一行', ok: 1 }, { zh: '最後一行' }, { zh: '第二頁' }, { zh: '旁邊' }]),
};

module.exports = { N, EVENTS };

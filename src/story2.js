// 第二章劇本資料（10–12 月）。zh = 中文；vi id en th my = 五種輔助語言。
const { T, P } = require('./story.js');

const N = {
  m04a: T('宿舍大廳貼了一張海報：中秋節烤肉晚會！', 'Sảnh ký túc xá dán một tấm áp phích: Tiệc nướng Trung thu!', 'Di lobi asrama ada poster: Pesta barbeku Festival Pertengahan Musim Gugur!', 'A poster in the dorm lobby: Mid-Autumn Festival barbecue night!', 'ที่ล็อบบี้หอพักติดโปสเตอร์ไว้: งานปิ้งย่างวันไหว้พระจันทร์!', 'အဆောင်ဧည့်ခန်းမှာ ပိုစတာတစ်ခု ကပ်ထားတယ်- လသာပွဲတော် အသားကင်ညစာ!'),
  m04b: T('你走到學校後面，一個人也沒有。', 'Bạn đi ra sau trường, chẳng có ai cả.', 'Kamu pergi ke belakang sekolah, tidak ada siapa-siapa.', 'You walk behind the school. Nobody is there.', 'คุณเดินไปหลังโรงเรียน ไม่มีใครเลยสักคน', 'ကျောင်းနောက်ဘက်ကို သွားကြည့်တော့ ဘယ်သူမှ မရှိဘူး။'),
  m04c: T('晚上，宿舍前面都是烤肉的香味。王阿嬌提著一盒東西走來。', 'Buổi tối, trước ký túc xá thơm mùi thịt nướng. Bà A Kiều xách một hộp đồ đi tới.', 'Malam hari, depan asrama harum bau barbeku. Nenek A Jiao datang membawa sebuah kotak.', 'In the evening, the smell of barbecue fills the dorm yard. Grandma A-Jiao walks over with a box.', 'ตอนค่ำ หน้าหอพักมีแต่กลิ่นปิ้งย่าง คุณยายอาเจียวถือกล่องหนึ่งเดินมา', 'ညနေ၊ အဆောင်ရှေ့မှာ အသားကင်နံ့တွေ မွှေးနေတယ်။ အဖွားအာကျောင် သေတ္တာတစ်လုံး ဆွဲလာတယ်။'),
  m04d: T('你拿起蛋糕，要唱生日快樂歌……', 'Bạn cầm bánh kem lên định hát chúc mừng sinh nhật…', 'Kamu mengangkat kue dan mau menyanyikan lagu selamat ulang tahun…', 'You pick up a cake and start singing “Happy Birthday”…', 'คุณหยิบเค้กขึ้นมา จะร้องเพลงสุขสันต์วันเกิด…', 'ကိတ်မုန့်ကို ကောက်ကိုင်ပြီး မွေးနေ့သီချင်း ဆိုမလို့…'),
  m04e: T('月亮又大又圓。阿嬌說，中秋節大家一起看月亮，就像和遠方的家人在一起。你拍了一張月亮，傳給家人。', 'Trăng vừa to vừa tròn. Bà A Kiều nói, Trung thu cùng ngắm trăng là như được ở bên gia đình ở xa. Bạn chụp ảnh mặt trăng gửi cho gia đình.', 'Bulan besar dan bulat. Nenek A Jiao bilang, melihat bulan bersama saat festival ini seperti bersama keluarga yang jauh. Kamu memotret bulan dan mengirimnya ke keluarga.', 'The moon is big and round. A-Jiao says watching the moon together is like being with family far away. You take a photo of the moon and send it home.', 'พระจันทร์ทั้งใหญ่และกลม อาเจียวบอกว่า ดูพระจันทร์ด้วยกันในวันไหว้พระจันทร์ ก็เหมือนได้อยู่กับครอบครัวที่อยู่ไกล คุณถ่ายรูปพระจันทร์ส่งให้ครอบครัว', 'လက ကြီးပြီး ဝိုင်းနေတယ်။ အာကျောင်က လသာပွဲမှာ အတူတူ လကြည့်ရတာ ဝေးနေတဲ့ မိသားစုနဲ့ အတူရှိသလိုပဲတဲ့။ လဓာတ်ပုံရိုက်ပြီး မိသားစုဆီ ပို့လိုက်တယ်။'),

  m05w: T('你決定先把工作證辦好，等回學校上課再去打工。', 'Bạn quyết định làm giấy phép lao động trước, đợi quay lại trường học rồi mới đi làm thêm.', 'Kamu memutuskan mengurus izin kerja dulu, lalu kerja paruh waktu setelah kembali sekolah.', 'You decide to get your work permit first and find a part-time job once you are back at school.', 'คุณตัดสินใจทำใบอนุญาตทำงานก่อน แล้วค่อยทำงานพาร์ตไทม์ตอนกลับมาเรียน', 'အလုပ်လုပ်ခွင့်ကို အရင်လုပ်ထားပြီး ကျောင်းပြန်တက်ချိန်မှ အချိန်ပိုင်းအလုပ် လုပ်ဖို့ ဆုံးဖြတ်လိုက်တယ်။'),
  m05a: T('你想存錢買禮物寄回家。小陽說他們店在找工讀生。', 'Bạn muốn để dành tiền mua quà gửi về nhà. Tiểu Dương nói cửa hàng đang tuyển nhân viên làm thêm.', 'Kamu ingin menabung untuk membeli hadiah bagi keluarga. Xiao Yang bilang tokonya sedang mencari pekerja paruh waktu.', 'You want to save money to send presents home. Xiao-Yang says his store is hiring part-timers.', 'คุณอยากเก็บเงินซื้อของขวัญส่งกลับบ้าน เสี่ยวหยางบอกว่าร้านกำลังหาพนักงานพาร์ตไทม์', 'အိမ်ကို လက်ဆောင်ပို့ဖို့ ပိုက်ဆံစုချင်တယ်။ ရှောင်ယန်က သူ့ဆိုင်မှာ အချိန်ပိုင်းဝန်ထမ်း ရှာနေတယ်တဲ့။'),
  m05b: T('你先去辦公室問陳導師。', 'Bạn đến văn phòng hỏi thầy chủ nhiệm Trần trước.', 'Kamu bertanya dulu kepada wali kelas Pak Chen di kantor.', 'First, you go to the office to ask Mr. Chen, your homeroom teacher.', 'คุณไปถามครูประจำชั้นเฉินที่ห้องทำงานก่อน', 'အရင်ဆုံး ရုံးခန်းမှာ အတန်းပိုင်ဆရာချန်ကို သွားမေးတယ်။'),
  m05d: T('小陽讓你試著站櫃台。王阿嬌剛好拿著一瓶牛奶來結帳。', 'Tiểu Dương cho bạn thử đứng quầy. Bà A Kiều vừa lúc mang một chai sữa tới tính tiền.', 'Xiao Yang membiarkanmu mencoba di kasir. Kebetulan Nenek A Jiao datang membayar sebotol susu.', 'Xiao-Yang lets you try the register. Grandma A-Jiao happens to come up with a bottle of milk.', 'เสี่ยวหยางให้คุณลองยืนเคาน์เตอร์ พอดีคุณยายอาเจียวถือนมหนึ่งขวดมาจ่ายเงิน', 'ရှောင်ယန်က ငွေကောင်တာမှာ စမ်းရပ်ခိုင်းတယ်။ အဖွားအာကျောင် နွားနို့တစ်ပုလင်းနဲ့ ငွေလာရှင်းတယ်။'),
  m05e: T('阿嬌拿出一張一百塊。', 'Bà A Kiều đưa ra tờ một trăm đồng.', 'Nenek A Jiao mengeluarkan uang seratus dolar.', 'A-Jiao hands over a 100-dollar bill.', 'อาเจียวยื่นแบงก์หนึ่งร้อยมาให้', 'အာကျောင်က တစ်ရာတန် တစ်ရွက် ထုတ်ပေးတယ်။'),
  m05f: T('錄取了！之後晚上可以選「打工」。', 'Được nhận rồi! Từ giờ buổi tối có thể chọn “làm thêm”.', 'Diterima! Mulai sekarang malam hari bisa memilih “kerja paruh waktu”.', 'You got the job! You can now choose “Part-time job” in the evening.', 'ได้งานแล้ว! ต่อไปตอนเย็นเลือก “ทำงานพาร์ตไทม์” ได้', 'အလုပ်ရပြီ! နောက်ပိုင်း ညနေမှာ “အချိန်ပိုင်းအလုပ်” ရွေးလို့ရပြီ။'),

  m06a: T('阿蜜幫你報名了歌唱比賽。你好緊張！', 'A Mật đã đăng ký cho bạn cuộc thi hát. Bạn hồi hộp quá!', 'A Mi mendaftarkanmu ke lomba menyanyi. Kamu gugup sekali!', 'A-Mi signed you up for the singing contest. You are so nervous!', 'อาหมี่สมัครประกวดร้องเพลงให้คุณ คุณตื่นเต้นมาก!', 'အာမိက သီချင်းပြိုင်ပွဲမှာ နာမည်စာရင်းသွင်းပေးလိုက်တယ်။ အရမ်းစိတ်လှုပ်ရှားတယ်!'),
  m06b: T('林老師在黑板上寫了四個字：媽、麻、馬、罵。', 'Cô Lâm viết bốn chữ lên bảng: 媽、麻、馬、罵.', 'Bu Lin menulis empat huruf di papan: 媽、麻、馬、罵.', 'Ms. Lin writes four characters on the board: 媽, 麻, 馬, 罵.', 'ครูหลินเขียนตัวอักษรสี่ตัวบนกระดาน: 媽、麻、馬、罵', 'ဆရာမလင်က ကျောက်သင်ပုန်းပေါ်မှာ စာလုံးလေးလုံး ရေးတယ်- 媽、麻、馬、罵'),
  m06c: T('禮堂坐滿了人。下一個就是你！前面的同學也很緊張。', 'Hội trường kín người. Người tiếp theo là bạn! Bạn đứng trước cũng rất hồi hộp.', 'Aula penuh orang. Giliran berikutnya kamu! Teman di depanmu juga gugup.', 'The auditorium is full. You are next! The student before you looks nervous too.', 'หอประชุมคนเต็ม คนต่อไปคือคุณ! เพื่อนที่อยู่ข้างหน้าก็ตื่นเต้นเหมือนกัน', 'ခန်းမထဲ လူပြည့်နေတယ်။ နောက်တစ်ယောက်က သင်ပဲ! ရှေ့က ကျောင်းသားလည်း စိတ်လှုပ်ရှားနေတယ်။'),
  m06song: T('月亮圓，月亮亮，我在台灣看月亮。媽媽媽媽你好嗎？我很好，不要擔心我。', 'Trăng tròn, trăng sáng, con ngắm trăng ở Đài Loan. Mẹ ơi mẹ có khỏe không? Con khỏe, mẹ đừng lo cho con.', 'Bulan bulat, bulan terang, aku melihat bulan di Taiwan. Ibu, apa kabar? Aku baik-baik saja, jangan khawatirkan aku.', 'Round moon, bright moon, I watch the moon in Taiwan. Mom, how are you? I am fine, don’t worry about me.', 'พระจันทร์กลม พระจันทร์สว่าง ฉันดูพระจันทร์ที่ไต้หวัน แม่จ๋าสบายดีไหม หนูสบายดี ไม่ต้องห่วงหนูนะ', 'လဝိုင်းဝိုင်း၊ လလင်းလင်း၊ ထိုင်ဝမ်မှာ လကြည့်နေတယ်။ အမေ နေကောင်းလား။ သားသမီး နေကောင်းပါတယ်၊ မစိုးရိမ်ပါနဲ့။'),
  m06d: T('你唱完了！台下大家都在拍手。你拿到「最佳勇氣獎」！', 'Bạn hát xong rồi! Mọi người bên dưới vỗ tay. Bạn nhận “Giải Dũng cảm nhất”!', 'Kamu selesai bernyanyi! Semua penonton bertepuk tangan. Kamu mendapat “Penghargaan Paling Berani”!', 'You finished singing! Everyone claps. You win the “Bravest Singer” award!', 'คุณร้องจบแล้ว! ทุกคนข้างล่างปรบมือ คุณได้รับ “รางวัลกล้าหาญที่สุด”!', 'သီချင်းဆိုပြီးပြီ! အောက်က လူတွေ လက်ခုပ်တီးကြတယ်။ “အရဲရင့်ဆုံးဆု” ရတယ်!'),

  m07a: T('林老師貼了一張考試通知。這是來台灣後第一次華語考試。', 'Cô Lâm dán một thông báo thi. Đây là lần thi tiếng Hoa đầu tiên từ khi đến Đài Loan.', 'Bu Lin menempel pengumuman ujian. Ini ujian bahasa Mandarin pertama sejak datang ke Taiwan.', 'Ms. Lin posts an exam notice. It is your first Chinese exam in Taiwan.', 'ครูหลินติดประกาศสอบ นี่คือการสอบภาษาจีนครั้งแรกตั้งแต่มาไต้หวัน', 'ဆရာမလင်က စာမေးပွဲကြေညာချက် ကပ်ထားတယ်။ ထိုင်ဝမ်ရောက်ပြီး ပထမဆုံး တရုတ်စာစာမေးပွဲပဲ။'),
  m07b: T('考卷發下來了。這次不能重選，選了就是答案。', 'Đề thi được phát xuống. Lần này không được chọn lại, chọn rồi là đáp án.', 'Lembar ujian dibagikan. Kali ini tidak bisa memilih ulang.', 'The test papers are handed out. This time there are no second tries.', 'แจกข้อสอบแล้ว ครั้งนี้เลือกใหม่ไม่ได้ เลือกแล้วคือคำตอบ', 'စာမေးပွဲစာရွက် ဝေလာပြီ။ ဒီတစ်ခါ ပြန်ရွေးလို့မရဘူး။'),
  m07w: T('你走進 503 教室，裡面在上數學課。全班回頭看你。', 'Bạn bước vào phòng 503, bên trong đang học toán. Cả lớp quay lại nhìn bạn.', 'Kamu masuk ruang 503, di dalam ada pelajaran matematika. Seluruh kelas menoleh.', 'You walk into room 503. A math class is going on. Everyone turns to look at you.', 'คุณเดินเข้าห้อง 503 ข้างในกำลังเรียนคณิต ทั้งห้องหันมามองคุณ', 'အခန်း 503 ထဲ ဝင်သွားတော့ သင်္ချာသင်နေတယ်။ တစ်တန်းလုံး လှည့်ကြည့်ကြတယ်။'),

  m08a: T('學校在操場辦跨年晚會，有舞台、小吃和一面願望牆。阿嬌也來了，還帶了一袋橘子。', 'Trường tổ chức đêm giao thừa ở sân vận động, có sân khấu, đồ ăn vặt và một bức tường điều ước. Bà A Kiều cũng đến, còn mang theo một túi quýt.', 'Sekolah mengadakan malam tahun baru di lapangan, ada panggung, jajanan dan dinding harapan. Nenek A Jiao juga datang membawa sekantong jeruk.', 'The school holds a New Year’s Eve party on the sports field, with a stage, snacks and a wish wall. A-Jiao comes too, with a bag of mandarins.', 'โรงเรียนจัดงานเคานต์ดาวน์ที่สนามกีฬา มีเวที ของกิน และกำแพงคำอธิษฐาน อาเจียวก็มาด้วย ถือส้มมาถุงหนึ่ง', 'ကျောင်းက အားကစားကွင်းမှာ နှစ်သစ်ကူးပွဲ လုပ်တယ်၊ စင်မြင့်၊ မုန့်တွေနဲ့ ဆန္ဒနံရံ ရှိတယ်။ အာကျောင်လည်း လိမ္မော်သီးတစ်အိတ် ယူလာတယ်။'),
  m08b: T('願望牆上貼滿了卡片。你拿起筆。', 'Bức tường điều ước dán đầy thiệp. Bạn cầm bút lên.', 'Dinding harapan penuh kartu. Kamu mengambil pena.', 'The wish wall is covered with cards. You pick up a pen.', 'กำแพงคำอธิษฐานมีการ์ดติดเต็มไปหมด คุณหยิบปากกาขึ้นมา', 'ဆန္ဒနံရံမှာ ကတ်တွေ အပြည့်ကပ်ထားတယ်။ ဘောပင်ကို ကောက်ကိုင်လိုက်တယ်။'),
  m08c: T('舞台上的主持人拿起麥克風：「大家一起倒數！」', 'Người dẫn chương trình cầm micro: “Mọi người cùng đếm ngược!”', 'Pembawa acara mengambil mikrofon: “Ayo hitung mundur bersama!”', 'The host grabs the microphone: “Let’s count down together!”', 'พิธีกรบนเวทีหยิบไมค์: “ทุกคนนับถอยหลังพร้อมกัน!”', 'စင်ပေါ်က အခမ်းအနားမှူး မိုက်ကိုင်ပြီး “အားလုံး အတူတူ နောက်ပြန်ရေကြရအောင်!”'),
  m08d: T('「一！」煙火飛上天空。', '“Một!” Pháo hoa bay lên bầu trời.', '“Satu!” Kembang api meluncur ke langit.', '“One!” Fireworks shoot into the sky.', '“หนึ่ง!” พลุพุ่งขึ้นฟ้า', '“တစ်!” မီးပန်းတွေ ကောင်းကင်ပေါ် တက်သွားတယ်။'),
  m08e: T('你拍下煙火，傳給家人。新的一年開始了！', 'Bạn chụp pháo hoa gửi cho gia đình. Năm mới bắt đầu rồi!', 'Kamu memotret kembang api dan mengirimnya ke keluarga. Tahun baru dimulai!', 'You take a photo of the fireworks and send it home. A new year begins!', 'คุณถ่ายรูปพลุส่งให้ครอบครัว ปีใหม่เริ่มแล้ว!', 'မီးပန်းကို ဓာတ်ပုံရိုက်ပြီး မိသားစုဆီ ပို့လိုက်တယ်။ နှစ်သစ် စပြီ!'),

  d10a: T('窗外風很大、雨很大。手機響了，是班級群組。', 'Ngoài cửa sổ gió to, mưa lớn. Điện thoại reo, là nhóm lớp.', 'Di luar angin kencang dan hujan deras. Ponsel berbunyi, dari grup kelas.', 'Outside, the wind and rain are strong. Your phone buzzes: the class group chat.', 'นอกหน้าต่างลมแรง ฝนตกหนัก มือถือดัง เป็นกลุ่มไลน์ของห้อง', 'ပြတင်းပေါက်အပြင်မှာ လေပြင်း မိုးသည်းနေတယ်။ ဖုန်းမြည်လာတယ်၊ အတန်းဂရုပ်ပဲ။'),
  d10b: T('你打開門，風把雨傘吹壞了。', 'Bạn mở cửa, gió thổi hỏng cả cây dù.', 'Kamu membuka pintu, angin merusak payungmu.', 'You open the door and the wind breaks your umbrella.', 'คุณเปิดประตู ลมพัดร่มพัง', 'တံခါးဖွင့်လိုက်တော့ လေက ထီးကို ချိုးပစ်လိုက်တယ်။'),
  d11a: T('夜市人很多。一個光頭的老闆拿著鍋鏟大聲喊。', 'Chợ đêm rất đông. Một ông chủ đầu trọc cầm xẻng chiên hô to.', 'Pasar malam ramai. Seorang bos berkepala botak berteriak sambil memegang spatula.', 'The night market is crowded. A bald stall owner waves a spatula and shouts.', 'ตลาดกลางคืนคนเยอะ เถ้าแก่หัวล้านถือตะหลิวตะโกนเสียงดัง', 'ညဈေးမှာ လူအများကြီး။ ခေါင်းပြောင်တဲ့ ဆိုင်ရှင်က ယောက်မကိုင်ပြီး အော်ခေါ်နေတယ်။'),
  d12a: T('第一次打工。一位客人走到櫃台。', 'Lần đầu đi làm thêm. Một vị khách đến quầy.', 'Pertama kali kerja paruh waktu. Seorang pelanggan datang ke kasir.', 'Your first shift. A customer comes to the counter.', 'ทำงานพาร์ตไทม์ครั้งแรก ลูกค้าคนหนึ่งเดินมาที่เคาน์เตอร์', 'ပထမဆုံး အချိန်ပိုင်းအလုပ်။ ဖောက်သည်တစ်ယောက် ကောင်တာကို လာတယ်။'),
  d12b: T('客人拿到冰咖啡，冷得發抖。', 'Khách nhận cà phê đá, lạnh run người.', 'Pelanggan mendapat kopi es dan menggigil.', 'The customer gets an iced coffee and shivers.', 'ลูกค้าได้กาแฟเย็นไป หนาวจนตัวสั่น', 'ဖောက်သည်က ရေခဲကော်ဖီ ရသွားပြီး ချမ်းတုန်နေတယ်။'),
  d13a: T('天氣變冷了。早上起床，喉嚨好痛，頭很熱。你打電話給陳導師。', 'Trời trở lạnh. Sáng dậy, cổ họng đau quá, đầu nóng. Bạn gọi cho thầy Trần.', 'Cuaca jadi dingin. Pagi hari tenggorokan sakit dan kepala panas. Kamu menelepon Pak Chen.', 'It got cold. You wake up with a sore throat and a hot forehead. You call Mr. Chen.', 'อากาศเย็นลง ตื่นเช้ามาเจ็บคอมาก หัวร้อน คุณโทรหาครูเฉิน', 'ရာသီဥတု အေးလာတယ်။ မနက်နိုးတော့ လည်ချောင်းနာပြီး ခေါင်းပူနေတယ်။ ဆရာချန်ကို ဖုန်းဆက်တယ်။'),
  d13b: T('你到了學校旁邊的診所。', 'Bạn đến phòng khám cạnh trường.', 'Kamu tiba di klinik di samping sekolah.', 'You arrive at the clinic next to school.', 'คุณมาถึงคลินิกข้างโรงเรียน', 'ကျောင်းဘေးက ဆေးခန်းကို ရောက်လာတယ်။'),
  d14a: T('阿蜜在便利商店拿到網購的 T 恤，穿上去，袖子長到手指。', 'A Mật nhận áo thun mua online ở cửa hàng tiện lợi, mặc thử thì tay áo dài tới ngón tay.', 'A Mi mengambil kaos belanja online di minimarket, memakainya, lengannya sampai ke jari.', 'A-Mi picks up her online T-shirt at the store and puts it on. The sleeves reach her fingers.', 'อาหมี่รับเสื้อยืดที่สั่งออนไลน์ที่ร้านสะดวกซื้อ ลองใส่ แขนเสื้อยาวถึงนิ้ว', 'အာမိက အွန်လိုင်းဝယ်ထားတဲ့ တီရှပ်ကို စတိုးဆိုင်မှာ ယူပြီး ဝတ်ကြည့်တော့ လက်က လက်ချောင်းအထိ ရှည်နေတယ်။'),
  d14b: T('網站說明：7 天內可以退貨。', 'Trang web ghi: Có thể trả hàng trong vòng 7 ngày.', 'Keterangan situs: Bisa retur dalam 7 hari.', 'The website says: returns within 7 days.', 'เว็บไซต์เขียนว่า: คืนสินค้าได้ภายใน 7 วัน', 'ဝက်ဘ်ဆိုက်မှာ ရေးထားတယ်- ၇ ရက်အတွင်း ပြန်အပ်လို့ရတယ်။'),
  d15a: T('你用打工的錢買了鳳梨酥和一件外套，要寄回家。郵局櫃台後面坐著一位腰桿挺直的先生。', 'Bạn dùng tiền làm thêm mua bánh dứa và một cái áo khoác để gửi về nhà. Sau quầy bưu điện là một ông ngồi rất thẳng lưng.', 'Dengan uang kerja paruh waktu kamu membeli kue nanas dan jaket untuk dikirim ke rumah. Di balik loket kantor pos duduk seorang pria yang duduk sangat tegak.', 'With your part-time pay you bought pineapple cakes and a jacket to send home. A man with a very straight back sits behind the post office counter.', 'คุณใช้เงินจากงานพาร์ตไทม์ซื้อพายสับปะรดกับเสื้อแจ็กเก็ตจะส่งกลับบ้าน หลังเคาน์เตอร์ไปรษณีย์มีผู้ชายนั่งหลังตรงมาก', 'အချိန်ပိုင်းအလုပ်က ပိုက်ဆံနဲ့ နာနတ်သီးမုန့်နဲ့ ဂျာကင်တစ်ထည် ဝယ်ပြီး အိမ်ကို ပို့မယ်။ စာတိုက်ကောင်တာနောက်မှာ ကျောဖြောင့်ဖြောင့် ထိုင်နေတဲ့ လူတစ်ယောက် ရှိတယ်။'),
  d15w: T('郭大哥一句話也不說，指一指門口的機器。', 'Anh Quách không nói gì, chỉ tay về cái máy ở cửa.', 'Kak Guo tidak berkata apa-apa, hanya menunjuk mesin di pintu.', 'Mr. Guo says nothing and points at the machine by the door.', 'พี่กัวไม่พูดอะไรเลย ชี้ไปที่เครื่องตรงประตู', 'ကိုကော့က ဘာမှမပြောဘဲ တံခါးဝက စက်ကို လက်ညှိုးထိုးပြတယ်။'),
  d15b: T('郭大哥蓋了章。你看到他的鑰匙圈上有一隻小貓。', 'Anh Quách đóng dấu. Bạn thấy móc khóa của anh có hình một chú mèo nhỏ.', 'Kak Guo membubuhkan cap. Kamu melihat gantungan kuncinya berbentuk kucing kecil.', 'Mr. Guo stamps the form. You notice a little cat on his keychain.', 'พี่กัวประทับตรา คุณเห็นพวงกุญแจของเขาเป็นรูปแมวตัวเล็ก', 'ကိုကော့က တံဆိပ်တုံးထုတယ်။ သူ့သော့ချိတ်မှာ ကြောင်ကလေးတစ်ကောင် ပါတာ တွေ့လိုက်တယ်။'),
  d16a: T('下課後，你想問考試的事。', 'Sau giờ học, bạn muốn hỏi về bài thi.', 'Setelah kelas, kamu ingin bertanya tentang ujian.', 'After class, you want to ask about the exam.', 'หลังเลิกเรียน คุณอยากถามเรื่องสอบ', 'အတန်းပြီးတော့ စာမေးပွဲအကြောင်း မေးချင်တယ်။'),
  w3a: T('晚上，你看著家人的照片，睡不著。Rina 傳來 LINE。', 'Buổi tối, bạn nhìn ảnh gia đình, không ngủ được. Rina nhắn LINE.', 'Malam hari kamu melihat foto keluarga dan tidak bisa tidur. Rina mengirim LINE.', 'At night you look at photos of your family and can’t sleep. Rina sends you a LINE message.', 'ตอนกลางคืน คุณดูรูปครอบครัวแล้วนอนไม่หลับ Rina ส่งไลน์มา', 'ညမှာ မိသားစုဓာတ်ပုံကို ကြည့်ရင်း အိပ်မပျော်ဘူး။ Rina က LINE ပို့လာတယ်။'),
  w3b: T('Rina 傳了一個抱抱的貼圖。', 'Rina gửi một sticker ôm.', 'Rina mengirim stiker pelukan.', 'Rina sends a hug sticker.', 'Rina ส่งสติกเกอร์กอดมา', 'Rina က ဖက်ထားတဲ့ စတစ်ကာ ပို့လာတယ်။'),
  d17a: T('十月十號。張師傅給你一張上個月的薪資單。', 'Ngày 10 tháng Mười. Thầy Trương đưa bạn phiếu lương của tháng trước.', 'Tanggal 10 Oktober. Pak Zhang memberimu slip gaji bulan lalu.', 'October 10th. Master Zhang hands you last month’s payslip.', 'วันที่ 10 ตุลาคม อาจารย์จางให้สลิปเงินเดือนของเดือนที่แล้วแก่คุณ', 'အောက်တိုဘာ ၁၀ ရက်။ ဆရာကျန်းက ပြီးခဲ့တဲ့လ လစာစလစ် ပေးတယ်။'),
  d17b: T('薪水要先扣掉勞保。你來台灣還沒住滿 180 天，還不能加入健保，所以這次沒有扣健保費。', 'Lương phải trừ bảo hiểm lao động trước. Bạn ở Đài Loan chưa đủ 180 ngày nên chưa thể tham gia bảo hiểm y tế, vì vậy lần này không bị trừ phí bảo hiểm y tế.', 'Gaji dipotong asuransi tenaga kerja dulu. Kamu belum tinggal 180 hari di Taiwan, jadi belum bisa ikut asuransi kesehatan nasional, dan kali ini tidak ada potongan asuransi kesehatan.', 'Labor insurance is deducted first. You haven’t lived in Taiwan for 180 days yet, so you can’t join the National Health Insurance — no health premium is deducted this time.', 'เงินเดือนต้องหักประกันแรงงานก่อน คุณยังอยู่ไต้หวันไม่ครบ 180 วัน จึงยังเข้าประกันสุขภาพแห่งชาติไม่ได้ รอบนี้จึงไม่หักค่าประกันสุขภาพ', 'လစာထဲက အလုပ်သမားအာမခံကို အရင်နုတ်တယ်။ ထိုင်ဝမ်မှာ ရက် ၁၈၀ မပြည့်သေးလို့ အမျိုးသားကျန်းမာရေးအာမခံ မဝင်ရသေးဘူး၊ ဒါကြောင့် ဒီတစ်ခါ ကျန်းမာရေးအာမခံကြေး မနုတ်ဘူး။'),
  payday: T('月底了，薪水入帳了！扣掉生活費，多了兩千塊可以用。', 'Cuối tháng, lương về rồi! Trừ sinh hoạt phí, còn dư hai nghìn.', 'Akhir bulan, gaji masuk! Setelah biaya hidup, ada sisa dua ribu.', 'End of the month: payday! After living costs, you have 2,000 extra.', 'สิ้นเดือนแล้ว เงินเดือนเข้า! หักค่าครองชีพแล้ว มีเหลือใช้สองพัน', 'လကုန်ပြီ၊ လစာဝင်ပြီ! နေထိုင်စရိတ်နုတ်ပြီး နှစ်ထောင် ပိုသုံးလို့ရတယ်။'),
  d18a: T('陳導師發下一張繳費單。學費有政府補助，可是其他的費用要自己付。', 'Thầy Trần phát một phiếu đóng tiền. Học phí được chính phủ hỗ trợ, nhưng các khoản khác phải tự trả.', 'Pak Chen membagikan tagihan biaya. Uang sekolah dibantu pemerintah, tapi biaya lain harus dibayar sendiri.', 'Mr. Chen hands out a fee notice. Tuition is paid by the government, but the other fees are yours to pay.', 'ครูเฉินแจกใบแจ้งชำระเงิน ค่าเล่าเรียนรัฐบาลช่วย แต่ค่าอื่นๆ ต้องจ่ายเอง', 'ဆရာချန်က ငွေပေးချေရန်စာ ဝေတယ်။ ကျောင်းလခကို အစိုးရက ထောက်ပံ့တယ်၊ ဒါပေမဲ့ တခြားကြေးတွေကို ကိုယ်တိုင်ပေးရမယ်။'),
  d18b: T('你到便利商店的 ATM。', 'Bạn đến cây ATM trong cửa hàng tiện lợi.', 'Kamu pergi ke ATM di minimarket.', 'You go to the ATM in the convenience store.', 'คุณไปที่ตู้ ATM ในร้านสะดวกซื้อ', 'စတိုးဆိုင်ထဲက ATM ကို သွားတယ်။'),
  d18c: T('螢幕：「請輸入轉入帳號和金額。」你照著繳費單一個一個輸入，再檢查一次。收據要留好。', 'Màn hình: “Nhập số tài khoản nhận và số tiền.” Bạn nhập từng số theo phiếu, rồi kiểm tra lại. Nhớ giữ biên lai.', 'Layar: “Masukkan nomor rekening tujuan dan jumlah.” Kamu mengetik sesuai tagihan, lalu memeriksa lagi. Simpan struknya.', 'The screen says: “Enter the account number and amount.” You type them from the notice and check again. Keep the receipt.', 'หน้าจอ: “กรุณาใส่เลขบัญชีปลายทางและจำนวนเงิน” คุณกรอกตามใบแจ้งทีละตัว แล้วตรวจอีกครั้ง เก็บใบเสร็จไว้ให้ดี', 'မျက်နှာပြင်- “လွှဲမည့် အကောင့်နံပါတ်နဲ့ ပမာဏ ထည့်ပါ။” ငွေပေးချေရန်စာအတိုင်း တစ်လုံးချင်း ရိုက်ထည့်ပြီး ပြန်စစ်တယ်။ ပြေစာကို သိမ်းထားပါ။'),
  d18w: T('機器吐出一千塊……你又把錢存回去了。', 'Máy nhả ra một nghìn… Bạn lại gửi tiền vào lại.', 'Mesin mengeluarkan seribu… Kamu menyetorkannya kembali.', 'The machine spits out 1,000 dollars… You deposit it back.', 'เครื่องปล่อยเงินออกมาหนึ่งพัน… คุณฝากกลับเข้าไปใหม่', 'စက်က တစ်ထောင် ထွက်လာတယ်… ပြန်အပ်လိုက်ရတယ်။'),
  d18d: T('繳完了！薪水大部分拿來繳學雜費，這個月的零用錢少了兩千塊。', 'Đóng xong rồi! Phần lớn lương dùng để đóng học phí, tháng này tiền tiêu vặt ít đi hai nghìn.', 'Sudah lunas! Sebagian besar gaji untuk biaya sekolah, uang saku bulan ini berkurang dua ribu.', 'Paid! Most of your pay went to school fees, so you have 2,000 less pocket money this month.', 'จ่ายเสร็จแล้ว! เงินเดือนส่วนใหญ่ใช้จ่ายค่าเทอม เดือนนี้เงินใช้จ่ายลดลงสองพัน', 'ပေးပြီးပြီ! လစာအများစုကို ကျောင်းစရိတ်ပေးလိုက်ရလို့ ဒီလ မုန့်ဖိုး နှစ်ထောင် လျော့သွားတယ်။'),
  d19a: T('晚上，一個不認識的人傳 LINE 給你，說是「朋友的朋友」。', 'Buổi tối, một người lạ nhắn LINE, nói là “bạn của bạn”.', 'Malam hari, orang tak dikenal mengirim LINE, mengaku “teman dari teman”.', 'In the evening, a stranger sends you a LINE message, saying he’s “a friend of a friend.”', 'ตอนค่ำ มีคนแปลกหน้าส่งไลน์มา บอกว่าเป็น “เพื่อนของเพื่อน”', 'ညနေ၊ မသိတဲ့သူတစ်ယောက်က “သူငယ်ချင်းရဲ့ သူငယ်ချင်း” ဆိုပြီး LINE ပို့လာတယ်။'),
  d19b: T('隔天，陳導師在班上提醒大家。', 'Hôm sau, thầy Trần nhắc nhở cả lớp.', 'Keesokan harinya, Pak Chen mengingatkan seluruh kelas.', 'The next day, Mr. Chen gives the class a warning.', 'วันรุ่งขึ้น ครูเฉินเตือนทุกคนในห้อง', 'နောက်နေ့မှာ ဆရာချန်က တစ်တန်းလုံးကို သတိပေးတယ်။'),
  job: T('你在便利商店打工了四個小時。', 'Bạn làm thêm bốn tiếng ở cửa hàng tiện lợi.', 'Kamu bekerja paruh waktu empat jam di minimarket.', 'You work a four-hour shift at the convenience store.', 'คุณทำงานพาร์ตไทม์ที่ร้านสะดวกซื้อสี่ชั่วโมง', 'စတိုးဆိုင်မှာ လေးနာရီ အချိန်ပိုင်းအလုပ် လုပ်တယ်။'),
  market: T('你和阿蜜去逛夜市，吃了好多東西！', 'Bạn và A Mật đi chợ đêm, ăn thật nhiều món!', 'Kamu dan A Mi jalan-jalan ke pasar malam dan makan banyak!', 'You and A-Mi stroll the night market and eat lots of food!', 'คุณกับอาหมี่ไปเดินตลาดกลางคืน กินไปเยอะมาก!', 'အာမိနဲ့ ညဈေးလျှောက်ပြီး အများကြီး စားခဲ့တယ်!'),
  typhoon: T('颱風天，只能待在宿舍。', 'Ngày bão, chỉ có thể ở trong ký túc xá.', 'Hari topan, hanya bisa di asrama.', 'Typhoon day: you have to stay in the dorm.', 'วันไต้ฝุ่น อยู่ได้แค่ในหอพัก', 'မုန်တိုင်းနေ့၊ အဆောင်ထဲမှာပဲ နေရမယ်။'),
};

const say = (who, zh, extra = {}) => ({ say: who, zh, ...extra });
const n = (k) => ({ n: N[k] });
const LIFE = '生活中文';

const EVENTS = {
  M04: [
    { scene: 'dorm', npc: 'amei' },
    n('m04a'),
    { poster: [['活動', '中秋節烤肉晚會'], ['地點', '宿舍前面'], ['時間', '星期六晚上六點'], ['一個人', '100 元']], title: '海　報' },
    { q: { p: T('烤肉晚會在哪裡？', 'Tiệc nướng ở đâu?', 'Pesta barbeku di mana?', 'Where is the barbecue?', 'งานปิ้งย่างอยู่ที่ไหน', 'အသားကင်ညစာ ဘယ်မှာလဲ။'), src: '題庫 9-21', opts: [
      { zh: '宿舍前面', ok: 1 }, { zh: '學校後面', r: [n('m04b'), say('amei', '在宿舍前面啦！')] }, { zh: '夜市' }, { zh: '捷運站' },
    ], wrong: [say('amei', '你再看一次。')], ok: [say('amei', '對！我們不用出去。')] } },
    { q: { p: T('一個人要多少錢？', 'Mỗi người bao nhiêu tiền?', 'Satu orang berapa?', 'How much per person?', 'คนละเท่าไร', 'တစ်ယောက် ဘယ်လောက်လဲ။'), src: '題庫 9-22', opts: [
      { zh: '100 元', ok: 1 }, { zh: '50 元' }, { zh: '150 元' }, { zh: '不用錢' },
    ], wrong: [say('amei', '你再看一次。')], ok: [{ fx: { money: -100 } }] } },
    { scene: 'bbq', npc: 'ajiao' },
    n('m04c'),
    say('ajiao', '中秋節要吃月餅，給你們！', { listen: 1 }),
    { q: { p: P.pick, src: '題庫 9-02', kind: 'listen', opts: [
      { zh: '月餅', e: '🥮', ok: 1 }, { zh: '珍珠奶茶', e: '🧋' }, { zh: '水餃', e: '🥟' }, { zh: '生日蛋糕', e: '🎂', r: [n('m04d'), say('ajiao', '是月餅啦！')] },
    ], wrong: [say('ajiao', '不是這個啦！')], ok: [{ card: 'mooncake' }] } },
    { scene: 'bbq', npc: 'rina' },
    say('rina', '我不吃豬肉。'),
    say('amei', '那你可以問一下。'),
    { q: { p: T('幫 Rina 問一下，你要怎麼說？', 'Hỏi giúp Rina, bạn sẽ nói gì?', 'Bantu Rina bertanya, apa yang kamu katakan?', 'Ask for Rina. What do you say?', 'ช่วย Rina ถาม คุณจะพูดว่าอะไร', 'Rina အတွက် မေးပေးမယ်၊ ဘယ်လိုပြောမလဲ။'), src: '改自 4-08', opts: [
      { zh: '這個有豬肉嗎？', ok: 1 }, { zh: '這個多少錢？' }, { zh: '這個很好吃。' }, { zh: '我不喜歡。' },
    ], wrong: [say('rina', '我想知道有沒有豬肉。')], ok: [say('amei', '沒有，是雞肉。'), say('rina', '謝謝你！'), { fx: { aff: { rina: 1 } } }] } },
    { scene: 'bbq', npc: 'ajiao' },
    n('m04e'),
    say('ajiao', '你們在台灣，我就是你們的阿嬌。'),
    { q: { p: P.fill, src: '題庫 9-34', stem: '祝你中秋節＿＿！', opts: [
      { zh: '快樂', ok: 1 }, { zh: '好吃', r: [say('ajiao', '中秋節好吃？對啦，月餅很好吃！')] }, { zh: '一起' }, { zh: '放假' },
    ], wrong: [say('ajiao', '嗯？再說一次。')], ok: [say('ajiao', '很好。'), { fx: { aff: { ajiao: 1 } } }] } },
    { fx: { mood: 15, pop: 3, aff: { amei: 1 } } },
  ],

  M05: [
    { scene: 'office', npc: 'chen' },
    n('m05a'), n('m05b'),
    say('chen', '打工要有居留證和工作證。'),
    say('chen', '申請工作證，要先去做體檢。'),
    say('chen', '上課的時候，一個星期最多打工二十個小時。', { listen: 1 }),
    { q: { p: T('上課的時候，一個星期最多打工幾個小時？', 'Trong thời gian học, mỗi tuần được làm thêm tối đa mấy tiếng?', 'Selama masa sekolah, maksimal kerja paruh waktu berapa jam seminggu?', 'During the school term, how many hours a week can you work at most?', 'ช่วงเปิดเรียน ทำงานพาร์ตไทม์ได้มากสุดสัปดาห์ละกี่ชั่วโมง', 'ကျောင်းတက်ချိန်မှာ တစ်ပတ်ကို အများဆုံး ဘယ်နှနာရီ အလုပ်လုပ်လို့ရလဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '二十個小時', ok: 1 }, { zh: '十二個小時' }, { zh: '四十個小時' }, { zh: '都可以', r: [say('chen', '不行。你是學生，要先上課。')] },
    ], wrong: [say('chen', '再聽一次。')], ok: [say('chen', '對。工作證下來以前，不可以打工。有問題就來找我。')] } },
    { ifStatus: 'work', then: [
      say('chen', '你現在在實習，實習的時候不可以打工。', { listen: 1 }),
      { q: { p: T('實習的時候，可以去打工嗎？', 'Trong thời gian thực tập, có được đi làm thêm không?', 'Selama magang, boleh kerja paruh waktu?', 'During the internship, can you take a part-time job?', 'ระหว่างฝึกงาน ทำงานพาร์ตไทม์ได้ไหม', 'အလုပ်သင်ကာလအတွင်း အချိန်ပိုင်းအလုပ် လုပ်လို့ရလား။'), opts: [
        { zh: '不可以', ok: 1 }, { zh: '可以' }, { zh: '星期六可以' }, { zh: '晚上可以' },
      ], wrong: [say('chen', '實習的時候不可以打工喔。')], ok: [say('chen', '對。十二月回學校上課，下課以後才可以打工。')] } },
      n('m05w'),
    ], else: [
    { scene: 'store', npc: 'xiaoyang' },
    { poster: [['徵', '工讀生'], ['時間', '星期五、星期六'], ['', '晚上六點到十點'], ['時薪', '205 元']], title: '徵　人' },
    { q: { p: T('一個小時多少錢？', 'Một giờ bao nhiêu tiền?', 'Satu jam berapa?', 'How much per hour?', 'ชั่วโมงละเท่าไร', 'တစ်နာရီ ဘယ်လောက်လဲ။'), src: LIFE, opts: [
      { zh: '205 元', ok: 1 }, { zh: '250 元' }, { zh: '105 元' }, { zh: '2,050 元', r: [say('xiaoyang', '沒有那麼多啦！')] },
    ], wrong: [say('xiaoyang', '再看一次。')] } },
    say('xiaoyang', '你星期六晚上可以來嗎？'),
    { q: { p: P.reply, src: LIFE, opts: [
      { zh: '可以，星期六我沒有課。', ok: 1 }, { zh: '我是星期六。', r: [say('xiaoyang', '你是星期六？那我是星期天！')] }, { zh: '星期六很好吃。' }, { zh: '不可以，我不喜歡工作。' },
    ], wrong: [say('xiaoyang', '嗯？再說一次。')] } },
    say('xiaoyang', '客人進來的時候，要說什麼？'),
    { q: { p: P.say, src: LIFE, opts: [
      { zh: '歡迎光臨。', ok: 1 }, { zh: '謝謝光臨。', r: [say('xiaoyang', '客人才進來，你就要他走了？')] }, { zh: '再見。' }, { zh: '對不起。' },
    ], wrong: [say('xiaoyang', '哈哈，不是啦。')], ok: [say('xiaoyang', '很好！客人走的時候，要說「謝謝光臨」。')] } },
    { scene: 'store', npc: 'ajiao' },
    n('m05d'),
    say('xiaoyang', '一共三十五塊。', { listen: 1 }),
    { q: { p: T('牛奶多少錢？', 'Sữa bao nhiêu tiền?', 'Susunya berapa?', 'How much is the milk?', 'นมราคาเท่าไร', 'နွားနို့ ဘယ်လောက်လဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '35 塊', ok: 1 }, { zh: '53 塊' }, { zh: '25 塊' }, { zh: '135 塊' },
    ], wrong: [say('xiaoyang', '三十五塊喔。')] } },
    n('m05e'),
    { q: { p: T('阿嬌給你一百塊，你要找她多少錢？', 'Bà A Kiều đưa 100 đồng, bạn phải thối lại bao nhiêu?', 'A Jiao memberi 100, berapa kembaliannya?', 'A-Jiao gives you 100. How much change do you give?', 'อาเจียวให้ 100 คุณต้องทอนเท่าไร', 'အာကျောင်က တစ်ရာ ပေးတယ်၊ အကြွေ ဘယ်လောက် ပြန်အမ်းရမလဲ။'), src: LIFE, opts: [
      { zh: '65 塊', ok: 1 }, { zh: '75 塊' }, { zh: '35 塊' }, { zh: '55 塊' },
    ], wrong: [say('ajiao', '不對喔，孩子。')], ok: [say('ajiao', '哇，你在這裡上班喔？很棒！')] } },
    { ifScore: 5, then: [{ fx: { aff: { xiaoyang: 2 } } }, { title: 'cashier' }], else: [{ fx: { aff: { xiaoyang: 1 } } }] },
    { fx: { mood: 5 } },
    { scene: 'store', npc: 'xiaoyang' },
    say('xiaoyang', '星期六晚上六點見！'),
    n('m05f'),
    ] },
  ],

  M06: [
    { scene: 'classroom', npc: 'amei' },
    n('m06a'),
    say('amei', '你會唱中文歌嗎？'),
    { q: { p: P.reply, src: '題庫 9-10', opts: [
      { zh: '會一點。', ok: 1 }, { zh: '我會一點錢。' }, { zh: '中文歌很辣。' }, { zh: '我是歌。' },
    ], wrong: [say('amei', '……我問的是唱歌啦。')], ok: [say('amei', '太好了！我幫你報名了。')] } },
    { poster: [['比賽', '歌唱比賽'], ['時間', '11 月 14 日（星期六）'], ['', '下午兩點'], ['地點', '禮堂'], ['報名', '11 月 7 日以前']], title: '報名表' },
    { q: { p: T('幾號以前要報名？', 'Phải đăng ký trước ngày mấy?', 'Harus mendaftar sebelum tanggal berapa?', 'By what date must you sign up?', 'ต้องสมัครก่อนวันที่เท่าไร', 'ဘယ်ရက်မတိုင်ခင် စာရင်းသွင်းရမလဲ။'), src: '改寫 9-23', opts: [
      { zh: '11 月 7 日', ok: 1 }, { zh: '11 月 14 日', r: [say('amei', '比賽那天才報名，太晚了啦！')] }, { zh: '7 月 11 日' }, { zh: '11 月 17 日' },
    ], wrong: [say('amei', '你再看一次。')], ok: [say('amei', '還好還好，今天是五號。')] } },
    { scene: 'classroom', npc: 'lin' },
    n('m06b'),
    say('lin', '一樣的 ma，聲調不一樣，意思就不一樣。'),
    say('lin', '馬。', { listen: 1 }),
    { q: { p: P.pick, src: '聲調練習', kind: 'listen', opts: [
      { zh: '馬', e: '🐴', ok: 1 }, { zh: '媽', e: '👩', r: [say('lin', '你叫你媽媽是馬？')] }, { zh: '麻', e: '🌿' }, { zh: '罵', e: '😠' },
    ], wrong: [say('lin', '再聽一次。')], ok: [say('lin', '很好！')] } },
    say('lin', '我要買水。', { listen: 1 }),
    { q: { p: T('林老師要做什麼？', 'Cô Lâm muốn làm gì?', 'Bu Lin mau melakukan apa?', 'What does Ms. Lin want to do?', 'ครูหลินจะทำอะไร', 'ဆရာမလင် ဘာလုပ်ချင်လဲ။'), src: '聲調練習', kind: 'listen', opts: [
      { zh: '買水', e: '🛒', ok: 1 }, { zh: '賣水', e: '🏷️', r: [say('lin', '我不是要開店喔！')] }, { zh: '喝水', e: '🥤' }, { zh: '拿水', e: '✋' },
    ], wrong: [say('lin', '再聽一次。')], ok: [say('lin', '「買」是第三聲，「賣」是第四聲。慢慢來，沒關係。')] } },
    { scene: 'stage', npc: 'tongxue' },
    n('m06c'),
    { q: { p: T('你想對前面的同學說什麼？', 'Bạn muốn nói gì với bạn đứng trước?', 'Apa yang ingin kamu katakan kepada teman di depan?', 'What do you say to the student before you?', 'คุณอยากพูดอะไรกับเพื่อนข้างหน้า', 'ရှေ့က ကျောင်းသားကို ဘာပြောချင်လဲ။'), src: LIFE, opts: [
      { zh: '加油！', ok: 1 }, { zh: '再見！', r: [say('tongxue', '我還沒唱喔！')] }, { zh: '生日快樂！' }, { zh: '對不起！' },
    ], wrong: [say('tongxue', '嗯？')], ok: [say('tongxue', '你也加油！')] } },
    { scene: 'stage', npc: 'amei' },
    n('m06song'),
    n('m06d'),
    { card: 'mic' },
    { ifScore: 4, then: [{ fx: { aff: { lin: 2 } } }, { title: 'singer' }], else: [{ fx: { aff: { lin: 1 } } }] },
    { fx: { mood: 15, pop: 5, aff: { amei: 1 } } },
  ],

  M07: [
    { scene: 'classroom', npc: 'lin' },
    n('m07a'),
    { poster: [['考試', '華語期末小考'], ['時間', '星期四早上九點'], ['地點', '305 教室'], ['帶', '筆']], title: '考試通知' },
    { q: { p: T('考試是星期幾？', 'Thi vào thứ mấy?', 'Ujian hari apa?', 'What day is the exam?', 'สอบวันอะไร', 'စာမေးပွဲ ဘာနေ့လဲ။'), src: '題庫 3-24', opts: [
      { zh: '星期四', ok: 1 }, { zh: '星期三' }, { zh: '星期五' }, { zh: '星期一' },
    ], wrong: [say('lin', '再看一次通知。')] } },
    { q: { p: T('考試在哪裡？', 'Thi ở đâu?', 'Ujian di mana?', 'Where is the exam?', 'สอบที่ไหน', 'စာမေးပွဲ ဘယ်မှာလဲ။'), src: '題庫 3-25', opts: [
      { zh: '305 教室', ok: 1 }, { zh: '503 教室', r: [n('m07w')] }, { zh: '宿舍' }, { zh: '圖書館' },
    ], wrong: [say('lin', '再看一次通知。')] } },
    { q: { p: T('考試要帶什麼？', 'Đi thi phải mang gì?', 'Ujian harus bawa apa?', 'What should you bring?', 'สอบต้องเอาอะไรไป', 'စာမေးပွဲ ဘာယူလာရမလဲ။'), src: '題庫 3-26', opts: [
      { zh: '筆', e: '✏️', ok: 1 }, { zh: '書', e: '📕' }, { zh: '課本', e: '📘', r: [say('lin', '考試不可以看課本喔。')] }, { zh: '電腦', e: '💻' },
    ], wrong: [say('lin', '再看一次通知。')] } },
    n('m07b'),
    say('lin', '慢慢來，沒關係。'),
    { exam: 5, res: [
      [5, [say('lin', '太棒了！全部都對！'), { title: 'zhstar' }, { fx: { aff: { lin: 2 }, mood: 15 } }]],
      [3, [say('lin', '很好，你進步了。'), { fx: { aff: { lin: 1 }, mood: 5 } }]],
      [0, [say('lin', '慢慢來，沒關係。錯的題目，我們以後一起複習。')]],
    ] },
  ],

  M08: [
    { scene: 'newyear', npc: 'amei' },
    n('m08a'),
    say('amei', '現在幾點？'),
    say('rina', '十一點五十分。', { listen: 1 }),
    { q: { p: T('現在幾點？', 'Bây giờ là mấy giờ?', 'Sekarang jam berapa?', 'What time is it?', 'ตอนนี้กี่โมง', 'အခု ဘယ်နှနာရီလဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '11:50', e: '🕦', ok: 1 }, { zh: '11:15', e: '🕚' }, { zh: '10:50', e: '🕚' }, { zh: '12:00', e: '🕛', r: [say('rina', '還沒有啦！')] },
    ], wrong: [say('rina', '十一點五十分喔。')], ok: [say('amei', '還有十分鐘！快去寫願望卡！')] } },
    n('m08b'),
    { q: { p: T('新的一年，你希望什麼？', 'Năm mới, bạn mong ước điều gì?', 'Di tahun baru, apa harapanmu?', 'What do you wish for in the new year?', 'ปีใหม่นี้ คุณหวังอะไร', 'နှစ်သစ်မှာ ဘာဆုတောင်းမလဲ။'), src: '願望卡', stem: '新的一年，我希望＿＿。', free: 1, wish: 1, opts: [
      { zh: '我的中文更好', ok: 1 }, { zh: '家人都很好', ok: 1 }, { zh: '實習很順利', ok: 1 }, { zh: '交很多朋友', ok: 1 },
    ], ok: [{ card: 'wishcard' }, { scene: 'newyear', npc: 'ajiao' }, say('ajiao', '我的願望喔？我希望你們都有吃飽！')] } },
    { scene: 'newyear', npc: 'host' },
    n('m08c'),
    say('host', '十、九、八、七、六、五、四、三、二……', { listen: 1 }),
    { q: { p: T('下一個是什麼？', 'Số tiếp theo là gì?', 'Berikutnya apa?', 'What comes next?', 'ต่อไปคืออะไร', 'နောက်တစ်ခုက ဘာလဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '一', ok: 1 }, { zh: '三' }, { zh: '十' }, { zh: '零' },
    ], wrong: [say('amei', '太快了啦！哈哈。')], ok: [n('m08d')] } },
    { scene: 'newyear', npc: 'ajiao' },
    { q: { p: T('煙火下，大家都看著你。你要說什麼？', 'Dưới pháo hoa, mọi người nhìn bạn. Bạn sẽ nói gì?', 'Di bawah kembang api, semua melihatmu. Apa yang kamu katakan?', 'Under the fireworks, everyone looks at you. What do you say?', 'ใต้แสงพลุ ทุกคนมองคุณ คุณจะพูดว่าอะไร', 'မီးပန်းအောက်မှာ အားလုံးက သင့်ကို ကြည့်နေတယ်။ ဘာပြောမလဲ။'), src: LIFE, opts: [
      { zh: '新年快樂！', ok: 1 }, { zh: '生日快樂！' }, { zh: '中秋節快樂！' }, { zh: '歡迎光臨！', r: [say('amei', '你打工打太多了啦！')] },
    ], wrong: [say('amei', '哈哈，不對啦！')], ok: [say('ajiao', '新年快樂！來，一人一個橘子。')] } },
    { fx: { mood: 20, pop: 5, aff: { amei: 1, rina: 1, ajiao: 1 } } },
    n('m08e'),
  ],

  D10: [
    { scene: 'phone', npc: 'chen' },
    n('d10a'),
    say('chen', '颱風來了，今天停班停課。不要出門。'),
    { q: { p: T('今天要去上課嗎？', 'Hôm nay có phải đi học không?', 'Hari ini harus ke sekolah?', 'Do you go to class today?', 'วันนี้ต้องไปเรียนไหม', 'ဒီနေ့ ကျောင်းသွားရမလား။'), src: LIFE, opts: [
      { zh: '不用，在宿舍', ok: 1 }, { zh: '要，早上八點', r: [n('d10b'), say('ayi', '停課！回來！'), { fx: { hp: -5 } }] }, { zh: '要去實習' }, { zh: '要去夜市' },
    ], wrong: [say('chen', '停班停課，不要出門。')], ok: [{ scene: 'lounge', npc: 'amei' }, say('amei', '走，去交誼廳吃泡麵！'), { fx: { mood: 5 } }] } },
  ],
  D11: [
    { scene: 'nightmarket', npc: 'huang' },
    n('d11a'),
    say('huang', '來喔！好吃不貴！'),
    say('amei', '老闆，一份雞排多少錢？'),
    say('huang', '八十塊！', { listen: 1 }),
    { q: { p: T('雞排多少錢？', 'Gà chiên bao nhiêu tiền?', 'Ayam gorengnya berapa?', 'How much is the fried chicken?', 'ไก่ทอดราคาเท่าไร', 'ကြက်ကြော် ဘယ်လောက်လဲ။'), src: '題庫 4-11', kind: 'listen', opts: [
      { zh: '80 塊', ok: 1 }, { zh: '18 塊', r: [say('huang', '十八塊？我要哭了啦！')] }, { zh: '60 塊' }, { zh: '88 塊' },
    ], wrong: [say('huang', '八十！八十塊！')] } },
    { q: { p: P.fill, src: '題庫 4-14', stem: '黃老闆：「你要內用還是＿＿？」', opts: [
      { zh: '外帶', ok: 1 }, { zh: '好吃' }, { zh: '夜市' }, { zh: '餐廳' },
    ], wrong: [say('huang', '哈哈，再想一下！')], ok: [say('huang', '小朋友，中文不錯喔！多給你一點！'), { fx: { aff: { huang: 1 } } }] } },
  ],
  D12: [
    { scene: 'store', npc: 'xiaoyang' },
    n('d12a'),
    say('customer', '我要一杯熱咖啡，大杯。', { listen: 1 }),
    { q: { p: T('客人要什麼？', 'Khách muốn gì?', 'Pelanggan mau apa?', 'What does the customer want?', 'ลูกค้าต้องการอะไร', 'ဖောက်သည် ဘာလိုချင်လဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '熱的大杯咖啡', e: '☕', ok: 1 }, { zh: '冰的大杯咖啡', e: '🧊' }, { zh: '熱的小杯咖啡', e: '☕' }, { zh: '冰的小杯奶茶', e: '🧋' },
    ], wrong: [n('d12b'), say('xiaoyang', '沒關係，我幫你重做一杯。')], ok: [say('me', '謝謝光臨！'), say('xiaoyang', '讚！')] } },
  ],
  D13: [
    { scene: 'room', npc: null },
    n('d13a'),
    { scene: 'phone', npc: 'chen' },
    say('chen', '你怎麼了？'),
    { q: { p: P.say, src: '改自 7-09', opts: [
      { zh: '我發燒了，今天想請假。', ok: 1 }, { zh: '我想去夜市。' }, { zh: '我今天加班。' }, { zh: '我很好。', r: [say('chen', '你的聲音不好喔。')] },
    ], wrong: [say('chen', '嗯？你怎麼了？')], ok: [say('chen', '好，快去看醫生。')] } },
    { scene: 'clinic', npc: 'nurse' },
    n('d13b'),
    say('nurse', '請給我你的健保卡。', { listen: 1 }),
    { q: { p: P.reply, src: LIFE, opts: [
      { zh: '我來台灣還不到半年，還沒有健保卡。', ok: 1 }, { zh: '這是我的悠遊卡。', r: [say('nurse', '這是搭車用的喔。')] }, { zh: '我不想給你。' }, { zh: '我有很多錢。' },
    ], wrong: [say('nurse', '你有健保卡嗎？')], ok: [say('nurse', '沒有健保就要自費喔。收據要留好，可以申請僑生保險。'), { fx: { money: -800 } }] } },
    { scene: 'clinic', npc: 'li' },
    say('li', '你哪裡不舒服？'),
    { q: { p: P.reply, src: '題庫 7-07', opts: [
      { zh: '我喉嚨痛，也咳嗽。', ok: 1 }, { zh: '我肚子餓。' }, { zh: '我是學生。' }, { zh: '我很快樂。' },
    ], wrong: [say('li', '嗯？哪裡痛？')] } },
    say('li', '這個藥一天吃三次，飯後吃。多喝水，多休息。', { listen: 1 }),
    { q: { p: T('藥怎麼吃？', 'Uống thuốc thế nào?', 'Bagaimana minum obatnya?', 'How should you take the medicine?', 'ต้องกินยาอย่างไร', 'ဆေးကို ဘယ်လိုသောက်ရမလဲ။'), src: '題庫 7-08', kind: 'listen', opts: [
      { zh: '一天三次，飯後吃', ok: 1 }, { zh: '一天兩次，飯前吃' }, { zh: '一天三次，飯前吃' }, { zh: '一天一次' },
    ], wrong: [say('li', '看，三個太陽，吃完飯後。')], ok: [say('li', '藥不要當糖果吃喔！'), { fx: { aff: { li: 1 } } }] } },
    { fx: { hp: 20, money: -150 } },
  ],
  D14: [
    { scene: 'store', npc: 'amei' },
    n('d14a'),
    say('amei', '我網購的衣服太大了，想退貨。', { listen: 1 }),
    { q: { p: T('阿蜜想做什麼？', 'A Mật muốn làm gì?', 'A Mi mau apa?', 'What does A-Mi want to do?', 'อาหมี่อยากทำอะไร', 'အာမိ ဘာလုပ်ချင်လဲ။'), src: '題庫 8-11', kind: 'listen', opts: [
      { zh: '退貨', ok: 1 }, { zh: '試穿' }, { zh: '再買一件' }, { zh: '問打不打折' },
    ], wrong: [say('amei', '太大了啦，我不要。')] } },
    { poster: [['退貨', '7 天內可以退貨']], title: '網站說明' },
    { q: { p: T('幾天內可以退貨？', 'Trả hàng trong vòng mấy ngày?', 'Retur dalam berapa hari?', 'Within how many days can you return it?', 'คืนสินค้าได้ภายในกี่วัน', 'ဘယ်နှရက်အတွင်း ပြန်အပ်လို့ရလဲ။'), src: '題庫 8-25', opts: [
      { zh: '7 天', ok: 1 }, { zh: '3 天' }, { zh: '10 天' }, { zh: '14 天' },
    ], wrong: [say('amei', '那我只好穿成裙子了……')], ok: [say('amei', '太好了，還可以！'), { fx: { aff: { amei: 1 } } }] } },
  ],
  D15: [
    { scene: 'post', npc: 'guo' },
    n('d15a'),
    say('guo', '請先拿號碼牌。', { listen: 1 }),
    { q: { p: T('要先拿什麼？', 'Phải lấy gì trước?', 'Harus ambil apa dulu?', 'What do you take first?', 'ต้องหยิบอะไรก่อน', 'အရင် ဘာယူရမလဲ။'), src: '題庫 10-29', kind: 'listen', opts: [
      { zh: '號碼牌', e: '🎫', ok: 1 }, { zh: '收據', e: '🧾' }, { zh: '表格', e: '📋' }, { zh: '信封', e: '✉️' },
    ], wrong: [n('d15w')] } },
    say('guo', '你要寄到哪裡？'),
    { q: { p: P.reply, src: '改自 10-07', opts: [
      { zh: '寄到{home}。', ok: 1 }, { zh: '寄到台北。' }, { zh: '我是{home}人。', r: [say('guo', '……我是問寄到哪裡。')] }, { zh: '寄到郵局。' },
    ], wrong: [say('guo', '……寄到哪裡？')] } },
    say('guo', '大概七天到。', { listen: 1 }),
    { q: { p: T('包裹幾天會到？', 'Mấy ngày thì bưu kiện đến?', 'Paketnya sampai berapa hari?', 'How many days until the parcel arrives?', 'พัสดุจะถึงในกี่วัน', 'ပါဆယ် ဘယ်နှရက်နေရင် ရောက်မလဲ။'), src: '題庫 10-30', kind: 'listen', opts: [
      { zh: '大概七天', ok: 1 }, { zh: '一天' }, { zh: '三天' }, { zh: '十天' },
    ], wrong: [say('guo', '七天。')], ok: [n('d15b'), say('guo', '……下一位。'), { fx: { aff: { guo: 1 } } }] } },
    { fx: { money: -500, mood: 10 } }, { set: 'parcel' },
  ],
  D16: [
    { scene: 'classroom', npc: 'lin' },
    n('d16a'),
    { q: { p: P.say, src: '題庫 3-12', opts: [
      { zh: '老師，我有一個問題。', ok: 1 }, { zh: '老師，再見。' }, { zh: '老師，我是問題。' }, { zh: '老師，你好嗎？' },
    ], wrong: [say('lin', '嗯？')] } },
    say('lin', '好，請說。'),
    say('me', '老師，考試考什麼？'),
    say('lin', '考第一課到第三課。', { listen: 1 }),
    { q: { p: T('考什麼？', 'Thi những gì?', 'Ujiannya tentang apa?', 'What does the exam cover?', 'สอบอะไรบ้าง', 'ဘာတွေ စာမေးပွဲမှာ ပါမလဲ။'), src: '題庫 3-33', kind: 'listen', opts: [
      { zh: '第一課到第三課', ok: 1 }, { zh: '只考第一課' }, { zh: '第三課到第五課' }, { zh: '不考試' },
    ], wrong: [say('lin', '第一課到第三課喔。')], ok: [{ fx: { aff: { lin: 1 } } }] } },
  ],
  D17: [
    { scene: 'work', npc: 'zhang' },
    n('d17a'),
    say('zhang', '這是你這個月的薪資單。'),
    { poster: [['姓名', '{name}'], ['月份', '9 月'], ['薪水', '30,900 元'], ['入帳', '10 月 10 日'], ['帳戶', '郵局']], title: '薪資單' },
    { q: { p: T('這個月的薪水是多少？', 'Lương tháng này là bao nhiêu?', 'Berapa gaji bulan ini?', 'How much is this month’s pay?', 'เงินเดือนเดือนนี้เท่าไร', 'ဒီလ လစာ ဘယ်လောက်လဲ။'), src: LIFE, opts: [
      { zh: '30,900 元', ok: 1 }, { zh: '39,000 元' }, { zh: '3,090 元' }, { zh: '309,000 元', r: [say('zhang', '……你要當老闆嗎？')] },
    ], wrong: [say('zhang', '再看一次。')] } },
    { q: { p: T('薪水哪一天入帳？', 'Lương vào tài khoản ngày nào?', 'Gaji masuk tanggal berapa?', 'On what date is the pay deposited?', 'เงินเดือนเข้าบัญชีวันไหน', 'လစာ ဘယ်နေ့ ဝင်မလဲ။'), src: LIFE, opts: [
      { zh: '10 月 10 日', ok: 1 }, { zh: '10 月 13 日' }, { zh: '11 月 31 日' }, { zh: '1 月 31 日' },
    ], wrong: [say('zhang', '看「入帳」那一行。')], ok: [say('zhang', '錢要存好。'), { fx: { aff: { zhang: 1 } } }] } },
    n('d17b'),
    { fx: { mood: 10 } },
  ],
  D18: [
    { scene: 'office', npc: 'chen' },
    n('d18a'),
    say('chen', '這是這學期的繳費單。學費政府補助，其他要自己繳。'),
    { poster: [['學費', '政府補助'], ['雜費', '3,000 元'], ['實習費', '1,500 元'], ['書籍費', '1,200 元'], ['餐費', '9,000 元'], ['住宿費', '6,000 元'], ['代辦費', '800 元'], ['一共', '21,500 元'], ['期限', '11 月 30 日以前'], ['繳費', 'ATM 轉帳、學校出納組']], title: '繳費單' },
    { q: { p: T('哪一項不用自己繳？', 'Khoản nào không phải tự đóng?', 'Mana yang tidak perlu dibayar sendiri?', 'Which item do you NOT have to pay yourself?', 'รายการไหนไม่ต้องจ่ายเอง', 'ဘယ်အရာကို ကိုယ်တိုင် မပေးရဘူးလဲ။'), src: LIFE, opts: [
      { zh: '學費', ok: 1 }, { zh: '住宿費' }, { zh: '餐費' }, { zh: '書籍費' },
    ], wrong: [say('chen', '學費政府補助，看第一行。')] } },
    { q: { p: T('幾號以前要繳？', 'Phải đóng trước ngày mấy?', 'Harus bayar sebelum tanggal berapa?', 'What is the payment deadline?', 'ต้องจ่ายก่อนวันที่เท่าไร', 'ဘယ်ရက်မတိုင်ခင် ပေးရမလဲ။'), src: LIFE, opts: [
      { zh: '11 月 30 日', ok: 1 }, { zh: '11 月 3 日' }, { zh: '12 月 30 日' }, { zh: '10 月 30 日' },
    ], wrong: [say('chen', '看「期限」那一行。')], ok: [say('chen', '對。錢不夠，一定要先來找我。')] } },
    { q: { p: T('你要怎麼繳？', 'Bạn sẽ đóng bằng cách nào?', 'Bagaimana kamu akan membayar?', 'How will you pay?', 'คุณจะจ่ายอย่างไร', 'ဘယ်လို ပေးမလဲ။'), src: LIFE, free: 1, opts: [
      { zh: '用 ATM 轉帳', ok: 1, then: [
        { scene: 'store', npc: null },
        n('d18b'),
        { q: { p: T('繳費要按哪一個？', 'Đóng tiền phải bấm nút nào?', 'Untuk membayar, tekan yang mana?', 'Which button do you press to pay?', 'จ่ายเงินต้องกดปุ่มไหน', 'ငွေပေးဖို့ ဘယ်ခလုတ်ကို နှိပ်ရမလဲ။'), src: LIFE, opts: [
          { zh: '轉帳', ok: 1 }, { zh: '提款', r: [n('d18w')] }, { zh: '查詢餘額' }, { zh: '存款' },
        ], wrong: [say('me', '不是這個……再看一次。')] } },
        n('d18c'),
      ] },
      { zh: '去學校出納組', ok: 1, then: [
        { scene: 'office', npc: 'staff' },
        say('staff', '請問你要繳什麼？'),
        { q: { p: P.reply, src: LIFE, opts: [
          { zh: '我要繳學雜費。', ok: 1 }, { zh: '我要買便當。' }, { zh: '我要請假。' }, { zh: '我要寄包裹。' },
        ], wrong: [say('staff', '這裡是出納組喔。')], ok: [say('staff', '好，這是收據，請收好。')] } },
      ] },
    ] } },
    n('d18d'),
    { fx: { money: -2000 } },
    { scene: 'office', npc: 'rina' },
    say('rina', '我去年也是這樣。每個月先把要繳的錢存起來，就不會不夠。'),
  ],
  D19: [
    { scene: 'phone', npc: 'stranger' },
    n('d19a'),
    say('stranger', '你的居留證借我拍一下，我給你三千塊。'),
    { q: { p: P.reply, src: LIFE, opts: [
      { zh: '不行，證件不能借人。', ok: 1 },
      { zh: '好啊，三千塊！', r: [{ scene: 'phone', npc: 'rina' }, say('rina', '不要！這是詐騙！'), say('rina', '居留證、護照、存摺、提款卡，都不能借給別人。')] },
      { zh: '你要拍幾張？', r: [say('rina', '不要回答他！這是詐騙！')] },
      { zh: '明天給你。', r: [say('rina', '不要！證件不能借人！')] },
    ], wrong: [say('rina', '想一想，證件可以借人嗎？')], ok: [say('stranger', '……'), { fx: { mood: 3 } }] } },
    { scene: 'classroom', npc: 'chen' },
    n('d19b'),
    say('chen', '證件要自己放好，一定不能借給別人。'),
    say('chen', '有奇怪的電話或訊息，先問我，也可以打一六五。', { listen: 1 }),
    { q: { p: T('有人騙你，可以打幾號？', 'Gặp lừa đảo có thể gọi số mấy?', 'Jika ada penipuan, telepon nomor berapa?', 'What number can you call about a scam?', 'เจอมิจฉาชีพ โทรเบอร์อะไรได้', 'လိမ်လည်မှုကြုံရင် ဘယ်နံပါတ်ကို ဆက်လို့ရလဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '165', ok: 1 }, { zh: '156' }, { zh: '119' }, { zh: '516' },
    ], wrong: [say('chen', '一、六、五。')] } },
    { q: { p: T('你的居留證要放在哪裡？', 'Thẻ cư trú của bạn nên để ở đâu?', 'Kartu izin tinggalmu sebaiknya disimpan di mana?', 'Where should you keep your residence card?', 'บัตรถิ่นที่อยู่ของคุณควรเก็บไว้ที่ไหน', 'နေထိုင်ခွင့်ကတ်ကို ဘယ်မှာ ထားရမလဲ။'), src: LIFE, opts: [
      { zh: '自己的錢包或抽屜，鎖好', ok: 1 },
      { zh: '給打工的老闆保管', r: [say('chen', '老闆也不可以拿走你的證件。')] },
      { zh: '放在交誼廳的桌上' },
      { zh: '給朋友保管' },
    ], wrong: [say('chen', '證件要放在自己身邊。')], ok: [say('chen', '很好。有問題就來找我。'), { fx: { aff: { chen: 1 } } }] } },
  ],
  W3: [
    { scene: 'phone', npc: 'rina' },
    n('w3a'),
    say('rina', '你怎麼了？'),
    { q: { p: P.reply, src: LIFE, free: 1, opts: [
      { zh: '我想家。', ok: 1, then: [say('rina', '我以前也這樣！明天一起吃飯，好不好？'), { fx: { mood: 20, aff: { rina: 1 } } }] },
      { zh: '我很餓。', ok: 1, then: [n('w3b'), { fx: { mood: 10 } }] },
      { zh: '我很忙。', ok: 1, then: [n('w3b'), { fx: { mood: 10 } }] },
      { zh: '沒有。', ok: 1, then: [n('w3b'), { fx: { mood: 10 } }] },
    ] } },
  ],
};

module.exports = { N, EVENTS };

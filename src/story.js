// 第一章劇本資料（7–9 月）。zh = 中文；vi id en th my = 五種輔助語言。
const T = (zh, vi, id, en, th, my) => ({ zh, vi, id, en, th, my });

const P = {
  reply: T('你要怎麼回答？', 'Bạn sẽ trả lời thế nào?', 'Bagaimana kamu menjawab?', 'How will you answer?', 'คุณจะตอบว่าอะไร', 'ဘယ်လိုဖြေမလဲ။'),
  say: T('你要說什麼？', 'Bạn sẽ nói gì?', 'Apa yang akan kamu katakan?', 'What will you say?', 'คุณจะพูดว่าอะไร', 'ဘာပြောမလဲ။'),
  pick: T('他說的是哪一個？', 'Người đó nói cái nào?', 'Yang mana yang dia katakan?', 'Which one did they say?', 'เขาพูดถึงอันไหน', 'သူပြောတာ ဘယ်ဟာလဲ။'),
  fill: T('選一個詞填進空格。', 'Chọn một từ điền vào chỗ trống.', 'Pilih satu kata untuk mengisi titik-titik.', 'Pick a word to fill the blank.', 'เลือกคำเติมในช่องว่าง', 'ကွက်လပ်ထဲ စကားလုံးတစ်လုံး ရွေးဖြည့်ပါ။'),
};

const N = {
  m01a: T('七月底，桃園機場。你拖著行李走出大廳，四周都是中文。', 'Cuối tháng Bảy, sân bay Đào Viên. Bạn kéo vali bước ra sảnh, xung quanh toàn là tiếng Trung.', 'Akhir Juli, Bandara Taoyuan. Kamu menarik koper keluar dari aula; di sekelilingmu semua berbahasa Mandarin.', 'Late July, Taoyuan Airport. You wheel your suitcase out of the hall. Everyone around you is speaking Chinese.', 'ปลายเดือนกรกฎาคม สนามบินเถาหยวน คุณลากกระเป๋าเดินออกจากโถง รอบตัวมีแต่ภาษาจีน', 'ဇူလိုင်လကုန်၊ ထောင်ယွမ်လေဆိပ်။ ခရီးဆောင်အိတ်ကို ဆွဲပြီး ခန်းမထဲက ထွက်လာတယ်။ ပတ်ဝန်းကျင်မှာ တရုတ်စကားချည်းပဲ။'),
  m01b: T('一個別著淺藍色髮夾的女生舉著學校的牌子，對你揮手。', 'Một cô gái cài kẹp tóc xanh nhạt giơ tấm biển của trường, vẫy tay với bạn.', 'Seorang gadis berjepit rambut biru muda mengangkat papan nama sekolah dan melambai padamu.', "A girl with a light-blue hair clip holds up a sign with your school's name and waves at you.", 'เด็กผู้หญิงติดกิ๊บสีฟ้าอ่อนชูป้ายชื่อโรงเรียนและโบกมือให้คุณ', 'ဆံညှပ်အပြာနုတပ်ထားတဲ့ ကောင်မလေးတစ်ယောက်က ကျောင်းဆိုင်းဘုတ်ကိုင်ပြီး လက်ပြနေတယ်။'),
  m01c: T('坐了一個小時的車，你們到了學校宿舍。', 'Sau một giờ đi xe, các bạn đến ký túc xá của trường.', 'Setelah satu jam perjalanan, kalian tiba di asrama sekolah.', "After an hour's ride, you arrive at the school dorm.", 'นั่งรถไปหนึ่งชั่วโมง พวกคุณก็ถึงหอพักของโรงเรียน', 'ကားတစ်နာရီလောက်စီးပြီး ကျောင်းအဆောင်ကို ရောက်လာတယ်။'),
  m01d: T('你敲了別人的門……一個穿睡衣的學長走出來。', 'Bạn gõ nhầm cửa… một anh khóa trên mặc đồ ngủ bước ra.', 'Kamu mengetuk pintu yang salah… seorang kakak kelas berpiyama keluar.', 'You knock on the wrong door… an older student in pajamas comes out.', 'คุณเคาะประตูผิดห้อง… รุ่นพี่ใส่ชุดนอนเดินออกมา', 'တံခါးမှားခေါက်မိတယ်… ညအိပ်ဝတ်စုံနဲ့ စီနီယာတစ်ယောက် ထွက်လာတယ်။'),
  m01e: T('302 房裡，一個綁紅色髮帶的女生正在吃餅乾。', 'Trong phòng 302, một cô gái buộc băng đô đỏ đang ăn bánh quy.', 'Di kamar 302, seorang gadis berbando merah sedang makan biskuit.', 'In room 302, a girl with a red hairband is eating cookies.', 'ในห้อง 302 เด็กผู้หญิงคาดผมสีแดงกำลังกินขนมปังกรอบ', 'အခန်း ၃၀၂ ထဲမှာ ဆံပင်စည်းကြိုးအနီနဲ့ ကောင်မလေးတစ်ယောက် ဘီစကွတ်စားနေတယ်။'),
  m01f: T('第一天結束了。明天開始，自己安排每天要做什麼吧！', 'Ngày đầu tiên đã kết thúc. Từ mai, hãy tự sắp xếp mỗi ngày mình sẽ làm gì nhé!', 'Hari pertama selesai. Mulai besok, atur sendiri apa yang akan kamu lakukan setiap hari!', 'Your first day is over. From tomorrow, you decide what to do each day!', 'วันแรกจบแล้ว ตั้งแต่พรุ่งนี้ คุณวางแผนเองว่าแต่ละวันจะทำอะไร', 'ပထမနေ့ ပြီးသွားပြီ။ မနက်ဖြန်ကစပြီး နေ့တိုင်း ဘာလုပ်မလဲ ကိုယ်တိုင်စီစဉ်ပါ။'),
  m02a: T('八月。下個月就要實習了，陳導師找你去辦公室。', 'Tháng Tám. Tháng sau là bắt đầu thực tập, thầy chủ nhiệm Trần gọi bạn lên văn phòng.', 'Agustus. Bulan depan magang dimulai; wali kelas Pak Chen memanggilmu ke kantor.', 'August. Your internship starts next month, and your homeroom teacher, Mr. Chen, calls you to his office.', 'เดือนสิงหาคม เดือนหน้าจะเริ่มฝึกงาน ครูประจำชั้นเฉินเรียกคุณไปที่ห้องพักครู', 'ဩဂုတ်လ။ နောက်လ အလုပ်သင်စမယ်။ အတန်းပိုင်ဆရာချန်က ရုံးခန်းကို ခေါ်တယ်။'),
  m02b: T('桌上有一張徵才單。', 'Trên bàn có một tờ thông báo tuyển dụng.', 'Di meja ada selebaran lowongan kerja.', "There's a job notice on the desk.", 'บนโต๊ะมีประกาศรับสมัครงาน', 'စားပွဲပေါ်မှာ အလုပ်ခေါ်စာ တစ်ရွက်ရှိတယ်။'),
  m02c: T('填履歷：把字卡放進空格。', 'Điền sơ yếu lý lịch: đặt thẻ chữ vào ô trống.', 'Isi CV: taruh kartu kata ke kotak kosong.', 'Fill in the résumé: put a word card into the blank.', 'กรอกประวัติ: วางบัตรคำลงในช่องว่าง', 'ကိုယ်ရေးအကျဉ်း ဖြည့်ပါ- စကားလုံးကတ်ကို ကွက်လပ်ထဲ ထည့်ပါ။'),
  m02d: T('會議室裡，坐著一位話不多的師傅。', 'Trong phòng họp có một bác thợ ít nói.', 'Di ruang rapat duduk seorang mandor yang pendiam.', 'In the meeting room sits a quiet supervisor.', 'ในห้องประชุมมีหัวหน้าช่างที่พูดน้อยนั่งอยู่', 'အစည်းအဝေးခန်းထဲမှာ စကားနည်းတဲ့ ဆရာတစ်ယောက် ထိုင်နေတယ်။'),
  m02e: T('面試結束！九月一日，你要去{work}實習。', 'Phỏng vấn xong! Ngày 1 tháng 9, bạn sẽ thực tập tại {work}.', 'Wawancara selesai! Tanggal 1 September kamu magang di {work}.', 'Interview done! On September 1 you start your internship at the {work}.', 'สัมภาษณ์เสร็จแล้ว! วันที่ 1 กันยายน คุณจะไปฝึกงานที่{work}', 'အင်တာဗျူး ပြီးပြီ! စက်တင်ဘာ ၁ ရက်နေ့ {work} မှာ အလုပ်သင်သွားရမယ်။'),
  m03a: T('九月一日，早上七點五十分。你穿著新的工作服，站在{work}門口。', 'Ngày 1 tháng 9, 7 giờ 50 sáng. Bạn mặc đồng phục làm việc mới, đứng trước cửa {work}.', '1 September, pukul 07.50. Kamu berdiri di depan {work} dengan baju kerja baru.', 'September 1, 7:50 a.m. You stand at the door of the {work} in your new work clothes.', '1 กันยายน เวลา 7:50 น. คุณใส่ชุดทำงานใหม่ยืนอยู่หน้า{work}', 'စက်တင်ဘာ ၁ ရက်၊ မနက် ၇ နာရီ ၅၀။ အလုပ်ဝတ်စုံအသစ်နဲ့ {work} ရှေ့မှာ ရပ်နေတယ်။'),
  m03b: T('你拿錯了東西……阿蓮在旁邊偷笑。', 'Bạn cầm nhầm đồ… A Liên cười khúc khích bên cạnh.', 'Kamu mengambil barang yang salah… A Lian tertawa kecil di samping.', 'You grab the wrong thing… A-Lian giggles next to you.', 'คุณหยิบของผิด… อาเหลียนแอบหัวเราะอยู่ข้าง ๆ', 'ပစ္စည်းမှား ယူမိတယ်… ဘေးနားက အာလျန် ခိုးရယ်နေတယ်။'),
  m03c: T('你伸手要按按鈕——', 'Bạn đưa tay định bấm nút—', 'Kamu mengulurkan tangan untuk menekan tombol—', 'You reach out to press a button—', 'คุณยื่นมือจะกดปุ่ม—', 'ခလုတ်နှိပ်ဖို့ လက်လှမ်းလိုက်တယ်—'),
  m03d: T('中午，一位同事拿著便當坐到你旁邊。', 'Buổi trưa, một đồng nghiệp cầm hộp cơm ngồi xuống cạnh bạn.', 'Siang hari, seorang rekan kerja membawa bekal duduk di sebelahmu.', 'At noon, a coworker sits down next to you with her lunch box.', 'ตอนเที่ยง เพื่อนร่วมงานคนหนึ่งถือข้าวกล่องมานั่งข้าง ๆ คุณ', 'နေ့လယ်ခင်း လုပ်ဖော်ကိုင်ဖက်တစ်ယောက် ထမင်းဘူးကိုင်ပြီး ဘေးမှာ လာထိုင်တယ်။'),
  m03e: T('你在休息室睡著了……', 'Bạn ngủ quên trong phòng nghỉ…', 'Kamu tertidur di ruang istirahat…', 'You fall asleep in the break room…', 'คุณเผลอหลับในห้องพัก…', 'အနားယူခန်းထဲမှာ အိပ်ပျော်သွားတယ်…'),
  m03f: T('實習第一天結束了。之後可以選「實習」了。', 'Ngày thực tập đầu tiên đã xong. Từ giờ bạn có thể chọn “Thực tập”.', 'Hari magang pertama selesai. Sekarang kamu bisa memilih “Magang”.', 'Your first internship day is over. You can now choose “Internship”.', 'ฝึกงานวันแรกจบแล้ว ต่อจากนี้เลือก “ฝึกงาน” ได้แล้ว', 'အလုပ်သင် ပထမနေ့ ပြီးပါပြီ။ အခုကစပြီး “အလုပ်သင်” ကို ရွေးလို့ရပြီ။'),
  m03s: T('今天是開學第一天，你回到教室，同學們都來了。', 'Hôm nay là ngày khai giảng, bạn quay lại lớp và các bạn đều đã đến.', 'Hari ini hari pertama sekolah, kamu kembali ke kelas dan teman-teman sudah datang.', 'Today is the first day of school. You return to class, and everyone is here.', 'วันนี้เป็นวันเปิดเทอมวันแรก คุณกลับมาที่ห้องเรียน เพื่อนๆ มากันหมดแล้ว', 'ဒီနေ့ ကျောင်းဖွင့်ရက် ပထမနေ့ ပါ။ ခင်ဗျား အတန်းကို ပြန်ရောက်တယ်၊ သူငယ်ချင်းတွေ အကုန် ရောက်နေကြပြီ။'),
  d1a: T('一位拿著紅色購物籃的阿嬤，手太短，拿不到上面的飲料。', 'Một bà cụ cầm giỏ đỏ, với không tới đồ uống trên kệ cao.', 'Seorang nenek dengan keranjang merah tidak bisa meraih minuman di rak atas.', "A grandma with a red shopping basket can't reach the drinks on the top shelf.", 'คุณยายถือตะกร้าสีแดงเอื้อมไม่ถึงเครื่องดื่มชั้นบน', 'ခြင်းနီကိုင်ထားတဲ့ အဘွားတစ်ယောက် အပေါ်စင်က အချိုရည်ကို လှမ်းမမီဘူး။'),
  d1b: T('阿嬌送你一個紅豆餅。', 'Bà A Kiều tặng bạn một cái bánh đậu đỏ.', 'Nenek A Jiao memberimu kue kacang merah.', 'Grandma A-Jiao gives you a red-bean cake.', 'ยายอาเจียวให้ขนมถั่วแดงคุณหนึ่งชิ้น', 'အဘွားအာကျောက် ပဲနီမုန့်တစ်ခု ပေးတယ်။'),
  d2a: T('走到一半，突然下起大雨。你跑進便利商店。', 'Đang đi thì trời bỗng mưa to. Bạn chạy vào cửa hàng tiện lợi.', 'Di tengah jalan tiba-tiba hujan deras. Kamu berlari ke minimarket.', 'Halfway there, it suddenly pours. You run into a convenience store.', 'เดินไปได้ครึ่งทางฝนก็ตกหนัก คุณวิ่งเข้าร้านสะดวกซื้อ', 'လမ်းတစ်ဝက်မှာ မိုးသည်းသည်း ရွာလာတယ်။ စတိုးဆိုင်ထဲ ပြေးဝင်လိုက်တယ်။'),
  d2b: T('錢不對，店員搖搖頭。', 'Sai số tiền rồi, nhân viên lắc đầu.', 'Uangnya salah, kasir menggeleng.', "That's the wrong amount. The clerk shakes his head.", 'จ่ายเงินไม่ถูก พนักงานส่ายหัว', 'ငွေမှားနေလို့ ဝန်ထမ်းက ခေါင်းခါတယ်။'),
  d2c: T('你買到雨傘了，不怕下雨了。', 'Bạn mua được ô rồi, không sợ mưa nữa.', 'Kamu dapat payung, tidak takut hujan lagi.', 'You got an umbrella. No more worrying about rain.', 'คุณซื้อร่มได้แล้ว ไม่กลัวฝนแล้ว', 'ထီးဝယ်ရပြီ၊ မိုးမကြောက်တော့ဘူး။'),
  d3a: T('你和阿蜜約在捷運站見面，可是你找不到捷運站。', 'Bạn hẹn A Mật ở ga tàu điện, nhưng không tìm thấy ga.', 'Kamu janjian dengan A Mi di stasiun MRT, tapi tidak bisa menemukan stasiunnya.', "You're meeting A-Mi at the MRT station, but you can't find it.", 'คุณนัดอาหมี่ที่สถานี MRT แต่หาสถานีไม่เจอ', 'အာမိနဲ့ MRT ဘူတာမှာ ချိန်းထားပေမဲ့ ဘူတာကို ရှာမတွေ့ဘူး။'),
  d3b: T('你走進了一家豆花店。阿蜜打電話來……', 'Bạn đi lạc vào một quán tàu hũ. A Mật gọi điện tới…', 'Kamu malah masuk ke toko kembang tahu. A Mi menelepon…', 'You end up in a tofu-pudding shop. A-Mi calls you…', 'คุณเดินเข้าร้านเต้าฮวยไปซะงั้น อาหมี่โทรมา…', 'တိုဟူးအချိုဆိုင်ထဲ ရောက်သွားတယ်။ အာမိ ဖုန်းဆက်လာတယ်…'),
  d3c: T('你準時到了！你們一起去逛街。', 'Bạn đến đúng giờ! Hai người cùng đi dạo phố.', 'Kamu tiba tepat waktu! Kalian jalan-jalan bersama.', 'You made it on time! You go shopping together.', 'คุณไปถึงตรงเวลา! แล้วไปเดินเล่นด้วยกัน', 'အချိန်မီ ရောက်တယ်! အတူတူ လျှောက်လည်ကြတယ်။'),
  d4a: T('手機響了，是阿蜜傳來的 LINE。', 'Điện thoại reo, là tin LINE của A Mật.', 'HP berbunyi, ada LINE dari A Mi.', "Your phone buzzes. It's a LINE message from A-Mi.", 'โทรศัพท์ดัง เป็นข้อความ LINE จากอาหมี่', 'ဖုန်းမြည်လာတယ်၊ အာမိဆီက LINE စာ။'),
  d5a: T('實習單位旁邊的便利商店，一位戴耳環的店員拿起你的便當。', 'Ở cửa hàng tiện lợi cạnh chỗ thực tập, một nhân viên đeo khuyên tai cầm hộp cơm của bạn.', 'Di minimarket dekat tempat magang, kasir beranting mengambil bekalmu.', 'At the convenience store near your internship, a clerk with an earring picks up your lunch box.', 'ร้านสะดวกซื้อใกล้ที่ฝึกงาน พนักงานใส่ต่างหูหยิบข้าวกล่องของคุณ', 'အလုပ်သင်နေရာနားက စတိုးဆိုင်မှာ နားကပ်ပန်ထားတဲ့ ဝန်ထမ်းက ထမင်းဘူးကို ကောက်ကိုင်တယ်။'),
  d5b: T('你吃到一個冰冰的便當……', 'Bạn ăn một hộp cơm lạnh ngắt…', 'Kamu makan bekal yang dingin…', 'You end up eating a cold lunch…', 'คุณได้กินข้าวกล่องเย็นชืด…', 'ထမင်းဘူး အေးစက်စက်ကို စားရတယ်…'),
  d5c: T('熱熱的便當，好好吃！', 'Hộp cơm nóng hổi, ngon quá!', 'Bekal hangat, enak sekali!', 'A hot lunch. Delicious!', 'ข้าวกล่องร้อน ๆ อร่อยมาก!', 'ထမင်းဘူး ပူပူလေး၊ အရမ်းကောင်းတယ်!'),
  d6a: T('你抱著一箱東西往前走。', 'Bạn ôm một thùng đồ đi về phía trước.', 'Kamu berjalan sambil membawa sebuah kotak.', 'You walk forward carrying a box.', 'คุณอุ้มกล่องเดินไปข้างหน้า', 'ပစ္စည်းသေတ္တာတစ်လုံး ပွေ့ပြီး ရှေ့ဆက်လျှောက်နေတယ်။'),
  d6b: T('你滑了一下，還好接住了箱子，人沒事。', 'Bạn trượt chân một chút, may mà giữ được thùng, không sao cả.', 'Kamu terpeleset, untung kotaknya tertangkap dan kamu tidak apa-apa.', "You slip, but catch the box. You're okay.", 'คุณลื่นนิดหน่อย โชคดีรับกล่องไว้ได้ ไม่เป็นอะไร', 'နည်းနည်း ချော်သွားပေမဲ့ သေတ္တာကို ဖမ်းမိတယ်၊ ဘာမှမဖြစ်ဘူး။'),
  d6c: T('你繞過了地上的水。', 'Bạn đi vòng qua vũng nước.', 'Kamu menghindari air di lantai.', 'You step around the water.', 'คุณเดินอ้อมน้ำบนพื้น', 'ကြမ်းပြင်ပေါ်က ရေကို ရှောင်လျှောက်တယ်။'),
  d7a: T('下午，你提著垃圾到一樓的回收區，阿姨在那裡。', 'Buổi chiều, bạn xách rác xuống khu phân loại rác ở tầng một. Cô quản lý ký túc xá đang ở đó.', 'Sore hari, kamu membawa sampah ke tempat daur ulang di lantai satu. Ibu asrama ada di sana.', 'In the afternoon, you carry your trash down to the recycling area on the first floor. The housemother is there.', 'ตอนบ่าย คุณถือขยะลงไปที่จุดแยกขยะชั้นหนึ่ง คุณป้าผู้ดูแลหอพักยืนอยู่ตรงนั้น', 'နေ့လယ်၊ သင် အမှိုက်ကို တစ်ထပ်ရှိ အမှိုက်ခွဲခြားရာနေရာကို သယ်သွားတယ်။ အဆောင်မှူးအန်တီ အဲဒီမှာ ရှိတယ်။'),
  d7b: T('三包垃圾都丟對了！', 'Cả ba túi rác đều bỏ đúng chỗ!', 'Ketiga kantong sampah dibuang di tempat yang benar!', 'All three bags went in the right bins!', 'ทิ้งขยะถูกที่ครบทั้งสามถุง!', 'အမှိုက်အိတ် သုံးအိတ်လုံး မှန်မှန်ကန်ကန် ပစ်ခဲ့တယ်!'),
  d8a: T('晚上，阿蜜肚子餓了，拿出一包泡麵。', 'Buổi tối, A Mật đói bụng, lấy ra một gói mì ăn liền.', 'Malam hari, A Mi lapar dan mengeluarkan sebungkus mi instan.', 'In the evening, A-Mi gets hungry and pulls out a pack of instant noodles.', 'ตอนเย็น อาหมี่หิว เลยหยิบบะหมี่กึ่งสำเร็จรูปออกมาหนึ่งห่อ', 'ညနေ၊ အာမိ ဗိုက်ဆာလို့ ခေါက်ဆွဲခြောက်တစ်ထုပ် ထုတ်လာတယ်။'),
  d8b: T('叩叩叩！阿姨來敲門了。', 'Cốc cốc cốc! Cô quản lý gõ cửa.', 'Tok tok tok! Ibu asrama mengetuk pintu.', 'Knock knock knock! The housemother is at the door.', 'ก๊อก ก๊อก ก๊อก! คุณป้ามาเคาะประตู', 'ဒေါက် ဒေါက် ဒေါက်! အန်တီ တံခါးလာခေါက်တယ်။'),
  d8c: T('你們在交誼廳吃泡麵，還認識了別的同學。', 'Hai bạn ăn mì ở phòng sinh hoạt chung và còn quen thêm bạn mới.', 'Kalian makan mi di ruang bersama dan berkenalan dengan teman lain.', 'You eat noodles in the lounge and meet some other students.', 'พวกคุณกินบะหมี่ที่ห้องนั่งเล่นรวม แล้วยังได้รู้จักเพื่อนคนอื่นด้วย', 'သင်တို့ ဧည့်ခန်းဆောင်မှာ ခေါက်ဆွဲစားရင်း တခြားကျောင်းသားတွေနဲ့ပါ သိကျွမ်းခဲ့တယ်။'),
  d8d: T('湯倒在床上了……棉被都是泡麵的味道。', 'Nước mì đổ ra giường… Chăn toàn mùi mì.', 'Kuahnya tumpah ke kasur… Selimut jadi bau mi.', 'The soup spills on the bed… now the blanket smells like noodles.', 'น้ำซุปหกใส่เตียง… ผ้าห่มมีแต่กลิ่นบะหมี่', 'ဟင်းရည်တွေ အိပ်ရာပေါ် ဖိတ်သွားတယ်… စောင်တစ်ခုလုံး ခေါက်ဆွဲနံ့ ဖြစ်သွားတယ်။'),
  d9a: T('星期三晚上，阿姨拿著檢查表來看房間。', 'Tối thứ Tư, cô quản lý cầm bảng kiểm tra đến xem phòng.', 'Rabu malam, ibu asrama datang membawa daftar periksa untuk memeriksa kamar.', 'Wednesday evening: the housemother comes with a checklist to inspect the room.', 'เย็นวันพุธ คุณป้าถือแบบตรวจมาตรวจห้อง', 'ဗုဒ္ဓဟူးနေ့ညနေ၊ အန်တီက စစ်ဆေးစာရင်း ကိုင်ပြီး အခန်းလာစစ်တယ်။'),
  d9b: T('阿姨看了看房間，笑著點點頭。', 'Cô nhìn quanh phòng rồi mỉm cười gật đầu.', 'Ibu asrama melihat kamar, lalu tersenyum dan mengangguk.', 'She looks around the room, smiles and nods.', 'คุณป้ามองดูห้อง แล้วยิ้มพยักหน้า', 'အန်တီက အခန်းကိုကြည့်ပြီး ပြုံးပြီး ခေါင်းညိတ်တယ်။'),
  d9c: T('阿姨看了看房間，皺起了眉頭。', 'Cô nhìn quanh phòng rồi nhíu mày.', 'Ibu asrama melihat kamar, lalu mengerutkan dahi.', 'She looks around the room and frowns.', 'คุณป้ามองดูห้อง แล้วขมวดคิ้ว', 'အန်တီက အခန်းကိုကြည့်ပြီး မျက်ခုံးကြုံ့လိုက်တယ်။'),
  w1a: T('阿姨請你到宿舍辦公室聊一聊。', 'Cô quản lý mời bạn đến văn phòng ký túc xá nói chuyện.', 'Ibu asrama memanggilmu ke kantor asrama untuk bicara.', 'The housemother asks you to come to the dorm office for a talk.', 'คุณป้าเรียกคุณไปคุยที่ห้องทำงานหอพัก', 'အန်တီက အဆောင်ရုံးခန်းကို စကားပြောဖို့ ခေါ်တယ်။'),
  w2a: T('星期六早上，你要去愛校服務：打掃校園。', 'Sáng thứ Bảy, bạn phải đi lao động phục vụ trường: quét dọn sân trường.', 'Sabtu pagi, kamu harus kerja bakti sekolah: membersihkan kampus.', 'Saturday morning: you have school service duty—cleaning the campus.', 'เช้าวันเสาร์ คุณต้องไปบำเพ็ญประโยชน์ให้โรงเรียน: ทำความสะอาดโรงเรียน', 'စနေနေ့မနက်၊ ကျောင်းအကျိုးပြုလုပ်ငန်း လုပ်ရမယ်- ကျောင်းဝင်းကို သန့်ရှင်းရေးလုပ်ရမယ်။'),
  w2b: T('掃了一個小時，好累……可是校園變得好乾淨。', 'Quét suốt một tiếng, mệt quá… nhưng sân trường sạch hẳn.', 'Menyapu satu jam, capek sekali… tapi kampus jadi bersih.', 'An hour of sweeping—exhausting… but the campus looks so clean.', 'กวาดอยู่หนึ่งชั่วโมง เหนื่อยมาก… แต่โรงเรียนสะอาดขึ้นเยอะ', 'တစ်နာရီလောက် တံမြက်စည်းလှည်းရတာ ပင်ပန်းလိုက်တာ… ဒါပေမဲ့ ကျောင်းဝင်း သန့်ရှင်းသွားတယ်။'),
  clean: T('你倒了垃圾，把東西放回原來的地方。房間變乾淨了！', 'Bạn đổ rác và cất đồ về chỗ cũ. Phòng sạch rồi!', 'Kamu membuang sampah dan mengembalikan barang ke tempatnya. Kamar jadi bersih!', 'You take out the trash and put everything back in its place. The room is clean!', 'คุณเอาขยะไปทิ้งและเก็บของเข้าที่ ห้องสะอาดแล้ว!', 'အမှိုက်ပစ်ပြီး ပစ္စည်းတွေကို နေရာပြန်ထားလိုက်တယ်။ အခန်း သန့်ရှင်းသွားပြီ!'),
  trash: T('垃圾桶滿了，房間有一點臭……明天要記得倒垃圾。', 'Thùng rác đầy rồi, phòng hơi có mùi… Mai nhớ đổ rác nhé.', 'Tempat sampah penuh, kamar agak bau… Besok jangan lupa buang sampah.', 'The trash can is full and the room smells a bit… remember to take it out tomorrow.', 'ถังขยะเต็มแล้ว ห้องเริ่มมีกลิ่น… พรุ่งนี้อย่าลืมเอาขยะไปทิ้งนะ', 'အမှိုက်ပုံး ပြည့်နေပြီ၊ အခန်း နည်းနည်းနံနေတယ်… မနက်ဖြန် အမှိုက်ပစ်ဖို့ မမေ့နဲ့။'),
  cls: T('華語課：林老師給你一題。', 'Lớp tiếng Hoa: cô Lâm cho bạn một câu.', 'Kelas Mandarin: Bu Lin memberimu satu soal.', 'Chinese class: Ms. Lin gives you a question.', 'คาบภาษาจีน: ครูหลินให้โจทย์หนึ่งข้อ', 'တရုတ်စာသင်ချိန်- ဆရာမလင် မေးခွန်းတစ်ခု ပေးတယ်။'),
  study: T('你在房間自己複習。', 'Bạn tự ôn bài trong phòng.', 'Kamu belajar sendiri di kamar.', 'You review on your own in your room.', 'คุณทบทวนบทเรียนเองในห้อง', 'အခန်းထဲမှာ ကိုယ့်ဘာသာ ပြန်လေ့လာတယ်။'),
  rest: T('你睡了一覺，精神好多了。', 'Bạn ngủ một giấc, thấy khỏe hơn nhiều.', 'Kamu tidur sebentar dan merasa jauh lebih segar.', 'You take a nap and feel much better.', 'คุณนอนพัก รู้สึกสดชื่นขึ้นมาก', 'တစ်ရေးအိပ်လိုက်တော့ အများကြီး လန်းဆန်းသွားတယ်။'),
  call: T('你打電話回家，家人很想你。', 'Bạn gọi điện về nhà, gia đình rất nhớ bạn.', 'Kamu menelepon keluarga; mereka sangat merindukanmu.', 'You call home. Your family misses you a lot.', 'คุณโทรกลับบ้าน ครอบครัวคิดถึงคุณมาก', 'အိမ်ကို ဖုန်းဆက်တယ်၊ မိသားစုက အရမ်းလွမ်းနေတယ်။'),
  shop: T('你在便利商店買了一個麵包。', 'Bạn mua một cái bánh mì ở cửa hàng tiện lợi.', 'Kamu membeli roti di minimarket.', 'You buy a bun at the convenience store.', 'คุณซื้อขนมปังหนึ่งชิ้นที่ร้านสะดวกซื้อ', 'စတိုးဆိုင်မှာ ပေါင်မုန့်တစ်လုံး ဝယ်တယ်။'),
  out: T('你和阿蜜去夜市吃東西，好開心！', 'Bạn cùng A Mật đi chợ đêm ăn uống, vui quá!', 'Kamu dan A Mi makan di pasar malam. Senangnya!', 'You and A-Mi eat at the night market. So much fun!', 'คุณกับอาหมี่ไปกินของที่ตลาดกลางคืน สนุกมาก!', 'အာမိနဲ့ ညဈေးမှာ စားသောက်ကြတယ်၊ အရမ်းပျော်တယ်!'),
  work: T('你認真地工作了一整個上午。', 'Bạn làm việc chăm chỉ cả buổi.', 'Kamu bekerja dengan rajin.', 'You work hard all morning.', 'คุณทำงานอย่างตั้งใจ', 'အလုပ်ကို ကြိုးကြိုးစားစား လုပ်တယ်။'),
  tired: T('你太累了，先休息吧。', 'Bạn mệt quá rồi, nghỉ ngơi đã nhé.', 'Kamu terlalu lelah, istirahat dulu.', "You're too tired. Rest first.", 'คุณเหนื่อยเกินไปแล้ว พักก่อนนะ', 'အရမ်းပင်ပန်းနေပြီ၊ အရင်နားလိုက်ပါ။'),
};

// 對話行：{say:'角色', zh:'台詞', listen:true 表示先藏文字只聽聲音}
const say = (who, zh, extra = {}) => ({ say: who, zh, ...extra });
const n = (k) => ({ n: N[k] });

const EVENTS = {
  M01: [
    { scene: 'airport', npc: 'rina' },
    n('m01a'), n('m01b'),
    say('rina', '你好！我是 Rina。'),
    say('rina', '你是新同學嗎？你叫什麼名字？'),
    { q: { p: P.reply, src: '改自 1-30、1-34', opts: [
      { zh: '你好，我叫{name}。', ok: 1 },
      { zh: '你好，我是老師。', r: [say('rina', '你是老師？哈哈，不是吧！')] },
      { zh: '謝謝，再見。', r: [say('rina', '再見？你要去哪裡？')] },
      { zh: '我姓學生。', r: [say('rina', '嗯？你姓什麼？')] },
    ], ok: [say('rina', '{name}，歡迎你！'), { fx: { aff: { rina: 1 } } }] } },
    say('rina', '我是印尼人。你是哪國人？'),
    { q: { p: P.reply, src: '改自 1-03', opts: [
      { zh: '我是{home}人。', ok: 1 },
      { zh: '我是台灣人。', r: [say('rina', '哇，你是台灣人？你的中文很好喔！')] },
      { zh: '我是學生人。', r: [say('rina', '學生人？哈哈！')] },
      { zh: '我是機場。', r: [say('rina', '你是機場？')] },
    ], ok: [say('rina', '我有很多{home}朋友！')] } },
    { scene: 'dorm', npc: 'ayi' },
    n('m01c'),
    say('ayi', '你的房間是三〇二。', { listen: 1 }),
    { q: { p: T('你的房間是幾號？', 'Phòng của bạn số mấy?', 'Nomor kamarmu berapa?', 'What is your room number?', 'ห้องของคุณเบอร์อะไร', 'သင့်အခန်းနံပါတ် ဘယ်လောက်လဲ။'), src: '改自 1-32', kind: 'listen', opts: [
      { zh: '302', ok: 1 }, { zh: '203', r: [n('m01d'), say('xuezhang', '你找誰？')] }, { zh: '320', r: [n('m01d'), say('xuezhang', '你找誰？')] }, { zh: '312', r: [n('m01d'), say('xuezhang', '你找誰？')] },
    ] } },
    { scene: 'room', npc: 'amei' },
    n('m01e'),
    say('amei', '你好！我叫阿蜜，我是你的室友。'),
    say('amei', '這是我們的房間。', { listen: 1 }),
    { q: { p: P.pick, src: '題庫 1-04', kind: 'listen', opts: [
      { zh: '宿舍房間', e: '🛏️', ok: 1 },
      { zh: '教室', e: '🏫', r: [say('amei', '不是教室啦！')] },
      { zh: '機場', e: '✈️', r: [say('amei', '不是機場啦！')] },
      { zh: '商店', e: '🏪', r: [say('amei', '在這裡啦！')] },
    ] } },
    say('amei', '給你！'),
    { q: { p: P.say, src: '改自 1-29', opts: [
      { zh: '謝謝！', ok: 1 },
      { zh: '再見！', r: [say('amei', '再見？你要去哪裡？')] },
      { zh: '對不起！', r: [say('amei', '對不起什麼？哈哈。')] },
      { zh: '你好嗎？', r: [say('amei', '我很好！餅乾給你啦。')] },
    ], ok: [say('amei', '不客氣！走，去吃東西！'), { fx: { aff: { amei: 1 } } }] } },
    { fx: { mood: 10, hp: -20 } },
    { card: 'easycard' },
    n('m01f'),
  ],

  M02: [
    { scene: 'office', npc: 'chen' },
    n('m02a'),
    say('chen', '先看一下這張。'),
    n('m02b'),
    { poster: [['工作', '實習生'], ['時間', '星期一到星期五'], ['', '早上八點到下午五點'], ['中午', '休息一個小時'], ['薪水', '一個月 30,900 元起'], ['要穿、要戴', '工作服、{gear}']] },
    { q: { p: T('實習幾點上班？', 'Thực tập mấy giờ vào làm?', 'Magang mulai kerja jam berapa?', 'What time does the internship start?', 'ฝึกงานเริ่มงานกี่โมง', 'အလုပ်သင် ဘယ်နှစ်နာရီ စဝင်ရမလဲ။'), src: '改自 6-07、6-13', opts: [
      { zh: '早上八點', ok: 1 }, { zh: '早上九點' }, { zh: '下午五點' }, { zh: '晚上八點' },
    ], wrong: [say('chen', '再看一次。')], ok: [say('chen', '對，不要遲到。')] } },
    n('m02c'),
    { q: { p: T('「國家」這一格要放哪張字卡？', 'Ô “quốc gia” nên đặt thẻ chữ nào?', 'Kartu kata mana untuk kolom “negara”?', 'Which word card goes in the “country” box?', 'ช่อง “ประเทศ” ต้องใส่บัตรคำใบไหน', '“နိုင်ငံ” အကွက်ထဲ ဘယ်စကားလုံးကတ် ထည့်မလဲ။'), src: '改自 1-21、1-22', opts: [
      { zh: '{home}', ok: 1 }, { zh: '{name}' }, { zh: '{dept}' }, { zh: '302', r: [say('chen', '你住在「302 國」嗎？')] },
    ], wrong: [say('chen', '嗯……再想一下。')], ok: [say('chen', '好，可以了。')] } },
    { scene: 'meeting', npc: 'zhang' },
    n('m02d'),
    say('zhang', '請坐。'),
    say('zhang', '早上八點上班，可以嗎？'),
    { q: { p: P.reply, opts: [
      { zh: '可以，沒問題。', ok: 1 }, { zh: '不可以，我要睡覺。' }, { zh: '我是八點。' }, { zh: '八點多少錢？' },
    ], wrong: [say('chen', '（小聲）說「可以」。')] } },
    say('zhang', '上班的時候，要戴什麼？', { listen: 1 }),
    { q: { p: P.pick, src: '改自 6-21', kind: 'listen', gear: 1, opts: [
      { zh: '{gear}', ok: 1 }, { zh: '雨傘', e: '☂️' }, { zh: '水瓶', e: '🧴' }, { zh: '便當', e: '🍱' },
    ], wrong: [say('zhang', '……再想一下。')], ok: [say('zhang', '安全第一。')] } },
    say('zhang', '你會說中文嗎？'),
    { q: { p: P.reply, opts: [
      { zh: '會一點點，我每天都在學。', ok: 1 }, { zh: '我不是中文。' }, { zh: '中文多少錢？' }, { zh: '再見。' },
    ], wrong: [say('zhang', '……沒關係，慢慢學。')], ok: [say('zhang', '好。九月一日，八點見。')] } },
    { ifScore: 4, then: [{ fx: { aff: { zhang: 2 }, skill: 5 } }, { title: 'interview' }], else: [{ fx: { aff: { zhang: 1 }, skill: 2 } }] },
    { fx: { mood: 5, hp: -10 } },
    n('m02e'),
  ],

  M03: [
    { ifStatus: 'work', then: [
    { scene: 'work', npc: 'zhang' },
    n('m03a'),
    say('zhang', '早。先去打卡。', { listen: 1 }),
    { q: { p: T('你要去哪裡？', 'Bạn phải đi đâu?', 'Kamu harus pergi ke mana?', 'Where should you go?', 'คุณต้องไปที่ไหน', 'ဘယ်ကိုသွားရမလဲ။'), src: '改自 6-03', kind: 'listen', opts: [
      { zh: '打卡機', e: '⏱️', ok: 1 }, { zh: '洗手台', e: '🚰' }, { zh: '休息室', e: '🛋️', r: [say('alian', '打卡在門口喔！')] }, { zh: '餐廳', e: '🍽️' },
    ], wrong: [say('alian', '打卡在門口喔！')] } },
    say('zhang', '請戴{gear}。', { listen: 1 }),
    { q: { p: T('張師傅要你戴什麼？', 'Thầy Trương bảo bạn đeo gì?', 'Pak Zhang menyuruhmu memakai apa?', 'What does Master Zhang want you to wear?', 'อาจารย์จางให้คุณสวมอะไร', 'ဆရာကျန်းက ဘာဝတ်ခိုင်းလဲ။'), src: '題庫 6-01、6-27', kind: 'listen', gear: 2, opts: [
      { zh: '{gear}', ok: 1 }, { zh: '手套', e: '🧤' }, { zh: '工作服', e: '🥼' }, { zh: '{gear2}' },
    ], wrong: [n('m03b')], ok: [say('zhang', '好。安全第一。')] } },
    say('zhang', '這台機器很危險，不要碰。', { listen: 1 }),
    { q: { p: T('張師傅說什麼？', 'Thầy Trương nói gì?', 'Apa kata Pak Zhang?', 'What did Master Zhang say?', 'อาจารย์จางพูดว่าอะไร', 'ဆရာကျန်း ဘာပြောလဲ။'), src: '題庫 6-30', kind: 'listen', opts: [
      { zh: '不要碰機器', ok: 1 }, { zh: '快去修理機器' }, { zh: '可以休息' }, { zh: '去洗手' },
    ], wrong: [n('m03c'), say('zhang', '小心！'), { fx: { hp: -3 } }] } },
    say('zhang', '有危險的時候，從這裡出去。', { listen: 1 }),
    { q: { p: T('「這裡」是哪一個？', '“Chỗ này” là cái nào?', '“Sini” yang mana?', 'Which one is “here”?', '“ตรงนี้” คืออันไหน', '“ဒီမှာ” ဆိုတာ ဘယ်ဟာလဲ။'), src: '改自 6-06', kind: 'listen', opts: [
      { zh: '緊急出口', e: '🟩🏃', ok: 1 }, { zh: '危險', e: '⚠️' }, { zh: '洗手間', e: '🚻' }, { zh: '禁止進入', e: '⛔' },
    ], wrong: [say('alian', '這裡不能出去啦！')], ok: [{ card: 'exit' }] } },
    { scene: 'work', npc: 'alian' },
    n('m03d'),
    say('alian', '你好！我是阿蓮，我是越南人。', { homeVN: '你好！我是阿蓮，我也是越南人！' }),
    say('alian', '中午休息一個小時，十二點到一點。', { listen: 1 }),
    { q: { p: T('中午休息到幾點？', 'Nghỉ trưa đến mấy giờ?', 'Istirahat siang sampai jam berapa?', 'Until what time is the lunch break?', 'พักกลางวันถึงกี่โมง', 'နေ့လယ်နားချိန် ဘယ်နှစ်နာရီအထိလဲ။'), src: '題庫 6-31', kind: 'listen', opts: [
      { zh: '一點', ok: 1 }, { zh: '十二點' }, { zh: '兩點' }, { zh: '一點半' },
    ], wrong: [n('m03e'), say('alian', '一點了！快走！'), { fx: { mood: -2 } }], ok: [{ fx: { aff: { zhang: 1, alian: 1 } } }] } },
    { scene: 'work', npc: 'zhang' },
    say('zhang', '生病了，不要來。要先跟我說。'),
    say('zhang', '你要怎麼說？'),
    { q: { p: P.fill, src: '題庫 6-36', kind: 'fill', stem: '我生病了，今天要＿＿。', opts: [
      { zh: '請假', ok: 1 }, { zh: '加班', r: [say('zhang', '生病還要加班？不用不用。')] }, { zh: '上班' }, { zh: '遲到' },
    ], wrong: [say('zhang', '……再想一下。')], ok: [say('zhang', '對。明天八點見。')] } },
    { fx: { hp: -20, skill: 3 } },
    { card: 'workwear' },
    n('m03f'),
    ], else: [n('m03s'), say('chen', '今天是開學第一天，我們回教室上課。', { listen: 1 }), say('chen', '這學期大家要準時到，有問題就來找我。')] },
  ],

  D01: [
    { scene: 'store', npc: 'ajiao' },
    n('d1a'),
    say('ajiao', '{sib}，幫我拿一瓶水。', { listen: 1 }),
    { q: { p: P.pick, src: '題庫 2-01', kind: 'listen', opts: [
      { zh: '一瓶水', e: '💧', ok: 1 }, { zh: '一瓶牛奶', e: '🥛' }, { zh: '一杯咖啡', e: '☕' }, { zh: '一個飯糰', e: '🍙' },
    ], wrong: [say('ajiao', '不是這個啦，水！水！')], ok: [say('ajiao', '很好！有沒有吃飽？'), n('d1b'), { fx: { mood: 5, aff: { ajiao: 1 } } }] } },
  ],
  D02: [
    { scene: 'store', npc: 'clerk' },
    n('d2a'),
    say('me', '有雨傘嗎？'),
    say('clerk', '有，在那邊，九十九塊。', { listen: 1 }),
    { q: { p: T('雨傘多少錢？', 'Cái ô bao nhiêu tiền?', 'Payungnya berapa?', 'How much is the umbrella?', 'ร่มราคาเท่าไร', 'ထီး ဘယ်လောက်လဲ။'), src: '題庫 2-32', kind: 'listen', opts: [
      { zh: '99 塊', ok: 1 }, { zh: '90 塊' }, { zh: '199 塊' }, { zh: '19 塊' },
    ], wrong: [n('d2b'), say('clerk', '九十九喔。')], ok: [n('d2c'), { fx: { money: -99 } }, { card: 'umbrella' }] } },
  ],
  D03: [
    { scene: 'street', npc: 'passer' },
    n('d3a'),
    say('me', '請問，捷運站怎麼去？'),
    say('passer', '往前走，在右邊。', { listen: 1 }),
    { q: { p: T('捷運站在哪裡？', 'Ga tàu điện ở đâu?', 'Stasiun MRT di mana?', 'Where is the MRT station?', 'สถานี MRT อยู่ที่ไหน', 'MRT ဘူတာ ဘယ်မှာလဲ။'), src: '題庫 5-07', kind: 'listen', opts: [
      { zh: '前面右邊', e: '⬆️➡️', ok: 1 }, { zh: '前面左邊', e: '⬆️⬅️' }, { zh: '後面右邊', e: '⬇️➡️' }, { zh: '後面左邊', e: '⬇️⬅️' },
    ], wrong: [n('d3b'), say('amei', '你在哪裡？'), { fx: { mood: 5, money: -40 } }], ok: [n('d3c'), { fx: { aff: { amei: 1 } } }] } },
  ],
  D04: [
    { scene: 'phone', npc: 'amei' },
    n('d4a'),
    { q: { p: P.fill, src: '題庫 5-17', kind: 'fill', stem: '阿蜜：你在＿＿？', opts: [
      { zh: '哪裡', ok: 1 }, { zh: '什麼' }, { zh: '怎麼' }, { zh: '誰' },
    ], wrong: [say('amei', '？？')], ok: [say('me', '我在宿舍。'), say('amei', '我買了雞排，等我！'), { fx: { mood: 5 } }] } },
  ],
  D05: [
    { scene: 'store', npc: 'xiaoyang' },
    n('d5a'),
    say('xiaoyang', '歡迎光臨～這個便當要加熱嗎？', { listen: 1 }),
    { q: { p: P.reply, src: '改自 2-31', opts: [
      { zh: '要，謝謝。', ok: 1 }, { zh: '不要，我要買雨傘。' }, { zh: '我是學生。' }, { zh: '再見。' },
    ], wrong: [n('d5b'), say('xiaoyang', '下次要說「要」喔！'), { fx: { mood: -2 } }], ok: [say('xiaoyang', '好，等我一下。'), n('d5c'), { fx: { mood: 5, hp: 5, aff: { xiaoyang: 1 } } }] } },
  ],
  D07: [
    { scene: 'recycle', npc: 'ayi' },
    n('d7a'),
    say('ayi', '垃圾要分類喔！'),
    { q: { p: T('寶特瓶要丟哪裡？', 'Chai nhựa bỏ vào đâu?', 'Botol plastik dibuang ke mana?', 'Where does a plastic bottle go?', 'ขวดพลาสติกต้องทิ้งที่ไหน', 'ပလတ်စတစ်ပုလင်းကို ဘယ်မှာပစ်ရမလဲ။'), src: '宿舍規定', kind: 'life', opts: [
      { zh: '資源回收', ok: 1, e: '♻️' }, { zh: '廚餘', e: '🍂' }, { zh: '一般垃圾', e: '🗑️' },
    ], wrong: [say('ayi', '寶特瓶可以回收喔。')] } },
    { q: { p: T('吃不完的飯菜要丟哪裡？', 'Thức ăn thừa bỏ vào đâu?', 'Sisa makanan dibuang ke mana?', 'Where do food leftovers go?', 'อาหารเหลือต้องทิ้งที่ไหน', 'စားကြွင်းစားကျန်ကို ဘယ်မှာပစ်ရမလဲ။'), src: '宿舍規定', kind: 'life', opts: [
      { zh: '資源回收', e: '♻️' }, { zh: '廚餘', ok: 1, e: '🍂' }, { zh: '一般垃圾', e: '🗑️' },
    ], wrong: [say('ayi', '吃不完的要丟廚餘。')] } },
    { q: { p: T('用過的衛生紙要丟哪裡？', 'Giấy vệ sinh đã dùng bỏ vào đâu?', 'Tisu bekas dibuang ke mana?', 'Where does used tissue go?', 'ทิชชูที่ใช้แล้วต้องทิ้งที่ไหน', 'သုံးပြီးသား တစ်ရှူးကို ဘယ်မှာပစ်ရမလဲ။'), src: '宿舍規定', kind: 'life', opts: [
      { zh: '資源回收', e: '♻️' }, { zh: '廚餘', e: '🍂' }, { zh: '一般垃圾', ok: 1, e: '🗑️' },
    ], wrong: [say('ayi', '衛生紙不能回收喔。')] } },
    n('d7b'),
    say('ayi', '很好！垃圾要每天倒，不要放在房間。'),
    { fx: { tidy: 5, aff: { ayi: 1 } } }, { trash0: 1 },
  ],
  D08: [
    { scene: 'room', npc: 'amei' },
    n('d8a'),
    say('amei', '好餓喔！我們在房間煮泡麵，好不好？'),
    { q: { p: P.say, src: '宿舍規定', kind: 'life', opts: [
      { zh: '我們去交誼廳吃吧。', ok: 1 },
      { zh: '好啊！我有電鍋。', r: [n('d8b'), say('ayi', '房間不能煮東西！很危險！'), { violation: 1 }, { fx: { tidy: -20 } }] },
      { zh: '好啊，我們在床上吃。', r: [n('d8d'), say('amei', '對不起……'), { fx: { tidy: -10, mood: -5 } }] },
      { zh: '我不餓。', r: [say('amei', '那我自己去交誼廳吃喔。')] },
    ], ok: [say('amei', '好啊！吃東西要去交誼廳。'), { scene: 'lounge', npc: 'amei' }, n('d8c'), { fx: { mood: 5, pop: 2, aff: { amei: 1 } } }] } },
  ],
  D09: [
    { scene: 'room', npc: 'ayi' },
    n('d9a'),
    say('ayi', '東西要放回去，衣服要放進衣櫃裡。', { listen: 1 }),
    { q: { p: T('阿姨說衣服要放在哪裡？', 'Cô nói quần áo phải để ở đâu?', 'Kata ibu asrama, baju harus ditaruh di mana?', 'Where does she say the clothes should go?', 'คุณป้าบอกว่าเสื้อผ้าต้องเก็บไว้ที่ไหน', 'အန်တီက အဝတ်တွေကို ဘယ်မှာထားရမယ်လို့ ပြောလဲ။'), src: '宿舍規定', kind: 'listen', opts: [
      { zh: '衣櫃裡', e: '👚', ok: 1 }, { zh: '床上', e: '🛏️' }, { zh: '桌子上', e: '🪑' }, { zh: '地上', e: '⬇️' },
    ], wrong: [say('ayi', '衣櫃！衣服放進衣櫃。')] } },
    { ifTidy: 80, then: [n('d9b'), say('ayi', '很乾淨，很好！'), { fx: { tidy: 5, aff: { ayi: 1 } } }],
      else: [n('d9c'), say('ayi', '東西要放回去喔。垃圾也要記得倒。'), { fx: { tidy: -10 } }] },
  ],
  W1: [
    { scene: 'dorm', npc: 'ayi' },
    n('w1a'),
    say('ayi', '你的房間太亂了，垃圾也沒有倒。'),
    { q: { p: P.reply, src: '宿舍規定', kind: 'life', opts: [
      { zh: '對不起，我會整理。', ok: 1 },
      { zh: '沒關係。', r: [say('ayi', '有關係喔！')] },
      { zh: '那不是我的。', r: [say('ayi', '那是你的房間喔。')] },
      { zh: '我很忙。', r: [say('ayi', '再忙也要倒垃圾。')] },
    ], ok: [say('ayi', '好。下次再這樣，要去愛校服務喔。'), { fx: { tidy: 10 } }] } },
  ],
  W2: [
    { scene: 'campus', npc: 'chen' },
    n('w2a'),
    say('chen', '先掃地，再倒垃圾。', { listen: 1 }),
    { q: { p: T('要先做什麼？', 'Phải làm gì trước?', 'Harus melakukan apa dulu?', 'What do you do first?', 'ต้องทำอะไรก่อน', 'ဘာကို အရင်လုပ်ရမလဲ။'), src: '宿舍規定', kind: 'listen', opts: [
      { zh: '掃地', e: '🧹', ok: 1 }, { zh: '倒垃圾', e: '🗑️' }, { zh: '洗手', e: '🧼' }, { zh: '睡覺', e: '😴' },
    ], wrong: [say('chen', '先掃地。')] } },
    n('w2b'),
    say('chen', '房間要乾淨。有問題就來找我。'),
    { fx: { hp: -15, mood: -10, tidy: 40 } }, { trash0: 1 },
  ],
  D06: [
    { scene: 'work', npc: 'alian' },
    n('d6a'),
    say('alian', '小心！地上有水。', { listen: 1 }),
    { q: { p: T('阿蓮為什麼說「小心」？', 'Vì sao A Liên nói “cẩn thận”?', 'Kenapa A Lian bilang “hati-hati”?', 'Why did A-Lian say “careful”?', 'ทำไมอาเหลียนพูดว่า “ระวัง”', 'အာလျန်က ဘာလို့ “သတိထား” လို့ ပြောတာလဲ။'), src: '題庫 6-10', kind: 'listen', opts: [
      { zh: '地上有水', e: '💦', ok: 1 }, { zh: '有火', e: '🔥' }, { zh: '機器壞了', e: '⚙️' }, { zh: '主管來了', e: '👷' },
    ], wrong: [n('d6b'), say('zhang', '安全第一。'), { fx: { hp: -5 } }], ok: [n('d6c'), say('zhang', '很好。'), { fx: { skill: 1, aff: { zhang: 1 } } }] } },
  ],
};

module.exports = { T, P, N, EVENTS };

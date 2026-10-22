// 第四章劇本資料（4–6 月，一年級結尾）：潑水節、國際文化週、大學參訪、期末考、畢業典禮。
// 詞彙：以 A2 為主，少量 B1 預習詞（參觀、申請、科系、典禮、祝福）。zh = 中文；vi id en th my = 五種輔助語言。
const { T, P } = require('./story.js');
const S3 = require('./story3.js');

const N = {
  p01a: T('四月中，泰國、緬甸和柬埔寨的同學要過潑水節。', 'Giữa tháng Tư, các bạn Thái Lan, Myanmar và Campuchia đón Tết té nước.', 'Pertengahan April, teman-teman dari Thailand, Myanmar, dan Kamboja merayakan Festival Air.', 'In mid-April, classmates from Thailand, Myanmar and Cambodia celebrate the Water Festival.', 'กลางเดือนเมษายน เพื่อนจากไทย เมียนมา และกัมพูชาฉลองเทศกาลสงกรานต์', 'ဧပြီလလယ်မှာ ထိုင်း၊ မြန်မာနဲ့ ကမ္ဘောဒီးယား သူငယ်ချင်းတွေ သင်္ကြန်ပွဲတော် ကျင်းပကြတယ်။'),
  p01h: T('這是你家鄉的節日！同學們請你介紹潑水節。', 'Đây là lễ hội quê bạn! Các bạn nhờ bạn giới thiệu Tết té nước.', 'Ini festival dari kampung halamanmu! Teman-teman memintamu menjelaskan Festival Air.', 'This is a festival from your home! Your classmates ask you to explain it.', 'นี่คือเทศกาลของบ้านเกิดคุณ! เพื่อนๆ ขอให้คุณแนะนำสงกรานต์', 'ဒါ ခင်ဗျားရဲ့ ဇာတိပွဲတော်ပါ။ သူငယ်ချင်းတွေက သင်္ကြန်အကြောင်း ပြောပြပေးဖို့ တောင်းဆိုကြတယ်။'),
  p01o: T('同學請你一起參加，大家拿著水桶走到宿舍外面。', 'Các bạn rủ bạn tham gia, mọi người cầm xô nước ra ngoài ký túc xá.', 'Teman-teman mengajakmu ikut, semua membawa ember air ke luar asrama.', 'Your classmates invite you to join. Everyone carries buckets of water outside the dorm.', 'เพื่อนชวนคุณไปเล่นด้วย ทุกคนถือถังน้ำออกไปนอกหอพัก', 'သူငယ်ချင်းတွေက လိုက်ခဲ့ဖို့ ခေါ်တယ်၊ အားလုံး ရေပုံးတွေကိုင်ပြီး အဆောင်အပြင်ဘက် ထွက်ကြတယ်။'),
  p01e: T('大家都濕了，可是笑得很開心。', 'Ai cũng ướt sũng, nhưng cười rất vui.', 'Semua basah kuyup, tapi tertawa senang.', 'Everyone is soaking wet, but laughing happily.', 'ทุกคนเปียกโชกไปทั้งตัว แต่หัวเราะอย่างมีความสุข', 'အားလုံး တစ်ကိုယ်လုံး စိုရွှဲသွားပေမဲ့ ပျော်ပျော်ရွှင်ရွှင် ရယ်နေကြတယ်။'),
  k01a: T('國際文化週的最後一天是星期六，在校和實習的同學都來了。操場上有七個國家的攤位。', 'Ngày cuối của Tuần lễ Văn hóa Quốc tế là thứ Bảy, các bạn đang học và đang thực tập đều đến. Trên sân có gian hàng của bảy nước.', 'Hari terakhir Pekan Budaya Internasional jatuh pada hari Sabtu, teman yang sekolah maupun magang semua datang. Di lapangan ada stan dari tujuh negara.', 'The last day of International Culture Week is a Saturday, so students at school and on internship all come. There are booths from seven countries on the field.', 'วันสุดท้ายของสัปดาห์วัฒนธรรมนานาชาติเป็นวันเสาร์ เพื่อนที่เรียนและที่ฝึกงานมากันหมด ที่สนามมีบูธจากเจ็ดประเทศ', 'နိုင်ငံတကာယဉ်ကျေးမှုရက်သတ္တပတ်ရဲ့ နောက်ဆုံးနေ့က စနေနေ့ဖြစ်လို့ ကျောင်းတက်နေသူရော အလုပ်သင်ဆင်းနေသူရော အားလုံးလာကြတယ်။ ကွင်းထဲမှာ နိုင်ငံခုနစ်နိုင်ငံရဲ့ ဆိုင်ခန်းတွေ ရှိတယ်။'),
  k01b: T('你在{home}的攤位，要用中文介紹你的家鄉。', 'Bạn ở gian hàng {home}, phải giới thiệu quê mình bằng tiếng Hoa.', 'Kamu di stan {home}, harus memperkenalkan kampung halamanmu dalam bahasa Mandarin.', 'At the {home} booth, you introduce your home country in Chinese.', 'คุณอยู่ที่บูธ{home} ต้องแนะนำบ้านเกิดเป็นภาษาจีน', '{home} ဆိုင်ခန်းမှာ ခင်ဗျားရဲ့ ဇာတိကို တရုတ်လို မိတ်ဆက်ရမယ်။'),
  k01c: T('介紹完了，你拿著印章卡去逛別的攤位。', 'Giới thiệu xong, bạn cầm thẻ đóng dấu đi xem các gian hàng khác.', 'Setelah selesai, kamu membawa kartu stempel untuk mengunjungi stan lain.', 'When you finish, you take your stamp card to visit the other booths.', 'แนะนำเสร็จแล้ว คุณถือบัตรสะสมตราประทับไปเดินดูบูธอื่น', 'မိတ်ဆက်ပြီးတော့ တံဆိပ်ကတ်ကိုင်ပြီး တခြားဆိုင်ခန်းတွေ လျှောက်ကြည့်တယ်။'),
  k01d: T('每個攤位答對一題，就可以蓋一個印章。', 'Mỗi gian hàng trả lời đúng một câu thì được đóng một con dấu.', 'Di setiap stan, jawab benar satu soal untuk mendapat satu stempel.', 'Answer one question correctly at each booth to get a stamp.', 'ตอบถูกหนึ่งข้อในแต่ละบูธ จะได้ตราประทับหนึ่งดวง', 'ဆိုင်ခန်းတစ်ခုမှာ မေးခွန်းတစ်ခု မှန်အောင်ဖြေရင် တံဆိပ်တစ်ခု ရိုက်ပေးတယ်။'),
  k02a: T('學校帶大家去合作的科技大學參觀。實習的同學也請了公假一起來。', 'Trường tổ chức cho mọi người tham quan trường đại học khoa học kỹ thuật liên kết. Các bạn đang thực tập cũng xin nghỉ phép công để đi cùng.', 'Sekolah mengajak semua mengunjungi universitas teknologi mitra. Teman yang magang juga mendapat izin resmi untuk ikut.', 'The school takes everyone to visit its partner university of technology. Students on internship get official leave to join.', 'โรงเรียนพาทุกคนไปเยี่ยมชมมหาวิทยาลัยเทคโนโลยีที่เป็นพันธมิตร เพื่อนที่ฝึกงานก็ลาไปร่วมกิจกรรมด้วย', 'ကျောင်းက အားလုံးကို ပူးပေါင်းထားတဲ့ နည်းပညာတက္ကသိုလ်ကို လေ့လာရေးခေါ်သွားတယ်။ အလုပ်သင်ဆင်းနေသူတွေလည်း တရားဝင်ခွင့်ယူပြီး လိုက်လာကြတယ်။'),
  k02b: T('大學很大，路上有很多學生騎腳踏車。', 'Trường đại học rất rộng, trên đường có nhiều sinh viên đạp xe.', 'Universitasnya luas, banyak mahasiswa bersepeda di jalan.', 'The university is huge, and many students ride bicycles along the paths.', 'มหาวิทยาลัยใหญ่มาก บนถนนมีนักศึกษาปั่นจักรยานเยอะ', 'တက္ကသိုလ်က အရမ်းကျယ်တယ်၊ လမ်းပေါ်မှာ စက်ဘီးစီးနေတဲ့ ကျောင်းသားတွေ အများကြီးပဲ။'),
  k02c: T('回去的車上，你在手機上寫下想讀的科系。', 'Trên xe về, bạn ghi vào điện thoại ngành học mình muốn học.', 'Di bus pulang, kamu menulis jurusan yang ingin kamu ambil di ponsel.', 'On the bus back, you type the major you want to study into your phone.', 'บนรถขากลับ คุณพิมพ์สาขาที่อยากเรียนลงในโทรศัพท์', 'ပြန်လာတဲ့ကားပေါ်မှာ တက်ချင်တဲ့ ဘာသာရပ်ကို ဖုန်းထဲမှာ ရေးထားလိုက်တယ်။'),
  k03a: T('一年級的期末考到了。實習的同學也回到學校考試。', 'Kỳ thi cuối năm thứ nhất đã đến. Các bạn đang thực tập cũng về trường để thi.', 'Ujian akhir tahun pertama tiba. Teman yang magang juga kembali ke sekolah untuk ujian.', 'The first-year final exam is here. Students on internship come back to school to take it too.', 'สอบปลายปีของปีหนึ่งมาถึงแล้ว เพื่อนที่ฝึกงานก็กลับมาสอบที่โรงเรียน', 'ပထမနှစ် နှစ်ဆုံးစာမေးပွဲ ရောက်လာပြီ။ အလုပ်သင်ဆင်းနေသူတွေလည်း ကျောင်းပြန်လာပြီး ဖြေကြတယ်။'),
  k04a: T('六月底，學校的禮堂很熱鬧，三年級的學長姐要畢業了。', 'Cuối tháng Sáu, hội trường của trường rất náo nhiệt, các anh chị năm ba sắp tốt nghiệp.', 'Akhir Juni, aula sekolah sangat ramai, para senior kelas tiga akan lulus.', 'At the end of June, the school hall is lively. The third-year seniors are graduating.', 'ปลายเดือนมิถุนายน หอประชุมของโรงเรียนคึกคักมาก รุ่นพี่ปีสามกำลังจะจบการศึกษา', 'ဇွန်လကုန်မှာ ကျောင်းခန်းမက အရမ်းစည်ကားတယ်၊ တတိယနှစ် အစ်ကို အစ်မတွေ ဘွဲ့ရကြတော့မယ်။'),
  k04b: T('學長姐一個一個上台，拿到了畢業證書。', 'Các anh chị lần lượt lên sân khấu nhận bằng tốt nghiệp.', 'Para senior satu per satu naik panggung menerima ijazah.', 'One by one, the seniors walk on stage and receive their diplomas.', 'รุ่นพี่ขึ้นเวทีทีละคน และได้รับประกาศนียบัตร', 'အစ်ကို အစ်မတွေ တစ်ယောက်ချင်း စင်ပေါ်တက်ပြီး ဘွဲ့လက်မှတ် ယူကြတယ်။'),
  k04c: T('典禮結束以後，你想寫一張感謝卡給這一年最照顧你的人。', 'Sau buổi lễ, bạn muốn viết một tấm thiệp cảm ơn cho người đã chăm sóc bạn nhiều nhất năm nay.', 'Setelah upacara, kamu ingin menulis kartu terima kasih untuk orang yang paling memperhatikanmu tahun ini.', 'After the ceremony, you want to write a thank-you card to the person who looked after you most this year.', 'หลังพิธีจบ คุณอยากเขียนการ์ดขอบคุณให้คนที่ดูแลคุณมากที่สุดในปีนี้', 'အခမ်းအနားပြီးတော့ ဒီတစ်နှစ်လုံး ကိုယ့်ကို အများဆုံး ဂရုစိုက်ပေးခဲ့သူကို ကျေးဇူးတင်ကတ် တစ်စောင် ရေးချင်တယ်။'),
  k04d: T('一年級結束了。九月開始，你就是二年級的學生了。', 'Năm nhất đã kết thúc. Từ tháng Chín, bạn sẽ là học sinh năm hai.', 'Tahun pertama selesai. Mulai September, kamu menjadi siswa tahun kedua.', 'Your first year is over. From September, you will be a second-year student.', 'ปีหนึ่งจบแล้ว ตั้งแต่เดือนกันยายน คุณจะเป็นนักเรียนปีสอง', 'ပထမနှစ် ပြီးသွားပြီ။ စက်တင်ဘာလကစပြီး ဒုတိယနှစ် ကျောင်းသား ဖြစ်တော့မယ်။'),
  r06a: T('今天是同學的生日，大家晚上在交誼廳幫他慶祝。', 'Hôm nay là sinh nhật một bạn, tối nay mọi người tổ chức mừng ở phòng sinh hoạt chung.', 'Hari ini ulang tahun teman, malam ini semua merayakannya di ruang santai.', 'Today is a classmate’s birthday. Everyone celebrates in the lounge tonight.', 'วันนี้เป็นวันเกิดเพื่อน คืนนี้ทุกคนฉลองให้ที่ห้องนั่งเล่นรวม', 'ဒီနေ့ သူငယ်ချင်းရဲ့ မွေးနေ့ပါ၊ ဒီည အပန်းဖြေခန်းမှာ အားလုံး ကျင်းပပေးကြတယ်။'),
  r07a: T('便利商店在集點，點數可以換小禮物。', 'Cửa hàng tiện lợi đang tích điểm, điểm có thể đổi quà nhỏ.', 'Minimarket sedang ada program poin, poinnya bisa ditukar hadiah kecil.', 'The convenience store is running a points promotion. Points can be exchanged for small gifts.', 'ร้านสะดวกซื้อกำลังมีสะสมแต้ม แต้มแลกของขวัญเล็กๆ ได้', 'စတိုးဆိုင်မှာ အမှတ်စုနေတယ်၊ အမှတ်တွေနဲ့ လက်ဆောင်လေး လဲလို့ရတယ်။'),
};
const say = (who, zh, extra = {}) => ({ say: who, zh, ...extra });
const n = (k) => ({ n: N[k] });
const LIFE = '生活中文';

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
  // 4 月中：潑水節（泰國、緬甸、柬埔寨的家鄉節日；家鄉是這三國的主角負責介紹）
  P01: [
    { scene: 'campus', npc: 'tongxue' },
    n('p01a'),
    { ifHome: ['th', 'my', 'km'], then: [
      n('p01h'),
      say('tongxue', '潑水節是什麼節日？'),
      { q: { p: T('潑水節是什麼節日？', 'Tết té nước là lễ gì?', 'Festival Air itu hari raya apa?', 'What kind of holiday is the Water Festival?', 'สงกรานต์เป็นเทศกาลอะไร', 'သင်္ကြန်က ဘာပွဲတော်လဲ။'), src: LIFE, opts: [
        { zh: '我們的新年', ok: 1 }, { zh: '中秋節', r: [say('tongxue', '中秋節要吃月餅，不是玩水啦！')] }, { zh: '聖誕節' }, { zh: '我的生日' },
      ], wrong: [say('tongxue', '是在四月的那個節日喔。')], ok: [say('me', '潑水節是我們的新年，潑水是祝福大家。'), { fx: { pop: 3 } }] } },
    ], else: [
      n('p01o'),
      say('tongxue', '潑水節是我們的新年，潑水是祝福大家。', { listen: 1 }),
      { q: { p: T('潑水是什麼意思？', 'Té nước có ý nghĩa gì?', 'Apa arti menyiram air?', 'What does splashing water mean?', 'การสาดน้ำหมายถึงอะไร', 'ရေပက်တာ ဘာအဓိပ္ပာယ်လဲ။'), src: LIFE, opts: [
        { zh: '祝福大家', ok: 1 }, { zh: '生氣了', r: [say('tongxue', '不是生氣啦，是祝福！')] }, { zh: '洗衣服' }, { zh: '天氣很熱' },
      ], wrong: [say('tongxue', '再聽一次喔。')], ok: [say('tongxue', '對！新年快樂！')] } },
    ] },
    { scene: 'dorm', npc: 'ayi' },
    say('ayi', '在宿舍外面玩水可以，不要把房間弄濕喔！', { listen: 1 }),
    { q: { p: T('阿姨說可以在哪裡玩水？', 'Dì nói được chơi té nước ở đâu?', 'Ibu asrama bilang boleh main air di mana?', 'Where does the dorm aunt say you can play with water?', 'ป้าบอกว่าเล่นน้ำได้ที่ไหน', 'အဆောင်အန်တီက ဘယ်မှာ ရေကစားလို့ရတယ်လို့ ပြောလဲ။'), src: LIFE, opts: [
      { zh: '宿舍外面', ok: 1 }, { zh: '房間裡', r: [say('ayi', '房間裡不行！地上會濕。')] }, { zh: '教室' }, { zh: '浴室' },
    ], wrong: [say('ayi', '要在外面玩喔。')], ok: [{ fx: { aff: { ayi: 1 } } }] } },
    n('p01e'),
    { fx: { mood: 20, pop: 3, hp: -10, aff: { tongxue: 1 } } },
  ],

  // 4 月底：國際文化週（自己的攤位介紹家鄉，再逛別的攤位集印章；答對 5 題以上得到「世界好朋友」）
  K01: [
    { scene: 'campus', npc: 'rina' },
    n('k01a'),
    say('rina', '每一個攤位都很特別，我們一起去看看吧！'),
    { scene: 'campus', npc: 'amei' },
    n('k01b'),
    say('amei', '你的攤位要介紹什麼？'),
    { q: { p: T('你要介紹什麼？', 'Bạn muốn giới thiệu gì?', 'Kamu mau memperkenalkan apa?', 'What will you introduce?', 'คุณจะแนะนำอะไร', 'ဘာကို မိတ်ဆက်မလဲ။'), src: LIFE, opts: [
      { zh: '家鄉菜', ok: 1, then: [say('amei', '好香喔！我可以吃一口嗎？')] },
      { zh: '家鄉的節日', ok: 1, then: [say('amei', '原來你們的節日這麼熱鬧！')] },
      { zh: '家鄉話怎麼打招呼', ok: 1, then: [say('amei', '我也要學！你再說一次。')] },
    ], ok: [] } },
    { scene: 'campus', npc: 'customer' },
    say('customer', '這道菜辣不辣？'),
    { q: { p: T('客人問辣不辣，你要怎麼回答？', 'Khách hỏi có cay không, bạn trả lời thế nào?', 'Pengunjung bertanya pedas atau tidak, kamu jawab apa?', 'A visitor asks if it is spicy. How do you answer?', 'ลูกค้าถามว่าเผ็ดไหม คุณจะตอบอย่างไร', 'ဧည့်သည်က စပ်လားလို့ မေးတယ်၊ ဘယ်လိုဖြေမလဲ။'), src: LIFE, opts: [
      { zh: '有一點辣', ok: 1 }, { zh: '很好吃', r: [say('customer', '好吃……可是辣不辣呢？')] }, { zh: '我不辣' }, { zh: '一百元' },
    ], wrong: [say('customer', '我是問辣不辣喔。')], ok: [say('customer', '有一點辣沒關係，我喜歡！')] } },
    say('customer', '我是穆斯林，這裡面有豬肉嗎？'),
    { q: { p: T('客人問有沒有豬肉，你要怎麼回答？', 'Khách hỏi có thịt heo không, bạn trả lời thế nào?', 'Pengunjung bertanya ada daging babi atau tidak, kamu jawab apa?', 'A visitor asks if there is pork in it. How do you answer?', 'ลูกค้าถามว่ามีหมูไหม คุณจะตอบอย่างไร', 'ဧည့်သည်က ဝက်သား ပါလားလို့ မေးတယ်၊ ဘယ်လိုဖြေမလဲ။'), src: LIFE, opts: [
      { zh: '沒有，這是雞肉', ok: 1 }, { zh: '不知道', r: [say('customer', '那我先不要吃好了。')] }, { zh: '有一點辣' }, { zh: '很便宜' },
    ], wrong: [say('customer', '我想知道有沒有豬肉。')], ok: [say('customer', '太好了，謝謝你！'), { fx: { pop: 2 } }] } },
    n('k01c'),
    n('k01d'),
    { scene: 'campus', npc: 'rina' },
    say('rina', '這是印尼炒飯，要不要吃吃看？'),
    { q: { p: T('Rina 請你吃東西，你要怎麼說？', 'Rina mời bạn ăn, bạn nói gì?', 'Rina menawarimu makanan, kamu bilang apa?', 'Rina offers you food. What do you say?', 'รินาชวนคุณกิน คุณจะพูดว่าอะไร', 'Rina က စားဖို့ ကျွေးတယ်၊ ဘာပြောမလဲ။'), src: LIFE, opts: [
      { zh: '好啊，謝謝！', ok: 1 }, { zh: '不客氣', r: [say('rina', '哈哈，應該是我說不客氣吧！')] }, { zh: '對不起' }, { zh: '再見' },
    ], wrong: [say('rina', '別人請你吃東西，要說什麼呢？')], ok: [say('rina', '好吃吧？蓋一個印章給你！')] } },
    { scene: 'campus', npc: 'tongxue' },
    say('tongxue', '越南話的「你好」，是 Xin chào。', { listen: 1 }),
    { q: { p: T('越南話的「你好」怎麼說？', 'Tiếng Việt nói “你好” thế nào?', 'Bagaimana bilang “你好” dalam bahasa Vietnam?', 'How do you say “你好” in Vietnamese?', 'ภาษาเวียดนาม “你好” พูดว่าอย่างไร', 'ဗီယက်နမ်လို “你好” ကို ဘယ်လိုပြောလဲ။'), src: LIFE, opts: [
      { zh: 'Xin chào', ok: 1 }, { zh: 'Sawasdee' }, { zh: 'Selamat pagi' }, { zh: 'Mingalaba' },
    ], wrong: [say('tongxue', '再聽一次，Xin chào！')], ok: [say('tongxue', '說得很好！印章給你。')] } },
    { scene: 'campus', npc: 'amei' },
    say('amei', '台灣攤位有珍珠奶茶，一杯五十元。', { listen: 1 }),
    { q: { p: T('珍珠奶茶一杯多少錢？', 'Trà sữa trân châu một ly bao nhiêu tiền?', 'Teh susu boba satu gelas berapa?', 'How much is one cup of bubble tea?', 'ชานมไข่มุกแก้วละเท่าไร', 'ပုလဲနို့လက်ဖက်ရည် တစ်ခွက် ဘယ်လောက်လဲ။'), src: LIFE, opts: [
      { zh: '五十元', ok: 1 }, { zh: '十五元' }, { zh: '五百元', r: [say('amei', '那麼貴，我也不敢喝！')] }, { zh: '一百元' },
    ], wrong: [say('amei', '五十元喔。')], ok: [say('amei', '來，請你喝一杯！'), { fx: { mood: 5, aff: { amei: 1 } } }] } },
    { card: 'stampcard' },
    { ifScore: 5, then: [say('rina', '你集滿印章了！你是我們的世界好朋友！'), { title: 'world' }, { fx: { pop: 5, mood: 15, aff: { rina: 2 } } }],
      else: [say('rina', '明年再來，一定可以集滿！'), { fx: { mood: 10, aff: { rina: 1 } } }] },
  ],

  // 5 月：大學參訪（看集合通知、校園地圖、問學長，寫下想讀的科系）
  K02: [
    { scene: 'campus', npc: 'chen' },
    n('k02a'),
    { poster: [['活動', '科技大學參訪'], ['集合', '早上八點，校門口'], ['帶', '學生證、水'], ['回來', '下午四點']], title: '參訪通知' },
    { q: { p: T('幾點在哪裡集合？', 'Mấy giờ tập trung ở đâu?', 'Jam berapa dan di mana berkumpul?', 'When and where do you meet?', 'รวมตัวกี่โมงที่ไหน', 'ဘယ်အချိန် ဘယ်မှာ စုရမလဲ။'), src: LIFE, opts: [
      { zh: '早上八點，校門口', ok: 1 }, { zh: '下午四點，校門口', r: [say('chen', '下午四點我們已經回來了。')] }, { zh: '早上八點，宿舍' }, { zh: '早上十點，車站' },
    ], wrong: [say('chen', '再看一次通知。')], ok: [say('chen', '很好，記得帶學生證。')] } },
    n('k02b'),
    say('chen', '我們先去圖書館參觀，再去實驗室。', { listen: 1 }),
    { q: { p: T('大家先去哪裡？', 'Mọi người đi đâu trước?', 'Semua pergi ke mana dulu?', 'Where does everyone go first?', 'ทุกคนไปที่ไหนก่อน', 'အားလုံး ဘယ်ကို အရင်သွားလဲ။'), src: LIFE, opts: [
      { zh: '圖書館', ok: 1 }, { zh: '實驗室', r: [say('chen', '實驗室是第二個地方喔。')] }, { zh: '餐廳' }, { zh: '體育館' },
    ], wrong: [say('chen', '再聽一次。')] } },
    { scene: 'campus', npc: 'xuezhang' },
    say('xuezhang', '你好！我也是建教專班畢業的，現在讀大學二年級。'),
    say('xuezhang', '高中畢業以後，可以直升這裡的大學，一邊讀書一邊工作。', { listen: 1 }),
    { q: { p: T('學長說，畢業以後可以做什麼？', 'Anh khóa trên nói sau khi tốt nghiệp có thể làm gì?', 'Kata senior, setelah lulus bisa apa?', 'According to the senior, what can you do after graduating?', 'รุ่นพี่บอกว่าเรียนจบแล้วทำอะไรได้', 'စီနီယာက ဘွဲ့ရပြီးရင် ဘာလုပ်လို့ရတယ်လို့ ပြောလဲ။'), src: LIFE, opts: [
      { zh: '直升大學', ok: 1 }, { zh: '馬上回國', r: [say('xuezhang', '也可以啦，可是我說的是讀大學喔。')] }, { zh: '不用工作' }, { zh: '去夜市擺攤' },
    ], wrong: [say('xuezhang', '再聽一次喔。')], ok: [say('xuezhang', '對！中文要好，申請的時候比較容易。'), { fx: { aff: { xuezhang: 1 } } }] } },
    say('xuezhang', '這裡有很多科系，你想讀什麼？'),
    { q: { p: T('你想讀什麼科系？', 'Bạn muốn học ngành gì?', 'Kamu ingin kuliah jurusan apa?', 'Which major do you want to study?', 'คุณอยากเรียนสาขาอะไร', 'ဘယ်ဘာသာရပ် တက်ချင်လဲ။'), src: LIFE, opts: [
      { zh: '資訊工程系', ok: 1, then: [{ setv: { wantDept: '資訊工程系' } }] },
      { zh: '餐旅管理系', ok: 1, then: [{ setv: { wantDept: '餐旅管理系' } }] },
      { zh: '機械工程系', ok: 1, then: [{ setv: { wantDept: '機械工程系' } }] },
      { zh: '企業管理系', ok: 1, then: [{ setv: { wantDept: '企業管理系' } }] },
    ], ok: [say('xuezhang', '很好！有想做的事，就會更努力。')] } },
    n('k02c'),
    { card: 'campusmap' },
    { fx: { mood: 10, hp: -15 } },
  ],

  // 6 月：一年級期末考（通知 + 6 題題庫）
  K03: [
    { scene: 'classroom', npc: 'lin' },
    n('k03a'),
    { poster: [['考試', '一年級華語期末考'], ['時間', '早上九點'], ['地點', '305 教室'], ['注意', '手機要關機']], title: '考試通知' },
    { q: { p: T('考試的時候，手機要怎麼樣？', 'Khi thi, điện thoại phải thế nào?', 'Saat ujian, ponsel harus bagaimana?', 'During the exam, what must you do with your phone?', 'ตอนสอบ โทรศัพท์ต้องทำอย่างไร', 'စာမေးပွဲဖြေချိန်မှာ ဖုန်းကို ဘယ်လိုလုပ်ရမလဲ။'), src: LIFE, opts: [
      { zh: '關機', ok: 1 }, { zh: '開機' }, { zh: '放在桌上', r: [say('lin', '放在桌上也不可以喔。')] }, { zh: '拍照' },
    ], wrong: [say('lin', '再看一次通知。')] } },
    say('lin', '這次的題目比上次難一點，慢慢來，沒關係。'),
    { exam: 6, res: [
      [6, [say('lin', '全部都對！你是一年級的華語之星！'), { title: 'yearstar' }, { fx: { aff: { lin: 2 }, mood: 15 } }]],
      [4, [say('lin', '很好，這一年你進步很多。'), { fx: { aff: { lin: 1 }, mood: 5 } }]],
      [0, [say('lin', '沒關係，暑假我們再一起複習。')]],
    ] },
  ],

  // 6 月底：畢業典禮（看學長姐畢業，寫感謝卡給最熟的人）
  K04: [
    { scene: 'stage', npc: 'chen' },
    n('k04a'),
    say('chen', '今天大家都來參加畢業典禮，一起祝福學長姐。'),
    n('k04b'),
    { q: { p: T('學長姐上台拿到了什麼？', 'Các anh chị lên sân khấu nhận được gì?', 'Apa yang diterima para senior di panggung?', 'What do the seniors receive on stage?', 'รุ่นพี่ขึ้นเวทีได้รับอะไร', 'အစ်ကို အစ်မတွေ စင်ပေါ်မှာ ဘာရကြလဲ။'), src: LIFE, opts: [
      { zh: '畢業證書', ok: 1 }, { zh: '紅包', r: [say('rina', '現在不是過年啦！')] }, { zh: '薪資單' }, { zh: '健保卡' },
    ], wrong: [say('chen', '再看一次台上。')] } },
    { scene: 'stage', npc: 'rina' },
    say('rina', '再過兩年，就換你們畢業了！'),
    n('k04c'),
    { thanks: 1 },
    { card: 'thankcard' },
    n('k04d'),
    { fx: { mood: 20 } },
  ],

  // 每月第一週：宿舍內務檢查
  I04: inspection(),
  I05: inspection(),
  I06: inspection(),

  // 第四章新增的隨機事件
  R06: [
    { scene: 'lounge', npc: 'tongxue' },
    n('r06a'),
    say('amei', '我們一起買蛋糕吧，一個人一百元。'),
    { q: { p: T('生日的時候要說什麼？', 'Vào ngày sinh nhật nên nói gì?', 'Saat ulang tahun, bilang apa?', 'What do you say on a birthday?', 'วันเกิดควรพูดว่าอะไร', 'မွေးနေ့မှာ ဘာပြောရမလဲ။'), src: LIFE, opts: [
      { zh: '生日快樂！', ok: 1 }, { zh: '新年快樂！', r: [say('tongxue', '現在不是過年啦！')] }, { zh: '早安！' }, { zh: '對不起！' },
    ], wrong: [say('amei', '要說生日快樂啦！')], ok: [say('tongxue', '謝謝大家！'), { fx: { money: -100, mood: 10, pop: 2, aff: { tongxue: 1 } } }] } },
  ],
  R07: [
    { scene: 'store', npc: 'xiaoyang' },
    n('r07a'),
    say('xiaoyang', '集滿十點，可以換一個杯子喔。', { listen: 1 }),
    { q: { p: T('要幾點才能換杯子？', 'Cần bao nhiêu điểm để đổi cái cốc?', 'Perlu berapa poin untuk menukar gelas?', 'How many points do you need for the cup?', 'ต้องกี่แต้มถึงจะแลกแก้วได้', 'ခွက်လဲဖို့ အမှတ် ဘယ်လောက် လိုလဲ။'), src: LIFE, opts: [
      { zh: '十點', ok: 1 }, { zh: '十二點', r: [say('xiaoyang', '不是時間啦，是點數！')] }, { zh: '五點' }, { zh: '一百點' },
    ], wrong: [say('xiaoyang', '十點喔。')], ok: [say('xiaoyang', '你已經有八點了，再買兩次就可以換！'), { fx: { mood: 5, aff: { xiaoyang: 1 } } }] } },
  ],

  // 感謝卡用的句子（引擎依好感度挑一位 NPC；放在這裡讓建置時產生拼音，不會被安排成事件）
  _THX: [
    say('me', '謝謝你這一年的照顧！'),
    ...['阿蜜', '王阿嬌', '小陽', '林老師', '陳導師', '黃老闆', '張師傅', '李醫師', 'Rina', '郭大哥', '阿蓮'].map(nm => say('me', '你把感謝卡送給' + nm + '。')),
    say('amei', '走，我們去吃東西慶祝！'),
    say('ajiao', '有沒有吃飽？二年級也要常來喔！'),
    say('xiaoyang', '歡迎光臨～下次也要來喔！'),
    say('lin', '慢慢來，沒關係。你進步很多！'),
    say('chen', '有問題就來找我。二年級加油！'),
    say('huang', '來喔！下次請你吃雞排！'),
    say('zhang', '安全第一。明年也要好好做！'),
    say('li', '多喝水，多休息。要照顧好身體！'),
    say('rina', '我以前也這樣！明年一起加油！'),
    say('guo', '請先拿號碼牌……開玩笑的，謝謝你！'),
    say('alian', '不客氣！我們是好朋友啊！'),
  ],
};

module.exports = { N, EVENTS };

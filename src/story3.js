// 第三章劇本資料（1–3 月）：文化之旅、春節、校慶園遊會。zh = 中文；vi id en th my = 五種輔助語言。
const { T, P } = require('./story.js');

const N = {
  j01a: T('1 月的文化之旅，林老師帶大家出發。', 'Chuyến đi văn hóa tháng 1, thầy Lâm dẫn cả lớp xuất phát.', 'Perjalanan budaya bulan Januari, Guru Lin membawa kita berangkat.', 'On the January culture trip, Teacher Lin leads the class out.', 'ทริปวัฒนธรรมเดือนมกราคม คุณครูหลินพาทุกคนออกเดินทาง', 'ဇန်နဝါရီ ယဉ်ကျေးမှုခရီးစဉ်မှာ ဆရာလင်က အတန်းသားတွေကို ခေါ်သွားတယ်။'),
  j01b: T('火車站的時刻表很大，你看了好久。', 'Bảng giờ tàu ở ga rất lớn, bạn nhìn rất lâu.', 'Jadwal kereta di stasiun sangat besar, kamu melihatnya lama sekali.', 'The timetable at the train station is huge. You stare at it for a while.', 'ตารางเวลารถไฟที่สถานีใหญ่มาก คุณมองดูนานมาก', 'ဘူတာရုံက အချိန်ဇယားက ကြီးတယ်၊ သင် ကြာကြာ ကြည့်နေတယ်။'),
  j01c: T('博物館裡很安靜，導覽員正在介紹古老的瓷器。', 'Trong bảo tàng rất yên tĩnh, hướng dẫn viên đang giới thiệu đồ sứ cổ.', 'Di museum sangat tenang, pemandu sedang menjelaskan porselen kuno.', 'The museum is quiet. A guide is introducing old porcelain.', 'ในพิพิธภัณฑ์เงียบมาก ไกด์กำลังแนะนำเครื่องเคลือบโบราณ', 'ပြတိုက်ထဲမှာ တိတ်ဆိတ်နေတယ်။ လမ်းပြသူက ရှေးဟောင်း ကြွေထည်တွေကို မိတ်ဆက်နေတယ်။'),
  j01d: T('紀念品店裡有很多好看的東西，你想買一個送家人。', 'Trong cửa hàng lưu niệm có nhiều món đẹp, bạn muốn mua một món tặng gia đình.', 'Di toko suvenir ada banyak barang bagus, kamu ingin membeli satu untuk keluarga.', 'The souvenir shop has many lovely things. You want to buy one for your family.', 'ในร้านของที่ระลึกมีของสวยเยอะมาก คุณอยากซื้อไปฝากครอบครัว', 'လက်ဆောင်းပစ္စည်းဆိုင်မှာ လှတဲ့ပစ္စည်းတွေ အများကြီးရှိတယ်။ မိသားစုအတွက် တစ်ခု ဝယ်ချင်တယ်။'),
  j01e: T('一天走下來，大家都很累，但是很開心。', 'Đi cả ngày, ai cũng mệt nhưng rất vui.', 'Setelah seharian berjalan, semua lelah tapi senang.', 'After a full day of walking, everyone is tired but happy.', 'เดินทั้งวันทุกคนเหนื่อยแต่มีความสุข', 'တစ်နေကုန် လျှောက်ပြီးတော့ အားလုံး ပင်ပန်းကြပေမယ့် ပျော်ရွှင်နေကြတယ်။'),
  f01a: T('農曆新年快到了，宿舍走廊貼滿了紅色的春聯。', 'Tết âm lịch sắp đến, hành lang ký túc xá dán đầy câu đối đỏ.', 'Imlek hampir tiba, koridor asrama penuh dengan kertas merah.', 'Lunar New Year is near. The dorm hallway is covered in red couplets.', 'ใกล้ตรุษจีนแล้ว ทางเดินหอพักติดกลอนสีแดงเต็มไปหมด', 'နှစ်သစ်ကူး နီးလာပြီ။ အဆောင်လမ်းမှာ အနီရောင် စာကလေးတွေ ကပ်ထားတယ်။'),
  f01b: T('視訊的另一頭，家人正在準備年夜飯。', 'Ở đầu bên kia màn hình, gia đình đang chuẩn bị bữa cơm tất niên.', 'Di seberang video, keluarga sedang menyiapkan makan malam tahun baru.', 'On the other side of the video call, your family is preparing the New Year\'s Eve dinner.', 'อีกฝั่งของวิดีโอคอล ครอบครัวกำลังเตรียมอาหารมื้อปีใหม่', 'ဗီဒီယိုခေါ်ဆိုမှု တဘက်မှာ မိသားစုက နှစ်သစ်ကူးညစာ ပြင်ဆင်နေကြတယ်။'),
  f01c: T('你們互相拜年，大家都笑了。', 'Hai bên chúc Tết nhau, mọi người đều cười.', 'Kalian saling mengucapkan selamat, semua tertawa.', 'You wish each other a happy new year, and everyone laughs.', 'ทุกคนอวยพรปีใหม่ซึ่งกันและกัน แล้วหัวเราะกัน', 'နှစ်သစ်ကူး ဆုတောင်းကြတယ်။ လူတိုင်း ရယ်ကြတယ်။'),
  g01a: T('校慶園遊會到了，每一科都擺了攤位。', 'Hội chợ kỷ niệm trường đến rồi, mỗi khoa đều có một gian hàng.', 'Pesta ulang tahun sekolah tiba, setiap jurusan punya stan.', 'The school festival has arrived, and every department has a stall.', 'งานวันครบรอบโรงเรียนมาถึงแล้ว ทุกแผนกมีบูธ', 'ကျောင်းနှစ်ပတ်လည်ပွဲ ရောက်လာပြီ။ ဌာနတိုင်းမှာ ဆိုင်ခန်းတွေ ဖွင့်ထားကြတယ်။'),
  g01b: T('你的攤位上掛著一塊小招牌，客人慢慢走過來。', 'Trên gian hàng của bạn treo một tấm biển nhỏ, khách từ từ đi tới.', 'Di stanmu tergantung papan kecil, pengunjung mulai berjalan mendekat.', 'A small sign hangs over your stall, and visitors start walking over.', 'บูธของคุณมีป้ายเล็กๆ แขวนอยู่ ลูกค้าเดินเข้ามาเรื่อยๆ', 'ဆိုင်ခန်းမှာ ဆိုင်းဘုတ်သေးသေးလေး ချိတ်ထားတယ်။ ဖောက်သည်တွေ လာနေကြတယ်။'),
  g01c: T('收攤時，你數著今天賣出的東西。', 'Khi dọn hàng, bạn đếm số hàng đã bán hôm nay.', 'Saat membereskan stan, kamu menghitung barang yang terjual hari ini.', 'When closing the stall, you count what you sold today.', 'ตอนเก็บบูธ คุณนับของที่ขายได้วันนี้', 'ဆိုင်ပိတ်ချိန်မှာ ဒီနေ့ ရောင်းလိုက်တဲ့ ပစ္စည်းတွေကို ရေတွက်တယ်။'),
  // question prompts
  j01q1: T('火車幾點開？', 'Mấy giờ tàu chạy?', 'Jam berapa kereta berangkat?', 'What time does the train leave?', 'รถไฟออกกี่โมง', 'ရထား ဘယ်အချိန် ထွက်မလဲ။'),
  j01q2: T('這裡可以拍照嗎？', 'Ở đây có được chụp ảnh không?', 'Bolehkah memotret di sini?', 'Can you take photos here?', 'ถ่ายรูปที่นี่ได้ไหม', 'ဒီမှာ ဓာတ်ပုံရိုက်လို့ ရလား။'),
  j01q3: T('這個多少錢？', 'Cái này bao nhiêu tiền?', 'Ini berapa harganya?', 'How much is this?', 'อันนี้ราคาเท่าไร', 'ဒါ ဘယ်လောက်လဲ။'),
  f01q1: T('春節的紅包是什麼顏色？', 'Phong bao lì xì ngày Tết màu gì?', 'Angpao Imlek berwarna apa?', 'What color is the Lunar New Year red envelope?', 'ซองแดงตรุษจีนเป็นสีอะไร', 'နှစ်သစ်ကူး အနီစာအိတ် ဘယ်အရောင်လဲ။'),
  f01q2: T('阿嬌給你紅包，你要說什麼？', 'A Kiều đưa bao lì xì, bạn nên nói gì?', 'Nenek A Jiao memberi angpao, kamu bilang apa?', 'Grandma A-Jiao gives you a red envelope. What do you say?', 'คุณยายอาเจียวให้ซองแดง คุณจะพูดว่าอะไร', 'အဖွား အာကျောင် အနီစာအိတ် ပေးတယ်။ ဘာပြောမလဲ။'),
  g01q1: T('客人走過來，你要說什麼？', 'Khách đi đến, bạn nên nói gì?', 'Pengunjung datang, kamu bilang apa?', 'A customer walks up. What do you say?', 'ลูกค้าเดินเข้ามา คุณจะพูดว่าอะไร', 'ဖောက်သည် လာတဲ့အခါ ဘာပြောမလဲ။'),
  g01q2: T('一個二十元，客人給你一百元，要找多少錢？', 'Một cái hai mươi đồng, khách đưa 100, thối lại bao nhiêu?', 'Satu harganya dua puluh, pembeli bayar seratus, kembaliannya berapa?', 'One costs 20; the customer pays 100. How much change?', 'อันละยี่สิบ ลูกค้าจ่ายมา 100 ต้องทอนเท่าไร', 'တစ်ခု ၂၀ ဖြစ်ပြီး ဖောက်သည် ၁၀၀ ပေးတယ်။ အကြွေ ဘယ်လောက် အမ်းရမလဲ။'),
  g01q0: T('你想賣什麼？', 'Bạn muốn bán gì?', 'Kamu mau jual apa?', 'What do you want to sell?', 'คุณอยากขายอะไร', 'ဘာရောင်ချင်လဲ။'),
  i01a: T('每個月第一週，宿舍阿姨會來檢查房間。', 'Mỗi tháng vào tuần đầu, dì quản lý ký túc xá sẽ đến kiểm tra phòng.', 'Setiap bulan di minggu pertama, ibu asrama akan memeriksa kamar.', 'In the first week of each month, the dorm aunt comes to check the rooms.', 'ทุกเดือนในสัปดาห์แรก ป้าหอพักจะมาตรวจห้อง', 'လစဉ် ပထမအပတ်မှာ အဆောင်အန်တီက အခန်းတွေကို စစ်ဆေးတယ်။'),
  i01b: T('阿姨拿著檢查表，一項一項地看。', 'Dì cầm bảng kiểm tra, xem từng mục một.', 'Ibu memegang daftar periksa dan melihat satu per satu.', 'She holds a checklist and goes through it item by item.', 'ป้าถือแบบตรวจและดูทีละข้อ', 'အန်တီက စစ်ဆေးစာရင်းကို ကိုင်ပြီး တစ်ခုချင်း စစ်ဆေးတယ်။'),
};
const say = (who, zh, extra = {}) => ({ say: who, zh, ...extra });
const n = (k) => ({ n: N[k] });
const LIFE = '生活中文';

function inspection() {
  return [
    { scene: 'dorm', npc: 'ayi' },
    n('i01a'),
    n('i01b'),
    { ifTidy: 80, then: [say('ayi', '很乾淨，很好！'), { fx: { tidy: 5, aff: { ayi: 1 } } }],
      else: [say('ayi', '東西要放回去喔。垃圾也要記得倒。'), { fx: { tidy: -10 } }] },
  ];
}

const EVENTS = {
  // 1 月：文化之旅（整天活動，3 站，每站一題，最後拿明信片）
  J01: [
    { scene: 'classroom', npc: 'lin' },
    n('j01a'),
    say('lin', '大家要準時，火車九點半出發。'),
    say('chen', '好，我們先去車站。記得帶好證件。'),
    { scene: 'street', npc: 'chen' },
    n('j01b'),
    { q: { p: T('火車幾點開？', 'Mấy giờ tàu chạy?', 'Jam berapa kereta berangkat?', 'What time does the train leave?', 'รถไฟออกกี่โมง', 'ရထား ဘယ်အချိန် ထွက်မလဲ။'), src: LIFE, opts: [
      { zh: '九點半', ok: 1 }, { zh: '九點十分', r: [say('chen', '那班車已經開走了喔。')] }, { zh: '十點半' }, { zh: '九點' },
    ], wrong: [say('chen', '再看一次時刻表。')], ok: [say('chen', '很好，我們坐九點半的車。'), { fx: { money: -60 } }] } },
    { scene: 'campus', npc: 'lin' },
    n('j01c'),
    say('lin', '這是很有名的古老瓷器，請大家注意。'),
    { q: { p: T('這裡可以拍照嗎？', 'Ở đây có được chụp ảnh không?', 'Bolehkah memotret di sini?', 'Can you take photos here?', 'ถ่ายรูปที่นี่ได้ไหม', 'ဒီမှာ ဓာတ်ပုံရိုက်လို့ ရလား။'), src: LIFE, opts: [
      { zh: '可以拍照', ok: 1 }, { zh: '不可以', r: [say('lin', '看看牆上的標示牌喔。')] }, { zh: '可以吃東西' }, { zh: '不知道' },
    ], wrong: [say('lin', '你再看看標示牌。')], ok: [say('lin', '對，可以拍照，但不能用閃光燈。')] } },
    { scene: 'store', npc: 'chen' },
    n('j01d'),
    { q: { p: T('這個多少錢？', 'Cái này bao nhiêu tiền?', 'Ini berapa harganya?', 'How much is this?', 'อันนี้ราคาเท่าไร', 'ဒါ ဘယ်လောက်လဲ။'), src: LIFE, opts: [
      { zh: '一百二十元', ok: 1 }, { zh: '一百元' }, { zh: '二十元' }, { zh: '一百零二元' },
    ], wrong: [say('chen', '看一下價格牌喔。')], ok: [say('chen', '挑得好，送家人一定很開心。'), { fx: { money: -120, mood: 5 } }] } },
    n('j01e'),
    say('chen', '大家辛苦了，今天的心得報告不要忘記寫！'),
    { card: 'postcard' },
    { fx: { mood: 20, pop: 3 } },
  ],

  // 2 月：春節（上午收紅包、下午視訊回家；可以不必全天）
  F01: [
    { scene: 'dorm', npc: 'ajiao' },
    n('f01a'),
    { q: { p: T('春節的紅包是什麼顏色？', 'Phong bao lì xì ngày Tết màu gì?', 'Angpao Imlek berwarna apa?', 'What color is the Lunar New Year red envelope?', 'ซองแดงตรุษจีนเป็นสีอะไร', 'နှစ်သစ်ကူး အနီစာအိတ် ဘယ်အရောင်လဲ။'), src: LIFE, opts: [
      { zh: '紅色', ok: 1 }, { zh: '藍色', r: [say('amei', '不是啦，紅色才是喔！')] }, { zh: '綠色' }, { zh: '白色' },
    ], wrong: [say('ajiao', '再想想看。')], ok: [say('ajiao', '對！紅色代表好運。')] } },
    say('ajiao', '新年快樂！這個給你，要收好喔。'),
    { q: { p: T('阿嬌給你紅包，你要說什麼？', 'A Kiều đưa bao lì xì, bạn nên nói gì?', 'Nenek A Jiao memberi angpao, kamu bilang apa?', 'Grandma A-Jiao gives you a red envelope. What do you say?', 'คุณยายอาเจียวให้ซองแดง คุณจะพูดว่าอะไร', 'အဖွား အာကျောင် အနီစာအိတ် ပေးတယ်။ ဘာပြောမလဲ။'), src: LIFE, opts: [
      { zh: '謝謝阿嬌', ok: 1 }, { zh: '不要', r: [say('ajiao', '不要？那我拿回來喔……')] }, { zh: '我很餓' }, { zh: '再見' },
    ], wrong: [say('ajiao', '要說謝謝喔！')], ok: [{ fx: { money: 500, aff: { ajiao: 2 } } }, say('ajiao', '不客氣！新年要快樂！')] } },
    n('f01b'),
    { scene: 'room' },
    say('me', '新年快樂！我很想你們。'),
    n('f01c'),
    { fx: { mood: 25 } },
  ],

  // 3 月：校慶園遊會（先選要賣什麼；三題答對 2 題以上才拿到招牌）
  G01: [
    { scene: 'campus', npc: 'xiaoyang' },
    n('g01a'),
    say('xiaoyang', '我們的攤位在這裡，歡迎來看！'),
    { q: { p: T('你想賣什麼？', 'Bạn muốn bán gì?', 'Kamu mau jual apa?', 'What do you want to sell?', 'คุณอยากขายอะไร', 'ဘာရောင်ချင်လဲ။'), src: LIFE, opts: [
      { zh: '家鄉菜', ok: 1, then: [say('huang', '家鄉菜？我來幫你試吃！'), { fx: { money: 150, mood: 10 } }] },
      { zh: '飲料', ok: 1, then: [say('xiaoyang', '飲料很好賣喔！')] },
    ], wrong: [say('xiaoyang', '再想想看。')], ok: [] } },
    n('g01b'),
    { q: { p: T('客人走過來，你要說什麼？', 'Khách đi đến, bạn nên nói gì?', 'Pengunjung datang, kamu bilang apa?', 'A customer walks up. What do you say?', 'ลูกค้าเดินเข้ามา คุณจะพูดว่าอะไร', 'ဖောက်သည် လာတဲ့အခါ ဘာပြောမလဲ။'), src: LIFE, opts: [
      { zh: '歡迎光臨', ok: 1 }, { zh: '再見', r: [say('customer', '我還沒買東西呢！')] }, { zh: '我不知道' }, { zh: '很貴' },
    ], wrong: [say('xiaoyang', '要先歡迎客人喔。')], ok: [say('customer', '謝謝！這個多少錢？')] } },
    { q: { p: T('一個二十元，客人給你一百元，要找多少錢？', 'Một cái hai mươi đồng, khách đưa 100, thối lại bao nhiêu?', 'Satu harganya dua puluh, pembeli bayar seratus, kembaliannya berapa?', 'One costs 20; the customer pays 100. How much change?', 'อันละยี่สิบ ลูกค้าจ่ายมา 100 ต้องทอนเท่าไร', 'တစ်ခု ၂၀ ဖြစ်ပြီး ဖောက်သည် ၁၀၀ ပေးတယ်။ အကြွေ ဘယ်လောက် အမ်းရမလဲ။'), src: LIFE, opts: [
      { zh: '八十元', ok: 1 }, { zh: '一百二十元', r: [say('customer', '太貴了吧？')] }, { zh: '二十元' }, { zh: '一百元' },
    ], wrong: [say('xiaoyang', '再算一次喔。')], ok: [{ fx: { money: 200, aff: { xiaoyang: 1 } } }, say('customer', '謝謝，下次再來！')] } },
    { scene: 'campus', npc: 'huang' },
    say('huang', '生意不錯喔！來來來，好吃不貴！'),
    n('g01c'),
    { ifScore: 2, then: [{ card: 'gardensign' }, { fx: { money: 300, mood: 10, pop: 5 } }],
      else: [say('huang', '下次要多招呼客人喔！'), { fx: { money: 100 } }] },
  ],

  // 每月第一週：宿舍內務檢查（1 月、2 月第二週、3 月第一週）
  I01: inspection(),
  I02: inspection(),
  I03: inspection(),
  // 隨機事件（每天 30%，下午觸發；每件只會遇到一次）
  R01: [
    { scene: 'street', npc: 'passer' },
    n('r01a'),
    say('passer', '前面是下一站喔，你要怎麼去？'),
    { q: { p: T('你要怎麼做？', 'Bạn nên làm gì?', 'Apa yang harus kamu lakukan?', 'What should you do?', 'คุณควรทำอย่างไร', 'ဘာလုပ်သင့်လဲ။'), src: LIFE, opts: [
      { zh: '下車，換往回的車', ok: 1 }, { zh: '繼續坐到終點', r: [say('passer', '終點很遠喔，要坐很久。')] }, { zh: '用跑的' }, { zh: '不知道' },
    ], wrong: [say('passer', '想想看，要往回坐。')], ok: [say('passer', '對，換車最快！'), { fx: { hp: -5, mood: 5 } }] } },
  ],
  R02: [
    { scene: 'street', npc: 'passer' },
    n('r02a'),
    { q: { p: T('你要怎麼辦？', 'Bạn sẽ làm gì?', 'Apa yang akan kamu lakukan?', 'What will you do?', 'คุณจะทำอย่างไร', 'ဘာလုပ်မလဲ။'), src: LIFE, opts: [
      { zh: '交給警察', ok: 1 }, { zh: '自己留著', r: [say('passer', '那不是你的喔。')] }, { zh: '丟在路上' }, { zh: '拿去買東西' },
    ], wrong: [say('passer', '撿到別人的東西要交給警察。')], ok: [say('passer', '你是好人！'), { fx: { mood: 10, aff: { passer: 1 } } }] } },
  ],
  R03: [
    { scene: 'dorm', npc: 'ajiao' },
    n('r03a'),
    { q: { p: T('阿嬌給你水果，你要說什麼？', 'A Kiều đưa trái cây, bạn nói gì?', 'Nenek A Jiao memberi buah, kamu bilang apa?', 'Grandma A-Jiao gives you fruit. What do you say?', 'คุณยายอาเจียวให้ผลไม้ คุณจะพูดว่าอะไร', 'အဖွား အာကျောင် အသီးပေးတယ်။ ဘာပြောမလဲ။'), src: LIFE, opts: [
      { zh: '謝謝阿嬌', ok: 1 }, { zh: '不要', r: [say('ajiao', '不要？那我吃掉喔！')] }, { zh: '我很餓' }, { zh: '再見' },
    ], wrong: [say('ajiao', '要說謝謝喔！')], ok: [say('ajiao', '不客氣，多吃一點！'), { fx: { hp: 10, mood: 10, aff: { ajiao: 1 } } }] } },
  ],
  R04: [
    { scene: 'street', npc: 'passer' },
    n('r04a'),
    { q: { p: T('你要怎麼做？', 'Bạn nên làm gì?', 'Apa yang harus kamu lakukan?', 'What should you do?', 'คุณควรทำอย่างไร', 'ဘာလုပ်သင့်လဲ။'), src: LIFE, opts: [
      { zh: '不要帶回宿舍', ok: 1 }, { zh: '帶回宿舍', r: [say('ayi', '宿舍不能養寵物喔！')] }, { zh: '用吃的引誘' }, { zh: '大聲叫' },
    ], wrong: [say('passer', '貓咪會害怕喔。')], ok: [say('passer', '牠應該會回家吧。'), { fx: { mood: 5 } }] } },
  ],
  R05: [
    { scene: 'room', npc: 'tongxue' },
    n('r05a'),
    { q: { p: T('你要怎麼回覆？', 'Bạn trả lời thế nào?', 'Kamu membalas apa?', 'How do you reply?', 'คุณจะตอบอย่างไร', 'ဘယ်လိုပြန်ဖြေမလဲ။'), src: LIFE, opts: [
      { zh: '我在圖書館，等一下回你', ok: 1 }, { zh: '我不知道', r: [say('tongxue', '你在哪裡？我來找你！')] }, { zh: '我在月球' }, { zh: '再見' },
    ], wrong: [say('tongxue', '你要說清楚你在哪裡喔。')], ok: [say('tongxue', '好，我們晚點見！'), { fx: { mood: 5 } }] } },
  ],
};

module.exports = { N, EVENTS };

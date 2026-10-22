// 第六章劇本資料（二年級 10–12 月）：國慶日、帶學妹實習、運動會、技術士技能檢定、聖誕交換禮物；詐騙簡訊、公車讓座。
// 詞彙：A2 為主，B1 繼續增加（檢定、准考證、進場、接力、詐騙、帳戶、讓座）。zh = 中文；vi id en th my = 五種輔助語言。
const { T, P } = require('./story.js');
const S3 = require('./story3.js');

const N = {
  y01a: T('十月十日是國慶日，學校放假。晚上，大家一起去看煙火。', 'Ngày 10 tháng 10 là Quốc khánh, trường được nghỉ. Buổi tối, mọi người cùng đi xem pháo hoa.', 'Tanggal 10 Oktober adalah Hari Nasional, sekolah libur. Malam harinya, semua pergi menonton kembang api.', 'October 10th is National Day, and school is off. In the evening, everyone goes to watch the fireworks.', 'วันที่ 10 ตุลาคมเป็นวันชาติ โรงเรียนหยุด ตอนเย็นทุกคนไปดูดอกไม้ไฟด้วยกัน', 'အောက်တိုဘာ ၁၀ ရက်က အမျိုးသားနေ့ပါ၊ ကျောင်းပိတ်တယ်။ ညနေမှာ အားလုံး မီးပန်းသွားကြည့်ကြတယ်။'),
  y01b: T('天空開滿了煙火，大家一起拍了很多照片。', 'Bầu trời rực rỡ pháo hoa, mọi người chụp rất nhiều ảnh cùng nhau.', 'Langit penuh kembang api, semua berfoto bersama.', 'The sky fills with fireworks, and everyone takes lots of photos together.', 'ท้องฟ้าเต็มไปด้วยดอกไม้ไฟ ทุกคนถ่ายรูปด้วยกันมากมาย', 'ကောင်းကင်မှာ မီးပန်းတွေ ပွင့်နေတယ်၊ အားလုံး ဓာတ်ပုံ အများကြီး အတူရိုက်ကြတယ်။'),
  y02a: T('你在機場接的學妹，也來這裡實習了。張師傅請你帶她。', 'Em khóa dưới mà bạn đón ở sân bay cũng đến đây thực tập. Thầy Trương nhờ bạn hướng dẫn em ấy.', 'Adik kelas yang kamu jemput di bandara juga magang di sini. Pak Zhang memintamu membimbingnya.', 'The first-year you met at the airport is now interning here too. Master Zhang asks you to guide her.', 'น้องที่คุณไปรับที่สนามบินก็มาฝึกงานที่นี่ด้วย อาจารย์จางให้คุณดูแลเธอ', 'လေဆိပ်မှာ သွားကြိုခဲ့တဲ့ ညီမလေးလည်း ဒီမှာ အလုပ်သင်လာဆင်းတယ်။ ဆရာကျန်းက သူမကို လမ်းပြပေးဖို့ ခိုင်းတယ်။'),
  y03a: T('十一月，學校舉辦運動會。實習的同學也請假回來參加。', 'Tháng Mười Một, trường tổ chức hội thao. Các bạn đang thực tập cũng xin nghỉ về tham gia.', 'November, sekolah mengadakan pekan olahraga. Teman yang magang juga izin untuk ikut.', 'In November, the school holds its sports day. Students on internship take leave to join too.', 'เดือนพฤศจิกายน โรงเรียนจัดงานกีฬาสี เพื่อนที่ฝึกงานก็ลามาร่วมด้วย', 'နိုဝင်ဘာလမှာ ကျောင်းက အားကစားပွဲ ကျင်းပတယ်။ အလုပ်သင်ဆင်းနေသူတွေလည်း ခွင့်ယူပြီး ပြန်လာကြတယ်။'),
  y03b: T('最後一棒，你們班跑了第二名！大家都在喊加油。', 'Chặng cuối, lớp bạn về nhì! Mọi người đều hò reo cổ vũ.', 'Di putaran terakhir, kelasmu juara dua! Semua bersorak.', 'On the final leg, your class finishes second! Everyone is cheering.', 'ไม้สุดท้าย ห้องคุณได้ที่สอง! ทุกคนส่งเสียงเชียร์', 'နောက်ဆုံးအချီမှာ ခင်ဗျားတို့အတန်း ဒုတိယ ရတယ်။ အားလုံး အားပေးအော်ကြတယ်။'),
  y04a: T('你報名了技術士技能檢定（丙級證照）。今天是考試的日子。', 'Bạn đã đăng ký kỳ thi chứng chỉ kỹ năng nghề quốc gia (hạng C). Hôm nay là ngày thi.', 'Kamu mendaftar ujian sertifikasi keterampilan nasional (tingkat C). Hari ini hari ujian.', 'You registered for the national skills certification exam (Level C). Today is the exam.', 'คุณสมัครสอบใบรับรองทักษะวิชาชีพ (ระดับ C) วันนี้เป็นวันสอบ', 'အမျိုးသားကျွမ်းကျင်မှု လက်မှတ်စာမေးပွဲ (C အဆင့်) ကို လျှောက်ထားတယ်။ ဒီနေ့ စာမေးပွဲနေ့ပါ။'),
  y04b: T('一個月後，成績出來了：你通過了！', 'Một tháng sau có kết quả: bạn đã đậu!', 'Sebulan kemudian, hasilnya keluar: kamu lulus!', 'A month later, the results are out: you passed!', 'หนึ่งเดือนต่อมา ผลออกแล้ว: คุณสอบผ่าน!', 'တစ်လအကြာမှာ အဖြေထွက်လာတယ်- ခင်ဗျား အောင်တယ်။'),
  y04c: T('這次沒有通過，但是你知道下次要怎麼準備了。', 'Lần này chưa đậu, nhưng bạn đã biết lần sau phải chuẩn bị thế nào.', 'Kali ini belum lulus, tapi kamu tahu cara bersiap untuk lain kali.', 'You didn’t pass this time, but now you know how to prepare next time.', 'ครั้งนี้ยังไม่ผ่าน แต่คุณรู้แล้วว่าครั้งหน้าจะเตรียมตัวอย่างไร', 'ဒီတစ်ခါ မအောင်သေးပေမဲ့ နောက်တစ်ခါ ဘယ်လိုပြင်ဆင်ရမလဲ သိသွားပြီ။'),
  y05a: T('十二月二十四日，宿舍交誼廳辦聖誕晚會，大家要交換禮物。', 'Ngày 24 tháng 12, phòng sinh hoạt ký túc xá tổ chức tiệc Giáng sinh, mọi người trao đổi quà.', 'Tanggal 24 Desember, ruang santai asrama mengadakan pesta Natal, semua bertukar kado.', 'On December 24th, the dorm lounge holds a Christmas party, and everyone exchanges gifts.', 'วันที่ 24 ธันวาคม ห้องนั่งเล่นรวมของหอจัดงานคริสต์มาส ทุกคนแลกของขวัญกัน', 'ဒီဇင်ဘာ ၂၄ ရက်မှာ အဆောင် အပန်းဖြေခန်းမှာ ခရစ္စမတ်ပွဲ လုပ်ပြီး အားလုံး လက်ဆောင်လဲကြတယ်။'),
  y05p: T('在菲律賓，聖誕節是一年最重要的節日。大家請你介紹家鄉怎麼過聖誕節。', 'Ở Philippines, Giáng sinh là lễ quan trọng nhất trong năm. Mọi người nhờ bạn giới thiệu quê bạn đón Giáng sinh thế nào.', 'Di Filipina, Natal adalah hari raya terpenting. Semua memintamu menceritakan cara merayakan Natal di kampung halamanmu.', 'In the Philippines, Christmas is the biggest holiday of the year. Everyone asks you how your home celebrates it.', 'ที่ฟิลิปปินส์ คริสต์มาสเป็นเทศกาลที่สำคัญที่สุดของปี ทุกคนขอให้คุณเล่าว่าบ้านเกิดฉลองคริสต์มาสอย่างไร', 'ဖိလစ်ပိုင်မှာ ခရစ္စမတ်က တစ်နှစ်တာရဲ့ အရေးအကြီးဆုံးပွဲတော်ပါ။ ဇာတိမှာ ဘယ်လိုကျင်းပလဲ ပြောပြဖို့ အားလုံးက တောင်းတယ်။'),
  r12a: T('你的手機收到一封簡訊：「您的包裹地址有誤，請點連結補付運費三十元。」', 'Điện thoại bạn nhận được tin nhắn: “Địa chỉ bưu kiện của bạn bị sai, vui lòng bấm vào liên kết để trả thêm phí vận chuyển 30 đồng.”', 'Ponselmu menerima SMS: “Alamat paket Anda salah, silakan klik tautan untuk membayar ongkos kirim 30 dolar.”', 'You get a text message: “There is a problem with your parcel address. Click the link to pay a NT$30 shipping fee.”', 'โทรศัพท์ของคุณได้รับข้อความ: “ที่อยู่พัสดุของคุณผิด กรุณากดลิงก์เพื่อจ่ายค่าส่งเพิ่ม 30 ดอลลาร์”', 'ဖုန်းထဲကို စာတိုတစ်စောင် ရောက်လာတယ်- “သင့်ပါဆယ်လ်လိပ်စာ မှားနေပါတယ်၊ ပို့ခ ၃၀ ပေးဖို့ လင့်ခ်ကို နှိပ်ပါ။”'),
  r12b: T('幾天後，你的帳戶被盜刷了三千元……', 'Vài ngày sau, tài khoản của bạn bị trừ trộm ba nghìn đồng…', 'Beberapa hari kemudian, rekeningmu terpotong tiga ribu dolar tanpa izin…', 'A few days later, NT$3,000 is stolen from your account…', 'ไม่กี่วันต่อมา บัญชีของคุณถูกรูดไปสามพันดอลลาร์…', 'ရက်အနည်းငယ်အကြာမှာ ခင်ဗျားရဲ့ အကောင့်ထဲက ငွေ သုံးထောင် ခိုးထုတ်ခံရတယ်…'),
  r12c: T('LINE 上有一個不認識的人說你中獎了，要你給帳號和密碼才能領獎。', 'Trên LINE có người lạ nói bạn trúng thưởng, bảo bạn đưa tài khoản và mật khẩu mới nhận được quà.', 'Di LINE ada orang tak dikenal bilang kamu menang hadiah, dan meminta akun serta kata sandimu.', 'A stranger on LINE says you won a prize and asks for your account and password to claim it.', 'มีคนแปลกหน้าใน LINE บอกว่าคุณถูกรางวัล ขอบัญชีและรหัสผ่านเพื่อรับรางวัล', 'LINE မှာ မသိတဲ့လူတစ်ယောက်က ဆုပေါက်တယ်ဆိုပြီး ဆုယူဖို့ အကောင့်နဲ့ စကားဝှက် တောင်းတယ်။'),
  r13a: T('公車上人很多，一位老奶奶上車了，沒有位子坐。', 'Trên xe buýt rất đông, một bà cụ lên xe mà không có chỗ ngồi.', 'Bus sangat penuh, seorang nenek naik dan tidak dapat tempat duduk.', 'The bus is crowded. An elderly woman gets on, and there are no seats.', 'บนรถเมล์คนเยอะมาก มีคุณยายขึ้นรถมาแต่ไม่มีที่นั่ง', 'ဘတ်စ်ကားပေါ်မှာ လူအရမ်းများတယ်၊ အဖွားအိုတစ်ယောက် တက်လာပေမဲ့ ထိုင်ခုံ မရှိဘူး။'),
};
const say = (who, zh, extra = {}) => ({ say: who, zh, ...extra });
const n = (k) => ({ n: N[k] });
const LIFE = '生活中文';
const Q_DO = T('你要怎麼做？', 'Bạn nên làm gì?', 'Apa yang harus kamu lakukan?', 'What should you do?', 'คุณควรทำอย่างไร', 'ဘာလုပ်သင့်လဲ။');
const Q_SCAM = T('收到奇怪的簡訊叫你付錢，你要怎麼做？', 'Nhận được tin nhắn lạ bắt trả tiền, bạn nên làm gì?', 'Menerima SMS aneh yang meminta uang, apa yang harus kamu lakukan?', 'You get a strange text asking you to pay. What should you do?', 'ได้รับข้อความแปลกๆ ให้จ่ายเงิน คุณควรทำอย่างไร', 'ပိုက်ဆံပေးခိုင်းတဲ့ ထူးဆန်းတဲ့ စာတို ရရင် ဘာလုပ်သင့်လဲ။');

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
  // 10 月：國慶日看煙火
  Y01: [
    { scene: 'campus', npc: 'amei' },
    n('y01a'),
    say('amei', '煙火八點開始，我們七點半在校門口見。', { listen: 1 }),
    { q: { p: T('幾點在哪裡見面？', 'Mấy giờ gặp nhau ở đâu?', 'Jam berapa dan di mana bertemu?', 'When and where do you meet?', 'เจอกันกี่โมงที่ไหน', 'ဘယ်အချိန် ဘယ်မှာ တွေ့မလဲ။'), src: LIFE, opts: [
      { zh: '七點半，校門口', ok: 1 }, { zh: '八點，校門口', r: [say('amei', '八點煙火就開始了，太晚啦！')] }, { zh: '七點半，宿舍' }, { zh: '八點半，車站' },
    ], wrong: [say('amei', '再聽一次喔。')], ok: [say('amei', '好，不要遲到喔！')] } },
    { scene: 'newyear', npc: 'amei' },
    n('y01b'),
    { fx: { mood: 15, aff: { amei: 1 } } },
  ],

  // 在職的同學：帶學妹實習（甲組 10 月、乙組 12 月）
  Y02: [
    { scene: 'work', npc: 'zhang' },
    n('y02a'),
    { scene: 'work', npc: 'newbie' },
    say('newbie', '{senior}，第一天要注意什麼？'),
    { q: { p: T('你要先提醒學妹什麼？', 'Bạn nhắc em khóa dưới điều gì trước?', 'Apa yang pertama kali kamu ingatkan pada adik kelas?', 'What do you remind the first-year about first?', 'คุณจะเตือนน้องเรื่องอะไรก่อน', 'ညီမလေးကို ဘာကို အရင် သတိပေးမလဲ။'), src: LIFE, opts: [
      { zh: '先打卡，再戴好{gear}。', ok: 1 }, { zh: '先去休息室睡覺。', r: [say('newbie', '咦？可以嗎？')] }, { zh: '不用打卡。' }, { zh: '機器可以隨便碰。', r: [say('zhang', '不行！那很危險。')] },
    ], wrong: [say('zhang', '你第一天，我是怎麼教你的？')], ok: [say('newbie', '好，我記住了！')] } },
    say('newbie', '如果有危險，要從哪裡出去？'),
    { q: { p: T('有危險的時候，要從哪裡出去？', 'Khi có nguy hiểm, phải ra từ đâu?', 'Kalau ada bahaya, keluar lewat mana?', 'In an emergency, where do you exit?', 'เวลามีอันตราย ต้องออกทางไหน', 'အန္တရာယ်ရှိရင် ဘယ်ကနေ ထွက်ရမလဲ။'), src: LIFE, opts: [
      { zh: '緊急出口', e: '🟩🏃', ok: 1 }, { zh: '休息室', e: '🛋️' }, { zh: '電梯', e: '🛗', r: [say('zhang', '有危險的時候不能坐電梯。')] }, { zh: '窗戶', e: '🪟' },
    ], wrong: [say('zhang', '想想那個綠色的標示。')], ok: [say('newbie', '謝謝{senior}！')] } },
    { scene: 'work', npc: 'zhang' },
    say('zhang', '你教得很好。明年你就可以當小組長了。'),
    { fx: { skill: 5, pop: 3, aff: { zhang: 1 } } },
  ],

  // 11 月：運動會（大隊接力）
  Y03: [
    { scene: 'campus', npc: 'chen' },
    n('y03a'),
    { poster: [['比賽', '大隊接力'], ['時間', '下午兩點'], ['地點', '操場'], ['注意', '穿運動服、運動鞋']], title: '運動會' },
    { q: { p: T('大隊接力幾點開始？', 'Chạy tiếp sức bắt đầu lúc mấy giờ?', 'Lari estafet dimulai jam berapa?', 'What time does the big relay start?', 'วิ่งผลัดเริ่มกี่โมง', 'အသင်းလိုက်ပြေးပွဲ ဘယ်အချိန် စမလဲ။'), src: LIFE, opts: [
      { zh: '下午兩點', ok: 1 }, { zh: '上午兩點', r: [say('amei', '上午兩點大家都在睡覺啦！')] }, { zh: '下午四點' }, { zh: '晚上兩點' },
    ], wrong: [say('chen', '再看一次。')] } },
    say('chen', '接棒的時候，要先往前跑，再伸手接棒。', { listen: 1 }),
    { q: { p: T('接棒的時候要怎麼做？', 'Khi nhận gậy phải làm thế nào?', 'Bagaimana cara menerima tongkat?', 'How do you take the baton?', 'ตอนรับไม้ต้องทำอย่างไร', 'တုတ်ကို လက်ခံတဲ့အခါ ဘယ်လိုလုပ်ရမလဲ။'), src: LIFE, opts: [
      { zh: '先往前跑，再伸手接棒', ok: 1 }, { zh: '站著不動' }, { zh: '把棒子丟過去', r: [say('chen', '丟過去會掉在地上喔！')] }, { zh: '用走的' },
    ], wrong: [say('chen', '再聽一次。')] } },
    n('y03b'),
    { card: 'medal' },
    { fx: { mood: 15, pop: 5, hp: -20, aff: { chen: 1 } } },
  ],

  // 11 月：技術士技能檢定（丙級證照）
  Y04: [
    { scene: 'classroom', npc: 'chen' },
    n('y04a'),
    { poster: [['帶', '准考證、居留證'], ['時間', '早上八點半進場'], ['注意', '遲到十五分鐘不能進場'], ['', '手機要關機']], title: '考試須知' },
    { q: { p: T('考試要帶什麼？', 'Đi thi phải mang gì?', 'Ujian harus bawa apa?', 'What should you bring to the exam?', 'สอบต้องเอาอะไรไป', 'စာမေးပွဲကို ဘာယူသွားရမလဲ။'), src: LIFE, opts: [
      { zh: '准考證、居留證', ok: 1 }, { zh: '課本' }, { zh: '手機', r: [say('chen', '手機要關機喔。')] }, { zh: '便當' },
    ], wrong: [say('chen', '再看一次「帶」那一行。')] } },
    { q: { p: T('遲到多久就不能進場？', 'Đến muộn bao lâu thì không được vào?', 'Terlambat berapa lama tidak boleh masuk?', 'How late can you be before you’re not allowed in?', 'มาสายนานเท่าไรถึงจะเข้าห้องสอบไม่ได้', 'ဘယ်လောက်နောက်ကျရင် ဝင်ခွင့်မရတော့လဲ။'), src: LIFE, opts: [
      { zh: '十五分鐘', ok: 1 }, { zh: '五分鐘' }, { zh: '一個小時' }, { zh: '可以一直進去', r: [say('chen', '不行喔，遲到太久就不能考了。')] },
    ], wrong: [say('chen', '看「注意」那一行。')] } },
    { scene: 'classroom', npc: 'teacher' },
    say('teacher', '時間到了，請停止作答，把筆放下。', { listen: 1 }),
    { q: { p: T('考官說時間到了，你要怎麼做？', 'Giám khảo nói hết giờ, bạn phải làm gì?', 'Pengawas bilang waktu habis, apa yang harus kamu lakukan?', 'The examiner says time is up. What do you do?', 'กรรมการบอกว่าหมดเวลา คุณต้องทำอย่างไร', 'စာစစ်သူက အချိန်ပြည့်ပြီလို့ ပြောရင် ဘာလုပ်ရမလဲ။'), src: LIFE, opts: [
      { zh: '停下來，把筆放下', ok: 1 }, { zh: '繼續寫完', r: [say('teacher', '時間到了還寫，會被扣分喔。')] }, { zh: '把考卷帶走' }, { zh: '站起來走來走去' },
    ], wrong: [say('teacher', '請再聽一次。')] } },
    { ifScore: 2, then: [n('y04b'), { card: 'license' }, { fx: { skill: 10, mood: 15, aff: { zhang: 1 } } }],
      else: [n('y04c'), { fx: { skill: 3 } }] },
  ],

  // 12 月 24 日：聖誕交換禮物（家鄉是菲律賓的主角負責介紹）
  Y05: [
    { scene: 'lounge', npc: 'rina' },
    n('y05a'),
    { poster: [['禮物', '一百五十元以內'], ['時間', '晚上七點'], ['地點', '交誼廳']], title: '聖誕晚會' },
    { q: { p: T('禮物要多少錢以內？', 'Quà phải dưới bao nhiêu tiền?', 'Kado harus di bawah berapa?', 'What is the price limit for the gift?', 'ของขวัญต้องราคาไม่เกินเท่าไร', 'လက်ဆောင်က ဘယ်လောက်အောက် ဖြစ်ရမလဲ။'), src: LIFE, opts: [
      { zh: '一百五十元', ok: 1 }, { zh: '十五元' }, { zh: '一千五百元', r: [say('rina', '太貴了啦！')] }, { zh: '五十元' },
    ], wrong: [say('rina', '再看一次海報。')], ok: [{ fx: { money: -150 } }] } },
    { ifHomeZh: ['菲律賓'], then: [
      n('y05p'),
      { q: { p: T('菲律賓的聖誕節，大家常常做什麼？', 'Giáng sinh ở Philippines, mọi người thường làm gì?', 'Saat Natal di Filipina, orang biasanya melakukan apa?', 'What do people usually do at Christmas in the Philippines?', 'คริสต์มาสที่ฟิลิปปินส์ คนมักทำอะไร', 'ဖိလစ်ပိုင်မှာ ခရစ္စမတ်ပွဲမှာ လူတွေ ဘာလုပ်လေ့ရှိလဲ။'), src: LIFE, opts: [
        { zh: '和家人一起吃飯', ok: 1 }, { zh: '一個人在家睡覺' }, { zh: '去海邊潑水', r: [say('rina', '那是潑水節吧！')] }, { zh: '吃月餅' },
      ], wrong: [say('rina', '想想你家鄉的聖誕夜。')], ok: [say('me', '聖誕夜，我們全家會一起吃飯，還會掛很多星星燈。'), { fx: { pop: 5 } }] } },
    ], else: [
      say('rina', '菲律賓的同學說，他們九月就開始準備聖誕節了！', { listen: 1 }),
      { q: { p: T('菲律賓什麼時候開始準備聖誕節？', 'Philippines bắt đầu chuẩn bị Giáng sinh từ khi nào?', 'Kapan Filipina mulai bersiap untuk Natal?', 'When does the Philippines start getting ready for Christmas?', 'ฟิลิปปินส์เริ่มเตรียมคริสต์มาสตั้งแต่เมื่อไร', 'ဖိလစ်ပိုင်က ခရစ္စမတ်ကို ဘယ်တုန်းက စပြင်ဆင်လဲ။'), src: LIFE, opts: [
        { zh: '九月', ok: 1 }, { zh: '十二月' }, { zh: '一月' }, { zh: '七月' },
      ], wrong: [say('rina', '再聽一次，很早喔！')], ok: [say('rina', '對！很早吧？')] } },
    ] },
    say('amei', '聖誕快樂！這是給你的禮物！'),
    { fx: { mood: 20, pop: 3, aff: { amei: 1, rina: 1 } } },
  ],

  I09: inspection(),
  I10: inspection(),
  I11: inspection(),

  // 隨機：詐騙簡訊（做決定的事件：選錯有後果，再教正確做法，之後複習一次）
  R12: [
    { scene: 'phone', npc: null },
    n('r12a'),
    { q: { p: Q_DO, src: LIFE, opts: [
      { zh: '不要點，直接刪掉', ok: 1, then: [{ fx: { mood: 3 } }] },
      { zh: '先去郵局問郭大哥', ok: 1, then: [{ scene: 'post', npc: 'guo' }, say('guo', '這是詐騙。郵局不會傳連結叫你付錢。'), { fx: { aff: { guo: 1 } } }] },
      { zh: '點連結，輸入卡號付錢', end: 1, r: [n('r12b'), { fx: { money: -3000, mood: -20 } },
        { scene: 'post', npc: 'guo' },
        say('guo', '這是詐騙簡訊。不認識的連結不要點，也不要給別人卡號和密碼。'),
        say('guo', '有問題，可以打 165 反詐騙專線。'),
        { q: { p: Q_SCAM, src: LIFE, opts: [
          { zh: '不要點連結，打 165 問', ok: 1 }, { zh: '馬上付錢' }, { zh: '把密碼給他' }, { zh: '轉給朋友' },
        ], wrong: [say('guo', '不對喔，再想一次。')], ok: [say('guo', '對。下次就不會被騙了。')] } },
        { redo: 'R12' }] },
      { zh: '回簡訊問他是誰', r: [say('guo', '不要回！他們會知道你的號碼是真的。')] },
    ], wrong: [say('guo', '再想想看。')], ok: [] } },
  ],
  // 複習：LINE 中獎詐騙
  R12b: [
    { scene: 'phone', npc: null },
    n('r12c'),
    { q: { p: P.say, src: LIFE, opts: [
      { zh: '我不認識你，不給。', ok: 1, then: [{ fx: { mood: 5 } }] },
      { zh: '我先打 165 問問看。', ok: 1, then: [{ fx: { mood: 5 } }] },
      { zh: '好，我的密碼是……', r: [say('amei', '等一下！這是詐騙！')] },
      { zh: '我要領獎！', r: [say('amei', '天下沒有白吃的午餐啦！')] },
    ], wrong: [say('amei', '想想郭大哥說過的話。')], ok: [] } },
  ],
  // 隨機：公車讓座
  R13: [
    { scene: 'street', npc: 'passer' },
    n('r13a'),
    { q: { p: Q_DO, src: LIFE, opts: [
      { zh: '站起來讓座', ok: 1 }, { zh: '假裝睡覺', r: [say('passer', '……')] }, { zh: '叫她站後面' }, { zh: '一直看手機' },
    ], wrong: [say('passer', '老人家站著很危險喔。')], ok: [say('passer', '謝謝你，年輕人！'), { fx: { mood: 5, pop: 2 } }] } },
  ],
};

module.exports = { N, EVENTS };

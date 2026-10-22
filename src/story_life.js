// 生活安全與省錢補充事件（老師提供的實際情況）
// B01（第 1 章 8 月）：學生證綁卡，台中公車 10 公里內免費、超過 10 公里最多 10 元。
// B02（第 2 章 12 月）：學長要賣二手機車。學校規定一年級上學期不能騎機車；沒有駕照被臨檢會罰錢、車子被沒收；
//                     來台未滿 180 天還沒有健保，車禍醫藥費只能靠僑生保險，理賠不多。
// H01（第 3 章 1 月）：來台住滿 180 天，加入全民健保，拿到健保卡。
// R18（第 8 章隨機）：同學無照騎機車要載你（複習）。
const { T, P } = require('./story.js');

const N = {
  h01a: T('一月了。你來台灣已經住滿一百八十天，陳導師帶你們去辦健保。', 'Đã tháng Một. Bạn đã ở Đài Loan đủ 180 ngày, thầy Trần đưa các bạn đi làm bảo hiểm y tế.', 'Sudah Januari. Kamu sudah tinggal 180 hari di Taiwan, Pak Chen mengajak kalian mendaftar asuransi kesehatan.', 'It’s January. You’ve now lived in Taiwan for 180 days, and Mr. Chen takes you to sign up for health insurance.', 'เดือนมกราคมแล้ว คุณอยู่ไต้หวันครบ 180 วันแล้ว อาจารย์เฉินพาพวกคุณไปทำประกันสุขภาพ', 'ဇန်နဝါရီလ ရောက်ပြီ။ ထိုင်ဝမ်မှာ ရက် ၁၈၀ ပြည့်ပြီမို့ ဆရာချန်က ကျန်းမာရေးအာမခံ လျှောက်ဖို့ ခေါ်သွားတယ်။'),
  h01b: T('以後去實習，健保費會從薪水裡扣。看病帶健保卡，只要付掛號費和部分負擔。', 'Sau này khi đi thực tập, phí bảo hiểm y tế sẽ bị trừ vào lương. Đi khám mang thẻ bảo hiểm, chỉ cần trả phí đăng ký và phần tự chi trả.', 'Nanti saat magang, iuran asuransi kesehatan dipotong dari gaji. Berobat bawa kartu asuransi, cukup bayar biaya pendaftaran dan biaya bagian sendiri.', 'From now on, the health premium will be deducted from your internship pay. Bring the card to the doctor and you only pay the registration fee and a small co-payment.', 'ต่อไปเวลาไปฝึกงาน ค่าประกันสุขภาพจะถูกหักจากเงินเดือน ไปหาหมอให้พกบัตรประกัน จ่ายแค่ค่าลงทะเบียนและส่วนที่ต้องร่วมจ่าย', 'နောက်ပိုင်း အလုပ်သင်သွားရင် ကျန်းမာရေးအာမခံကြေးကို လစာထဲက နုတ်မယ်။ ဆရာဝန်ပြရင် ကတ်ယူသွားပါ၊ မှတ်ပုံတင်ကြေးနဲ့ အနည်းငယ်သာ ပေးရမယ်။'),
  b01a: T('Rina 學姊說，在台中念書的學生，學生證要先綁卡，坐公車就很便宜。', 'Chị Rina nói học sinh học ở Đài Trung phải liên kết thẻ học sinh trước, như vậy đi xe buýt rất rẻ.', 'Kak Rina bilang, pelajar yang sekolah di Taichung harus mendaftarkan kartu pelajar dulu, lalu naik bus jadi sangat murah.', 'Rina says students who study in Taichung should register their student ID card first — then the bus is very cheap.', 'รุ่นพี่รีน่าบอกว่า นักเรียนที่เรียนในไถจงต้องผูกบัตรนักเรียนก่อน แล้วนั่งรถเมล์จะถูกมาก', 'Rina က ထိုက်ကျုံးမှာ ကျောင်းတက်တဲ့ ကျောင်းသားတွေ ကျောင်းသားကတ်ကို အရင် မှတ်ပုံတင်ထားရင် ဘတ်စ်ကား အရမ်းသက်သာတယ်လို့ ပြောတယ်။'),
  b01b: T('以後去打工、去玩，都可以坐公車，可以省很多錢。', 'Sau này đi làm thêm hay đi chơi đều có thể đi xe buýt, tiết kiệm được rất nhiều tiền.', 'Nanti pergi kerja paruh waktu atau jalan-jalan bisa naik bus, hemat banyak uang.', 'From now on, you can take the bus to your part-time job or to go out, and save a lot of money.', 'ต่อไปจะไปทำงานพาร์ตไทม์หรือไปเที่ยว ก็นั่งรถเมล์ได้ ประหยัดเงินได้มาก', 'နောက်ဆို အချိန်ပိုင်းအလုပ်သွားသွား၊ လျှောက်လည်လည် ဘတ်စ်ကားစီးလို့ရပြီး ပိုက်ဆံ အများကြီး ချွေတာနိုင်တယ်။'),
  b02a: T('一位學長說，他要把二手機車便宜賣給你，只要八千塊。', 'Một anh khóa trên nói muốn bán rẻ cho bạn chiếc xe máy cũ, chỉ tám nghìn đồng.', 'Seorang kakak kelas bilang mau menjual motor bekasnya kepadamu dengan murah, hanya delapan ribu dolar.', 'A senior says he’ll sell you his used scooter cheap — only NT$8,000.', 'รุ่นพี่คนหนึ่งบอกว่าจะขายมอเตอร์ไซค์มือสองให้คุณถูกๆ แค่แปดพันดอลลาร์', 'အထက်တန်းက အစ်ကိုတစ်ယောက်က သူ့ဆိုင်ကယ်အဟောင်းကို ငွေ ရှစ်ထောင်နဲ့ ဈေးပေါပေါ ရောင်းမယ်လို့ ပြောတယ်။'),
  b02b: T('幾天後，你騎車出門，遇到警察臨檢。你沒有駕照，被罰了錢，機車也被沒收了。', 'Vài ngày sau, bạn chạy xe ra ngoài và gặp cảnh sát kiểm tra. Bạn không có bằng lái nên bị phạt tiền, xe máy cũng bị tịch thu.', 'Beberapa hari kemudian, kamu naik motor dan terkena razia polisi. Kamu tidak punya SIM, jadi didenda dan motornya disita.', 'A few days later, you ride out and hit a police checkpoint. You have no license, so you’re fined and the scooter is confiscated.', 'ไม่กี่วันต่อมา คุณขี่รถออกไปแล้วเจอด่านตรวจของตำรวจ คุณไม่มีใบขับขี่ เลยถูกปรับ และรถก็ถูกยึด', 'ရက်အနည်းငယ်အကြာ ဆိုင်ကယ်စီးထွက်တော့ ရဲစစ်ဆေးရေးနဲ့ တွေ့တယ်။ လိုင်စင်မရှိလို့ ဒဏ်ငွေ ဆောင်ရပြီး ဆိုင်ကယ်လည်း သိမ်းခံရတယ်။'),
  b02c: T('陳導師說明：學校規定一年級上學期不能騎機車。來台灣要住滿一百八十天才能加入健保；在那之前發生車禍，只能靠僑生保險，理賠的錢不多。', 'Thầy Trần giải thích: nhà trường quy định học kỳ 1 lớp 10 không được đi xe máy. Phải ở Đài Loan đủ 180 ngày mới được tham gia bảo hiểm y tế quốc gia; trước đó nếu gặp tai nạn chỉ có thể dựa vào bảo hiểm học sinh Hoa kiều, tiền bồi thường không nhiều.', 'Pak Chen menjelaskan: sekolah melarang naik motor di semester pertama kelas satu. Harus tinggal di Taiwan 180 hari baru bisa ikut asuransi kesehatan nasional; sebelum itu kalau kecelakaan, hanya bisa mengandalkan asuransi siswa perantauan, dan ganti ruginya tidak besar.', 'Mr. Chen explains: the school doesn’t allow first-semester first-years to ride scooters. You must live in Taiwan for 180 days before joining National Health Insurance; before that, an accident is covered only by the overseas student insurance, which doesn’t pay much.', 'ครูเฉินอธิบายว่า โรงเรียนห้ามนักเรียนปีหนึ่งเทอมแรกขี่มอเตอร์ไซค์ ต้องอยู่ไต้หวันครบ 180 วันจึงเข้าประกันสุขภาพแห่งชาติได้ ก่อนหน้านั้นถ้าเกิดอุบัติเหตุ จะมีแค่ประกันนักเรียนจีนโพ้นทะเล ซึ่งจ่ายไม่มาก', 'ဆရာချန်က ရှင်းပြတယ်- ပထမနှစ် ပထမစာသင်နှစ်ဝက်မှာ ဆိုင်ကယ်စီးခွင့် မရှိဘူး။ ထိုင်ဝမ်မှာ ရက် ၁၈၀ နေပြီးမှ အမျိုးသားကျန်းမာရေးအာမခံ ဝင်လို့ရတယ်။ အဲဒီမတိုင်ခင် မတော်တဆဖြစ်ရင် ပြည်ပကျောင်းသားအာမခံကိုပဲ အားကိုးရပြီး လျော်ကြေးက မများဘူး။'),
  r18a: T('下課後，同學騎機車來找你，要載你去夜市。你知道他還沒有考到駕照。', 'Tan học, bạn cùng lớp chạy xe máy đến tìm, muốn chở bạn đi chợ đêm. Bạn biết bạn ấy chưa có bằng lái.', 'Pulang sekolah, temanmu datang naik motor dan mau memboncengmu ke pasar malam. Kamu tahu dia belum punya SIM.', 'After class, a classmate rides up on a scooter and offers you a ride to the night market. You know he doesn’t have a license yet.', 'หลังเลิกเรียน เพื่อนขี่มอเตอร์ไซค์มาหา จะพาคุณไปตลาดกลางคืน คุณรู้ว่าเขายังไม่มีใบขับขี่', 'ကျောင်းဆင်းတော့ သူငယ်ချင်းက ဆိုင်ကယ်စီးလာပြီး ညဈေးကို လိုက်ပို့မယ်တဲ့။ သူ လိုင်စင် မရသေးဘူးဆိုတာ ခင်ဗျား သိတယ်။'),
  r18b: T('半路遇到警察臨檢。同學被罰了錢，機車也被扣了下來，你們只好走路回宿舍。', 'Giữa đường gặp cảnh sát kiểm tra. Bạn ấy bị phạt tiền, xe cũng bị giữ lại, hai bạn đành đi bộ về ký túc xá.', 'Di tengah jalan ada razia polisi. Temanmu didenda dan motornya ditahan, kalian terpaksa jalan kaki pulang ke asrama.', 'Halfway there, you hit a police checkpoint. Your classmate is fined and the scooter is impounded, so you have to walk back to the dorm.', 'ระหว่างทางเจอด่านตรวจ เพื่อนถูกปรับและรถถูกยึดไว้ พวกคุณต้องเดินกลับหอ', 'လမ်းတစ်ဝက်မှာ ရဲစစ်ဆေးရေးနဲ့ တွေ့တယ်။ သူငယ်ချင်း ဒဏ်ငွေဆောင်ရပြီး ဆိုင်ကယ်လည်း ထိန်းသိမ်းခံရလို့ အဆောင်ကို လမ်းလျှောက်ပြန်ရတယ်။'),
};
const say = (who, zh, extra = {}) => ({ say: who, zh, ...extra });
const n = (k) => ({ n: N[k] });
const LIFE = '生活中文';
const Q_DO = T('你要怎麼做？', 'Bạn nên làm gì?', 'Apa yang harus kamu lakukan?', 'What should you do?', 'คุณควรทำอย่างไร', 'ဘာလုပ်သင့်လဲ။');

const EVENTS = {
  H01: [
    { scene: 'office', npc: 'chen' },
    n('h01a'),
    say('chen', '你們在台灣住滿一百八十天了，可以加入全民健保。', { listen: 1 }),
    { q: { p: T('現在為什麼可以辦健保？', 'Tại sao bây giờ có thể làm bảo hiểm y tế?', 'Mengapa sekarang bisa mendaftar asuransi kesehatan?', 'Why can you join the health insurance now?', 'ทำไมตอนนี้ถึงทำประกันสุขภาพได้', 'အခု ဘာကြောင့် ကျန်းမာရေးအာမခံ လုပ်လို့ရတာလဲ။'), src: LIFE, kind: 'listen', opts: [
      { zh: '住滿一百八十天了', ok: 1 }, { zh: '開始放寒假了' }, { zh: '考完期末考了' }, { zh: '生病了' },
    ], wrong: [say('chen', '再聽一次。')], ok: [{ card: 'nhicard' }] } },
    say('chen', '有了健保卡，看病就便宜多了。'),
    { q: { p: T('有健保卡以後，看病要付多少錢？', 'Có thẻ bảo hiểm rồi, đi khám phải trả bao nhiêu?', 'Setelah punya kartu asuransi, berobat bayar berapa?', 'With the card, how much do you pay at the doctor?', 'มีบัตรประกันแล้ว ไปหาหมอต้องจ่ายเท่าไร', 'ကတ်ရပြီဆိုရင် ဆရာဝန်ပြတာ ဘယ်လောက်ပေးရလဲ။'), src: LIFE, opts: [
      { zh: '只付掛號費和部分負擔', ok: 1 }, { zh: '全部免費', r: [say('chen', '不是全部免費喔。')] }, { zh: '全部自己付' }, { zh: '只能去大醫院看病' },
    ], wrong: [say('chen', '不太對喔。')], ok: [say('chen', '對！上次感冒的收據，記得拿去申請僑生保險。')] } },
    n('h01b'),
  ],
  // 第 1 章：學生證綁卡、坐公車（台中雙十公車）
  B01: [
    { scene: 'street', npc: 'rina' },
    n('b01a'),
    say('rina', '坐公車十公里以內不用錢，超過十公里也只要十塊。', { listen: 1 }),
    { q: { p: T('坐公車十公里以內要多少錢？', 'Đi xe buýt trong vòng mười cây số tốn bao nhiêu tiền?', 'Naik bus di bawah sepuluh kilometer bayar berapa?', 'How much is a bus ride under ten kilometers?', 'นั่งรถเมล์ไม่เกินสิบกิโลเมตรต้องจ่ายเท่าไร', 'ဘတ်စ်ကား ဆယ်ကီလိုမီတာအတွင်း စီးရင် ဘယ်လောက်ပေးရလဲ။'), src: LIFE, opts: [
      { zh: '不用錢', ok: 1 }, { zh: '十塊', r: [say('rina', '超過十公里才要十塊喔。')] }, { zh: '二十塊' }, { zh: '五十塊' },
    ], wrong: [say('rina', '再聽一次喔。')] } },
    say('rina', '上車、下車都要刷卡喔！', { listen: 1 }),
    { q: { p: T('上車和下車的時候要做什麼？', 'Khi lên xe và xuống xe phải làm gì?', 'Saat naik dan turun bus harus melakukan apa?', 'What do you do when you get on and off the bus?', 'ตอนขึ้นและลงรถต้องทำอะไร', 'ကားတက်တုန်းနဲ့ ကားဆင်းတုန်း ဘာလုပ်ရမလဲ။'), src: LIFE, opts: [
      { zh: '刷卡', ok: 1 }, { zh: '給司機錢' }, { zh: '跟司機說謝謝', r: [say('rina', '要說謝謝，也要刷卡喔！')] }, { zh: '什麼都不用做' },
    ], wrong: [say('rina', '上車和下車都要……')] } },
    n('b01b'),
    { fx: { mood: 5, aff: { rina: 1 } } },
  ],

  // 第 2 章 12 月：學長要賣二手機車（一年級上學期不能騎機車）
  B02: [
    { scene: 'campus', npc: 'xuezhang' },
    n('b02a'),
    say('xuezhang', '騎機車很方便，去打工、去玩都很快！'),
    { q: { p: Q_DO, src: LIFE, opts: [
      { zh: '我沒有駕照，不能騎。', ok: 1, then: [say('xuezhang', '……也對啦。'), { fx: { mood: 3 } }] },
      { zh: '我先問陳導師。', ok: 1, then: [{ scene: 'office', npc: 'chen' }, say('chen', '問得好！一年級上學期，學校規定不能騎機車。'), { n: N.b02c }, say('chen', '要出門，就坐公車吧！'), { fx: { aff: { chen: 1 } } }] },
      { zh: '好，我買！', end: 1, r: [{ fx: { money: -8000 } }, { scene: 'street', npc: null }, n('b02b'), { fx: { money: -3000, mood: -20 } },
        { scene: 'office', npc: 'chen' },
        say('chen', '沒有駕照不能騎車。被警察查到，要罰錢，車子也會被沒收。'),
        { n: N.b02c },
        { q: { p: T('為什麼一年級上學期不能騎機車？', 'Tại sao học kỳ 1 lớp 10 không được đi xe máy?', 'Mengapa semester pertama kelas satu tidak boleh naik motor?', 'Why can’t first-semester first-years ride scooters?', 'ทำไมปีหนึ่งเทอมแรกห้ามขี่มอเตอร์ไซค์', 'ပထမနှစ် ပထမစာသင်နှစ်ဝက်မှာ ဘာကြောင့် ဆိုင်ကယ် မစီးရတာလဲ။'), src: LIFE, opts: [
          { zh: '沒有駕照，也還沒有健保', ok: 1 }, { zh: '因為機車太貴' }, { zh: '因為公車比較快' }, { zh: '因為常常下雨' },
        ], wrong: [say('chen', '想想看，被警察查到會怎麼樣？受傷了怎麼辦？')], ok: [say('chen', '對。要出門就坐公車，學生坐公車很便宜。')] } }] },
      { zh: '我先騎騎看。', r: [say('xuezhang', '你有駕照嗎？')] },
    ], wrong: [say('xuezhang', '你想清楚喔。')], ok: [] } },
  ],

  // 第 8 章隨機：同學無照騎車要載你
  R18: [
    { scene: 'street', npc: 'tongxue' },
    n('r18a'),
    say('tongxue', '上來吧！騎機車比較快，我載你。'),
    { q: { p: Q_DO, src: LIFE, opts: [
      { zh: '你沒有駕照，我們坐公車去吧。', ok: 1, then: [say('tongxue', '……好啦，坐公車也只要十塊。'), { fx: { mood: 3 } }] },
      { zh: '不用了，萬一出意外，保險不一定會賠。', ok: 1, then: [say('tongxue', '你說得對，我還是先去考駕照吧。'), { fx: { pop: 2 } }] },
      { zh: '好啊，走吧！', end: 1, r: [n('r18b'), { fx: { mood: -10, hp: -10 } },
        { scene: 'office', npc: 'chen' },
        say('chen', '同學沒有駕照，就要拒絕坐他的車。萬一發生意外，你們兩個都會受傷，保險也不一定會給付。'),
        { q: { p: T('沒有駕照的同學要載你，你要怎麼做？', 'Bạn chưa có bằng lái muốn chở bạn, bạn nên làm gì?', 'Teman tanpa SIM mau memboncengmu, apa yang harus kamu lakukan?', 'A classmate without a license offers you a ride. What should you do?', 'เพื่อนที่ไม่มีใบขับขี่จะขี่รถพาคุณไป คุณควรทำอย่างไร', 'လိုင်စင်မရှိတဲ့ သူငယ်ချင်းက လိုက်ပို့မယ်ဆိုရင် ဘာလုပ်သင့်လဲ။'), src: LIFE, opts: [
          { zh: '拒絕，改坐公車', ok: 1 }, { zh: '戴好安全帽就可以' }, { zh: '叫他騎慢一點' }, { zh: '晚上再騎' },
        ], wrong: [say('chen', '不對喔，再想一次。')], ok: [say('chen', '對，安全最重要。')] } }] },
      { zh: '我不戴安全帽也沒關係。', r: [say('tongxue', '……這樣更危險吧。')] },
    ], wrong: [say('tongxue', '你覺得呢？')], ok: [] } },
  ],
};

module.exports = { N, EVENTS };

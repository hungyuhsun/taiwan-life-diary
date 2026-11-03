// 小遊戲資料：垃圾分類（打掃房間）、夜市點餐（逛夜市）、詞語翻牌（自己複習）、便利商店結帳（去便利商店）、搭公車（出去玩、隨機事件）。
// zh 句子在建置時加上拼音；{n}、{order}、{pay}、{stop} 在遊戲中代換。tr 的高棉文放在 i18n/km.json。
const tr = {
  trash: {vi:'Phân loại rác: chạm vào đúng thùng rác.',id:'Pilah sampah: ketuk tempat sampah yang benar.',en:'Sort the trash: tap the right bin.',th:'แยกขยะ: แตะถังที่ถูกต้อง',my:'အမှိုက်ခွဲပါ- မှန်တဲ့ အမှိုက်ပုံးကို နှိပ်ပါ။'},
  market: {vi:'Nghe xem bạn muốn mua gì, chọn món rồi trả đúng số tiền.',id:'Dengarkan pesanannya, pilih makanannya, lalu bayar uang pas.',en:'Listen to the order, pick the food, then pay the exact amount.',th:'ฟังว่าเพื่อนอยากกินอะไร เลือกอาหาร แล้วจ่ายเงินให้พอดี',my:'ဘာမှာလဲ နားထောင်ပြီး အစားအစာရွေး၊ ငွေကို အတိအကျ ပေးပါ။'},
  pay: {vi:'Tổng cộng bao nhiêu? Trả đúng số tiền.',id:'Totalnya berapa? Bayar uang pas.',en:'How much is it in total? Pay the exact amount.',th:'ทั้งหมดเท่าไร จ่ายเงินให้พอดี',my:'စုစုပေါင်း ဘယ်လောက်လဲ။ ငွေကို အတိအကျ ပေးပါ။'},
  flip: {vi:'Lật thẻ: ghép từ tiếng Trung với hình đúng.',id:'Balik kartu: pasangkan kata bahasa Mandarin dengan gambarnya.',en:'Flip the cards: match each Chinese word with its picture.',th:'เปิดไพ่: จับคู่คำภาษาจีนกับรูปภาพ',my:'ကတ်လှန်ပါ- တရုတ်စကားလုံးကို ပုံနဲ့ တွဲပါ။'},
  shop: {vi:'Nghe nhân viên hỏi gì rồi chọn câu trả lời.',id:'Dengarkan pertanyaan kasir, lalu pilih jawabanmu.',en:'Listen to the clerk and choose your answer.',th:'ฟังพนักงานถาม แล้วเลือกคำตอบ',my:'ဝန်ထမ်းမေးတာ နားထောင်ပြီး အဖြေရွေးပါ။'},
  change: {vi:'Bạn được thối lại bao nhiêu tiền?',id:'Berapa uang kembaliannya?',en:'How much change should you get?',th:'ควรได้เงินทอนเท่าไร',my:'ပြန်အမ်းငွေ ဘယ်လောက်ရသင့်လဲ။'},
  bus: {vi:'Nghe thông báo và bấm chuông xuống xe đúng trạm.',id:'Dengarkan pengumuman dan tekan bel turun di halte yang benar.',en:'Listen to the announcements and press the bell at the right stop.',th:'ฟังประกาศ แล้วกดกริ่งลงรถที่ป้ายที่ถูกต้อง',my:'ကြေညာချက်ကို နားထောင်ပြီး မှန်တဲ့ မှတ်တိုင်မှာ ဆင်းဖို့ ခေါင်းလောင်းနှိပ်ပါ။'},
  shift: {vi:'Nghe lịch làm, chọn đúng ngày và giờ.',id:'Dengarkan jadwal kerja, pilih hari dan jam yang benar.',en:'Listen to the shift, then pick the right day and time.',th:'ฟังตารางงาน แล้วเลือกวันและเวลาให้ถูก',my:'အလုပ်ချိန်ကို နားထောင်ပြီး မှန်တဲ့ နေ့နဲ့ အချိန်ကို ရွေးပါ။'},
  extra: {vi:'Học sinh mỗi tuần làm thêm tối đa 20 giờ. Có nhận thêm ca này không?',id:'Pelajar maksimal kerja 20 jam seminggu. Terima shift ini?',en:'Students may work at most 20 hours a week. Can you take this extra shift?',th:'นักเรียนทำงานได้ไม่เกินสัปดาห์ละ 20 ชั่วโมง รับกะนี้เพิ่มได้ไหม',my:'ကျောင်းသားတွေ တစ်ပတ်ကို အများဆုံး ၂၀ နာရီပဲ အလုပ်လုပ်ခွင့်ရှိတယ်။ ဒီအလုပ်ချိန် ထပ်ယူမလား။'},
  slip: {vi:'Phiếu lương có chỗ nào tính sai không? Chạm vào dòng sai.',id:'Ada angka yang salah di slip gaji? Ketuk barisnya.',en:'Is anything on the payslip wrong? Tap the wrong line.',th:'สลิปเงินเดือนมีตรงไหนคิดผิดไหม แตะบรรทัดที่ผิด',my:'လစာစာရင်းမှာ မှားနေတာ ရှိလား။ မှားတဲ့ စာကြောင်းကို နှိပ်ပါ။'},
  order: {vi:'Nghe hướng dẫn, chạm các bước theo đúng thứ tự.',id:'Dengarkan petunjuknya, ketuk langkah-langkahnya sesuai urutan.',en:'Listen to the instructions and tap the steps in the right order.',th:'ฟังคำอธิบาย แล้วแตะขั้นตอนตามลำดับให้ถูก',my:'ညွှန်ကြားချက်ကို နားထောင်ပြီး အဆင့်တွေကို အစဉ်လိုက် နှိပ်ပါ။'},
};
const bins = [['r','資源回收','♻️'],['f','廚餘','🍂'],['g','一般垃圾','🗑️']];
const trash = [
  ['寶特瓶','🧴','r',{vi:'chai nhựa',id:'botol plastik',en:'plastic bottle',th:'ขวดพลาสติก',my:'ပလတ်စတစ်ပုလင်း',km:'ដបប្លាស្ទិក'}],
  ['鋁罐','🥫','r',{vi:'lon nhôm',id:'kaleng aluminium',en:'aluminum can',th:'กระป๋องอะลูมิเนียม',my:'အလူမီနီယံဘူး',km:'កំប៉ុងអាលុយមីញ៉ូម'}],
  ['紙箱','📦','r',{vi:'thùng giấy',id:'kardus',en:'cardboard box',th:'กล่องกระดาษ',my:'စက္ကူဘူး',km:'ប្រអប់ក្រដាស'}],
  ['玻璃瓶','🍾','r',{vi:'chai thủy tinh',id:'botol kaca',en:'glass bottle',th:'ขวดแก้ว',my:'ဖန်ပုလင်း',km:'ដបកែវ'}],
  ['舊報紙','📰','r',{vi:'báo cũ',id:'koran bekas',en:'old newspaper',th:'หนังสือพิมพ์เก่า',my:'သတင်းစာဟောင်း',km:'កាសែតចាស់'}],
  ['香蕉皮','🍌','f',{vi:'vỏ chuối',id:'kulit pisang',en:'banana peel',th:'เปลือกกล้วย',my:'ငှက်ပျောသီးခွံ',km:'សំបកចេក'}],
  ['剩飯','🍚','f',{vi:'cơm thừa',id:'nasi sisa',en:'leftover rice',th:'ข้าวเหลือ',my:'ထမင်းကျန်',km:'បាយសល់'}],
  ['蘋果核','🍎','f',{vi:'lõi táo',id:'bonggol apel',en:'apple core',th:'แกนแอปเปิล',my:'ပန်းသီးအူတိုင်',km:'ស្នូលផ្លែប៉ោម'}],
  ['茶葉渣','🍵','f',{vi:'bã trà',id:'ampas teh',en:'used tea leaves',th:'กากใบชา',my:'လက်ဖက်ရွက်ဖတ်',km:'កាកស្លឹកតែ'}],
  ['用過的衛生紙','🧻','g',{vi:'giấy vệ sinh đã dùng',id:'tisu bekas',en:'used tissue',th:'ทิชชูที่ใช้แล้ว',my:'သုံးပြီးသား တစ်ရှူး',km:'ក្រដាសអនាម័យប្រើរួច'}],
  ['免洗筷','🥢','g',{vi:'đũa dùng một lần',id:'sumpit sekali pakai',en:'disposable chopsticks',th:'ตะเกียบใช้แล้วทิ้ง',my:'တစ်ခါသုံးတူ',km:'ចង្កឹះប្រើម្តង'}],
  ['口罩','😷','g',{vi:'khẩu trang',id:'masker',en:'face mask',th:'หน้ากากอนามัย',my:'နှာခေါင်းစည်း',km:'ម៉ាស'}],
  ['牙刷','🪥','g',{vi:'bàn chải đánh răng',id:'sikat gigi',en:'toothbrush',th:'แปรงสีฟัน',my:'သွားတိုက်တံ',km:'ច្រាសដុសធ្មេញ'}]];
const food = [ // 名稱、圖、價錢、量詞
  ['雞排','🍗',80,'份',{vi:'gà chiên',id:'ayam goreng',en:'fried chicken cutlet',th:'ไก่ทอด',my:'ကြက်သားကြော်',km:'មាន់បំពង'}],
  ['珍珠奶茶','🧋',60,'杯',{vi:'trà sữa trân châu',id:'bubble tea',en:'bubble tea',th:'ชานมไข่มุก',my:'ပုလဲနို့လက်ဖက်ရည်',km:'តែទឹកដោះគោគុជ'}],
  ['臭豆腐','🍢',50,'份',{vi:'đậu phụ thối',id:'tahu bau',en:'stinky tofu',th:'เต้าหู้เหม็น',my:'အနံ့ပြင်း တိုဟူး',km:'តៅហ៊ូស្អុយ'}],
  ['蚵仔煎','🍳',70,'份',{vi:'trứng chiên hàu',id:'omelet tiram',en:'oyster omelet',th:'ไข่เจียวหอยนางรม',my:'ကမာကြက်ဥကြော်',km:'ពងមាន់ចៀនគ្រុំ'}],
  ['地瓜球','🍠',30,'包',{vi:'khoai lang viên chiên',id:'bola ubi goreng',en:'sweet potato balls',th:'มันเทศทอดลูกกลม',my:'ကန်စွန်းဥလုံးကြော်',km:'ដំឡូងជ្វាលីងមូល'}],
  ['烤玉米','🌽',45,'根',{vi:'bắp nướng',id:'jagung bakar',en:'grilled corn',th:'ข้าวโพดย่าง',my:'ပြောင်းဖူးကင်',km:'ពោតអាំង'}],
  ['芒果冰','🍧',90,'碗',{vi:'đá bào xoài',id:'es serut mangga',en:'mango shaved ice',th:'น้ำแข็งไสมะม่วง',my:'သရက်သီး ရေခဲခြစ်',km:'ទឹកកកឈូសស្វាយ'}],
  ['水煎包','🥟',15,'個',{vi:'bánh bao chiên',id:'bakpao goreng',en:'pan-fried bun',th:'ซาลาเปาทอด',my:'ပေါက်စီကြော်',km:'នំប៉ាវចៀន'}]];
// 詞語翻牌：生活詞彙（中文、圖、翻譯）
const T6 = (vi, id, en, th, my, km) => ({ vi, id, en, th, my, km });
const vocab = [
  ['悠遊卡','💳',T6('thẻ EasyCard','kartu EasyCard','EasyCard','บัตร EasyCard','EasyCard ကတ်','កាត EasyCard')],
  ['雨傘','☂️',T6('cái ô','payung','umbrella','ร่ม','ထီး','ឆ័ត្រ')],
  ['安全帽','⛑️',T6('mũ bảo hiểm','helm','helmet','หมวกกันน็อก','ဦးထုပ်အကာ','មួកសុវត្ថិភាព')],
  ['護照','🛂',T6('hộ chiếu','paspor','passport','หนังสือเดินทาง','ပတ်စ်ပို့','លិខិតឆ្លងដែន')],
  ['行李箱','🧳',T6('vali','koper','suitcase','กระเป๋าเดินทาง','ခရီးဆောင်သေတ္တာ','វ៉ាលី')],
  ['飛機','✈️',T6('máy bay','pesawat','airplane','เครื่องบิน','လေယာဉ်','យន្តហោះ')],
  ['公車','🚌',T6('xe buýt','bus','bus','รถเมล์','ဘတ်စ်ကား','ឡានក្រុង')],
  ['捷運','🚇',T6('tàu điện ngầm','MRT','MRT (metro)','รถไฟฟ้า','မြေအောက်ရထား','រថភ្លើងក្រោមដី')],
  ['火車','🚆',T6('tàu hỏa','kereta api','train','รถไฟ','ရထား','រថភ្លើង')],
  ['機車','🛵',T6('xe máy','sepeda motor','scooter','มอเตอร์ไซค์','ဆိုင်ကယ်','ម៉ូតូ')],
  ['手機','📱',T6('điện thoại','ponsel','mobile phone','โทรศัพท์มือถือ','မိုဘိုင်းဖုန်း','ទូរស័ព្ទដៃ')],
  ['電腦','💻',T6('máy tính','komputer','computer','คอมพิวเตอร์','ကွန်ပျူတာ','កុំព្យូទ័រ')],
  ['書包','🎒',T6('cặp sách','tas sekolah','school bag','กระเป๋านักเรียน','ကျောင်းလွယ်အိတ်','កាបូបសាលា')],
  ['筆記本','📓',T6('quyển vở','buku catatan','notebook','สมุดโน้ต','မှတ်စုစာအုပ်','សៀវភៅកត់ត្រា')],
  ['考試','📝',T6('kỳ thi','ujian','exam','การสอบ','စာမေးပွဲ','ការប្រឡង')],
  ['醫院','🏥',T6('bệnh viện','rumah sakit','hospital','โรงพยาบาล','ဆေးရုံ','មន្ទីរពេទ្យ')],
  ['郵局','📮',T6('bưu điện','kantor pos','post office','ไปรษณีย์','စာတိုက်','ប្រៃសណីយ៍')],
  ['工廠','🏭',T6('nhà máy','pabrik','factory','โรงงาน','စက်ရုံ','រោងចក្រ')],
  ['薪水','💰',T6('tiền lương','gaji','salary','เงินเดือน','လစာ','ប្រាក់ខែ')],
  ['紅包','🧧',T6('lì xì','angpao','red envelope','อั่งเปา','အနီရောင် ငွေစာအိတ်','អាំងប៉ាវ')],
  ['月餅','🥮',T6('bánh trung thu','kue bulan','mooncake','ขนมไหว้พระจันทร์','လမုန့်','នំព្រះខែ')],
  ['燈籠','🏮',T6('đèn lồng','lampion','lantern','โคมไฟ','မီးအိမ်','គោម')],
  ['颱風','🌀',T6('bão','topan','typhoon','ไต้ฝุ่น','တိုင်ဖွန်း မုန်တိုင်း','ព្យុះទីហ្វុង')],
  ['鬧鐘','⏰',T6('đồng hồ báo thức','jam weker','alarm clock','นาฬิกาปลุก','နှိုးစက်နာရီ','នាឡិការោទ៍')]];
// 便利商店：商品（名稱、圖、價錢、翻譯）和店員會問的話（問題、翻譯、對的回答、兩個錯的回答、要有哪個商品才問）
const goods = [
  ['飯糰','🍙',30,T6('cơm nắm','nasi kepal','rice ball','ข้าวปั้น','ထမင်းလုံး','បាយដុំ')],
  ['茶葉蛋','🥚',13,T6('trứng luộc trà','telur teh','tea egg','ไข่ต้มใบชา','လက်ဖက်ရည် ကြက်ဥပြုတ်','ពងមាន់ស្ងោរតែ')],
  ['礦泉水','💧',20,T6('nước khoáng','air mineral','bottled water','น้ำแร่','သောက်ရေသန့်','ទឹកសុទ្ធ')],
  ['便當','🍱',79,T6('cơm hộp','nasi kotak','boxed meal','ข้าวกล่อง','ထမင်းဘူး','បាយប្រអប់')],
  ['牛奶','🥛',35,T6('sữa','susu','milk','นม','နွားနို့','ទឹកដោះគោ')],
  ['麵包','🍞',39,T6('bánh mì','roti','bread','ขนมปัง','ပေါင်မုန့်','នំបុ័ង')],
  ['泡麵','🍜',25,T6('mì gói','mi instan','instant noodles','บะหมี่กึ่งสำเร็จรูป','ခေါက်ဆွဲခြောက်','មីកញ្ចប់')]];
const clerkQ = [
  ['需要袋子嗎？一個兩塊。', T6('Bạn cần túi không? Hai đồng một cái.','Perlu kantong? Dua dolar satu.','Do you need a bag? It’s two dollars.','ต้องการถุงไหม ใบละสองเหรียญ','အိတ်လိုလား။ တစ်လုံး နှစ်ဒေါ်လာပါ။','ត្រូវការថង់ទេ? មួយពីរដុល្លារ។'), '不用，謝謝。', ['我要熱的。','在三樓。'], null],
  ['便當要不要加熱？', T6('Có cần hâm nóng cơm hộp không?','Nasi kotaknya mau dipanaskan?','Shall I heat up the boxed meal?','ข้าวกล่องจะอุ่นไหม','ထမင်းဘူး အပူပေးမလား။','ត្រូវការកម្តៅបាយប្រអប់ទេ?'), '要，麻煩你。', ['我沒有會員。','兩個。'], '便當'],
  ['有會員嗎？', T6('Bạn có thẻ thành viên không?','Punya kartu member?','Are you a member?','เป็นสมาชิกไหม','အသင်းဝင်ကတ် ရှိလား။','មានកាតសមាជិកទេ?'), '沒有。', ['不用加熱。','我要大杯。'], null],
  ['發票要存載具嗎？', T6('Hóa đơn có lưu vào điện thoại không?','Struknya mau disimpan di ponsel?','Do you want your receipt saved on your phone?','ใบเสร็จจะเก็บไว้ในมือถือไหม','ဖြတ်ပိုင်းကို ဖုန်းထဲ သိမ်းမလား။','ចង់រក្សាវិក្កយបត្រក្នុងទូរស័ព្ទទេ?'), '不用，給我紙本就好。', ['要加熱。','我要買泡麵。'], null],
  ['你要刷悠遊卡還是付現金？', T6('Bạn quẹt thẻ EasyCard hay trả tiền mặt?','Mau pakai EasyCard atau tunai?','EasyCard or cash?','จะจ่ายด้วยบัตร EasyCard หรือเงินสด','EasyCard နဲ့ ပေးမလား၊ ငွေသားနဲ့ ပေးမလား။','បង់ដោយកាត EasyCard ឬសាច់ប្រាក់?'), '付現金。', ['我要袋子。','不好意思，在哪裡？'], null]];
// 搭公車：台中市區的站名（依路線順序）
const stops = ['台中車站','自由路','台中公園','中友百貨','科博館','勤美誠品','國美館','忠明國小','五權路口'];
const lines = {
  trashHead: '垃圾分類：把垃圾丟到對的桶子。',
  trashAll: '全部都對！房間和垃圾桶都很乾淨。',
  trashSome: '答對 {n} 題。垃圾倒好了，下次再更好！',
  marketHead: '夜市點餐：聽聽看阿蜜要吃什麼。',
  ask: '阿蜜：「我要{order}。」',
  wrongOrder: '阿蜜：「不對啦，我要的是{order}。」',
  payHead: '黃老闆：「一共多少錢？」',
  tooMuch: '黃老闆：「你給太多了！一共 {n} 塊。」',
  tooLittle: '黃老闆：「還不夠喔，一共 {n} 塊。」',
  perfect: '黃老闆：「剛好！你中文很好喔，下次再來！」',
  thanks: '黃老闆：「謝謝！下次再來喔！」',
  flipHead: '詞語翻牌：把中文和圖片配成一對。',
  flipDone: '全部配對完成！你翻了 {n} 次。',
  shopHead: '便利商店結帳：聽店員說什麼。',
  changeQ: '你給店員 {pay} 元，店員要找你多少錢？',
  changeOk: '店員：「找你 {n} 元，謝謝光臨！」',
  changeNo: '店員：「不對喔，找你 {n} 元。謝謝光臨！」',
  busHead: '搭公車：聽廣播，在對的站按下車鈴。',
  busGoal: '你要在「{stop}」下車。',
  busNext: '下一站，{stop}。',
  busOk: '叮咚！你在{stop}下車了，剛剛好！',
  busEarly: '太早下車了！這裡是{stop}，還要再走一段路。',
  busLate: '過站了！你要去的是{stop}，只好走回去。',
  shiftHead: '打工排班：聽小陽說下個星期的班。',
  shiftSay: '{day}，{time}。',
  shiftDay: '是星期幾？',
  shiftTime: '幾點到幾點？',
  shiftAsk: '小陽：「{day}{time}，還可以再來嗎？」',
  shiftYes: '可以，沒問題。',
  shiftNo: '不行，這樣會超過二十個小時。',
  shiftOk: '小陽：「好，班表排好了。這個星期一共 {n} 個小時。」',
  shiftOver: '小陽：「等一下，這樣超過二十個小時了。學生不可以喔！」',
  shiftMiss: '小陽：「其實還可以啦，加起來沒有超過二十個小時。」',
  slipHead: '薪水單：看看有沒有算錯。',
  slipAllOk: '都對',
  slipFound: '會計：「真的耶，算錯了！謝謝你，我馬上改。」',
  slipFine: '會計：「對，這張薪水單沒有問題。」',
  slipMissed: '會計：「這一行算錯了，我幫你改好了。」',
  slipWrongTap: '會計：「這一行沒有錯喔。」',
  orderHead: '照順序做：{title}',
  orderDone: '做好了！順序都對。',
  orderSome: '做好了！錯了 {n} 次，下次會更熟。',
};
// 打工排班：星期、時段（說法、時鐘、時數、容易聽錯的上午時間）
const weekdays = ['星期一','星期二','星期三','星期四','星期五','星期六','星期日'];
const shifts = [
  ['早上八點到中午十二點','08:00–12:00',4,null],
  ['早上九點半到下午一點半','09:30–13:30',4,'21:30–01:30'],
  ['下午一點半到五點半','13:30–17:30',4,'01:30–05:30'],
  ['下午兩點到晚上八點','14:00–20:00',6,'02:00–08:00'],
  ['下午五點到晚上十點','17:00–22:00',5,'05:00–10:00'],
  ['晚上六點到十點','18:00–22:00',4,'06:00–10:00']];
// 薪水單的項目（中文、翻譯）
const slipRows = {
  intern: ['實習薪資', T6('Lương thực tập','Gaji magang','Internship pay','ค่าจ้างฝึกงาน','အလုပ်သင်လစာ','ប្រាក់ខែកម្មសិក្សា')],
  part: ['打工', T6('Làm thêm','Kerja paruh waktu','Part-time job','งานพาร์ตไทม์','အချိန်ပိုင်းအလုပ်','ការងារក្រៅម៉ោង')],
  gross: ['應領金額', T6('Lương gộp','Bruto','Gross pay','ยอดรวม','စုစုပေါင်း','ប្រាក់ខែសរុប')],
  labor: ['勞保', T6('BH lao động','BPJS Ketenagakerjaan','Labor insurance','ประกันแรงงาน','လုပ်သားအာမခံ','ធានារ៉ាប់រងការងារ')],
  health: ['健保', T6('BH y tế','BPJS Kesehatan','National health insurance','ประกันสุขภาพ','ကျန်းမာရေးအာမခံ','ធានារ៉ាប់រងសុខភាព')],
  ded: ['扣款合計', T6('Tổng khấu trừ','Total potongan','Total deductions','รวมรายการหัก','နုတ်ငွေ စုစုပေါင်း','សរុបការកាត់')],
  net: ['實領金額', T6('Thực nhận','Diterima','Net pay','รับจริง','အသားတင်','ប្រាក់ទទួលបានពិត')]};
// 照順序做：節日（中秋烤肉、春節、端午、冬至）和實習（依科別，順序和 dept 一樣）。
// 每組四個步驟，說的人會用「先……，再……，然後……，最後……。」說明。
// 實習的步驟是一般工作流程，各科老師可以換成實際的內容。
const S = (zh, vi, id, en, th, my, km) => [zh, T6(vi, id, en, th, my, km)];
const orders = {
  bbq: { who: 'ajiao', scene: 'bbq', title: '中秋烤肉', steps: [
    S('生火','nhóm lửa','menyalakan api','light the fire','จุดไฟ','မီးမွှေး','បង្កាត់ភ្លើង'),
    S('把肉放在烤肉架上','đặt thịt lên vỉ nướng','menaruh daging di panggangan','put the meat on the grill','วางเนื้อบนตะแกรงปิ้ง','အသားကို ကင်စင်ပေါ် တင်','ដាក់សាច់លើចង្រ្កានអាំង'),
    S('翻面','lật mặt','membalik','turn it over','พลิกด้าน','လှန်','ត្រឡប់'),
    S('刷烤肉醬','phết nước sốt nướng','mengoles saus barbeku','brush on barbecue sauce','ทาซอสบาร์บีคิว','အသားကင်ဆော့စ် သုတ်','លាបទឹកជ្រលក់អាំង')] },
  newyear: { who: 'ajiao', scene: 'dorm', title: '過年', steps: [
    S('大掃除','tổng vệ sinh','bersih-bersih besar','do a big cleaning','ทำความสะอาดครั้งใหญ่','သန့်ရှင်းရေး အကြီးလုပ်','សម្អាតធំ'),
    S('貼春聯','dán câu đối Tết','menempel kuplet Imlek','put up spring couplets','ติดกลอนคู่ตรุษจีน','နှစ်သစ်ကဗျာ စာတန်း ကပ်','បិទស្លាកអក្សរចូលឆ្នាំ'),
    S('吃年夜飯','ăn cơm tất niên','makan malam tahun baru','eat the New Year’s Eve dinner','กินอาหารคืนส่งท้ายปี','နှစ်ကုန်ည ညစာစား','ញ៉ាំអាហារល្ងាចចូលឆ្នាំ'),
    S('領紅包','nhận lì xì','menerima angpao','receive red envelopes','รับอั่งเปา','အနီရောင် ငွေစာအိတ် ယူ','ទទួលអាំងប៉ាវ')] },
  zongzi: { who: 'chen', scene: 'river', title: '包粽子', steps: [
    S('洗粽葉','rửa lá gói bánh','mencuci daun bambu','wash the bamboo leaves','ล้างใบไผ่','ဝါးရွက်ဆေး','លាងស្លឹកខ្ចប់'),
    S('放糯米和肉','cho gạo nếp và thịt vào','memasukkan ketan dan daging','add sticky rice and meat','ใส่ข้าวเหนียวกับเนื้อ','ကောက်ညှင်းနဲ့ အသား ထည့်','ដាក់អង្ករដំណើបនិងសាច់'),
    S('用繩子綁好','buộc lại bằng dây','mengikat dengan tali','tie it with string','มัดด้วยเชือก','ကြိုးနဲ့ ချည်','ចងនឹងខ្សែ'),
    S('放進鍋子裡蒸','cho vào nồi hấp','mengukus di panci','steam it in the pot','ใส่หม้อนึ่ง','အိုးထဲထည့်ပြီး ပေါင်း','ដាក់ក្នុងឆ្នាំងចំហុយ')] },
  tangyuan: { who: 'ayi', scene: 'dorm', title: '煮湯圓', steps: [
    S('在糯米粉裡加水','thêm nước vào bột nếp','menambahkan air ke tepung ketan','add water to the rice flour','เติมน้ำลงในแป้งข้าวเหนียว','ကောက်ညှင်းမှုန့်ထဲ ရေထည့်','ដាក់ទឹកក្នុងម្សៅដំណើប'),
    S('搓成小圓球','vo thành viên tròn nhỏ','membentuk bola kecil','roll into small balls','ปั้นเป็นลูกกลมเล็ก','အလုံးလေးတွေ လုံး','សូនជាគ្រាប់មូលតូចៗ'),
    S('水滾了放湯圓','nước sôi thì thả viên vào','masukkan saat air mendidih','put them in when the water boils','น้ำเดือดแล้วใส่บัวลอย','ရေဆူရင် အလုံးတွေထည့်','ទឹកពុះហើយដាក់នំ'),
    S('浮起來就撈起來','nổi lên thì vớt ra','angkat setelah mengapung','scoop them out when they float','ลอยขึ้นมาแล้วตักขึ้น','ပေါ်လာရင် ဆယ်ယူ','អណ្តែតឡើងហើយដួសឡើង')] },
  work0: { who: 'zhang', scene: 'work', title: '電腦公司', steps: [
    S('戴上工作證','đeo thẻ nhân viên','memakai kartu kerja','put on your work badge','ห้อยบัตรพนักงาน','အလုပ်ကတ် ဆွဲ','ពាក់កាតការងារ'),
    S('打開電腦','bật máy tính','menyalakan komputer','turn on the computer','เปิดคอมพิวเตอร์','ကွန်ပျူတာဖွင့်','បើកកុំព្យូទ័រ'),
    S('看今天的工作單','xem phiếu công việc hôm nay','melihat daftar kerja hari ini','check today’s work order','ดูใบงานวันนี้','ဒီနေ့ အလုပ်စာရင်း ကြည့်','មើលបញ្ជីការងារថ្ងៃនេះ'),
    S('把做好的檔案存起來','lưu tệp đã làm xong','menyimpan file yang sudah selesai','save the finished file','บันทึกไฟล์ที่ทำเสร็จ','ပြီးတဲ့ ဖိုင်ကို သိမ်း','រក្សាទុកឯកសារដែលធ្វើរួច')] },
  work1: { who: 'zhang', scene: 'work', title: '麵包工廠', steps: [
    S('戴上口罩和帽子','đeo khẩu trang và mũ','memakai masker dan topi','put on a mask and cap','ใส่หน้ากากและหมวก','နှာခေါင်းစည်းနဲ့ ဦးထုပ် ဆောင်း','ពាក់ម៉ាសនិងមួក'),
    S('洗手','rửa tay','mencuci tangan','wash your hands','ล้างมือ','လက်ဆေး','លាងដៃ'),
    S('秤材料','cân nguyên liệu','menimbang bahan','weigh the ingredients','ชั่งวัตถุดิบ','ပစ္စည်းတွေ ချိန်','ថ្លឹងគ្រឿងផ្សំ'),
    S('攪拌麵團','nhào bột','mengaduk adonan','mix the dough','นวดแป้ง','မုန့်စိမ်း မွှေ','ច្របល់ម្សៅ')] },
  work2: { who: 'zhang', scene: 'work', title: '餐廳廚房', steps: [
    S('戴上口罩和帽子','đeo khẩu trang và mũ','memakai masker dan topi','put on a mask and cap','ใส่หน้ากากและหมวก','နှာခေါင်းစည်းနဲ့ ဦးထုပ် ဆောင်း','ពាក់ម៉ាសនិងមួក'),
    S('洗手','rửa tay','mencuci tangan','wash your hands','ล้างมือ','လက်ဆေး','លាងដៃ'),
    S('洗菜','rửa rau','mencuci sayur','wash the vegetables','ล้างผัก','ဟင်းသီးဟင်းရွက်ဆေး','លាងបន្លែ'),
    S('切菜','cắt rau','memotong sayur','cut the vegetables','หั่นผัก','ဟင်းသီးဟင်းရွက်လှီး','ហាន់បន្លែ')] },
  work3: { who: 'zhang', scene: 'work', title: '修車廠', steps: [
    S('換上工作服','thay đồ bảo hộ','mengganti baju kerja','change into work clothes','เปลี่ยนชุดทำงาน','အလုပ်ဝတ်စုံ လဲ','ផ្លាស់សម្លៀកបំពាក់ការងារ'),
    S('把車子升起來','nâng xe lên','mengangkat mobil','lift the car up','ยกรถขึ้น','ကားကို မြှင့်','លើកឡានឡើង'),
    S('檢查輪胎','kiểm tra lốp xe','memeriksa ban','check the tires','ตรวจยาง','ဘီးစစ်','ពិនិត្យកង់'),
    S('用扳手換輪胎','dùng cờ lê thay lốp','mengganti ban dengan kunci','change the tire with a wrench','ใช้ประแจเปลี่ยนยาง','ဂွနဲ့ ဘီးလဲ','ប្រើម៉ាឡេតដូរកង់')] },
  work4: { who: 'zhang', scene: 'work', title: '貿易公司', steps: [
    S('戴上工作證','đeo thẻ nhân viên','memakai kartu kerja','put on your work badge','ห้อยบัตรพนักงาน','အလုပ်ကတ် ဆွဲ','ពាក់កាតការងារ'),
    S('收電子郵件','kiểm tra email','memeriksa email','check your email','เช็กอีเมล','အီးမေးလ် စစ်','ពិនិត្យអ៊ីមែល'),
    S('整理訂單','sắp xếp đơn hàng','merapikan pesanan','sort the orders','จัดเรียงใบสั่งซื้อ','မှာစာတွေ စီ','រៀបចំការបញ្ជាទិញ'),
    S('做報價單','làm bảng báo giá','membuat penawaran harga','make a price quote','ทำใบเสนอราคา','ဈေးနှုန်းစာရင်း လုပ်','ធ្វើតារាងតម្លៃ')] },
};
const orderSay = st => '先' + st[0][0] + '，再' + st[1][0] + '，然後' + st[2][0] + '，最後' + st[3][0] + '。';
for (const o of Object.values(orders)) o.say = orderSay(o.steps);

// 點餐用的詞組（數量＋量詞＋食物），建置時各自加上拼音
const phrases = food.flatMap(([zh, , , m]) => ['一' + m + zh, '兩' + m + zh]);

// 隨機事件：搭公車（各年級各一個，放在 RND 事件池）
const bus = [{ scene: 'street', npc: null }, { mini: 'bus' }];
const EVENTS = { MB1: bus, MB2: bus, MB3: bus };

// 節日小遊戲接在節日事件的最後（M04 中秋、F01 春節、E06 端午、V08 冬至）
module.exports = { MINI: { tr, bins, trash, food, vocab, goods, clerkQ, stops, lines, phrases, weekdays, shifts, slipRows, orders }, EVENTS };

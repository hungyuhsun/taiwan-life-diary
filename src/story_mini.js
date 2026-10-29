// 小遊戲資料：垃圾分類（打掃房間時玩）、夜市點餐（逛夜市時玩）。
// zh 句子在建置時加上拼音；{n}、{order}、{bin} 在遊戲中代換。tr 的高棉文放在 i18n/km.json。
const tr = {
  trash: {vi:'Phân loại rác: chạm vào đúng thùng rác.',id:'Pilah sampah: ketuk tempat sampah yang benar.',en:'Sort the trash: tap the right bin.',th:'แยกขยะ: แตะถังที่ถูกต้อง',my:'အမှိုက်ခွဲပါ- မှန်တဲ့ အမှိုက်ပုံးကို နှိပ်ပါ။'},
  market: {vi:'Nghe xem bạn muốn mua gì, chọn món rồi trả đúng số tiền.',id:'Dengarkan pesanannya, pilih makanannya, lalu bayar uang pas.',en:'Listen to the order, pick the food, then pay the exact amount.',th:'ฟังว่าเพื่อนอยากกินอะไร เลือกอาหาร แล้วจ่ายเงินให้พอดี',my:'ဘာမှာလဲ နားထောင်ပြီး အစားအစာရွေး၊ ငွေကို အတိအကျ ပေးပါ။'},
  pay: {vi:'Tổng cộng bao nhiêu? Trả đúng số tiền.',id:'Totalnya berapa? Bayar uang pas.',en:'How much is it in total? Pay the exact amount.',th:'ทั้งหมดเท่าไร จ่ายเงินให้พอดี',my:'စုစုပေါင်း ဘယ်လောက်လဲ။ ငွေကို အတိအကျ ပေးပါ။'},
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
};
// 點餐用的詞組（數量＋量詞＋食物），建置時各自加上拼音
const phrases = food.flatMap(([zh, , , m]) => ['一' + m + zh, '兩' + m + zh]);

module.exports = { MINI: { tr, bins, trash, food, lines, phrases } };

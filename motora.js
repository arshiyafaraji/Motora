window.MOTORA_PAYMENT={bank:"نام بانک را از تنظیمات وارد کنید",card:"شماره کارت در تنظیمات بک‌اند",owner:"نام صاحب کارت"};window.MOTORA_CONTENT={bikes:null,blog:null,gallery:null,testimonials:null,faqs:null,settings:{}};

window.MOTORA_PAYMENT = window.MOTORA_PAYMENT;window.MOTORA_CONTENT = window.MOTORA_CONTENT;
document.addEventListener('DOMContentLoaded',()=>{const s=window.MOTORA_CONTENT.settings||{};if(s.site_name)document.title=s.site_name+' | موتورسیکلت‌های لوکس و اسپرت';const h=document.querySelector('.hero-content h1');if(h&&s.hero_title)h.textContent=s.hero_title;const sub=document.querySelector('.hero-content .lead');if(sub&&s.hero_subtitle)sub.textContent=s.hero_subtitle;const infos=document.querySelectorAll('.contact-info .cinfo');const vals=[s.phone,s.email,s.address,s.working_hours];infos.forEach((el,i)=>{if(vals[i]){const target=el.querySelector('span');if(target)target.textContent=vals[i];}});const foot=document.querySelector('.foot-brand p');if(foot&&s.footer_text)foot.textContent=s.footer_text;const socials=document.querySelectorAll('.foot-social a');if(s.instagram&&socials[0])socials[0].href=s.instagram;if(s.telegram&&socials[3])socials[3].href=s.telegram;
// Apply the editable brand name everywhere in visible copy, including dynamically rendered routes/cards.
const brand=(s.site_name||'').trim();if(brand){const replaceBrand=root=>{const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let node;while((node=walker.nextNode())){if(node.parentElement&&/^(SCRIPT|STYLE|NOSCRIPT)$/.test(node.parentElement.tagName))continue;if(node.nodeValue.includes('MOTORA'))node.nodeValue=node.nodeValue.replace(/MOTORA/g,brand);}root.querySelectorAll('*').forEach(el=>{for(const attr of ['aria-label','title','alt']){const v=el.getAttribute(attr);if(v&&v.includes('MOTORA'))el.setAttribute(attr,v.replace(/MOTORA/g,brand));}});};replaceBrand(document.body);const observer=new MutationObserver(records=>records.forEach(r=>r.addedNodes.forEach(n=>{if(n.nodeType===Node.TEXT_NODE){if(n.nodeValue.includes('MOTORA'))n.nodeValue=n.nodeValue.replace(/MOTORA/g,brand);}else if(n.nodeType===Node.ELEMENT_NODE)replaceBrand(n);})));observer.observe(document.body,{childList:true,subtree:true});document.querySelectorAll('meta[property="og:site_name"],meta[property="og:title"],meta[name="twitter:title"]').forEach(m=>{if(m.content.includes('MOTORA'))m.content=m.content.replace(/MOTORA/g,brand);});}
});


/* ============================================================
   DATA
   ============================================================ */
const IMG = {
  hero:      'https://unsplash.com/photos/0g1s4v_CpXY/download?w=1920&q=80',
  nero:      'https://unsplash.com/photos/dEywIWIJbas/download?w=1200&q=80',
  titan:     'https://unsplash.com/photos/MtEvj9s7PQU/download?w=1200&q=80',
  vortex:    'https://unsplash.com/photos/jco-JXGIuKk/download?w=1200&q=80',
  phantom:   'https://unsplash.com/photos/gUzr3I3h864/download?w=1200&q=80',
  blaze:     'https://unsplash.com/photos/yzJTUBP6ec0/download?w=1200&q=80',
  shadow:    'https://unsplash.com/photos/qgtbI31XxsI/download?w=1200&q=80',
  road:      'https://unsplash.com/photos/AJVaur563B0/download?w=1600&q=80',
  curvy:     'https://unsplash.com/photos/6Yn9rACAMRo/download?w=1600&q=80',
  highway:   'https://unsplash.com/photos/0g1s4v_CpXY/download?w=1600&q=80'
};

const PLACEHOLDER = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1a1d26"/><stop offset="1" stop-color="#0a0d14"/></linearGradient></defs><rect width="800" height="600" fill="url(#g)"/><text x="400" y="310" font-family="Arial" font-size="40" font-weight="900" fill="#ff3d1f" text-anchor="middle" letter-spacing="6">MOTORA</text></svg>'
);

const CAT = { sport:'اسپرت', naked:'نیکد', track:'پیست', cruiser:'کروزر' };

const BIKES = (window.MOTORA_CONTENT && window.MOTORA_CONTENT.bikes && window.MOTORA_CONTENT.bikes.length) ? window.MOTORA_CONTENT.bikes : [
  {
    id:'nero-r', name:'NERO R', cat:'sport', badge:'NEW', price:485, stock:3,
    cc:999, power:214, speed:299, accel:2.9, torque:118, weight:175,
    img:IMG.nero, tagline:'اسپرت‌تیونینگ با تکنولوژی مستقیم از MotoGP',
    desc:'سبک، تیز و بی‌رحم روی پیست. NERO R با شاسی آلومینیومی و الکترونیک نسل جدید، مرز بین موتور جاده و پیست را از بین می‌برد.',
    colors:[['#ff3d1f','قرمز آتشین'],['#1a1a1a','مشکی مات'],['#e8e8e8','سفید صدفی'],['#9aa0a8','نقره‌ای']],
    features:['کنترل کشش ۶ حالته','کوییک‌شیفتر دوطرفه','ترمز ABS کورنرینگ','داشبورد TFT ۵ اینچ','حالت‌های رانندگی قابل تنظیم','تعلیق الکترونیکی Öhlins']
  },
  {
    id:'titan-x', name:'TITAN X', cat:'naked', badge:'LIMITED', price:610, stock:2,
    cc:1200, power:208, speed:280, accel:3.1, torque:130, weight:190,
    img:IMG.titan, tagline:'هایپرنیکد با طراحی تهاجمی',
    desc:'موتوری که هر پیچ را به یک نمایش تبدیل می‌کند. TITAN X با گشتاور عظیم و ارگونومی خیابانی، سلطان نیکدهای مدرن است.',
    colors:[['#ff3d1f','قرمز آتشین'],['#1a1a1a','مشکی مات'],['#2d4a6b','آبی شب']],
    features:['موتور V4 ۱۲۰۰ سی‌سی','کلاچ لغزشی','حالت‌های Urban / Sport / Track','چراغ LED ماتریسی','سیستم صوتی بلوتوث','تعلیق نیمه‌فعال']
  },
  {
    id:'vortex-rs', name:'VORTEX RS', cat:'track', badge:'TRACK', price:390, stock:1,
    cc:765, power:165, speed:270, accel:3.3, torque:88, weight:160,
    img:IMG.vortex, tagline:'پیست‌محور با آیرودینامیک پیشرفته',
    desc:'ساخته‌شده برای زمان‌گیری. VORTEX RS با بال‌های آیرودینامیکی، شاسی سبک و تنظیمات کاملاً قابل شخصی‌سازی، ابزار دقیق پیست است.',
    colors:[['#00d4ff','آبی یخی'],['#1a1a1a','مشکی مات'],['#a6ff00','سبز سمی']],
    features:['بال‌های آیرودینامیکی کربنی','شاسی فولاد کرومولی سبک','اگزوز تیتانیومی مسابقه‌ای','کوییک‌شیفتر','لاگ‌بوک دیجیتال','وزن ۱۶۰ کیلوگرم']
  },
  {
    id:'phantom-s', name:'PHANTOM S', cat:'cruiser', badge:'', price:445, stock:4,
    cc:1140, power:150, speed:230, accel:3.8, torque:145, weight:215,
    img:IMG.phantom, tagline:'کروزر لوکس برای سفرهای طولانی',
    desc:'راحتی، شکوه و گشتاور بی‌پایان. PHANTOM S با صندلی چرمی، سیستم صوتی پریمیوم و تعلیق نرم، جاده را به خانه دوم تبدیل می‌کند.',
    colors:[['#1a1a1a','مشکی مات'],['#6b2d2d','قرمز شرابی'],['#c9a227','طلایی']],
    features:['موتور V-Twin ۱۱۴۰ سی‌سی','صندلی چرمی دوخته‌شده','سیستم صوتی ۴ بلندگو','کروز کنترل','کیسه‌های چرمی جانبی','تعلیق بادی']
  },
  {
    id:'blaze-900', name:'BLAZE 900', cat:'sport', badge:'', price:420, stock:5,
    cc:890, power:180, speed:285, accel:3.0, torque:100, weight:168,
    img:IMG.blaze, tagline:'اسپرت میان‌رده با تعادل عالی',
    desc:'بین عملکرد روزمره و هیجان پیست. BLAZE 900 با موتور سه‌سیلندر و ارگونومی هوشمند، انتخاب اول riders شهری است.',
    colors:[['#ff3d1f','قرمز آتشین'],['#1a1a1a','مشکی مات'],['#e8e8e8','سفید صدفی']],
    features:['موتور سه‌سیلندر ۸۹۰ سی‌سی','کوییک‌شیفتر','حالت‌های رانندگی','ترمز ABS','داشبورد رنگی','چراغ LED']
  },
  {
    id:'shadow-r', name:'SHADOW R', cat:'naked', badge:'', price:520, stock:3,
    cc:1000, power:195, speed:275, accel:3.2, torque:115, weight:182,
    img:IMG.shadow, tagline:'نیکد با شخصیت خیابانی',
    desc:'واکنش فوری گاز و کنترل کامل در ترافیک. SHADOW R برای کسانی است که شهر را پیست شخصی خود می‌دانند.',
    colors:[['#1a1a1a','مشکی مات'],['#2d4a6b','آبی شب'],['#ff3d1f','قرمز آتشین']],
    features:['موتور ۱۰۰۰ سی‌سی','شاسی سبک','حالت Urban','چراغ LED','تعلیق قابل تنظیم','کلاچ لغزشی']
  }
]


const BLOG = (window.MOTORA_CONTENT && window.MOTORA_CONTENT.blog && window.MOTORA_CONTENT.blog.length) ? window.MOTORA_CONTENT.blog : [
  { id:'first-ride-nero', title:'اولین سواری با NERO R: از نمایشگاه تا پیست', cat:'تجربه سواری', img:IMG.road, date:'۱۲ آبان ۱۴۰۴', read:'۶ دقیقه', author:'آرش رضایی', excerpt:'سه روز با NERO R در جاده چالوس و پیست آزادی. آیا این موتور می‌تواند انتظارات را برآورده کند؟', body:`
    <p>وقتی کلید را می‌چرخانی، صدای موتور مثل یک اخطار است. NERO R با ۲۱۴ اسب بخار قدرت، در نگاه اول شاید ترسناک به نظر برسد، اما الکترونیک هوشمند آن اجازه نمی‌دهد که این قدرت از کنترل خارج شود.</p>
    <h2>روز اول: شهر</h2>
    <p>در ترافیک تهران، NERO R شگفت‌زده می‌کند. حالت Urban، پاسخ گاز را نرم می‌کند و کلاچ سبک، سواری را در ترافیک قابل تحمل می‌سازد. صندلی نسبتاً بلند است، اما ارگونومی آن برای راننده‌ای با قد ۱۸۰ سانتی‌متر راحت است.</p>
    <blockquote>«تفاوت اصلی NERO R با رقبا، حس اطمینانی است که در سرعت‌های بالا به راننده می‌دهد.»</blockquote>
    <h2>روز دوم: جاده چالوس</h2>
    <p>در پیچ‌های چالوس، شاسی آلومینیومی و تعلیق Öhlins کار خود را نشان می‌دهند. موتور دقیقاً همان‌جایی می‌رود که می‌خواهی و بازخورد فرمان، بی‌نظیر است. کنترل کشش در حالت Sport اجازه می‌دهد کمی لیز بخوری، اما نه بیشتر.</p>
    <h2>روز سوم: پیست آزادی</h2>
    <p>اینجا خانه واقعی NERO R است. با حالت Track و کوییک‌شیفتر، زمان دور پیست به طرز محسوسی کاهش پیدا می‌کند. ترمزهای ABS کورنرینگ در ورودی پیچ‌ها، اعتماد کامل می‌دهند.</p>
    <h2>جمع‌بندی</h2>
    <p>NERO R یک موتور کامل نیست — مصرف سوخت بالا، گرمای موتور در ترافیک و قیمت آن از جمله نقاط ضعف هستند. اما اگر به دنبال موتوری هستید که هم در شهر و هم در پیست احساس زنده بودن بدهد، NERO R یکی از بهترین گزینه‌های بازار است.</p>
  `},
  { id:'choose-first-bike', title:'چطور اولین موتورسیکلت خود را انتخاب کنیم؟', cat:'راهنمای خرید', img:IMG.curvy, date:'۵ آبان ۱۴۰۴', read:'۸ دقیقه', author:'تیم MOTORA', excerpt:'از حجم موتور تا سبک سواری؛ چک‌لیستی که قبل از خرید اولین موتور باید بدانید.', body:`
    <p>خرید اولین موتورسیکلت یکی از هیجان‌انگیزترین تصمیم‌های زندگی است، اما بدون تحقیق می‌تواند به یک تجربه پرهزینه تبدیل شود. در این راهنما، مهم‌ترین فاکتورها را بررسی می‌کنیم.</p>
    <h2>۱. حجم موتور مناسب</h2>
    <p>برای شروع، موتورهای ۲۵۰ تا ۴۰۰ سی‌سی بهترین انتخاب هستند. قدرت کافی برای بزرگراه، اما نه آن‌قدر زیاد که کنترل را سخت کند.</p>
    <h2>۲. سبک سواری</h2>
    <ul><li><strong>نیکد:</strong> ارگونومی راحت، مناسب شهر و سفرهای کوتاه.</li><li><strong>اسپرت:</strong> هیجان بیشتر، اما ارگونومی خمیده و خسته‌کننده در ترافیک.</li><li><strong>کروزر:</strong> راحتی حداکثری برای سفرهای طولانی.</li></ul>
    <h2>۳. وزن و قد</h2>
    <p>حتماً قبل از خرید بنشینید و وزن موتور را در حالت ایستاده تست کنید. موتوری که در نمایشگاه سبک به نظر می‌رسد، ممکن است در ترافیک سنگین شود.</p>
    <blockquote>«بهترین موتور، قوی‌ترین موتور نیست؛ موتوری است که با آن احساس راحتی می‌کنید.»</blockquote>
    <h2>۴. هزینه‌های پنهان</h2>
    <p>بیمه، مالیات، سرویس دوره‌ای، لاستیک و تجهیزات ایمنی را در بودجه خود لحاظ کنید. به‌طور کلی، سالانه حدود ۱۰٪ ارزش موتور را برای نگهداری در نظر بگیرید.</p>
  `},
  { id:'tehran-ride-spots', title:'۵ مسیر رویایی برای سواری در اطراف تهران', cat:'مسیرشناسی', img:IMG.highway, date:'۲۸ مهر ۱۴۰۴', read:'۵ دقیقه', author:'نیلوفر کاظمی', excerpt:'از جاده فشم تا گردنه امامزاده هاشم؛ مسیرهایی که هر موتورسواری باید تجربه کند.', body:`
    <p>تهران با وجود ترافیکش، دروازه‌ای به برخی از زیباترین جاده‌های ایران است. در این مقاله، پنج مسیر محبوب موتورسواران را معرفی می‌کنیم.</p>
    <h2>۱. جاده فشم — امامزاده هاشم</h2>
    <p>مسیری کوهستانی با پیچ‌های نرم و منظره‌های نفس‌گیر. مناسب برای سواری آرام و لذت‌بردن از طبیعت.</p>
    <h2>۲. جاده چالوس</h2>
    <p>کلاسیک‌ترین مسیر موتورسواری ایران. پیچ‌های تند، تونل‌ها و کنار رودخانه. در روزهای تعطیل شلوغ است، پس صبح زود حرکت کنید.</p>
    <h2>۳. جاده هراز</h2>
    <p>برای کسانی که به دنبال مسیرهای طولانی‌تر و سریع‌تر هستند. گردنه امامزاده هاشم یکی از بهترین نقاط برای توقف و عکاسی است.</p>
    <h2>۴. جاده لواسان — کند</h2>
    <p>مسیری کوتاه اما فنی با پیچ‌های باریک. مناسب برای تمرین کنترل موتور در سرعت‌های پایین.</p>
    <h2>۵. جاده طالقان</h2>
    <p>دور از شلوغی، با مناظر روستایی و جاده‌های خلوت. برای سفر یک‌روزه عالی است.</p>
    <blockquote>«قبل از هر سفر، وضعیت لاستیک، ترمز و روغن را بررسی کنید. جاده هرگز بخشش نمی‌کند.»</blockquote>
  `}
];

const TESTIMONIALS = (window.MOTORA_CONTENT && window.MOTORA_CONTENT.testimonials && window.MOTORA_CONTENT.testimonials.length) ? window.MOTORA_CONTENT.testimonials : [
  { name:'آرش رضایی', role:'مالک NERO R', text:'بعد از سه سال سواری با برندهای مختلف، این اولین موتوری است که واقعاً حس می‌کنم برای من ساخته شده. واکنش گاز و پایداری در سرعت بالا فوق‌العاده است.', rating:5 },
  { name:'نیلوفر کاظمی', role:'مالک VORTEX RS', text:'تست‌درایو رایگانشان را رزرو کردم و بعد از ده دقیقه فهمیدم این همان موتوری است که می‌خواهم. تیم پشتیبانی هم واقعاً حرفه‌ای است.', rating:5 },
  { name:'سعید محمدی', role:'مالک TITAN X', text:'کیفیت ساخت و توجه به جزئیات در حد برندهای اروپایی است. سرویس دوره‌ای هم بدون دردسر و در زمان مقرر انجام شد.', rating:4 }
];

const FAQS = (window.MOTORA_CONTENT && window.MOTORA_CONTENT.faqs && window.MOTORA_CONTENT.faqs.length) ? window.MOTORA_CONTENT.faqs : [
  { q:'آیا امکان تست‌درایو قبل از خرید وجود دارد؟', a:'بله. می‌توانید از طریق فرم رزرو تست‌درایو یا تماس تلفنی، زمان مراجعه به شوروم را هماهنگ کنید. تست‌درایو کاملاً رایگان است و کارشناس ما در طول مسیر همراه شما خواهد بود.' },
  { q:'گارانتی موتورها چگونه است؟', a:'تمام موتورسیکلت‌های MOTORA دارای ۲ سال گارانتی رسمی هستند که شامل قطعات موتور، سیستم برق و خدمات دوره‌ای می‌شود. شرایط کامل در دفترچه گارانتی ذکر شده است.' },
  { q:'چطور درباره رنگ و تجهیزات موتورها اطلاعات بگیرم؟', a:'برای اطلاع از رنگ‌ها و تجهیزات قابل سفارش هر مدل، از صفحه همان محصول استفاده کنید یا با کارشناسان فروش MOTORA تماس بگیرید.' },
  { q:'مدت زمان تحویل چقدر است؟', a:'برای مدل‌های موجود در انبار، تحویل ۲ تا ۵ روز کاری. برای سفارشی‌سازی‌ها و مدل‌های خاص، بسته به نوع سفارش بین ۲ تا ۶ هفته زمان لازم است.' },
  { q:'آیا امکان فروش اقساطی وجود دارد؟', a:'بله. با همکاری چند بانک و لیزینگ معتبر، امکان پرداخت اقساطی تا ۲۴ ماه فراهم است. برای اطلاع از شرایط، با تیم فروش تماس بگیرید.' },
  { q:'خدمات پس از فروش شامل چه مواردی است؟', a:'شبکه نمایندگی‌های مجاز در سراسر کشور، تأمین قطعات اصلی، سرویس دوره‌ای، پشتیبانی ۲۴/۷ و امداد جاده‌ای از جمله خدمات ماست.' }
];

const DEALERS = [
  { city:'تهران — شوروم مرکزی', addr:'خیابان ولیعصر، پلاک ۱۲۰۰', phone:'021-9100-5566', lat:35.7448, lng:51.4100, hours:'۹ تا ۲۰' },
  { city:'اصفهان', addr:'خیابان چهارباغ بالا، مجتمع پارسیان', phone:'031-3666-7788', lat:32.6546, lng:51.6680, hours:'۹ تا ۱۹' },
  { city:'شیراز', addr:'بلوار زند، نبش خیابان قصردشت', phone:'071-3233-4455', lat:29.5918, lng:52.5837, hours:'۹ تا ۱۹' },
  { city:'تبریز', addr:'خیابان امام، روبروی پارک ائل‌گلی', phone:'041-3333-2211', lat:38.0800, lng:46.2919, hours:'۹ تا ۱۹' },
  { city:'مشهد', addr:'بلوار وکیل‌آباد، نبش صدف', phone:'051-3888-9900', lat:36.2972, lng:59.6067, hours:'۹ تا ۲۰' },
  { city:'رشت', addr:'خیابان مطهری، جنب بانک ملت', phone:'013-3222-1100', lat:37.2808, lng:49.5832, hours:'۹ تا ۱۸' }
];

const CONFIG_DATA = {
  models:[
    { id:'nero-r', name:'NERO R', price:485, img:IMG.nero },
    { id:'titan-x', name:'TITAN X', price:610, img:IMG.titan },
    { id:'vortex-rs', name:'VORTEX RS', price:390, img:IMG.vortex },
    { id:'phantom-s', name:'PHANTOM S', price:445, img:IMG.phantom }
  ],
  colors:[
    { name:'قرمز آتشین', price:0, color:'#ff3d1f' },
    { name:'مشکی مات', price:15, color:'#1a1a1a' },
    { name:'سفید صدفی', price:20, color:'#e8e8e8' },
    { name:'نقره‌ای تیتانیوم', price:35, color:'#9aa0a8' }
  ],
  wheels:[ {name:'استاندارد',price:0}, {name:'فورج',price:45}, {name:'کربن',price:90} ],
  exhausts:[ {name:'استاندارد',price:0}, {name:'تیتانیوم',price:25}, {name:'کربن کامل',price:55} ]
};

const GALLERY = (window.MOTORA_CONTENT && window.MOTORA_CONTENT.gallery && window.MOTORA_CONTENT.gallery.length) ? window.MOTORA_CONTENT.gallery : [
  { name:'NERO R', img:IMG.nero, cls:'' },
  { name:'TITAN X', img:IMG.titan, cls:'wide' },
  { name:'VORTEX RS', img:IMG.vortex, cls:'' },
  { name:'PHANTOM S', img:IMG.phantom, cls:'tall' },
  { name:'BLAZE 900', img:IMG.blaze, cls:'' },
  { name:'SHADOW R', img:IMG.shadow, cls:'' }
];

/* ============================================================
   UTILS
   ============================================================ */
const $  = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];

// ✅ اصلاح شد: استفاده از en-US تا اعداد انگلیسی نمایش داده شوند و فونت Orbitron اعمال شود
const fmt = n => Number(n).toLocaleString('en-US');

const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

const store = {
  get(k, d){ try { const v = localStorage.getItem('velocity.'+k); return v ? JSON.parse(v) : d; } catch(e){ return d; } },
  set(k, v){ try { localStorage.setItem('velocity.'+k, JSON.stringify(v)); } catch(e){} }
};

function toast(msg, type='ok'){
  const el = document.createElement('div');
  el.className = 'toast ' + type;
  const icon = type==='ok' ? '✓' : type==='warn' ? '⚠' : '✕';
  el.innerHTML = `<span style="font-weight:900">${icon}</span><span>${esc(msg)}</span>`;
  $('#toasts').appendChild(el);
  setTimeout(() => { el.style.animation = 'toastOut .3s forwards'; setTimeout(() => el.remove(), 300); }, 3600);
}

function loadScript(src, cb){
  if (document.querySelector(`script[src="${src}"]`)) { cb && cb(); return; }
  const s = document.createElement('script');
  s.src = src; s.onload = cb; document.head.appendChild(s);
}

document.addEventListener('error', e => {
  const t = e.target;
  if (t && t.tagName === 'IMG' && !t.dataset.fallback) { t.dataset.fallback = '1'; t.src = PLACEHOLDER; }
}, true);

/* ============================================================
   PRELOADER
   ============================================================ */
(function(){
  const pre = $('#preloader'), num = $('#preNum'), bar = $('#preBar');
  let p = 0;
  const tick = setInterval(() => {
    p += Math.random()*14 + 6;
    if (p >= 100) { p = 100; clearInterval(tick); setTimeout(() => pre.classList.add('done'), 380); }
    num.textContent = Math.floor(p);
    bar.style.width = p + '%';
  }, 100);
})();

/* ============================================================
   CURSOR
   ============================================================ */
(function(){
  if (!matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  document.body.classList.add('has-cursor');
  const dot = $('.cursor-dot'), ring = $('.cursor-ring');
  let mx = innerWidth/2, my = innerHeight/2, rx = mx, ry = my;
  addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
  });
  (function loop(){
    rx += (mx-rx)*0.16; ry += (my-ry)*0.16;
    ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  })();
  document.addEventListener('mouseover', e => {
    if (e.target.closest('a,button,.card,.g-item,.dot,.swatch,.pill,.filter,.cal-day,.time-slot,.pg-thumbs button,.pcolor,.dealer-item,.blog-card')) ring.classList.add('grow');
  });
  document.addEventListener('mouseout', e => {
    if (!e.relatedTarget || !e.relatedTarget.closest?.('a,button,.card,.g-item,.dot,.swatch,.pill,.filter,.cal-day,.time-slot,.pg-thumbs button,.pcolor,.dealer-item,.blog-card')) ring.classList.remove('grow');
  });
})();

/* ============================================================
   THEME + ACCENT
   ============================================================ */
(function(){
  const savedTheme = store.get('theme', 'dark');
  if (savedTheme === 'light') document.body.classList.add('light');
  updateThemeIcon();

  $('#themeBtn').addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    store.set('theme', isLight ? 'light' : 'dark');
    updateThemeIcon();
  });
  function updateThemeIcon(){
    const ic = $('#themeIcon');
    ic.innerHTML = document.body.classList.contains('light')
      ? '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>'
      : '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>';
  }

  const savedAccent = store.get('accent', null);
  if (savedAccent) {
    document.documentElement.style.setProperty('--accent', savedAccent.a);
    document.documentElement.style.setProperty('--accent2', savedAccent.b);
  }
  $$('.dot').forEach((dot, i) => {
    if (savedAccent && savedAccent.idx === i) { $$('.dot').forEach(d => d.classList.remove('active')); dot.classList.add('active'); }
    dot.addEventListener('click', () => {
      $$('.dot').forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      document.documentElement.style.setProperty('--accent', dot.dataset.a);
      document.documentElement.style.setProperty('--accent2', dot.dataset.b);
      store.set('accent', {a:dot.dataset.a, b:dot.dataset.b, idx:i});
    });
  });
})();

/* ============================================================
   NAV
   ============================================================ */
(function(){
  const nav = $('#nav'), burger = $('#burger'), links = $('#navLinks');
  addEventListener('scroll', () => nav.classList.toggle('solid', scrollY > 40), {passive:true});
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    links.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });
  links.addEventListener('click', e => {
    if (e.target.tagName === 'A') { burger.classList.remove('open'); links.classList.remove('open'); burger.setAttribute('aria-expanded','false'); }
  });

  const map = {};
  $$('.nav-links a').forEach(a => { const h = a.getAttribute('href'); if (h && h.startsWith('#') && !h.startsWith('#/')) map[h.slice(1)] = a; });
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        $$('.nav-links a').forEach(a => a.classList.remove('active'));
        const a = map[e.target.id]; if (a) a.classList.add('active');
      }
    });
  }, {rootMargin:'-45% 0px -50% 0px'});
  ['home','bikes','specs','config','gallery','blog','contact'].forEach(id => { const el = document.getElementById(id); if (el) io.observe(el); });
})();

/* ============================================================
   SCROLL / REVEAL / COUNTER / BARS
   ============================================================ */
(function(){
  const prog = $('#scrollProgress');
  let raf = null;
  function onScroll(){
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    prog.style.width = (h > 0 ? y/h*100 : 0) + '%';
    $('#backTop').classList.toggle('show', y > 600);
  }
  addEventListener('scroll', () => { if (raf) return; raf = requestAnimationFrame(() => { onScroll(); raf = null; }); }, {passive:true});
  onScroll();

  const io = new IntersectionObserver(entries => {
    entries.forEach((e,i) => {
      if (e.isIntersecting) { e.target.style.transitionDelay = (i*70)+'ms'; e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold:.12, rootMargin:'0px 0px -50px 0px'});
  $$('[data-reveal]').forEach(el => io.observe(el));

  $$('[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count), dec = parseInt(el.dataset.decimal||'0');
    const io2 = new IntersectionObserver(en => {
      en.forEach(e => {
        if (!e.isIntersecting) return;
        const t0 = performance.now(), dur = 1500;
        (function tick(t){
          const p = Math.min((t-t0)/dur, 1), eased = 1 - Math.pow(1-p,3);
          el.textContent = (target*eased).toFixed(dec);
          if (p < 1) requestAnimationFrame(tick); else el.textContent = target.toFixed(dec);
        })(t0);
        io2.unobserve(e.target);
      });
    }, {threshold:.5});
    io2.observe(el);
  });

  const ioBar = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.style.width = e.target.dataset.value+'%'; ioBar.unobserve(e.target); } });
  }, {threshold:.5});
  $$('.bar i').forEach(b => ioBar.observe(b));

  $('#backTop').addEventListener('click', () => scrollTo({top:0,behavior:'smooth'}));
})();

/* ============================================================
   STATE
   ============================================================ */
const state = {
  filter:'all',
  query:'',
  compare:new Set(store.get('compare', [])),
  wishlist:new Set(store.get('wishlist', [])),
  currentProduct:null,
  cart:store.get('cart', [])
};

function cartCount(){ return state.cart.reduce((n,x)=>n+(Number(x.qty)||0),0); }
function cartTotal(){ return state.cart.reduce((n,x)=>{const b=BIKES.find(y=>y.id===x.id);return n+(b?b.price*(Number(x.qty)||0):0);},0); }
function saveCart(){store.set('cart',state.cart);const el=$('#cartCount');if(el){el.hidden=cartCount()===0;el.textContent=cartCount();}}
function addToCart(id){const b=BIKES.find(x=>x.id===id);if(!b)return;if(b.stock<=0&&b.availabilityMode!=='preorder'){toast('این محصول فعلاً موجود نیست','warn');return;}const found=state.cart.find(x=>x.id===id);if(found)found.qty=Math.min((found.qty||1)+1,99);else state.cart.push({id,qty:1});saveCart();toast('محصول به سبد خرید اضافه شد');}
saveCart();

function saveCompare(){ store.set('compare', [...state.compare]); updateCompareBar(); }
function saveWishlist(){ store.set('wishlist', [...state.wishlist]); updateWishBadge(); }

function updateWishBadge(){
  const n = state.wishlist.size;
  const el = $('#wishCount');
  el.hidden = n === 0;
  el.textContent = n;
}

/* ============================================================
   BIKE CARDS
   ============================================================ */
function bikeCard(b){
  const wished = state.wishlist.has(b.id);
  const compared = state.compare.has(b.id);
  return `
    <article class="card" data-id="${b.id}" data-cat="${b.cat}">
      <div class="card-media">
        <img class="bike-card-image" data-card-image="${esc(b.id)}" src="${esc(b.img)}" alt="${esc(b.name)}" loading="lazy" decoding="async">
        <span class="badge ${b.badge?'':'dim'}">${b.badge || 'AVAILABLE'}</span>
        ${(Array.isArray(b.colors)&&b.colors.length)?`<div class="card-color-swatches" aria-label="انتخاب رنگ محصول">${b.colors.map((c,i)=>`<button type="button" class="card-color-swatch ${i===0?'active':''}" data-card-color="${esc(b.id)}" data-color-index="${i}" style="--swatch:${esc(c[0]||'#222222')}" title="${esc(c[1]||'رنگ محصول')}" aria-label="${esc(c[1]||'رنگ محصول')}"></button>`).join('')}</div>`:''}
      </div>
      <div class="card-body">
        <div class="card-top">
          <span class="card-cat">${(CAT[b.cat]||b.cat||'MOTORCYCLE').toString().toUpperCase()}</span>
          <span class="stock">${b.stock>0?`${b.stock} دستگاه موجود`:((b.availabilityMode==='preorder')?'پیش‌سفارش فعال':'ناموجود')}</span>
        </div>
        <h3 class="en">${b.name}</h3>
        <p class="desc">${b.desc}</p>
        <div class="card-bottom">
          <span class="price">${fmt(b.price)} <small>میلیون تومان</small></span>
        </div>
        <div class="card-actions">
          <a class="btn btn-ghost btn-sm" href="#/bike/${b.id}">جزئیات</a>
          <button class="btn btn-primary btn-sm" data-add-cart="${b.id}" ${b.stock<=0&&b.availabilityMode!=='preorder'?'disabled':''}>افزودن به سبد</button>
          <button class="cmp-btn ${compared?'on':''}" data-cmp="${b.id}" aria-label="افزودن به مقایسه" title="مقایسه">⇄</button>
          <button class="wish-btn ${wished?'on':''}" data-wish="${b.id}" aria-label="افزودن به علاقه‌مندی" title="علاقه‌مندی">♥</button>
        </div>
      </div>
    </article>`;
}

function renderBikes(){
  let list = state.filter === 'all' ? BIKES : BIKES.filter(b => b.cat === state.filter);
  if (state.query) {
    const q = state.query.toLowerCase();
    list = list.filter(b => (b.name+' '+b.desc+' '+CAT[b.cat]).toLowerCase().includes(q));
  }
  const grid = $('#bikeGrid');
  if (!list.length) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
      <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
      <h3>نتیجه‌ای پیدا نشد</h3><p>عبارت جستجو یا فیلتر را تغییر دهید.</p>
      <button class="btn btn-ghost btn-sm" onclick="document.getElementById('bikeSearch').value='';document.getElementById('bikeSearch').dispatchEvent(new Event('input'));">پاک کردن جستجو</button>
    </div>`;
    return;
  }
  grid.innerHTML = list.map(bikeCard).join('');
  $$('#bikeGrid .card').forEach((c,i) => c.style.animationDelay = (i*55)+'ms');
}

/* filters */
$('#filters').addEventListener('click', e => {
  const f = e.target.closest('.filter'); if (!f) return;
  $$('.filter').forEach(x => x.classList.remove('active'));
  f.classList.add('active');
  state.filter = f.dataset.filter;
  renderBikes();
});
$('#bikeSearch').addEventListener('input', e => {
  state.query = e.target.value.trim();
  renderBikes();
});

/* compare / wishlist clicks */
document.addEventListener('click', e => {
  const addCart = e.target.closest('[data-add-cart]');
  if(addCart){e.preventDefault();addToCart(addCart.dataset.addCart);return;}
  const cardColor = e.target.closest('[data-card-color]');
  if (cardColor) {
    e.preventDefault(); e.stopPropagation();
    const bike = BIKES.find(x => x.id === cardColor.dataset.cardColor);
    if (!bike) return;
    const color = (bike.colors || [])[Number(cardColor.dataset.colorIndex)];
    const card = cardColor.closest('.card');
    const image = card && card.querySelector('[data-card-image]');
    if (image) image.src = (color && color[2] && String(color[2]).trim()) ? color[2] : bike.img;
    card.querySelectorAll('[data-card-color]').forEach(x => x.classList.toggle('active', x === cardColor));
    return;
  }
  const cmpBtn = e.target.closest('[data-cmp]');
  if (cmpBtn) {
    const id = cmpBtn.dataset.cmp;
    if (state.compare.has(id)) state.compare.delete(id);
    else if (state.compare.size >= 2) { toast('حداکثر ۲ موتور قابل مقایسه است','warn'); return; }
    else state.compare.add(id);
    saveCompare(); syncCardButtons(); return;
  }
  const wishBtn = e.target.closest('[data-wish]');
  if (wishBtn) {
    const id = wishBtn.dataset.wish;
    if (state.wishlist.has(id)) { state.wishlist.delete(id); toast('از علاقه‌مندی‌ها حذف شد'); }
    else { state.wishlist.add(id); toast('به علاقه‌مندی‌ها اضافه شد'); }
    saveWishlist(); syncCardButtons(); return;
  }
});

function syncCardButtons(){
  $$('#bikeGrid [data-cmp]').forEach(btn => btn.classList.toggle('on', state.compare.has(btn.dataset.cmp)));
  $$('#bikeGrid [data-wish]').forEach(btn => btn.classList.toggle('on', state.wishlist.has(btn.dataset.wish)));
}

/* 3D tilt */
(function(){
  if (!matchMedia('(hover:hover)').matches) return;
  document.addEventListener('mousemove', e => {
    const card = e.target.closest?.('#bikeGrid .card'); if (!card) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX-r.left)/r.width - .5, y = (e.clientY-r.top)/r.height - .5;
    card.style.transform = `perspective(900px) rotateY(${x*8}deg) rotateX(${-y*8}deg) translateY(-6px)`;
  });
  document.addEventListener('mouseout', e => {
    const card = e.target.closest?.('#bikeGrid .card');
    if (card && !card.contains(e.relatedTarget)) card.style.transform = '';
  });
})();

/* ============================================================
   GALLERY / TESTIMONIALS / FAQ / BLOG PREVIEW / CONFIG
   ============================================================ */
function renderGallery(){
  $('#galleryGrid').innerHTML = GALLERY.map((g,i) => `
    <div class="g-item ${g.cls}" data-g="${i}">
      <img src="${g.img}" alt="${g.name}" loading="lazy" decoding="async">
      <div class="g-cap en">${g.name}</div>
    </div>`).join('');
}
renderGallery();

$('#galleryGrid').addEventListener('click', e => {
  const item = e.target.closest('[data-g]'); if (!item) return;
  const g = GALLERY[+item.dataset.g];
  openModal(`<img src="${g.img}" alt="${g.name}" style="width:100%;border-radius:16px;max-height:65vh;object-fit:cover"><h3 class="en" style="font-size:24px;margin-top:18px;text-align:center">${g.name}</h3>`);
});

(function(){
  const box = $('#homepageReviews');
  if (!box) return;
  fetch('api/reviews.php', {headers:{'Accept':'application/json'}})
    .then(r => { if(!r.ok) throw new Error('reviews'); return r.json(); })
    .then(data => {
      const reviews = (data.reviews || []).filter(r => r && r.comment);
      if (!reviews.length) {
        box.innerHTML = '<div class="review-home-empty">هنوز نظر تأییدشده‌ای ثبت نشده است. پس از ثبت و تأیید اولین نظر، تجربه مشتریان در این قسمت نمایش داده می‌شود.</div>';
        return;
      }
      box.innerHTML = reviews.map(r => {
        const rating = Math.max(1, Math.min(5, Number(r.rating) || 5));
        const name = String(r.full_name || 'مشتری MOTORA');
        const product = String(r.product_name || 'محصول MOTORA');
        const comment = String(r.comment || '');
        const safe = v => v.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
        return `<article class="review-home-card"><div class="review-home-stars" aria-label="${rating} از ۵ ستاره">${'★'.repeat(rating)}${'☆'.repeat(5-rating)}</div><p class="review-home-comment">${safe(comment)}</p><div class="review-home-meta"><b>${safe(name)}</b><span>${safe(product)}</span></div></article>`;
      }).join('');
    })
    .catch(() => { box.innerHTML = '<div class="review-home-empty">دریافت نظرات در حال حاضر ممکن نیست.</div>'; });
})();

(function(){
  const list = $('#faqList');
  list.innerHTML = FAQS.map((f,i) => `
    <div class="faq-item" data-i="${i}">
      <button class="faq-q" aria-expanded="false"><span>${f.q}</span><span class="ic">+</span></button>
      <div class="faq-a"><div><p>${f.a}</p></div></div>
    </div>`).join('');
  list.addEventListener('click', e => {
    const q = e.target.closest('.faq-q'); if (!q) return;
    const item = q.closest('.faq-item'), open = item.classList.toggle('open');
    q.setAttribute('aria-expanded', open);
    if (open) $$('.faq-item').forEach(x => { if (x !== item) { x.classList.remove('open'); x.querySelector('.faq-q').setAttribute('aria-expanded','false'); } });
  });
})();

function blogCardHTML(p){
  return `<a class="blog-card" href="#/blog/${p.id}">
    <div class="bc-media"><img src="${p.img}" alt="${p.title}" loading="lazy" decoding="async"></div>
    <div class="bc-body">
      <div class="bc-meta"><span>${p.cat}</span><span>${p.date}</span><span>${p.read} مطالعه</span></div>
      <h3>${p.title}</h3><p>${p.excerpt}</p>
      <span class="bc-link">ادامه مطلب ←</span>
    </div>
  </a>`;
}
$('#blogPreview').innerHTML = BLOG.map(blogCardHTML).join('');

/* ============================================================
   MODAL
   ============================================================ */
const modal = $('#modal'), modalBody = $('#modalBody'), modalBox = $('#modalBox');
let lastFocus = null;

function openModal(html){
  lastFocus = document.activeElement;
  modalBody.innerHTML = html;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('lock');
  setTimeout(() => { const f = modalBox.querySelector('button,a,input,[tabindex]'); f && f.focus(); }, 60);
}
function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  if (!$('#routeView').classList.contains('open')) document.body.classList.remove('lock');
  lastFocus && lastFocus.focus && lastFocus.focus();
}
$('#modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });

/* focus trap */
addEventListener('keydown', e => {
  if (e.key !== 'Tab' || !modal.classList.contains('open')) return;
  const f = $$('button,a[href],input,textarea,select,[tabindex]:not([tabindex="-1"])', modalBox).filter(x => !x.disabled && x.offsetParent !== null);
  if (!f.length) return;
  const first = f[0], last = f[f.length-1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

/* ============================================================
   COMPARE BAR
   ============================================================ */
function updateCompareBar(){
  const bar = $('#compareBar');
  if (!state.compare.size) { bar.classList.remove('show'); bar.setAttribute('aria-hidden','true'); return; }
  bar.classList.add('show'); bar.setAttribute('aria-hidden','false');
  $('#cmpItems').innerHTML = [...state.compare].map(id => {
    const b = BIKES.find(x => x.id === id);
    return `<div class="cmp-chip en">${b.name}<button data-rmcmp="${id}" aria-label="حذف">×</button></div>`;
  }).join('');
  $('#cmpOpen').style.opacity = state.compare.size < 2 ? '.5' : '1';
  $('#cmpOpen').style.pointerEvents = state.compare.size < 2 ? 'none' : 'auto';
  $$('[data-rmcmp]').forEach(btn => btn.addEventListener('click', () => {
    state.compare.delete(btn.dataset.rmcmp); saveCompare(); syncCardButtons();
  }));
}

/* ============================================================
   ROUTER
   ============================================================ */
const routeView = $('#routeView');

function closeRoute(){
  routeView.classList.remove('open');
  routeView.innerHTML = '';
  if (!modal.classList.contains('open')) document.body.classList.remove('lock');
  document.body.style.overflow = '';
}

function openRoute(html, title){
  routeView.innerHTML = html;
  routeView.classList.add('open');
  document.body.classList.add('lock');
  document.body.style.overflow = 'hidden';
  routeView.scrollTop = 0;
  if (title) document.title = title + ' | MOTORA';
  setTimeout(() => { const h = routeView.querySelector('h1,h2'); h && h.focus && h.focus(); }, 50);
}

function routeBar(crumb){
  return `<div class="route-bar">
    <a href="#bikes" class="back" data-close-route>→ بازگشت</a>
    <a href="#home" class="logo" style="font-size:13px"><i></i>MOTORA</a>
  </div>
  <div class="route-body">
    <nav class="breadcrumb" aria-label="مسیر">${crumb}</nav>`;
}

function crumb(items){
  return items.map((it,i) => {
    const last = i === items.length-1;
    return last ? `<span aria-current="page">${it.label}</span>` : `<a href="${it.href}">${it.label}</a><span class="sep">/</span>`;
  }).join('');
}

function handleRoute(){
  const raw = location.hash;
  if (!raw.startsWith('#/')) { closeRoute(); return; }
  const path = raw.slice(2).split('?')[0];
  const parts = path.split('/').filter(Boolean);
  const q = new URLSearchParams((raw.split('?')[1]||''));
  const page = parts[0] || 'home';

  try {
    if (page === 'bike' && parts[1]) return renderProduct(parts[1]);
    if (page === 'cart') return renderCartPage();
    if (page === 'account') return renderAccountPage();
    if (page === 'blog' && parts[1]) return renderArticle(parts[1]);
    if (page === 'blog') return renderBlogPage();
    if (page === 'about') return renderAbout();
    if (page === 'warranty') return renderWarranty();
    if (page === 'dealers') return renderDealers();
    if (page === 'testdrive') return renderTestDrive(q.get('bike'));
    if (page === 'compare') return renderComparePage();
    if (page === 'wishlist') return renderWishlist();
    if (page === 'search') return renderSearch(q.get('q')||'');
    return render404();
  } catch(err) {
    console.error(err);
    render404();
  }
}
addEventListener('hashchange', handleRoute);

routeView.addEventListener('click', e => {
  if (e.target.closest('[data-close-route]')) { e.preventDefault(); location.hash = '#bikes'; if (location.hash === '#bikes') closeRoute(); }
});

/* product */
function renderProduct(id){
  const b = BIKES.find(x => x.id === id);
  if (!b) return render404();
  state.currentProduct = b;
  const related = BIKES.filter(x => x.id !== b.id).slice(0,3);
  const wished = state.wishlist.has(b.id), compared = state.compare.has(b.id);
  const initialColorImage = (b.colors||[]).find(c=>c[2] && String(c[2]).trim());
  const initialProductImage = initialColorImage ? initialColorImage[2] : b.img;
  const html = `${routeBar(crumb([{label:'خانه',href:'#home'},{label:'موتورها',href:'#bikes'},{label:b.name}]))}
    <div class="product-grid">
      <div class="product-gallery">
        <div class="pg-main"><img id="pgMain" src="${initialProductImage}" alt="${b.name}" decoding="async"></div>
        <div class="pg-thumbs">
          <button class="active" data-thumb="${initialProductImage}"><img src="${initialProductImage}" alt="نمای اصلی" loading="lazy"></button>
          ${(Array.isArray(b.galleryImages)&&b.galleryImages.length?b.galleryImages:[IMG.road,IMG.curvy]).map((src,i)=>`<button data-thumb="${src}"><img src="${src}" alt="نمای ${i+2}" loading="lazy"></button>`).join('')}
        </div>
      </div>
      <div class="product-info">
        <span class="badge ${b.badge?'':'dim'}">${b.badge || 'AVAILABLE'}</span>
        <h1 class="en">${b.name}</h1>
        <p class="tagline">${b.tagline}</p>
        <div class="rating"><span class="stars">★★★★★</span><span>۴.۸ از ۵ — ۳۲ نظر تأییدشده</span></div>
        <div class="product-price"><b>${fmt(b.price)}</b><small>میلیون تومان</small></div>
        <div class="color-row"><small>رنگ:</small>${b.colors.map((c,i) => `<button class="pcolor ${i===0?'active':''}" style="--c:${c[0]}" data-pcolor="${i}" title="${c[1]}" aria-label="${c[1]}"></button>`).join('')}<span style="font-size:11px;color:var(--muted)" id="pColorName">${b.colors[0][1]}</span></div>
        <div class="product-actions">
          <a href="#/testdrive?bike=${b.id}" class="btn btn-primary">رزرو تست‌درایو</a>
          <button class="btn btn-primary" data-add-cart="${b.id}" ${b.stock<=0&&b.availabilityMode!=='preorder'?'disabled':''}>افزودن به سبد خرید</button>
          <span class="btn btn-ghost" style="pointer-events:none">${b.stock>0?'آماده فروش':(b.availabilityMode==='preorder'?'قابل پیش‌سفارش':'فعلاً ناموجود')}</span>
          <button class="btn btn-ghost" data-wish="${b.id}">${wished?'♥ در علاقه‌مندی‌ها':'♡ افزودن به علاقه‌مندی'}</button>
          <button class="btn btn-ghost" data-cmp="${b.id}">${compared?'⇄ در مقایسه':'⇄ مقایسه'}</button>
          <button class="btn btn-ghost" data-share="${b.id}">↗ اشتراک‌گذاری</button>
        </div>
        <div class="trust-row">
          <div class="trust"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>گارانتی ۲ ساله رسمی</div>
          <div class="trust"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg>پرداخت اقساطی تا ۲۴ ماه</div>
          <div class="trust"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>۶ نمایندگی در ایران</div>
        </div>
      </div>
    </div>

    <div class="product-sections">
      <section><h2 class="block-title">مشخصات فنی</h2>
        <div class="spec-grid">
          <div class="spec-box"><b>حجم موتور</b><span class="en">${b.cc} CC</span></div>
          <div class="spec-box"><b>قدرت</b><span class="en">${b.power} HP</span></div>
          <div class="spec-box"><b>حداکثر سرعت</b><span class="en">${b.speed} KM/H</span></div>
          <div class="spec-box"><b>شتاب ۰-۱۰۰</b><span class="en">${b.accel} SEC</span></div>
          <div class="spec-box"><b>گشتاور</b><span class="en">${b.torque} NM</span></div>
          <div class="spec-box"><b>وزن</b><span class="en">${b.weight} KG</span></div>
        </div>
      </section>
      <section><h2 class="block-title">درباره ${b.name}</h2><div class="long-desc"><p>${b.desc}</p><p>طراحی ${b.name} با تمرکز بر تعادل بین عملکرد و کنترل انجام شده است. شاسی سبک، توزیع وزن بهینه و الکترونیک پیشرفته باعث می‌شوند که این موتور در هر شرایطی قابل پیش‌بینی و امن باشد. تیم مهندسی MOTORA بیش از ۱۸ ماه روی تنظیمات تعلیق و پاسخ گاز کار کرده تا تجربه‌ای یکپارچه بسازد.</p></div></section>
      <section><h2 class="block-title">ویژگی‌ها</h2><ul class="feature-list">${b.features.map(f => `<li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>${f}</li>`).join('')}</ul></section>
      <section><h2 class="block-title">محاسبه‌گر اقساط</h2>
        <div class="finance-box">
          <div>
            <h4>پرداخت ماهانه را محاسبه کنید</h4>
            <p>پیش‌پرداخت، مدت بازپرداخت و نرخ سود را تنظیم کنید. محاسبه تقریبی است.</p>
            <div class="fin-inputs">
              <label>پیش‌پرداخت <span id="finDownLbl">30%</span><input type="range" id="finDown" min="10" max="70" value="30" step="5"></label>
              <label>مدت بازپرداخت <span id="finMonthsLbl">18 ماه</span><input type="range" id="finMonths" min="6" max="24" value="18" step="6"></label>
              <label>نرخ سود سالانه <span id="finRateLbl">18%</span><input type="range" id="finRate" min="10" max="30" value="18" step="1"></label>
            </div>
          </div>
          <div class="fin-result"><b id="finMonthly">—</b><span>میلیون تومان در ماه</span><small id="finTotal" style="display:block;margin-top:6px;font-size:10.5px;color:var(--muted)"></small></div>
        </div>
      </section>
      <section class="product-reviews"><div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap"><h2 class="block-title">نظرات خریداران</h2><a class="btn btn-ghost btn-sm" href="#/account">ثبت نظر درباره این محصول</a></div><p class="muted" style="font-size:12px;line-height:1.9">برای ثبت امتیاز و نظر، وارد حساب کاربری شوید. نظرات پس از تأیید مدیر در همین صفحه منتشر می‌شوند.</p><div id="approvedProductReviews" class="review-list"><p class="muted">در حال دریافت نظرات تأییدشده...</p></div></section>
      <section><h2 class="block-title">مدل‌های مشابه</h2><div class="cards">${related.map(bikeCard).join('')}</div></section>
    </div>
  </div>`;
  openRoute(html, b.name);
  initFinance(b.price);
  fetch('api/reviews.php?product='+encodeURIComponent(b.id)).then(r=>r.json()).then(data=>{
    const box=$('#approvedProductReviews'); if(!box)return;
    const items=data.reviews||[];
    box.innerHTML=items.length?items.map(x=>`<article class="account-entry"><div><b>${esc(x.full_name||'مشتری MOTORA')} · ${'★'.repeat(Math.max(0,Math.min(5,Number(x.rating)||0)))}</b><p>${esc(x.comment||'')}</p><small class="muted">${new Date(String(x.created_at||'').replace(' ','T')).toLocaleDateString('fa-IR')}</small></div></article>`).join(''):'<p class="muted">هنوز نظری برای این محصول تأیید و منتشر نشده است.</p>';
  }).catch(()=>{const box=$('#approvedProductReviews');if(box)box.innerHTML='<p class="muted">در حال حاضر دریافت نظرات ممکن نیست.</p>';});
  // dynamic product JSON-LD
  const ld = document.createElement('script');
  ld.type = 'application/ld+json';
  ld.textContent = JSON.stringify({
    '@context':'https://schema.org','@type':'Product','name':b.name,'image':b.img,'description':b.desc,
    'brand':{'@type':'Brand','name':'MOTORA'},
    'offers':{'@type':'Offer','priceCurrency':'IRR','price':b.price*10000000,'availability':'https://schema.org/InStock','url':location.href}
  });
  routeView.appendChild(ld);
}

routeView.addEventListener('click', e => {
  const thumb = e.target.closest('[data-thumb]');
  if (thumb) {
    $('#pgMain').src = thumb.dataset.thumb;
    $$('.pg-thumbs button').forEach(x => x.classList.remove('active'));
    thumb.classList.add('active'); return;
  }
  const pc = e.target.closest('[data-pcolor]');
  if (pc && state.currentProduct) {
    $$('.pcolor').forEach(x => x.classList.remove('active'));
    pc.classList.add('active');
    const chosen = state.currentProduct.colors[+pc.dataset.pcolor];
    $('#pColorName').textContent = chosen[1] || 'رنگ محصول';
    const chosenImage = (chosen[2] && String(chosen[2]).trim()) ? chosen[2] : state.currentProduct.img;
    const main = $('#pgMain'); if (main) main.src = chosenImage;
    const thumbs = $('.pg-thumbs');
    if (thumbs) {
      const extras = Array.isArray(state.currentProduct.galleryImages) ? state.currentProduct.galleryImages.filter(src=>src && src!==chosenImage) : [];
      thumbs.innerHTML = `<button class="active" data-thumb="${esc(chosenImage)}"><img src="${esc(chosenImage)}" alt="${esc(chosen[1]||'تصویر محصول')}"></button>` + extras.map((src,i)=>`<button data-thumb="${esc(src)}"><img src="${esc(src)}" alt="نمای ${i+2}" loading="lazy"></button>`).join('');
    }
  }
  const share = e.target.closest('[data-share]');
  if (share) shareBike(share.dataset.share);
});

function shareBike(id){
  const url = location.origin + location.pathname + '#/bike/' + id;
  const b = BIKES.find(x => x.id === id);
  if (navigator.share) {
    navigator.share({ title: `MOTORA ${b.name}`, text: b.tagline, url }).catch(()=>{});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => toast('لینک محصول کپی شد')).catch(() => toast('کپی ناموفق بود','err'));
  } else { toast(url); }
}

function initFinance(price){
  const down = $('#finDown'), months = $('#finMonths'), rate = $('#finRate');
  if (!down) return;
  function calc(){
    const d = +down.value, m = +months.value, r = +rate.value;
    $('#finDownLbl').textContent = d + '%';
    $('#finMonthsLbl').textContent = m + ' ماه';
    $('#finRateLbl').textContent = r + '%';
    const loan = price * (1 - d/100);
    const total = loan * (1 + (r/100) * (m/12));
    const monthly = total / m;
    $('#finMonthly').textContent = fmt(monthly.toFixed(1));
    $('#finTotal').textContent = `مبلغ کل: ${fmt(total.toFixed(1))} میلیون تومان`;
  }
  [down,months,rate].forEach(el => el.addEventListener('input', calc));
  calc();
}

/* customer account */
async function renderAccountPage(){
  let me={logged_in:false};try{me=await (await fetch('api/auth.php?action=me')).json();}catch(e){}
  const authCss=``;
  if(!me.logged_in){
    openRoute(`${authCss}${routeBar(crumb([{label:'خانه',href:'#home'},{label:'ورود و ثبت‌نام'}]))}<div class="account-auth"><div class="account-auth-head"><span class="auth-kicker">✦ حساب مشتریان MOTORA</span><h1>همه تجربه‌های شما، <span class="grad">یک‌جا</span></h1><p>برای پیگیری سفارش‌ها، رزرو تست‌درایو و مدیریت علاقه‌مندی‌ها وارد حساب شوید یا حساب جدید بسازید.</p></div><div class="account-auth-grid"><section class="account-auth-card"><h2>ورود به حساب</h2><p class="auth-desc">به حساب کاربری خود دسترسی پیدا کنید.</p><form id="customerLogin" class="form-grid"><label>شماره موبایل<input name="phone" required inputmode="tel" autocomplete="tel" placeholder="0912 123 4567"></label><label>رمز عبور<input name="password" type="password" required minlength="8" autocomplete="current-password" placeholder="رمز عبور شما"></label><button class="btn btn-primary" type="submit">ورود به حساب ←</button></form></section><section class="account-auth-card"><h2>ساخت حساب جدید</h2><p class="auth-desc">ثبت‌نام رایگان و سریع برای مدیریت درخواست‌ها.</p><form id="customerRegister" class="form-grid"><label>نام و نام خانوادگی<input name="full_name" required minlength="3" autocomplete="name" placeholder="نام کامل شما"></label><label>شماره موبایل<input name="phone" required inputmode="tel" autocomplete="tel" placeholder="0912 123 4567"></label><label>ایمیل <span class="muted">(اختیاری)</span><input name="email" type="email" autocomplete="email" placeholder="name@example.com"></label><label>انتخاب رمز عبور<input name="password" type="password" required minlength="8" autocomplete="new-password" placeholder="حداقل ۸ کاراکتر"></label><button class="btn btn-primary" type="submit">ایجاد حساب کاربری</button></form></section></div><p id="accountMsg" class="account-auth-message" role="alert"></p></div>`,'ورود و ثبت‌نام');
    const submit=async(form,action)=>{form.addEventListener('submit',async e=>{e.preventDefault();const b=form.querySelector('button');b.disabled=true;try{const r=await fetch('api/auth.php?action='+action,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Object.fromEntries(new FormData(form).entries()))});const d=await r.json();if(!r.ok||!d.ok)throw new Error(d.message||'خطا');toast(d.message||'موفق');await renderAccountPage();}catch(err){$('#accountMsg').textContent=err.message;}finally{b.disabled=false;}});};
    submit($('#customerLogin'),'login');submit($('#customerRegister'),'register');return;
  }
  let orders=[],extra={bookings:[],reviews:[]};
  try{const d=await(await fetch('api/my-orders.php')).json();orders=d.orders||[];}catch(e){}
  try{const d=await(await fetch('api/my-account.php')).json();extra=d||extra;}catch(e){}
  const bikeName=id=>(BIKES.find(b=>b.id===id)||{}).name||id||'—';
  const dateFa=v=>{if(!v)return'—';const d=new Date(String(v).slice(0,10)+'T12:00:00');return isNaN(d)?esc(v):d.toLocaleDateString('fa-IR',{year:'numeric',month:'long',day:'numeric'});};
  const orderHtml=orders.length?orders.map(o=>`<div class="account-entry"><div><b class="en">${esc(o.order_number)}</b><p>${dateFa(o.created_at)} · ${(o.items||[]).map(i=>esc(i.product_name)+' × '+esc(i.quantity)).join('، ')}</p><p>وضعیت: ${esc(o.status)} · پرداخت: ${o.payment_status==='paid'?'تأیید شده':'در انتظار بررسی'}</p></div><b>${fmt(Number(o.subtotal))} میلیون تومان</b></div>`).join(''):'<div class="account-empty">هنوز سفارشی ثبت نکرده‌اید. <a href="#bikes">مشاهده محصولات</a></div>';
  const bookingHtml=(extra.bookings||[]).length?extra.bookings.map(x=>`<div class="account-entry"><div><b>${esc(bikeName(x.bike))}</b><p>تاریخ: ${dateFa(x.booking_date)} · ساعت: ${esc(String(x.booking_time||'').slice(0,5))}</p></div><span class="badge">${({new:'در انتظار تأیید',confirmed:'تأیید شده',cancelled:'لغو شده',done:'انجام شده'}[x.status]||esc(x.status))}</span></div>`).join(''):'<div class="account-empty">رزرو تست‌درایوی با این شماره موبایل پیدا نشد. <a href="#/testdrive">رزرو تست‌درایو</a></div>';
  const reviewHtml=(extra.reviews||[]).length?extra.reviews.map(x=>`<div class="account-entry"><div><b>${esc(x.product_name||'نظر شما')}</b><p>${esc(x.comment||'')} · امتیاز: ${esc(x.rating||'—')} · ${dateFa(x.created_at)}</p></div><span>${({pending:'در انتظار بررسی',approved:'تأیید و منتشر شده',rejected:'رد شده'}[x.status]||esc(x.status||'ثبت شده'))}</span></div>`).join(''):'<div class="account-empty">هنوز نظری با این حساب ثبت نکرده‌اید. می‌توانید از فرم زیر نظر خود را ارسال کنید.</div>';
  const wishlist=[...state.wishlist], compare=[...state.compare], cart=state.cart||[];
  const localItems=(ids)=>ids.length?ids.map(id=>`<div class="account-entry"><b>${esc(bikeName(id))}</b><a class="btn btn-ghost btn-sm" href="#/bike/${encodeURIComponent(id)}">مشاهده محصول</a></div>`).join(''):'<div class="account-empty">موردی در این بخش ندارید.</div>';
  const cartHtml=cart.length?cart.map(x=>`<div class="account-entry"><b>${esc(bikeName(x.id))} × ${Number(x.qty)||1}</b><span>${fmt((BIKES.find(b=>b.id===x.id)?.price||0)*(Number(x.qty)||1))} میلیون تومان</span></div>`).join(''):'<div class="account-empty">سبد خرید شما خالی است.</div>';
  openRoute(`${authCss}${routeBar(crumb([{label:'خانه',href:'#home'},{label:'حساب کاربری'}]))}<div class="account-wrap"><div class="account-hero"><div style="display:flex;justify-content:space-between;gap:16px;align-items:center;flex-wrap:wrap"><div><p class="eyebrow">MY MOTORA</p><h1>سلام، ${esc(me.user.full_name)}</h1><p>از اینجا می‌توانید سفارش‌ها، رزروها و انتخاب‌های خود را مدیریت کنید.</p><p style="margin-top:7px">موبایل: <b dir="ltr">${esc(me.user.phone)}</b> ${me.user.email?' · '+esc(me.user.email):''}</p></div><button class="btn btn-ghost" id="logoutCustomer">خروج از حساب</button></div></div>
  <div class="account-stats"><a class="account-stat" href="#/account"><b>${orders.length}</b><span>سفارش‌ها</span></a><a class="account-stat" href="#/account"><b>${(extra.bookings||[]).length}</b><span>تست‌درایو</span></a><a class="account-stat" href="#/account"><b>${(extra.reviews||[]).length}</b><span>نظرات</span></a><a class="account-stat" href="#/account"><b>${wishlist.length}</b><span>علاقه‌مندی</span></a><a class="account-stat" href="#/account"><b>${cartCount()}</b><span>سبد خرید</span></a><a class="account-stat" href="#/account"><b>${compare.length}</b><span>مقایسه</span></a></div>
  <section class="account-section" id="account-orders"><div class="account-section-head"><h2>سفارش‌های من</h2><a href="#/cart" class="btn btn-ghost btn-sm">سبد خرید</a></div>${orderHtml}</section>
  <section class="account-section" id="account-bookings"><div class="account-section-head"><h2>رزروهای تست‌درایو</h2><a href="#/testdrive" class="btn btn-ghost btn-sm">رزرو جدید</a></div>${bookingHtml}</section>
  <section class="account-section" id="account-reviews"><div class="account-section-head"><h2>نظرات محصولات</h2></div><p class="muted" style="line-height:1.9">نظر و امتیاز خود را ثبت کنید. پس از بررسی و تأیید مدیر، نظر شما در صفحه همان محصول برای دیگران نمایش داده می‌شود.</p>${reviewHtml}<form id="customerReviewForm" style="display:grid;gap:10px;margin-top:18px;padding-top:16px;border-top:1px solid var(--line)"><b>ثبت نظر درباره محصول</b><select name="product_id" required style="padding:12px;border:1px solid var(--line);border-radius:10px;background:var(--bg);color:var(--txt)"><option value="">انتخاب محصول</option>${BIKES.map(b=>`<option value="${esc(b.id)}">${esc(b.name)}</option>`).join('')}</select><select name="rating" required style="padding:12px;border:1px solid var(--line);border-radius:10px;background:var(--bg);color:var(--txt)"><option value="5">۵ ستاره</option><option value="4">۴ ستاره</option><option value="3">۳ ستاره</option><option value="2">۲ ستاره</option><option value="1">۱ ستاره</option></select><textarea name="comment" required minlength="5" maxlength="2000" placeholder="تجربه و نظر شما درباره محصول..." style="padding:12px;border:1px solid var(--line);border-radius:10px;background:var(--bg);color:var(--txt);min-height:95px"></textarea><button class="btn btn-primary" type="submit">ارسال نظر برای بررسی</button><small id="reviewMsg" class="muted"></small></form></section>
  <section class="account-section" id="account-wishlist"><div class="account-section-head"><h2>علاقه‌مندی‌ها</h2><a href="#/wishlist" class="btn btn-ghost btn-sm">مشاهده همه</a></div>${localItems(wishlist)}</section>
  <section class="account-section" id="account-cart"><div class="account-section-head"><h2>سبد خرید</h2><a href="#/cart" class="btn btn-primary btn-sm">تکمیل خرید</a></div>${cartHtml}</section>
  <section class="account-section" id="account-compare"><div class="account-section-head"><h2>لیست مقایسه</h2><a href="#/compare" class="btn btn-ghost btn-sm">مقایسه محصولات</a></div>${localItems(compare)}</section></div>`,'حساب کاربری');
  $('#logoutCustomer')?.addEventListener('click',async()=>{await fetch('api/auth.php?action=logout',{method:'POST'});await renderAccountPage();});
  $('#customerReviewForm')?.addEventListener('submit',async e=>{e.preventDefault();const form=e.currentTarget,btn=form.querySelector('button'),msg=$('#reviewMsg');btn.disabled=true;try{const r=await fetch('api/reviews.php',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Object.fromEntries(new FormData(form).entries()))});const d=await r.json();if(!r.ok||!d.ok)throw new Error(d.message||'خطا');msg.textContent=d.message;form.reset();setTimeout(()=>renderAccountPage(),500);}catch(err){msg.textContent=err.message;}finally{btn.disabled=false;}});
}

/* cart and checkout */
function renderCartPage(){
  const rows=state.cart.map(item=>({item,bike:BIKES.find(b=>b.id===item.id)})).filter(x=>x.bike);
  const lines=rows.map(({item,bike})=>`<div class="panel" style="display:grid;grid-template-columns:100px 1fr auto;gap:16px;align-items:center;padding:16px;margin:12px 0"><img src="${esc(bike.img)}" alt="${esc(bike.name)}" style="width:100px;height:78px;object-fit:cover;border-radius:10px"><div><b class="en">${esc(bike.name)}</b><p class="muted" style="margin:5px 0">${fmt(bike.price)} میلیون تومان</p><div style="display:flex;gap:8px;align-items:center"><button class="btn btn-ghost btn-sm" data-cart-qty="${esc(bike.id)}" data-delta="-1">−</button><b>${item.qty}</b><button class="btn btn-ghost btn-sm" data-cart-qty="${esc(bike.id)}" data-delta="1">+</button><button class="btn btn-ghost btn-sm" data-cart-remove="${esc(bike.id)}">حذف</button></div></div><b>${fmt(bike.price*item.qty)} میلیون</b></div>`).join('');
  const html=`${routeBar(crumb([{label:'خانه',href:'#home'},{label:'سبد خرید'}]))}<h1 class="block-title">سبد خرید شما</h1>${rows.length?`<div class="cart-layout"><div>${lines}</div><aside class="panel" style="padding:22px;height:max-content"><h3>خلاصه سفارش</h3><p style="display:flex;justify-content:space-between"><span>جمع کل</span><b>${fmt(cartTotal())} میلیون تومان</b></p><small class="muted">هزینه ارسال و جزئیات نهایی پس از هماهنگی اعلام می‌شود.</small><button class="btn btn-primary" id="goCheckout" style="width:100%;margin-top:18px">ادامه و ثبت سفارش</button></aside></div><section id="checkoutSection" hidden class="panel" style="padding:22px;margin-top:20px"><h2>اطلاعات خریدار</h2><div id="checkoutAccountNotice" class="panel" style="padding:12px;margin:12px 0">برای ثبت سفارش باید وارد حساب کاربری شوید. <a href="#/account" class="btn btn-ghost btn-sm">ورود / ثبت‌نام</a></div><form id="checkoutForm" class="form-grid"><label>نام و نام خانوادگی<input name="customer_name" required maxlength="120"></label><label>شماره موبایل<input name="phone" required inputmode="tel" pattern="[0-9۰-۹+() -]{8,20}" maxlength="20"></label><label>ایمیل (اختیاری)<input name="email" type="email" maxlength="190"></label><label>شهر و نشانی تحویل<textarea name="address" required rows="3" maxlength="1000"></textarea></label><label class="full">توضیحات سفارش<textarea name="notes" rows="2" maxlength="1000"></textarea></label><div class="full panel" style="padding:16px"><h3>پرداخت کارت‌به‌کارت</h3><p>پس از ثبت سفارش، مبلغ را به کارت زیر واریز کنید. سفارش تا زمان بررسی و تأیید پرداخت توسط فروشگاه در وضعیت انتظار باقی می‌ماند.</p><p>بانک: <b>${esc((window.MOTORA_PAYMENT||{}).bank||"—")}</b></p><p>شماره کارت: <b class="en">${esc((window.MOTORA_PAYMENT||{}).card||"—")}</b></p><p>به نام: <b>${esc((window.MOTORA_PAYMENT||{}).owner||"—")}</b></p><label>شماره پیگیری / کد مرجع واریز<input name="payment_reference" maxlength="100" required placeholder="کد پیگیری رسید بانکی"></label><label class="full">تصویر رسید پرداخت (JPG، PNG یا WEBP؛ حداکثر ۵ مگابایت)<input name="payment_proof_file" type="file" accept="image/jpeg,image/png,image/webp" required><small class="muted">تصویر رسید باید خوانا و مربوط به همین سفارش باشد.</small><span id="paymentProofPreview" class="muted"></span></label></div><div class="full"><button class="btn btn-primary" type="submit">ارسال رسید و ثبت سفارش</button></div></form></section>`:`<div class="empty-state"><h3>سبد خرید خالی است</h3><p>برای شروع، یک موتورسیکلت به سبد خرید اضافه کنید.</p><a class="btn btn-primary" href="#bikes">مشاهده موتورها</a></div>`}`;
  openRoute(html,'سبد خرید');
  const go=$('#goCheckout');if(go)go.addEventListener('click',()=>{$('#checkoutSection').hidden=false;$('#checkoutSection').scrollIntoView({behavior:'smooth',block:'start'});});
  const form=$('#checkoutForm');if(form){fetch('api/auth.php?action=me').then(r=>r.json()).then(d=>{if(d.logged_in){$('#checkoutAccountNotice')?.remove();form.elements.customer_name.value=d.user.full_name||'';form.elements.phone.value=d.user.phone||'';form.elements.email.value=d.user.email||'';}else{$('#checkoutAccountNotice')?.classList.add('warning');}}).catch(()=>{});form.addEventListener('submit',async ev=>{ev.preventDefault();const fd=new FormData(form);const payload=Object.fromEntries(fd.entries());const proof=fd.get('payment_proof_file');delete payload.payment_proof_file;payload.items=state.cart.map(x=>({slug:x.id,quantity:x.qty}));const btn=form.querySelector('button[type=submit]');btn.disabled=true;btn.textContent='در حال بارگذاری رسید...';try{if(!proof||!proof.size)throw new Error('تصویر رسید پرداخت را انتخاب کنید');const proofFd=new FormData();proofFd.append('payment_proof',proof);const up=await fetch('api/upload-payment-proof.php',{method:'POST',body:proofFd});const ud=await up.json();if(!up.ok||!ud.ok)throw new Error(ud.message||'بارگذاری رسید ناموفق بود');payload.payment_proof=ud.path;btn.textContent='در حال ثبت سفارش...';const res=await fetch('api/create-order.php',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});const data=await res.json();if(!res.ok||!data.ok)throw new Error(data.message||'ثبت سفارش انجام نشد');state.cart=[];saveCart();openRoute(`${routeBar(crumb([{label:'خانه',href:'#home'},{label:'ثبت سفارش'}]))}<div class="empty-state"><h2>سفارش شما ثبت شد</h2><p>شماره سفارش: <b class="en">${esc(data.order_number)}</b></p><p>رسید پرداخت دریافت شد؛ وضعیت پرداخت تا بررسی مدیر در انتظار تأیید است.</p><a class="btn btn-primary" href="#bikes">بازگشت به فروشگاه</a></div>`,'ثبت سفارش');}catch(err){toast(err.message,'err');btn.disabled=false;btn.textContent='ثبت سفارش با کارت‌به‌کارت';}});}
}
routeView.addEventListener('click',e=>{const q=e.target.closest('[data-cart-qty]');if(q){const item=state.cart.find(x=>x.id===q.dataset.cartQty);if(item){item.qty=Math.max(0,Math.min(99,item.qty+Number(q.dataset.delta)));state.cart=state.cart.filter(x=>x.qty>0);saveCart();renderCartPage();}return;}const r=e.target.closest('[data-cart-remove]');if(r){state.cart=state.cart.filter(x=>x.id!==r.dataset.cartRemove);saveCart();renderCartPage();}});

/* blog */
function renderBlogPage(){
  openRoute(`${routeBar(crumb([{label:'خانه',href:'#home'},{label:'بلاگ'}]))}
    <h1 style="font-size:clamp(26px,4vw,40px);font-weight:900;margin-bottom:8px">بلاگ <span class="grad">MOTORA</span></h1>
    <p class="muted" style="font-size:13.5px;margin-bottom:26px">داستان‌های جاده، راهنمای خرید و اخبار دنیای موتورسیکلت.</p>
    <div class="blog-grid">${BLOG.map(blogCardHTML).join('')}</div>
  </div>`, 'بلاگ');
}

function renderArticle(id){
  const p = BLOG.find(x => x.id === id);
  if (!p) return render404();
  const related = BLOG.filter(x => x.id !== id).slice(0,2);
  openRoute(`${routeBar(crumb([{label:'خانه',href:'#home'},{label:'بلاگ',href:'#/blog'},{label:p.title}]))}
    <div class="article-hero"><img src="${p.img}" alt="${p.title}" decoding="async"></div>
    <h1 style="font-size:clamp(24px,4vw,38px);font-weight:900;line-height:1.3;margin-bottom:12px">${p.title}</h1>
    <div class="article-meta"><span>${p.cat}</span><span>${p.date}</span><span>${p.read} مطالعه</span><span>نویسنده: ${p.author}</span></div>
    <div class="article-body">${p.body}</div>
    <div class="share-row">
      <button data-article-share="${p.id}">↗ اشتراک‌گذاری</button>
      <button onclick="navigator.clipboard&&navigator.clipboard.writeText(location.href).then(()=>window.__toast('لینک کپی شد'))">⧉ کپی لینک</button>
      <button onclick="window.print()">⎙ چاپ</button>
    </div>
    <h2 class="block-title" style="margin-top:40px">مقالات مرتبط</h2>
    <div class="blog-grid">${related.map(blogCardHTML).join('')}</div>
  </div>`, p.title);
}
routeView.addEventListener('click', e => {
  const s = e.target.closest('[data-article-share]');
  if (s) {
    const p = BLOG.find(x => x.id === s.dataset.articleShare);
    if (navigator.share) navigator.share({ title:p.title, text:p.excerpt, url:location.href }).catch(()=>{});
    else if (navigator.clipboard) navigator.clipboard.writeText(location.href).then(()=>toast('لینک کپی شد'));
  }
});
window.__toast = toast;

/* about */
function renderAbout(){
  openRoute(`${routeBar(crumb([{label:'خانه',href:'#home'},{label:'درباره ما'}]))}
    <div class="about-hero">
      <div><h1>ما برای <span class="grad">سواری</span> ساخته شده‌ایم</h1><p>MOTORA در سال ۱۳۹۷ با یک هدف ساده شروع شد: دسترسی موتورسواران ایرانی به موتورسیکلت‌های باکیفیت، با پشتیبانی واقعی و قیمت شفاف. امروز با ۶ نمایندگی و بیش از ۲,۴۰۰ مشتری، همان مسیر را با جدیت ادامه می‌دهیم.</p></div>
      <div class="ah-media"><img src="${IMG.road}" alt="تیم MOTORA" loading="lazy"></div>
    </div>
    <div class="about-stats">
      <div class="about-stat"><b data-count="2400">0</b><span>مشتری راضی</span></div>
      <div class="about-stat"><b data-count="6">0</b><span>نمایندگی فعال</span></div>
      <div class="about-stat"><b data-count="18">0</b><span>مدل موجود</span></div>
      <div class="about-stat"><b data-count="7">0</b><span>سال تجربه</span></div>
    </div>
    <h2 class="block-title">مسیر ما</h2>
    <div class="timeline">
      <div class="tl-item"><b class="en">2018</b><p>افتتاح اولین شوروم در تهران با ۳ مدل موتور اسپرت.</p></div>
      <div class="tl-item"><b class="en">2020</b><p>راه‌اندازی شبکه نمایندگی‌ها در اصفهان و شیراز.</p></div>
      <div class="tl-item"><b class="en">2022</b><p>معرفی اولین مدل سفارشی MOTORA با نام TITAN X.</p></div>
      <div class="tl-item"><b class="en">2024</b><p>رسیدن به ۲,۰۰۰ مشتری و راه‌اندازی پشتیبانی ۲۴/۷.</p></div>
      <div class="tl-item"><b class="en">2026</b><p>معرفی نسل جدید NERO R و VORTEX RS با الکترونیک پیشرفته.</p></div>
    </div>
    <h2 class="block-title" style="margin-top:36px">تیم ما</h2>
    <div class="team-grid">
      <div class="team-card"><div class="team-avatar">A</div><b>آرش رضایی</b><span>بنیان‌گذار و مدیرعامل</span></div>
      <div class="team-card"><div class="team-avatar">N</div><b>نیلوفر کاظمی</b><span>مدیر تجربه مشتری</span></div>
      <div class="team-card"><div class="team-avatar">S</div><b>سعید محمدی</b><span>سرپرست فنی</span></div>
      <div class="team-card"><div class="team-avatar">M</div><b>مریم احمدی</b><span>مدیر بازاریابی</span></div>
    </div>
  </div>`, 'درباره ما');
}

/* warranty */
function renderWarranty(){
  openRoute(`${routeBar(crumb([{label:'خانه',href:'#home'},{label:'گارانتی'}]))}
    <h1 style="font-size:clamp(26px,4vw,40px);font-weight:900;margin-bottom:8px">گارانتی و <span class="grad">خدمات پس از فروش</span></h1>
    <p class="muted" style="font-size:13.5px;max-width:620px;line-height:1.9">تمام موتورسیکلت‌های MOTORA با ۲ سال گارانتی رسمی و پشتیبانی سراسری ارائه می‌شوند.</p>
    <div class="warranty-grid">
      <div class="w-card"><div class="w-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></div><h4>پوشش کامل موتور</h4><p>قطعات داخلی موتور، گیربکس و سیستم انتقال قدرت تا ۲ سال یا ۲۰,۰۰۰ کیلومتر.</p></div>
      <div class="w-card"><div class="w-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/></svg></div><h4>سیستم برق و الکترونیک</h4><p>داشبورد، سنسورها، چراغ‌ها و واحد کنترل الکترونیکی.</p></div>
      <div class="w-card"><div class="w-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg></div><h4>سرویس دوره‌ای</h4><p>سه سرویس رایگان در ۱,۰۰۰، ۵,۰۰۰ و ۱۰,۰۰۰ کیلومتر.</p></div>
      <div class="w-card"><div class="w-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/></svg></div><h4>امداد جاده‌ای</h4><p>پوشش ۲۴/۷ در سراسر کشور برای مواقع اضطراری.</p></div>
    </div>
    <div class="terms"><h4>شرایط گارانتی</h4><ul>
      <li>گارانتی از تاریخ تحویل موتور فعال می‌شود.</li>
      <li>انجام سرویس‌های دوره‌ای در نمایندگی‌های مجاز الزامی است.</li>
      <li>خسارات ناشی از تصادف، تغییرات غیرمجاز یا استفاده در مسابقات پوشش داده نمی‌شود.</li>
      <li>قطعات مصرفی مانند لاستیک، لنت ترمز و فیلترها شامل گارانتی نیستند.</li>
      <li>برای فعال‌سازی گارانتی، کارت گارانتی و فاکتور رسمی الزامی است.</li>
    </ul></div>
  </div>`, 'گارانتی');
}

/* dealers */
function renderDealers(){
  openRoute(`${routeBar(crumb([{label:'خانه',href:'#home'},{label:'نمایندگی‌ها'}]))}
    <h1 style="font-size:clamp(26px,4vw,40px);font-weight:900;margin-bottom:8px">نمایندگی‌های <span class="grad">MOTORA</span></h1>
    <p class="muted" style="font-size:13.5px;margin-bottom:20px">نزدیک‌ترین نمایندگی را روی نقشه پیدا کنید.</p>
    <div class="map-layout">
      <div id="dealerMap"></div>
      <div class="dealer-list" id="dealerList"></div>
    </div>
  </div>`, 'نمایندگی‌ها');
  renderDealerList();
  initMap();
}

function renderDealerList(){
  const list = $('#dealerList');
  if (!list) return;
  list.innerHTML = DEALERS.map((d,i) => `<div class="dealer-item" data-dealer="${i}"><b>${d.city}</b><span>${d.addr}</span><small>${d.phone} · ${d.hours}</small></div>`).join('');
  list.addEventListener('click', e => {
    const item = e.target.closest('[data-dealer]'); if (!item) return;
    $$('.dealer-item').forEach(x => x.classList.remove('active'));
    item.classList.add('active');
    if (window.__dealerMap) {
      const d = DEALERS[+item.dataset.dealer];
      window.__dealerMap.setView([d.lat,d.lng], 13);
      if (window.__dealerMarkers && window.__dealerMarkers[+item.dataset.dealer]) window.__dealerMarkers[+item.dataset.dealer].openPopup();
    }
  });
}

function initMap(){
  const el = $('#dealerMap');
  if (!el) return;
  if (!window.L) { loadScript('https://unpkg.com/leaflet@1.9.4/dist/leaflet.js', initMap); return; }
  if (el.dataset.init) return;
  el.dataset.init = '1';
  const map = L.map(el, {scrollWheelZoom:false}).setView([32.4279,53.6880], 5);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom:18, attribution:'&copy; OpenStreetMap' }).addTo(map);
  window.__dealerMap = map;
  window.__dealerMarkers = DEALERS.map((d,i) => L.marker([d.lat,d.lng]).addTo(map).bindPopup(`<b>${d.city}</b><br>${d.addr}<br><small>${d.phone}</small>`));
}

/* test drive */
function renderTestDrive(preselected){
  const bikeOptions = BIKES.map(b => `<option value="${b.id}" ${preselected===b.id?'selected':''}>${b.name}</option>`).join('');
  openRoute(`${routeBar(crumb([{label:'خانه',href:'#home'},{label:'رزرو تست‌درایو'}]))}
    <h1 style="font-size:clamp(26px,4vw,40px);font-weight:900;margin-bottom:8px">رزرو <span class="grad">تست‌درایو</span></h1>
    <p class="muted" style="font-size:13.5px;max-width:620px;line-height:1.9;margin-bottom:22px">تاریخ و ساعت مورد نظر را انتخاب کنید. تست‌درایو رایگان است و کارشناس همراه شما خواهد بود.</p>
    <div class="td-layout">
      <div class="cal-card">
        <div class="cal-head"><button id="calPrev" aria-label="ماه قبل">›</button><b id="calTitle"></b><button id="calNext" aria-label="ماه بعد">‹</button></div>
        <div class="cal-week"><span>ش</span><span>ی</span><span>د</span><span>س</span><span>چ</span><span>پ</span><span>ج</span></div>
        <div class="cal-grid" id="calGrid"></div>
        <div style="display:flex;gap:14px;margin-top:12px;font-size:10.5px;color:var(--dim);flex-wrap:wrap"><span>● امروز</span><span style="color:var(--err)">● رزرو شده</span><span style="color:var(--accent)">■ انتخاب شما</span></div>
      </div>
      <div class="td-side">
        <div class="cal-card">
          <h4 style="font-size:13px;margin-bottom:10px">ساعت مراجعه</h4>
          <div class="time-grid" id="timeGrid"></div>
        </div>
        <div class="td-summary" id="tdSummary">تاریخ و ساعتی انتخاب نشده است.</div>
        <form class="contact-form" id="tdForm" novalidate>
          <div class="field"><label for="tdName">نام و نام خانوادگی</label><input id="tdName" type="text" placeholder="نام شما" required><span class="field-error">نام را وارد کنید</span></div>
          <div class="field"><label for="tdPhone">شماره موبایل</label><input id="tdPhone" type="tel" placeholder="09121234567" required><span class="field-error">شماره موبایل معتبر وارد کنید (۰۹...)</span></div>
          <div class="field"><label for="tdBike">موتور مورد نظر</label><select id="tdBike">${bikeOptions}</select></div>
          <button class="btn btn-primary btn-submit" type="submit">تأیید رزرو</button>
        </form>
      </div>
    </div>
  </div>`, 'رزرو تست‌درایو');
  initCalendar();
}

function initCalendar(){
  const J = window.jalaali || window.Jalaali;
  if (!J) { toast('تقویم شمسی در دسترس نیست','err'); return; }
  const today = new Date(); today.setHours(0,0,0,0);
  const cur = J.toJalaali(today.getFullYear(), today.getMonth()+1, today.getDate());
  let vy = cur.jy, vm = cur.jm;
  let selectedDate = null, selectedTime = null;
  const bookings = store.get('bookings', []);
  const bookedKeys = new Set(bookings.map(b => b.date));
  const times = ['09:00','11:00','14:00','16:00','18:00'];

  function render(){
    const title = $('#calTitle'), grid = $('#calGrid');
    if (!title || !grid) return;
    title.textContent = `${J.jalaaliMonthLength(vy,vm) ? ['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'][vm-1] : ''} ${vy}`;
    const len = J.jalaaliMonthLength(vy, vm);
    const first = J.toGregorian(vy, vm, 1);
    const firstDate = new Date(first.gy, first.gm-1, first.gd);
    const offset = (firstDate.getDay() + 1) % 7;
    let html = '';
    for (let i=0;i<offset;i++) html += '<div class="cal-day empty"></div>';
    for (let d=1;d<=len;d++){
      const g = J.toGregorian(vy, vm, d);
      const date = new Date(g.gy, g.gm-1, g.gd);
      const key = `${g.gy}-${String(g.gm).padStart(2,'0')}-${String(g.gd).padStart(2,'0')}`;
      const past = date < today;
      const booked = bookedKeys.has(key);
      const isToday = date.getTime() === today.getTime();
      const sel = selectedDate === key;
      html += `<button class="cal-day ${isToday?'today':''} ${sel?'selected':''} ${booked?'booked':''}" data-date="${key}" ${past||booked?'disabled':''} aria-label="${d} ${['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'][vm-1]}">${d}</button>`;
    }
    grid.innerHTML = html;
    renderTimes();
  }
  function renderTimes(){
    const tg = $('#timeGrid'); if (!tg) return;
    tg.innerHTML = times.map(t => `<button class="time-slot ${selectedTime===t?'active':''}" data-time="${t}" ${!selectedDate?'disabled':''}>${t}</button>`).join('');
  }
  function updateSummary(){
    const el = $('#tdSummary'); if (!el) return;
    if (!selectedDate) { el.textContent = 'تاریخ و ساعتی انتخاب نشده است.'; return; }
    const [gy,gm,gd] = selectedDate.split('-').map(Number);
    const j = J.toJalaali(gy,gm,gd);
    const monthName = ['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'][j.jm-1];
    el.innerHTML = `تاریخ: <b>${j.jd} ${monthName} ${j.jy}</b><br>ساعت: <b>${selectedTime || '—'}</b><br>مدل: <b>${BIKES.find(b=>b.id===$('#tdBike').value)?.name || '—'}</b>`;
  }
  $('#calPrev').onclick = () => { vm--; if (vm<1){vm=12;vy--;} render(); };
  $('#calNext').onclick = () => { vm++; if (vm>12){vm=1;vy++;} render(); };
  $('#calGrid').addEventListener('click', e => {
    const b = e.target.closest('[data-date]'); if (!b || b.disabled) return;
    selectedDate = b.dataset.date; selectedTime = null; render(); updateSummary();
  });
  $('#timeGrid').addEventListener('click', e => {
    const b = e.target.closest('[data-time]'); if (!b || b.disabled) return;
    selectedTime = b.dataset.time; renderTimes(); updateSummary();
  });
  $('#tdBike').addEventListener('change', updateSummary);
  render();

  $('#tdForm').addEventListener('submit', async e => {
    e.preventDefault();
    const name = $('#tdName'), phone = $('#tdPhone');
    let ok = true;
    [name,phone].forEach(f => f.closest('.field').classList.remove('invalid'));
    if (!name.value.trim()) { name.closest('.field').classList.add('invalid'); ok = false; }
    if (!/^09\d{9}$/.test(phone.value.trim())) { phone.closest('.field').classList.add('invalid'); ok = false; }
    if (!selectedDate || !selectedTime) { toast('تاریخ و ساعت را انتخاب کنید','warn'); ok = false; }
    if (!ok) return;
    const submitBtn = e.target.querySelector('button[type=submit]');
    submitBtn.disabled = true; submitBtn.textContent = 'در حال ثبت...';
    try {
      const r = await fetch('api/book-testdrive.php', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({
        date:selectedDate, time:selectedTime, bike:$('#tdBike').value, name:name.value.trim(), phone:phone.value.trim()
      })});
      const data = await r.json();
      if (!r.ok) throw new Error(data.message || 'ثبت رزرو ناموفق بود');
      toast(data.message || 'رزرو تست‌درایو ثبت شد');
      selectedDate = null; selectedTime = null; name.value = ''; phone.value = '';
      render(); updateSummary();
    } catch(err) { toast(err.message || 'ارتباط با سرور برقرار نشد','err'); }
    finally { submitBtn.disabled = false; submitBtn.textContent = 'تأیید رزرو'; }
  });
}

/* compare page */
function renderComparePage(){
  const ids = [...state.compare];
  if (ids.length < 2) {
    openRoute(`${routeBar(crumb([{label:'خانه',href:'#home'},{label:'مقایسه'}]))}
      <h1 style="font-size:32px;font-weight:900;margin-bottom:16px">مقایسه موتورها</h1>
      <div class="empty-state">
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>
        <h3>دو موتور را برای مقایسه انتخاب کنید</h3><p>از صفحه موتورها، روی دکمه ⇄ هر کارت بزنید.</p>
        <a href="#bikes" class="btn btn-primary btn-sm">مشاهده موتورها</a>
      </div>
    </div>`, 'مقایسه');
    return;
  }
  const [a,b] = ids.map(id => BIKES.find(x => x.id === id));
  const rows = [
    ['دسته', CAT[a.cat], CAT[b.cat], null],
    ['حجم موتور (cc)', a.cc, b.cc, 'high'],
    ['قدرت (hp)', a.power, b.power, 'high'],
    ['حداکثر سرعت', a.speed, b.speed, 'high'],
    ['شتاب ۰-۱۰۰ (ثانیه)', a.accel, b.accel, 'low'],
    ['گشتاور (nm)', a.torque, b.torque, 'high'],
    ['وزن (kg)', a.weight, b.weight, 'low'],
    ['قیمت (میلیون تومان)', a.price, b.price, 'low']
  ];
  openRoute(`${routeBar(crumb([{label:'خانه',href:'#home'},{label:'مقایسه'}]))}
    <h1 class="en" style="font-size:clamp(24px,4vw,34px);font-weight:900;margin-bottom:16px">${a.name} <span class="dim">VS</span> ${b.name}</h1>
    <table class="cmp-table">
      <thead><tr><th></th><th>${a.name}</th><th>${b.name}</th></tr></thead>
      <tbody>${rows.map(([label,va,vb,better]) => {
        const winA = better==='high' ? va>vb : better==='low' ? va<vb : false;
        const winB = better==='high' ? vb>va : better==='low' ? vb<va : false;
        return `<tr><td>${label}</td><td class="${winA?'win':''}">${va}</td><td class="${winB?'win':''}">${vb}</td></tr>`;
      }).join('')}</tbody>
    </table>
    <p class="dim" style="font-size:11.5px;margin-top:14px">★ نشان‌دهنده برتری در آن شاخص است.</p>
    <div style="display:flex;gap:8px;margin-top:20px;flex-wrap:wrap">
      <a href="#/bike/${a.id}" class="btn btn-ghost btn-sm">صفحه ${a.name}</a>
      <a href="#/bike/${b.id}" class="btn btn-ghost btn-sm">صفحه ${b.name}</a>
      <button class="btn btn-ghost btn-sm" onclick="localStorage.removeItem('velocity.compare');location.reload()">پاک کردن مقایسه</button>
    </div>
  </div>`, 'مقایسه');
}

/* wishlist */
function renderWishlist(){
  const list = BIKES.filter(b => state.wishlist.has(b.id));
  openRoute(`${routeBar(crumb([{label:'خانه',href:'#home'},{label:'علاقه‌مندی‌ها'}]))}
    <h1 style="font-size:clamp(26px,4vw,38px);font-weight:900;margin-bottom:8px">علاقه‌مندی‌های <span class="grad">من</span></h1>
    <p class="muted" style="font-size:13px;margin-bottom:24px">${list.length} موتور ذخیره شده — روی همین دستگاه باقی می‌ماند.</p>
    ${list.length ? `<div class="cards">${list.map(bikeCard).join('')}</div>` : `<div class="empty-state"><svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg><h3>هنوز موتوری ذخیره نکرده‌اید</h3><p>با زدن ♥ روی هر کارت، آن را اینجا ذخیره کنید.</p><a href="#bikes" class="btn btn-primary btn-sm">مشاهده موتورها</a></div>`}
  </div>`, 'علاقه‌مندی‌ها');
  syncCardButtons();
}

/* search */
function renderSearch(q){
  const query = q.trim();
  const results = query ? BIKES.filter(b => (b.name+' '+b.desc+' '+CAT[b.cat]).toLowerCase().includes(query.toLowerCase())) : [];
  openRoute(`${routeBar(crumb([{label:'خانه',href:'#home'},{label:'جستجو'}]))}
    <h1 style="font-size:clamp(26px,4vw,38px);font-weight:900;margin-bottom:16px">جستجو</h1>
    <form class="search-inline" style="max-width:440px;margin-bottom:24px" onsubmit="event.preventDefault();location.hash='#/search?q='+encodeURIComponent(this.q.value)">
      <input name="q" value="${esc(query)}" placeholder="نام موتور یا دسته..." aria-label="جستجو" autofocus>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
    </form>
    ${query ? `<p class="muted" style="font-size:12.5px;margin-bottom:16px">${results.length} نتیجه برای «${esc(query)}»</p>` : ''}
    ${results.length ? `<div class="cards">${results.map(bikeCard).join('')}</div>` : `<div class="empty-state"><h3>نتیجه‌ای پیدا نشد</h3><p>عبارت دیگری را امتحان کنید.</p></div>`}
  </div>`, 'جستجو');
  syncCardButtons();
}

/* 404 */
function render404(){
  openRoute(`${routeBar(crumb([{label:'خانه',href:'#home'},{label:'صفحه پیدا نشد'}]))}
    <div class="empty-state" style="padding:100px 20px">
      <div style="font-family:Orbitron;font-size:80px;font-weight:900;background:linear-gradient(90deg,var(--accent),var(--accent2));-webkit-background-clip:text;background-clip:text;color:transparent;line-height:1">404</div>
      <h3 style="margin-top:10px">این صفحه وجود ندارد</h3><p>ممکن است لینک اشتباه باشد یا صفحه حذف شده باشد.</p>
      <a href="#home" class="btn btn-primary btn-sm">بازگشت به خانه</a>
    </div>
  </div>`, 'صفحه پیدا نشد');
}

/* search button */
$('#searchBtn').addEventListener('click', () => {
  openModal(`<form onsubmit="event.preventDefault();location.hash='#/search?q='+encodeURIComponent(this.q.value);closeModal()">
    <h3 style="font-family:Orbitron;font-size:18px;margin-bottom:14px">جستجوی موتور</h3>
    <div class="search-inline" style="min-width:0"><input name="q" placeholder="مثلاً NERO R یا اسپرت..." autofocus aria-label="جستجو"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></div>
    <button class="btn btn-primary btn-sm" style="margin-top:14px;width:100%;justify-content:center" type="submit">جستجو</button>
  </form>`);
  setTimeout(() => $('#modalBody input')?.focus(), 80);
});

/* ============================================================
   FORMS
   ============================================================ */
function validateField(input, validator, message){
  const field = input.closest('.field');
  const ok = validator(input.value.trim());
  field.classList.toggle('invalid', !ok);
  if (!ok) { const err = field.querySelector('.field-error'); if (err) err.textContent = message; }
  return ok;
}

$('#newsletterForm').addEventListener('submit', async e => {
  e.preventDefault();
  const input = $('#nlEmail');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) { toast('ایمیل معتبر وارد کنید','err'); input.focus(); return; }
  try {
    const r = await fetch('api/subscribe.php', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({email:input.value.trim()})});
    const data = await r.json();
    if (!r.ok) throw new Error(data.message || 'خطا در ثبت عضویت');
    toast(data.message || 'عضویت شما در خبرنامه ثبت شد');
    e.target.reset();
  } catch(err) { toast(err.message || 'ارتباط با سرور برقرار نشد','err'); }
});

$('#contactForm').addEventListener('submit', async e => {
  e.preventDefault();
  const name = $('#cName'), phone = $('#cPhone'), email = $('#cEmail'), msg = $('#cMsg');
  let ok = true;
  ok = validateField(name, v => v.length >= 2, 'نام را وارد کنید') && ok;
  ok = validateField(phone, v => /^09\d{9}$/.test(v), 'شماره موبایل معتبر وارد کنید (۰۹...)') && ok;
  ok = validateField(email, v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), 'ایمیل معتبر وارد کنید') && ok;
  ok = validateField(msg, v => v.length >= 5, 'پیام را بنویسید') && ok;
  if (!ok) return;
  const btn = e.target.querySelector('button[type=submit]');
  btn.classList.add('loading'); btn.textContent = 'در حال ارسال...'; btn.disabled = true;
  try {
    const r = await fetch('api/contact.php', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({
      name:name.value.trim(), phone:phone.value.trim(), email:email.value.trim(),
      bike:$('#cBike').value.trim(), message:msg.value.trim()
    })});
    const data = await r.json();
    if (!r.ok) throw new Error(data.message || 'ارسال درخواست ناموفق بود');
    toast(data.message || 'درخواست شما ثبت شد');
    e.target.reset();
  } catch(err) { toast(err.message || 'ارتباط با سرور برقرار نشد','err'); }
  finally { btn.classList.remove('loading'); btn.textContent = 'ارسال درخواست'; btn.disabled = false; }
});

/* ============================================================
   SERVICE WORKER (optional)
   ============================================================ */
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  fetch('sw.js', {method:'HEAD'}).then(r => { if (r.ok) navigator.serviceWorker.register('sw.js').catch(()=>{}); }).catch(()=>{});
}

/* ============================================================
   INIT
   ============================================================ */
renderBikes();
updateCompareBar();
updateWishBadge();
syncCardButtons();
handleRoute();

/* smooth close route on back */
addEventListener('popstate', () => { if (!location.hash.startsWith('#/')) closeRoute(); });

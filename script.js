console.log('Fikra & Partner platform initialized');

const ideaSeeds = [
  { id: 1, name: 'مقهى عطور عربية رقمية', type: 'تجزئة فاخرة', region: 'الرياض', success: 91, budget: 185000, roi: 28, equipment: ['واجهة متجر ذكية', 'نظام نقاط بيع', 'خزانة عرض مبردة', 'هوية بصرية'], status: 'جاهزة للطرح', shares: 34, minTicket: 7500, description: 'تجربة بيع فاخرة تمزج روائح عربية مختارة مع توصيات ذكاء اصطناعي حسب ذوق العميل والمنطقة.' },
  { id: 2, name: 'مركز صيانة متنقل للأحياء', type: 'خدمات منزلية', region: 'جدة', success: 86, budget: 122000, roi: 24, equipment: ['سيارة خدمة', 'معدات كهرباء', 'تطبيق حجز', 'زي موحد'], status: 'تحت الدراسة', shares: 48, minTicket: 5000, description: 'فرق صغيرة تصل خلال 45 دقيقة لصيانة الكهرباء والسباكة والتكييف بعقود شهرية للأحياء.' },
  { id: 3, name: 'مختبر وجبات صحية سحابية', type: 'مطاعم', region: 'دبي', success: 88, budget: 240000, roi: 31, equipment: ['مطبخ سحابي', 'ثلاجات صناعية', 'نظام طلبات', 'تغليف حراري'], status: 'متاحة للاستثمار', shares: 26, minTicket: 12000, description: 'علامة وجبات اشتراك يومية للموظفين والرياضيين مع تحليل سعرات وخطة توزيع.' },
  { id: 4, name: 'منصة تأجير معدات البناء', type: 'تقنية وتشغيل', region: 'القاهرة', success: 82, budget: 310000, roi: 22, equipment: ['تطبيق سوق', 'تأمين معدات', 'فريق عمليات', 'مخزن مصغر'], status: 'جاهزة للطرح', shares: 55, minTicket: 9000, description: 'سوق موثق يربط المقاولين بملاك المعدات مع جدولة، تأمين، وتتبع تسليم.' },
  { id: 5, name: 'بوتيك عباءات حسب الطلب', type: 'أزياء', region: 'الدمام', success: 79, budget: 98000, roi: 19, equipment: ['ماكينات خياطة', 'استديو تصوير', 'متجر إلكتروني', 'أقمشة أولية'], status: 'تحتاج شريك تشغيلي', shares: 40, minTicket: 3500, description: 'تصميم عباءات راقية حسب المقاسات مع تجربة طلب مرئية وتوصيل خلال 72 ساعة.' },
  { id: 6, name: 'عيادة تجميل مصغرة بالحجز', type: 'صحة وجمال', region: 'الرياض', success: 84, budget: 420000, roi: 21, equipment: ['أجهزة ليزر', 'غرف علاج', 'نظام ملفات', 'ترخيص صحي'], status: 'متاحة للاستثمار', shares: 18, minTicket: 25000, description: 'عيادة بوتيك متخصصة بجلسات محددة عالية الطلب ونظام عضويات للعميلات.' },
  { id: 7, name: 'أكاديمية مهارات للأطفال', type: 'تعليم', region: 'جدة', success: 81, budget: 135000, roi: 18, equipment: ['مناهج تفاعلية', 'أجهزة لوحية', 'قاعة تدريب', 'منصة أولياء'], status: 'تحت الدراسة', shares: 62, minTicket: 4000, description: 'برامج نهاية الأسبوع للبرمجة والروبوت واللغة للأطفال مع تقارير تقدم للأهل.' },
  { id: 8, name: 'محطة شحن سيارات كهربائية', type: 'طاقة وتنقل', region: 'دبي', success: 89, budget: 510000, roi: 26, equipment: ['شواحن سريعة', 'عقد موقع', 'لوحات طاقة', 'تطبيق دفع'], status: 'جاهزة للطرح', shares: 22, minTicket: 30000, description: 'محطة صغيرة قرب مراكز تجارية مع اشتراكات شهرية وربط مباشر بخرائط السائقين.' },
  { id: 9, name: 'استديو محتوى للمتاجر', type: 'تسويق', region: 'القاهرة', success: 77, budget: 76000, roi: 23, equipment: ['كاميرات', 'إضاءة', 'ركن منتجات', 'برامج مونتاج'], status: 'تحتاج شريك تشغيلي', shares: 70, minTicket: 2500, description: 'إنتاج صور وفيديوهات قصيرة للمتاجر المحلية بنظام باقات شهرية.' },
  { id: 10, name: 'مغسلة سيارات بخار ذكية', type: 'خدمات سيارات', region: 'الدمام', success: 83, budget: 168000, roi: 25, equipment: ['ماكينة بخار', 'موقع تشغيل', 'نظام اشتراكات', 'معدات عناية'], status: 'متاحة للاستثمار', shares: 37, minTicket: 6500, description: 'مغسلة موفرة للماء مع حجوزات مسبقة وخدمة تلميع داخلية للأحياء الراقية.' },
  { id: 11, name: 'سوق منتجات زراعية مباشرة', type: 'تجارة إلكترونية', region: 'الرياض', success: 80, budget: 210000, roi: 20, equipment: ['منصة طلبات', 'تغليف مبرد', 'شراكات مزارع', 'مركبة توصيل'], status: 'تحت الدراسة', shares: 49, minTicket: 8000, description: 'ربط العائلات بمزارع محلية بمنتجات طازجة وجدولة توصيل أسبوعية.' },
  { id: 12, name: 'نادي لياقة نسائي مصغر', type: 'لياقة', region: 'جدة', success: 87, budget: 275000, roi: 27, equipment: ['أجهزة مقاومة', 'غرفة حصص', 'تطبيق عضويات', 'مدربات'], status: 'جاهزة للطرح', shares: 31, minTicket: 15000, description: 'نادي بوتيك للحصص القصيرة والتحولات الشهرية بتجربة فاخرة ومجتمع محلي.' }
];

let ideas = [...ideaSeeds];
let filters = { query: '', type: 'الكل', region: 'الكل', status: 'الكل', sort: 'success-desc', page: 1 };
let projectsPage = 1;
let calculatorLines = [];
const pageSize = 6;

const formatMoney = value => new Intl.NumberFormat('ar-SA', { style: 'currency', currency: 'SAR', maximumFractionDigits: 0 }).format(value);
const app = () => document.getElementById('app');

function navigate(path) {
  history.pushState({}, '', path);
  renderRoute();
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.remove('hidden');
  toast.classList.add('page-enter');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.add('hidden'), 2600);
}

function progressFlash() {
  const bar = document.getElementById('route-progress');
  bar.style.width = '78%';
  setTimeout(() => { bar.style.width = '100%'; }, 120);
  setTimeout(() => { bar.style.width = '0'; }, 520);
}

function setActiveNav(path) {
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', path === href || (href !== '/' && path.startsWith(href)));
  });
  document.getElementById('nav-links').classList.add('hidden');
}

function shell(content) {
  return `<section class="page-enter mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">${content}</section>`;
}

function hero() {
  return shell(`
    <div class="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
      <div class="reveal">
        <div class="mb-5 inline-flex items-center gap-2 rounded-full border border-amberlux/25 bg-white/5 px-4 py-2 text-xs font-bold text-amberlux shadow-gold">
          <span class="h-2 w-2 rounded-full bg-emeraldlux pulse-glow"></span> منصة تقييم أفكار وطرح حصص استثمارية
        </div>
        <h1 class="font-display text-5xl leading-tight text-champagne sm:text-6xl lg:text-7xl">حوّل الفكرة إلى مشروع قابل للاستثمار برائحة نجاح فاخرة.</h1>
        <p class="mt-6 max-w-2xl text-lg leading-9 text-champagne/72">فكرة وشريك يحلل نوع المشروع والمنطقة ونسبة النجاح، يحسب المعدات والأدوات والميزانية، ثم يجهّز المشروع لطرح أسهم واضحة للمستثمرين وأصحاب رؤوس المال.</p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="/ideas" data-link class="btn-primary">استكشف بنك الأفكار</a>
          <a href="/equipment-calculator" data-link class="btn-ghost">ابدأ حساب المعدات</a>
        </div>
        <div class="mt-10 grid grid-cols-3 gap-3">
          ${statCard('127', 'فكرة مدروسة')}
          ${statCard('38M', 'ريال فرص مطروحة')}
          ${statCard('84%', 'متوسط نجاح')}
        </div>
      </div>
      <div class="relative reveal" style="animation-delay:.12s">
        <div class="perfume-bottle mx-auto min-h-[560px] max-w-[470px] p-6">
          <div class="rounded-[2rem] border border-champagne/15 bg-ink/50 p-5 backdrop-blur-xl">
            <div class="flex items-center justify-between gap-3">
              <div><p class="text-xs text-amberlux">تقييم حي</p><h3 class="mt-1 text-xl font-extrabold text-champagne">مشروع عيادة بوتيك</h3></div>
              <div class="success-ring grid h-20 w-20 place-items-center rounded-full" style="--score:84%"><span class="grid h-16 w-16 place-items-center rounded-full bg-espresso text-lg font-black text-champagne">84%</span></div>
            </div>
            <div class="mt-5 space-y-3">
              ${timelineRow('المنطقة', 'الرياض - طلب مرتفع', '91%')}
              ${timelineRow('المعدات', 'أجهزة + تراخيص + غرف', '420K')}
              ${timelineRow('طرح الأسهم', '18 حصة متبقية', '25K')}
            </div>
          </div>
          <div class="mt-5 grid grid-cols-2 gap-4">
            ${miniMetric('العائد المتوقع', '21%', 'text-emerald-200')}
            ${miniMetric('مدة الاسترداد', '14 شهر', 'text-amberlux')}
          </div>
          <div class="absolute -bottom-4 -right-4 hidden rounded-3xl border border-amberlux/20 bg-champagne p-4 text-ink shadow-gold md:block">
            <p class="text-xs font-bold">اقتراح ذكي</p>
            <p class="mt-1 text-sm">ابدأ بنموذج مصغر قبل التوسع.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-16 grid gap-4 md:grid-cols-3">
      ${featureCard('تحليل الفكرة', 'مقارنة نوع النشاط بالمنطقة والمنافسة والطلب المتوقع قبل الإنفاق.')}
      ${featureCard('حاسبة المعدات', 'قائمة معدات وأدوات وترخيص وتشغيل مع تكلفة إجمالية قابلة للتعديل.')}
      ${featureCard('طرح الأسهم', 'تجزئة المشروع إلى حصص واضحة للمستثمرين مع حد أدنى وسجل إجراءات.')}
    </div>
  `);
}

function statCard(value, label) { return `<div class="lux-card rounded-3xl p-4 text-center transition hover:-translate-y-1"><div class="text-2xl font-black text-champagne">${value}</div><div class="mt-1 text-xs text-champagne/55">${label}</div></div>`; }
function miniMetric(label, value, color) { return `<div class="lux-card rounded-3xl p-4"><p class="text-xs text-champagne/55">${label}</p><p class="mt-2 text-2xl font-black ${color}">${value}</p></div>`; }
function timelineRow(label, text, value) { return `<div class="flex items-center justify-between rounded-2xl border border-champagne/10 bg-white/5 p-3"><div><p class="text-xs text-champagne/45">${label}</p><p class="mt-1 text-sm font-bold text-champagne">${text}</p></div><span class="rounded-full bg-amberlux/15 px-3 py-1 text-xs font-black text-amberlux">${value}</span></div>`; }
function featureCard(title, desc) { return `<article class="lux-card rounded-[2rem] p-6 transition duration-300 hover:-translate-y-2 hover:border-amberlux/35"><div class="mb-4 h-12 w-12 rounded-2xl bg-amberlux/15"></div><h3 class="text-xl font-extrabold text-champagne">${title}</h3><p class="mt-3 text-sm leading-7 text-champagne/62">${desc}</p></article>`; }

function getFilteredIdeas() {
  const q = filters.query.trim().toLowerCase();
  let list = ideas.filter(item =>
    (!q || [item.name, item.type, item.region, item.description].join(' ').toLowerCase().includes(q)) &&
    (filters.type === 'الكل' || item.type === filters.type) &&
    (filters.region === 'الكل' || item.region === filters.region) &&
    (filters.status === 'الكل' || item.status === filters.status)
  );
  const [key, dir] = filters.sort.split('-');
  list.sort((a, b) => dir === 'asc' ? a[key] - b[key] : b[key] - a[key]);
  return list;
}

function filterBar() {
  const types = ['الكل', ...new Set(ideas.map(i => i.type))];
  const regions = ['الكل', ...new Set(ideas.map(i => i.region))];
  const statuses = ['الكل', ...new Set(ideas.map(i => i.status))];
  return `<div class="lux-card mb-8 rounded-[2rem] p-4">
    <div class="grid gap-3 md:grid-cols-5">
      <input id="filter-query" class="input-lux md:col-span-2" placeholder="ابحث باسم الفكرة أو النشاط" value="${filters.query}">
      ${select('filter-type', types, filters.type)}
      ${select('filter-region', regions, filters.region)}
      <select id="filter-sort" class="select-lux"><option value="success-desc" ${filters.sort==='success-desc'?'selected':''}>الأعلى نجاحاً</option><option value="budget-asc" ${filters.sort==='budget-asc'?'selected':''}>الأقل تكلفة</option><option value="roi-desc" ${filters.sort==='roi-desc'?'selected':''}>الأعلى عائداً</option></select>
    </div>
    <div class="mt-3 grid gap-3 md:grid-cols-[1fr_auto]">
      ${select('filter-status', statuses, filters.status)}
      <button class="btn-primary" onclick="openIdeaModal()">إضافة فكرة جديدة</button>
    </div>
  </div>`;
}
function select(id, options, value) { return `<select id="${id}" class="select-lux">${options.map(o => `<option value="${o}" ${o===value?'selected':''}>${o}</option>`).join('')}</select>`; }

function ideasPage() {
  const list = getFilteredIdeas();
  const totalPages = Math.max(1, Math.ceil(list.length / pageSize));
  filters.page = Math.min(filters.page, totalPages);
  const pageItems = list.slice((filters.page - 1) * pageSize, filters.page * pageSize);
  return shell(`
    ${pageHeader('بنك الأفكار الممتازة', 'فلترة وفرز وتقييم أفكار المشاريع حسب النوع والمنطقة ونسبة النجاح مع إجراءات كاملة لكل فكرة.')}
    ${filterBar()}
    <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">${pageItems.map(ideaCard).join('')}</div>
    ${pagination(filters.page, totalPages, 'setIdeaPage')}
  `);
}

function ideaCard(item) {
  return `<article class="lux-card group rounded-[2rem] p-5 transition duration-300 hover:-translate-y-2 hover:border-amberlux/35">
    <div class="flex items-start justify-between gap-3">
      <div><span class="rounded-full bg-emeraldlux/25 px-3 py-1 text-xs font-bold text-emerald-100">${item.region}</span><h3 class="mt-4 text-xl font-black text-champagne">${item.name}</h3><p class="mt-2 text-xs text-amberlux">${item.type}</p></div>
      <div class="success-ring grid h-16 w-16 shrink-0 place-items-center rounded-full" style="--score:${item.success}%"><span class="grid h-12 w-12 place-items-center rounded-full bg-espresso text-sm font-black">${item.success}%</span></div>
    </div>
    <p class="mt-4 line-clamp-3 min-h-[4.8rem] text-sm leading-7 text-champagne/62">${item.description}</p>
    <div class="mt-4 grid grid-cols-2 gap-3 text-sm"><div class="rounded-2xl bg-white/5 p-3"><p class="text-champagne/45">الميزانية</p><b>${formatMoney(item.budget)}</b></div><div class="rounded-2xl bg-white/5 p-3"><p class="text-champagne/45">العائد</p><b>${item.roi}%</b></div></div>
    <div class="mt-4 flex flex-wrap gap-2">${item.equipment.slice(0,3).map(e => `<span class="rounded-full border border-champagne/10 px-3 py-1 text-xs text-champagne/65">${e}</span>`).join('')}</div>
    <div class="mt-5 grid grid-cols-2 gap-2">
      <button class="btn-primary" onclick="navigate('/ideas/${item.id}')">عرض التفاصيل</button>
      <button class="btn-secondary" onclick="openIdeaModal(${item.id})">تعديل</button>
      <button class="btn-ghost" onclick="duplicateIdea(${item.id})">نسخ</button>
      <button class="btn-danger" onclick="deleteIdea(${item.id})">حذف</button>
    </div>
  </article>`;
}

function ideaDetails(id) {
  const item = ideas.find(i => i.id === Number(id)) || ideas[0];
  return shell(`
    <a href="/ideas" data-link class="btn-ghost mb-6">العودة للأفكار</a>
    <div class="grid gap-8 lg:grid-cols-[1fr_.78fr]">
      <div class="lux-card rounded-[2.5rem] p-6 md:p-8">
        <span class="rounded-full bg-amberlux/15 px-4 py-2 text-sm font-bold text-amberlux">${item.status}</span>
        <h1 class="mt-5 font-display text-5xl text-champagne">${item.name}</h1>
        <p class="mt-5 text-lg leading-9 text-champagne/70">${item.description}</p>
        <div class="mt-8 grid gap-4 md:grid-cols-3">${miniMetric('نسبة النجاح', item.success + '%', 'text-amberlux')}${miniMetric('الميزانية', formatMoney(item.budget), 'text-champagne')}${miniMetric('العائد المتوقع', item.roi + '%', 'text-emerald-200')}</div>
        <h2 class="mt-10 text-2xl font-black text-champagne">المعدات والأدوات المطلوبة</h2>
        <div class="mt-4 grid gap-3 sm:grid-cols-2">${item.equipment.map(e => `<div class="rounded-2xl border border-champagne/10 bg-white/5 p-4 text-champagne/75">✦ ${e}</div>`).join('')}</div>
      </div>
      <aside class="lux-card rounded-[2.5rem] p-6">
        <h2 class="text-2xl font-black text-champagne">طرح الأسهم</h2>
        <p class="mt-2 text-sm leading-7 text-champagne/60">يمكن للمستثمرين حجز حصص جزئية مع حد أدنى واضح وسجل إجراءات كامل.</p>
        <div class="my-6 rounded-[2rem] bg-champagne p-5 text-ink"><p class="text-sm font-bold">الحصص المتاحة</p><p class="mt-2 text-5xl font-black">${item.shares}</p><p class="mt-2 text-sm">الحد الأدنى: ${formatMoney(item.minTicket)}</p></div>
        <button class="btn-primary w-full" onclick="reserveShares(${item.id})">حجز حصة استثمارية</button>
        <button class="btn-ghost mt-3 w-full" onclick="openIdeaModal(${item.id})">تعديل بيانات المشروع</button>
      </aside>
    </div>
  `);
}

function pageHeader(title, subtitle) {
  return `<div class="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p class="mb-3 text-sm font-bold text-amberlux">فكرة وشريك</p><h1 class="font-display text-5xl text-champagne md:text-6xl">${title}</h1><p class="mt-4 max-w-3xl text-sm leading-7 text-champagne/62 md:text-base">${subtitle}</p></div></div>`;
}
function pagination(current, total, handler) {
  return `<div class="mt-8 flex flex-wrap items-center justify-center gap-2">${Array.from({length: total}, (_, i) => i + 1).map(p => `<button onclick="${handler}(${p})" class="${p===current?'btn-primary':'btn-ghost'} min-w-12">${p}</button>`).join('')}</div>`;
}

function marketMapPage() {
  const regions = ['الرياض', 'جدة', 'دبي', 'القاهرة', 'الدمام'];
  return shell(`
    ${pageHeader('خريطة النجاح حسب المنطقة', 'رؤية تشغيلية تقارن كثافة الفرص ونسبة النجاح والميزانية المثلى لكل سوق.')}
    <div class="grid gap-5 lg:grid-cols-5">${regions.map(region => {
      const items = ideas.filter(i => i.region === region);
      const avg = Math.round(items.reduce((s, i) => s + i.success, 0) / items.length);
      return `<button class="lux-card rounded-[2rem] p-5 text-right transition hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-amberlux" onclick="filters.region='${region}'; filters.page=1; navigate('/ideas')"><div class="success-ring mb-4 grid h-20 w-20 place-items-center rounded-full" style="--score:${avg}%"><span class="grid h-16 w-16 place-items-center rounded-full bg-espresso font-black">${avg}%</span></div><h3 class="text-2xl font-black text-champagne">${region}</h3><p class="mt-2 text-sm text-champagne/55">${items.length} فرص جاهزة ومصنفة</p></button>`;
    }).join('')}</div>
    <div class="lux-card mt-8 rounded-[2.5rem] p-6"><h2 class="text-2xl font-black text-champagne">توصيات المناطق</h2><div class="mt-5 grid gap-4 md:grid-cols-3">${featureCard('الرياض', 'أفضل للعيادات، التجزئة الراقية، والطاقة بسبب قدرة شرائية مرتفعة.')}${featureCard('جدة', 'فرص ممتازة للخدمات المنزلية واللياقة والتعليم القريب من الأحياء.')}${featureCard('دبي', 'مناسبة للمفاهيم السحابية والطاقة والتنقل بسبب جاهزية البنية الرقمية.')}</div></div>
  `);
}

function calculatorPage() {
  const total = calculatorLines.reduce((sum, l) => sum + (l.qty * l.cost), 0);
  return shell(`
    ${pageHeader('حاسبة المعدات والأدوات', 'ابنِ قائمة متكاملة بالمعدات والتراخيص والتشغيل واحصل على تقدير ميزانية قابل للتقديم للمستثمرين.')}
    <div class="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
      <form id="calc-form" class="lux-card rounded-[2.2rem] p-6">
        <h2 class="text-2xl font-black text-champagne">إضافة بند</h2>
        <div class="mt-5 space-y-3">
          <input required name="name" class="input-lux" placeholder="اسم المعدة أو الأداة">
          <select name="category" class="select-lux"><option>معدات</option><option>تراخيص</option><option>تشغيل</option><option>تسويق</option><option>تقنية</option></select>
          <div class="grid grid-cols-2 gap-3"><input required name="qty" type="number" min="1" class="input-lux" placeholder="الكمية"><input required name="cost" type="number" min="1" class="input-lux" placeholder="تكلفة الوحدة"></div>
          <button class="btn-primary w-full" type="submit">إضافة للحاسبة</button>
        </div>
      </form>
      <div class="lux-card rounded-[2.2rem] p-6">
        <div class="flex items-center justify-between gap-3"><h2 class="text-2xl font-black text-champagne">بنود الميزانية</h2><button class="btn-ghost" onclick="seedCalculator()">تعبئة نموذج</button></div>
        <div class="table-scroll mt-5 overflow-x-auto"><table class="w-full min-w-[680px] text-sm"><thead><tr class="text-champagne/55"><th class="p-3 text-right">البند</th><th class="p-3 text-right">التصنيف</th><th class="p-3">الكمية</th><th class="p-3">التكلفة</th><th class="p-3">الإجمالي</th><th class="p-3">إجراء</th></tr></thead><tbody>${calculatorLines.map((l, idx) => `<tr class="border-t border-champagne/10"><td class="p-3 font-bold text-champagne">${l.name}</td><td class="p-3 text-champagne/65">${l.category}</td><td class="p-3 text-center">${l.qty}</td><td class="p-3 text-center">${formatMoney(l.cost)}</td><td class="p-3 text-center font-black text-amberlux">${formatMoney(l.qty*l.cost)}</td><td class="p-3 text-center"><button class="btn-danger !px-3 !py-2" onclick="removeCalcLine(${idx})">حذف</button></td></tr>`).join('') || `<tr><td colspan="6" class="p-8 text-center text-champagne/50">لا توجد بنود بعد</td></tr>`}</tbody></table></div>
        <div class="mt-5 rounded-[2rem] bg-champagne p-5 text-ink"><p class="text-sm font-bold">إجمالي الاستثمار الأولي</p><p class="mt-1 text-4xl font-black">${formatMoney(total)}</p></div>
      </div>
    </div>
  `);
}

function projectsPageView() {
  const list = getFilteredIdeas();
  const totalPages = Math.max(1, Math.ceil(list.length / 5));
  projectsPage = Math.min(projectsPage, totalPages);
  const pageItems = list.slice((projectsPage - 1) * 5, projectsPage * 5);
  return shell(`
    ${pageHeader('سوق الأسهم للمشاريع المتاحة', 'جدول استثماري بفرز وفلاتر وصفحات وإجراءات عرض وتعديل وحذف وحجز حصص.')}
    ${filterBar()}
    <div class="lux-card rounded-[2.2rem] p-4">
      <div class="table-scroll overflow-x-auto"><table class="w-full min-w-[950px] text-sm"><thead><tr class="text-champagne/55"><th class="p-4 text-right">المشروع</th><th class="p-4">المنطقة</th><th class="p-4">النجاح</th><th class="p-4">الميزانية</th><th class="p-4">الحصص</th><th class="p-4">الحد الأدنى</th><th class="p-4">الإجراءات</th></tr></thead><tbody>${pageItems.map(i => `<tr class="border-t border-champagne/10 transition hover:bg-white/5"><td class="p-4"><b class="text-champagne">${i.name}</b><p class="mt-1 text-xs text-amberlux">${i.type}</p></td><td class="p-4 text-center">${i.region}</td><td class="p-4 text-center font-black text-emerald-200">${i.success}%</td><td class="p-4 text-center">${formatMoney(i.budget)}</td><td class="p-4 text-center">${i.shares}</td><td class="p-4 text-center">${formatMoney(i.minTicket)}</td><td class="p-4"><div class="flex flex-wrap justify-center gap-2"><button class="btn-ghost !px-3 !py-2" onclick="navigate('/ideas/${i.id}')">عرض</button><button class="btn-secondary !px-3 !py-2" onclick="openIdeaModal(${i.id})">تعديل</button><button class="btn-primary !px-3 !py-2" onclick="reserveShares(${i.id})">حجز</button><button class="btn-danger !px-3 !py-2" onclick="deleteIdea(${i.id})">حذف</button></div></td></tr>`).join('')}</tbody></table></div>
    </div>
    ${pagination(projectsPage, totalPages, 'setProjectsPage')}
  `);
}

function investorsPage() {
  return shell(`
    ${pageHeader('بوابة المستثمرين', 'واجهة لأصحاب رؤوس المال لمقارنة الفرص وحجز الحصص ومتابعة العائد المتوقع.')}
    <div class="grid gap-6 lg:grid-cols-3">
      ${['مستثمر ملاك', 'صندوق عائلي', 'شريك تشغيلي'].map((name, idx) => `<article class="lux-card rounded-[2.2rem] p-6 transition hover:-translate-y-2"><h2 class="text-2xl font-black text-champagne">${name}</h2><p class="mt-3 text-sm leading-7 text-champagne/62">محفظة مخصصة مع فلاتر مخاطر وحد أدنى استثماري وتقارير أداء شهرية.</p><div class="mt-5 rounded-2xl bg-white/5 p-4"><p class="text-xs text-champagne/50">فرص موصى بها</p><p class="mt-2 text-3xl font-black text-amberlux">${idx + 4}</p></div><button class="btn-primary mt-5 w-full" onclick="showToast('تم إنشاء ملف تفضيلات المستثمر')">إنشاء ملف مستثمر</button></article>`).join('')}
    </div>
    <div class="lux-card mt-8 rounded-[2.2rem] p-6"><h2 class="text-2xl font-black text-champagne">خط سير الاستثمار</h2><div class="mt-5 grid gap-4 md:grid-cols-4">${['اختيار الفرصة', 'فحص المعدات', 'حجز الحصص', 'توقيع الشراكة'].map((s,i)=>`<div class="rounded-2xl border border-champagne/10 bg-white/5 p-4"><span class="text-3xl font-black text-amberlux">0${i+1}</span><p class="mt-3 font-bold text-champagne">${s}</p></div>`).join('')}</div></div>
  `);
}

function dashboardPage() {
  return shell(`
    ${pageHeader('لوحة التحكم التشغيلية', 'ملخص حي للأفكار والمشاريع والحصص مع روابط عميقة للتقارير والإعدادات.')}
    <div class="mb-6 flex flex-wrap gap-3"><a href="/dashboard/reports" data-link class="btn-primary">التقارير</a><a href="/dashboard/settings" data-link class="btn-ghost">الإعدادات</a><a href="/projects/new" data-link class="btn-secondary">إضافة مشروع</a></div>
    <div class="grid gap-5 md:grid-cols-4">${miniMetric('إجمالي الأفكار', ideas.length, 'text-champagne')}${miniMetric('فرص جاهزة', ideas.filter(i=>i.status==='جاهزة للطرح').length, 'text-amberlux')}${miniMetric('متوسط النجاح', Math.round(ideas.reduce((s,i)=>s+i.success,0)/ideas.length)+'%', 'text-emerald-200')}${miniMetric('إجمالي الميزانيات', formatMoney(ideas.reduce((s,i)=>s+i.budget,0)), 'text-champagne')}</div>
    <div class="mt-8 grid gap-6 lg:grid-cols-2">${featureCard('تقرير الأداء الشهري', 'تحليل أفضل المناطق والقطاعات، حجم الحصص المحجوزة، ومتوسط العائد المتوقع.')}${featureCard('إعدادات المنصة', 'إدارة أنواع الأنشطة، المناطق، معايير نسبة النجاح، وصلاحيات المستثمرين.')}</div>
  `);
}

function newProjectPage() {
  return shell(`${pageHeader('طرح مشروع جديد', 'أدخل بيانات المشروع ليظهر في بنك الأفكار وسوق الأسهم مع إجراءات المستثمرين.')}<div class="max-w-3xl lux-card rounded-[2.2rem] p-6"><div id="new-form-mount"></div></div>`);
}

function openIdeaModal(id) {
  const item = ideas.find(i => i.id === Number(id));
  const modal = document.getElementById('modal-root');
  modal.innerHTML = `<div class="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-champagne/15 bg-espresso p-5 shadow-perfume"><div class="mb-4 flex items-center justify-between"><h2 class="text-2xl font-black text-champagne">${item ? 'تعديل الفكرة' : 'إضافة فكرة جديدة'}</h2><button class="btn-ghost" onclick="closeModal()">إغلاق</button></div>${ideaForm(item)}</div>`;
  modal.classList.remove('hidden'); modal.classList.add('flex');
  bindIdeaForm(item?.id);
}
function closeModal() { const modal = document.getElementById('modal-root'); modal.classList.add('hidden'); modal.classList.remove('flex'); modal.innerHTML = ''; }
function ideaForm(item = {}) {
  return `<form id="idea-form" class="grid gap-3"><input name="name" required class="input-lux" placeholder="اسم المشروع" value="${item.name || ''}"><div class="grid gap-3 md:grid-cols-2"><input name="type" required class="input-lux" placeholder="نوع الفكرة" value="${item.type || ''}"><input name="region" required class="input-lux" placeholder="المنطقة" value="${item.region || ''}"></div><textarea name="description" required class="textarea-lux" rows="4" placeholder="وصف المشروع">${item.description || ''}</textarea><div class="grid gap-3 md:grid-cols-3"><input name="success" required type="number" min="1" max="100" class="input-lux" placeholder="نسبة النجاح" value="${item.success || ''}"><input name="budget" required type="number" min="1" class="input-lux" placeholder="الميزانية" value="${item.budget || ''}"><input name="roi" required type="number" min="1" class="input-lux" placeholder="العائد %" value="${item.roi || ''}"></div><div class="grid gap-3 md:grid-cols-3"><input name="shares" required type="number" min="1" class="input-lux" placeholder="الحصص" value="${item.shares || ''}"><input name="minTicket" required type="number" min="1" class="input-lux" placeholder="الحد الأدنى" value="${item.minTicket || ''}"><select name="status" class="select-lux"><option ${item.status==='جاهزة للطرح'?'selected':''}>جاهزة للطرح</option><option ${item.status==='متاحة للاستثمار'?'selected':''}>متاحة للاستثمار</option><option ${item.status==='تحت الدراسة'?'selected':''}>تحت الدراسة</option><option ${item.status==='تحتاج شريك تشغيلي'?'selected':''}>تحتاج شريك تشغيلي</option></select></div><input name="equipment" class="input-lux" placeholder="المعدات مفصولة بفواصل" value="${(item.equipment || []).join('، ')}"><button class="btn-primary" type="submit">حفظ البيانات</button></form>`;
}
function bindIdeaForm(id) {
  document.getElementById('idea-form').addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const payload = { ...data, id: id || Date.now(), success: +data.success, budget: +data.budget, roi: +data.roi, shares: +data.shares, minTicket: +data.minTicket, equipment: data.equipment.split(/[،,]/).map(x => x.trim()).filter(Boolean) };
    if (id) ideas = ideas.map(i => i.id === id ? payload : i); else ideas.unshift(payload);
    closeModal(); showToast('تم حفظ الفكرة بنجاح'); renderRoute();
  });
}

function bindFilters() {
  [['filter-query','query'], ['filter-type','type'], ['filter-region','region'], ['filter-status','status'], ['filter-sort','sort']].forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener(key === 'query' ? 'input' : 'change', e => { filters[key] = e.target.value; filters.page = 1; projectsPage = 1; renderRoute(false); });
  });
}

function setIdeaPage(p) { filters.page = p; renderRoute(); }
function setProjectsPage(p) { projectsPage = p; renderRoute(); }
function duplicateIdea(id) { const item = ideas.find(i => i.id === id); if (item) { ideas.unshift({ ...item, id: Date.now(), name: item.name + ' - نسخة' }); showToast('تم نسخ الفكرة'); renderRoute(); } }
function deleteIdea(id) { if (confirm('هل تريد حذف هذه الفكرة؟')) { ideas = ideas.filter(i => i.id !== id); showToast('تم حذف الفكرة'); renderRoute(); } }
function reserveShares(id) { const item = ideas.find(i => i.id === id); if (item && item.shares > 0) { item.shares -= 1; showToast('تم حجز حصة استثمارية واحدة'); renderRoute(); } }
function removeCalcLine(idx) { calculatorLines.splice(idx, 1); renderRoute(false); }
function seedCalculator() { calculatorLines = [{name:'معدات أساسية', category:'معدات', qty:1, cost:85000},{name:'ترخيص وإجراءات', category:'تراخيص', qty:1, cost:22000},{name:'منصة حجز ودفع', category:'تقنية', qty:1, cost:34000},{name:'إطلاق وتسويق', category:'تسويق', qty:1, cost:18000}]; renderRoute(false); }

function bindCalculator() {
  const form = document.getElementById('calc-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    calculatorLines.push({ name: data.name, category: data.category, qty: +data.qty, cost: +data.cost });
    showToast('تمت إضافة البند'); renderRoute(false);
  });
}

function renderRoute(scroll = true) {
  progressFlash();
  const path = location.pathname;
  setActiveNav(path);
  let content;
  if (path === '/') content = hero();
  else if (path === '/ideas') content = ideasPage();
  else if (path.startsWith('/ideas/')) content = ideaDetails(path.split('/')[2]);
  else if (path === '/market-map') content = marketMapPage();
  else if (path === '/equipment-calculator') content = calculatorPage();
  else if (path === '/projects') content = projectsPageView();
  else if (path === '/projects/new') content = newProjectPage();
  else if (path === '/investors') content = investorsPage();
  else if (path.startsWith('/dashboard')) content = dashboardPage();
  else content = hero();
  app().innerHTML = content;
  if (path === '/projects/new') { document.getElementById('new-form-mount').innerHTML = ideaForm(); bindIdeaForm(); }
  bindFilters(); bindCalculator();
  if (scroll) window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('click', e => {
  const link = e.target.closest('[data-link]');
  if (link) { e.preventDefault(); navigate(link.getAttribute('href')); }
});

document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('hidden');
  document.getElementById('nav-links').classList.toggle('flex');
});

window.addEventListener('popstate', renderRoute);
window.navigate = navigate;
window.openIdeaModal = openIdeaModal;
window.closeModal = closeModal;
window.setIdeaPage = setIdeaPage;
window.setProjectsPage = setProjectsPage;
window.duplicateIdea = duplicateIdea;
window.deleteIdea = deleteIdea;
window.reserveShares = reserveShares;
window.removeCalcLine = removeCalcLine;
window.seedCalculator = seedCalculator;

renderRoute(false);

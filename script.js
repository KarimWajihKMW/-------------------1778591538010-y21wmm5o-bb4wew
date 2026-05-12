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

const investorSeeds = [
  { id: 1, name: 'عبدالله الراشد', type: 'مستثمر ملاك', region: 'الرياض', risk: 'متوازن', capital: 1250000, targetRoi: 24, status: 'نشط', preferred: 'تجزئة فاخرة', joined: '2024-01-18', portfolio: [{ id: 101, projectId: 1, units: 8, entryPrice: 7500, currentValue: 72000, status: 'نشطة' }, { id: 102, projectId: 6, units: 3, entryPrice: 25000, currentValue: 81000, status: 'نشطة' }, { id: 103, projectId: 12, units: 5, entryPrice: 15000, currentValue: 84500, status: 'قيد التوسع' }] },
  { id: 2, name: 'نورة العبدلي', type: 'صندوق عائلي', region: 'جدة', risk: 'منخفض', capital: 2350000, targetRoi: 19, status: 'نشط', preferred: 'تعليم', joined: '2023-11-07', portfolio: [{ id: 201, projectId: 7, units: 12, entryPrice: 4000, currentValue: 53500, status: 'نشطة' }, { id: 202, projectId: 2, units: 7, entryPrice: 5000, currentValue: 39200, status: 'نشطة' }, { id: 203, projectId: 11, units: 4, entryPrice: 8000, currentValue: 33400, status: 'متابعة' }] },
  { id: 3, name: 'شركة واحة النمو', type: 'شريك تشغيلي', region: 'دبي', risk: 'مرتفع', capital: 4100000, targetRoi: 31, status: 'توسع', preferred: 'طاقة وتنقل', joined: '2024-02-12', portfolio: [{ id: 301, projectId: 8, units: 6, entryPrice: 30000, currentValue: 210000, status: 'قيد التوسع' }, { id: 302, projectId: 3, units: 9, entryPrice: 12000, currentValue: 126000, status: 'نشطة' }, { id: 303, projectId: 4, units: 10, entryPrice: 9000, currentValue: 95800, status: 'نشطة' }] },
  { id: 4, name: 'ماجد السلمي', type: 'مستثمر ملاك', region: 'الدمام', risk: 'متوازن', capital: 860000, targetRoi: 22, status: 'نشط', preferred: 'خدمات سيارات', joined: '2024-03-03', portfolio: [{ id: 401, projectId: 10, units: 10, entryPrice: 6500, currentValue: 74200, status: 'نشطة' }, { id: 402, projectId: 5, units: 8, entryPrice: 3500, currentValue: 30300, status: 'متابعة' }] },
  { id: 5, name: 'أريج للاستثمار', type: 'صندوق عائلي', region: 'القاهرة', risk: 'منخفض', capital: 1900000, targetRoi: 20, status: 'مراجعة', preferred: 'تسويق', joined: '2023-10-21', portfolio: [{ id: 501, projectId: 9, units: 16, entryPrice: 2500, currentValue: 44700, status: 'نشطة' }, { id: 502, projectId: 4, units: 5, entryPrice: 9000, currentValue: 48600, status: 'نشطة' }] },
  { id: 6, name: 'خالد بن سالم', type: 'شريك تشغيلي', region: 'الرياض', risk: 'مرتفع', capital: 1450000, targetRoi: 27, status: 'نشط', preferred: 'صحة وجمال', joined: '2024-04-01', portfolio: [{ id: 601, projectId: 6, units: 5, entryPrice: 25000, currentValue: 139000, status: 'قيد التوسع' }, { id: 602, projectId: 1, units: 6, entryPrice: 7500, currentValue: 51500, status: 'نشطة' }] }
];

let ideas = [...ideaSeeds];
let investors = investorSeeds.map(investor => ({ ...investor, portfolio: investor.portfolio.map(holding => ({ ...holding })) }));
let filters = { query: '', type: 'الكل', region: 'الكل', status: 'الكل', sort: 'success-desc', page: 1 };
let investorFilters = { query: '', type: 'الكل', region: 'الكل', risk: 'الكل', sort: 'capital-desc', page: 1 };
let portfolioFilters = { query: '', status: 'الكل', sort: 'value-desc', page: 1 };
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

function getInvestorMetrics(investor) {
  const invested = investor.portfolio.reduce((sum, holding) => sum + holding.units * holding.entryPrice, 0);
  const current = investor.portfolio.reduce((sum, holding) => sum + holding.currentValue, 0);
  const roi = invested ? Math.round(((current - invested) / invested) * 100) : 0;
  return { invested, current, roi, count: investor.portfolio.length };
}

function getFilteredInvestors() {
  const q = investorFilters.query.trim().toLowerCase();
  let list = investors.filter(investor =>
    (!q || [investor.name, investor.type, investor.region, investor.preferred, investor.risk].join(' ').toLowerCase().includes(q)) &&
    (investorFilters.type === 'الكل' || investor.type === investorFilters.type) &&
    (investorFilters.region === 'الكل' || investor.region === investorFilters.region) &&
    (investorFilters.risk === 'الكل' || investor.risk === investorFilters.risk)
  );
  const [key, dir] = investorFilters.sort.split('-');
  list.sort((a, b) => {
    const aMetrics = getInvestorMetrics(a);
    const bMetrics = getInvestorMetrics(b);
    const map = { capital: [a.capital, b.capital], roi: [aMetrics.roi, bMetrics.roi], current: [aMetrics.current, bMetrics.current], joined: [new Date(a.joined).getTime(), new Date(b.joined).getTime()] };
    const [av, bv] = map[key] || [a.capital, b.capital];
    return dir === 'asc' ? av - bv : bv - av;
  });
  return list;
}

function investorFilterBar() {
  const types = ['الكل', ...new Set(investors.map(i => i.type))];
  const regions = ['الكل', ...new Set(investors.map(i => i.region))];
  const risks = ['الكل', ...new Set(investors.map(i => i.risk))];
  return `<div class="lux-card mb-8 rounded-[2rem] p-4">
    <div class="grid gap-3 md:grid-cols-5">
      <input id="investor-query" class="input-lux md:col-span-2" placeholder="ابحث باسم المستثمر أو التفضيل" value="${investorFilters.query}">
      ${select('investor-type', types, investorFilters.type)}
      ${select('investor-region', regions, investorFilters.region)}
      ${select('investor-risk', risks, investorFilters.risk)}
    </div>
    <div class="mt-3 grid gap-3 md:grid-cols-[1fr_auto]">
      <select id="investor-sort" class="select-lux"><option value="capital-desc" ${investorFilters.sort==='capital-desc'?'selected':''}>الأعلى رأس مال</option><option value="current-desc" ${investorFilters.sort==='current-desc'?'selected':''}>الأعلى قيمة محفظة</option><option value="roi-desc" ${investorFilters.sort==='roi-desc'?'selected':''}>الأعلى أداءً</option><option value="joined-desc" ${investorFilters.sort==='joined-desc'?'selected':''}>الأحدث انضماماً</option></select>
      <button class="btn-primary" onclick="openInvestorModal()">إضافة مستثمر</button>
    </div>
  </div>`;
}

function investorsPage() {
  const list = getFilteredInvestors();
  const totalPages = Math.max(1, Math.ceil(list.length / pageSize));
  investorFilters.page = Math.min(investorFilters.page, totalPages);
  const pageItems = list.slice((investorFilters.page - 1) * pageSize, investorFilters.page * pageSize);
  return shell(`
    ${pageHeader('بوابة المستثمرين', 'صفحة إدارة المستثمرين مع فرز وفلاتر وصفحات، ولكل مستثمر محفظة استثمارية مستقلة بروابط عميقة وإجراءات كاملة.')}
    ${investorFilterBar()}
    <div class="grid gap-6 lg:grid-cols-3">
      ${pageItems.map(investorCard).join('') || `<div class="lux-card rounded-[2rem] p-8 text-center text-champagne/55 lg:col-span-3">لا يوجد مستثمرون مطابقون للبحث</div>`}
    </div>
    ${pagination(investorFilters.page, totalPages, 'setInvestorPage')}
    <div class="lux-card mt-8 rounded-[2.2rem] p-6"><h2 class="text-2xl font-black text-champagne">خط سير الاستثمار</h2><div class="mt-5 grid gap-4 md:grid-cols-4">${['اختيار الفرصة', 'فحص المعدات', 'حجز الحصص', 'توقيع الشراكة'].map((s,i)=>`<div class="rounded-2xl border border-champagne/10 bg-white/5 p-4"><span class="text-3xl font-black text-amberlux">0${i+1}</span><p class="mt-3 font-bold text-champagne">${s}</p></div>`).join('')}</div></div>
  `);
}

function investorCard(investor) {
  const metrics = getInvestorMetrics(investor);
  return `<article class="lux-card rounded-[2.2rem] p-6 transition hover:-translate-y-2">
    <div class="flex items-start justify-between gap-3"><div><span class="rounded-full bg-emeraldlux/25 px-3 py-1 text-xs font-bold text-emerald-100">${investor.region}</span><h2 class="mt-4 text-2xl font-black text-champagne">${investor.name}</h2><p class="mt-1 text-xs text-amberlux">${investor.type} • مخاطر ${investor.risk}</p></div><span class="rounded-full bg-amberlux/15 px-3 py-1 text-xs font-black text-amberlux">${investor.status}</span></div>
    <p class="mt-4 text-sm leading-7 text-champagne/62">يفضل الاستثمار في ${investor.preferred} ويستهدف عائداً سنوياً يقارب ${investor.targetRoi}%.</p>
    <div class="mt-5 grid grid-cols-2 gap-3"><div class="rounded-2xl bg-white/5 p-4"><p class="text-xs text-champagne/50">رأس المال</p><p class="mt-2 font-black text-champagne">${formatMoney(investor.capital)}</p></div><div class="rounded-2xl bg-white/5 p-4"><p class="text-xs text-champagne/50">أداء المحفظة</p><p class="mt-2 font-black ${metrics.roi >= 0 ? 'text-emerald-200' : 'text-red-200'}">${metrics.roi}%</p></div></div>
    <div class="mt-5 rounded-2xl bg-white/5 p-4"><p class="text-xs text-champagne/50">قيمة المحفظة الحالية</p><p class="mt-2 text-3xl font-black text-amberlux">${formatMoney(metrics.current)}</p><p class="mt-1 text-xs text-champagne/50">${metrics.count} مشاريع ضمن المحفظة</p></div>
    <div class="mt-5 grid grid-cols-2 gap-2"><button class="btn-primary" onclick="navigate('/investors/${investor.id}/portfolio')">فتح المحفظة</button><button class="btn-secondary" onclick="openInvestorModal(${investor.id})">تعديل</button><button class="btn-ghost" onclick="duplicateInvestor(${investor.id})">نسخ</button><button class="btn-danger" onclick="deleteInvestor(${investor.id})">حذف</button></div>
  </article>`;
}

function getPortfolioRows(investor) {
  const q = portfolioFilters.query.trim().toLowerCase();
  let rows = investor.portfolio.map(holding => {
    const project = ideas.find(i => i.id === Number(holding.projectId));
    const invested = holding.units * holding.entryPrice;
    const performance = invested ? Math.round(((holding.currentValue - invested) / invested) * 100) : 0;
    return { ...holding, project, invested, performance };
  }).filter(row =>
    (!q || [row.project?.name, row.project?.type, row.project?.region, row.status].join(' ').toLowerCase().includes(q)) &&
    (portfolioFilters.status === 'الكل' || row.status === portfolioFilters.status)
  );
  const [key, dir] = portfolioFilters.sort.split('-');
  rows.sort((a, b) => {
    const map = { value: [a.currentValue, b.currentValue], performance: [a.performance, b.performance], units: [a.units, b.units], success: [a.project?.success || 0, b.project?.success || 0] };
    const [av, bv] = map[key] || [a.currentValue, b.currentValue];
    return dir === 'asc' ? av - bv : bv - av;
  });
  return rows;
}

function portfolioFilterBar(investor) {
  const statuses = ['الكل', ...new Set(investor.portfolio.map(h => h.status))];
  return `<div class="lux-card mb-8 rounded-[2rem] p-4">
    <div class="grid gap-3 md:grid-cols-[2fr_1fr_1fr_auto]">
      <input id="portfolio-query" class="input-lux" placeholder="ابحث باسم المشروع أو القطاع أو المنطقة" value="${portfolioFilters.query}">
      ${select('portfolio-status', statuses, portfolioFilters.status)}
      <select id="portfolio-sort" class="select-lux"><option value="value-desc" ${portfolioFilters.sort==='value-desc'?'selected':''}>الأعلى قيمة</option><option value="performance-desc" ${portfolioFilters.sort==='performance-desc'?'selected':''}>الأعلى أداءً</option><option value="units-desc" ${portfolioFilters.sort==='units-desc'?'selected':''}>الأكثر حصصاً</option><option value="success-desc" ${portfolioFilters.sort==='success-desc'?'selected':''}>الأعلى نجاحاً</option></select>
      <button class="btn-primary" onclick="openHoldingModal(${investor.id})">إضافة أصل</button>
    </div>
  </div>`;
}

function investorPortfolioPage(id) {
  const investor = investors.find(i => i.id === Number(id)) || investors[0];
  const metrics = getInvestorMetrics(investor);
  const rows = getPortfolioRows(investor);
  const totalPages = Math.max(1, Math.ceil(rows.length / 5));
  portfolioFilters.page = Math.min(portfolioFilters.page, totalPages);
  const pageRows = rows.slice((portfolioFilters.page - 1) * 5, portfolioFilters.page * 5);
  const allocationTotal = Math.max(1, metrics.current);
  return shell(`
    <div class="mb-6 flex flex-wrap gap-3"><a href="/investors" data-link class="btn-ghost">العودة للمستثمرين</a><a href="/investors/${investor.id}" data-link class="btn-secondary">رابط صفحة المستثمر</a><button class="btn-primary" onclick="openInvestorModal(${investor.id})">تعديل بيانات المستثمر</button></div>
    ${pageHeader(`محفظة ${investor.name}`, 'صفحة محفظة استثمارية مستقلة تعرض المشاريع والحصص والقيمة والأداء مع فلترة وفرز وصفحات وإجراءات CRUD لكل أصل.')}
    <div class="grid gap-5 md:grid-cols-4">${miniMetric('رأس المال المتاح', formatMoney(investor.capital), 'text-champagne')}${miniMetric('القيمة الحالية', formatMoney(metrics.current), 'text-amberlux')}${miniMetric('إجمالي المستثمر', formatMoney(metrics.invested), 'text-champagne')}${miniMetric('العائد المحقق', metrics.roi + '%', metrics.roi >= 0 ? 'text-emerald-200' : 'text-red-200')}</div>
    <div class="lux-card mt-8 rounded-[2.2rem] p-6"><div class="grid gap-4 md:grid-cols-4"><div><p class="text-xs text-champagne/50">نوع المستثمر</p><p class="mt-2 font-black text-champagne">${investor.type}</p></div><div><p class="text-xs text-champagne/50">المنطقة</p><p class="mt-2 font-black text-champagne">${investor.region}</p></div><div><p class="text-xs text-champagne/50">مستوى المخاطر</p><p class="mt-2 font-black text-champagne">${investor.risk}</p></div><div><p class="text-xs text-champagne/50">التفضيل</p><p class="mt-2 font-black text-champagne">${investor.preferred}</p></div></div></div>
    ${portfolioFilterBar(investor)}
    <div class="grid gap-6 lg:grid-cols-[1fr_.36fr]">
      <div class="lux-card rounded-[2.2rem] p-4"><div class="table-scroll overflow-x-auto"><table class="w-full min-w-[980px] text-sm"><thead><tr class="text-champagne/55"><th class="p-4 text-right">المشروع</th><th class="p-4">المنطقة</th><th class="p-4">الحصص</th><th class="p-4">المستثمر</th><th class="p-4">القيمة الحالية</th><th class="p-4">الأداء</th><th class="p-4">الحالة</th><th class="p-4">الإجراءات</th></tr></thead><tbody>${pageRows.map(row => `<tr class="border-t border-champagne/10 transition hover:bg-white/5"><td class="p-4"><b class="text-champagne">${row.project?.name || 'مشروع محذوف'}</b><p class="mt-1 text-xs text-amberlux">${row.project?.type || 'غير مصنف'}</p></td><td class="p-4 text-center">${row.project?.region || '-'}</td><td class="p-4 text-center">${row.units}</td><td class="p-4 text-center">${formatMoney(row.invested)}</td><td class="p-4 text-center font-black text-amberlux">${formatMoney(row.currentValue)}</td><td class="p-4 text-center font-black ${row.performance >= 0 ? 'text-emerald-200' : 'text-red-200'}">${row.performance}%</td><td class="p-4 text-center">${row.status}</td><td class="p-4"><div class="flex flex-wrap justify-center gap-2"><button class="btn-ghost !px-3 !py-2" onclick="navigate('/ideas/${row.projectId}')">عرض</button><button class="btn-secondary !px-3 !py-2" onclick="openHoldingModal(${investor.id}, ${row.id})">تعديل</button><button class="btn-primary !px-3 !py-2" onclick="sellHoldingUnit(${investor.id}, ${row.id})">بيع حصة</button><button class="btn-danger !px-3 !py-2" onclick="deleteHolding(${investor.id}, ${row.id})">حذف</button></div></td></tr>`).join('') || `<tr><td colspan="8" class="p-8 text-center text-champagne/50">لا توجد أصول مطابقة</td></tr>`}</tbody></table></div>${pagination(portfolioFilters.page, totalPages, 'setPortfolioPage')}</div>
      <aside class="lux-card rounded-[2.2rem] p-6"><h2 class="text-2xl font-black text-champagne">توزيع المحفظة</h2><div class="mt-5 space-y-4">${rows.map(row => `<div><div class="mb-2 flex justify-between gap-3 text-xs"><span class="text-champagne/70">${row.project?.name || 'مشروع'}</span><b class="text-amberlux">${Math.round((row.currentValue / allocationTotal) * 100)}%</b></div><div class="h-2 overflow-hidden rounded-full bg-white/10"><div class="h-full rounded-full bg-gradient-to-l from-amberlux to-champagne" style="width:${Math.max(6, Math.round((row.currentValue / allocationTotal) * 100))}%"></div></div></div>`).join('') || '<p class="text-sm text-champagne/55">أضف أصولاً لرؤية التوزيع.</p>'}</div><button class="btn-ghost mt-6 w-full" onclick="showToast('تم إنشاء تقرير المحفظة الشهري')">إنشاء تقرير شهري</button></aside>
    </div>
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

function openInvestorModal(id) {
  const investor = investors.find(i => i.id === Number(id));
  const modal = document.getElementById('modal-root');
  modal.innerHTML = `<div class="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-champagne/15 bg-espresso p-5 shadow-perfume"><div class="mb-4 flex items-center justify-between"><h2 class="text-2xl font-black text-champagne">${investor ? 'تعديل المستثمر' : 'إضافة مستثمر'}</h2><button class="btn-ghost" onclick="closeModal()">إغلاق</button></div>${investorForm(investor)}</div>`;
  modal.classList.remove('hidden'); modal.classList.add('flex');
  bindInvestorForm(investor?.id);
}

function investorForm(investor = {}) {
  return `<form id="investor-form" class="grid gap-3"><input name="name" required class="input-lux" placeholder="اسم المستثمر" value="${investor.name || ''}"><div class="grid gap-3 md:grid-cols-2"><select name="type" class="select-lux"><option ${investor.type==='مستثمر ملاك'?'selected':''}>مستثمر ملاك</option><option ${investor.type==='صندوق عائلي'?'selected':''}>صندوق عائلي</option><option ${investor.type==='شريك تشغيلي'?'selected':''}>شريك تشغيلي</option></select><input name="region" required class="input-lux" placeholder="المنطقة" value="${investor.region || ''}"></div><div class="grid gap-3 md:grid-cols-3"><select name="risk" class="select-lux"><option ${investor.risk==='منخفض'?'selected':''}>منخفض</option><option ${investor.risk==='متوازن'?'selected':''}>متوازن</option><option ${investor.risk==='مرتفع'?'selected':''}>مرتفع</option></select><input name="capital" required type="number" min="1" class="input-lux" placeholder="رأس المال" value="${investor.capital || ''}"><input name="targetRoi" required type="number" min="1" class="input-lux" placeholder="العائد المستهدف %" value="${investor.targetRoi || ''}"></div><div class="grid gap-3 md:grid-cols-3"><input name="preferred" required class="input-lux" placeholder="القطاع المفضل" value="${investor.preferred || ''}"><select name="status" class="select-lux"><option ${investor.status==='نشط'?'selected':''}>نشط</option><option ${investor.status==='توسع'?'selected':''}>توسع</option><option ${investor.status==='مراجعة'?'selected':''}>مراجعة</option></select><input name="joined" type="date" class="input-lux" value="${investor.joined || new Date().toISOString().slice(0,10)}"></div><button class="btn-primary" type="submit">حفظ المستثمر</button></form>`;
}

function bindInvestorForm(id) {
  document.getElementById('investor-form').addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const existing = investors.find(i => i.id === id);
    const payload = { ...data, id: id || Date.now(), capital: +data.capital, targetRoi: +data.targetRoi, portfolio: existing?.portfolio || [] };
    if (id) investors = investors.map(i => i.id === id ? payload : i); else investors.unshift(payload);
    closeModal(); showToast('تم حفظ المستثمر'); renderRoute();
  });
}

function openHoldingModal(investorId, holdingId) {
  const investor = investors.find(i => i.id === Number(investorId));
  if (!investor) return;
  const holding = investor.portfolio.find(h => h.id === Number(holdingId));
  const modal = document.getElementById('modal-root');
  modal.innerHTML = `<div class="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-champagne/15 bg-espresso p-5 shadow-perfume"><div class="mb-4 flex items-center justify-between"><h2 class="text-2xl font-black text-champagne">${holding ? 'تعديل أصل بالمحفظة' : 'إضافة أصل للمحفظة'}</h2><button class="btn-ghost" onclick="closeModal()">إغلاق</button></div>${holdingForm(holding)}</div>`;
  modal.classList.remove('hidden'); modal.classList.add('flex');
  bindHoldingForm(investor.id, holding?.id);
}

function holdingForm(holding = {}) {
  return `<form id="holding-form" class="grid gap-3"><select name="projectId" class="select-lux">${ideas.map(project => `<option value="${project.id}" ${Number(holding.projectId)===project.id?'selected':''}>${project.name} - ${project.region}</option>`).join('')}</select><div class="grid gap-3 md:grid-cols-3"><input name="units" required type="number" min="1" class="input-lux" placeholder="عدد الحصص" value="${holding.units || ''}"><input name="entryPrice" required type="number" min="1" class="input-lux" placeholder="سعر الدخول" value="${holding.entryPrice || ''}"><input name="currentValue" required type="number" min="1" class="input-lux" placeholder="القيمة الحالية" value="${holding.currentValue || ''}"></div><select name="status" class="select-lux"><option ${holding.status==='نشطة'?'selected':''}>نشطة</option><option ${holding.status==='قيد التوسع'?'selected':''}>قيد التوسع</option><option ${holding.status==='متابعة'?'selected':''}>متابعة</option><option ${holding.status==='مباعة جزئياً'?'selected':''}>مباعة جزئياً</option></select><button class="btn-primary" type="submit">حفظ الأصل</button></form>`;
}

function bindHoldingForm(investorId, holdingId) {
  document.getElementById('holding-form').addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const payload = { id: holdingId || Date.now(), projectId: +data.projectId, units: +data.units, entryPrice: +data.entryPrice, currentValue: +data.currentValue, status: data.status };
    investors = investors.map(investor => investor.id === investorId ? { ...investor, portfolio: holdingId ? investor.portfolio.map(h => h.id === holdingId ? payload : h) : [payload, ...investor.portfolio] } : investor);
    closeModal(); showToast('تم حفظ أصل المحفظة'); renderRoute();
  });
}

function bindFilters() {
  [['filter-query','query'], ['filter-type','type'], ['filter-region','region'], ['filter-status','status'], ['filter-sort','sort']].forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener(key === 'query' ? 'input' : 'change', e => { filters[key] = e.target.value; filters.page = 1; projectsPage = 1; renderRoute(false); });
  });
  [['investor-query','query'], ['investor-type','type'], ['investor-region','region'], ['investor-risk','risk'], ['investor-sort','sort']].forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener(key === 'query' ? 'input' : 'change', e => { investorFilters[key] = e.target.value; investorFilters.page = 1; renderRoute(false); });
  });
  [['portfolio-query','query'], ['portfolio-status','status'], ['portfolio-sort','sort']].forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener(key === 'query' ? 'input' : 'change', e => { portfolioFilters[key] = e.target.value; portfolioFilters.page = 1; renderRoute(false); });
  });
}

function setIdeaPage(p) { filters.page = p; renderRoute(); }
function setProjectsPage(p) { projectsPage = p; renderRoute(); }
function setInvestorPage(p) { investorFilters.page = p; renderRoute(); }
function setPortfolioPage(p) { portfolioFilters.page = p; renderRoute(); }
function duplicateIdea(id) { const item = ideas.find(i => i.id === id); if (item) { ideas.unshift({ ...item, id: Date.now(), name: item.name + ' - نسخة' }); showToast('تم نسخ الفكرة'); renderRoute(); } }
function duplicateInvestor(id) { const investor = investors.find(i => i.id === id); if (investor) { investors.unshift({ ...investor, id: Date.now(), name: investor.name + ' - نسخة', portfolio: investor.portfolio.map(h => ({ ...h, id: Date.now() + h.id })) }); showToast('تم نسخ المستثمر ومحفظته'); renderRoute(); } }
function deleteIdea(id) { if (confirm('هل تريد حذف هذه الفكرة؟')) { ideas = ideas.filter(i => i.id !== id); showToast('تم حذف الفكرة'); renderRoute(); } }
function deleteInvestor(id) { if (confirm('هل تريد حذف المستثمر ومحفظته؟')) { investors = investors.filter(i => i.id !== id); showToast('تم حذف المستثمر'); renderRoute(); } }
function reserveShares(id) { const item = ideas.find(i => i.id === id); if (item && item.shares > 0) { item.shares -= 1; showToast('تم حجز حصة استثمارية واحدة'); renderRoute(); } }
function sellHoldingUnit(investorId, holdingId) { const investor = investors.find(i => i.id === investorId); const holding = investor?.portfolio.find(h => h.id === holdingId); if (holding && holding.units > 1) { holding.units -= 1; holding.currentValue = Math.max(holding.entryPrice, holding.currentValue - holding.entryPrice); holding.status = 'مباعة جزئياً'; showToast('تم بيع حصة من المحفظة'); renderRoute(false); } else { deleteHolding(investorId, holdingId); } }
function deleteHolding(investorId, holdingId) { if (confirm('هل تريد حذف هذا الأصل من المحفظة؟')) { investors = investors.map(investor => investor.id === investorId ? { ...investor, portfolio: investor.portfolio.filter(h => h.id !== holdingId) } : investor); showToast('تم حذف الأصل من المحفظة'); renderRoute(false); } }
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
  else if (path.match(/^\/investors\/\d+(\/portfolio)?$/)) content = investorPortfolioPage(path.split('/')[2]);
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
window.openInvestorModal = openInvestorModal;
window.openHoldingModal = openHoldingModal;
window.closeModal = closeModal;
window.setIdeaPage = setIdeaPage;
window.setProjectsPage = setProjectsPage;
window.setInvestorPage = setInvestorPage;
window.setPortfolioPage = setPortfolioPage;
window.duplicateIdea = duplicateIdea;
window.duplicateInvestor = duplicateInvestor;
window.deleteIdea = deleteIdea;
window.deleteInvestor = deleteInvestor;
window.reserveShares = reserveShares;
window.sellHoldingUnit = sellHoldingUnit;
window.deleteHolding = deleteHolding;
window.removeCalcLine = removeCalcLine;
window.seedCalculator = seedCalculator;

renderRoute(false);

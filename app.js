'use strict';

/* ================================================================
   DIGITAL MENUS — APP LOGIC
   ----------------------------------------------------------------
   File map:
     F1. Data — hero carousel slides
     F2. Data — all projects (single unified list, no categories)
     F3. Hero carousel (infinite loop, clone-based)
     F4. Language switch (EN / FA — fully separated, not simultaneous)
     F5. Build the menus section + project cards
     F6. Video play button
     F7. Scroll reveal animation
   ================================================================ */

/* ================================================================
   F1. DATA — HERO CAROUSEL SLIDES
   ----------------------------------------------------------------
   imgSrc points to the "heroimages" folder that must sit next
   to index.html at the project root, e.g.:
     /index.html
     /style.css
     /app.js
     /heroimages/slide-1.jpg
     /heroimages/slide-2.jpg
     ...
   If an image file is missing, a placeholder is shown automatically
   (see the onerror handler in makeSlide() below).
   ================================================================ */
const heroSlides = [
  {
    categoryEn: 'Online Digital Menu',
    categoryFa: 'منوی دیجیتال آنلاین',
    titleEn:  'Neon',
    titleFa:  'نئون',
    descEn:   'A novel and Distinct Sensory Experience of Nostalgia',
    descFa:   'تجربه حسی نوستالژی و متفاوت',
    bgColor:  'linear-gradient(135deg,#2C1A0E 0%,#4A2E18 100%)',
    imgSrc:   '/heroimages/slide-1.jpg'
  },

  {
    categoryEn: 'Online Digital Menu',
    categoryFa: 'منوی دیجیتال آنلاین',
    titleEn:  'Aroma',
    titleFa:  'آروما',
    descEn:   'Unique and Diverse',
    descFa:   'منحصر به فرد و متنوع',
    bgColor:  'linear-gradient(135deg,#0D1F12 0%,#1A3A22 100%)',
    imgSrc:   '/heroimages/slide-2.jpg'
  },

  {
    categoryEn: 'Online Digital Menu',
    categoryFa: 'منوی دیجیتال آنلاین',
    titleEn:  'Venus',
    titleFa:  'ونوس',
    descEn:   'Beautiful as Venus',
    descFa:   'زیبا همچون ونوس',
    bgColor:  'linear-gradient(135deg,#2A0E06 0%,#4A1A0A 100%)',
    imgSrc:   '/heroimages/slide-3.jpg'
  },

  {
    categoryEn: 'Online Digital Menu',
    categoryFa: 'منوی دیجیتال آنلاین',
    titleEn:  'Luma',
    titleFa:  'لوما',
    descEn:   'Creative and Modern Design',
    descFa:   'طراحی خلاقانه و مدرن',
    bgColor:  'linear-gradient(135deg,#2A0E06 0%,#4A1A0A 100%)',
    imgSrc:   '/heroimages/slide-4.jpg'
  },

  {
    categoryEn: 'Online Digital Menu',
    categoryFa: 'منوی دیجیتال آنلاین',
    titleEn:  'Dark Zone',
    titleFa:  'دارک زون',
    descEn:   'Mysterious and Stunning',
    descFa:   'مرموز و خیره کننده',
    bgColor:  'linear-gradient(135deg,#2A0E06 0%,#4A1A0A 100%)',
    imgSrc:   '/heroimages/slide-5.jpg'
  },

  {
    categoryEn: 'Online Digital Menu',
    categoryFa: 'منوی دیجیتال آنلاین',
    titleEn:  'Dream',
    titleFa:  'دریم',
    descEn:   'Simple, Attractive, and Practical',
    descFa:   'ساده , جذاب و کاربردی',
    bgColor:  'linear-gradient(135deg,#2A0E06 0%,#4A1A0A 100%)',
    imgSrc:   '/heroimages/slide-6.jpg'
  },

  {
    categoryEn: 'Online Digital Menu',
    categoryFa: 'منوی دیجیتال آنلاین',
    titleEn:  'Honey',
    titleFa:  'هانی',
    descEn:   'Premium, Top-Tier Design',
    descFa:   'طراحی ممتاز و درجه یک',
    bgColor:  'linear-gradient(135deg,#0E1220 0%,#1A2038 100%)',
    imgSrc:   '/heroimages/slide-7.jpg'
  }
];

/* ================================================================
   F2. DATA — ALL PROJECTS (single unified list — no categories)
   ----------------------------------------------------------------
   logoSrc points to the "logo" folder that must sit next to
   index.html at the project root, e.g.:
     /logo/cafe-aramesh.svg
     /logo/cafe-nou.svg
     ...
   Accepts .svg or .png. If a logo file is missing, a dashed
   placeholder box is shown automatically (see buildProjectCard()).

   NOTE: the color-palette swatches field has been removed from
   this data model per client request — project cards no longer
   display the 3 brand-color dots.

   To add a new project, just push a new object onto this array:
     nameEn / nameFa : project name
     descEn / descFa : short description
     menuUrl         : live menu link  ← replace YOUR_MENU_URL
     logoSrc         : path to the logo file in /logo
     videoSrc        : YouTube embed URL ← replace VIDEO_ID_N
   ================================================================ */
const allProjects = [
  {
    nameEn:  'Neon',
    nameFa:  'نئون',
    descEn:  '● Six Colorful Styles</br>● Easy Navigations</br>● Image & Text Layouts</br>● Multi Language Support</br>● Interactive Item Selection',
    descFa:  '● شش مدل استایل رنگی</br>● ناوبری آسان و سریع</br>● مدل متنی ساده و عکس دار</br>● قابلیت پشتیبانی از چند زبانه</br>● امکان انتخاب تعاملی آیتمهای منو',
    menuUrl:  'https://digitalmenus.ir/Neon/',
    logoSrc:  '/logo/Neon Logo.svg',
    videoSrc: 'https://www.youtube.com/embed/-CP3qaPO0Js?autoplay=0&mute=1'
  },
  {
    nameEn:  'Aroma',
    nameFa:  'آروما',
    descEn:  '● Six Exclusive Styles</br>● Hybrid Navigations</br>● Image & Text Layouts</br>● Multi Language Support</br>● Interactive Item Selection',
    descFa:  '● شش مدل استایل لاکچری</br>● ناوبری دو حالته ترکیبی</br>● آیتمهای متنی ساده و عکس دار</br>● پشتیبانی از حالت چند زبانه</br>● انتخاب تعاملی آیتمهای داخل منو',
    menuUrl:  'https://digitalmenus.ir/Aroma/',
    logoSrc:  '/logo/Aroma Logo.svg',
    videoSrc: 'https://www.youtube.com/embed/iClq5V2MxEg?autoplay=0&mute=1'
  },
  {
    nameEn:  'Venus',
    nameFa:  'ونوس',
    descEn:  '● Five Unique Styles</br>● Multi Language</br>● Quick Navigation</br>● Image & Text Layouts</br>● Interactive Item Selection</br>● Horizontal & Vertical Scrolling',
    descFa:  '● پنج مدل استایل خاص</br>● قابلیت چند زبانه بودن</br>● ناوبری سریع بین دسته ها</br>● مدل متنی ساده و عکس دار</br>● انتخاب تعاملی آیتمهای داخل منو</br>● امکان اسکرول بصورت افقی و عمودی',
    menuUrl:  'https://digitalmenus.ir/Venus/',
    logoSrc:  '/logo/Venus Logo.svg',
    videoSrc: 'https://www.youtube.com/embed/a74OjP9Ug4A?autoplay=0&mute=1'
  },
  {
    nameEn:  'Luma',
    nameFa:  'لوما',
    descEn:  '● Unique Style</br>● Dual Language</br>● Text Only Layout</br>● Elevator Navigation</br>● Support For Additional Details',
    descFa:  '● استایل خاص</br>● دو زبانه همزمان</br>● مدل متنی ساده</br>● ناوبری آسانسوری</br>● امکان افزودن جزئیات بیشتر',
    menuUrl:  'https://digitalmenus.ir/Luma',
    logoSrc:  '/logo/Luma Logo.svg',
    videoSrc: 'https://www.youtube.com/embed/gW9keRaXP2U?autoplay=0&mute=1'
  },
  {
    nameEn:  'Dark Zone',
    nameFa:  'دارک زون',
    descEn:  '● Unique Style</br>● Multi Language</br>● Quick Navigation</br>● Dark & Light Themes</br>● Image & Text Layouts</br>● Interactive Item Selection',
    descFa:  '● استایل خاص</br>● چند زبانه</br>● ناوبری سریع</br>● تم تیره و روشن</br>● مدل متنی ساده و عکس دار</br>● انتخاب تعاملی آیتمهای داخل منو',
    menuUrl:  'https://digitalmenus.ir/DarkZone/',
    logoSrc:  '/logo/DarkZone Logo.svg',
    videoSrc: 'https://www.youtube.com/embed/BkCnvu3krHY?autoplay=0&mute=1'
  },
  {
    nameEn:  'Dream',
    nameFa:  'دریم',
    descEn:  '● Unique Style</br>● Multi Language</br>● Page Navigation</br>● Text Only Layout</br>● Support For More Details',
    descFa:  '● استایل خاص</br>● دو یا تک زبانه</br>● ناوبری صفحه ای</br>● مدل متنی ساده</br>● امکان افزودن جزئیات بیشتر',
    menuUrl:  'https://digitalmenus.ir/Dream/',
    logoSrc:  '/logo/Dream Logo.svg',
    videoSrc: 'https://www.youtube.com/embed/vLtDetYh0os?autoplay=0&mute=1'
  },
  {
    nameEn:  'Honey',
    nameFa:  'هانی',
    descEn:  '● Unique Style</br>● Multi Language</br>● Quick Navigation</br>● Dark & Light Themes</br>● Image & Text Layouts</br>● Interactive Item Selection',
    descFa:  '● استایل خاص</br>● چند زبانه</br>● ناوبری سریع</br>● تم تیره و روشن</br>● متنی ساده یا عکس دار</br>● انتخاب تعاملی آیتمهای داخل منو',
    menuUrl:  'https://digitalmenus.ir/Honey/',
    logoSrc:  '/logo/Honey Logo.svg',
    videoSrc: 'https://www.youtube.com/embed/GhiIZZyk1Vg?autoplay=0&mute=1'
  }
];

/* Single unified section that now holds every project
   (previously split across café / restaurant / fast-food) */
const menuSection = {
  id:       'menus',
  nameEn:   'Our Digital Menus',
  nameFa:   'منوهای دیجیتال ما',
  descEn:   'A distinctive and diverse collection of luxury, QR digital menus for café , restaurant , fast-food , and bakery.',
  descFa:   'مجموعه‌ای متفاوت و متنوع از منوهای دیجیتال لاکچری و قابل اسکن برای کافه‌ ، رستوران , فست فود و بیکری.',
  projects: allProjects
};


/* ================================================================
   F3. HERO CAROUSEL — infinite loop (clone-based)
   ================================================================ */
(function initCarousel() {
  const track       = document.getElementById('carouselTrack');
  const dotsWrap    = document.getElementById('carouselDots');
  const btnPrev     = document.getElementById('btnPrev');
  const btnNext     = document.getElementById('btnNext');
  const progressBar = document.getElementById('progressBar');
  const AUTOPLAY_MS = 5500;
  const N           = heroSlides.length;

  let realIndex   = 0;
  let trackIndex  = 1;
  let isAnimating = false;
  let autoTimer   = null;

  function makeSlide(slide, isClone) {
    const el = document.createElement('div');
    el.className = 'carousel-slide';
    if (!isClone) el.setAttribute('role', 'tabpanel');

    /* Try loading the real slide image from /heroimages/.
       If it 404s, fall back to a colored placeholder block. */
    const img = document.createElement('img');
    img.className = 'carousel-slide-img';
    img.alt       = slide.titleEn;
    img.loading   = 'lazy';
    img.onerror   = () => { img.style.display = 'none'; ph.style.display = 'flex'; };
    img.src       = slide.imgSrc;
    el.appendChild(img);

    const ph = document.createElement('div');
    ph.className        = 'slide-placeholder';
    ph.style.background = slide.bgColor;
    ph.style.display    = 'none'; /* only shown by the onerror handler above */
    ph.innerHTML = `
      <svg class="slide-placeholder-icon" width="56" height="56" fill="none"
           stroke="rgba(255,255,255,0.5)" stroke-width="1" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <path d="M21 15l-5-5L5 21"/>
      </svg>
      <span class="slide-placeholder-label">${slide.titleEn} / Image missing</span>`;
    el.appendChild(ph);

    if (!isClone) {
      const cap = document.createElement('div');
      cap.className = 'carousel-caption';
      /* Both languages are rendered; the LANGUAGE VISIBILITY SYSTEM
         in style.css (section 3) hides whichever one is inactive. */
      cap.innerHTML = `
        <span class="caption-tag lang-en">${slide.categoryEn}</span>
        <span class="caption-tag lang-fa">${slide.categoryFa}</span>
        <h2 class="caption-title lang-en">${slide.titleEn}</h2>
        <h2 class="caption-title lang-fa">${slide.titleFa}</h2>
        <p class="caption-desc lang-en">${slide.descEn}</p>
        <p class="caption-desc lang-fa">${slide.descFa}</p>`;
      el.appendChild(cap);
    }
    return el;
  }

  track.appendChild(makeSlide(heroSlides[N - 1], true));
  heroSlides.forEach((s, i) => {
    const sl = makeSlide(s, false);
    if (i === 0) sl.classList.add('is-active');
    track.appendChild(sl);
  });
  track.appendChild(makeSlide(heroSlides[0], true));

  heroSlides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    dot.addEventListener('click', () => { goTo(i); restartAutoplay(); });
    dotsWrap.appendChild(dot);
  });

  const allSlides = () => track.querySelectorAll('.carousel-slide');
  const dots      = () => dotsWrap.querySelectorAll('.dot');

  function jumpTo(idx) {
    track.style.transition = 'none';
    track.style.transform  = `translateX(${idx * 100}%)`;
  }

  function slideTo(idx) {
    track.style.transition = 'transform 0.72s cubic-bezier(0.77,0,0.18,1)';
    track.style.transform  = `translateX(${idx * 100}%)`;
  }

  function updateUI(newReal) {
    allSlides().forEach(s => s.classList.remove('is-active'));
    allSlides()[newReal + 1].classList.add('is-active');
    dots().forEach((d, i) => {
      const a = i === newReal;
      d.classList.toggle('active', a);
      d.setAttribute('aria-selected', a);
    });
    realIndex  = newReal;
    trackIndex = newReal + 1;
  }

  function goTo(n) {
    if (isAnimating) return;
    isAnimating = true;
    slideTo(n + 1);
    updateUI(n);
    startProgress();
    setTimeout(() => { isAnimating = false; }, 760);
  }

  function goNext() {
    if (isAnimating) return;
    isAnimating = true;
    const next = trackIndex + 1;
    slideTo(next);
    trackIndex = next;
    setTimeout(() => {
      if (trackIndex >= N + 1) { jumpTo(1); trackIndex = 1; realIndex = 0; }
      else { realIndex = trackIndex - 1; }
      updateUI(realIndex);
      trackIndex = realIndex + 1;
      isAnimating = false;
    }, 740);
    startProgress();
  }

  function goPrev() {
    if (isAnimating) return;
    isAnimating = true;
    const prev = trackIndex - 1;
    slideTo(prev);
    trackIndex = prev;
    setTimeout(() => {
      if (trackIndex <= 0) { jumpTo(N); trackIndex = N; realIndex = N - 1; }
      else { realIndex = trackIndex - 1; }
      updateUI(realIndex);
      trackIndex = realIndex + 1;
      isAnimating = false;
    }, 740);
    startProgress();
  }

  jumpTo(1);

  function startAutoplay()   { clearInterval(autoTimer); autoTimer = setInterval(goNext, AUTOPLAY_MS); }
  function restartAutoplay() { clearInterval(autoTimer); startAutoplay(); }

  function startProgress() {
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
    progressBar.getBoundingClientRect();
    progressBar.style.transition = `width ${AUTOPLAY_MS}ms linear`;
    progressBar.style.width = '100%';
  }

  btnPrev.addEventListener('click', () => { goPrev(); restartAutoplay(); });
  btnNext.addEventListener('click', () => { goNext(); restartAutoplay(); });

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { goPrev(); restartAutoplay(); }
    if (e.key === 'ArrowLeft')  { goNext(); restartAutoplay(); }
  });

  let touchX = 0;
  const car  = document.getElementById('heroCarousel');
  car.addEventListener('touchstart', e => { touchX = e.changedTouches[0].clientX; }, { passive:true });
  car.addEventListener('touchend',   e => {
    const diff = touchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 45) { diff > 0 ? goNext() : goPrev(); restartAutoplay(); }
  }, { passive:true });
  car.addEventListener('mouseenter', () => clearInterval(autoTimer));
  car.addEventListener('mouseleave', startAutoplay);

  startProgress();
  startAutoplay();
})();


/* ================================================================
   F4. LANGUAGE SWITCH — fully separated EN / FA (not simultaneous)
   ----------------------------------------------------------------
   Clicking EN or FA in the header:
     1. Sets <html lang="en|fa" dir="ltr|rtl">
     2. style.css section 3 then hides every ".lang-en" OR every
        ".lang-fa" element accordingly — the inactive language is
        fully removed from the page, not just shrunk.
     3. Updates the button group's aria-pressed state.
     4. Remembers the choice in localStorage for the next visit.
   ================================================================ */
(function initLanguageSwitch() {
  const root    = document.documentElement;
  const buttons = document.querySelectorAll('.lang-btn');
  const STORAGE_KEY = 'digitalmenus-lang';

  function setLanguage(lang) {
    const dir = lang === 'fa' ? 'rtl' : 'ltr';
    root.setAttribute('lang', lang);
    root.setAttribute('dir', dir);
    buttons.forEach(btn => {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });
  }

  /* Restore the visitor's previous choice, if any */
  let initialLang = 'en';
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'fa') initialLang = saved;
  } catch (e) { /* localStorage unavailable — fall back to default "en" */ }
  setLanguage(initialLang);

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    });
  });
})();


/* ================================================================
   F5. BUILD THE MENUS SECTION + PROJECT CARDS
   ----------------------------------------------------------------
   Each project card gallery has 2 items side by side:
     [left]  real logo image from /logo (falls back to a dashed
             placeholder box if the file is missing)
     [right] video embed with a play button overlay
   ================================================================ */
(function buildSection() {
  const container = document.getElementById('sectionsContainer');
  const cat = menuSection;

  const wrap = document.createElement('div');
  wrap.className = 'menus-wrap';

  const sec = document.createElement('section');
  sec.id        = cat.id;
  sec.className = 'section';

  const hdr = document.createElement('div');
  hdr.className = 'section-header reveal';
  hdr.innerHTML = `
    <h2 class="section-title lang-en">${cat.nameEn}</h2>
    <h2 class="section-title lang-fa">${cat.nameFa}</h2>
    <p class="section-desc lang-en">${cat.descEn}</p>
    <p class="section-desc lang-fa">${cat.descFa}</p>`;
  sec.appendChild(hdr);

  const grid = document.createElement('div');
  grid.className = 'projects-grid';

  cat.projects.forEach((proj, pIdx) => {
    grid.appendChild(buildProjectCard(proj, pIdx));
  });

  sec.appendChild(grid);
  wrap.appendChild(sec);
  container.appendChild(wrap);
})();

/* Builds a single project card element (kept as its own function
   for readability — called once per project above) */
function buildProjectCard(proj, pIdx) {
  const card = document.createElement('div');
  card.className = 'project-card reveal';
  card.style.transitionDelay = `${pIdx * 0.08}s`;

  /* "View Online Menu" link — replace proj.menuUrl with the real
     live-menu URL for each project */
  const menuLinkHTML = `
    <a href="${proj.menuUrl}" target="_blank" rel="noopener noreferrer" class="menu-link">
      <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"
           viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <polyline points="15 3 21 3 21 9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
      <span class="lang-en">View Online Menu ↗</span>
      <span class="lang-fa">مشاهده منوی آنلاین</span>
    </a>`;

  card.innerHTML = `
    <div class="project-header">
      <h3 class="project-name lang-en">${proj.nameEn}</h3>
      <h3 class="project-name lang-fa">${proj.nameFa}</h3>
      <p class="project-desc lang-en">${proj.descEn}</p>
      <p class="project-desc lang-fa">${proj.descFa}</p>
      ${menuLinkHTML}
    </div>`;

  const gallery = document.createElement('div');
  gallery.className = 'project-gallery';

  /* ── Gallery item 1: real logo image, with placeholder fallback ── */
  const logoItem = document.createElement('div');
  logoItem.className = 'gallery-item logo-item';
  logoItem.setAttribute('aria-label', `Logo — ${proj.nameEn}`);

  const logoImg = document.createElement('img');
  logoImg.className = 'logo-image';
  logoImg.alt        = `${proj.nameEn} logo`;
  logoImg.loading    = 'lazy';

  const logoFallback = document.createElement('div');
  logoFallback.className = 'logo-placeholder';
  logoFallback.innerHTML = `
    <div class="logo-placeholder-frame">
      <svg width="48" height="48" fill="none" stroke="currentColor"
           stroke-width="1.2" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <path d="M3 9h18"/>
        <path d="M9 21V9"/>
      </svg>
    </div>
    <span class="logo-placeholder-text lang-en">Logo file missing</span>
    <span class="logo-placeholder-text lang-fa">فایل لوگو یافت نشد</span>`;

  /* If the logo file doesn't exist yet at /logo/, show the dashed
     placeholder instead of a broken image icon */
  logoImg.onerror = () => { logoImg.style.display = 'none'; logoFallback.style.display = 'flex'; };
  logoImg.src = proj.logoSrc;

  logoItem.appendChild(logoImg);
  logoItem.appendChild(logoFallback);
  /*logoItem.insertAdjacentHTML('beforeend', `
    <span class="gallery-item-label lang-en">Logo</span>
    <span class="gallery-item-label lang-fa">لوگو</span>`);*/
  gallery.appendChild(logoItem);

  /* ── Gallery item 2: video embed with play button ── */
  const videoItem = document.createElement('div');
  videoItem.className = 'gallery-item';
  videoItem.dataset.type = 'video';
  videoItem.innerHTML = `
    <div class="gallery-video-wrap">
      <iframe src="${proj.videoSrc}"
              title="Preview video — ${proj.nameEn}"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
              allowfullscreen loading="lazy"></iframe>
    </div>
    <div class="video-play-btn" aria-label="Play preview video">
      <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden="true">
        <circle cx="28" cy="28" r="28" fill="rgba(0,0,0,0.45)"/>
        <path d="M23 19l18 9-18 9V19z" fill="white"/>
      </svg>
    </div>`;
  gallery.appendChild(videoItem);

  card.appendChild(gallery);
  return card;
}


/* ================================================================
   F6. VIDEO PLAY — clicking the play button starts the embed
   ================================================================ */
(function initVideoPlay() {
  document.addEventListener('click', e => {
    const pb = e.target.closest('.video-play-btn');
    if (!pb) return;
    pb.style.display = 'none';
    const iframe = pb.previousElementSibling.querySelector('iframe');
    if (iframe) {
      iframe.style.pointerEvents = 'auto';
      iframe.src = iframe.src.includes('?')
        ? iframe.src.replace('autoplay=0', 'autoplay=1')
        : iframe.src + '?autoplay=1';
    }
  });
})();


/* ================================================================
   F7. SCROLL REVEAL — fades/slides elements in as they enter view
   ================================================================ */
(function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.07 });

  function observeAll() {
    document.querySelectorAll('.reveal:not(.observed)').forEach(el => {
      el.classList.add('observed');
      io.observe(el);
    });
  }
  observeAll();
  new MutationObserver(observeAll)
    .observe(document.getElementById('sectionsContainer'), { childList:true, subtree:true });
})();

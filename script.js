/* ═══════════════════════════════════════════
   MORPH JUNJIE KARTAWIDJAJA — PORTFOLIO JS
═══════════════════════════════════════════ */
'use strict';

/* ────────────────────────────────────────
   TRANSLATIONS
──────────────────────────────────────── */
const translations = {
  en: {
    'nav.about':       'About',
    'nav.skills':      'Skills',
    'nav.collabs':     'Collabs',
    'nav.projects':    'Projects',
    'nav.education':   'Education',
    'nav.stats':       'Stats',
    'nav.testimonials':'Reviews',
    'nav.contact':     'Contact',

    'hero.badge':       'Mathematics Science · KAIST · Semester 4',
    'hero.rolePrefix':  "I'm a ",
    'hero.tagline':     'Building elegant digital experiences through mathematics,\nprogramming, research, and innovation.',
    'hero.btnProjects': 'View Projects',
    'hero.btnContact':  'Contact Me',
    'hero.stat1':       'Joined KAIST',
    'hero.stat2':       'Semester',
    'hero.stat3':       'Languages',
    'hero.stat4':       'Focus',
    'hero.scroll':      'Scroll',

    'about.eyebrow':      'Who I Am',
    'about.title':        'About Me',
    'about.card1Title':   'Driven by Curiosity',
    'about.card1Text':    'Morph Junjie Kartawidjaja is a Mathematics Science student at KAIST with deep interests in mathematics, software development, research, and digital innovation.',
    'about.card2Title':   'Global Perspective',
    'about.card2Text':    'Originally from Indonesia, studying at one of Asia\'s most prestigious STEM universities in South Korea — bridging cultures, languages, and disciplines.',
    'about.card3Title':   'Research & Innovation',
    'about.card3Text':    'Combining rigorous mathematical thinking with hands-on engineering to tackle complex problems across AI, cybersecurity, and data science.',
    'about.interestsTitle': 'Interests',

    'skills.eyebrow': 'What I Know',
    'skills.title':   'Skills & Expertise',
    'skills.prog':    'Programming',
    'skills.math':    'Mathematics',
    'skills.dev':     'Development',
    'skills.tools':   'Tools',

    'collabs.eyebrow': 'Worked With',
    'collabs.title':   'Collaborations',
    'collabs.google':  'Google Indonesia',
    'collabs.samsung': 'Samsung Indonesia',

    'projects.eyebrow':       'What I\'ve Built',
    'projects.title':         'Projects',
    'projects.cat.math':      'Mathematics',
    'projects.cat.research':  'Research',
    'projects.cat.prog':      'Programming',
    'projects.cat.web':       'Web Development',
    'projects.cat.interactive':'Interactive',
    'projects.cat.ai':        'Artificial Intelligence',
    'projects.cat.data':      'Data Analysis',
    'projects.cat.security':  'Cybersecurity',
    'projects.math.title':    'Advanced Mathematical Modeling',
    'projects.math.desc':     'Exploring complex systems through differential equations, optimization theory, and numerical analysis to solve real-world problems.',
    'projects.research.title':'Computational Research Platform',
    'projects.research.desc': 'A research environment for running mathematical experiments, collecting data, and generating insightful visual reports.',
    'projects.prog.title':    'Systems Programming Engine',
    'projects.prog.desc':     'High-performance computational engine written in C++ and Rust, optimized for low-latency mathematical operations.',
    'projects.web.title':     'Academic Portal UI',
    'projects.web.desc':      'A responsive, accessibility-first academic portal with interactive dashboards, grade tracking, and schedule visualization.',
    'projects.interactive.title': 'Interactive Math Visualizer',
    'projects.interactive.desc':  'Real-time visualization tool for exploring mathematical functions, fractals, and topological surfaces in the browser.',
    'projects.ai.title':      'ML Pattern Recognition',
    'projects.ai.desc':       'A machine learning pipeline for pattern recognition in mathematical datasets using neural networks and statistical modeling.',
    'projects.data.title':    'Statistical Data Pipeline',
    'projects.data.desc':     'End-to-end data pipeline for cleaning, analyzing, and visualizing large datasets with automated report generation.',
    'projects.security.title':'Cryptographic Toolkit',
    'projects.security.desc': 'A research toolkit implementing and analyzing classical and modern cryptographic algorithms with performance benchmarks.',

    'edu.eyebrow':  'Academic Journey',
    'edu.title':    'Education',
    'edu.program':  'B.Sc. Mathematics Science',
    'edu.present':  'Present',
    'edu.badge':    'Semester 4',
    'edu.desc':     'Korea Advanced Institute of Science and Technology (KAIST) — one of Asia\'s most prestigious STEM universities, located in Daejeon, South Korea. Specializing in pure and applied mathematics with coursework spanning calculus, algebra, probability, and computational mathematics.',

    'stats.eyebrow':  'By the Numbers',
    'stats.title':    'Statistics',
    'stats.kaist':    'Joined KAIST',
    'stats.semester': 'Current Semester',
    'stats.origin':   'Origin · Indonesia',
    'stats.location': 'Location · South Korea',
    'stats.langs':    'Programming Languages',
    'stats.projects': 'Projects Built',
    'stats.collabs':  'Collaborations',
    'stats.interests':'Interests',

    'testi.eyebrow': 'What Professors Say',
    'testi.title':   'Testimonials',
    'testi.kim':     '"Morph demonstrates exceptional analytical skills and creativity in mathematical modeling."',
    'testi.lee':     '"His dedication to research and problem-solving sets him apart from his peers."',
    'testi.park':    '"Morph combines technical expertise with innovative thinking, making him a valuable contributor to any project."',
    'testi.choi':    '"Morph\'s ability to connect mathematics with digital innovation is remarkable."',

    'contact.eyebrow': 'Get In Touch',
    'contact.title':   'Contact',
    'contact.sub':     'Open to research collaborations, projects, and conversations about mathematics, technology, and innovation.',
    'contact.email':   'Email',

    'footer.rights': 'All rights reserved.',
    'footer.made':   'Crafted with mathematics, code, and curiosity.',
  },

  id: {
    'nav.about':       'Tentang',
    'nav.skills':      'Keahlian',
    'nav.collabs':     'Kolaborasi',
    'nav.projects':    'Proyek',
    'nav.education':   'Pendidikan',
    'nav.stats':       'Statistik',
    'nav.testimonials':'Ulasan',
    'nav.contact':     'Kontak',

    'hero.badge':       'Ilmu Matematika · KAIST · Semester 4',
    'hero.rolePrefix':  'Saya seorang ',
    'hero.tagline':     'Membangun pengalaman digital elegan melalui matematika,\npemrograman, penelitian, dan inovasi.',
    'hero.btnProjects': 'Lihat Proyek',
    'hero.btnContact':  'Hubungi Saya',
    'hero.stat1':       'Bergabung KAIST',
    'hero.stat2':       'Semester',
    'hero.stat3':       'Bahasa',
    'hero.stat4':       'Fokus',
    'hero.scroll':      'Gulir',

    'about.eyebrow':      'Siapa Saya',
    'about.title':        'Tentang Saya',
    'about.card1Title':   'Didorong oleh Rasa Ingin Tahu',
    'about.card1Text':    'Morph Junjie Kartawidjaja adalah mahasiswa Ilmu Matematika di KAIST dengan minat mendalam pada matematika, pengembangan perangkat lunak, penelitian, dan inovasi digital.',
    'about.card2Title':   'Perspektif Global',
    'about.card2Text':    'Berasal dari Indonesia, belajar di salah satu universitas STEM paling bergengsi di Asia, di Korea Selatan — menjembatani budaya, bahasa, dan disiplin ilmu.',
    'about.card3Title':   'Penelitian & Inovasi',
    'about.card3Text':    'Menggabungkan pemikiran matematis yang ketat dengan rekayasa langsung untuk mengatasi masalah kompleks di AI, keamanan siber, dan ilmu data.',
    'about.interestsTitle': 'Minat',

    'skills.eyebrow': 'Yang Saya Kuasai',
    'skills.title':   'Keahlian & Kompetensi',
    'skills.prog':    'Pemrograman',
    'skills.math':    'Matematika',
    'skills.dev':     'Pengembangan',
    'skills.tools':   'Alat',

    'collabs.eyebrow': 'Pernah Bekerja Sama',
    'collabs.title':   'Kolaborasi',
    'collabs.google':  'Google Indonesia',
    'collabs.samsung': 'Samsung Indonesia',

    'projects.eyebrow':        'Yang Telah Saya Bangun',
    'projects.title':          'Proyek',
    'projects.cat.math':       'Matematika',
    'projects.cat.research':   'Penelitian',
    'projects.cat.prog':       'Pemrograman',
    'projects.cat.web':        'Pengembangan Web',
    'projects.cat.interactive':'Interaktif',
    'projects.cat.ai':         'Kecerdasan Buatan',
    'projects.cat.data':       'Analisis Data',
    'projects.cat.security':   'Keamanan Siber',
    'projects.math.title':     'Pemodelan Matematika Tingkat Lanjut',
    'projects.math.desc':      'Menjelajahi sistem kompleks melalui persamaan diferensial, teori optimasi, dan analisis numerik untuk memecahkan masalah nyata.',
    'projects.research.title': 'Platform Penelitian Komputasional',
    'projects.research.desc':  'Lingkungan penelitian untuk menjalankan eksperimen matematika, mengumpulkan data, dan menghasilkan laporan visual yang informatif.',
    'projects.prog.title':     'Mesin Pemrograman Sistem',
    'projects.prog.desc':      'Mesin komputasional berperforma tinggi yang ditulis dalam C++ dan Rust, dioptimalkan untuk operasi matematika latensi rendah.',
    'projects.web.title':      'UI Portal Akademik',
    'projects.web.desc':       'Portal akademik responsif yang mengutamakan aksesibilitas dengan dasbor interaktif, pelacak nilai, dan visualisasi jadwal.',
    'projects.interactive.title':'Visualizer Matematika Interaktif',
    'projects.interactive.desc': 'Alat visualisasi real-time untuk menjelajahi fungsi matematika, fraktal, dan permukaan topologi di browser.',
    'projects.ai.title':       'Pengenalan Pola ML',
    'projects.ai.desc':        'Pipeline machine learning untuk pengenalan pola dalam dataset matematika menggunakan jaringan saraf dan pemodelan statistik.',
    'projects.data.title':     'Pipeline Data Statistik',
    'projects.data.desc':      'Pipeline data end-to-end untuk membersihkan, menganalisis, dan memvisualisasikan dataset besar dengan pembuatan laporan otomatis.',
    'projects.security.title': 'Toolkit Kriptografi',
    'projects.security.desc':  'Toolkit penelitian untuk mengimplementasikan dan menganalisis algoritma kriptografi klasik dan modern dengan tolok ukur kinerja.',

    'edu.eyebrow':  'Perjalanan Akademik',
    'edu.title':    'Pendidikan',
    'edu.program':  'S.Si. Ilmu Matematika',
    'edu.present':  'Sekarang',
    'edu.badge':    'Semester 4',
    'edu.desc':     'Korea Advanced Institute of Science and Technology (KAIST) — salah satu universitas STEM paling bergengsi di Asia, berlokasi di Daejeon, Korea Selatan. Berspesialisasi dalam matematika murni dan terapan dengan mata kuliah kalkulus, aljabar, probabilitas, dan matematika komputasional.',

    'stats.eyebrow':  'Dalam Angka',
    'stats.title':    'Statistik',
    'stats.kaist':    'Bergabung KAIST',
    'stats.semester': 'Semester Sekarang',
    'stats.origin':   'Asal · Indonesia',
    'stats.location': 'Lokasi · Korea Selatan',
    'stats.langs':    'Bahasa Pemrograman',
    'stats.projects': 'Proyek Dibuat',
    'stats.collabs':  'Kolaborasi',
    'stats.interests':'Minat',

    'testi.eyebrow': 'Kata Para Profesor',
    'testi.title':   'Testimoni',
    'testi.kim':     '"Morph menunjukkan keterampilan analitis yang luar biasa dan kreativitas dalam pemodelan matematika."',
    'testi.lee':     '"Dedikasinya dalam penelitian dan pemecahan masalah membedakannya dari rekan-rekannya."',
    'testi.park':    '"Morph menggabungkan keahlian teknis dengan pemikiran inovatif, menjadikannya kontributor berharga dalam setiap proyek."',
    'testi.choi':    '"Kemampuan Morph menghubungkan matematika dengan inovasi digital sungguh luar biasa."',

    'contact.eyebrow': 'Hubungi Saya',
    'contact.title':   'Kontak',
    'contact.sub':     'Terbuka untuk kolaborasi penelitian, proyek, dan percakapan tentang matematika, teknologi, dan inovasi.',
    'contact.email':   'Surel',

    'footer.rights': 'Semua hak dilindungi.',
    'footer.made':   'Dibuat dengan matematika, kode, dan rasa ingin tahu.',
  },

  ko: {
    'nav.about':       '소개',
    'nav.skills':      '기술',
    'nav.collabs':     '협업',
    'nav.projects':    '프로젝트',
    'nav.education':   '교육',
    'nav.stats':       '통계',
    'nav.testimonials':'리뷰',
    'nav.contact':     '연락',

    'hero.badge':       '수리과학 · KAIST · 4학기',
    'hero.rolePrefix':  '저는 ',
    'hero.tagline':     '수학, 프로그래밍, 연구, 혁신을 통해\n우아한 디지털 경험을 만들어갑니다.',
    'hero.btnProjects': '프로젝트 보기',
    'hero.btnContact':  '연락하기',
    'hero.stat1':       'KAIST 입학',
    'hero.stat2':       '학기',
    'hero.stat3':       '언어',
    'hero.stat4':       '집중 분야',
    'hero.scroll':      '스크롤',

    'about.eyebrow':      '나는 누구인가',
    'about.title':        '소개',
    'about.card1Title':   '호기심으로 움직이는',
    'about.card1Text':    'Morph Junjie Kartawidjaja는 수학, 소프트웨어 개발, 연구, 디지털 혁신에 깊은 관심을 가진 KAIST 수리과학 학생입니다.',
    'about.card2Title':   '글로벌 시각',
    'about.card2Text':    '인도네시아 출신으로, 아시아 최고 명문 STEM 대학 중 하나인 한국에서 공부하며 문화, 언어, 학문을 잇고 있습니다.',
    'about.card3Title':   '연구와 혁신',
    'about.card3Text':    '엄격한 수학적 사고와 실무 엔지니어링을 결합하여 AI, 사이버보안, 데이터 과학 분야의 복잡한 문제를 해결합니다.',
    'about.interestsTitle': '관심사',

    'skills.eyebrow': '내가 아는 것',
    'skills.title':   '기술 및 전문성',
    'skills.prog':    '프로그래밍',
    'skills.math':    '수학',
    'skills.dev':     '개발',
    'skills.tools':   '도구',

    'collabs.eyebrow': '협업 기업',
    'collabs.title':   '협업',
    'collabs.google':  'Google Indonesia',
    'collabs.samsung': 'Samsung Indonesia',

    'projects.eyebrow':        '내가 만든 것',
    'projects.title':          '프로젝트',
    'projects.cat.math':       '수학',
    'projects.cat.research':   '연구',
    'projects.cat.prog':       '프로그래밍',
    'projects.cat.web':        '웹 개발',
    'projects.cat.interactive':'인터랙티브',
    'projects.cat.ai':         '인공지능',
    'projects.cat.data':       '데이터 분석',
    'projects.cat.security':   '사이버보안',
    'projects.math.title':     '고급 수학적 모델링',
    'projects.math.desc':      '미분방정식, 최적화 이론, 수치 해석을 통해 복잡한 시스템을 탐구하여 실제 문제를 해결합니다.',
    'projects.research.title': '계산 연구 플랫폼',
    'projects.research.desc':  '수학 실험을 수행하고, 데이터를 수집하고, 통찰력 있는 시각적 보고서를 생성하는 연구 환경입니다.',
    'projects.prog.title':     '시스템 프로그래밍 엔진',
    'projects.prog.desc':      'C++와 Rust로 작성된 고성능 계산 엔진으로, 저지연 수학 연산을 위해 최적화되었습니다.',
    'projects.web.title':      '학술 포털 UI',
    'projects.web.desc':       '인터랙티브 대시보드, 성적 추적, 일정 시각화 기능을 갖춘 반응형 접근성 우선 학술 포털입니다.',
    'projects.interactive.title': '인터랙티브 수학 시각화 도구',
    'projects.interactive.desc':  '브라우저에서 수학 함수, 프랙탈, 위상 곡면을 탐구하는 실시간 시각화 도구입니다.',
    'projects.ai.title':       'ML 패턴 인식',
    'projects.ai.desc':        '신경망과 통계 모델링을 사용하여 수학 데이터셋에서 패턴을 인식하는 머신러닝 파이프라인입니다.',
    'projects.data.title':     '통계 데이터 파이프라인',
    'projects.data.desc':      '자동 보고서 생성을 포함한 대규모 데이터셋의 정제, 분석, 시각화를 위한 end-to-end 파이프라인입니다.',
    'projects.security.title': '암호화 툴킷',
    'projects.security.desc':  '성능 벤치마크를 포함한 고전 및 현대 암호화 알고리즘을 구현하고 분석하는 연구 툴킷입니다.',

    'edu.eyebrow':  '학업 여정',
    'edu.title':    '교육',
    'edu.program':  '수리과학 학사',
    'edu.present':  '현재',
    'edu.badge':    '4학기',
    'edu.desc':     '한국과학기술원(KAIST) — 대전에 위치한 아시아 최고 명문 STEM 대학 중 하나. 미적분학, 대수학, 확률론, 계산 수학을 아우르는 순수·응용수학을 전공하고 있습니다.',

    'stats.eyebrow':  '숫자로 보기',
    'stats.title':    '통계',
    'stats.kaist':    'KAIST 입학',
    'stats.semester': '현재 학기',
    'stats.origin':   '출신 · 인도네시아',
    'stats.location': '위치 · 한국',
    'stats.langs':    '프로그래밍 언어',
    'stats.projects': '프로젝트',
    'stats.collabs':  '협업',
    'stats.interests':'관심사',

    'testi.eyebrow': '교수님들의 말씀',
    'testi.title':   '추천사',
    'testi.kim':     '"Morph는 수학적 모델링에서 탁월한 분석 능력과 창의성을 보여줍니다."',
    'testi.lee':     '"연구와 문제 해결에 대한 그의 헌신은 동료들과 차별화됩니다."',
    'testi.park':    '"Morph는 기술적 전문성과 혁신적 사고를 결합하여 모든 프로젝트에서 귀중한 기여자가 됩니다."',
    'testi.choi':    '"수학을 디지털 혁신과 연결하는 Morph의 능력은 놀랍습니다."',

    'contact.eyebrow': '연락하기',
    'contact.title':   '연락처',
    'contact.sub':     '수학, 기술, 혁신에 관한 연구 협업, 프로젝트 및 대화를 환영합니다.',
    'contact.email':   '이메일',

    'footer.rights': '모든 권리 보유.',
    'footer.made':   '수학, 코드, 그리고 호기심으로 만들었습니다.',
  },
};

/* ────────────────────────────────────────
   ROTATING ROLES
──────────────────────────────────────── */
const roles = {
  en: ['Mathematics Enthusiast','Python Developer','Research Enthusiast','Problem Solver','Web Developer','AI Innovator','Cybersecurity Explorer'],
  id: ['Pecinta Matematika','Python Developer','Penggemar Penelitian','Pemecah Masalah','Web Developer','Inovator AI','Penjelajah Keamanan Siber'],
  ko: ['수학 애호가','Python 개발자','연구 열성자','문제 해결사','웹 개발자','AI 혁신가','사이버보안 탐험가'],
};

/* ────────────────────────────────────────
   STATE
──────────────────────────────────────── */
let currentLang = 'en';
let roleIndex   = 0;
let roleTimer   = null;

/* ────────────────────────────────────────
   DOM READY
──────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initNavScroll();
  initMobileMenu();
  initScrollReveal();
  initTiltCards();
  initLangSwitcher();
  initRoleRotation();
  initCounters();
  initActiveNav();
});

/* ════════════════════════════════════════
   PARTICLES
════════════════════════════════════════ */
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) { canvas.style.display = 'none'; return; }

  // Reduce particle count on mobile
  const isMobile = window.innerWidth < 768;
  const PARTICLE_COUNT = isMobile ? 40 : 80;

  let W, H, particles, mouse = { x: null, y: null };

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function makeParticle() {
    return {
      x:  Math.random() * W,
      y:  Math.random() * H,
      r:  Math.random() * 1.4 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      a:  Math.random() * 0.3 + 0.05,
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: PARTICLE_COUNT }, makeParticle);
  }

  window.addEventListener('resize', () => { resize(); });
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

  function draw() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach(p => {
      // subtle mouse repulsion
      if (mouse.x !== null) {
        const dx = p.x - mouse.x, dy = p.y - mouse.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 100) {
          p.x += dx / dist * 0.5;
          p.y += dy / dist * 0.5;
        }
      }

      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(139,92,246,${p.a})`;
      ctx.fill();
    });

    // draw soft connecting lines between close particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx*dx + dy*dy);
        if (d < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(139,92,246,${0.07 * (1 - d/110)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  init();
  draw();
}

/* ════════════════════════════════════════
   NAV SCROLL STATE
════════════════════════════════════════ */
function initNavScroll() {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  const onScroll = () => {
    if (window.scrollY > 20) nav.classList.add('scrolled');
    else                      nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ════════════════════════════════════════
   MOBILE MENU
════════════════════════════════════════ */
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const menu   = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
  });

  // close on link click
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
    });
  });
}

/* ════════════════════════════════════════
   SCROLL REVEAL
════════════════════════════════════════ */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal-fade');
  if (!els.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => obs.observe(el));
}

/* ════════════════════════════════════════
   TILT CARDS
════════════════════════════════════════ */
function initTiltCards() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const cards = document.querySelectorAll('.tilt-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect  = card.getBoundingClientRect();
      const cx    = rect.left + rect.width  / 2;
      const cy    = rect.top  + rect.height / 2;
      const dx    = (e.clientX - cx) / (rect.width  / 2);
      const dy    = (e.clientY - cy) / (rect.height / 2);
      const tiltX = dy * -6;
      const tiltY = dx *  6;
      card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.015)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ════════════════════════════════════════
   LANGUAGE SWITCHER
════════════════════════════════════════ */
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;
      currentLang = lang;

      // update button states
      document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.lang === lang);
        b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
      });

      applyTranslations();
      resetRoleRotation();
    });
  });
}

function applyTranslations() {
  const t = translations[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key  = el.dataset.i18n;
    const text = t[key];
    if (text === undefined) return;
    // preserve line breaks with <br>
    el.innerHTML = text.replace(/\n/g, '<br>');
  });
}

/* ════════════════════════════════════════
   ROLE ROTATION (typewriter)
════════════════════════════════════════ */
function initRoleRotation() {
  const el = document.getElementById('rotating-role');
  if (!el) return;
  typeRole(el);
}

function resetRoleRotation() {
  clearTimeout(roleTimer);
  roleIndex = 0;
  const el = document.getElementById('rotating-role');
  if (el) { el.textContent = ''; typeRole(el); }
}

function typeRole(el) {
  const list   = roles[currentLang] || roles.en;
  const target = list[roleIndex % list.length];
  el.textContent = '';
  let i = 0;

  function typeChar() {
    if (i < target.length) {
      el.textContent += target[i++];
      roleTimer = setTimeout(typeChar, 55);
    } else {
      roleTimer = setTimeout(() => eraseRole(el), 2200);
    }
  }

  function eraseRole(el) {
    let text = el.textContent;
    function eraseChar() {
      if (text.length > 0) {
        text = text.slice(0, -1);
        el.textContent = text;
        roleTimer = setTimeout(eraseChar, 30);
      } else {
        roleIndex++;
        roleTimer = setTimeout(() => typeRole(el), 400);
      }
    }
    eraseChar();
  }

  typeChar();
}

/* ════════════════════════════════════════
   COUNTERS
════════════════════════════════════════ */
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => obs.observe(c));
}

function animateCounter(el) {
  const target  = parseInt(el.dataset.target, 10);
  const suffix  = el.dataset.suffix  || '';
  const isYear  = el.dataset.format === 'year';
  const start   = isYear ? target - 24 : 0;
  const duration = 1200;
  const startTime = performance.now();

  function update(now) {
    const elapsed  = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);
    const current  = Math.round(start + (target - start) * eased);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

/* ════════════════════════════════════════
   ACTIVE NAV HIGHLIGHT
════════════════════════════════════════ */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        navLinks.forEach(a => {
          const href = a.getAttribute('href');
          a.classList.toggle('active', href === `#${id}`);
        });
      }
    });
  }, { threshold: 0.35, rootMargin: '-60px 0px -40% 0px' });

  sections.forEach(s => obs.observe(s));
}

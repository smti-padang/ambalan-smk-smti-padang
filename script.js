/* Hubungi saya jika web nya error WA 083169616849/ IG:@fajribsg (Fajri DA22) */

/* ============================================================
   APPLY CONFIG → mengisi atribut data-cfg dari window.SITE_CONFIG
   ============================================================ */
function getConfigValue(path) {
  if (!window.SITE_CONFIG) return undefined;
  return path.split('.').reduce((acc, k) => (acc == null ? acc : acc[k]), window.SITE_CONFIG);
}

function applyConfigToHTML() {
  if (!window.SITE_CONFIG) return;

  // text content: <el data-cfg="identity.title">
  document.querySelectorAll('[data-cfg]').forEach(el => {
    const v = getConfigValue(el.getAttribute('data-cfg'));
    if (v != null) el.textContent = v;
  });

  // src attribute: <img data-cfg-src="logo.path">
  document.querySelectorAll('[data-cfg-src]').forEach(el => {
    const v = getConfigValue(el.getAttribute('data-cfg-src'));
    if (v != null) el.setAttribute('src', v);
  });

  // alt attribute
  document.querySelectorAll('[data-cfg-alt]').forEach(el => {
    const v = getConfigValue(el.getAttribute('data-cfg-alt'));
    if (v != null) el.setAttribute('alt', v);
  });

  // href attribute (umum)
  document.querySelectorAll('[data-cfg-href]').forEach(el => {
    const v = getConfigValue(el.getAttribute('data-cfg-href'));
    if (v != null) el.setAttribute('href', v);
  });

  // href mailto
  document.querySelectorAll('[data-cfg-href-mailto]').forEach(el => {
    const v = getConfigValue(el.getAttribute('data-cfg-href-mailto'));
    if (v != null) el.setAttribute('href', 'mailto:' + v);
  });

  // page <title>
  const t = getConfigValue('identity.pageTitle');
  if (t) document.title = t;
}

/* ============================================================
   RENDER BERITA dari SITE_CONFIG.beritaMain & beritaList
   ============================================================ */
function renderBeritaFromConfig() {
  const cfg = window.SITE_CONFIG;
  if (!cfg) return;

  // Berita utama
  const main = cfg.beritaMain;
  const mainWrap = document.getElementById('beritaMain');
  if (main && mainWrap) {
    mainWrap.innerHTML = `
      <div class="berita-img-wrap">
        <img src="${main.image}" alt="${main.alt || main.title || ''}" class="berita-img-foto" loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="berita-img-fallback">${main.fallbackEmoji || '📰'}</div>
      </div>
      <div class="berita-body">
        <div class="berita-meta">
          <span class="berita-tag">${main.tag || 'Utama'}</span>
          <span class="berita-date">${main.date || ''}</span>
        </div>
        <h3>${main.title || ''}</h3>
        <p>${main.desc || ''}</p>
      </div>
    `;
  }

  // Berita list samping
  const listWrap = document.getElementById('beritaList');
  if (listWrap && Array.isArray(cfg.beritaList)) {
    listWrap.innerHTML = cfg.beritaList.map(b => `
      <div class="berita-item">
        <div class="berita-item-date">
          <div class="bid-num">${b.day || ''}</div>
          <div class="bid-mon">${b.month || ''}</div>
        </div>
        <div class="berita-item-text">
          <h4>${b.title || ''}</h4>
          <p>${b.desc || ''}</p>
        </div>
      </div>
    `).join('');
  }
}

/* ============================================================
   RENDER GALERI dari SITE_CONFIG.galeri
   ============================================================ */
function renderGaleriFromConfig() {
  const cfg = window.SITE_CONFIG;
  const grid = document.getElementById('galeriGrid');
  if (!cfg || !grid || !Array.isArray(cfg.galeri)) return;

  grid.innerHTML = cfg.galeri.map(g => `
    <div class="galeri-item"
         data-title="${(g.title || '').replace(/"/g, '&quot;')}"
         data-kategori="${g.kategori || ''}"
         data-date="${g.date || ''}"
         data-desc="${(g.desc || '').replace(/"/g, '&quot;')}"
         onclick="openLightbox(this)">
      <img src="${g.image}" alt="${(g.title || '').replace(/"/g, '&quot;')}" class="galeri-thumb" loading="lazy">
      <div class="galeri-overlay">
        <span class="galeri-label">${g.label || g.title || ''}</span>
        <span class="galeri-date-badge">${g.badge || ''}</span>
      </div>
    </div>
  `).join('');
}

/* ── SCROLL TO SECTION ── */
function getScrollOffset() {
  const navbar = document.getElementById('navbar');
  const pageTabs = document.getElementById('pageTabs');
  const navH = navbar ? navbar.offsetHeight : 0;
  const tabH = pageTabs ? pageTabs.offsetHeight : 0;
  return navH + tabH + 8;
}

function goTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = getScrollOffset();
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

/* ── ACTIVE TAB & NAV LINK ON SCROLL ── */
const sections = ['hero','tentang','visi-misi','tugas','pengurus','proker','berita','galeri','pengaduan','kontak'];
const sectionToTabIndex = {'hero':0,'tentang':1,'visi-misi':2,'tugas':3,'pengurus':4,'proker':5,'berita':6,'galeri':7,'pengaduan':8,'kontak':9};
const sectionToNavIndex = {'hero':0,'tentang':1,'visi-misi':2,'pengurus':3,'proker':4,'berita':5,'galeri':6,'pengaduan':7,'kontak':8};

function updateActiveStates() {
  const offset = getScrollOffset() + 10;
  let current = 'hero';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.getBoundingClientRect().top + window.scrollY - offset) {
      current = id;
    }
  });

  // Update page tabs
  const tabs = document.querySelectorAll('.ptab');
  tabs.forEach((t, i) => t.classList.toggle('active', i === (sectionToTabIndex[current] ?? 0)));

  // Update navbar links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((a, i) => {
    a.classList.toggle('active', i === (sectionToNavIndex[current] ?? 0));
  });
}

window.addEventListener('scroll', updateActiveStates, { passive: true });

/* ========== SCROLL REVEAL ANIMATION ========== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    '#hero, #tentang, #visi-misi, #tugas, #pengurus, #proker, #berita, #galeri, #pengaduan, #kontak, ' +
    '.hero-content, .tentang-text, .visi-card, .misi-card, .tugas-card, .pengurus-card, .proker-card, .berita-card, .galeri-item'
  );
  revealElements.forEach(el => {
    if (!el.classList.contains('reveal') && !el.classList.contains('reveal-item')) {
      if (el.matches('section, .hero-content, .tentang-text')) {
        el.classList.add('reveal');
      } else {
        el.classList.add('reveal-item');
      }
    }
  });

  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal, .reveal-item').forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal, .reveal-item').forEach(el => observer.observe(el));

  // Fallback: jika observer gagal, tampilkan setelah 2.5s
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.revealed), .reveal-item:not(.revealed)').forEach(el => {
      el.classList.add('revealed');
    });
  }, 2500);
}

/* ── HAMBURGER MENU ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

function closeMobileMenu() {
  if (hamburger) {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
  if (mobileMenu) {
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
  }
}

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    mobileMenu.classList.toggle('open', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
  });
}

document.addEventListener('click', (e) => {
  if (mobileMenu && mobileMenu.classList.contains('open')) {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      closeMobileMenu();
    }
  }
});

/* ── GALERI PAGINATION & FILTER ── */
const ITEMS_PER_PAGE = 6;
let galeriCurrentPage = 1;
let galeriCurrentFilter = 'semua';
let galeriFilteredItems = [];
let lightboxCurrentIndex = 0;

function getAllGaleriItems() {
  return Array.from(document.querySelectorAll('#galeriGrid .galeri-item'));
}

function filterGaleri(kategori, btn) {
  galeriCurrentFilter = kategori;
  galeriCurrentPage = 1;
  document.querySelectorAll('.gfilter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderGaleri();
}

function renderGaleri() {
  const allItems = getAllGaleriItems();

  galeriFilteredItems = galeriCurrentFilter === 'semua'
    ? allItems
    : allItems.filter(item => item.dataset.kategori === galeriCurrentFilter);

  const totalItems = galeriFilteredItems.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1;
  galeriCurrentPage = Math.min(galeriCurrentPage, totalPages);

  const start = (galeriCurrentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const pageItems = galeriFilteredItems.slice(start, end);

  allItems.forEach(item => {
    item.style.display = 'none';
    item.classList.remove('galeri-visible');
  });
  pageItems.forEach((item, i) => {
    item.style.display = '';
    setTimeout(() => item.classList.add('galeri-visible'), i * 60);
  });

  const pageText = document.getElementById('galeriPageText');
  const countText = document.getElementById('galeriCountText');
  if (pageText) pageText.textContent = `Halaman ${galeriCurrentPage} dari ${totalPages}`;
  if (countText) countText.textContent = `${totalItems} foto`;

  const numbersEl = document.getElementById('gpagNumbers');
  if (numbersEl) {
    numbersEl.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement('button');
      btn.className = 'gpag-num' + (i === galeriCurrentPage ? ' active' : '');
      btn.textContent = i;
      btn.onclick = () => { galeriCurrentPage = i; renderGaleri(); };
      numbersEl.appendChild(btn);
    }
  }

  const prevBtn = document.getElementById('gpagPrev');
  const nextBtn = document.getElementById('gpagNext');
  if (prevBtn) prevBtn.disabled = galeriCurrentPage <= 1;
  if (nextBtn) nextBtn.disabled = galeriCurrentPage >= totalPages;

  const pagEl = document.getElementById('galeriPagination');
  if (pagEl) pagEl.style.display = totalPages <= 1 ? 'none' : 'flex';
}

function changeGaleriPage(dir) {
  galeriCurrentPage += dir;
  renderGaleri();
  const galeriEl = document.getElementById('galeri');
  if (galeriEl) {
    const offset = (document.getElementById('navbar')?.offsetHeight || 0) + (document.getElementById('pageTabs')?.offsetHeight || 0) + 8;
    window.scrollTo({ top: galeriEl.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  }
}

/* ── LIGHTBOX ── */
function openLightbox(item) {
  const img = item.querySelector('.galeri-thumb');
  const title = item.getAttribute('data-title');
  const desc = item.getAttribute('data-desc') || '';
  const date = item.getAttribute('data-date') || '';
  if (!img) return;

  const visibleItems = galeriFilteredItems.length > 0
    ? galeriFilteredItems
    : getAllGaleriItems();
  lightboxCurrentIndex = visibleItems.indexOf(item);

  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  const lbTitle = document.getElementById('lightboxTitle');
  const lbDesc = document.getElementById('lightboxDesc');
  const lbDate = document.getElementById('lightboxDate');
  const lbCounter = document.getElementById('lightboxCounter');

  if (!lb || !lbImg) return;
  lbImg.src = img.src;
  lbImg.alt = img.alt;
  if (lbTitle) lbTitle.textContent = title || '';
  if (lbDesc) lbDesc.textContent = desc;
  if (lbDate) lbDate.textContent = date ? '📅 ' + date : '';
  if (lbCounter) lbCounter.textContent = `${lightboxCurrentIndex + 1} / ${visibleItems.length}`;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function lightboxNav(dir) {
  const visibleItems = galeriFilteredItems.length > 0
    ? galeriFilteredItems
    : getAllGaleriItems();
  if (!visibleItems.length) return;
  lightboxCurrentIndex = (lightboxCurrentIndex + dir + visibleItems.length) % visibleItems.length;
  const item = visibleItems[lightboxCurrentIndex];
  const img = item?.querySelector('.galeri-thumb');
  if (!img) return;

  const lbImg = document.getElementById('lightboxImg');
  const lbTitle = document.getElementById('lightboxTitle');
  const lbDesc = document.getElementById('lightboxDesc');
  const lbDate = document.getElementById('lightboxDate');
  const lbCounter = document.getElementById('lightboxCounter');

  lbImg.src = img.src;
  lbImg.alt = img.alt;
  if (lbTitle) lbTitle.textContent = item.getAttribute('data-title') || '';
  if (lbDesc) lbDesc.textContent = item.getAttribute('data-desc') || '';
  const date = item.getAttribute('data-date') || '';
  if (lbDate) lbDate.textContent = date ? '📅 ' + date : '';
  if (lbCounter) lbCounter.textContent = `${lightboxCurrentIndex + 1} / ${visibleItems.length}`;
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') lightboxNav(1);
  if (e.key === 'ArrowLeft') lightboxNav(-1);
});

/* ── FORM VALIDATION ── */
function submitForm() {
  const nama = document.getElementById('inputNama');
  const tingkatan = document.getElementById('inputTingkatan');
  const jenis = document.getElementById('inputJenis');
  const pesan = document.getElementById('inputPesan');
  if (!nama || !tingkatan || !jenis || !pesan) return;

  let valid = true;
  function setError(input, errId, msg) {
    const err = document.getElementById(errId);
    if (msg) {
      input.classList.add('error');
      if (err) err.textContent = msg;
      valid = false;
    } else {
      input.classList.remove('error');
      if (err) err.textContent = '';
    }
  }

  setError(nama, 'errNama', nama.value.trim() === '' ? 'Nama tidak boleh kosong.' : '');
  setError(tingkatan, 'errTingkatan', tingkatan.value === '' ? 'Pilih tingkatan Anda.' : '');
  setError(jenis, 'errJenis', jenis.value === '' ? 'Pilih jenis pesan.' : '');
  setError(pesan, 'errPesan', pesan.value.trim().length < 10 ? 'Pesan minimal 10 karakter.' : '');

  if (!valid) return;

  const successEl = document.getElementById('formSuccess');
  if (successEl) successEl.classList.add('show');

  nama.value = ''; tingkatan.value = ''; jenis.value = ''; pesan.value = '';
  ['errNama','errTingkatan','errJenis','errPesan'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = '';
  });
  [nama, tingkatan, jenis, pesan].forEach(el => el.classList.remove('error'));

  setTimeout(() => { if (successEl) successEl.classList.remove('show'); }, 5000);
}

['inputNama','inputTingkatan','inputJenis','inputPesan'].forEach((id, idx) => {
  const errIds = ['errNama','errTingkatan','errJenis','errPesan'];
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('input', () => {
      el.classList.remove('error');
      const err = document.getElementById(errIds[idx]);
      if (err) err.textContent = '';
    });
    el.addEventListener('change', () => {
      el.classList.remove('error');
      const err = document.getElementById(errIds[idx]);
      if (err) err.textContent = '';
    });
  }
});

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  applyConfigToHTML();
  renderBeritaFromConfig();
  renderGaleriFromConfig();
  renderGaleri();
  initScrollReveal();

  const yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

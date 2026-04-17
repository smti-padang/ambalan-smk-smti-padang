/* Hubungi saya jika web nya error WA 083169616849/ IG:@fajribsg (Fajri DA22) */

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

// Map from section id to navbar nav-link index
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

// Close mobile menu on outside click
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

  // Update active filter button
  document.querySelectorAll('.gfilter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  renderGaleri();
}

function renderGaleri() {
  const allItems = getAllGaleriItems();

  // Filter
  galeriFilteredItems = galeriCurrentFilter === 'semua'
    ? allItems
    : allItems.filter(item => item.dataset.kategori === galeriCurrentFilter);

  const totalItems = galeriFilteredItems.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1;
  galeriCurrentPage = Math.min(galeriCurrentPage, totalPages);

  const start = (galeriCurrentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const pageItems = galeriFilteredItems.slice(start, end);

  // Show/hide items
  allItems.forEach(item => {
    item.style.display = 'none';
    item.classList.remove('galeri-visible');
  });
  pageItems.forEach((item, i) => {
    item.style.display = '';
    setTimeout(() => item.classList.add('galeri-visible'), i * 60);
  });

  // Update info
  const pageText = document.getElementById('galeriPageText');
  const countText = document.getElementById('galeriCountText');
  if (pageText) pageText.textContent = `Halaman ${galeriCurrentPage} dari ${totalPages}`;
  if (countText) countText.textContent = `${totalItems} foto`;

  // Render pagination numbers
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

  // Update prev/next buttons
  const prevBtn = document.getElementById('gpagPrev');
  const nextBtn = document.getElementById('gpagNext');
  if (prevBtn) prevBtn.disabled = galeriCurrentPage <= 1;
  if (nextBtn) nextBtn.disabled = galeriCurrentPage >= totalPages;

  // Hide pagination if only 1 page
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

// Initialize galeri on load
document.addEventListener('DOMContentLoaded', () => {
  renderGaleri();
  // Set copyright year
  const yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/* ── LIGHTBOX ── */
function openLightbox(item) {
  const img = item.querySelector('.galeri-thumb');
  const title = item.getAttribute('data-title');
  const desc = item.getAttribute('data-desc') || '';
  const date = item.getAttribute('data-date') || '';
  if (!img) return;

  // Find index in filtered/visible items
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

  lbImg.src = img.src;
  lbImg.alt = img.alt;
  if (lbTitle) lbTitle.textContent = title || '';
  if (lbDesc) lbDesc.textContent = desc;
  if (lbDate && date) lbDate.textContent = '📅 ' + date;
  if (lbCounter) lbCounter.textContent = `${lightboxCurrentIndex + 1} / ${visibleItems.length}`;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function lightboxNav(dir) {
  const visibleItems = galeriFilteredItems.length > 0
    ? galeriFilteredItems
    : getAllGaleriItems();
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
  lb.classList.remove('open');
  document.body.style.overflow = '';
}

// Close lightbox on Escape key, arrow keys for navigation
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

  // Validate
  setError(nama, 'errNama', nama.value.trim() === '' ? 'Nama tidak boleh kosong.' : '');
  setError(tingkatan, 'errTingkatan', tingkatan.value === '' ? 'Pilih tingkatan Anda.' : '');
  setError(jenis, 'errJenis', jenis.value === '' ? 'Pilih jenis pesan.' : '');
  setError(pesan, 'errPesan', pesan.value.trim().length < 10 ? 'Pesan minimal 10 karakter.' : '');

  if (!valid) return;

  // Show success
  const successEl = document.getElementById('formSuccess');
  if (successEl) successEl.classList.add('show');

  // Reset form
  nama.value = '';
  tingkatan.value = '';
  jenis.value = '';
  pesan.value = '';
  ['errNama','errTingkatan','errJenis','errPesan'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = '';
  });
  [nama, tingkatan, jenis, pesan].forEach(el => el.classList.remove('error'));

  // Hide success after 5 seconds
  setTimeout(() => {
    if (successEl) successEl.classList.remove('show');
  }, 5000);
}

// Clear error on input
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

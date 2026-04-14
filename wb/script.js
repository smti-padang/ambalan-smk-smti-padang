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
const sections = ['hero','tentang','visi-misi','tugas','pengurus','proker','berita','galeri','kontak'];
const sectionToTabIndex = {'hero':0,'tentang':1,'visi-misi':2,'tugas':3,'pengurus':4,'proker':5,'berita':6,'galeri':7,'kontak':8};

// Map from section id to navbar nav-link index (navbar has 8 links excl. CTA)
const sectionToNavIndex = {'hero':0,'tentang':1,'visi-misi':2,'pengurus':3,'proker':4,'berita':5,'galeri':6,'kontak':7};

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

/* ── LIGHTBOX ── */
function openLightbox(item) {
  const img = item.querySelector('.galeri-thumb');
  const title = item.getAttribute('data-title');
  if (!img) return;
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  const lbTitle = document.getElementById('lightboxTitle');
  lbImg.src = img.src;
  lbImg.alt = img.alt;
  if (lbTitle) lbTitle.textContent = title || '';
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('open');
  document.body.style.overflow = '';
}

// Close lightbox on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
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

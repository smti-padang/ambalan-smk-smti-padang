/* ═══════════════════════════════════════════════════════════════════════
   CONFIG.JS - FILE KONFIGURASI WEBSITE AMBALAN PRAMUKA SMK SMTI PADANG
   ═══════════════════════════════════════════════════════════════════════
   
   PANDUAN PENGGUNAAN:
   1. Edit file ini untuk mengubah konten website tanpa menyentuh HTML
   2. Untuk mengganti foto: ubah path di bagian GALERI_ITEMS
   3. Untuk menambah foto: tambahkan object baru di array GALERI_ITEMS
   4. Simpan file, lalu refresh browser untuk melihat perubahan
   
   CATATAN PENTING:
   - Pastikan path foto sesuai dengan lokasi file di folder assets/images/
   - Format tanggal bebas, misalnya: "April 2026" atau "Apr 2026"
   - Kategori harus sama dengan yang ada di filter (pelantikan, perkemahan, dll)
   
   Hubungi WA 083169616849 / IG:@fajribsg (Fajri DA22) jika ada error
   ═══════════════════════════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════════════════════════
// KONFIGURASI UMUM WEBSITE
// ═══════════════════════════════════════════════════════════════════════

const CONFIG = {
  // Informasi Sekolah & Ambalan
  SEKOLAH: {
    nama: "SMK SMTI Padang",
    kementerian: "Kementerian Perindustrian RI",
    ambalan_putra: "Ir.Juanda",
    ambalan_putri: "Rohana Kudus"
  },

  // Kontak & Media Sosial
  KONTAK: {
    instagram: "https://instagram.com/dewanambalan_smti",
    instagram_username: "@dewanambalan_smti",
    email: "ambalan@smksmtipadang.sch.id",
    telepon: "0751-123456"
  },

  // Logo & Branding
  LOGO: {
    path: "assets/images/logo/logo-pramuka.png",
    alt: "Logo Ambalan Pramuka Penegak SMK SMTI Padang"
  },

  // Hero Section
  HERO: {
    badge: "Gerakan Pramuka Penegak",
    judul_utama: "SMK SMTI Padang",
    judul_sub: "Ambalan Ir.Juanda & Rohana Kudus",
    deskripsi: "Membina karakter, kemandirian, dan jiwa kepemimpinan melalui kegiatan kepramukaan yang terstruktur, bermakna, dan penuh semangat.",
    periode_aktif: "2026",
    jumlah_anggota: "60+",
    label_anggota: "Anggota Aktif",
    jumlah_kegiatan: "15+",
    label_kegiatan: "Program per Tahun"
  }
};

// ═══════════════════════════════════════════════════════════════════════
// KONFIGURASI GALERI FOTO
// ═══════════════════════════════════════════════════════════════════════

const GALERI_ITEMS = [
  // ─────────────────────────────────────────────────────────────────────
  // KATEGORI: PELANTIKAN
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 1,
    judul: "Pelantikan Bantara Baru 2025",
    path: "assets/images/galeri/pelantikan/pelantikan-bantara-baru.png",
    kategori: "pelantikan",
    tanggal: "November 2025",
    deskripsi: "Pelantikan resmi 23 anggota baru sebagai Penegak Bantara Ambalan Ir.Juanda & Rohana Kudus.",
    label_singkat: "Pelantikan Bantara Baru",
    badge_tanggal: "Nov 2025"
  },
  {
    id: 2,
    judul: "Pelantikan Dewan Ambalan 2026–2027",
    path: "assets/images/galeri/pelantikan/pelantikan-dewan-2026-2027.png",
    kategori: "pelantikan",
    tanggal: "April 2026",
    deskripsi: "Pelantikan Dewan Ambalan Ir.Juanda & Rohana Kudus periode 2026–2027 oleh Kepala SMK SMTI Padang.",
    label_singkat: "Pelantikan Dewan",
    badge_tanggal: "Apr 2026"
  },
  {
    id: 3,
    judul: "Pelantikan & Pengukuhan Kacu",
    path: "assets/images/galeri/pelantikan/pelantikan-kacu.png",
    kategori: "pelantikan",
    tanggal: "Agustus 2025",
    deskripsi: "Hiking dan pelantikan kacu seluruh siswa SMK SMTI Padang sebagai tamu ambalan Ir.Juanda & Rohana Kudus.",
    label_singkat: "Pelantikan Kacu",
    badge_tanggal: "Agu 2025"
  },
  {
    id: 4,
    judul: "Pelantikan Laksana Putri 2025",
    path: "assets/images/galeri/pelantikan/pelantikan-laksana-cewek-2025.png",
    kategori: "pelantikan",
    tanggal: "2025",
    deskripsi: "Pelantikan resmi anggota putri yang mencapai tingkat Penegak Laksana.",
    label_singkat: "Pelantikan Laksana Putri",
    badge_tanggal: "Mei 2025"
  },
  {
    id: 5,
    judul: "Pengambilan Laksana 2025",
    path: "assets/images/galeri/pelantikan/pengambilan-laksana-2025.png",
    kategori: "pelantikan",
    tanggal: "2025",
    deskripsi: "Proses pengambilan tingkat Penegak Laksana oleh anggota Ambalan SMK SMTI Padang.",
    label_singkat: "Pengambilan Laksana",
    badge_tanggal: "Mei 2025"
  },
  {
    id: 6,
    judul: "Pelantikan Dewan Periode 2025–2026",
    path: "assets/images/galeri/pelantikan/penlantikan-dewan-periode-2025-2026.png",
    kategori: "pelantikan",
    tanggal: "2025",
    deskripsi: "Pelantikan Dewan Ambalan Ir.Juanda & Rohana Kudus periode 2025–2026.",
    label_singkat: "Pelantikan Dewan",
    badge_tanggal: "2025"
  },

  // ─────────────────────────────────────────────────────────────────────
  // KATEGORI: PERKEMAHAN
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 7,
    judul: "Perkemahan Tahunan",
    path: "assets/images/galeri/perkemahan/perkemahan-tahunan.png",
    kategori: "perkemahan",
    tanggal: "2025",
    deskripsi: "Perkemahan bersama seluruh anggota untuk melatih kemandirian, kerjasama, dan ketahanan di alam terbuka.",
    label_singkat: "Perkemahan Tahunan",
    badge_tanggal: "Mei 2025"
  },
  {
    id: 8,
    judul: "Hiking 2025 (Sesi 1)",
    path: "assets/images/galeri/perkemahan/hiking-v1-2025.png",
    kategori: "perkemahan",
    tanggal: "Agustus 2025",
    deskripsi: "Kegiatan hiking bersama anggota Ambalan sebagai bagian dari rangkaian pelantikan kacu.",
    label_singkat: "Hiking (Sesi 1)",
    badge_tanggal: "Agu 2025"
  },
  {
    id: 9,
    judul: "Hiking 2025 (Sesi 2)",
    path: "assets/images/galeri/perkemahan/hiking-v2-2025.png",
    kategori: "perkemahan",
    tanggal: "Agustus 2025",
    deskripsi: "Dokumentasi lanjutan kegiatan hiking Ambalan SMK SMTI Padang 2025.",
    label_singkat: "Hiking (Sesi 2)",
    badge_tanggal: "Agu 2025"
  },
  {
    id: 10,
    judul: "Musyawarah Ambalan 2025",
    path: "assets/images/galeri/perkemahan/musbalan-2025.png",
    kategori: "perkemahan",
    tanggal: "Februari 2025",
    deskripsi: "Musyawarah Ambalan Gudep 03-129/03-130 sekaligus pembentukan dewan ambalan baru.",
    label_singkat: "Musyawarah Ambalan",
    badge_tanggal: "Feb 2025"
  },
  {
    id: 11,
    judul: "Persami Korps Kadet Republik Indonesia",
    path: "assets/images/galeri/perkemahan/persami-kkri.png",
    kategori: "perkemahan",
    tanggal: "2025",
    deskripsi: "Perkemahan Sabtu–Minggu bersama Korps Kadet Republik Indonesia.",
    label_singkat: "Persami Korps Kadet RI",
    badge_tanggal: "Nov 2025"
  },

  // ─────────────────────────────────────────────────────────────────────
  // KATEGORI: UPACARA
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 12,
    judul: "Petugas Upacara Bendera",
    path: "assets/images/galeri/upacara/petugas-upacara-bendera.png",
    kategori: "upacara",
    tanggal: "2025",
    deskripsi: "Ambalan SMK SMTI Padang bertugas sebagai petugas upacara bendera sekolah.",
    label_singkat: "Petugas Upacara Bendera",
    badge_tanggal: "Okt 2025"
  },
  {
    id: 13,
    judul: "Upacara Pembukaan Raimuna Daerah",
    path: "assets/images/galeri/upacara/upacara-pembukaan-raimuna-daerah.png",
    kategori: "upacara",
    tanggal: "2025",
    deskripsi: "Upacara resmi pembukaan Raimuna Daerah yang diikuti oleh Ambalan SMK SMTI Padang.",
    label_singkat: "Raimuna Daerah",
    badge_tanggal: "Nov 2025"
  },
  {
    id: 14,
    judul: "Upacara Sumpah Pemuda ke-97",
    path: "assets/images/galeri/upacara/upacara-sumpah-pemuda-97.png",
    kategori: "upacara",
    tanggal: "Oktober 2024",
    deskripsi: "Ambalan SMK SMTI Padang berpartisipasi dalam upacara peringatan Hari Sumpah Pemuda ke-97.",
    label_singkat: "Sumpah Pemuda ke-97",
    badge_tanggal: "Okt 2024"
  },

  // ─────────────────────────────────────────────────────────────────────
  // KATEGORI: LATIHAN
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 15,
    judul: "Latihan Rutin Kepramukaan",
    path: "assets/images/galeri/latihan/latihan-rutin-kepramukaan.png",
    kategori: "latihan",
    tanggal: "2025",
    deskripsi: "Latihan mingguan mencakup keterampilan tali temali, morse, semaphore, PBB, dan navigasi alam.",
    label_singkat: "Latihan Rutin Kepramukaan",
    badge_tanggal: "Jun 2025"
  },

  // ─────────────────────────────────────────────────────────────────────
  // KATEGORI: BAKTI SOSIAL
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 16,
    judul: "Bakti Sosial Masyarakat",
    path: "assets/images/galeri/bakti-sosial/bakti-sosial-masyrakat.png",
    kategori: "sosial",
    tanggal: "November 2025",
    deskripsi: "Kegiatan kerja bakti sosial di lingkungan masyarakat Kelurahan Nanggalo.",
    label_singkat: "Bakti Sosial Masyarakat",
    badge_tanggal: "Nov 2025"
  },

  // ─────────────────────────────────────────────────────────────────────
  // KATEGORI: BUKA BERSAMA
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 17,
    judul: "Buka Bersama 3 Angkatan 2025",
    path: "assets/images/galeri/bukber/buka-bersama-3-anggkatan-2025.png",
    kategori: "bukber",
    tanggal: "Ramadan 2025",
    deskripsi: "Kegiatan buka bersama yang dihadiri oleh 3 angkatan Ambalan SMK SMTI Padang sebagai ajang silaturahmi.",
    label_singkat: "Bukber 3 Angkatan",
    badge_tanggal: "Ramadan 2025"
  },
  {
    id: 18,
    judul: "Buka Bersama 3 Angkatan 2026",
    path: "assets/images/galeri/bukber/buka-bersama-3-anggkatan-2026.png",
    kategori: "bukber",
    tanggal: "Ramadan 2026",
    deskripsi: "Kegiatan buka bersama tahunan yang mempertemukan alumni dan anggota aktif Ambalan SMK SMTI Padang.",
    label_singkat: "Bukber 3 Angkatan",
    badge_tanggal: "Ramadan 2026"
  },
  /* ═══════════════════════════════════════════════════════════════════
     CARA MENAMBAH FOTO BARU:
     ───────────────────────────────────────────────────────────────────
     
     Copy template di bawah ini, paste setelah item terakhir (jangan lupa koma!):
     
     ,{
       id: 19,  // Naikkan nomor ID
       judul: "Judul Foto Anda",
       path: "assets/images/galeri/KATEGORI/nama-file.png",
       kategori: "pelantikan",  // pilih: pelantikan, perkemahan, latihan, sosial, upacara, bukber
       tanggal: "Januari 2026",
       deskripsi: "Deskripsi lengkap foto Anda di sini.",
       label_singkat: "Label Singkat",
       badge_tanggal: "Jan 2026"
     }
     
     KATEGORI YANG TERSEDIA:
     - pelantikan
     - perkemahan
     - latihan
     - sosial
     - upacara
     - bukber
     
     ═══════════════════════════════════════════════════════════════════ */
];

// ═══════════════════════════════════════════════════════════════════════
// KONFIGURASI BERITA
// ═══════════════════════════════════════════════════════════════════════

const BERITA_ITEMS = [
  {
    id: 1,
    judul: "Pelantikan Dewan Ambalan 2026-2027",
    gambar: "assets/images/berita/pelantikan-dewan-2026-2027.png",
    tanggal: "19 April 2026",
    kategori: "Pelantikan",
    isi: "Pelantikan Dewan Ambalan Ir.Juanda & Rohana Kudus periode 2026–2027 telah dilaksanakan dengan khidmat oleh Kepala SMK SMTI Padang."
  }
  // Tambahkan berita lain di sini jika diperlukan
];

// ═══════════════════════════════════════════════════════════════════════
// JANGAN EDIT BAGIAN DI BAWAH INI (FUNGSI RENDERING OTOMATIS)
// ═══════════════════════════════════════════════════════════════════════

// Fungsi untuk me-render galeri dari config
function renderGaleriFromConfig() {
  const galeriGrid = document.getElementById('galeriGrid');
  if (!galeriGrid) return;

  galeriGrid.innerHTML = '';

  GALERI_ITEMS.forEach(item => {
    const galeriItem = document.createElement('div');
    galeriItem.className = 'galeri-item';
    galeriItem.setAttribute('data-title', item.judul);
    galeriItem.setAttribute('data-kategori', item.kategori);
    galeriItem.setAttribute('data-date', item.tanggal);
    galeriItem.setAttribute('data-desc', item.deskripsi);
    galeriItem.setAttribute('onclick', 'openLightbox(this)');

    galeriItem.innerHTML = `
      <img src="${item.path}" alt="${item.judul}" class="galeri-thumb" loading="lazy">
      <div class="galeri-overlay">
        <span class="galeri-label">${item.label_singkat}</span>
        <span class="galeri-date-badge">${item.badge_tanggal}</span>
      </div>
    `;

    galeriGrid.appendChild(galeriItem);
  });

  // Re-initialize galeri pagination setelah render
  if (typeof renderGaleri === 'function') {
    renderGaleri();
  }
}

// Inisialisasi saat halaman dimuat
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderGaleriFromConfig);
} else {
  renderGaleriFromConfig();
}

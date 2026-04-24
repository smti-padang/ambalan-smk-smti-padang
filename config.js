/* ============================================================
   KONFIGURASI WEBSITE AMBALAN — edit di sini saja
   ----
   Cara menambah / mengganti foto:
   1. Letakkan file foto di folder yang sesuai (lihat path di bawah).
   2. Tambahkan/ubah objek di array GALERI_ITEMS atau BERITA_*.
   3. Refresh browser — website otomatis update tanpa edit index.html.
   ============================================================ */

window.SITE_CONFIG = {
  /* ---------- IDENTITAS SEKOLAH / AMBALAN ---------- */
  identity: {
    schoolShort: "SMK SMTI Padang",
    schoolFull:  "SMK SMTI Padang — Kementerian Perindustrian RI",
    ambalan:     "Ambalan Ir.Juanda & Rohana Kudus",
    gudep:       "Gugus depan 03-129 / 03-130",
    title:       "Ambalan Ir.Juanda & Rohana Kudus SMK SMTI Padang",
    pageTitle:   "Ambalan Ir.Juanda & Rohana Kudus SMK SMTI Padang",
    tagline:     "Pramuka Penegak SMK SMTI Padang",
  },

  /* ---------- LOGO ---------- */
  logo: {
    path: "assets/images/logo/logo-pramuka.png",
    alt:  "Logo Ambalan Pramuka Penegak SMK SMTI Padang",
  },

  /* ---------- SOSIAL MEDIA & KONTAK ---------- */
  contact: {
    address:    "Jl. Ir. H. Juanda No.2, Padang Barat, Kota Padang, Sumatera Barat 25129",
    addressShort1: "Jl. Ir. H. Juanda No.2",
    addressShort2: "Padang, Sumatera Barat",
    school:     "SMK SMTI Padang — Kementerian Perindustrian RI",
    instagram:  "https://instagram.com/dewanambalan_smti",
    instagramHandle: "@dewanambalan_smti",
    email:      "ambalansmksmtipadang@gmail.com",
    jamAktif:   "Senin – Jumat, 07.30 – 15.30 WIB",
  },

  /* ---------- BERITA UTAMA (kartu besar di kiri) ---------- */
  beritaMain: {
    image: "assets/images/berita/pelantikan-dewan-2026-2027.png",
    alt:   "Pelantikan Dewan Ambalan SMK SMTI Padang Periode 2026/2027",
    tag:   "Utama",
    date:  "11 April 2026",
    title: "Pelantikan Dewan Ambalan SMK SMTI Padang Periode 2026/2027",
    desc:  "Kamis, 11 April 2026 — Pelantikan Dewan Ambalan yang baru resmi dilaksanakan oleh Kepala SMK SMTI Padang. Pradana terpilih, Muhammad Andis Purbaya, siap mengemban amanah memimpin Ambalan periode ini.",
    fallbackEmoji: "🏆",
  },

  /* ---------- BERITA SAMPING (daftar) ---------- */
  beritaList: [
    {
      day:   "10",
      month: "Feb",
      title: "Musyawarah Ambalan Gudep 03-129 / 03-130 Ambalan Ir.Juanda & Rohana Kudus",
      desc:  "Seluruh anggota mengikuti musyawarah ambalan yang diselenggarakan di gedung sekolah sekaligus pembentukan dewan ambalan baru periode 2026/2027.",
    },
    {
      day:   "1-2",
      month: "Nov",
      title: "Bakti Sosial & Lingkungan Masyarakat",
      desc:  "Kegiatan kerja bakti sosial di lingkungan masyarakat Kelurahan Nanggalo.",
    },
    {
      day:   "1-2",
      month: "Nov",
      title: "Pelantikan 23 Penegak Bantara Baru",
      desc:  "23 anggota baru resmi dilantik sebagai Penegak Bantara dalam upacara pelantikan yang hikmat.",
    },
    {
      day:   "30",
      month: "Aug",
      title: "Hiking & Pelantikan kacu seluruh siswa SMK SMTI Padang",
      desc:  "Sabtu, 30 Agustus 2025 — Pelantikan tamu ambalan Ir.Juanda & Rohana Kudus oleh Kepala SMK SMTI Padang selaku kamabigus gugus depan 03-129 / 03-130.",
    },
  ],

  /* ---------- GALERI FOTO ----------
     Cara menambah foto baru:
     1. Taruh file foto di assets/images/galeri/<kategori>/<namafile>.png
     2. Tambah satu objek di array di bawah ini.
     Kategori yang tersedia: pelantikan, perkemahan, latihan, bakti-sosial, upacara, bukber
  */
  galeri: [
    /* ── PELANTIKAN ── */
    {
      title:    "Pelantikan Bantara Baru 2025",
      kategori: "pelantikan",
      date:     "November 2025",
      desc:     "Pelantikan resmi 23 anggota baru sebagai Penegak Bantara Ambalan Ir.Juanda & Rohana Kudus.",
      image:    "assets/images/galeri/pelantikan/pelantikan-bantara-baru.png",
      label:    "Pelantikan Bantara Baru",
      badge:    "Nov 2025",
    },
    {
      title:    "Pelantikan Dewan Ambalan 2026–2027",
      kategori: "pelantikan",
      date:     "April 2026",
      desc:     "Pelantikan Dewan Ambalan Ir.Juanda & Rohana Kudus periode 2026–2027 oleh Kepala SMK SMTI Padang.",
      image:    "assets/images/galeri/pelantikan/pelantikan-dewan-2026-2027.png",
      label:    "Pelantikan Dewan",
      badge:    "Apr 2026",
    },
    {
      title:    "Pelantikan & Pengukuhan Kacu",
      kategori: "pelantikan",
      date:     "Agustus 2025",
      desc:     "Hiking dan pelantikan kacu seluruh siswa SMK SMTI Padang sebagai tamu ambalan Ir.Juanda & Rohana Kudus.",
      image:    "assets/images/galeri/pelantikan/pelantikan-kacu.png",
      label:    "Pelantikan Kacu",
      badge:    "Agu 2025",
    },
    {
      title:    "Pelantikan Laksana Putri 2025",
      kategori: "pelantikan",
      date:     "2025",
      desc:     "Pelantikan resmi anggota putri yang mencapai tingkat Penegak Laksana.",
      image:    "assets/images/galeri/pelantikan/pelantikan-laksana-cewek-2025.png",
      label:    "Pelantikan Laksana Putri",
      badge:    "Mei 2025",
    },
    {
      title:    "Pengambilan Laksana 2025",
      kategori: "pelantikan",
      date:     "2025",
      desc:     "Proses pengambilan tingkat Penegak Laksana oleh anggota Ambalan SMK SMTI Padang.",
      image:    "assets/images/galeri/pelantikan/pengambilan-laksana-2025.png",
      label:    "Pengambilan Laksana",
      badge:    "Mei 2025",
    },
    {
      title:    "Pelantikan Dewan Periode 2025–2026",
      kategori: "pelantikan",
      date:     "2025",
      desc:     "Pelantikan Dewan Ambalan Ir.Juanda & Rohana Kudus periode 2025–2026.",
      image:    "assets/images/galeri/pelantikan/penlantikan-dewan-periode-2025-2026.png",
      label:    "Pelantikan Dewan",
      badge:    "2025",
    },

    /* ── PERKEMAHAN ── */
    {
      title:    "Perkemahan Tahunan",
      kategori: "perkemahan",
      date:     "2025",
      desc:     "Perkemahan bersama seluruh anggota untuk melatih kemandirian, kerjasama, dan ketahanan di alam terbuka.",
      image:    "assets/images/galeri/perkemahan/perkemahan-tahunan.png",
      label:    "Perkemahan Tahunan",
      badge:    "Mei 2025",
    },
    {
      title:    "Hiking 2025 (Sesi 1)",
      kategori: "perkemahan",
      date:     "Agustus 2025",
      desc:     "Kegiatan hiking bersama anggota Ambalan sebagai bagian dari rangkaian pelantikan kacu.",
      image:    "assets/images/galeri/perkemahan/hiking-v1-2025.png",
      label:    "Hiking (Sesi 1)",
      badge:    "Agu 2025",
    },
    {
      title:    "Hiking 2025 (Sesi 2)",
      kategori: "perkemahan",
      date:     "Agustus 2025",
      desc:     "Dokumentasi lanjutan kegiatan hiking Ambalan SMK SMTI Padang 2025.",
      image:    "assets/images/galeri/perkemahan/hiking-v2-2025.png",
      label:    "Hiking (Sesi 2)",
      badge:    "Agu 2025",
    },
    {
      title:    "Musyawarah Ambalan 2025",
      kategori: "perkemahan",
      date:     "Februari 2025",
      desc:     "Musyawarah Ambalan Gudep 03-129/03-130 sekaligus pembentukan dewan ambalan baru.",
      image:    "assets/images/galeri/perkemahan/musbalan-2025.png",
      label:    "Musyawarah Ambalan",
      badge:    "Feb 2025",
    },
    {
      title:    "Persami Korps Kadet Republik Indonesia",
      kategori: "perkemahan",
      date:     "2025",
      desc:     "Perkemahan Sabtu–Minggu bersama Korps Kadet Republik Indonesia.",
      image:    "assets/images/galeri/perkemahan/persami-kkri.png",
      label:    "Persami Korps Kadet RI",
      badge:    "Nov 2025",
    },
    /* ── LATIHAN ── */
    {
      title:    "Latihan Rutin Kepramukaan",
      kategori: "latihan",
      date:     "2025",
      desc:     "Latihan mingguan mencakup keterampilan tali temali, morse, semaphore, PBB, dan navigasi alam.",
      image:    "assets/images/galeri/latihan/latihan-rutin-kepramukaan.png",
      label:    "Latihan Rutin Kepramukaan",
      badge:    "2025"
    },
    /* ── BAKTI SOSIAL ── */
    {
      title:    "Bakti Sosial di Kelurahan Nanggalo",
      kategori: "bakti-sosial",
      date:     "2025",
      desc:     "Ambalan SMK SMTI Padang melakukan bakti sosial di Kelurahan Nanggalo.",
      image:    "assets/images/galeri/bakti-sosial/bakti-sosial-masyrakat.png",
      label:    "Bakti Sosial Nanggalo",
      badge:    "Okt 2025",
    },
    /* ── UPACARA ── */
    {
      title:    "Petugas Upacara Bendera",
      kategori: "upacara",
      date:     "2025",
      desc:     "Ambalan SMK SMTI Padang bertugas sebagai petugas upacara bendera sekolah.",
      image:    "assets/images/galeri/upacara/petugas-upacara-bendera.png",
      label:    "Petugas Upacara Bendera",
      badge:    "Okt 2025",
    },
    {
      title:    "Upacara Sumpah Pemuda ke-97",
      kategori: "upacara",
      date:     "Oktober 2024",
      desc:     "Ambalan SMK SMTI Padang berpartisipasi dalam upacara peringatan Hari Sumpah Pemuda ke-97.",
      image:    "assets/images/galeri/upacara/upacara-sumpah-pemuda-97.png",
      label:    "Sumpah Pemuda ke-97",
      badge:    "Okt 2024",
    },
    /* ── BUKBER ── */
    {
      title:    "Buka Bersama Ramadhan 2025",
      kategori: "bukber",
      date:     "April 2025",
      desc:     "Ambalan SMK SMTI Padang mengadakan buka bersama untuk mempererat silaturahmi antar anggota selama bulan Ramadhan.",
      image:    "assets/images/galeri/bukber/buka-bersama-3-anggkatan-2025.png",
      label:    "Bukber Ramadhan",
      badge:    "Apr 2025",
    },
    {
      title:    "Buka Bersama Ramadhan 2025",
      kategori: "bukber",
      date:     "April 2025",
      desc:     "Ambalan SMK SMTI Padang mengadakan buka bersama untuk mempererat silaturahmi antar anggota selama bulan Ramadhan.",
      image:    "assets/images/galeri/bukber/buka-bersama-3-anggkatan-2026.png",
      label:    "Bukber Ramadhan",
      badge:    "Apr 2025",
    },
  ],
};

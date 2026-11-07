# Prototype Website PT Trans Royal Andalan

Prototype company profile jasa logistik dan freight forwarding. HTML, CSS, dan JavaScript polos, tanpa build tools.

## Isi folder

| File | Fungsi |
|---|---|
| `index.html` | Struktur semua halaman (satu file, berpindah halaman lewat hash `#home`, `#layanan`, dll.) |
| `style.css` | Seluruh gaya dan tampilan responsif |
| `script.js` | Data, router, menu, tab galeri, lightbox, form, pemilih bahasa |
| `README.md` | Panduan ini |

## Halaman

Beranda (termasuk section Legalitas & Kepemimpinan), Layanan (4 layanan), Galeri (tab Aktivitas dan Klien), Tentang Kami (visi & misi), Kontak (Apply Form). Tombol WhatsApp melayang tampil di semua halaman.

## Cara menjalankan

Buka `index.html` di browser, atau di VS Code gunakan ekstensi **Live Server**.

## Cara mengubah isi

1. **Kontak, layanan, klien, dokumen, galeri:** edit bagian `DATA` di bagian atas `script.js`. Nama dan logo klien pada tab **Klien & Kemitraan** dikelola di array `CLIENTS`; letakkan PNG logo transparan di folder yang sama dengan `index.html`.
2. **Teks halaman Beranda, Tentang, Legalitas, Kontak:** edit langsung di `index.html`.
3. **Warna dan font:** ubah variabel di `:root` pada `style.css`.
4. **Foto asli:** letakkan file foto di folder yang sama dengan `index.html`, lalu gunakan `<img src="nama.jpg" alt="Deskripsi foto" loading="lazy">`. Data foto layanan, beranda, dan galeri diatur di `script.js`.
5. **Terjemahan English:** tambah pasangan kunci di objek `EN` di `script.js` dan atribut `data-i18n="kunci"` pada elemen di `index.html`. Saat ini hanya menu, tombol utama, dan judul bagian yang diterjemahkan.

## Mengaktifkan form penawaran

Form belum punya backend. Ada dua mode:

- **Default (`formEndpoint` kosong):** isi form dikirim melalui WhatsApp.
- **Lewat layanan form:** daftar di Formspree atau Web3Forms, atur penerima ke `transroyalandalan@gmail.com` dan `exim@transroyalandalan.com`, lalu tempel URL-nya ke `C.formEndpoint` di `script.js`.

Tambahkan captcha dari layanan form yang Anda pilih sebelum situs dipublikasikan.

## Deploy ke Hostinger

1. Masuk hPanel, buka **File Manager**, lalu folder `public_html`.
2. Unggah `index.html`, `style.css`, `script.js`, logo, dan file gambar yang digunakan di folder yang sama.
3. Buka domain Anda untuk memeriksa tampilan dan tombol WhatsApp di ponsel.

## Keterbatasan prototype

- Semua halaman ada dalam satu `index.html`, jadi tiap halaman belum punya URL dan meta SEO sendiri. Untuk situs final, pisahkan menjadi file per halaman atau pindahkan ke Astro/Next.js.
- Konten layanan dirender oleh JavaScript, sehingga mesin pencari kurang optimal membacanya.
- Pastikan Anda memiliki izin untuk menampilkan foto, logo, dan nama klien (Peavey, PT Axia Prima Sejahtera, PT Mitra Sukses Raharja, Aquila Data Group).
- Profil, latar belakang, visi, misi, alamat, kontak, dan NIB pada situs diisi dari informasi yang tersedia.

## Pembaruan (versi 2)

- **Header:** ikon Instagram (https://www.instagram.com/transroyalandalan/) dan email (exim@transroyalandalan.com) berupa SVG vektor yang diberi gaya CSS, kotak bahasa (Indonesia, English, 中文 简体), dan tombol **Get Offer**.
- **Popup Get Offer:** pilih layanan, asal, tujuan, total berat kotor (kg), dimensi (P x L x T), data pengirim (nama, email, telepon, pesan), dan captcha "Saya bukan robot". Dari semua tombol penawaran di situs.
- **Google Maps:** alamat dan tautan ke https://maps.app.goo.gl/89CeAN2vWwxfJJuD9 tersedia di halaman Kontak. Tautan pendek ini tidak bisa dipasang di `iframe`. Untuk peta tertanam, buka lokasi di Google Maps, pilih Bagikan, Sematkan peta, lalu tempel kode `iframe` di `fillMaps()` pada `script.js`.
- **Carousel hero:** memakai `operations.jpg` dengan tiga potongan berbeda. Untuk foto lain, taruh di folder yang sama lalu perbarui properti `src` pada slide di array `SL` (`script.js`), serta atur `pos` agar potongannya pas.
- **Bahasa:** terjemahan English dan Mandarin ada di objek `L` di `script.js`. Konten panjang (deskripsi layanan, visi misi) masih bahasa Indonesia, dan pesan status form belum diterjemahkan.
- **Nama perusahaan:** "PT Trans Royal Andalan" (sesuai foto seragam, kantor, dan gudang). Foto `operations.jpg` memuat tulisan "PT. ROYAL TRANS ANDALAN" di vest, urutan kata yang berbeda. Sebaiknya foto itu diganti atau diperbaiki supaya konsisten.

### Catatan captcha

Kotak "Saya bukan robot" ini hanya tampilan CSS dan JavaScript di sisi pengunjung, jadi **belum melindungi dari bot sungguhan** (bot bisa melewatinya). Untuk perlindungan nyata, pasang Google reCAPTCHA atau Cloudflare Turnstile dengan site key milik Anda, dan verifikasi di layanan form (Formspree/Web3Forms mendukungnya). Honeypot di form tetap aktif sebagai lapisan dasar.

## Pembaruan (versi 3)

- **Foto asli:** `operations.jpg`, `sea-freight.jpg`, `air-freight.jpg`, `trucking-domestik.jpg`, `cs.jpg`, `door-to-door-delivery.jpeg`, dan foto aktivitas galeri (`gallery-*.png` serta `gallery-protected-machinery.jpeg`) berada di folder yang sama dengan `index.html`.
- **SEO:** judul dan meta description berbeda per halaman (`PAGE_META` di `script.js`) dengan kata kunci "jasa freight forwarding legal dan murah di Jakarta Timur", sea freight, air freight, trucking domestik, import door to door. Ada juga JSON-LD LocalBusiness di `<head>`, H1 per halaman, dan alt text di semua gambar. Tambahkan alamat dan URL domain ke JSON-LD setelah tersedia.
- **Animasi scroll:** efek muncul halus lewat `IntersectionObserver` (fungsi `initReveal`), otomatis mati jika perangkat meminta gerak dikurangi.
- **Catatan SEO:** karena semua halaman ada di satu `index.html`, mesin pencari hanya melihat satu URL. Untuk hasil SEO terbaik, pecah menjadi file per halaman (lihat Versi B/C/D di prompt sebelumnya).
- **Logo:** header masih memakai logo teks. Kirim file logo (PNG/SVG, latar transparan) untuk dipasang di header dan favicon.

## Pembaruan (versi 4): desain Kontak dan pop-up Get Offer

- **Halaman Kontak:** tampilan dua kolom. Kiri: Kantor Utama (MTH Square Office & Apartment, alamat lengkap), email bisnis exim@transroyalandalan.com, daftar telepon/WhatsApp, dan kartu peta. Kanan: **Apply Form** (nama lengkap, email, nomor telepon, pilihan layanan, pesan maksimal 200 kata dengan penghitung, captcha, tombol Kirim).
- **Pop-up Get Offer:** kartu lebar dengan foto di kiri (`trucking-domestik.jpg`), judul biru, kolom dua baris (layanan, asal, tujuan, berat kotor, dimensi), bagian "Data pengirim" (nama, email, telepon, pesan), captcha, dan tombol kirim. Tombol tutup berada di luar kartu. Di ponsel foto disembunyikan dan kolom menjadi satu.
- **Gaya:** semua CSS baru ada di bagian "v4" paling bawah `style.css` (tidak ada lagi blok `<style>` di `index.html`). Perilaku formulir ada di `initContact()`, `initOffer()`, dan `initCaptcha()` di `script.js`.
- **Pengiriman:** Apply Form dikirim lewat aplikasi email ke `C.bizMail` jika `C.formEndpoint` kosong. Pop-up Get Offer tetap lewat WhatsApp. Jika `formEndpoint` diisi, keduanya dikirim ke layanan form.
- **Alamat:** teks alamat ada di `index.html` (halaman Kontak), `C.addr` di `script.js` (kartu peta), dan JSON-LD di `<head>`.
- **Captcha:** masih tampilan saja (lihat catatan captcha di atas). Ganti dengan reCAPTCHA atau Turnstile sebelum situs dipublikasikan.

## Pembaruan (versi 6): carousel halaman Layanan

- Empat layanan ditampilkan berurutan dalam carousel responsif dengan foto, ringkasan, detail, daftar penawaran, dan tombol permintaan penawaran untuk tiap layanan.
- Navigasi tersedia melalui tombol panah, daftar langkah, tombol panah keyboard, dan gestur geser di layar sentuh. Animasi menghormati pengaturan reduced motion.
- Data layanan dan jalur gambar dikelola di array `SERVICES` dalam `script.js`. Simpan file foto di folder yang sama dengan `index.html`.

## Pembaruan (versi 5): legalitas dipindah ke Beranda

- **Dihapus:** halaman penuh "Legalitas & Kepemimpinan" beserta menu navigasinya, kotak dokumen legalitas (`DOCS`), dan CSS yang tidak lagi dipakai (`.ph`, `.docs`, `.std`, `.note`).
- **Ditambahkan di Beranda:** section "Legalitas & Kepemimpinan" (setelah Alur Pengiriman) berisi dua kartu informasi legalitas perusahaan dan kepemimpinan.
- **Tautan lama:** alamat `#legalitas` tidak error dan otomatis membuka Beranda.
- **SEO:** NIB ditambahkan ke JSON-LD (`identifier`) di `<head>`.
- **Belum ada:** foto pemimpin dan salinan dokumen NIB. Jika ada, bisa ditambahkan ke kartu masing-masing.

## Pembaruan (versi 7): galeri aktivitas berbentuk carousel

- Tab **Aktivitas Perusahaan** menampilkan lima foto referensi penanganan kargo sebagai carousel dengan keterangan, thumbnail, indikator progres, tombol navigasi, keyboard, gestur geser, dan pembesar foto.
- Banner Galeri memakai kolase foto ber-overlay agar judul tetap terbaca. Tab **Klien & Kemitraan** tetap tersedia.
- Foto aktivitas tersimpan bersama `index.html`: `gallery-cargo-label.png`, `gallery-pallet-shipment.png`, `gallery-container-loading.png`, `gallery-secured-cargo.png`, dan `gallery-protected-machinery.jpeg`.

## Pembaruan (versi 8): logo klien dan kemitraan

- Tab **Klien & Kemitraan** menampilkan empat logo transparan di atas nama masing-masing perusahaan, tanpa teks placeholder.
- Aset logo: `client-peavey.png`, `client-axia.png`, `client-mitsura.png`, dan `client-aquila.png`. Nama perusahaan dan jalur logo dikelola di array `CLIENTS` dalam `script.js`.

## Pembaruan (versi 9): palet warna dan headline Beranda

- Palet utama mengikuti referensi: biru `#164B70`, abu-abu `#CCD5DD`, dan emas `#C1B156`; variabel warna berada di `:root` pada `style.css`.
- Tombol WhatsApp dan Get Offer di bawah headline Beranda dihapus. Carousel foto yang ada tetap dipakai sampai tersedia video logistik yang berizin untuk penggunaan komersial; file video sumber Klickpin tidak dipasang.

## Pembaruan (versi 10): branding dan footer

- Header dan footer menampilkan logo resmi berwarna biru dari `PT Trans Royal Andalan Logo 2.jpg.png`. Teks **Get Offer** dan seluruh tombol WhatsApp menggunakan warna hijau.
- Tautan media sosial yang belum tersedia dan penanda placeholder dihapus dari footer. Copyright menampilkan nama perusahaan dan tahun berjalan.
- Section **Klien Kami** dan **Lokasi Kami** dihapus dari Beranda. Galeri klien/kemitraan dan alamat di halaman Kontak tetap tersedia.
- Nomor WhatsApp, email, alamat, dan NIB ditampilkan dari informasi perusahaan yang tersedia.

## Pembaruan (versi 11): carousel layanan Beranda

- Headline Beranda memakai tagline **Jasa Freight Forwarding Yang Andal Mentransformasikan Pelanggan Secara Royal**, dengan tiga ringkasan layanan di bawahnya.
- Layanan di Beranda kini ditampilkan sebagai carousel kartu berisi foto dan ringkasan, dengan navigasi panah, indikator, tombol pilihan, dan gestur geser. Ikon emoji/stiker di kartu dan judul layanan dihapus.
- Section promosi Tentang Kami dan CTA pengiriman di Beranda dihapus. Tagline baru tampil di footer bersama pada seluruh halaman.

## Pembaruan (versi 12): penyederhanaan kontak dan Beranda

- Nama kontak personal dihapus dari daftar WhatsApp pada halaman Kontak, footer, dan tombol WhatsApp mengambang; nomor dan alamat email tetap tersedia.
- Section "Legalitas & Kepemimpinan" beserta kedua kartu informasinya dihapus sepenuhnya dari Beranda.

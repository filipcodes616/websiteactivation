/* ===== DATA (ubah di sini) ===== */
const C = {
  name: 'PT Trans Royal Andalan',
  wa: [
    { d: '0853-6133-8650', u: '6285361338650' },
    { d: '0821-1553-1979', u: '6282115531979' }
  ],
  mail: ['transroyalandalan@gmail.com', 'exim@transroyalandalan.com'],
  bizMail: 'exim@transroyalandalan.com', // tujuan formulir halaman Kontak jika formEndpoint kosong
  addr: 'MTH Square Office & Apartment, Jl. Letjen M.T. Haryono No.A4/A 6, Cawang, Jatinegara, Jakarta Timur 13330',
  msg: 'Halo, saya ingin menanyakan layanan pengiriman PT Trans Royal Andalan.',
  formEndpoint: '' // isi URL Formspree/Web3Forms; jika kosong, popup Get Offer lewat WhatsApp, formulir Kontak lewat email
};
const FLOATING_WA_CONTACTS = [
  { label: 'Hubungi Sekarang (CS1)', phone: '6282115531979' },
  { label: 'Hubungi Sekarang (CS2)', phone: '6285361338650' }
];
const SERVICES = [
  { id: 'sea', img: 'sea-freight.jpg', alt: 'Tim dan forklift memuat kargo ke kapal untuk pengiriman laut', pos: '50% 50%', t: 'Export & Import Sea Freight',
    s: 'Pengiriman laut internasional FCL dan LCL.',
    d: 'Pengiriman barang lewat laut untuk ekspor dan impor, dari muatan satu kontainer penuh sampai kiriman gabungan.',
    o: ['Pengiriman FCL dan LCL', 'Booking ruang kapal', 'Pengurusan dokumen ekspor-impor', 'Pelacakan status kiriman'],
    f: ['Industri apa yang cocok?', 'Barang berukuran besar atau berat, bahan baku, produk jadi, dan kiriman yang tidak mendesak.'],
    q: ['Apa bedanya FCL dan LCL?', 'FCL memakai satu kontainer penuh untuk satu pengirim. LCL menggabungkan barang beberapa pengirim dalam satu kontainer.'] },
  { id: 'air', img: 'air-freight.jpg', alt: 'Tim logistik menyiapkan kargo dan truk di sisi pesawat', pos: '50% 60%', t: 'Export & Import Air Freight',
    s: 'Kiriman udara untuk barang mendesak atau bernilai tinggi.',
    d: 'Pengiriman lewat udara untuk barang yang harus cepat sampai atau memerlukan penanganan khusus.',
    o: ['Jadwal penerbangan fleksibel', 'Dokumen penerbangan (AWB)', 'Pengurusan dokumen kepabeanan', 'Konsultasi pengemasan'],
    f: ['Industri apa yang cocok?', 'Barang bernilai tinggi, sampel, suku cadang, dan produk yang sensitif waktu.'],
    q: ['Berapa lama pengiriman?', 'Tergantung rute dan maskapai. Hubungi kami untuk estimasi sesuai tujuan Anda.'] },
  { id: 'truck', img: 'trucking-domestik.jpg', alt: 'Tim memuat barang ke dalam truk di gudang logistik', pos: '50% 50%', t: 'Trucking Domestik',
    s: 'Pengiriman darat antar kota dan pulau.',
    d: 'Armada darat untuk mengantar barang antar kota atau antar pulau di Indonesia, termasuk dari dan ke pelabuhan.',
    o: ['Armada sesuai volume barang', 'Pickup dan delivery terjadwal', 'Angkutan dari dan ke pelabuhan', 'Kabar status perjalanan'],
    f: ['Industri apa yang cocok?', 'Distribusi retail, pabrik, proyek, dan pengiriman kontainer dari pelabuhan ke gudang.'],
    q: ['Bisa pickup di hari yang sama?', 'Bergantung pada lokasi dan ketersediaan armada. Hubungi kami lebih awal.'] },
  { id: 'door', img: 'Friendly Home Delivery at Modern Entrance.png', alt: 'Kurir menyerahkan paket langsung kepada penerima di alamat tujuan', pos: '50% 38%', t: 'Wholesale Import Sea & Air Door to Door',
    s: 'Impor partai besar langsung ke alamat Anda.',
    d: 'Impor dalam jumlah besar dari negara asal sampai ke gudang atau alamat penerima, dengan dokumen dan bea masuk diurus bersama.',
    o: ['Pengiriman laut atau udara', 'Pengurusan dokumen impor', 'Penanganan bea masuk', 'Pengantaran akhir ke alamat penerima'],
    f: ['Industri apa yang cocok?', 'Pedagang grosir, pabrik yang mengimpor bahan baku, dan distributor.'],
    q: ['Apakah bea masuk sudah termasuk?', 'Rincian biaya, termasuk bea masuk, kami jelaskan dalam penawaran sebelum pengiriman berjalan.'] }
];
const HOME_SERVICE_PHOTOS = [
  { src: 'sea-freight.jpg', alt: 'Kapal kargo untuk layanan sea freight', pos: '50% 50%' },
  { src: 'air-freight.jpg', alt: 'Pesawat dan kargo untuk layanan air freight', pos: '50% 60%' },
  { src: 'trucking-domestik.jpg', alt: 'Truk logistik untuk layanan pengiriman domestik', pos: '50% 50%' },
  { src: 'Friendly Home Delivery at Modern Entrance.png', alt: 'Pengantaran barang ke rumah penerima', pos: '50% 50%' }
];
const CLIENTS = [
  { name: 'Aquila Data', logo: 'client-aquila.png' },
  { name: 'Axia Prima', logo: 'client-axia.png' },
  { name: 'Peavey', logo: 'client-peavey.png' },
  { name: 'Mitsura', logo: 'client-mitsura.png' }
];
const GALLERY = [
  { c: 'Pengemasan kargo dalam peti kayu', s: 'gallery-cargo-label.png', a: 'Peti kayu untuk pengiriman kargo dengan label dan dokumen pengiriman terpasang', d: 'Kargo dikemas dalam peti pelindung dan diberi label agar mudah dikenali selama proses pengiriman.', p: '50% 50%' },
  { c: 'Persiapan kargo di atas palet', s: 'gallery-pallet-shipment.png', a: 'Paket berukuran besar tersusun di atas palet dan diikat untuk pengiriman', d: 'Paket disusun dan diikat pada palet untuk membantu menjaga posisi kargo selama pemindahan.', p: '50% 50%' },
  { c: 'Penataan kargo di dalam kontainer', s: 'gallery-container-loading.png', a: 'Kargo yang sudah dibungkus dan diikat rapi di dalam kontainer', d: 'Barang ditata di dalam kontainer dan diamankan dengan tali pengikat untuk mengurangi pergeseran.', p: '50% 50%' },
  { c: 'Pengamanan barang selama perjalanan', s: 'gallery-secured-cargo.png', a: 'Kargo berukuran besar terbungkus plastik dan terikat kuat di dalam kontainer', d: 'Pembungkus dan pengikat digunakan untuk membantu melindungi kargo selama perjalanan.', p: '50% 50%' },
  { c: 'Peti kargo siap dikirim', s: 'gallery-protected-machinery.jpeg', a: 'Peti pelindung berukuran besar diamankan dengan tali di dalam ruang kargo', d: 'Peti ditempatkan dan diikat dengan tali pengaman sebelum melanjutkan perjalanan.', p: '50% 50%' }
];
const L = {
  en: {
    nav_home: 'Home', nav_services: 'Services ▾', nav_gallery: 'Gallery', nav_about: 'About Us', nav_contact: 'Contact',
    get_offer: 'Contact Us', cta_quote: 'Request a Quote', cta_wa: 'Chat on WhatsApp', contact_us: 'Contact Us', more: 'Learn more',
    h_services: 'Our Services', h_about: 'About Us', h_flow: 'Shipping Process', h1_sub: 'Reliable freight forwarding that transforms your business',
    f_title: 'Request a Quote', f_cargo: 'Shipment details', f_svc: 'Choose service', f_origin: 'Origin', f_dest: 'Destination',
    f_weight: 'Total gross weight (kg)', f_dim: 'Dimensions (L × W × H, cm)', f_sender: 'Sender information', f_name: 'Full name',
    f_phone: 'Phone / WhatsApp', f_email: 'Email', f_msg: 'Message', f_submit: 'Send request', f_robot: "I'm not a robot", f_choose: '-- Choose Service --'
  },
  zh: {
    nav_home: '首页', nav_services: '服务 ▾', nav_gallery: '图库', nav_about: '关于我们', nav_contact: '联系我们',
    get_offer: '联系我们', cta_quote: '获取报价', cta_wa: 'WhatsApp 咨询', contact_us: '联系我们', more: '了解更多',
    h_services: '我们的服务', h_about: '关于我们', h_flow: '运输流程', h1_sub: '可靠的货运代理服务，助力业务发展',
    f_title: '获取报价', f_cargo: '货物详情', f_svc: '选择服务', f_origin: '起运地', f_dest: '目的地',
    f_weight: '总毛重（公斤）', f_dim: '尺寸（长 × 宽 × 高，厘米）', f_sender: '寄件人资料', f_name: '姓名',
    f_phone: '电话 / WhatsApp', f_email: '电子邮箱', f_msg: '留言', f_submit: '提交询价', f_robot: '我不是机器人', f_choose: '-- 选择服务 --'
  }
};
const MAPS_URL = 'https://maps.app.goo.gl/89CeAN2vWwxfJJuD9';
const HERO_TAGLINE = 'Jasa Freight Forwarding Modern di Indonesia';
const PAGE_META = {
  home: { t: 'Jasa Freight Forwarding Legal dan Murah di Jakarta Timur | PT Trans Royal Andalan', d: 'PT Trans Royal Andalan: jasa freight forwarding legal dan murah di Jakarta Timur. Sea freight, air freight, trucking domestik, dan import door to door.' },
  layanan: { t: 'Layanan Sea Freight, Air Freight, Trucking & Import Door to Door | PT Trans Royal Andalan', d: 'Layanan ekspor impor sea freight, air freight, trucking domestik, dan wholesale import door to door dari Jakarta Timur.' },
  galeri: { t: 'Galeri Aktivitas Perusahaan | PT Trans Royal Andalan', d: 'Dokumentasi pengemasan, penataan, dan pengamanan kargo PT Trans Royal Andalan.' },
  tentang: { t: 'Tentang Kami, Visi dan Misi | PT Trans Royal Andalan', d: 'Profil, visi, misi, dan nilai PT Trans Royal Andalan, penyedia jasa freight forwarding global dan domestik.' },
  kontak: { t: 'Kontak dan Minta Penawaran Freight Forwarding Jakarta Timur | PT Trans Royal Andalan', d: 'Hubungi PT Trans Royal Andalan lewat WhatsApp, email, atau formulir penawaran untuk pengiriman ekspor impor dan domestik.' }
};

/* ===== HELPERS ===== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const waLink = (u, m = C.msg) => `https://wa.me/${u}?text=${encodeURIComponent(m)}`;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const hue = i => `linear-gradient(135deg,hsl(${225 + i * 14} 70% ${28 + (i % 3) * 6}%),hsl(${200 + i * 20} 60% 20%))`;

/* ===== RENDER ===== */
function render() {
  $('#ddm').innerHTML = SERVICES.map(s => `<a href="#layanan/${s.id}">${esc(s.t)}</a>`).join('');
  $('#svcCards').innerHTML = `
    <div class="home-service-carousel" id="homeServiceCarousel" role="region" aria-label="Carousel layanan kami" aria-roledescription="carousel">
      <div class="home-service-stage" id="homeServiceSlides" role="group" aria-label="Area slide layanan. Gunakan tombol panah kiri atau kanan untuk berpindah." tabindex="0">
        <div class="home-service-gallery" id="homeServiceGallery" aria-label="Galeri foto layanan">
          ${HOME_SERVICE_PHOTOS.map((photo, i) => `
            <figure class="home-service-photo${i ? '' : ' is-active'}" aria-hidden="${i ? 'true' : 'false'}">
              <img src="${photo.src}" alt="${esc(photo.alt)}" style="object-position:${photo.pos}" loading="${i ? 'lazy' : 'eager'}" decoding="async">
            </figure>`).join('')}
        </div>
        ${SERVICES.map((s, i) => `
          <article class="home-service-slide${i ? '' : ' is-active'}" role="group" aria-roledescription="slide" aria-label="Layanan ${i + 1} dari ${SERVICES.length}"${i ? ' hidden' : ''}>
            <div class="home-service-copy">
              <p class="home-service-index">${String(i + 1).padStart(2, '0')} / ${String(SERVICES.length).padStart(2, '0')} · LAYANAN</p>
              <h3>${esc(s.t)}</h3>
              <p>${esc(s.d)}</p>
              <a class="home-service-link" href="#layanan/${s.id}">Lihat detail layanan</a>
            </div>
          </article>`).join('')}
      </div>
      <div class="home-service-navigation">
        <div class="home-service-status"><span id="homeServiceCounter" aria-live="polite"></span><span class="home-service-progress" aria-hidden="true"><span id="homeServiceProgress"></span></span></div>
        <div class="home-service-controls">
          <button type="button" class="home-service-arrow home-service-previous" aria-label="Layanan sebelumnya">‹</button>
          <button type="button" class="home-service-arrow home-service-next" aria-label="Layanan berikutnya">›</button>
        </div>
      </div>
      <nav class="home-service-pagination" aria-label="Pilih layanan">
        ${SERVICES.map((s, i) => `<button type="button" data-home-service-index="${i}" aria-label="Layanan ${i + 1}: ${esc(s.t)}"${i ? '' : ' aria-current="true"'}></button>`).join('')}
      </nav>
    </div>`;
  $('#svcDetail').innerHTML = `
    <div class="svc-carousel" id="svcCarousel" role="region" aria-label="Carousel layanan">
      <div class="svc-carousel-heading"><p class="svc-carousel-kicker">SOLUSI LOGISTIK</p><p class="svc-carousel-count" id="svcCounter" aria-live="polite"></p></div>
      <div class="svc-carousel-progress" aria-hidden="true"><span id="svcProgress"></span></div>
      <div class="svc-carousel-stage" id="svcCarouselSlides" role="group" aria-label="Area slide layanan. Gunakan tombol panah kiri atau kanan untuk berpindah." tabindex="0">
        ${SERVICES.map((s, i) => `
          <article class="svc-slide" id="svc-${s.id}" role="group" aria-roledescription="slide" aria-label="Layanan ${i + 1} dari ${SERVICES.length}"${i ? ' hidden' : ''}>
            <figure class="svc-slide-visual"><img src="${s.img}" alt="${esc(s.alt)}" loading="lazy" decoding="async" style="object-position:${s.pos}"><figcaption>${esc(s.t)}</figcaption></figure>
            <div class="svc-slide-copy">
              <p class="svc-slide-kicker">${String(i + 1).padStart(2, '0')} / ${String(SERVICES.length).padStart(2, '0')} &middot; LAYANAN</p>
              <h2>${esc(s.t)}</h2><p class="svc-slide-summary">${esc(s.s)}</p><p>${esc(s.d)}</p>
              <div class="svc-slide-info">
                <div><h3>Yang kami tawarkan</h3><ul>${s.o.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
                <div class="svc-fit"><h3>Cocok untuk</h3><p>${esc(s.f[1])}</p></div>
              </div>
              <details><summary>${esc(s.q[0])}</summary><p>${esc(s.q[1])}</p></details>
              <div class="row svc-slide-actions"><button class="btn navy" type="button" data-offer data-svc="${s.id}" data-i18n="cta_quote">Minta penawaran</button>
                <a class="btn wa" target="_blank" rel="noopener" href="${waLink(C.wa[0].u, 'Halo, saya ingin menanyakan layanan ' + s.t + '.')}">Chat WhatsApp</a></div>
            </div>
          </article>`).join('')}
      </div>
      <div class="svc-carousel-footer">
        <nav class="svc-carousel-steps" aria-label="Pilih layanan">
          ${SERVICES.map((s, i) => `<button class="svc-step" type="button" data-service-index="${i}" aria-label="Layanan ${i + 1}: ${esc(s.t)}"><span>${String(i + 1).padStart(2, '0')}</span><b>${esc(s.t)}</b></button>`).join('')}
        </nav>
        <div class="svc-carousel-controls">
          <button class="svc-arrow svc-previous" type="button" aria-label="Layanan sebelumnya">‹</button>
          <button class="svc-arrow svc-next" type="button" aria-label="Layanan berikutnya">›</button>
        </div>
      </div>
    </div>`;
  const clientCards = (duplicate = false) => CLIENTS.map(c => `
    <div class="client-logo-card"${duplicate ? ' aria-hidden="true"' : ''}>
      <img src="${c.logo}" alt="${esc(c.name)}" loading="eager" decoding="async">
      <span>${esc(c.name)}</span>
    </div>`).join('');
  $('#homeClientPartners').innerHTML = `
    <div class="client-carousel-viewport">
      <div class="client-carousel-track">
        <div class="client-carousel-group">${clientCards()}</div>
        <div class="client-carousel-group" aria-hidden="true">${clientCards(true)}</div>
      </div>
    </div>`;
  $('#galleryCarousel').innerHTML = `
    <div class="gallery-carousel" id="galleryCarouselView" role="region" aria-label="Aktivitas perusahaan" aria-roledescription="carousel">
      <div class="gallery-carousel-stage" id="gallerySlides" role="group" aria-label="Area slide foto. Gunakan tombol panah kiri atau kanan untuk berpindah." tabindex="0">
        ${GALLERY.map((g, i) => `
          <article class="gallery-slide${i ? '' : ' is-active'}" role="group" aria-roledescription="slide" aria-label="Foto ${i + 1} dari ${GALLERY.length}"${i ? ' hidden' : ''}>
            <figure class="gallery-slide-photo">
              <button type="button" class="gallery-photo-button" data-gallery-open="${i}" aria-label="Perbesar foto: ${esc(g.c)}">
                <img src="${g.s}" alt="${esc(g.a)}" loading="${i ? 'lazy' : 'eager'}" decoding="async" style="object-position:${g.p}">
                <span>Perbesar foto</span>
              </button>
            </figure>
            <div class="gallery-slide-copy">
              <p class="gallery-slide-index">${String(i + 1).padStart(2, '0')} / ${String(GALLERY.length).padStart(2, '0')} &middot; AKTIVITAS</p>
              <h2>${esc(g.c)}</h2><p>${esc(g.d)}</p>
              <p class="gallery-slide-caption">Dokumentasi operasional PT Trans Royal Andalan</p>
            </div>
          </article>`).join('')}
      </div>
      <div class="gallery-carousel-navigation">
        <div class="gallery-carousel-status"><span id="galleryCounter" aria-live="polite"></span><span class="gallery-progress" aria-hidden="true"><span id="galleryProgress"></span></span></div>
        <div class="gallery-carousel-controls">
          <button type="button" class="gallery-arrow gallery-previous" aria-label="Foto sebelumnya">‹</button>
          <button type="button" class="gallery-arrow gallery-next" aria-label="Foto berikutnya">›</button>
        </div>
      </div>
      <nav class="gallery-thumbnails" aria-label="Pilih foto aktivitas">
        ${GALLERY.map((g, i) => `<button type="button" class="gallery-thumbnail" data-gallery-index="${i}" aria-label="Foto ${i + 1}: ${esc(g.c)}"${i ? '' : ' aria-current="true"'}><img src="${g.s}" alt="" loading="lazy"><span>${esc(g.c)}</span></button>`).join('')}
      </nav>
    </div>`;
  const opts = '<option value="">-- Pilih Layanan --</option>' + SERVICES.map(s => `<option value="${s.id}">${esc(s.t)}</option>`).join('');
  $('#fSvc').innerHTML = opts; $('#cSvc').innerHTML = opts;
  const PH = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17 1H7a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm0 17H7V5h10v13z"/></svg>';
  $('#contactList').innerHTML = C.wa.map(w => `<li class="kt-row">${PH}<p><a class="contact-wa" target="_blank" rel="noopener" href="${waLink(w.u)}">${w.d}</a><span class="nm">WhatsApp</span></p></li>`).join('');
  $('#ftSvc').innerHTML = SERVICES.map(s => `<li><a href="#layanan/${s.id}">${esc(s.t)}</a></li>`).join('');
  $('#ftContact').innerHTML = C.wa.map(w => `<li><a class="footer-wa" target="_blank" rel="noopener" href="${waLink(w.u)}">WhatsApp · ${esc(w.d)}</a></li>`).join('') + C.mail.map(m => `<li>${esc(m)}</li>`).join('');
  $('#wafList').innerHTML = FLOATING_WA_CONTACTS.map(w => `<a target="_blank" rel="noopener" href="${waLink(w.phone)}">${esc(w.label)}</a>`).join('');
  $('#yr').textContent = new Date().getFullYear();
}

/* ===== ROUTER (hash) ===== */
let activePage = null;
function route() {
  const [p, sub] = (location.hash || '#home').slice(1).split('/');
  const id = $('#' + p + '.page') ? p : 'home';
  const enteringPage = id !== activePage;
  $$('.page').forEach(s => s.hidden = s.id !== id);
  $$('#nav a[data-p]').forEach(a => a.classList.toggle('on', a.dataset.p === id));
  if (id === 'layanan') {
    const index = SERVICES.findIndex(s => s.id === sub);
    showService(index < 0 ? 0 : index);
  }
  const target = id === 'layanan' && sub && enteringPage && $('#svcCarousel');
  if (enteringPage) target ? target.scrollIntoView() : window.scrollTo(0, 0);
  activePage = id;
  $('#nav').classList.remove('open');
  $('.burger').setAttribute('aria-expanded', 'false');
  const pm = PAGE_META[id] || PAGE_META.home;
  document.title = pm.t; $('meta[name=description]').content = pm.d;
}

/* ===== CAROUSEL LAYANAN BERANDA ===== */
let activeHomeService = 0;
function showHomeService(index) {
  const carousel = $('#homeServiceCarousel');
  if (!carousel) return;
  const slides = $$('.home-service-slide', carousel);
  if (!slides.length) return;
  activeHomeService = (index + SERVICES.length) % SERVICES.length;
  $$('.home-service-photo', carousel).forEach((photo, i) => {
    const active = i === activeHomeService;
    photo.classList.toggle('is-active', active);
    photo.setAttribute('aria-hidden', String(!active));
  });
  slides.forEach((slide, i) => {
    const active = i === activeHomeService;
    slide.hidden = !active;
    slide.classList.toggle('is-active', active);
  });
  $$('.home-service-pagination button', carousel).forEach((button, i) => {
    if (i === activeHomeService) button.setAttribute('aria-current', 'true');
    else button.removeAttribute('aria-current');
  });
  $('#homeServiceCounter').textContent = `${String(activeHomeService + 1).padStart(2, '0')} / ${String(SERVICES.length).padStart(2, '0')}`;
  $('#homeServiceProgress').style.width = `${((activeHomeService + 1) / SERVICES.length) * 100}%`;
}

function initHomeServiceCarousel() {
  const carousel = $('#homeServiceCarousel'), stage = $('#homeServiceSlides');
  if (!carousel || !stage) return;
  $('.home-service-previous', carousel).onclick = () => showHomeService(activeHomeService - 1);
  $('.home-service-next', carousel).onclick = () => showHomeService(activeHomeService + 1);
  $('.home-service-pagination', carousel).onclick = event => {
    const button = event.target.closest('[data-home-service-index]');
    if (button) showHomeService(Number(button.dataset.homeServiceIndex));
  };
  carousel.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.target.closest('button,a,input,select,textarea')) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showHomeService(activeHomeService + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  let touchStart;
  stage.addEventListener('touchstart', event => {
    if (event.touches.length === 1) touchStart = [event.touches[0].clientX, event.touches[0].clientY];
  }, { passive: true });
  stage.addEventListener('touchend', event => {
    if (!touchStart || !event.changedTouches.length) return;
    const dx = event.changedTouches[0].clientX - touchStart[0];
    const dy = event.changedTouches[0].clientY - touchStart[1];
    touchStart = null;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.2) showHomeService(activeHomeService + (dx < 0 ? 1 : -1));
  }, { passive: true });
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let timer;
  const syncAutoAdvance = () => {
    clearInterval(timer);
    if (!motion.matches && !document.hidden) {
      timer = setInterval(() => {
        if (!$('#home').hidden) showHomeService(activeHomeService + 1);
      }, 6000);
    }
  };
  carousel.addEventListener('mouseenter', () => clearInterval(timer));
  carousel.addEventListener('mouseleave', syncAutoAdvance);
  carousel.addEventListener('focusin', () => clearInterval(timer));
  carousel.addEventListener('focusout', event => {
    if (!carousel.contains(event.relatedTarget)) syncAutoAdvance();
  });
  document.addEventListener('visibilitychange', syncAutoAdvance);
  motion.addEventListener('change', syncAutoAdvance);
  showHomeService(activeHomeService);
  syncAutoAdvance();
}

/* ===== CAROUSEL LAYANAN ===== */
let activeService = 0;
function showService(index) {
  const slides = $$('.svc-slide', $('#svcCarouselSlides'));
  if (!slides.length) return;
  activeService = (index + SERVICES.length) % SERVICES.length;
  slides.forEach((slide, i) => {
    const active = i === activeService;
    slide.hidden = !active;
    slide.classList.toggle('is-active', active);
  });
  $$('.svc-step', $('#svcCarousel')).forEach((step, i) => {
    if (i === activeService) step.setAttribute('aria-current', 'step');
    else step.removeAttribute('aria-current');
  });
  $('#svcCounter').textContent = `${String(activeService + 1).padStart(2, '0')} / ${String(SERVICES.length).padStart(2, '0')}`;
  $('#svcProgress').style.width = `${((activeService + 1) / SERVICES.length) * 100}%`;
}

function moveService(index) {
  showService(index);
  const hash = `#layanan/${SERVICES[activeService].id}`;
  if (location.hash !== hash) history.pushState(null, '', hash);
}

function initServiceCarousel() {
  const carousel = $('#svcCarousel'), stage = $('#svcCarouselSlides');
  if (!carousel || !stage) return;
  $('.svc-previous', carousel).onclick = () => moveService(activeService - 1);
  $('.svc-next', carousel).onclick = () => moveService(activeService + 1);
  $('.svc-carousel-steps', carousel).onclick = e => {
    const step = e.target.closest('[data-service-index]');
    if (step) moveService(Number(step.dataset.serviceIndex));
  };
  carousel.addEventListener('keydown', e => {
    if (e.altKey || e.ctrlKey || e.metaKey || e.target.closest('button,a,summary,input,select,textarea')) return;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault();
      moveService(activeService + (e.key === 'ArrowRight' ? 1 : -1));
    }
  });
  let touchStart;
  stage.addEventListener('touchstart', e => {
    if (e.touches.length === 1) touchStart = [e.touches[0].clientX, e.touches[0].clientY];
  }, { passive: true });
  stage.addEventListener('touchend', e => {
    if (!touchStart || !e.changedTouches.length) return;
    const dx = e.changedTouches[0].clientX - touchStart[0];
    const dy = e.changedTouches[0].clientY - touchStart[1];
    touchStart = null;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.2) moveService(activeService + (dx < 0 ? 1 : -1));
  }, { passive: true });
}

/* ===== CAROUSEL GALERI ===== */
let activeGallery = 0;
function showGallerySlide(index) {
  const slides = $$('.gallery-slide', $('#gallerySlides'));
  if (!slides.length) return;
  activeGallery = (index + GALLERY.length) % GALLERY.length;
  slides.forEach((slide, i) => {
    const active = i === activeGallery;
    slide.hidden = !active;
    slide.classList.toggle('is-active', active);
  });
  $$('.gallery-thumbnail', $('#galleryCarouselView')).forEach((thumb, i) => {
    if (i === activeGallery) thumb.setAttribute('aria-current', 'true');
    else thumb.removeAttribute('aria-current');
  });
  $('#galleryCounter').textContent = `${String(activeGallery + 1).padStart(2, '0')} / ${String(GALLERY.length).padStart(2, '0')}`;
  $('#galleryProgress').style.width = `${((activeGallery + 1) / GALLERY.length) * 100}%`;
}

function moveGallerySlide(index) {
  showGallerySlide(index);
}

function initGalleryCarousel() {
  const carousel = $('#galleryCarouselView'), stage = $('#gallerySlides');
  if (!carousel || !stage) return;
  $('.gallery-previous', carousel).onclick = () => moveGallerySlide(activeGallery - 1);
  $('.gallery-next', carousel).onclick = () => moveGallerySlide(activeGallery + 1);
  $('.gallery-thumbnails', carousel).onclick = e => {
    const thumb = e.target.closest('[data-gallery-index]');
    if (thumb) moveGallerySlide(Number(thumb.dataset.galleryIndex));
  };
  carousel.addEventListener('keydown', e => {
    if (e.altKey || e.ctrlKey || e.metaKey || e.target.closest('button,a,summary,input,select,textarea')) return;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault();
      moveGallerySlide(activeGallery + (e.key === 'ArrowRight' ? 1 : -1));
    }
  });
  let touchStart;
  stage.addEventListener('touchstart', e => {
    if (e.touches.length === 1) touchStart = [e.touches[0].clientX, e.touches[0].clientY];
  }, { passive: true });
  stage.addEventListener('touchend', e => {
    if (!touchStart || !e.changedTouches.length) return;
    const dx = e.changedTouches[0].clientX - touchStart[0];
    const dy = e.changedTouches[0].clientY - touchStart[1];
    touchStart = null;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.2) moveGallerySlide(activeGallery + (dx < 0 ? 1 : -1));
  }, { passive: true });
  showGallerySlide(activeGallery);
}

/* ===== BAHASA ===== */
let curLang = 'id';
function setLang(l) {
  curLang = l;
  $$('[data-i18n]').forEach(e => {
    e.dataset.id ??= e.textContent;
    e.textContent = l !== 'id' && L[l]?.[e.dataset.i18n] ? L[l][e.dataset.i18n] : e.dataset.id;
  });
  $$('[data-ph]').forEach(e => {
    e.dataset.phid ??= e.placeholder;
    e.placeholder = l !== 'id' && L[l]?.[e.dataset.ph] ? L[l][e.dataset.ph] : e.dataset.phid;
  });
  const first = $('#fSvc option[value=""]');
  if (first) first.textContent = l !== 'id' && L[l]?.f_choose ? L[l].f_choose : '-- Pilih Layanan --';
  document.documentElement.lang = l === 'zh' ? 'zh-Hans' : l;
  try { localStorage.setItem('lang', l); } catch (e) {}
}

/* ===== INTERAKSI ===== */
function init() {
  render(); initHomeServiceCarousel(); initServiceCarousel(); initGalleryCarousel(); route(); addEventListener('hashchange', route); addEventListener('popstate', route);

  const burger = $('.burger');
  burger.onclick = () => { const o = $('#nav').classList.toggle('open'); burger.setAttribute('aria-expanded', o); };

  const wb = $('#wafBtn');
  wb.onclick = () => { const l = $('#wafList'); l.hidden = !l.hidden; wb.setAttribute('aria-expanded', !l.hidden); };

  // tab galeri (klik + panah keyboard)
  const tabs = $$('[role=tab]');
  const pick = t => tabs.forEach(x => {
    const on = x === t;
    x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1;
    $('#' + x.getAttribute('aria-controls')).hidden = !on;
    if (on) x.focus();
  });
  tabs.forEach((t, i) => {
    t.onclick = () => pick(t);
    t.onkeydown = e => { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') pick(tabs[(i + 1) % tabs.length]); };
  });

  // lightbox
  const lb = $('#lb');
  $('#galleryCarousel').onclick = e => {
    const b = e.target.closest('[data-gallery-open]'); if (!b) return;
    const g = GALLERY[Number(b.dataset.galleryOpen)];
    $('#lbc').innerHTML = `<img src="${g.s}" alt="${esc(g.a)}"><p>${esc(g.c)}</p>`;
    lb.showModal();
  };
  $('.x', lb).onclick = () => lb.close();
  lb.onclick = e => { if (e.target === lb) lb.close(); };

  initHeroTypewriter(); initOffer(); initContact(); fillMaps(); initReveal();

  const saved = (() => { try { return localStorage.getItem('lang'); } catch (e) { return null; } })() || 'id';
  $('#lang').value = saved; setLang(saved);
  $('#lang').onchange = e => setLang(e.target.value);
}

/* ===== HERO SEARCH TEXT ===== */
function initHeroTypewriter() {
  const text = $('.hero-typewriter');
  if (!text) return;
  const chars = Array.from(HERO_TAGLINE);
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0, deleting = false, timer;
  const type = () => {
    if (!deleting) {
      index = Math.min(index + 1, chars.length);
      text.textContent = chars.slice(0, index).join('');
      if (index === chars.length) {
        deleting = true;
        timer = setTimeout(type, 1800);
        return;
      }
    } else {
      index = Math.max(index - 1, 0);
      text.textContent = chars.slice(0, index).join('');
      if (index === 0) {
        deleting = false;
        timer = setTimeout(type, 450);
        return;
      }
    }
    timer = setTimeout(type, deleting ? 38 : 78);
  };
  const syncMotion = () => {
    clearTimeout(timer);
    if (motion.matches) {
      index = chars.length;
      text.textContent = HERO_TAGLINE;
      return;
    }
    index = 0;
    deleting = false;
    text.textContent = '';
    type();
  };
  syncMotion();
  motion.addEventListener('change', syncMotion);
}

/* ===== GOOGLE MAPS ===== */
function fillMaps() {
  $$('[data-map]').forEach(m => m.innerHTML = `<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>
    <div><h3>Kantor ${esc(C.name)}</h3><p>${esc(C.addr)}. Lihat rute dan petunjuk arah di Google Maps.</p>
    <a class="btn navy" href="${MAPS_URL}" target="_blank" rel="noopener">Buka di Google Maps</a></div>`);
}

/* ===== CAPTCHA "Saya bukan robot" (tampilan saja, lihat README) ===== */
function initCaptcha(cb) {
  cb.onclick = () => {
    if (cb.classList.contains('ok') || cb.classList.contains('load')) return;
    cb.classList.add('load');
    setTimeout(() => { cb.classList.replace('load', 'ok'); cb.setAttribute('aria-checked', 'true'); }, 800);
  };
  return {
    ok: () => cb.classList.contains('ok'),
    reset: () => { cb.className = 'cap-box'; cb.setAttribute('aria-checked', 'false'); }
  };
}

/* ===== FORMULIR HALAMAN KONTAK (Apply Form) ===== */
function initContact() {
  const f = $('#contactForm'); if (!f) return;
  const ta = $('#cMsg'), wc = $('#cWc'), out = $('#cMsgOut'), cap = initCaptcha($('#cCap'));
  const MAXW = 200, words = s => (s.trim().match(/\S+/g) || []).length;
  const count = () => { const n = words(ta.value); wc.textContent = `${n} / ${MAXW} kata`; wc.classList.toggle('over', n > MAXW); return n; };
  const say = (t, c) => { out.textContent = t; out.style.color = c || 'inherit'; };
  ta.addEventListener('input', count);
  f.onsubmit = async e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(f));
    if (d.website) return; // honeypot
    let ok = true;
    ['nama', 'email', 'telp', 'layanan'].forEach(k => {
      const el = f.elements[k], bad = !String(d[k]).trim() || (k === 'email' && !/^\S+@\S+\.\S+$/.test(d[k]));
      el.classList.toggle('err', bad); if (bad) ok = false;
    });
    if (!ok) { say('Lengkapi nama, email, nomor telepon, dan pilihan layanan dengan benar.', '#c62828'); return; }
    if (count() > MAXW) { ta.classList.add('err'); say(`Pesan maksimal ${MAXW} kata.`, '#c62828'); ta.focus(); return; }
    ta.classList.remove('err');
    if (!cap.ok()) { say('Centang "Saya bukan robot" terlebih dahulu.', '#c62828'); $('#cCap').focus(); return; }
    const svc = SERVICES.find(s => s.id === d.layanan)?.t || '-';
    const text = `Nama: ${d.nama}\nEmail: ${d.email}\nTelepon: ${d.telp}\nLayanan: ${svc}\n\n${d.pesan || '-'}`;
    say('Mengirim...');
    if (C.formEndpoint) {
      try {
        const r = await fetch(C.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ ...d, layanan: svc, to: C.mail.join(',') }) });
        if (!r.ok) throw 0;
        say('Pesan terkirim. Tim kami akan menghubungi Anda.', '#1b7a3a');
        f.reset(); cap.reset(); count(); return;
      } catch (_) { say('Gagal mengirim. Coba lagi, atau hubungi kami lewat WhatsApp.', '#c62828'); return; }
    }
    location.href = `mailto:${C.bizMail}?subject=${encodeURIComponent('Permintaan layanan: ' + svc)}&body=${encodeURIComponent(text)}`;
    say('Membuka aplikasi email Anda. Tekan kirim di aplikasi email untuk menyelesaikan.', '#1b7a3a');
  };
}

/* ===== POPUP GET OFFER ===== */
function initOffer() {
  const dlg = $('#offer'), f = $('#offerForm'), cb = $('#capBox');
  document.addEventListener('click', e => {
    const o = e.target.closest('[data-offer]'); if (!o) return;
    e.preventDefault();
    $('#nav').classList.remove('open');
    if (o.dataset.svc) $('#fSvc').value = o.dataset.svc;
    dlg.showModal();
  });
  $('.x2', dlg).onclick = () => dlg.close();
  dlg.onclick = e => { if (e.target === dlg) dlg.close(); };
  const cap = initCaptcha(cb);
  f.onsubmit = async e => {
    e.preventDefault();
    const msg = $('#oMsg'), d = Object.fromEntries(new FormData(f));
    if (d.website) return; // honeypot
    let ok = true;
    ['layanan', 'asal', 'tujuan', 'berat', 'nama', 'telp', 'email'].forEach(k => {
      const el = f.elements[k], bad = !String(d[k]).trim() || (k === 'email' && !/^\S+@\S+\.\S+$/.test(d[k]));
      el.classList.toggle('err', bad); if (bad) ok = false;
    });
    msg.style.color = '#c62828';
    if (!ok) { msg.textContent = 'Lengkapi kolom wajib dengan benar (layanan, asal, tujuan, berat, nama, telepon, email).'; return; }
    if (!cap.ok()) { msg.textContent = 'Centang "Saya bukan robot" terlebih dahulu.'; cb.focus(); return; }
    const svc = SERVICES.find(s => s.id === d.layanan)?.t || '-';
    const dim = [d.p, d.l, d.t].every(Boolean) ? `${d.p} x ${d.l} x ${d.t} cm` : '-';
    const text = `Halo ${C.name}, saya ingin minta penawaran.\nLayanan: ${svc}\nAsal: ${d.asal}\nTujuan: ${d.tujuan}\nBerat kotor: ${d.berat} kg\nDimensi: ${dim}\n\nNama: ${d.nama}\nEmail: ${d.email}\nTelepon: ${d.telp}\nPesan: ${d.pesan || '-'}`;
    msg.style.color = 'inherit'; msg.textContent = 'Mengirim...';
    if (C.formEndpoint) {
      try {
        const r = await fetch(C.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ ...d, layanan: svc, dimensi: dim, to: C.mail.join(',') }) });
        if (!r.ok) throw 0;
        msg.style.color = '#1b7a3a'; msg.textContent = 'Permintaan terkirim. Tim kami akan menghubungi Anda.';
        f.reset(); cap.reset(); return;
      } catch (_) { msg.style.color = '#c62828'; msg.textContent = 'Gagal mengirim. Coba lagi, atau kirim lewat WhatsApp.'; return; }
    }
    window.open(waLink(C.wa[0].u, text), '_blank', 'noopener');
    msg.textContent = 'Membuka WhatsApp dengan isi permintaan Anda. Tekan kirim di WhatsApp untuk menyelesaikan.';
  };
}

/* ===== ANIMASI SCROLL (lembut) ===== */
function initReveal() {
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }), { threshold: 0.12 });
  $$('.strip p,.flow li,.vals p,.vm,.card-c,.mapcard,.clients div,.svc-d').forEach(e => { e.classList.add('rv'); io.observe(e); });
}

init();

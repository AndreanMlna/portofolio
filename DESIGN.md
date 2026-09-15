---
name: Qronos Cyber Telemetry
colors:
  surface: '#08080c'
  surface-dim: '#000000'
  surface-bright: '#161822'
  surface-container-lowest: '#000000'
  surface-container-low: '#050508'
  surface-container: '#0e0f15'
  surface-container-high: '#161822'
  surface-container-highest: '#1f212e'
  on-surface: '#f1f5f9'
  on-surface-variant: '#9da3b8'
  inverse-surface: '#f1f5f9'
  inverse-on-surface: '#08080c'
  outline: '#1f212e'
  outline-variant: 'rgba(255, 255, 255, 0.12)'
  surface-tint: '#00f0ff'
  primary: '#ffffff'
  on-primary: '#000000'
  primary-container: '#00f0ff'
  on-primary-container: '#00363a'
  inverse-primary: '#006970'
  secondary: '#8b5cf6'
  on-secondary: '#ffffff'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#10b981'
  on-tertiary: '#ffffff'
  tertiary-container: '#006d4a'
  on-tertiary-container: '#d8ffe7'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffffff'
  primary-fixed-dim: '#e2e8f0'
  on-primary-fixed: '#000000'
  on-primary-fixed-variant: '#1e293b'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#000000'
  on-background: '#f1f5f9'
  surface-variant: '#0e0f15'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.05'
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 38px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-telemetry:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.08em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: '0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 1.25rem
  gutter-lg: 1.75rem
  margin: 1.25rem
  margin-md: 2rem
  margin-lg: 4rem
  container-padding: 64px
  section-gap: 120px
  card-internal: 32px
---

# Design System: Qronos Cyber Telemetry (Dark Luxury AI Portfolio)

## 1. Brand Identity & Design Philosophy
Sistem desain ini diadaptasi 1:1 dari estetika **Qronos (21st.dev)** dan dirancang khusus untuk portofolio teknik **Andrian Maulana — AI & ML Engineer | Fullstack Developer | UI/UX Designer**. 

Filosofi utamanya mengedepankan **High-Contrast Dark Luxury**, **Technical Instrumentation**, dan **Cyber-Telemetry**:
- **Pure Void Baseline (`#000000`)**: Kanvas hitam mutlak OLED tanpa abu-abu kusam, memberikan kontras matematis sempurna bagi teks berkilau dan garis laser.
- **Architectural Framing & Crosshair Geometry**: Garis pembatas vertikal ganda di sisi kiri dan kanan layar (`border-l border-r border-white/12`) dengan reticle koordinat crosshair (`+`) di sudut-sudut persimpangan section.
- **Atmospheric 3D Depth**: Kanvas interaktif Three.js partikel vorteks / wireframe hourglass yang memusat di titik gravitasi tengah dan menyebar ke lantai visual.
- **Strict Anti-UI-Slop Compliance**: Seluruh data, telemetri, dan diagram menampilkan bukti karya nyata (Thesis Agentic RAG dengan MiniLM, akurasi CNN Aksara Jawa 98.4%, sertifikat resmi Bank Indonesia DIGDAYA 2026, Sembako-Chain AI, GoodevaDesk). Dilarang keras menggunakan teks placeholder latin atau metrik fiktif.

---

## 2. Color Palette & Atmospheric Light

Cahaya diperlakukan sebagai pemancar aktif (luminescence), bukan sekadar bidang warna datar.

### Core Foundation
- **Canvas Absolute**: `#000000` (OLED black void)
- **Surface Tier 1**: `#050508` (bidang konsol terminal, editor kode)
- **Surface Tier 2**: `#0E0F15` (kartu bento utama, panggung interaktif)
- **Surface Tier 3**: `#161822` (status hover, tab aktif, modul kartu fokus)
- **Hairline Borders**: `rgba(255, 255, 255, 0.12)` pada kondisi diam, berpendar sian atau violet saat di-hover.

### Telemetry Accents
- **Electric Cyan (`#00F0FF`)**: Status aktif utama, garis aliran pipa eksekusi AI, ring fokus laser, dan badge live pulse.
- **Quantum Violet (`#8B5CF6`)**: Aura sekunder, gradient kedalaman atmosfer, dan simpul routing jaringan saraf.
- **Terminal Emerald (`#10B981`)**: Indikator ketersediaan kerja, badge sertifikasi terverifikasi, dan telemetri zero-error.
- **Metallic White-to-Zinc**: Tipografi judul utama menggunakan gradient vertikal dari putih kristal (`#FFFFFF`) ke abu-abu perak logam (`#A1A1AA`).

---

## 3. Typographic Hierarchy

Kombinasi tiga font yang dirancang untuk menciptakan ketegasan geometris, keterbacaan tinggi, dan presisi instrumen kode:

1. **Display & Headings — Space Grotesk**
   - Karakter futuristik, geometris, dengan letter-spacing ketat (`-0.03em` s.d. `-0.04em`).
   - Ukuran hero masif (`64px` desktop / `38px` mobile) dengan teknik background-clip gradient metalik.
2. **Body & Case Studies — Inter**
   - Tingkat keterbacaan tinggi di atas latar gelap pekat dengan jarak baris lapang (`line-height: 1.6`).
   - Warna teks sekunder `#9DA3B8` memenuhi standar aksesibilitas kontras WCAG AAA.
3. **Telemetry & Metadata — JetBrains Mono**
   - Khusus koordinat node pipeline, latensi (`24ms`), akurasi model (`98.4%`), nomor sertifikat, dan blok kode live.
   - Menggunakan huruf kapital penuh dengan letter-spacing renggang (`+0.08em`) untuk `label-telemetry`.

---

## 4. Layout Architecture & Structural Framing

- **Max Width Container**: `1344px` rata tengah dengan gutter responsif.
- **Vertical Hairline Guides**: Garis pandu vertikal kiri & kanan (`border-white/12`) yang membentang tanpa putus dari header hingga footer.
- **Corner Reticles (`+`)**: Penanda crosshair presisi mekanis di setiap titik temu batas section.
- **Bento Grid System**: Grid 12 kolom dinamis dengan jeda antar-section lapang (`120px+`) untuk ritme spasial mewah dan bebas dari kepadatan visual berlebih.

---

## 5. Component Specifications

### 5.1. Floating Island Header
- Navbar berbentuk kapsul melayang (pill) yang terlepas dari batas atas layar dengan latar transparan kaca (`backdrop-blur-md bg-black/60`).
- Logo: Ikon sirkuit geometris + teks `ANDRIAN MAULANA` berjarak lebar, disertai radar dot hijau berdenyut (`AVAILABLE FOR ROLES`).
- Tombol CTA Kanan: Pill gelap dengan efek animasi bintang bersinar pada garis tepi (`GET IN TOUCH >>`).

### 5.2. Luminous Pill Buttons & Nested Architecture
- **Primary Action (Button-in-Button)**: Pill putih berbobot kontras tinggi (`#FFFFFF`) dengan teks hitam pekat tebal (`#000000`), atau pill obsidian dengan garis tepi berpendar neon (`border border-white/20 hover:border-cyan-400`).
- **Trailing Nested Capsule**: Ikon panah (`>>` atau `↗`) diletakkan di dalam kapsul bulat khusus (`w-7 h-7 rounded-full bg-white/10 flex items-center justify-center`).
- **Ghost Action**: Pill kaca transparan dengan border halus `1px` berwarna `#1F212E` dan teks putih dingin.

### 5.3. Double-Bezel Containers (Doppelrand Architecture)
Menghindari shadow bayangan konvensional, digantikan dengan struktur bezel ganda berpresisi mesin:
- **Outer Frame**: Stroke tembus pandang 1px `rgba(255, 255, 255, 0.08)` dengan padding `p-1.5` hingga `p-2` dan sudut melengkung luar `rounded-2xl` (16px).
- **Inner Core**: Permukaan dasar `#0E0F15` dengan highlight interior halus `inset 0 1px 1px rgba(255, 255, 255, 0.15)` dan radius konsentris `rounded-xl` (12px).

### 5.4. Live Architecture Visualizer & Pipeline Traces
- Konsol bento interaktif dengan 3 titik jendela macOS dan sidebar status (`Active Systems`, `Run History`, `Telemetry Pulse`, `Vector Store`).
- Diagram simpul data real:
  1. *Document Ingestion* (SentencePiece / MiniLM-L6-v2, 8ms)
  2. *HNSW Vector Search* (Cosine Sim: 0.942, Top-k: 5)
  3. *Autonomous ReAct Multi-step Reasoning Loop* (18ms)
  4. *Grounded Synthesis* (98.6% Faithfulness, 0.0% Hallucination)

### 5.5. Monochrome Tech Marquee
- Running text ticker horizontal berisi logo monokrom minimalis: *PyTorch, Next.js 16, Python, Google Gemini AI, PostgreSQL, Docker, React 19, Supabase, Redis, Tailwind CSS, Tableau, NestJS*.

### 5.6. Verified Credential Cards
- Modul akreditasi resmi yang memvalidasi sertifikat Anda:
  - **Essential Training Program DIGDAYA X HACKATHON 2026** (No: `0761/PLT2260383/ESSENTIAL/2026`, Bank Indonesia & LPPI).
  - **Practitioner Training Program Digdaya x Hackathon 2026** (No: `2183/PLT2260383/PRACTITIONER/2026`, Bank Indonesia & LPPI).
  - **Machine Learning & Cloud Tracks** (Dicoding Indonesia).

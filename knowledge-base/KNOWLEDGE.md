# KNOWLEDGE BASE - Tüm Araştırmalar ve Öğrenilenler

> Bu dosya projede yapılan tüm araştırmaları, öğrenilenleri ve referansları kalıcı olarak saklar.
> Her yeni araştırma bu dosyaya eklenir. Tarih sırasına göre düzenlenmiştir.

---

## RESEARCH LOG - Tüm Araştırmalar ve Öğrenilenler

---

### 1. Instagram Reel Analizi (2026-04-05)

**Kaynak:** https://www.instagram.com/reel/DV7KyD2jSWC/
**Oluşturan:** @marcelodesignxh (Marcelo Cedeno)
**Konu:** "Cheap websites vs Premium websites"
**Etkileşim:** 2,996 beğeni, 92 yorum
**Hashtag'ler:** #figma #websites #webdesign #3Dwebsites

#### Thumbnail Analizi - Premium Site Özellikleri

Reel thumbnail'inde görülen premium web sitesi tasarım özellikleri:

| Özellik | Detay |
|---------|-------|
| **3D Play Butonu** | Derinlik hissi veren, gölge efektli play butonu |
| **Profil Resmi** | Yuvarlak çerçeve + 3D etki, gerçekçi gölge ve highlight |
| **Gradient Arka Plan** | Pembe-turuncu gradient gökyüzü, organik renk geçişi |
| **Renk Paleti** | Koyu gri + beyaz + altın tonları kombinasyonu |
| **Navigasyon** | İkonlar + text combined (ikili navigasyon sistemi) |
| **Atmosfer** | Bulut arka planı - estetik, ilham verici, premium his |
| **Layout** | Simetrik, dengeli, görsel hiyerarşi net |

#### Önemli Çıkarımlar

- Premium web sitelerinde **3D efektler** standart hale geliyor
- **Gradient mesh** arka planlar flat düz renklerin yerini alıyor
- **Renk paleti** seçimi marka kimliğinin en önemli unsuru
- **İkon + text** combined navigation UX açısından en iyi yaklaşım
- **Atmosferik arka planlar** (bulut, nebula, gradient) kullanıcıda duygusal etki yaratıyor

---

### 2. 2025-2026 Premium Web Tasarım Trendleri

**Kaynaklar:** Awwwards, Lovable.dev, Damien Kloot, Digidop, Pixlogix, Figma Community

#### 2.1 Immersive 3D Elements (Three.js)
- Three.js ile oluşturulan 3D sahneler artık premium sitelerin standartı
- `@react-three/fiber` ve `@react-three/drei` ile React ekosisteminde kolay entegrasyon
- Particle sistemleri, 3D modeller, interaktif sahneler
- WebGL rendering performansı kritik (lazy loading zorunlu)
- **Örnek teknikler:** Crystal (MeshTransmissionMaterial), orbiting objects, stars background

#### 2.2 Glassmorphism 2.0
- İlk nesil glassmorphism'den farklı olarak daha rafine
- Cam efekt + gradient + blur + border-light kombinasyonu
- CSS: `backdrop-filter: blur()`, `background: rgba()` + gradient overlay
- Noise/grain texture eklenerek gerçekçi cam hissi verilir
- **Uygulama:** Navbar, card'lar, modal'lar, floating element'ler

#### 2.3 Kinetic Typography (Animasyonlu Metin)
- Metinlerin scroll ile hareket etmesi, parçalanması, yeniden birleşmesi
- `GSAP SplitText` veya `framer-motion` ile text splitting
- Hero section'larda branding etkisi yaratır
- Character-by-character, word-by-word animasyonları
- **Teknik:** `SplitText`, `TextSplit` component'leri, staggered animation

#### 2.4 Scroll-Triggered Animations (GSAP ScrollTrigger)
- Scroll pozisyonuna bağlı animasyon tetikleme
- GSAP ScrollTrigger endüstri standardı
- Parallax, reveal, fade-in, scale, rotate efektleri
- Scroll position → animation progress mapping
- **Alternatif:** Framer Motion `whileInView`, Intersection Observer API

#### 2.5 Micro-Interactions
- Buton hover efektleri (scale, glow, color shift)
- Cursor tracking (mouse takip eden element'ler)
- Input focus animasyonları
- Card tilt efektleri (3D perspective)
- Magnetic buttons (mouse'a çekilen butonlar)
- **Performans:** CSS transitions + transforms (GPU accelerated)

#### 2.6 Dark Mode + Neon/Gold Accents
- Koyu arka planlar (#0A0A0F, #0F0F1A gibi derin tonlar)
- Neon renk vurgular (rose, purple, cyan)
- Altın/gold accent'ler (lüx his)
- Yüksek kontrast oranı (accessibility)
- Gradient accent renkleri

#### 2.7 Organic Layouts
- Kutu temelli (box-based) layout'lardan organik layout'lara geçiş
- Blob shapes, wavy dividers, asymmetric grid'ler
- CSS clip-path, SVG shapes
- Masonry grid, bento grid
- Free-form positioning

#### 2.8 AI-Powered Personalization
- Kullanıcı davranışına göre dinamik içerik
- AI ile görsel üretimi (stabilized diffusion, DALL-E)
- Chatbot entegrasyonu
- Dinamik renk/tema değişimi
- Content recommendation

#### 2.9 Bold Minimalism
- Az ama etkili element kullanımı
- Büyük tipografi, bol boşluk
- Limitli renk paleti (2-3 ana renk)
- Her pikselin amacı var
- "Less is more" ama premium his

#### 2.10 Parallax Depth (Çok Katmanlı)
- Çoklu depth layer'lar ile 3D derinlik hissi
- Foreground, midground, background katmanları
- Mouse tracking parallax
- Scroll-based parallax
- Perspective CSS property kullanımı

---

### 3. Awwwards Kazanan Animasyon Teknikleri

**Kaynak:** Awwwards.com Site of the Day kazananları analizi

#### 3.1 Scroll Tracking & Smooth Scrolling
- **Lenis** veya **GSAP ScrollSmoother** ile smooth scroll
- Native scroll davranışını override etme
- Scroll position-based animasyonlar
- Scroll speed measurement ve adaptive effects
- **Not:** Mobilde performans kritik, touch event handling önemli

#### 3.2 Text-Splitting Animation
- Metni karakter/word bazında parçalama
- Scroll ile reveal animasyonu
- Staggered entrance (her karakter sırayla)
- Direction-aware animation (yukarıdan/aşağıdan/sağdan/soldan)
- Mask/clip efektleri ile birleşim

#### 3.3 Micro-Animations
- Button hover states (scale, glow, shadow, color)
- Link underline animations
- Card hover effects (lift, tilt, shine)
- Loading state'ler
- Page transition animasyonları
- Form element animations

#### 3.4 GSAP + ScrollTrigger
- Endüstri standardı scroll animasyon kütüphanesi
- Timeline-based animation sequencing
- Pin, scrub, snap fonksiyonları
- Scroll progress → animation mapping
- Batch animation support

#### 3.5 Custom Cursor Effects
- Özel cursor tasarımı (dot + circle, text cursor)
- Cursor state değişimleri (hover, click, drag)
- Cursor following elements
- Magnetic cursor (element'lere çekilme)
- **Uygulama:** CSS `cursor: none` + custom div

#### 3.6 Magnetic Buttons
- Mouse pozisyonuna göre buton konumunun hafif kayması
- `mousemove` event listener ile `requestAnimationFrame`
- Buton merkezinden uzaklık hesaplama
- Smooth easing ile return to original position
- **Kütüphane:** Özel implementation veya `magnetic-btn` paket

#### 3.7 Noise & Grain Overlay
- Film texture efekti
- SVG `<feTurbulence>` filter veya CSS `background-image`
- Opacity: 0.03-0.08 (subtle)
- Pattern repeat ile tüm sayfaya kaplama
- Vintage/premium his yaratır
- **Performans:** CSS filter tercih edilir (GPU accelerated)

---

### 4. Cheap vs Premium Website Farkları

#### 4.1 Premium Web Sitesi Özellikleri

| Kategori | Premium Özellikler |
|----------|-------------------|
| **Efektler** | 3D efektler, parallax depth, micro-interactions |
| **Renk** | Özel renk paleti, gradient mesh, accent renkler |
| **Arka Plan** | Gradient mesh, noise texture, atmosferik |
| **Tipografi** | Modern/custom font'lar, kinetic typography |
| **Scroll** | Smooth scroll, scroll-triggered animations |
| **Layout** | Organik, asymmetric, bento/masonry grid |
| **Kartlar** | 3D tilt, glassmorphism, reveal on hover |
| **Butonlar** | Magnetic effect, glow, shimmer |
| **Navigasyon** | Glassmorphic, scroll-aware, custom cursor |
| **Görseller** | AI-generated, parallax, Ken Burns effect |
| **Texture** | Noise/grain overlay, blur, gradient overlay |
| **Cursor** | Custom cursor, state değişimleri |

#### 4.2 Cheap (Temel) Web Sitesi Özellikleri

| Kategori | Cheap Özellikler |
|----------|-----------------|
| **Efektler** | Flat tasarım, minimal/hiç animasyon |
| **Renk** | Standart renkler, düz beyaz/siyah |
| **Arka Plan** | Düz renk, basit gradient |
| **Tipografi** | Sistem fontları, standart boyutlar |
| **Scroll** | Native scroll, hiç trigger yok |
| **Layout** | Kutu layout, simetrik grid |
| **Kartlar** | Flat card'lar, basit hover |
| **Butonlar** | Standart button, basit hover |
| **Navigasyon** | Standard navbar, sabit |
| **Görseller** | Stock fotoğraflar, statik |
| **Texture** | Hiç texture yok |
| **Cursor** | Varsayılan browser cursor |

#### 4.3 Karar Matrisi - Premium'a Geçiş Checklist

- [ ] 3D element veya Three.js sahne eklendi mi?
- [ ] Glassmorphism efektleri var mı?
- [ ] Custom renk paleti oluşturuldu mu?
- [ ] Smooth scroll implement edildi mi?
- [ ] Scroll-triggered animasyonlar var mı?
- [ ] Kinetic typography kullanılıyor mu?
- [ ] Micro-interactions (hover, click) var mı?
- [ ] Noise/grain texture overlay var mı?
- [ ] Custom cursor tasarımı var mı?
- [ ] Magnetic button efekti var mı?
- [ ] Parallax depth layer'lar var mı?
- [ ] Gradient mesh arka plan var mı?

---

### 5. Kullanılan Teknoloji Stack

#### 5.1 Core Framework
| Teknoloji | Sürüm | Kullanım Amacı |
|-----------|-------|----------------|
| **Next.js** | 16 | React framework, App Router, SSR/SSG |
| **TypeScript** | 5 | Tip güvenliği, geliştirici deneyimi |
| **Tailwind CSS** | 4 | Utility-first CSS, design tokens |
| **shadcn/ui** | latest | Accessible UI component library |

#### 5.2 3D & Animasyon
| Teknoloji | Kullanım Amacı |
|-----------|----------------|
| **@react-three/fiber** | React renderer for Three.js |
| **@react-three/drei** | Three.js helpers & abstractions (Stars, Trail, MeshTransmissionMaterial, Float, etc.) |
| **Framer Motion** | Page transitions, scroll animations, gesture handling |
| **GSAP** | Advanced timeline animations (opsiyonel) |
| **Three.js** | WebGL 3D rendering engine |

#### 5.3 State Management & Data
| Teknoloji | Kullanım Amacı |
|-----------|----------------|
| **Zustand** | Lightweight state management (dil toggling, UI state) |
| **Prisma** | Type-safe ORM, database schema & queries |

#### 5.4 AI & Tools
| Teknoloji | Kullanım Amacı |
|-----------|----------------|
| **z-ai-web-dev-sdk** | AI-powered skills (web search, image generation, TTS, VLM) |
| **Figma** | UI/UX tasarım, prototipleme |

#### 5.5 CSS Design System (globals.css)
- Dark luxury color palette: `#0A0A0F`, `#C8506F`, `#D4A574`, `#F5E6D3`
- 20+ CSS keyframe animations
- Glassmorphism utility classes
- Gradient text utilities
- 3D perspective utilities
- Noise texture overlay
- Custom scrollbar styling
- Stagger children animation system

---

### 6. Marcelo Design X Referansları

**Tasarımcı:** Marcelo Cedeno (@marcelodesignxh / @marcelodesignx)
**Uzmanlık:** Premium web tasarım, Figma, 3D web experiences

#### 6.1 Platformlar
| Platform | Handle | İstatistik |
|----------|--------|------------|
| **Instagram** | @marcelodesignxh | Reel: 2,996+ beğeni |
| **TikTok** | @marcelodesignx | 761M+ total views |
| **YouTube** | Marcelo Design X | "Do you prefer cheap or premium websites?" |
| **Figma** | Community files | 3D prototipleme |

#### 6.2 Tasarım Konseptleri
- **"Sexy website"** tasarım yaklaşımı: Premium, göz alıcı, unutulmaz
- **Cheap vs Premium** karşılaştırma serisi: Farkı görsel olarak gösterme
- **3D Figma prototipleme**: Figma'da 3D efektli prototipler oluşturma
- **Gradient mesh arka planlar**: Atmosferik, derinlik hissi veren arka planlar
- **Renk paleti mastery**: Her marka için özelleştirilmiş renk sistemi

#### 6.3 Öğrenilen Dersler
1. **İlk izlenim her şeydir** - Thumbnail ve hero section kalitesi dönüşümü doğrudan etkiler
2. **3D efekt = premium his** - Kullanıcılar 3D element'leri otomatik olarak premium olarak algılar
3. **Gradient mesh = modern** - Düz renkler "cheap" hissi yaratır, gradient mesh "premium"
4. **Detay fark yaratır** - Micro-interactions, custom cursor, noise texture toplamda büyük fark
5. **Renk psikolojisi** - Renk paleti seçimi marka algısını belirler
6. **Figma → Code pipeline** - Figma'da 3D prototipleme, ardından koda dönüştürme

---

### 7. Proje Özellikleri - Melek Yüksel Hair Beauty

#### 7.1 Mimari
- Next.js 16 App Router yapısı
- 8 ana bölüm: Navbar, Hero, About, Services, Gallery, Booking, Contact, Footer
- FloatingButtons (WhatsApp, Phone, Scroll-to-top)
- Scene3D (Three.js 3D arka plan)
- TR/EN çift dil desteği (Zustand store)

#### 7.2 Doğruluk Sistemi
- `%100 Doğruluk Döngüsü`: 10 kriter x 10 puan = 100 puan
- Otomatik doğrulama script'i: `scripts/verify.sh`
- Her task sonrası doğrulama zorunlu

#### 7.3 Tasarım Kararları
| Karar | Seçim | Neden |
|-------|-------|-------|
| Tema | Dark luxury | Premium his, lüks salon kimliği |
| Primary accent | Rose (#C8506F) | Kadın güzellik sektörü |
| Secondary accent | Gold (#D4A574) | Lüks, prestij |
| Background | Deep dark (#0A0A0F) | Kontrast, immersiveness |
| Animasyon | Scroll-triggered | Kullanıcı etkileşimi |
| 3D | Particle + Crystal + Rings | Görsel zenginlik |
| Layout | Asymmetric, organic | Modern, premium |

---

### 8. CLAUDE.md Mega-Prompt Sistemi

#### 8.1 Versiyon Geçmişi
| Versiyon | Tarih | Değişiklikler |
|----------|-------|---------------|
| **v1.0** | Başlangıç | Temel prompt, sektör yönergeleri |
| **v2.0** | Task 2 | Web araştırması, 7 sektör sistemi, Three.js referansları, Awwwards checklist |
| **v3.0** | Task 3 | %100 doğruluk döngüsü, tam otomatik tema, performans sistemi, repo yönetimi, 10 sektör |

#### 8.2 Çalışma Döngüsü (7 Adım)
1. **Araştır** - web_search + page_reader ile trend analizi
2. **Planla** - Renk paleti, tipografi, layout, 3D planlaması
3. **Temizle** - Eski siteyi koruyarak yeni tema için hazırlık
4. **Kodla** - Component'leri sırayla oluştur
5. **Görsel** - AI ile görseller üret
6. **Doğrula** - %100 doğruluk kontrolü
7. **Sun** - Sonuçları raporla

#### 8.3 Sektör Bazlı Tasarım Sistemleri (10 Sektör)
1. Lüks & Premium (dark, gold accents, 3D)
2. Teknoloji & SaaS (gradient, glassmorphism, clean)
3. Restoran & Gastronomi (warm tones, food photography, parallax)
4. Emlak & Property (hero imagery, map integration, smooth scroll)
5. Sanat & Portfolio (minimal, asymmetric, typography focus)
6. Sağlık & Wellness (clean, organic, calming colors)
7. Otomotiv (dynamic, dark, 3D product viewer)
8. İnşaat & Mimarlık (blueprint aesthetic, 3D walkthrough)
9. Eğitim & Online Course (clean layout, progress tracking, video)
10. Deniz & Yachting (ocean blues, premium imagery, 3D boat viewer)

---

### 9. Performans Optimizasyon Notları

#### 9.1 Three.js Optimizasyon
- **Lazy loading:** `next/dynamic` ile Three.js component'lerini dinamik import
- **SSR disable:** `ssr: false` ile sunucu taraflı render'ı devre dışı bırak
- **Canvas settings:** `dpr={[1, 1.5]}` ile device pixel ratio sınırı
- **Geometry reuse:** Aynı geometri birden fazla mesh'te paylaşılabilir
- **dispose:** Component unmount oldığında Three.js kaynaklarını temizle

#### 9.2 CSS/Animasyon Optimizasyon
- **GPU acceleration:** `transform` ve `opacity` kullanımı (will-change)
- **Reduced motion:** `prefers-reduced-motion` media query desteği
- **CSS containment:** `contain: layout paint` ile render alanını sınırlama
- **Lazy images:** `loading="lazy"`, blur placeholder
- **Font optimization:** `next/font` ile font preloading

#### 9.3 Bundle Optimizasyon
- Tree-shaking: Kullanılmayan export'ları elemek
- Dynamic imports: Ağır kütüphaneleri chunk'lamak
- Image optimization: WebP format, responsive srcset
- Code splitting: Route bazlı code splitting

---

### 10. Araştırma Kaynakları & Referanslar

#### 10.1 Web Siteleri
- **Awwwards.com** - Premium web tasarım örnekleri, Site of the Day
- **Lovable.dev** - AI-powered web development platform
- **Digidop.com** - Web tasarım ajansı, case studies
- **Pixlogix.com** - Web tasarım trendleri ve analiz

#### 10.2 GitHub Repo'lar
- `pmndrs/react-three-fiber` - React Three.js renderer
- `pmndrs/drei` - Three.js helpers
- `framer/motion` - React animation library
- `greensock/GSAP` - Professional animation platform

#### 10.3 Tasarımcılar & İçerik Üreticileri
- **Marcelo Cedeno** (@marcelodesignx) - Premium web tasarım
- **Damien Kloot** - Web tasarım trend analizleri
- **DesignJoy** - AI-powered tasarım araçları

#### 10.4 Araçlar & Platformlar
- **Figma** - UI/UX tasarım, prototipleme, 3D
- **Three.js** - WebGL 3D rendering
- **GSAP** - Profesyonel animasyon
- **Lenis** - Smooth scrolling
- **Coolors** - Renk paleti oluşturma

---

### 11. @selahattin.unlu Instagram Reels - GitHub Repo Analizi (2026-04-06, Güncelleme: 2026-04-07)

**Kaynak:** https://www.instagram.com/selahattin.unlu
**YouTube:** Selahattin Ünlü ("Harika Github Repoları" 80+ bölüm)
**TikTok:** @selahattin_unlu
**Toplam Reel:** 103 (103 posts, 342 following)
**GitHub Repo Reels:** ~82 adet
**Derlenen Repo:** 50+ adet (detaylı liste: `knowledge-base/GITHUB_REPOS.md`)
**GitHub:** github.com/selahattinunlu (45 repos, 3 public)
**Araştırma:** 24+ web search, YouTube playlist analizi, TikTok/Instagram snippet taraması

#### Selahattin Ünlü Profil
- Full Stack Developer (2013'ten beri)
- React, Next.js, TypeScript uzmanı
- YouTube (auto-dubbed İngilizce), TikTok, Instagram aktif içerik üreticisi
- Website: selahattinunlu.com
- Kendi Projeleri: yt-music-cli, faceless-video-saas, elevens-mind-defense, cloud-code-repo

#### Ana Reel Serileri
1. **"Bu Repo Tam Sana Göre"** - Format: [Problem] → [Repo] → [3 Özellik]
2. **"Harika GitHub Repoları"** - Part 1'den Part 82+'ya kadar (YouTube auto-dubbed)
3. **"Trending GitHub Repos"** - Haftalık trending repos
4. **Claude Code İpuçları** - /simplify, /model opusplan, superpowers, opencode
5. **İşe Yarar Repolar** - Genel geliştirici araçları (8+ bölüm)

#### Öne Çıkan Repo'lar (En Çok Beğenilen)

| Repo | Reel | Beğeni | Konu |
|------|------|--------|------|
| `Donchitos/Claude-Code-Game-Studios` | Oyun geliştirme | 2,161 | Claude Code ile oyun stüdyosu |
| `msitarzewski/agency-agents` | AI agent takımı | 1,776 | 80+ uzman AI ajanı |
| `Comfy-Org/ComfyUI` | AI içerik üretimi | 1,4K+ | Görsel, video, müzik, 3D üret |
| `shadcn-ui/ui` | UI component | 9.2K+ | Button, modal, dropdown |
| `microsoft/generative-ai-for-beginners` | AI öğrenme | 105K+ stars | 21 ders, Türkçe |
| `chatwoot/chatwoot` | Müşteri destek | 475 | Self-hosted Intercom alternatifi |
| `pascalorg/editor` | 3D mimari | 883 | Açık kaynak 3D editör |
| `nocodb/nocodb` | Veritabanı arayüzü | 418 | Airtable'a açık kaynak alternatif |

#### Yeni Eklenen Repo'lar (2026-04-07 güncellemesi)
| Repo | Konu | Kaynak |
|------|------|--------|
| `anomalyco/opencode` | Claude Code'a açık kaynak alternatif | Reel |
| `HeartMuLa/heartlib` | Suno'ya açık kaynak AI müzik alternatifi | Part 37 |
| `addyosmani/web-quality-skills` | Lighthouse skorlarını yeşile dönmek için | Part 60 |
| `immich-app/immich` | Self-hosted Google Photos alternatifi | Part 79 |
| `sonic-pi-net/sonic-pi` | Kod yazarak enstrüman çal | Reel |
| `chatwoot/chatwoot` | Self-hosted müşteri destek platformu | Reel |
| `usememos/memos` | Self-hosted not alma | Reel |
| `nocodb/nocodb` | Airtable'a açık kaynak alternatif | YT İnceleme #1 |
| `gsd-build/get-shit-done` | Vibe coding için meta-prompting | YT İnceleme #2 |
| `animate-css/animate.css` | 80+ hazır CSS animasyonu | Part 33 |

#### Claude Code İpuçları (Önemli!)
```
/simplify        → Son değişiklikleri incele, 3 paralel review al, birleştir
/model opusplan  → Güçlü modeli sadece karmaşık task'lerde kullan
superpowers      → AI coding agent'lerin bağlam kaybını önle
vibe-kanban      → AI coding agent'ları paralel çalıştır, kanban ile yönet
gstack           → CEO, tasarımcı, QA, güvenlik uzmanı rollerinde çoklu ajan
opencode         → Claude Code'a para verme, açık kaynak alternatif kullan
get-shit-done    → Meta-prompting ile vibe coding'de planlı ilerle
```

---

## GÜNCELLEME GEÇMİŞİ

| Tarih | Bölüm | Değişiklik |
|-------|-------|-----------|
| 2026-04-05 | Tümü | İlk oluşturma - 10 bölüm, tüm araştırmalar |
| 2026-04-06 | Bölüm 11 | @selahattin.unlu 38 GitHub repo analizi eklendi |
| 2026-04-07 | Bölüm 11 | 50+ repo'ya güncellendi (12 yeni repo), Instagram login denemesi, 24+ web arama |
| 2026-04-08 | Bölüm 11, 12 | 54 repo'ya güncellendi (4 yeni), 37 reel URL + 35 Part eşleştirmesi, DVogwoJiVUC analizi, 40+ web arama |

---

### 12. Instagram Reel Analizi: "The Designer The Developer" (DVogwoJiVUC)

**Kaynak:** https://www.instagram.com/reel/DVogwoJiVUC
**Oluşturan:** @uxui_shrut (yako_tek) - SELAHATTIN.UNLU'YA AİT DEĞİL!
**Konu:** Premium web tasarım - "The Designer The Developer" temalı website
**Tarih:** 2026-04-08

#### Reel Analizi
- **Tema:** "The Designer The Developer" - Tasarımcı ve Geliştirici işbirliği konsepti
- **Stil:** Premium, animasyonlu, modern web sitesi
- **Özellikler:** 3D model entegrasyonu, keyframe animasyonlar, smooth scroll
- **Araçlar:** Figma'da tasarlanmış, no-code veya low-code ile canlandırılmış olabilir
- **Layout:** 1440px genişlik, "The website" başlığı, "Products", "Contact" bölümleri
- **Animasyonlar:** Keyframe-based section reveal, 3D model hover, parallax depth
- **Benzeyen Siteler:** Cortexa Global (Web Design Studio), Hanna, Nebula, BlushPink

#### Teknik Özellikler (Tahmin / Referans)
| Özellik | Detay |
|---------|-------|
| 3D Model | Hero section'da 3D obje (GLTF/GLB formatı) |
| Scroll Animation | Keyframe ile section reveal (CSS veya JS) |
| Layout | Single page, full-width sections |
| Renk | Koyu tema veya kontrastlı gradient |
| Typography | Büyük başlıklar, modern font |
| Interactivity | Hover efektleri, parallax, mouse tracking |

#### Benzer Referans Repo'lar
- `NotYuSheng/designer-vs-developer` - Animated toggle button
- `AHMAD-JX/DesignEnd-Website-Template` - Designer/developer template
- `shivas1432/Animated-DesignsP1` - 50+ curated HTML/CSS/JS animations

#### Kullanıcının İsteği
Kullanıcı bu reels'teki tarzda bir siteyi "kendi emeğimizle" oluşturmak istiyor. Bu, "tema" komutu sistemi ile gerçekleştirilebilir.

---

> **Not:** Bu dosya canlı bir dokümandır. Her yeni araştırma ve öğrenilen ders eklenmelidir.
> Güncelleme yaparken tarih ve bölüm bilgisi ekleyin.
> **Detaylı GitHub Repo Kataloğu:** `knowledge-base/GITHUB_REPOS.md`

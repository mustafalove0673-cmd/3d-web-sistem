export interface Video {
  id: number
  title: string
  description: string
  category: string
  likes: number
  comments: number
  date: string
  url?: string
  videoSrc?: string
  thumbnail: string
  repo?: string
  repoUrl?: string
  tags: string[]
  source: 'instagram' | 'uploaded'
}

export interface Category {
  name: string
  icon: string
  count: number
  color: string
}

export const categories: Category[] = [
  { name: 'Tümü', icon: '📺', count: 20, color: 'from-accent to-orange-500' },
  { name: 'Web Tasarım', icon: '🎨', count: 5, color: 'from-emerald-500 to-teal-500' },
  { name: 'Claude Code', icon: '🤖', count: 4, color: 'from-violet-500 to-purple-500' },
  { name: 'AI / ML', icon: '🧠', count: 2, color: 'from-sky-500 to-cyan-500' },
  { name: '3D / Motion', icon: '✨', count: 3, color: 'from-rose-500 to-pink-500' },
  { name: 'Best Practice', icon: '⚡', count: 4, color: 'from-amber-500 to-yellow-500' },
  { name: 'Araç & Kaynak', icon: '🔧', count: 2, color: 'from-lime-500 to-green-500' },
]

// ========================
// INSTAGRAM VIDEOS (Selahattin Unlu Reels)
// ========================
const instagramVideos: Video[] = [
  {
    id: 1,
    title: 'Kendi Developer Topluluğunu Kur',
    description: 'Forem, dev.to\'nun arkasındaki açık kaynak altyapıdır. Blog, tartışma, profil ve bildirim sistemi hazır olarak gelir. Self-hosted çalışır ve 3.8M+ kullanıcısı vardır.',
    category: 'Araç & Kaynak',
    likes: 199,
    comments: 15,
    date: '29 Mart 2026',
    url: 'https://www.instagram.com/reel/DWehR3VDLZ5/',
    thumbnail: '',
    repo: 'forem/forem',
    repoUrl: 'https://github.com/forem/forem',
    tags: ['Community', 'Open Source', 'Self-Hosted'],
    source: 'instagram',
  },
  {
    id: 2,
    title: 'Claude Code İçin Repo',
    description: 'Claude Code kullanıyorsan ama tam verim alamıyorsan bu repo tam sana göre. Claude Code best practices kapsamlı bir şekilde toplanmıştır.',
    category: 'Claude Code',
    likes: 43,
    comments: 1,
    date: '2 Nisan 2026',
    url: 'https://www.instagram.com/reel/DWozvx6DElj/',
    thumbnail: '',
    repo: 'shanraisshan/claude-code-best-practice',
    repoUrl: 'https://github.com/shanraisshan/claude-code-best-practice',
    tags: ['Claude Code', 'Best Practices'],
    source: 'instagram',
  },
  {
    id: 3,
    title: 'Claude Code /simplify Komutu',
    description: 'Claude Code\'da /simplify komutu: önce çalıştır, sonra refactor akışını hızlandırıyor. Son değişikliklerini inceliyor, 3 paralel review alıp birleştiriyor.',
    category: 'Claude Code',
    likes: 1212,
    comments: 29,
    date: '11 Mart 2026',
    url: 'https://www.instagram.com/reel/DVwLYWMjKKV/',
    thumbnail: '',
    tags: ['Claude Code', 'Productivity'],
    source: 'instagram',
  },
  {
    id: 4,
    title: 'AI Coding Agent\'ler ve Superpowers',
    description: 'AI coding agent\'ler bazen fazla hızlı gidip bağlam kaybediyor. Superpowers eklentisi bu sorunu çözüyor.',
    category: 'Claude Code',
    likes: 280,
    comments: 22,
    date: '12 Mart 2026',
    url: 'https://www.instagram.com/reel/DVyxqwWDCVi/',
    thumbnail: '',
    repo: 'superpowers',
    tags: ['AI Agents', 'Context', 'Extension'],
    source: 'instagram',
  },
  {
    id: 5,
    title: 'Claude Code Limitleri Hızlı Bitiyorsa',
    description: '/model opusplan komutu ile model yönetimi yapılabilir. Güçlü modeli sadece kritik adımlarda kullanmak limit tasarrufu sağlar.',
    category: 'Claude Code',
    likes: 986,
    comments: 26,
    date: 'Mart 2026',
    url: 'https://www.instagram.com/reel/DV_n1CTjB30/',
    thumbnail: '',
    tags: ['Claude Code', 'Limits', 'Model'],
    source: 'instagram',
  },
  {
    id: 6,
    title: 'SaaS Tanıtım Videosu Üret',
    description: 'Openscreen ile video üretim aracı. Açık kaynak ve özelleştirilebilir. SaaS ürününün tanıtım videosunu profesyonelce oluşturmak.',
    category: 'Araç & Kaynak',
    likes: 526,
    comments: 26,
    date: '18 Mart 2026',
    url: 'https://www.instagram.com/reel/DWCMMukjJQj/',
    thumbnail: '',
    repo: 'siddharthvaddem/openscreen',
    repoUrl: 'https://github.com/siddharthvaddem/openscreen',
    tags: ['SaaS', 'Video', 'Marketing'],
    source: 'instagram',
  },
  {
    id: 7,
    title: 'Lighthouse Optimizasyonu',
    description: 'Lighthouse skorlarının yeşile dönmemesi için pratik çözümler. Görselleri sıkıştırma, lazy loading, code splitting optimizasyonları.',
    category: 'Best Practice',
    likes: 150,
    comments: 12,
    date: 'Şubat 2026',
    url: 'https://www.instagram.com/reel/DOv-dQJjfh0/',
    thumbnail: '',
    tags: ['Performance', 'SEO', 'Optimization'],
    source: 'instagram',
  },
  {
    id: 8,
    title: 'Component Test — Storybook',
    description: 'Her yeni component\'i test etmek için uygulamanın tamamını çalıştırmaktan bıktıysan. Storybook ile izole geliştir ve test et.',
    category: 'Araç & Kaynak',
    likes: 133,
    comments: 9,
    date: '30 Ocak 2026',
    url: 'https://www.instagram.com/reel/DUJMW_4jPlm/',
    thumbnail: '',
    repo: 'storybookjs/storybook',
    repoUrl: 'https://github.com/storybookjs/storybook',
    tags: ['Testing', 'Components', 'Documentation'],
    source: 'instagram',
  },
  {
    id: 9,
    title: 'Yapay Zeka Öğrenmek',
    description: 'Microsoft\'un Generative AI for Beginners kursu: 21 ders, sıfırdan ileri seviyeye. LLM temelleri, prompt engineering, RAG, AI agents ve fine-tuning.',
    category: 'AI / ML',
    likes: 388,
    comments: 5,
    date: '28 Ocak 2026',
    url: 'https://www.instagram.com/reel/DUEIb8VgG_4/',
    thumbnail: '',
    repo: 'microsoft/generative-ai-for-beginners',
    repoUrl: 'https://github.com/microsoft/generative-ai-for-beginners',
    tags: ['AI', 'Course', 'Microsoft'],
    source: 'instagram',
  },
  {
    id: 10,
    title: 'Website Builder — Webstudio',
    description: 'Webstudio: Class yerine Token sistemi, herhangi bir API\'den veri çekme, Cloudflare altyapısıyla hız, tek tıkla yayımla veya self-host.',
    category: 'Web Tasarım',
    likes: 221,
    comments: 18,
    date: '26 Ocak 2026',
    url: 'https://www.instagram.com/reel/DT-2S2ODIso/',
    thumbnail: '',
    repo: 'webstudio-is/webstudio',
    repoUrl: 'https://github.com/webstudio-is/webstudio',
    tags: ['Website Builder', 'No-Code', 'Open Source'],
    source: 'instagram',
  },
  {
    id: 11,
    title: 'Remotion ile Video Üret',
    description: 'Flutter tasarım sistemleri ve AI ile teknik borç tespiti. Remotion ile React componentleri kullanarak MP4 video oluşturma.',
    category: 'Best Practice',
    likes: 12,
    comments: 2,
    date: '9 Mart 2026',
    url: 'https://www.instagram.com/reel/DVqgiDvD6hj/',
    thumbnail: '',
    repo: 'remotion-dev/remotion',
    repoUrl: 'https://github.com/remotion-dev/remotion',
    tags: ['Remotion', 'React', 'Video'],
    source: 'instagram',
  },
  {
    id: 12,
    title: 'HTMX + Remotion',
    description: 'HTMX ile sadece HTML attribute\'ları kullanarak dinamik sayfalar oluşturma. Remotion ile React yazarak gerçek video üretim.',
    category: 'Best Practice',
    likes: 545,
    comments: 28,
    date: 'Mart 2026',
    url: 'https://www.instagram.com/reel/DWUYCTIAJfC/',
    thumbnail: '',
    repo: 'remotion-dev/remotion',
    repoUrl: 'https://github.com/remotion-dev/remotion',
    tags: ['HTMX', 'Remotion', 'Dynamic'],
    source: 'instagram',
  },
  {
    id: 13,
    title: 'Framework Karar Verme Stratejisi',
    description: 'Framework seçiminde 3 ana kriter: Proje gereksinimleri analizi, ekip tecrübesi değerlendirmesi, framework olgunluğu kontrolü.',
    category: 'Best Practice',
    likes: 180,
    comments: 14,
    date: 'Ekim 2025',
    url: 'https://www.instagram.com/reel/DP8vR8Jjdgs/',
    thumbnail: '',
    tags: ['Framework', 'Strategy', 'Architecture'],
    source: 'instagram',
  },
]

// ========================
// UPLOADED VIDEOS (Kullanıcının Yüklediği Videolar)
// ========================
const uploadedVideos: Video[] = [
  {
    id: 100,
    title: 'Active Theory — Web bir mediumdur',
    description: 'Active Theory stüdyosu, web\'i bir tuval değil bir medium olarak ele alır. Davranış tasarımı ile öncü web deneyimleri yaratır. Sinematik 3D, interaktif animasyonlar ve benzersiz kullanıcı deneyimleri.',
    category: '3D / Motion',
    likes: 0,
    comments: 0,
    date: '5 Nisan 2026',
    videoSrc: '/videos/video-1.mp4',
    thumbnail: '/images/thumbnails/active-theory.jpg',
    tags: ['Active Theory', '3D Web', 'Interactive', 'Cinematic'],
    source: 'uploaded',
  },
  {
    id: 101,
    title: 'Claude Motion Design Studio (Remot)',
    description: 'Claude\'ı bir motion design stüdyosuna dönüştüren Remot sistemi. Kinetik tipografi, parçacık sistemleri, geçiş efektleri ve profesyonel animasyonlar üretme. "Motion" yazarak erişim sağla.',
    category: '3D / Motion',
    likes: 0,
    comments: 0,
    date: '5 Nisan 2026',
    videoSrc: '/videos/video-2.mp4',
    thumbnail: '/images/thumbnails/motion-design-studio.jpg',
    tags: ['Claude', 'Motion Design', 'Remot', 'Animation'],
    source: 'uploaded',
  },
  {
    id: 102,
    title: 'Hero Section Konsept Tasarımı',
    description: 'Yılbaşı keşfi! Bir web sitesi için hero section konsepti. Modern animasyonlar, parallax efektleri ve etkileyici giriş deneyimi tasarlama. Sound on 🎧',
    category: 'Web Tasarım',
    likes: 0,
    comments: 0,
    date: '5 Nisan 2026',
    videoSrc: '/videos/video-3.mp4',
    thumbnail: '/images/thumbnails/hero-section-concept.jpg',
    tags: ['Hero Section', 'UI/UX', 'Animation', 'Concept'],
    source: 'uploaded',
  },
  {
    id: 103,
    title: 'Bu Renk Paletlerini Kullanmayı Bırak ❌',
    description: 'Profesyonel web tasarımında kaçınılması gereken renk paletleri. Doğru renk seçimi, kontrast oranları ve modern renk trendleri hakkında ipuçları.',
    category: 'Web Tasarım',
    likes: 0,
    comments: 0,
    date: '5 Nisan 2026',
    videoSrc: '/videos/video-4.mp4',
    thumbnail: '/images/thumbnails/color-palette.jpg',
    tags: ['Color Palette', 'UI/UX', 'Figma', 'Web Design'],
    source: 'uploaded',
  },
  {
    id: 104,
    title: 'Wonder AI — Layout Oluşturucu',
    description: 'Layout\'ları sıfırdan tasarlamayı bırakın! Wonder AI saniyeler içinde yapıyı oluşturur. Editlenebilir, özelleştirilebilir yapay zeka destekli layout üretimi.',
    category: 'AI / ML',
    likes: 0,
    comments: 0,
    date: '5 Nisan 2026',
    videoSrc: '/videos/video-5.mp4',
    thumbnail: '/images/thumbnails/wonder-ai.jpg',
    tags: ['Wonder AI', 'Layout', 'AI Tool', 'Productivity'],
    source: 'uploaded',
  },
  {
    id: 105,
    title: 'Websites Can\'t Have Aura 🗿',
    description: 'Aura\'sı olan web sitesi mümkün mü? 3D web teknolojileri, shader efektleri ve sinematik animasyonlarla etkileyici bir web deneyimi. UI/UX ve 3D web tasarımın sınırlarını zorlayan örnek.',
    category: '3D / Motion',
    likes: 0,
    comments: 0,
    date: '5 Nisan 2026',
    videoSrc: '/videos/video-6.mp4',
    thumbnail: '/images/thumbnails/aura-3d-website.jpg',
    tags: ['3D Website', 'Aura', 'Shader', 'UI/UX', 'Three.js'],
    source: 'uploaded',
  },
  {
    id: 106,
    title: 'My Cousin Also Design Websites',
    description: 'Kuzenim de web sitesi tasarlıyor — UI/UX tasarım akışından profesyonel web sitesi oluşturma süreci. Figma, modern tasarım trendleri ve clean code ile hazırlandığını gösteren ilham verici içerik.',
    category: 'Web Tasarım',
    likes: 0,
    comments: 0,
    date: '5 Nisan 2026',
    videoSrc: '/videos/video-9.mp4',
    thumbnail: '/images/thumbnails/cousin-design-websites.jpg',
    tags: ['UI/UX', 'Web Design', 'Figma', 'Portfolio'],
    source: 'uploaded',
  },
]

export const videos: Video[] = [...uploadedVideos, ...instagramVideos]

// Claude Code Skills Görselleri
export const skillImages = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  src: `/images/skills/skill-${i + 1}.webp`,
  alt: `Claude Code Skill ${i + 1}`,
}))

export const extraImages = [
  { id: 100, src: '/images/skills/base44-screenshot.jpg', alt: 'Base44 Screenshot' },
]

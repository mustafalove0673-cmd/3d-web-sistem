import { create } from 'zustand';

export type Language = 'tr' | 'en';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navbar
  'nav.home': { tr: 'Anasayfa', en: 'Home' },
  'nav.about': { tr: 'Hakkımızda', en: 'About' },
  'nav.services': { tr: 'Hizmetler', en: 'Services' },
  'nav.projects': { tr: 'Projeler', en: 'Projects' },
  'nav.contact': { tr: 'İletişim', en: 'Contact' },
  'nav.quote': { tr: 'Teklif Al', en: 'Get Quote' },

  // Hero
  'hero.title': { tr: 'Hayalinizdeki Villayı İnşa Ediyoruz', en: 'Building Your Dream Villa' },
  'hero.subtitle': { tr: 'Premium villa inşaatı, iç mimarlık ve peyzaj tasarımı ile hayalinizdeki yaşam alanını gerçeğe dönüştürüyoruz.', en: 'Transforming your dream living space into reality with premium villa construction, interior design, and landscape architecture.' },
  'hero.cta1': { tr: 'Projelerimiz', en: 'Our Projects' },
  'hero.cta2': { tr: 'Ücretsiz Keşif', en: 'Free Consultation' },
  'hero.stat1.num': { tr: '500+', en: '500+' },
  'hero.stat1.label': { tr: 'Tamamlanan Proje', en: 'Completed Projects' },
  'hero.stat2.num': { tr: '25+', en: '25+' },
  'hero.stat2.label': { tr: 'Yıl Deneyim', en: 'Years Experience' },
  'hero.stat3.num': { tr: '%100', en: '100%' },
  'hero.stat3.label': { tr: 'Müşteri Memnuniyeti', en: 'Client Satisfaction' },
  'hero.scroll': { tr: 'Aşağı Kaydır', en: 'Scroll Down' },

  // About
  'about.badge': { tr: 'Hakkımızda', en: 'About Us' },
  'about.title': { tr: '25 Yıldır Güvenle İnşa Ediyoruz', en: 'Building with Trust for 25 Years' },
  'about.p1': { tr: 'NOVA Construction olarak 1999\'dan bu yana premium villa ve konut inşaatı sektöründe lider konumdayız. İstanbul\'un en prestijli bölgelerinde hayalinizdeki yaşam alanını, en yüksek kalite standartlarında ve zamanında teslim etmeyi garanti ediyoruz.', en: 'Since 1999, NOVA Construction has been a leader in premium villa and residential construction. We guarantee to deliver your dream living space in Istanbul\'s most prestigious areas with the highest quality standards and on-time delivery.' },
  'about.p2': { tr: 'Deneyimli mühendis kadromuz, modern teknolojimiz ve müşteri odaklı yaklaşımımız ile her projeyi bir sanat eserine dönüştürüyoruz.', en: 'With our experienced engineering team, modern technology, and customer-centric approach, we transform every project into a masterpiece.' },
  'about.value1.title': { tr: 'Kalite', en: 'Quality' },
  'about.value1.desc': { tr: 'En yüksek standartlarda malzeme ve işçilik', en: 'Highest standard materials and craftsmanship' },
  'about.value2.title': { tr: 'Güven', en: 'Trust' },
  'about.value2.desc': { tr: '25 yıllık tecrübe ve şeffaf süreç yönetimi', en: '25 years of experience and transparent process management' },
  'about.value3.title': { tr: 'İnovasyon', en: 'Innovation' },
  'about.value3.desc': { tr: 'Modern teknoloji ve güncel tasarım trendleri', en: 'Modern technology and current design trends' },
  'about.value4.title': { tr: 'Zamanında Teslimat', en: 'On-time Delivery' },
  'about.value4.desc': { tr: 'Planlanan takvime sadık kalarak zamanında teslim', en: 'Committed to the planned schedule for on-time delivery' },

  // Services
  'services.badge': { tr: 'Hizmetlerimiz', en: 'Our Services' },
  'services.title': { tr: 'Kapsamlı İnşaat Çözümleri', en: 'Comprehensive Construction Solutions' },
  'services.subtitle': { tr: 'Villa inşaatından peyzaj tasarımına, her aşamada yanınızdayız.', en: 'From villa construction to landscape design, we are by your side at every stage.' },
  'services.s1.title': { tr: 'Villa İnşaatı', en: 'Villa Construction' },
  'services.s1.desc': { tr: 'Özel tasarım lüks villa projeleri, anahtar teslim çözümler ve modern yaşam alanları inşaatı.', en: 'Custom designed luxury villa projects, turnkey solutions, and modern living space construction.' },
  'services.s2.title': { tr: 'İç Mimarlık', en: 'Interior Design' },
  'services.s2.desc': { tr: 'Konsept tasarım, malzeme seçimi ve detaylı iç mekan düzenlemesi ile premium yaşam alanları.', en: 'Premium living spaces with concept design, material selection, and detailed interior arrangements.' },
  'services.s3.title': { tr: 'Peyzaj Tasarımı', en: 'Landscape Design' },
  'services.s3.desc': { tr: 'Bahçe düzenlemesi, su ögeleri ve dış mekan yaşam alanları oluşturma.', en: 'Garden arrangement, water features, and creating outdoor living areas.' },
  'services.s4.title': { tr: 'Akıllı Ev Sistemleri', en: 'Smart Home Systems' },
  'services.s4.desc': { tr: 'Otomasyon, güvenlik ve enerji yönetimi ile akıllı yaşam çözümleri.', en: 'Smart living solutions with automation, security, and energy management.' },
  'services.s5.title': { tr: 'Havuz & SPA', en: 'Pool & SPA' },
  'services.s5.desc': { tr: 'Özel havuz inşaatı, sauna ve spa alanları tasarımı ve uygulaması.', en: 'Custom pool construction, sauna and spa area design and implementation.' },
  'services.s6.title': { tr: 'Restorasyon', en: 'Restoration' },
  'services.s6.desc': { tr: 'Tarihi ve klasik yapıların restorasyonu ile modern yaşam standartlarına uygun yenileme.', en: 'Renovation to modern living standards through restoration of historical and classic structures.' },

  // Projects / Gallery
  'projects.badge': { tr: 'Projelerimiz', en: 'Our Projects' },
  'projects.title': { tr: 'Tamamlanan Projeler', en: 'Completed Projects' },
  'projects.subtitle': { tr: 'Her biri özenle tasarlanmış ve kusursuzca inşa edilmiş projelerimiz.', en: 'Our projects, each carefully designed and flawlessly constructed.' },
  'projects.filter.all': { tr: 'Tümü', en: 'All' },
  'projects.filter.villa': { tr: 'Villa', en: 'Villa' },
  'projects.filter.apartment': { tr: 'Apartman', en: 'Apartment' },
  'projects.filter.commercial': { tr: 'Ticari', en: 'Commercial' },
  'projects.filter.restoration': { tr: 'Restorasyon', en: 'Restoration' },
  'projects.viewAll': { tr: 'Tüm Projeleri Gör', en: 'View All Projects' },

  // Contact
  'contact.badge': { tr: 'İletişim', en: 'Contact' },
  'contact.title': { tr: 'Bizimle İletişime Geçin', en: 'Get in Touch' },
  'contact.subtitle': { tr: 'Projeniz hakkında konuşmak veya ücretsiz keşif almak için bize ulaşın.', en: 'Reach out to discuss your project or get a free consultation.' },
  'contact.form.name': { tr: 'Ad Soyad', en: 'Full Name' },
  'contact.form.email': { tr: 'E-posta', en: 'Email' },
  'contact.form.phone': { tr: 'Telefon', en: 'Phone' },
  'contact.form.type': { tr: 'Proje Türü', en: 'Project Type' },
  'contact.form.typePlaceholder': { tr: 'Proje türü seçin', en: 'Select project type' },
  'contact.form.typeVilla': { tr: 'Villa İnşaatı', en: 'Villa Construction' },
  'contact.form.typeInterior': { tr: 'İç Mimarlık', en: 'Interior Design' },
  'contact.form.typeLandscape': { tr: 'Peyzaj', en: 'Landscape' },
  'contact.form.typePool': { tr: 'Havuz & SPA', en: 'Pool & SPA' },
  'contact.form.typeRestoration': { tr: 'Restorasyon', en: 'Restoration' },
  'contact.form.typeOther': { tr: 'Diğer', en: 'Other' },
  'contact.form.message': { tr: 'Mesajınız', en: 'Your Message' },
  'contact.form.messagePlaceholder': { tr: 'Projeniz hakkında detayları paylaşın...', en: 'Share details about your project...' },
  'contact.form.submit': { tr: 'Mesaj Gönder', en: 'Send Message' },
  'contact.info.address.label': { tr: 'Adres', en: 'Address' },
  'contact.info.address': { tr: 'Levent Mahallesi, Büyükdere Cad. No:123, Şişli / İstanbul', en: 'Levent Neighborhood, Büyükdere Ave. No:123, Şişli / Istanbul' },
  'contact.info.phone.label': { tr: 'Telefon', en: 'Phone' },
  'contact.info.phone': { tr: '+90 (212) 555 01 23', en: '+90 (212) 555 01 23' },
  'contact.info.email.label': { tr: 'E-posta', en: 'Email' },
  'contact.info.email': { tr: 'info@novaconstruction.com', en: 'info@novaconstruction.com' },
  'contact.info.hours.label': { tr: 'Çalışma Saatleri', en: 'Working Hours' },
  'contact.info.hours': { tr: 'Pazartesi - Cuma: 09:00 - 18:00', en: 'Monday - Friday: 09:00 - 18:00' },

  // Footer
  'footer.tagline': { tr: 'Premium villa ve konut inşaatında 25 yılı aşkın deneyim.', en: 'Over 25 years of experience in premium villa and residential construction.' },
  'footer.quickLinks': { tr: 'Hızlı Bağlantılar', en: 'Quick Links' },
  'footer.services': { tr: 'Hizmetlerimiz', en: 'Services' },
  'footer.contact': { tr: 'İletişim', en: 'Contact' },
  'footer.rights': { tr: 'Tüm hakları saklıdır.', en: 'All rights reserved.' },
};

export const useLanguageStore = create<LanguageState>((set, get) => ({
  language: 'tr',
  setLanguage: (language) => set({ language }),
  toggleLanguage: () => set((state) => ({ language: state.language === 'tr' ? 'en' : 'tr' })),
  t: (key: string) => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[get().language] || key;
  },
}));

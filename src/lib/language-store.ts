import { create } from 'zustand';

type Language = 'tr' | 'en';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: 'tr',
  setLanguage: (language) => set({ language }),
}));

export const translations = {
  tr: {
    navbar: {
      logo: 'Melek Yüksel',
      navTagline: 'Hair Beauty',
      links: ['Ana Sayfa', 'Hizmetler', 'Randevu', 'Galeri', 'İletişim'],
    },
    hero: {
      title: 'Melek Yüksel',
      subtitle: 'Hair Beauty',
      description: 'Saç ve Güzellik Merkezi',
      cta1: 'Randevu Al',
      cta2: 'Hizmetleri İncele',
    },
    services: {
      title: 'Hizmetlerimiz',
      description: 'Profesyonel ekibimizle güzelliğinize değer katıyoruz. Her hizmetimiz, size özel bir deneyim sunmak için özenle hazırlanmıştır.',
      items: [
        {
          name: 'Saç Kesimi & Styling',
          description: 'Son trendlere uygun, yüz hatlarınızı en iyi şekilde yansıtan saç kesimi ve styling hizmetleri.',
        },
        {
          name: 'Ombre & Renk',
          description: 'Doğal ve canlı görünümlü ombre, balyaj ve renk uygulamalarıyla saçlarınıza hayat katın.',
        },
        {
          name: 'Cilt Bakımı',
          description: 'Profesyonel cilt bakımı hizmetleriyle cildinizi yenileyin ve ışıldatın.',
        },
        {
          name: 'Bölgesel Güzellik',
          description: 'Kaş, kirpik, makyaj ve bölgesel bakım hizmetleriyle mükemmel görünümünüzü tamamlayın.',
        },
      ],
    },
    booking: {
      title: 'Randevu Al',
      description: 'Güzelliğinize yatırım yapmak için hemen randevu alın. WhatsApp veya telefon üzerinden bize ulaşabilirsiniz.',
      cta: 'WhatsApp ile Randevu Al',
      phone: 'Telefon ile Arayın',
    },
    gallery: {
      title: 'Galeri',
    },
    contact: {
      title: 'İletişim',
      address: 'Pursaklar, Ankara',
      phone: '+90 555 123 4567',
      hours: 'Pazartesi - Cumartesi: 09:00 - 19:00',
      email: 'info@melekyuksel.com',
      addressLabel: 'Adres',
      phoneLabel: 'Telefon',
      hoursLabel: 'Çalışma Saatleri',
      emailLabel: 'E-posta',
    },
    footer: {
      copyright: '© 2024 Melek Yüksel Hair Beauty',
      rights: 'Tüm hakları saklıdır.',
      tagline: 'Güzelliğiniz bizim tutkumuz',
      quickLinks: 'Hızlı Linkler',
      socialMedia: 'Sosyal Medya',
      links: ['Ana Sayfa', 'Hizmetler', 'Randevu', 'Galeri', 'İletişim'],
    },
  },
  en: {
    navbar: {
      logo: 'Melek Yüksel',
      navTagline: 'Hair Beauty',
      links: ['Home', 'Services', 'Booking', 'Gallery', 'Contact'],
    },
    hero: {
      title: 'Melek Yüksel',
      subtitle: 'Hair Beauty',
      description: 'Hair & Beauty Center',
      cta1: 'Book Now',
      cta2: 'Explore Services',
    },
    services: {
      title: 'Our Services',
      description: 'We add value to your beauty with our professional team. Each service is carefully prepared to offer you a unique experience.',
      items: [
        {
          name: 'Hair Cutting & Styling',
          description: 'Hair cutting and styling services that best reflect your facial features, tailored to the latest trends.',
        },
        {
          name: 'Ombre & Color',
          description: 'Bring your hair to life with natural and vibrant ombre, balayage, and color applications.',
        },
        {
          name: 'Skin Care',
          description: 'Rejuvenate and illuminate your skin with professional skin care treatments.',
        },
        {
          name: 'Regional Beauty',
          description: 'Complete your perfect look with eyebrow, eyelash, makeup, and regional beauty services.',
        },
      ],
    },
    booking: {
      title: 'Book an Appointment',
      description: 'Book your appointment now to invest in your beauty. You can reach us via WhatsApp or phone.',
      cta: 'Book via WhatsApp',
      phone: 'Call Us Now',
    },
    gallery: {
      title: 'Gallery',
    },
    contact: {
      title: 'Contact',
      address: 'Pursaklar, Ankara',
      phone: '+90 555 123 4567',
      hours: 'Monday - Saturday: 09:00 - 19:00',
      email: 'info@melekyuksel.com',
      addressLabel: 'Address',
      phoneLabel: 'Phone',
      hoursLabel: 'Working Hours',
      emailLabel: 'Email',
    },
    footer: {
      copyright: '© 2024 Melek Yüksel Hair Beauty',
      rights: 'All rights reserved.',
      tagline: 'Your beauty is our passion',
      quickLinks: 'Quick Links',
      socialMedia: 'Social Media',
      links: ['Home', 'Services', 'Booking', 'Gallery', 'Contact'],
    },
  },
} as const;

export type Translations = typeof translations;

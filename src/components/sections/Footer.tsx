'use client'

import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react'

const links = [
  {
    title: 'Hizmetler',
    items: ['Konut Yapımı', 'Ticari Yapılar', 'Dekorasyon', 'Mimari Tasarım', 'Anahtar Teslim'],
  },
  {
    title: 'Şirket',
    items: ['Hakkımızda', 'Projeler', 'Kariyer', 'Blog'],
  },
  {
    title: 'Yasal',
    items: ['Gizlilik Politikası', 'Kullanım Şartları', 'KVKK'],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] bg-[#080808]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-heading font-bold text-white text-xl leading-none">Ö</span>
              </div>
              <div>
                <span className="font-heading font-bold text-[15px] text-foreground">ÖZKAN</span>
                <span className="text-[11px] text-muted-foreground ml-1.5">YAPI</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-sm">
              2004&apos;ten bu yana premium inşaat ve mimari çözümlerle
              hayallere hayat veriyoruz. Kalite, güven ve estetik bir arada.
            </p>
            <div className="space-y-3">
              {[
                { icon: Phone, text: '+90 312 000 00 00' },
                { icon: Mail, text: 'info@ozkanyapi.com.tr' },
                { icon: MapPin, text: 'Çankaya, Ankara' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <item.icon className="w-4 h-4 text-primary/60" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {links.map((group) => (
            <div key={group.title}>
              <h4 className="font-heading font-semibold text-sm mb-5 text-foreground">{group.title}</h4>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ÖZKAN Yapı. Tüm hakları saklıdır.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-colors duration-300 group"
          >
            <ArrowUp className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  )
}

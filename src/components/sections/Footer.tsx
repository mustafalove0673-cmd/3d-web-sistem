'use client'

import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react'

const links = [
  { title: 'Hizmetler', items: ['Konut Yapımı', 'Ticari Yapılar', 'Dekorasyon', 'Mimari Tasarım', 'Anahtar Teslim'] },
  { title: 'Şirket', items: ['Hakkımızda', 'Projeler', 'Kariyer', 'Blog'] },
  { title: 'Yasal', items: ['Gizlilik Politikası', 'Kullanım Şartları', 'KVKK'] },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-heading font-bold text-primary-foreground text-lg">Ö</span>
              </div>
              <div>
                <span className="font-heading font-bold text-[15px] text-foreground">ÖZKAN</span>
                <span className="text-muted-foreground text-[11px] ml-1.5">YAPI</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-xs">
              2004&apos;ten bu yana premium inşaat ve mimari çözümlerle hayallere hayat veriyoruz.
            </p>
            <div className="space-y-2">
              {[
                { icon: Phone, text: '+90 312 000 00 00' },
                { icon: Mail, text: 'info@ozkanyapi.com.tr' },
                { icon: MapPin, text: 'Çankaya, Ankara' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <item.icon className="w-4 h-4 text-primary/60" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {links.map((g) => (
            <div key={g.title}>
              <h4 className="font-heading font-semibold text-sm mb-4">{g.title}</h4>
              <ul className="space-y-2.5">
                {g.items.map((item) => (
                  <li key={item}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} ÖZKAN Yapı. Tüm hakları saklıdır.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-9 h-9 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors group">
            <ArrowUp className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  )
}

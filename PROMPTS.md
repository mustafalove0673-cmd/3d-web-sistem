# PROMPT ŞABLONLARI

Bu dosya Claude Code'a hangi komutların ne anlama geldiğini söyler.
Kullanıcı bu kelimelerden birini yazdığında, CLAUDE.md'deki talimatlara göre hareket et.

---

## 🎨 `tema` veya `theme`
**Kullanım:** `tema [işletme adı] [sektör] [açıklama]`
**Örnek:** `tema Melek Yüksel Hair Beauty kuaför Pursaklar Ankara`

**Ne yapmalı:**
1. İşletme bilgilerini analiz et
2. Sektöre uygun renk paleti oluştur (mevcut rose/gold veya farklı)
3. Three.js ile 3D hero sahnesi tasarla
4. Tüm bölümleri sıfırdan premium kodla
5. AI görseller üret (en az 10 adet)
6. Döngüyü uygula (kontrol → düzelt → tekrar)
7. GitHub'a push yap

---

## 💻 `codex` veya `code`
**Kullanım:** `codex [ne yapılacağı]`
**Örnek:** `codex galeriye lightbox ekle` veya `codex three.js ile 3D sahne hero'ya ekle`

**Ne yapmalı:**
1. Mevcut projeyi oku ve anla
2. İstenen özelliği ekle/güncelle
3. Three.js 3D elementler kullan
4. Mevcut stile uygun tasarla
5. Döngüyü uygula
6. GitHub'a push yap

---

## 🌐 `3d` veya `three`
**Kullanım:** `3d` veya `three [nereye]`
**Örnek:** `3d hero` veya `three about bölümü`

**Ne yapmalı:**
1. Belirtilen bölüme Three.js Canvas ekle
2. 3D geometri (sphere, torus, box, vs.) kullan
3. Mouse tracking ile interaktif yap
4. Işıklandırma ve environment ekle
5. Performans için optimize et
6. Döngüyü uygula

---

## 🔧 `fix` veya `düzenle`
**Kullanım:** `fix [sorun]`
**Örnek:** `fix hero bölümü çalışmıyor` veya `düzenle mobil responsive`

**Ne yapmalı:**
1. Sorunu tespit et (dev.log, lint)
2. Düzelt
3. 3 kez kontrol et
4. GitHub'a push yap

---

## 🖼️ `görsel` veya `image`
**Kullanım:** `görsel [ne]` veya `image [ne]`
**Örnek:** `görsel hero arka plan` veya `image service kartları`

**Ne yapmalı:**
1. Hangi görsellerin eksik olduğunu kontrol et
2. `z-ai image` CLI ile üret
3. Doğru boyut kullan (1024x1024, 1344x768, vb.)
4. public/images/ klasörüne kaydet

---

## ✅ `kontrol` veya `check`
**Kullanım:** `kontrol`

**Ne yapmalı:**
1. ESLint çalıştır → hata varsa düzelt
2. Dev server kontrol et → hata varsa düzelt
3. Importları kontrol et
4. Görselleri kontrol et
5. Three.js bileşenlerini kontrol et
6. Döngüyü uygula

---

## 🚀 `push` veya `github`
**Kullanım:** `push` veya `github`

**Ne yapmalı:**
1. Tüm değişiklikleri commit et
2. GitHub'a push yap
3. Repo linkini göster

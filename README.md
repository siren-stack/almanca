<div align="center">

# 🇩🇪 Almanca Öğrenme Merkezi

**Interaktiv · Selbstgehostet · A1 → B1**

*Tek sayfa içinde, yan panelden geçiş yapılabilen, mobil uyumlu Almanca ders koleksiyonu.*

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-ready-2ea44f?style=flat-square)](https://pages.github.com/)
[![No Build](https://img.shields.io/badge/build-none-blue?style=flat-square)](#)
[![Vanilla JS](https://img.shields.io/badge/stack-HTML%20%2F%20CSS%20%2F%20JS-f7df1e?style=flat-square)](#)
[![Mobile Ready](https://img.shields.io/badge/mobile-optimized-ff69b4?style=flat-square)](#)

</div>

---

## ✨ Öne Çıkanlar

- 📚 **Tek giriş noktası** — `index.html` tüm dersleri yan panelden sunar
- 📱 **Mobil düzeltme enjeksiyonu** — ders dosyalarına dokunmadan, çalışma zamanında CSS enjekte edilir
- 🔗 **Hash tabanlı yönlendirme** — her dersin kendi URL'si var, paylaşılabilir & yer imi alınabilir
- 🧩 **Sıfır bağımlılık** — build adımı yok, vanilla HTML/CSS/JS
- 🎨 **Tutarlı estetik** — Playfair Display + Source Sans 3, sıcak paper tonları, dijital gazete hissi

---

## 🗂️ Proje Yapısı

```
html/
├── index.html          ← tab shell (yandan açılır panel + iframe yöneticisi)
├── extra-tabs.js       ← (eski, kullanılmıyor — silinebilir)
├── README.md
└── html/               ← ders dosyaları (her biri bağımsız, tek dosya)
    ├── remixed-f5625d65.html   → Prima Plus A1.1 Wiederholung
    ├── remixed-24aae99a.html   → Präteritum & Perfekt
    ├── remixed-eafaa9dc.html   → Dativ & Akkusativ
    └── remixed-8f86e81f.html   → Possessivpronomen
```

---

## 🚀 Kullanım

### Online
GitHub Pages URL'sini aç — hepsi bu kadar.

### Lokal
```bash
npx serve .
# → http://localhost:3000
```

### Yeni ders ekleme

1. `.html` dosyanı `html/` klasörüne at
2. `index.html` içindeki `LESSONS` dizisine bir satır ekle:

```js
const LESSONS = [
  { file: 'remixed-f5625d65.html', title: 'Prima Plus A1.1 – Wiederholung' },
  // ...
  { file: 'yeni-dersin.html', title: 'Yeni Dersin Başlığı' }, // ← buraya
];
```

Başka değişiklik yok. Sayfayı yenile, panel'e yeni ders düşer.

---

## 🤖 AI ile Uyumlu Ders Üretme

Yeni ders dosyaları mevcut estetik ve etkileşim stiline uysun diye, aşağıdaki prompt'u Claude/GPT'ye verebilirsin. Konuyu ve seviyeyi değiştirmek senin işin — şablon aynı kalır.

### 📋 Prompt Şablonu

> Aşağıdaki `{{KONU}}` yerine "Modalverben", "Akkusativ", "Nebensätze mit weil" gibi herhangi bir Almanca konuyu yazabilirsin.

````markdown
# Görev
Almanca **{{KONU}}** konusunu öğreten, tek dosyalık, interaktif bir HTML alıştırma
sayfası üret. Bu sayfa projemdeki mevcut ders dosyalarıyla birebir aynı stil
dilinde olmalı — aşağıdaki kuralları harfiyen uygula.

# Hedef Seviye
{{SEVİYE — örn. A1, A2, B1}}

# Teknik Gereksinimler
- **Tek HTML dosyası**: inline `<style>` ve inline `<script>`. Dış JS kütüphanesi YOK.
- Google Fonts izin: `Playfair Display` (700, 900) + `Source Sans 3` (300, 400, 600, 700).
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` eklenmeli.
- Dil: içerik Almanca, açıklamalar ve UI etiketleri Türkçe.
- Dosyanın tek başına, başka dosyaya ihtiyaç duymadan çalışması gerekir.

# Görsel Sistem (DEĞİŞTİRMEDEN KULLAN)
```css
:root {
  --bg: #F4EFE6;       /* sayfa zemini — sıcak kağıt */
  --paper: #FFFDF8;    /* kart zemini */
  --ink: #1C1814;      /* metin */
  --gold: #9A7D0A;     /* vurgu / focus */
  --green: #1E8449;    /* doğru cevap */
  --red: #C0392B;      /* yanlış cevap */
  --muted: #7D6E5A;    /* ikincil metin */
  --border: #D9CCBA;
  --shadow: 0 4px 24px rgba(28,24,20,0.10);
}
```
Ek olarak konuya özel 1-2 aksan rengi seçebilirsin (örn. Präteritum için `#B03A2E`,
Perfekt için `#1A5276`).

# Sayfa İskeleti (bu sıra korunmalı)
1. **Hero** — koyu zemin (`var(--ink)`), büyük Playfair başlık, kısa alt başlık,
   konu etiketleri (örn. `A1 · GRAMMATIK · ÜBUNGEN`).
2. **Gramer kartları** — konuyu 1-2 sütun halinde özetleyen tablolar +
   "altın çizgili" kural kutusu.
3. **Alıştırma bölümleri** — her biri numaralı başlık (`01`, `02`, ...) altında:
   - Fill-in (input'a yaz)
   - Multiple choice (tıklanabilir seçenekler)
   - Matching / sürükle-bırak
   - Konjugasyon tablosu
   - Cloze / diyalog tamamlama
   En az **4 farklı egzersiz tipi** olsun.
4. **Skor takibi** — sağ altta yüzer buton: "Kontrol Et" → doğrular yeşil,
   yanlışlar kırmızı, toplam skoru gösterir.

# Etkileşim Kuralları
- Her input'a odaklanınca alt çizgi altın rengine döner.
- Doğru cevap → alt çizgi yeşil, metin yeşil. Yanlış → kırmızı.
- "Cevabı Göster" seçeneği küçük bir link olarak altta bulunsun.
- Tüm state client-side; localStorage opsiyonel.
- Cevap karşılaştırması case-insensitive ve trim'li olmalı; birden fazla kabul
  edilen cevap varsa dizi olarak tut.

# Mobil
- `@media (max-width: 640px)` altında grid'ler tek sütuna düşmeli.
- Kartların yatay margin'i 8-12px olmalı.
- Hiçbir element 100vw'yi aşmamalı.

# Yapılandırma Notları
- `<title>` anlamlı olmalı (ör. "Modalverben – A1 Übungen").
- Sınıf adları mevcut dosyalarla tutarlı: `.hero`, `.w`, `.card`, `.sec`,
  `.stitle`, `.snum`, `.frow`, `.fi`, `.ci`, `.ctable`, `.mc-block`, `.opts`,
  `.opt`, `.rule`, `.info`, `.pill`.
- Çıktı: sadece HTML dosyasının tamamı. Açıklama metni yazma, sadece kod.

# İçerik
{{KONUYA ÖZEL NOTLAR — örn. hangi fiiller, hangi zamir, hangi case, kaç soru}}
````

### 💡 İpucu

Üretilen dosyayı `html/` klasörüne at, `index.html` içindeki `LESSONS` dizisine
ekle, tamam. Mobil CSS enjeksiyonu `index.html` tarafından otomatik uygulanır —
dersin kendisine mobil kodu yazmak zorunda değilsin ama yazarsan daha iyi görünür.

---

## 🧠 Nasıl Çalışıyor

`index.html`:
- `LESSONS` dizisini okur, her ders için bir tab butonu + bir gizli `<iframe>` oluşturur
- İlgili tab açılana kadar iframe `src`'si boş kalır (lazy load)
- Iframe yüklendiğinde `injectMobileFix()` çağrısı içine mobil uyumlu CSS enjekte eder
- `location.hash` değişimi tab geçişini yönetir (paylaşılabilir linkler için)
- Yandan kayan panel, topbar'daki hamburger butonu ile açılıp backdrop/ESC/× ile kapanır

Ders dosyaları aynen kalır — tüm katkı dış kabuktan gelir.

---

<div align="center">

**Viel Spaß beim Lernen! 🍀**

</div>

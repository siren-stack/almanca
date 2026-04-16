<div align="center">

# 🇩🇪 Almanca Öğrenme Merkezi

**Interaktiv · Selbstgehostet · A1 → B1**

*Tek sayfa içinde, yan panelden geçiş yapılabilen, mobil uyumlu Almanca ders koleksiyonu.*

[![Siteyi Aç](https://img.shields.io/badge/🌐_Siteyi_Aç-siren--stack.github.io-2ea44f?style=flat-square)](https://siren-stack.github.io/almanca/)
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
**[https://siren-stack.github.io/almanca/](https://siren-stack.github.io/almanca/)** — tıkla, kullan.

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

Aşağıdaki prompt'u **olduğu gibi kopyala** ve Claude / ChatGPT / Gemini'ye yapıştır.
AI sana konu, seviye, egzersiz tipleri gibi her şeyi **sırayla tek tek soracak**;
sen cevaplayacaksın, sonunda proje stiline birebir uyan tek dosyalık HTML'i üretecek.

### 📋 Kopyala-Yapıştır Prompt

````markdown
Sen benim Almanca öğrenme projem için tek dosyalık, interaktif bir HTML ders
sayfası hazırlayacaksın. Ama önce bana aşağıdaki soruları **tek tek, sırayla**
sor. Her cevabımı aldıktan sonra bir sonrakine geç. Hepsini tek mesajda sorma,
hepsini bir formda toplama — sohbet gibi sırayla ilerle.

Ben cevaplayana kadar HTML yazmaya başlama. Tüm sorular bitince cevaplarımı
özetle, "onaylıyor musun?" diye sor, onaylarsam HTML'i tek parça halinde üret.

## Sıralı Sorular

1. **Konu nedir?** (örn. Modalverben, Akkusativ, Nebensätze mit weil, Wechselpräpositionen)
2. **Hedef seviye?** (A1 / A2 / B1 / B2)
3. **Dersin kısa alt başlığı ne olsun?** (hero'da görünecek, 1 cümle)
4. **Aksan rengi?** — varsayılan altın `#9A7D0A` dışında ek vurgu rengi istiyor musun?
   İstersen HEX ver, istemezsen "hayır" de.
5. **Hangi egzersiz tipleri olsun?** Aşağıdakilerden seçim yap (birden fazla):
   - [ ] Fill-in (boşluk doldurma)
   - [ ] Multiple choice (çoktan seçmeli)
   - [ ] Konjugasyon tablosu (şahıs bazlı fiil çekimi)
   - [ ] Matching (eşleştirme)
   - [ ] Cloze / diyalog tamamlama
   - [ ] Cümle sıralama (drag-drop değil, tıklayarak)
6. **Her egzersiz tipinden kaç soru olsun?** (örn. "fill-in 8, mc 6, konjugasyon 4 fiil")
7. **Gramer özeti tablosu gerekli mi?** — konunun kuralını en başta gösterecek
   tablo/özet ister misin? Evet ise kaç sütun/satır istediğini söyle.
8. **Konuya özel içerik notları var mı?** (kullanılmasını istediğin özel fiiller,
   zamirler, örnek cümleler, günlük hayat temaları)
9. **Dosya adı ne olsun?** (örn. `modalverben.html`, `akkusativ-a1.html`)

## Üretim Kuralları (ben onayladıktan sonra uygulayacaksın)

### Teknik
- **Tek HTML dosyası**, inline `<style>` + inline `<script>`. Dış JS kütüphanesi yok.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` şart.
- İçerik Almanca, UI etiketleri ve açıklamalar Türkçe.
- Google Fonts: `Playfair Display` (700, 900) + `Source Sans 3` (300, 400, 600, 700).

### Renk paleti (değiştirme)
```css
:root {
  --bg: #F4EFE6;       /* sayfa zemini */
  --paper: #FFFDF8;    /* kart zemini */
  --ink: #1C1814;      /* metin */
  --gold: #9A7D0A;     /* focus / vurgu */
  --green: #1E8449;    /* doğru */
  --red: #C0392B;      /* yanlış */
  --muted: #7D6E5A;
  --border: #D9CCBA;
  --shadow: 0 4px 24px rgba(28,24,20,0.10);
}
```

### Sayfa iskeleti (bu sırada)
1. **Hero** — koyu zemin (`var(--ink)`), Playfair büyük başlık, alt başlık,
   üst köşede seviye etiketi (örn. `A1 · GRAMMATIK`).
2. **Gramer özeti** (kullanıcı evet derse) — `.card` içinde tablo + altın sol çizgili
   kural kutusu (`.rule`).
3. **Alıştırma bölümleri** — her biri `01`, `02`, `03` numaralı başlıkla
   (`.stitle` + `.snum`), ayrı `.card`'larda.
4. **Sağ altta yüzer "Kontrol Et" butonu** — doğruları yeşil, yanlışları
   kırmızı işaretler, üstte skor gösterir.

### Etkileşim
- Input focus → alt çizgi altın.
- Doğru → `.ok` (yeşil alt çizgi + yeşil metin). Yanlış → `.no` (kırmızı).
- Her soruda "Cevabı Göster" küçük bir link olarak bulunsun.
- Cevap karşılaştırması: `trim()` + `toLowerCase()`. Birden fazla kabul varsa dizi.
- State client-side; localStorage opsiyonel.

### Mobil
- `@media (max-width: 640px)` altında tüm grid'ler tek sütun.
- Kart yatay margin 8-12px.
- Hiçbir element `100vw`'yi aşmasın.

### Class adları (mevcut dosyalarla tutarlı olsun)
`.hero`, `.w`, `.card`, `.sec`, `.stitle`, `.snum`, `.frow`, `.fnum`, `.fi`,
`.ci`, `.ctable`, `.mc-block`, `.mc-q`, `.opts`, `.opt`, `.rule`, `.info`,
`.pill`, `.hl`.

### Çıktı
Onayımdan sonra **sadece HTML dosyasının tam içeriği**. Açıklama, giriş cümlesi,
"işte kodunuz" gibi metin yazma — direkt `<!DOCTYPE html>` ile başla.
Çıktıyı **indirilebilir `.html` dosyası** olarak ver. Kullanıcı doğrudan
indirebilsin; kod bloğu içine koyma.

Şimdi 1. soruyu sor.
````

### 💡 Nasıl Kullanılır

1. Yukarıdaki prompt'u kopyala, sohbete yapıştır.
2. AI her soruyu tek tek sorar → cevapla.
3. Özet + onay → "evet" de.
4. Üretilen HTML'i `html/` klasörüne `.html` olarak kaydet.
5. `index.html` içindeki `LESSONS` dizisine bir satır ekle:
   ```js
   { file: 'yeni-dersin.html', title: 'Yeni Dersin Başlığı' },
   ```
6. Bitti. Mobil CSS enjeksiyonu `index.html` tarafından otomatik uygulanır.

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

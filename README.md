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

- 📚 **Tek giriş noktası** — `index.html` tüm dersleri yandan açılır panelden sunar
- 🔄 **Otomatik ders keşfi** — `html/` klasörüne `.html` at, push'la, bitti. GitHub API dosyaları otomatik çeker, `<title>` etiketinden başlığı alır
- 📱 **Mobil düzeltme enjeksiyonu** — ders dosyalarına dokunmadan, çalışma zamanında CSS enjekte edilir
- 🔗 **Hash tabanlı yönlendirme** — her dersin kendi URL'si var, paylaşılabilir & yer imi alınabilir
- 🛡️ **Güvenli** — dosya adı sanitizasyonu, tüm dinamik metin `textContent` ile, API fallback mekanizması
- 🧩 **Sıfır bağımlılık** — build adımı yok, vanilla HTML/CSS/JS
- 🎨 **Tutarlı estetik** — Playfair Display + Source Sans 3, sıcak paper tonları, dijital gazete hissi

---

## 🗂️ Proje Yapısı

```
├── index.html          ← ana kabuk (yan panel + iframe yöneticisi + otomatik keşif)
├── README.md
└── html/               ← ders dosyaları (her biri bağımsız, tek dosya)
    ├── remixed-f5625d65.html   → Prima Plus A1.1 Wiederholung
    ├── remixed-24aae99a.html   → Präteritum & Perfekt
    ├── remixed-eafaa9dc.html   → Dativ & Akkusativ
    ├── remixed-8f86e81f.html   → Possessivpronomen
    ├── modalverben-a1.html     → Modalverben · A1 Grammatik
    └── ...                     → yeni ders at, otomatik gelir
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
2. GitHub'a push'la
3. **Bitti.** 1-2 dakika sonra site otomatik güncellenir

> `index.html`'e dokunmana gerek yok. GitHub API `html/` klasörünü tarar,
> yeni dosyayı bulur, `<title>` etiketinden başlığını çeker ve panele ekler.
> API başarısız olursa (rate-limit, offline) sabit yedek liste devreye girer.

---

## 🧠 Nasıl Çalışıyor

```
Sayfa açılır
    │
    ├─→ GitHub API'den html/ klasörü listelenir
    │   (başarısız olursa → sabit fallback listesi)
    │
    ├─→ Her .html dosyasının <title> etiketi fetch ile çekilir
    │
    ├─→ Yan panelde tab butonları oluşturulur
    │
    └─→ Tab tıklanınca:
        ├─→ iframe lazy-load ile yüklenir
        ├─→ Mobil CSS otomatik enjekte edilir
        └─→ URL hash güncellenir (#dosya-adi)
```

**Güvenlik:**
- Dosya adları regex ile sanitize edilir (`/^[a-zA-Z0-9._\-]+$/`)
- Tüm dinamik metin `textContent` ile eklenir (`innerHTML` yok)
- iframe'ler same-origin, cross-origin erişim yok

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

1. Yukarıdaki prompt'u kopyala, sohbete yapıştır
2. AI her soruyu tek tek sorar → cevapla
3. Özet + onay → "evet" de
4. Üretilen `.html` dosyasını indir
5. `html/` klasörüne at, GitHub'a push'la
6. **Bitti.** `index.html` otomatik keşfeder, panele ekler

---

<div align="center">

**Viel Spaß beim Lernen! 🍀**

</div>

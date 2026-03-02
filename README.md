##  Live Demo

 https://enoca-frontend-case-6wn7pmaku-aliye-123s-projects.vercel.app

---

Enoca Frontend Case
Bu proje, React + Vite + SCSS kullanılarak oluşturulmuş tek sayfalık bir ürün tanıtım sitesidir.

Kurulum
Projeyi çalıştırmak için terminale şu komutları yazın:

npm installnpm run dev
Özellikler
React & Vite: Hızlı geliştirme ortamı.
SCSS: Modüler ve temiz stil yapısı.
Bileşenler: Button, Input, Card, Accordion, Modal (Tekrar kullanılabilir).
Tema: Light/Dark mod geçişi.
Form Doğrulama: Basit e-posta kontrolü.
Responsive: Mobil ve masaüstü uyumlu.



### 2. Adım: Lighthouse Raporu (Puan Almak İçin)

1.  Tarayıcıda siteni açık tut (`http://localhost:5173`).
2.  Sayfada boş bir yere **sağ tık** yap -> **İncele (Inspect)** de.
3.  Açılan menüde üst kısımda "Lighthouse" sekmesini bul (Eğer yoksa `>>` işaretine tıkla orada yazar).
4.  "Analyze page load" butonuna tıkla.
5.  Bekle. Sonuçlar çıkınca (Performance, Accessibility vs.) **ekran görüntüsü al**.
6.  Bu ekran görüntüsünü `README.md` dosyasının olduğu yere kaydet.

### 3. Adım: Canlıya Almak (En Kolay Yöntem)

GitHub ile uğraşmak yerine **Netlify** ile sürükle-bırak yapacağız.

1.  VS Code terminaline şu komutu yazıp Enter'a bas (Proje dosyalarını paketliyor):
    ```bash
    npm run build
    ```
    (Bu işlem bitince sol tarafta `dist` adında yeni bir klasör oluşacak.)

2.  İnternet tarayıcını aç ve bu siteye gir: **[app.netlify.com/drop](https://app.netlify.com/drop)**

3.  Burada "Drag and drop your site folder here" yazan bir alan göreceksin.
    *   VS Code'daki `dist` klasörünü al, bu alanın üzerine sürükle bırak.

4.  Birkaç saniye bekleyecek ve sana **"Site is live"** diyerek yeşil bir link verecek (örn: `https://hayali-isim.netlify.app`).

**Bu linki kopyala.** İşte bu, göndermen gereken link.

**Son Durum:**
Artık canlı bir siten var. Bu linki ve GitHub repo linkini (eğer oluşturduysan) maille gönderebilirsin.

Anlatabildim mi? `npm run build` komutunu çalıştırdın mı?

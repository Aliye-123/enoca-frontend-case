import { useEffect, useMemo, useState } from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Input from "./components/Input/Input";
import Accordion from "./components/Accordion/Accordion";
import Modal from "./components/Modal/Modal";
import "./App.scss";

function App() {
  const [theme, setTheme] = useState("dark");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const faqs = useMemo(
    () => [
      {
        title: "Projeyi nasıl kurarım?",
        content:
          "Repo’yu klonladıktan sonra 'npm install' ve 'npm run dev' komutlarıyla projeyi başlatabilirsiniz.",
      },
      {
        title: "Tema değişimi çalışıyor mu?",
        content:
          "Evet. Sağ üstteki buton ile Light/Dark mod arasında geçiş yapabilirsiniz. Tema CSS variables ile yönetilir.",
      },
      {
        title: "Hangi teknolojiler kullanıldı?",
        content:
          "React + Vite + SCSS. Harici UI kütüphanesi kullanılmadan yeniden kullanılabilir bileşenler geliştirildi.",
      },
    ],
    []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!email.trim()) {
      setEmailError("E-posta alanı boş bırakılamaz.");
      return;
    }
    if (!isValid) {
      setEmailError("Lütfen geçerli bir e-posta adresi giriniz.");
      return;
    }

    setEmailError("");
    setEmail("");
    setIsModalOpen(true);
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo">Enoca Task</div>
        <Button
          text={theme === "dark" ? "☀️ Aydınlık" : "🌙 Karanlık"}
          onClick={toggleTheme}
          ariaLabel="Tema değiştir"
          variant="secondary"
        />
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__badge">⚡ Vite • React • SCSS • UI Components</div>
          <h1 id="hero-title">
            Modern Web <span>Çözümleri</span>
          </h1>
          <p>
            Bileşen tabanlı yapı, semantik HTML, erişilebilirlik ve performans
            odağıyla hazırlanmış tek sayfalık ürün tanıtım landing.
          </p>

          <div className="hero__actions">
            <Button
              text="Şimdi Başla"
              onClick={() => window.scrollTo({ top: 720, behavior: "smooth" })}
              variant="primary"
            />
            <Button
              text="Modal Örneği"
              onClick={() => setIsModalOpen(true)}
              variant="outline"
            />
          </div>
        </section>

        <section className="section" aria-labelledby="features-title">
          <h2 className="section__title" id="features-title">Özellikler</h2>
          <p className="section__subtitle">
            Responsive tasarım, erişilebilir etkileşimler ve yeniden kullanılabilir UI bileşenleri.
          </p>

          <div className="features-grid">
            <div className="feature-box">
              <h3>🚀 Hızlı</h3>
              <p>Vite ile hızlı geliştirme, optimize edilmiş üretim çıktısı.</p>
            </div>
            <div className="feature-box">
              <h3>♿ Erişilebilir</h3>
              <p>Semantik yapı, temel aria kullanımı ve klavye ile gezinme.</p>
            </div>
            <div className="feature-box">
              <h3>📱 Responsive</h3>
              <p>≤640 / 641–1024 / ≥1025 breakpoint’lerinde dengeli görünüm.</p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="pricing-title">
          <h2 className="section__title" id="pricing-title">Paketler</h2>
          <p className="section__subtitle">
            İhtiyacına göre esnek planlar. “Profesyonel” paket öne çıkarılmıştır.
          </p>

          <div className="cards-grid">
            <Card title="Başlangıç" price="₺99" description="Küçük projeler için ideal çözüm." />
            <Card
              title="Profesyonel"
              price="₺299"
              description="Büyüyen ekipler için güçlü özellikler."
              featured
            />
            <Card title="Kurumsal" price="₺599" description="Gelişmiş destek ve sınırsız seçenek." />
          </div>
        </section>

        <section className="section" aria-labelledby="faq-title">
          <h2 className="section__title" id="faq-title">Sıkça Sorulan Sorular</h2>
          <p className="section__subtitle">
            Accordion bileşeni ile basit etkileşim ve düzenli içerik.
          </p>

          <div className="accordion-wrapper">
            {faqs.map((f) => (
              <Accordion key={f.title} title={f.title} content={f.content} />
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="contact-title">
          <h2 className="section__title" id="contact-title">İletişime Geçin</h2>
          <p className="section__subtitle">
            Basit form doğrulama: boş alan + e-posta format kontrolü.
          </p>

          <div className="form-wrapper">
            <form onSubmit={handleSubmit} noValidate>
              <Input
                id="contact-email"
                label="E-posta Adresiniz"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError("");
                }}
                error={emailError}
              />

              <div className="contact__cta">
                <Button text="Gönder" type="submit" variant="primary" />
              </div>
            </form>
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: 26 }}>
            <Button
              text="Bilgi Penceresini Aç"
              onClick={() => setIsModalOpen(true)}
              variant="secondary"
            />
          </div>
        </section>
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Bilgilendirme">
        <p>Bu bir test modalıdır. İçerisine her türlü içerik koyabilirsiniz.</p>
        <p style={{ marginTop: 10 }}>Form başarıyla gönderildi (yalancı submit) ✅</p>
      </Modal>

      <footer className="footer">
        © 2026 Enoca Frontend Case. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}

export default App;
import styles from './Footer.module.css';
import { useRef } from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
  const homeRef = useRef(null);
  const featuresRef = useRef(null);
  const instructionsRef = useRef(null);
  const tariffsRef = useRef(null);
  const aboutRef = useRef(null);
  const faqRef = useRef(null);

  const scrollToRef = (ref, id) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    } else if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <img src={logo} alt="Anbor Logo" className={styles.logo} />
          <p className={styles.logoText}>
            Наша ERP система автоматизирует учет, контроль склада и управление клиентами, помогая бизнесу работать эффективнее и расти быстрее.
          </p>
        </div>
        <div className={styles.contactSection}>
          <h3>Контакты</h3>
          <p>
            <a href="tel:+992929244503" className={styles.link}>
              <span className={styles.icon}>📞</span> +992 92 924 45 03
            </a>
          </p>
          <p>
            <a href="mailto:murodjonaiziev@gmail.com" className={styles.link}>
              <span className={styles.icon}>✉️</span> murodjonaiziev@gmail.com
            </a>
          </p>
        </div>
        <div className={styles.navigationSection}>
          <h3>Навигация</h3>
          <p onClick={() => scrollToRef(homeRef, 'home')} className={styles.link}>Главная</p>
          <p onClick={() => scrollToRef(featuresRef, 'features')} className={styles.link}>Возможности</p>
          <p onClick={() => scrollToRef(instructionsRef, 'instructions')} className={styles.link}>Инструкция</p>
          <p onClick={() => scrollToRef(tariffsRef, 'tariffs')} className={styles.link}>Тарифы</p>
          <p onClick={() => scrollToRef(aboutRef, 'about')} className={styles.link}>О нас</p>
          <p onClick={() => scrollToRef(faqRef, 'faq')} className={styles.link}>FAQ</p>
        </div>
        <div className={styles.buttonsSection}>
          <p onClick={() => window.open('/rules', '_blank')} className={styles.link}>Правила использования</p>
          <p onClick={() => window.open('/privacy', '_blank')} className={styles.link}>Политика конфиденциальности</p>
          <p onClick={() => window.open('/signup', '_blank')} className={styles.link}>Создать аккаунт</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
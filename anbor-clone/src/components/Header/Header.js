import { useRef } from 'react';
import styles from './Header.module.css';

function Header() {
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
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>ANBOR.TJ</div>
        <nav className={styles.nav}>
          <p onClick={() => scrollToRef(homeRef, 'home')} className={styles.navLink}>Главная</p>
          <p onClick={() => scrollToRef(featuresRef, 'features')} className={styles.navLink}>Возможности</p>
          <p onClick={() => scrollToRef(instructionsRef, 'instructions')} className={styles.navLink}>Инструкция</p>
          <p onClick={() => scrollToRef(tariffsRef, 'tariffs')} className={styles.navLink}>Тарифы</p>
          <p onClick={() => scrollToRef(aboutRef, 'about')} className={styles.navLink}>О нас</p>
          <p onClick={() => scrollToRef(faqRef, 'faq')} className={styles.navLink}>FAQ</p>
        </nav>
        <p onClick={() => window.open('/demo', '_blank')} className={styles.bookButton}>Демо-версия</p>
      </div>
    </header>
  );
}

export default Header;
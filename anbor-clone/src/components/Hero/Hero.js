import styles from './Hero.module.css';
import analitics from '../../assets/analitics.png';
import { forwardRef } from 'react';

const Hero = forwardRef((_, ref) => {
  return (
    <section ref={ref} id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Управление бизнесом онлайн
            <br />
            <span className={styles.subtitle}>
              Современное облачное решение для управления компанией: от учёта товаров и финансов до контроля сотрудников и аналитики — всё под вашим контролем.
            </span>
          </h1>
        </div>
        <div className={styles.imageWrapper}>
          <img src={analitics} alt="Business Analytics" className={styles.image} />
        </div>
      </div>
    </section>
  );
});

export default Hero;
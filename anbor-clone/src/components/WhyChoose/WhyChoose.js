import styles from './WhyChoose.module.css';
import laptop from '../../assets/laptop.png';
import person from '../../assets/person.png';
import { forwardRef } from 'react';

const WhyChoose = forwardRef((_, ref) => {
  return (
    <section ref={ref} id="tariffs" className={styles.whyChoose}>
      <div className={styles.container}>
        <h2 className={styles.title}>Почему выбирают ERP-систему ANBOR.TJ?</h2>
        <div className={styles.content}>
          <img src={person} alt="Person" className={styles.personImage} />
          <div className={styles.text}>
            <p>ANBOR.TJ — это единое веб-решение для полного управления малым и средним бизнесом.</p>
            <p>Наша система объединяет все процессы: от приёма товаров и учёта остатков до финансовой отчётности и управления правами доступа.</p>
            <p className={styles.highlight}>🚀 Быстрый старт внедрения за считанные дни без простоев.</p>
            <p className={styles.highlight}>🌎 Доступ из любого места доступен в любом месте, на любом устройстве.</p>
          </div>
          <img src={laptop} alt="Screen" className={styles.screenImage} />
        </div>
      </div>
    </section>
  );
});

export default WhyChoose;
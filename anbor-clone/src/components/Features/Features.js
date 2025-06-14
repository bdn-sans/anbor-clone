import styles from './Features.module.css';
import near247 from '../../assets/near247.png';
import afad from '../../assets/afad.png';
import check from '../../assets/check.png';
import chat from '../../assets/chat.png';
import hourglass from '../../assets/hourglass.png';
import calendar from '../../assets/calendar.png';
import gears from '../../assets/gears.png';
import chart from '../../assets/chart.png';
import { forwardRef } from 'react';

const Features = forwardRef((_, ref) => {
  const advantages = [
    { icon: near247, text: 'Мы рядом 24/7' },
    { icon: afad, text: 'Доступ с любого устройства' },
    { icon: check, text: 'Удобно и просто' },
    { icon: chat, text: 'Облачное решение' },
  ];

  const possibilities = [
    { picon: hourglass, alt: 'Установка и обновление курсов валют', hoverText: 'Ручная настройка валютных курсов' },
    { picon: calendar, alt: 'Управление контрагентами', hoverText: 'База клиентов, поставщиков, партнёров с историей операций и их долги или предоплаты.' },
    { picon: gears, alt: 'Поддержка мультивалютности', hoverText: 'Операции в разных валютах с учётом актуальных курсов.' },
    { picon: chart, alt: 'Продажа товаров', hoverText: 'Оформление продаж с возможностью применения скидок и запрет операций при недостатке товара на складе.' },
  ];

  return (
    <section ref={ref} id="features" className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Наши преимущества</h2>
        <div className={styles.cards}>
          {advantages.map((item, index) => (
            <div key={index} className={styles.card}>
              <img src={item.icon} alt={item.text} className={styles.icon} />
              <p className={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>
        <h2 className={styles.sectionTitle}>Возможности</h2>
        <div className={styles.possibilities}>
          {possibilities.map((item, index) => (
            <div key={index} className={styles.possibilityItem}>
              <img src={item.picon} alt={item.alt} className={styles.picon} />
              <p className={styles.possibilityText}>{item.alt}</p>
              <div className={styles.hoverText}>{item.hoverText}</div>
            </div>
          ))}
        </div>
        <button className={styles.viewAllButton}>Все возможности</button>
      </div>
    </section>
  );
});

export default Features;
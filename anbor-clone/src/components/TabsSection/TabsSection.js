import { useState, forwardRef } from 'react';
import styles from './TabsSection.module.css';
import noname1 from '../../assets/noname1.png';
import noname2 from '../../assets/noname2.png';
import noname3 from '../../assets/noname3.png';

const TabsSection = forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState('retail');
  const tabs = [
    {
      id: 'retail',
      label: 'Розница',
      title: 'Централизованное управление бизнесом',
      content: 'Один магазин или сеть из нескольких точек — управляйте товарами и ценами, печатайте ценники, контролируйте остатки и выручку, создавайте программы лояльности в едином центре управления. Комплексное решение для одного магазина или сети торговых точек: кассовая программа, учет товаров, выдача онлайн-заказов.',
      image: noname1
    },
    {
      id: 'online',
      label: 'Решение для онлайн торговли',
      title: 'Единое окно для заказов',
      content: 'Объедините заказы с собственного интернет-магазина и соцсетей в одной системе. Анализируйте воронки продаж, сегментируйте клиентов и подключайте интеграции с доставкой, рассылками и телефонией. Актуальные остатки без сбоев — система автоматически обновляет наличие товаров на всех площадках.',
      image: noname2
    },
    {
      id: 'sales',
      label: 'Контроль над продажами',
      title: 'Гибкое управление ценами',
      content: 'Прайс-листы, категории, скидки и бонусные программы. Резервируйте товары, проверяйте комплектацию и остаток. Следите за остатками, автоматически формируйте заказы поставщикам. Проводите инвентаризацию прямо со смартфона.',
      image: noname3
    },
  ];

  return (
    <section ref={ref} id="instructions" className={styles.tabsSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>К какому типу относится ваш бизнес?</h1>
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className={styles.content}>
          {tabs.map((tab) => (
            activeTab === tab.id && (
              <div key={tab.id} className={styles.tabPanel}>
                <img src={tab.image} alt={tab.title} className={styles.image} />
                <div>
                  <h3 className={styles.title}>{tab.title}</h3>
                  <p className={styles.description}>{tab.content}</p>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
});

export default TabsSection;
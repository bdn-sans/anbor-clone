import styles from './ContactSection.module.css';
import { useState, forwardRef } from 'react';

const ContactSection = forwardRef((_, ref) => {
  const [phone, setPhone] = useState('');
  const countryOptions = [
    { code: '+992', flag: '🇹🇯', name: 'Таджикистан' },
    { code: '+998', flag: '🇺🇿', name: 'Узбекистан' },
    { code: '+7', flag: '🇷🇺', name: 'Россия' },
    { code: '+1', flag: '🇺🇸', name: 'США' },
  ];
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]); // Tajikistan as default

  return (
    <section ref={ref} id="about" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1521.9311887138617!2d69.62669889814063!3d40.27880724090229!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa685638cc62f047%3A0x1569e85609b7ec24!2zSVQtUlVOIC0g0LDQutCw0LTQtdC80LjRjyDQv9GA0L7Qs9GA0LDQvNC80LjRgNC-0LLQsNC90LjRjyDQvNC10LbQtNGD0L3QsNGA0L7QtNC90L7Qs9C-INGB0YLQsNC90LTQsNGA0YLQsA!5e0!3m2!1sru!2sus!4v1741237780960!5m2!1sru!2sus"
            width="100%" height="600" style={{ border: 0 }} allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" title="IT-RUN Location Map"
          ></iframe>
        </div>
        <div className={styles.contactInfo}>
          <h2 className={styles.contactTitle}>Свяжитесь с нами</h2>
          <p className={styles.subtitle}>Заполните форму, и мы свяжемся с вами в ближайшее время</p>
          <p className={styles.contactDetail}>
            <a href="tel:+99292924503" className={styles.contactText}>📞 +992 92 924 45 03</a>
            <a href="mailto:murodjonafliziev@gmail.com" className={styles.contactText}>📧 murodjonafliziev@gmail.com</a>
          </p>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Ваше имя</label>
              <input type="text" id="name" placeholder="Ваше имя" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>Телефон</label>
              <div className={styles.phoneWrapper}>
                <select
                  value={selectedCountry.code}
                  onChange={(e) => { const code = e.target.value; setSelectedCountry(countryOptions.find(option => option.code === code) || countryOptions[0]); }}
                  className={styles.countrySelect}
                >
                  {countryOptions.map((option) => (
                    <option key={option.code} value={option.code}>
                      {option.flag} {option.code}
                    </option>
                  ))}
                </select>
                <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="92 924 45 03" className={styles.input} />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Ваш вопрос</label>
              <textarea id="message" placeholder="Ваш вопрос" className={styles.input}></textarea>
            </div>
            <div className={styles.checkbox}>
              <input type="checkbox" id="agreement" />
              <label htmlFor="agreement" className={styles.checkboxLabel}>Я согласен на обработку персональных данных</label>
            </div>
            <button type="submit" className={styles.submitButton}>Отправить</button>
          </form>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
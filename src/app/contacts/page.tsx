'use client';

import styles from './page.module.css';
import Image from 'next/image';

export default function ContactsPage() {
  return (
    <main className={styles.main}>
      <div className={styles.mapContainer}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.935981320789!2d37.52198597677688!3d55.76404497346487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a1759f35a73%3A0x57c3da3c7c2fb0b9!2z0JrRgNCw0YHQvdGL0Lkg0J7QutGC0Y_QsdGA0YwsIDHQkCwg0JTQtdC00L7QstGB0LosINCc0L7RgdC60L7QstGB0LrQsNGPINC-0LHQuy4sIDE0MTAzNg!5e0!3m2!1sru!2sru!4v1710787027650!5m2!1sru!2sru" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className={styles.mapOverlay}>
          <h2 className={styles.mapTitle}>МЫ</h2>
          <h3 className={styles.mapSubtitle}>ТУТ</h3>
          <div className={styles.mapAddress}>
            <div className={styles.mapMarker}>
              <Image 
                src="/content/Layer 2.svg" 
                alt="Marker" 
                width={14} 
                height={14}
              />
            </div>
            141036, Московская область, г. Дедовск, ул. Красный октябрь, 1а
          </div>
        </div>
        <div className={styles.socialIcons}>
          <a href="#" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
            <Image 
              src="/content/facebook.svg" 
              alt="Facebook" 
              width={20} 
              height={20}
            />
          </a>
          <a href="#" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
            <Image 
              src="/content/twitter.svg" 
              alt="Twitter" 
              width={20} 
              height={20}
            />
          </a>
          <a href="#" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
            <Image 
              src="/content/youtube.svg" 
              alt="YouTube" 
              width={20} 
              height={20}
            />
          </a>
          <a href="#" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
            <Image 
              src="/content/instagram.svg" 
              alt="Instagram" 
              width={20} 
              height={20}
            />
          </a>
          <a href="#" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
            <Image 
              src="/content/linkedin.svg" 
              alt="LinkedIn" 
              width={20} 
              height={20}
            />
          </a>
        </div>
      </div>

      <section className={styles.contact}>
          <div className={styles.contactContent}>
            <h2 className={styles.sectionTitle}>СВЯЗЬ С НАМИ</h2>
            <p className={styles.sectionText}>
              Если у вас возникли вопросы то<br/>
              воспользуйтесь формой ниже и мы<br/>
              как можно быстрее вам ответим
            </p>

            <form className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input 
                    type="text" 
                    placeholder="Имя*" 
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <input 
                    type="text" 
                    placeholder="Компания" 
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input 
                    type="email" 
                    placeholder="Почта*" 
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <input 
                    type="tel" 
                    placeholder="Телефон*" 
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <textarea 
                  placeholder="Введите текст сообщения" 
                  className={styles.formTextarea}
                  rows={6}
                ></textarea>
              </div>

              <p className={styles.formDisclaimer}>
                Я согласен на обработку персональных данных
              </p>

              <button type="submit" className={styles.submitButton}>
                отправить
              </button>
            </form>
          </div>
        </section>

    </main>
  );
} 
import styles from "./page.module.css";
import Image from "next/image";

export default function Projects() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.verticalText}>Проекты</div>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.iconLink}>
              <Image src="/img/Vector (1).svg" alt="Instagram" width={24} height={24} />
            </a>
            <a href="#" className={styles.iconLink}>
              <Image src="/img/Vector (2).svg" alt="VK" width={24} height={24} />
            </a>
            <a href="#" className={styles.iconLink}>
              <Image src="/img/Vector (3).svg" alt="Twitter" width={24} height={24} />
            </a>
          </div>
          <div className={styles.heroContent}>
            <span className={styles.accent}>ПРОЕКТЫ</span>
            <span className={styles.subtitle}>наши работы</span>
          </div>
        </section>

        <section className={styles.projectsGrid}>
          <article className={styles.projectCard}>
            <div className={styles.projectContent}>
              <div className={styles.projectNumber}>проект №1</div>
              <h2 className={styles.projectTitle}>ЛОФТ-КАФЕ В ЦЕНТРЕ ГОРОДА</h2>
              <p className={styles.projectDescription}>
                В этом модном пространстве с кирпичными стенами и панорамными окнами наш эпоксидный стол с речной галькой стал главным акцентом. Посетители обожают фотографировать его мерцающую поверхность, а бариста устраивают вокруг него кофейные церемонии.
              </p>
              <p className={styles.projectQuote}>
                Каждый день кто-то спрашивает, где купить такой же - улыбается владелец заведения.
              </p>
            </div>
            <div className={styles.projectImage}>
              <Image 
                src="/projects/iproject5.jpg" 
                alt="Лофт-кафе проект" 
                width={600} 
                height={400}
                className={styles.projectImg}
              />
            </div>
          </article>

          <article className={styles.projectCard}>
            <div className={styles.projectContent}>
              <div className={styles.projectNumber}>проект №2</div>
              <h2 className={styles.projectTitle}>ЗАГОРОДНАЯ ВИЛЛА У ОЗЕРА</h2>
              <p className={styles.projectDescription}>
                Наш эпоксидный стол с голубой рекой стал центральным элементом гостиной. Когда солнце проникает через панорамные окна, создается впечатление, что вода действительно течет. Это стол-картина, который служит поводом для гордости и восхищения владельцев дома.
              </p>
            </div>
            <div className={styles.projectImage}>
              <Image 
                src="/projects/iproject6.jpg" 
                alt="Загородная вилла проект" 
                width={600} 
                height={400}
                className={styles.projectImg}
              />
            </div>
          </article>

          <article className={styles.projectCard}>
            <div className={styles.projectContent}>
              <div className={styles.projectNumber}>проект №3</div>
              <h2 className={styles.projectTitle}>МИШЛЕНОВСКИЙ РЕСТОРАН</h2>
              <p className={styles.projectDescription}>
                Центральным столом нашей работы стал эпоксидный стол в японском стиле с дорожкой из натурального дерева. Посетители отмечают, что стол стал не только удобным элементом интерьера, но и предметом искусства, который привлекает внимание и вызывает восхищение.
              </p>
            </div>
            <div className={styles.projectImage}>
              <Image 
                src="/projects/iproject7.jpg" 
                alt="Мишленовский ресторан проект" 
                width={600} 
                height={400}
                className={styles.projectImg}
              />
            </div>
          </article>

          <article className={styles.projectCard}>
            <div className={styles.projectContent}>
              <div className={styles.projectNumber}>проект №4</div>
              <h2 className={styles.projectTitle}>КВАРТИРА ДИЗАЙНЕРА-БЛОГЕРА</h2>
              <p className={styles.projectDescription}>
                В минималистичном проекте нашей клиентки, популярного дизайнера интерьеров, мы создали журнальный столик, который подчеркнул её стиль современного лаконичного интерьера. Мы использовали малахитовый оттенок эпоксидной заливки, как переход к природной теме в интерьере.
              </p>
            </div>
            <div className={styles.projectImage}>
              <Image 
                src="/projects/iproject8.jpg" 
                alt="Квартира дизайнера проект" 
                width={600} 
                height={400}
                className={styles.projectImg}
              />
            </div>
          </article>
        </section>

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
    </div>
  );
} 
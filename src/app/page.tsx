import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.verticalText}>Медвижимость</div>
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
            <div className={styles.backgroundSquare}></div>
            <h1 className={styles.heroTitle}>
              <span className={styles.accent}>МЕСТО ВАШЕ</span>
              <span className={styles.subtitle}>мебель наша</span>
            </h1>
          </div>
        </section>

        <section className={styles.whoWeAre}>
          <div className={styles.beamBackground_one}>
            <Image 
              src="/img/Beam.png" 
              alt="Decorative beam" 
              width={800} 
              height={800}
              className={styles.beamImage}
            />
          </div>
          <div className={styles.whoWeAreContent}>
            <h2 className={styles.sectionTitle}>КТО МЫ</h2>
            <p className={styles.sectionText}>
              Мы - компания, которая специализируется в сфере разработки индивидуальных проектов, технологий производства и реализации проектов любого уровня сложности
            </p>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>120</span>
                <span className={styles.statDesc}>проектов детально проработанной мебели</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>500</span>
                <span className={styles.statDesc}>квадратных метров производственное производство</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>80</span>
                <span className={styles.statDesc}>профессиональных специалистов в штате</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15</span>
                <span className={styles.statDesc}>опытных специалистов в нашей сплоченной команде</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10</span>
                <span className={styles.statDesc}>лет работаем на российском рынке</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>50</span>
                <span className={styles.statDesc}>материалов в нашей работе</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.clients}>
          <div className={styles.bentOvalBackground}>
            <Image 
              src="/img/Bent oval (1).png" 
              alt="Decorative bent oval" 
              width={1200} 
              height={800}
              className={styles.bentOvalImage}
            />
          </div>
          <div className={styles.clientsContent}>
            <h2 className={styles.sectionTitle}>КЛИЕНТЫ</h2>
            <p className={styles.sectionText}>
              Основными нашими клиентами - это крупные игроки в сфере HoReCa, такие как: сетевые заведения, кафе, бары и рестораны, а также компании из других областей.
            </p>
            <div className={styles.clientsGrid}>
              <div className={styles.clientLogo}>
                <Image src="/img/svg/novikov.svg" alt="Novikov" width={150} height={50} />
              </div>
              <div className={styles.clientLogo}>
                <Image src="/img/svg/coffee.svg" alt="Живой кофе" width={150} height={50} />
              </div>
              <div className={styles.clientLogo}>
                <Image src="/img/svg/beliport.svg" alt="Beliport" width={150} height={50} />
              </div>
              <div className={styles.clientLogo}>
                <Image src="/img/svg/complex.svg" alt="Комплекс" width={150} height={50} />
              </div>
              <div className={styles.clientLogo}>
                <Image src="/img/svg/grad.svg" alt="Град" width={150} height={50} />
              </div>
              <div className={styles.clientLogo}>
                <Image src="/img/svg/mini.svg" alt="Mini" width={150} height={50} />
              </div>
              <div className={styles.clientLogo}>
                <Image src="/img/svg/nov.svg" alt="Nov" width={150} height={50} />
              </div>
              <div className={styles.clientLogo}>
                <Image src="/img/svg/staff.svg" alt="Staff" width={150} height={50} />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.advantages}>
          <div className={styles.burrBackground}>
            <Image 
              src="/img/Burr.png" 
              alt="Decorative burr" 
              width={800} 
              height={800}
              className={styles.burrImage}
            />
          </div>
          <div className={styles.advantagesContent}>
            <h2 className={styles.sectionTitle}>ПРЕИМУЩЕСТВА</h2>
            <p className={styles.sectionText}>
              Наша особенная сильная сторона команды и этому доказательство является то, сколько времени мы существуем на этом рынке.
            </p>
            <div className={styles.advantagesGrid}>
              <div className={styles.advantageItem}>
                <span className={styles.advantageNumber}>01</span>
                <p className={styles.advantageText}>Комплексный подход без лишних затрат на наши доработки</p>
              </div>
              <div className={styles.advantageItem}>
                <span className={styles.advantageNumber}>02</span>
                <p className={styles.advantageText}>Опыт реализации специфики производства</p>
              </div>
              <div className={styles.advantageItem}>
                <span className={styles.advantageNumber}>03</span>
                <p className={styles.advantageText}>Современное оборудование и технологии последнего</p>
              </div>
              <div className={styles.advantageItem}>
                <span className={styles.advantageNumber}>04</span>
                <p className={styles.advantageText}>Гарантия качества и стабильности сроков</p>
              </div>
              <div className={styles.advantageItem}>
                <span className={styles.advantageNumber}>05</span>
                <p className={styles.advantageText}>Широкий спектр материалов и гибкая интеграция</p>
              </div>
              <div className={styles.advantageItem}>
                <span className={styles.advantageNumber}>06</span>
                <p className={styles.advantageText}>Грамотно подбор решения клиентам и объекта</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.projects}>
          <div className={styles.projectsBeam}>
            <Image 
              src="/img/Beam.png" 
              alt="Decorative beam" 
              width={800} 
              height={800}
              className={styles.beamImageone}
            />
          </div>
          <div className={styles.projectsBentOval}>
            <Image 
              src="/img/Bent oval (1).png" 
              alt="Decorative bent oval" 
              width={800} 
              height={800}
              className={styles.bentOvalImage}
            />
          </div>
          <div className={styles.projectsContent}>
            <h2 className={styles.sectionTitle}>ПРОЕКТЫ</h2>
            <p className={styles.sectionText}>
              Избранные работы из нашего портфолио мебели
            </p>
            <div className={styles.projectsGrid}>
              <div className={styles.projectItem}>
                <div className={styles.projectImageWrapper}>
                  <Image 
                    src="/projects/project1.jpg" 
                    alt="Стол из слэба с эпоксидной рекой" 
                    width={600} 
                    height={400}
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.projectNumber}>01</div>
              </div>
              <div className={styles.projectItem}>
                <div className={styles.projectImageWrapper}>
                  <Image 
                    src="/projects/project2.jpg" 
                    alt="Обеденный стол с зеленым ландшафтом" 
                    width={600} 
                    height={400}
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.projectNumber}>02</div>
              </div>
              <div className={styles.projectItem}>
                <div className={styles.projectImageWrapper}>
                  <Image 
                    src="/projects/project3.jpg" 
                    alt="Стеклянный стол с зеленой композицией" 
                    width={600} 
                    height={400}
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.projectNumber}>03</div>
              </div>
              <div className={styles.projectItem}>
                <div className={styles.projectImageWrapper}>
                  <Image 
                    src="/projects/project4.jpg" 
                    alt="Декоративная полка с подсветкой" 
                    width={600} 
                    height={400}
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.projectNumber}>04</div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.workSchema}>
          <div className={styles.workSchemaContent}>
            <h2 className={styles.sectionTitle}>СХЕМА РАБОТЫ</h2>
            <p className={styles.sectionText}>
              За время работы мы выработали подход, который<br/>
              позволяет нам экономить время производства без<br/>
              ущерба для качества. Но каждый проект - это новая<br/>
              задача, поэтому мы сохраняем гибкость, чтобы решать<br/>
              новые задачи максимально эффективно.
            </p>
            
            <div className={styles.timeline}>
              <div className={styles.timelineRow}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineNumber}>01</div>
                  <div className={styles.timelineTitle}>
                    Входя<br/>щая<br/>заявка
                  </div>
                  <div className={styles.timelineDate}>1-4 д/д</div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineNumber}>03</div>
                  <div className={styles.timelineTitle}>
                    Заключение<br/>договора
                  </div>
                  <div className={styles.timelineDate}>11-14 д/д</div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineNumber}>05</div>
                  <div className={styles.timelineTitle}>
                    Утверждение<br/>проекта
                  </div>
                  <div className={styles.timelineDate}>18-21 д/д</div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineNumber}>07</div>
                  <div className={styles.timelineTitle}>
                    Приемка<br/>работ
                  </div>
                  <div className={styles.timelineDate}>48 д/д</div>
                </div>
              </div>

              <div className={styles.timelineLine}>
                <div className={styles.timelineDots}></div>
              </div>

              <div className={styles.timelineRow}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineNumber}>02</div>
                  <div className={styles.timelineTitle}>
                    Коммерческое<br/>предложение
                  </div>
                  <div className={styles.timelineDate}>3-6 д/д</div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineNumber}>04</div>
                  <div className={styles.timelineTitle}>
                    Разработка<br/>проекта
                  </div>
                  <div className={styles.timelineDate}>14-18 д/д</div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineNumber}>06</div>
                  <div className={styles.timelineTitle}>
                    Производство<br/>и монтаж
                  </div>
                  <div className={styles.timelineDate}>21-48 д/д</div>
                </div>
              </div>
            </div>
          </div>
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

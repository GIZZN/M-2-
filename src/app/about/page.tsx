import styles from "./page.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.verticalText}>О компании</div>
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
              <span className={styles.accent}>О НАС</span>
              <span className={styles.subtitle}>наша история</span>
          </div>
        </section>

        <section className={styles.mission}>
          <div className={styles.missionContent}>
            <div className={styles.missionText}>
              <h2 className={styles.missionTitle}>НАША МИССИЯ</h2>
              <p className={styles.missionDescription}>
                Мы не просто создаем эпоксидные столы — мы превращаем природные материалы в произведения искусства, которые становятся сердцем вашего интерьера.
              </p>
              <p className={styles.missionMainText}>
                Наша миссия — соединить красоту натурального дерева с современными технологиями, чтобы дать вам не просто мебель, а уникальный предмет гордости. Каждый наш стол — это:
              </p>
              <div className={styles.missionPoints}>
                <div className={styles.missionPoint}>
                  <span className={styles.missionIcon}>🌿</span>
                  <h3>Уважение к природе</h3>
                  <p>Мы используем только сертифицированную древесину и безопасные эпоксидные смолы, минимизируя воздействие на окружающую среду.</p>
                </div>
                <div className={styles.missionPoint}>
                  <span className={styles.missionIcon}>🔨</span>
                  <h3>Ручная работа с душой</h3>
                  <p>Ни один наш стол не выходит с конвейера — каждый этап изготовления контролируется мастером, чтобы вы получили идеальное качество.</p>
                </div>
                <div className={styles.missionPoint}>
                  <span className={styles.missionIcon}>✨</span>
                  <h3>Эксклюзивность в деталях</h3>
                  <p>Мы не повторяемся. Ваш стол будет единственным в своем роде, отражая ваш вкус и характер.</p>
                </div>
              </div>
            </div>
            <div className={styles.missionImage}>
              <Image 
                src="/mission-table.jpg" 
                alt="Эпоксидный стол ручной работы" 
                width={500} 
                height={600}
                className={styles.missionImg}
              />
            </div>
          </div>
        </section>

        <section className={styles.responsibility}>
          <div className={styles.responsibilityContent}>
            <div className={styles.responsibilityText}>
              <h2 className={styles.responsibilityTitle}>ОТВЕТСТВЕННОСТЬ</h2>
              <p className={styles.responsibilityDescription}>
                Мы осознаем, что создаем не просто мебель, а предметы, которые будут с вами в важные моменты жизни. Поэтому мы уделяем внимание каждому материалу до финальной упаковки - мы ответственны за то, чтобы ваша мебель радовала вас и долгие годы.
              </p>
              <h3 className={styles.responsibilitySubtitle}>НАША ОТВЕТСТВЕННОСТЬ ВЫРАЖАЕТСЯ В:</h3>
              <ul className={styles.responsibilityList}>
                <li>Использование безопасных материалов: только сертифицированные эпоксидные смолы и древесина из проверенных источников.</li>
                <li>Многоступенчатый контроль: каждый этап производства проходит фильтр и новые проверки.</li>
                <li>Честная поддержка: никаких скрытых дефектов, только прозрачность на всех этапах работы.</li>
                <li>Долговечность: наши столы создаются с расчетом на десятилетия, а не на сезон.</li>
                <li>Поддержка клиентов: мы всегда остаемся на связи даже после доставки.</li>
              </ul>
              <p className={styles.responsibilityFooter}>
                Для нас важно, чтобы вы получили не просто красивый стол, а изделие, которое вызывает гордость и становится символом прекрасных мгновений в вашем комфорте.
              </p>
              <p className={styles.responsibilityQuote}>
                &ldquo;Сделано с душой&rdquo; - ничем ответственность за результат.
              </p>
            </div>
            <div className={styles.responsibilityImage}>
              <Image 
                src="/responsibility-table.jpg" 
                alt="Процесс создания эпоксидного стола" 
                width={500} 
                height={800}
                className={styles.responsibilityImg}
              />
            </div>
          </div>
        </section>

        <section className={styles.team}>
          <div className={styles.teamContent}>
            <h2 className={styles.teamTitle}>КОМАНДА</h2>
            <p className={styles.teamDescription}>
              Мы – группа увлеченных мастеров, дизайнеров и перфекционистов, которые объединились, чтобы создавать столы и мебель в настоящем производственном духе.
            </p>
            
            <h3 className={styles.teamSubtitle}>КТО СОЗДАЕТ ВАШИ БУДУЩИЕ СТОЛЫ:</h3>
            
            <div className={styles.teamMembers}>
              <div className={styles.teamMember}>
                <span className={styles.memberIcon}>🛠️</span>
                <h4>Мастера и монтажники</h4>
                <p>Наши столяры и интеграторы работают с материалом как с живым – чувствуют каждую волокну древесины и знают, как подчеркнуть ее естественную красоту.</p>
              </div>

              <div className={styles.teamMember}>
                <span className={styles.memberIcon}>🎨</span>
                <h4>Дизайнеры-визионеры</h4>
                <p>Создают уникальные формы из сучков и трещинок, превращая дефекты в изюминки вашего будущего стола.</p>
              </div>

              <div className={styles.teamMember}>
                <span className={styles.memberIcon}>⚡</span>
                <h4>Технологи и контролеры</h4>
                <p>Настоящие фанаты качества, которые проверяет каждый этап – от смешивания смолы до финальной полировки.</p>
              </div>

              <div className={styles.teamMember}>
                <span className={styles.memberIcon}>💬</span>
                <h4>Менеджеры-консультанты</h4>
                <p>Их знания и чуткость стиля помогут вам найти именно тот, который станет идеальным для вашего пространства.</p>
              </div>
            </div>

            <div className={styles.teamPhilosophy}>
              <h3 className={styles.philosophyTitle}>НАША ФИЛОСОФИЯ ПРОСТА:</h3>
              <p className={styles.philosophyText}>
                Мы верим, что по-настоящему качественная мебель может создать только с любовью к своему делу. Наша команда – это не просто исполнители проекта – это люди, которые гордятся каждым созданным столом.
              </p>
              <p className={styles.philosophyQuote}>
                &ldquo;Мы не собираем мебель – мы создаем характер вашего интерьера.&rdquo;
              </p>
            </div>
          </div>
        </section>

        <section className={styles.teamGallery}>
          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamPhoto}>
                <Image 
                  src="/avtr/pavel.jpg" 
                  alt="Павел - Директор" 
                  width={220} 
                  height={220}
                  className={styles.memberPhoto}
                />
              </div>
              <h3 className={styles.memberName}>ПАВЕЛ</h3>
              <p className={styles.memberRole}>Директор</p>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamPhoto}>
                <Image 
                  src="/avtr/maria.jpg" 
                  alt="Мария - Дизайнер" 
                  width={220} 
                  height={220}
                  className={styles.memberPhoto}
                />
              </div>
              <h3 className={styles.memberName}>МАРИЯ</h3>
              <p className={styles.memberRole}>Дизайнер</p>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamPhoto}>
                <Image 
                  src="/avtr/petr.jpg" 
                  alt="Петр - Мастер цеха" 
                  width={220} 
                  height={220}
                  className={styles.memberPhoto}
                />
              </div>
              <h3 className={styles.memberName}>ПЕТР</h3>
              <p className={styles.memberRole}>Мастер цеха</p>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamPhoto}>
                <Image 
                  src="/avtr/georgiy.jpg" 
                  alt="Георгий - Мастер" 
                  width={220} 
                  height={220}
                  className={styles.memberPhoto}
                />
              </div>
              <h3 className={styles.memberName}>ГЕОРГИЙ</h3>
              <p className={styles.memberRole}>Мастер</p>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamPhoto}>
                <Image 
                  src="/avtr/kianu.jpg" 
                  alt="Киану - Мастер" 
                  width={220}   
                  height={220}
                  className={styles.memberPhoto}
                />
              </div>
              <h3 className={styles.memberName}>КИАНУ</h3>
              <p className={styles.memberRole}>Мастер</p>
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
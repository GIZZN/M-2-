import styles from "./page.module.css";
import Image from "next/image";

export default function Production() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.verticalText}>Производство</div>
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
            <span className={styles.accent}>ПРОИЗВОДСТВО</span>
            <span className={styles.subtitle}>как мы создаем</span>
          </div>
        </section>

        <section className={styles.process}>
          <div className={styles.processContent}>
            <div className={styles.processHeader}>
              <h2>НАШЕ ПРОИЗВОДСТВО: ГДЕ РОЖДАЮТСЯ УНИКАЛЬНЫЕ ЭПОКСИДНЫЕ СТОЛЫ</h2>
              <p>Мы создаем мебель вручную, сочетая традиционные столярные техники с современными технологиями эпоксидной смолы. Каждое изделие проходит пять этапов контроля, чтобы выполнить все желания клиента с достоинством.</p>
            </div>

            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <h3>КАК МЫ РАБОТАЕМ</h3>
                <div className={styles.stepContent}>
                  <h4>1. ПОДГОТОВКА МАТЕРИАЛА</h4>
                  <ul>
                    <li>Отбор древесины используем только сухие, стабилизированные слэбы ценных пород (дуб, карагач, орех, венге)</li>
                    <li>Обработка слэйбов - торцевание, удаление дефектов с сохранением фактуры</li>
                  </ul>

                  <h4>2. ЗАЛИВКА ЭПОКСИДНОЙ СМОЛЫ</h4>
                  <ul>
                    <li>Смешивание смолы + отвердитель + красители (если нужен цвет)</li>
                    <li>Заливка в форме послойно, с удалением пузырьков воздуха миксером</li>
                    <li>Сушка в термокамере при строгом температурном режиме (24-72 часа)</li>
                  </ul>

                  <h4>3. ФИНАЛЬНАЯ ОБРАБОТКА</h4>
                  <ul>
                    <li>Шлифовка от грубой P80 до ювелирной P3000</li>
                    <li>Полировка воском или полиуретаном лаком для зеркального блеска</li>
                    <li>Крепление подстолья из металла, проверка устойчивости основы, деревянные основания - скрытый монтаж</li>
                  </ul>
                </div>
              </div>

              <div className={styles.processStep}>
                <h3>НАШИ ЦЕХА И ОБОРУДОВАНИЕ</h3>
                <ul>
                  <li>Деревообрабатывающий участок: пятиосевые пилы, фрезеровочные узлы</li>
                  <li>Зона заливки смолы: вакуумные насосы, термокамеры, вибростенды</li>
                  <li>Покрасочная камера для равномерного нанесения защитных покрытий</li>
                  <li>Упаковочная линия: защита углов и торцов, пленочные покрытия, пузырчатой пленкой</li>
                </ul>
              </div>

              <div className={styles.processStep}>
                <h3>ЭКОЛОГИЧНОСТЬ И БЕЗОПАСНОСТЬ</h3>
                <ul>
                  <li>Смолы только сертифицированные составы (без токсичных испарений после застывания)</li>
                  <li>Отходы пиления и обрезки дерева идут на другие проекты (например, эпоксидные подставки)</li>
                  <li>Энергосбережение: используем LED-лампы и рекуперацию тепла от термокамер</li>
                </ul>
              </div>

              <div className={styles.processStep}>
                <h3>ДОСТАВКА И МОНТАЖ</h3>
                <ul>
                  <li>Грузчики с опытом в перевозке крупных изделий</li>
                  <li>Жёсткая упаковка с креплением против вибрации</li>
                  <li>Доставка под ключ: сборка на месте, выравнивание по уровню, подключение подсветки</li>
                </ul>
              </div>

              <div className={styles.processStep}>
                <h3>ПОЧЕМУ КЛИЕНТЫ ДОВЕРЯЮТ НАШЕМУ ПРОИЗВОДСТВУ?</h3>
                <ul>
                  <li>✓ Прозрачность: можете прийти и в цех и посмотреть, как создается ваш стол</li>
                  <li>✓ Скорость: от эскиза до готового изделия - 14-21 день</li>
                  <li>✓ Гарантия 5 лет на отсутствие трещин и пожелтения смолы</li>
                  <li>✓ Мы не делаем мебель «на поток» - каждый стол как для себя</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 
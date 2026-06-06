import Countdown from "../../app/components/Countdown";
import DressCodeSlider from "../../app/components/DressCodeSlider";
import WelcomeSection from "../../app/components/WelcomeSection";
import YandexFormEmbed from "../../app/components/YandexFormEmbed";
import { dressCodeImages } from "../../app/dressCodeImages";
import HeroSection from "./Section-2-129";

export default function СайтПриглашениеНаСвадьбуМобилка() {
  const weddingDate = new Date('2026-08-29T15:00:00');

  return (
    <div className="bg-[#FAFBF9] min-h-screen w-full">
      {/* Hero Section - Ticket Style */}
      <section className="relative h-[816px] w-full shrink-0 overflow-hidden">
        <HeroSection />
      </section>

      <WelcomeSection variant="mobile" />

      {/* Venue Section */}
      <section className="bg-[#FAFBF9] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#525834] text-4xl font-['Playfair_Display'] font-medium text-center mb-12">
            Место проведения торжества
          </h2>
          <div className="bg-white rounded-xl border border-[rgba(82,88,52,0.1)] p-8">
            <div className="flex gap-4 mb-6">
              <div className="mt-1">
                <svg className="w-6 h-6 text-[#525834]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#525834] text-xl font-semibold mb-2">Ресторан "Шале"</h3>
                <p className="text-[#4b4d4d]">г. Москва, Электролитный проезд, 7к2</p>
              </div>
            </div>
            <div className="rounded-lg h-72 mb-6 overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.610740%2C55.675469&z=16&l=map&pt=37.610740%2C55.675469%2Cpm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                style={{ position: 'relative' }}
              />
            </div>
            <a
              href="https://yandex.ru/maps/-/CPHtID36"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#525834] text-white rounded-lg px-8 py-3 hover:bg-[#525834]/90 transition text-center"
            >
              Открыть в Яндекс.Картах
            </a>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="bg-[#FAFBF9] py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[#525834] text-4xl font-['Playfair_Display'] font-medium text-center mb-12">
            Программа дня
          </h2>
          <div className="space-y-12">
            {[
              { time: "15:00", title: "Сбор гостей", desc: "Приветственные напитки и фотосессия" },
              { time: "16:00", title: "Церемония", desc: "Самый трогательный момент" },
              { time: "17:00", title: "Банкет", desc: "Праздничный ужин, поздравления и развлечения" },
              { time: "23:00", title: "Завершение вечера", desc: "Финальный аккорд прекрасного дня" },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="text-[#525834] text-5xl font-['Playfair_Display'] font-semibold w-32 text-right">
                  {item.time}
                </div>
                <div className="flex-1 pt-3">
                  <h3 className="text-[#525834] text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-[#4b4d4d]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dress Code Section */}
      <section className="bg-[#FAFBF9] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#525834] text-4xl font-['Playfair_Display'] font-medium text-center mb-8">
            Дресс-код
          </h2>
          <p className="text-[#4b4d4d] text-lg text-center mb-8 leading-relaxed">
            Мы очень старались сделать праздник красивым и будем рады,
            <br />
            если в своих нарядах вы поддержите цветовую гамму нашей свадьбы!
          </p>
          <h3 className="text-[#525834] text-xl font-semibold text-center mb-6">
            Цветовая палитра
          </h3>
          <div className="flex flex-wrap gap-6 justify-center mb-12">
            {[
              { color: "#d9d9d9", name: "Светло-серый" },
              { color: "#dbcab6", name: "Бежевый" },
              { color: "#b4c5a5", name: "Мятный" },
              { color: "#525834", name: "Оливковый" },
              { color: "#694532", name: "Коричневый" },
              { color: "#4a4a4a", name: "Графитовый" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className="w-20 h-20 rounded-3xl border-2 border-white shadow-lg mb-2"
                  style={{ backgroundColor: item.color }}
                />
                <p className="text-[#4b4d4d] text-sm">{item.name}</p>
              </div>
            ))}
          </div>
          <h3 className="text-[#525834] text-xl font-semibold text-center mb-8">
            Образы для вдохновения
          </h3>
          <DressCodeSlider images={dressCodeImages} />
        </div>
      </section>

      {/* Important Details Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#525834] text-4xl font-['Playfair_Display'] font-medium text-center mb-12">
            Важные детали
          </h2>
          <div className="bg-[#cbe1b7] rounded-xl overflow-hidden">
            <div className="p-8 text-center">
              <h3 className="text-[#525834] text-xl font-['Playfair_Display'] font-semibold mb-4">
                Подарки
              </h3>
              <p className="text-[#4b4d4d] leading-relaxed">
                Лучший подарок для нас — это ваше присутствие!
                <br />
                Но если вы хотите порадовать нас, мы будем благодарны за конверт, который поможет нам в начале нашего семейного пути
              </p>
            </div>
            <div className="h-px bg-[#afb785] mx-8" />
            <div className="p-8 text-center">
              <h3 className="text-[#525834] text-xl font-['Playfair_Display'] font-semibold mb-4">
                <span className="line-through">Горько</span> Сладко
              </h3>
              <p className="text-[#4b4d4d] leading-relaxed">
                От всего сердца просим вас воздержаться от криков "Горько!" и сохранить атмосферу уютного семейного вечера
              </p>
            </div>
            <div className="h-px bg-[#afb785] mx-8" />
            <div className="p-8 text-center">
              <h3 className="text-[#525834] text-xl font-['Playfair_Display'] font-semibold mb-4">
                Цветы
              </h3>
              <p className="text-[#4b4d4d] leading-relaxed">
                Знаем, что на свадьбу принято дарить цветы.
                <br />
                Но мы планируем поездку после торжества и очень расстроимся, что не сможем насладиться красотой букетов
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="bg-[#FAFBF9] py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[#525834] text-4xl font-['Playfair_Display'] font-medium mb-8">
            Подтверждение присутствия
          </h2>
          <p className="text-[#4b4d4d] text-lg mb-8">
            Заполните, пожалуйста, анкету и подтвердите свое присутствие до 30 июня 2026 года
          </p>
          <div className="h-[520px] overflow-y-auto rounded-xl border border-[rgba(82,88,52,0.1)] bg-white p-4">
            <YandexFormEmbed />
          </div>
        </div>
      </section>

      {/* Chat Section */}
      <section className="bg-[#FAFBF9] py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[#525834] text-4xl font-['Playfair_Display'] font-medium mb-8">
            Чат для гостей
          </h2>
          <p className="text-[#4b4d4d] text-lg leading-relaxed mb-6">
            Для вашего удобства мы создали чат в Telegram, куда можно будет добавлять фото и видео со свадьбы.
            <br />
            Давайте поделимся друг с другом счастливыми моментами этого важного дня и будем на связи!
          </p>
          <a
            href="https://t.me/+cwiV4hQiULZiZWVi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-lg border border-[#525834] px-8 py-4 text-lg text-[#525834] transition hover:bg-[#525834] hover:text-white"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Вступить в чат
          </a>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="bg-[#FAFBF9] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#525834] mb-4">До начала торжества</p>
          <Countdown
            targetDate={weddingDate}
            className="text-[#525834] text-5xl font-['Playfair_Display'] font-normal"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#525834] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white text-2xl font-['Playfair_Display'] mb-4">С любовью,</p>
          <p className="text-white text-3xl font-['Playfair_Display'] mb-8">Максим & Оксана</p>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-[#b4c5a5]" />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-block bg-red-600 px-4 py-2 rounded-full mb-6">
              🎁 Специальное предложение
            </div>
            
            <h2 className="text-4xl mb-6">
              Попробуйте наши услуги бесплатно
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Мы решим несколько ваших задач совершенно бесплатно. 
              Убедитесь в качестве нашей работы на практике.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-2xl text-red-500 flex-shrink-0 mt-1">✓</span>
                <div>
                  <div className="text-white">Бесплатное решение 2-3 задач</div>
                  <div className="text-gray-400">Без обязательств и скрытых платежей</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl text-red-500 flex-shrink-0 mt-1">✓</span>
                <div>
                  <div className="text-white">Быстрый ответ специалиста</div>
                  <div className="text-gray-400">Обычно отвечаем в течение 15 минут</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl text-red-500 flex-shrink-0 mt-1">✓</span>
                <div>
                  <div className="text-white">Подробные объяснения</div>
                  <div className="text-gray-400">Научим решать подобные задачи самостоятельно</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+79001234567"
                className="flex items-center justify-center gap-3 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors"
              >
                <span>📞</span>
                <span>8-800-200-8089</span>
              </a>
              <a 
                href="mailto:info@apogey.ru"
                className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span>✉️</span>
                <span>info@apogey.ru</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl text-black mb-6">
              Оставьте заявку
            </h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                  Ваше имя *
                </label>
                <input 
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                  placeholder="Например: Елена"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                  Телефон *
                </label>
                <input 
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                  Email
                </label>
                <input 
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                  placeholder="your@email.ru"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                  Опишите вашу задачу
                </label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors resize-none"
                  placeholder="Расскажите, с чем нужна помощь..."
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors shadow-lg"
              >
                Отправить заявку
              </button>

              <p className="text-sm text-gray-600 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

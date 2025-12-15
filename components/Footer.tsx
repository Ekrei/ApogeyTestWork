export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10  flex items-center justify-center">
                <img 
                src="icons\apogey.png"
                alt="apogey"
                className="w-auto h-auto "
              />
              </div>
              <div className="text-xl">Апогей 1С</div>
            </div>
            <p className="text-gray-400 mb-6">
              Профессиональная поддержка и консультации по 1С для госучреждений
            </p>
          </div>

          <div>
            <h3 className="text-lg mb-6">Быстрые ссылки</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-red-600 transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#how-we-work" className="text-gray-400 hover:text-red-600 transition-colors">
                  Как мы работаем
                </a>
              </li>
              <li>
                <a href="#articles" className="text-gray-400 hover:text-red-600 transition-colors">
                  База знаний
                </a>
              </li>
              <li>
                <a href="#videos" className="text-gray-400 hover:text-red-600 transition-colors">
                  Видеоуроки
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-400 hover:text-red-600 transition-colors">
                  Отзывы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-6">Ресурсы</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                  Инструкции по 1С
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                  Частые вопросы
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                  Блог
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                  Документация
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:8-800-200-8089" className="flex items-start gap-3 text-gray-400 hover:text-red-600 transition-colors">
                  <span className="flex-shrink-0">📞</span>
                  <span>8-800-200-8089</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@apogey.ru" className="flex items-start gap-3 text-gray-400 hover:text-red-600 transition-colors">
                  <span className="flex-shrink-0">✉️</span>
                  <span>info@apogey.ru</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <span className="flex-shrink-0">📍</span>
                  <span>ул. Карла Маркса, 78Б, Красноярск (этаж 2, 5, 6)</span>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-gray-500">Работаем:</p>
              <p className="text-gray-400">Пн-Вск: 24/7</p>
              <p className="text-gray-400">Поддержка: 24/7</p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Апогей. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                Условия использования
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

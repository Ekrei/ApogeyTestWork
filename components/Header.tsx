import { ImageWithFallback } from './figma/ImageWithFallback';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12  flex items-center justify-center">
              <img 
                src="icons\apogey.png"
                alt="apogey"
                className="w-auto h-auto "
              />
            </div>
            <div>
              <div className="text-xl text-black">Апогей 1С</div>
              <div className="text-xs text-gray-600">Быстрые решения для бухгалтерии</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-black hover:text-red-600 transition-colors">
              Услуги
            </a>
            <a href="#how-we-work" className="text-black hover:text-red-600 transition-colors">
              Как мы работаем
            </a>
            <a href="#articles" className="text-black hover:text-red-600 transition-colors">
              База знаний
            </a>
            <a href="#videos" className="text-black hover:text-red-600 transition-colors">
              Видеоуроки
            </a>
            <a href="#reviews" className="text-black hover:text-red-600 transition-colors">
              Отзывы
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex flex-col items-end">
              <a href="tel:8-800-200-8089" className="flex items-center gap-2 text-black hover:text-red-600">
                <span>📞</span>
                <span>8-800-200-8089</span>
              </a>
              <a href="mailto:info@apogey.ru" className="text-sm text-gray-600 hover:text-red-600">
                info@apogey.ru
              </a>
            </div>
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
              Попробовать бесплатно
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

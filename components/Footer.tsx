import React from 'react';
import { MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 bg-white pt-12 pb-8 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
             <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-bold text-xs">GB</div>
             <span className="font-bold text-gray-900">GrowBRICS</span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed mb-4">
            Международная цифровая экосистема развития кадров стран БРИКС
          </p>
          <p className="text-xs text-gray-500">Email: contact@growbrics.ru</p>
        </div>

        <div>
          <h4 className="font-bold text-sm text-gray-900 mb-4">Платформа</h4>
          <ul className="space-y-3 text-xs text-gray-600">
            <li><a href="#" className="hover:text-blue-600">Вакансии</a></li>
            <li><a href="#" className="hover:text-blue-600">Кадры</a></li>
            <li><a href="#" className="hover:text-blue-600">Возможности</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm text-gray-900 mb-4">Компания</h4>
          <ul className="space-y-3 text-xs text-gray-600">
            <li><a href="#" className="hover:text-blue-600">О нас</a></li>
            <li><a href="#" className="hover:text-blue-600">Блог</a></li>
            <li><a href="#" className="hover:text-blue-600">Контакты</a></li>
            <li><a href="#" className="hover:text-blue-600">Документация</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm text-gray-900 mb-4">Мы в сети</h4>
          <ul className="space-y-3 text-xs text-gray-600">
            <li className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-blue-500 text-white flex items-center justify-center text-[8px]">V</span>
                <a href="#" className="hover:text-blue-600">ВКонтакте</a>
            </li>
            <li className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-green-500 text-white flex items-center justify-center text-[8px]">W</span>
                <a href="#" className="hover:text-blue-600">WhatsApp</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500">
        <p>© 2024 GrowBRICS. Все права защищены.</p>
        <div className="flex gap-4 underline">
            <a href="#">Условия использования</a>
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Настройки cookie</a>
        </div>
      </div>
    </footer>
  );
};
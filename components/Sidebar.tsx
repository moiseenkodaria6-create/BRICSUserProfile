import React from 'react';
import { Home, Briefcase, FileText, Heart, User } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const navItems = [
    { icon: Home, label: 'Главная', active: false },
    { icon: Briefcase, label: 'Профиль', active: true },
    { icon: FileText, label: 'Отклики', active: false },
    { icon: Briefcase, label: 'Вакансии', active: false },
    { icon: Heart, label: 'Избранное', active: false },
  ];

  return (
    <aside className="hidden md:flex flex-col w-24 bg-white border-r border-gray-200 min-h-screen py-6 items-center fixed left-0 top-16 z-10">
      <div className="flex flex-col gap-6 w-full px-2">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`flex flex-col items-center justify-center py-3 rounded-lg transition-colors group ${
              item.active
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <item.icon
              size={24}
              className={`mb-1 ${item.active ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-900'}`}
            />
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
};
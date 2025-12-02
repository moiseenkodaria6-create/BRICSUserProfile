import React from 'react';
import { Globe, Bell, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 fixed top-0 w-full z-20">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 font-bold text-xl">
          GB
        </div>
        <div className="hidden md:flex items-center gap-1 text-gray-600 text-sm ml-4 cursor-pointer hover:text-gray-900">
          <Globe size={16} />
          <span>Русский</span>
          <ChevronDown size={14} />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative cursor-pointer">
          <Bell size={20} className="text-gray-500 hover:text-gray-700" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
            <div className="text-right hidden sm:block">
                <p className="text-xs text-gray-500">Profile last updated on: <span className="font-bold text-gray-800">Oct 19, 2025</span></p>
            </div>
          <img
            src="https://picsum.photos/seed/user123/100/100"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover border border-gray-200"
          />
        </div>
      </div>
    </header>
  );
};
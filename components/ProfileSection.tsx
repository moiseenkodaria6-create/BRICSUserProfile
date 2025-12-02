import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { UserProfile } from '../types';

interface Props {
  user: UserProfile;
}

const data = [
  { name: 'Completed', value: 80, fill: '#3b82f6' }, // Blue
  { name: 'Remaining', value: 20, fill: '#e5e7eb' }, // Gray
];

export const ProfileSection: React.FC<Props> = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
      {/* Header Row: Warning & Steps Button */}
      <div className="p-6 pb-4 flex justify-between items-center text-sm">
        <div className="flex items-center gap-2 text-gray-700 font-medium">
             <UserIconFallback />
             <span>Your profile can't be found by recruiters because it's missing key information</span>
        </div>
        <button className="flex items-center gap-1 text-gray-500 hover:text-gray-900 text-xs font-medium transition-colors">
             4 steps to complete <ChevronRight size={14} />
        </button>
      </div>

      <div className="p-6 pt-2 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center border-t border-gray-100">
        {/* Left: User Info */}
        <div className="lg:col-span-2 flex items-start gap-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
            <p className="text-sm text-gray-600 font-medium mb-1">{user.role}</p>
            <div className="flex items-center gap-1 text-gray-500 text-xs">
              <MapPin size={12} />
              <span>{user.location}</span>
            </div>
          </div>
        </div>

        {/* Right: Chart & View Profile Link */}
        <div className="flex flex-col items-center lg:items-end justify-center gap-2">
            <div className="text-[10px] text-gray-400 cursor-pointer hover:text-gray-600 mr-2">
                 View your public profile <span className="text-blue-500 font-medium">Edit</span>
            </div>
            <div className="relative w-32 h-32">
                <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={55}
                    startAngle={90}
                    endAngle={-270}
                    dataKey="value"
                    stroke="none"
                    />
                </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-2xl font-bold text-gray-900">{user.completion}%</span>
                    <span className="text-[10px] text-gray-500 leading-tight">Profile<br/>Completion</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const UserIconFallback = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
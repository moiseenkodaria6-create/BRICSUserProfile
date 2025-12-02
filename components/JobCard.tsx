import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';
import { Job } from '../types';

interface Props {
  job: Job;
}

export const JobCard: React.FC<Props> = ({ job }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
      <div className="w-full h-32 rounded-lg overflow-hidden mb-4 bg-gray-100">
        <img src={job.image} alt={job.company} className="w-full h-full object-cover" />
      </div>
      
      <div className="mb-4 flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{job.title}</h3>
        <p className="text-sm font-semibold text-gray-600 mb-3">{job.company}</p>
        
        <p className="text-sm text-gray-500 line-clamp-3 mb-4">
          {job.description}
        </p>

        <div className="flex flex-col gap-2 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Briefcase size={14} />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>{job.type}</span>
          </div>
        </div>
      </div>

      <button className="w-full bg-[#1e1e1e] text-white py-2.5 rounded-lg font-medium text-sm hover:bg-black transition-colors">
        Apply
      </button>
    </div>
  );
};
import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ProfileSection } from './components/ProfileSection';
import { JobCard } from './components/JobCard';
import { Footer } from './components/Footer';
import { Job, UserProfile } from './types';

const mockUser: UserProfile = {
  name: 'Daria Moiseenko',
  role: 'Accreditation Manager @ Universiade 2019',
  location: 'Krasnoyarsk',
  completion: 80,
  status: 'Ready to interview',
  avatar: 'https://picsum.photos/seed/daria/200/200',
};

const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Product Manager',
    company: 'TechGlobal Solutions',
    description: 'Product Manager is a retine primam hoonnissing to team prevented n m abject managigs, endatnpr inirm and commeny in eoxn to bonrt profits cruxemer and manager s\' prowset manager.',
    location: 'Krasnoyarsk',
    type: 'Remote',
    image: 'https://picsum.photos/seed/office1/400/200',
  },
  {
    id: '2',
    title: 'Senior UX Designer',
    company: 'InnovateNow Inc.',
    description: 'Senior UX Designer is a coraviated cemplete and designer. InnovateNow inc, cnject whery to mamagement compoiting ieratant to management deviening and developent msnuats.',
    location: 'Krasnoyarsk',
    type: 'Krasnoyarsk',
    image: 'https://picsum.photos/seed/office2/400/200',
  },
  {
    id: '3',
    title: 'Data Scientist',
    company: 'DataWave Analytics',
    description: 'Data scientist dolor sit amet, consectetur adipiscing elit, innoorden repoenation or selecties, meon scientific marketies and cempleted varialities ror mew using detts eotirenium.',
    location: 'Krasnoyarsk',
    type: 'Moscow',
    image: 'https://picsum.photos/seed/office3/400/200',
  },
  {
    id: '4',
    title: 'Marketing Specialist',
    company: 'GrowthGurus',
    description: 'Marketing specialist is a cosahstaner engivoeeer maketiimc dieucont negrowsiix, mtarcertea marketing comprete. Parent desoloation cusomvnce, and orowsn your business and woud.',
    location: 'Krasnoyarsk',
    type: 'Saint Petersburg',
    image: 'https://picsum.photos/seed/office4/400/200',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] text-gray-900 font-sans">
      <Header />
      <Sidebar />
      
      {/* Main Content Area */}
      <main className="pt-20 md:pl-24 pb-8 pr-4 pl-4 max-w-[1400px] mx-auto">
        <div className="max-w-6xl mx-auto">
          
          <ProfileSection user={mockUser} />
          
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recommended Jobs</h2>
            <button className="text-xs text-gray-500 hover:text-blue-600">Change job preferences</button>
          </div>
          <p className="text-xs text-gray-500 mb-6 -mt-4">Jobs where you're a top applicant based on your profile job search</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

        </div>
      </main>

      <div className="md:pl-24">
         <Footer />
      </div>
    </div>
  );
}

export default App;
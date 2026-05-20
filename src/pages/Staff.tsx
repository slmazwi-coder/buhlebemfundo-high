import React from 'react';
import { User } from 'lucide-react';

interface StaffMember {
  name: string;
  position: string;
  subject?: string;
  category: string;
  image?: string;
}

const staffData: StaffMember[] = [
  // Leadership
  {
    name: 'Mr. S. Dlamini',
    position: 'Principal',
    category: 'Leadership',
  },
  {
    name: 'Deputy Principal',
    position: 'Deputy Principal',
    category: 'Leadership',
  },

  // Departmental Heads
  {
    name: 'HOD — Humanities',
    position: 'Head of Department',
    subject: 'Humanities',
    category: 'Departmental Heads',
  },
  {
    name: 'HOD — Mathematics & Science',
    position: 'Head of Department',
    subject: 'Mathematics & Science',
    category: 'Departmental Heads',
  },
  {
    name: 'HOD — Languages',
    position: 'Head of Department',
    subject: 'Languages',
    category: 'Departmental Heads',
  },

  // Class Teachers
  { name: 'Class Teacher', position: 'Class Teacher — Grade 8A',  category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 8B',  category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 8C',  category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 9A',  category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 9B',  category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 9C',  category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 10A', category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 10B', category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 10C', category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 11A', category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 11B', category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 11C', category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 12A', category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 12B', category: 'Class Teachers' },
  { name: 'Class Teacher', position: 'Class Teacher — Grade 12C', category: 'Class Teachers' },

  // Support Staff
  { name: 'School Administrator', position: 'School Administrator', category: 'Support Staff' },
  { name: 'Security Officer',     position: 'Security Officer',     category: 'Support Staff' },
  { name: 'Learner Support Agent',position: 'Learner Support Agent',category: 'Support Staff' },
];

const categories = [
  'Leadership',
  'Departmental Heads',
  'Class Teachers',
  'Support Staff',
];

const StaffCard = ({ member }: { member: StaffMember }) => (
  <div className="rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center p-6 text-center hover:-translate-y-1 bg-white border border-blue-100">
    <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4 overflow-hidden bg-blue-50 border-3 border-school-primary" style={{ borderWidth: '3px' }}>
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
      ) : (
        <User size={40} className="text-school-primary opacity-50" />
      )}
    </div>

    <h3 className="text-sm font-bold leading-tight text-school-primary">
      {member.name}
    </h3>
    <p className="text-xs font-semibold mt-1 text-gray-500">
      {member.position}
    </p>
    {member.subject && (
      <span className="mt-2 inline-block text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-school-primary border border-blue-200">
        {member.subject}
      </span>
    )}
  </div>
);

export const Staff = () => {
  const [activeCategory, setActiveCategory] = React.useState('Leadership');
  const filtered = staffData.filter(m => m.category === activeCategory);

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight mb-3 text-school-primary">
            Our Staff
          </h1>
          <div className="w-16 h-1 mx-auto rounded-full mb-4 bg-school-primary" />
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Meet the dedicated team of educators and support staff at Buhlebemfundo Secondary School.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-md border-2 ${
                activeCategory === cat
                  ? 'bg-school-primary text-white border-school-primary'
                  : 'bg-white text-school-primary border-school-primary'
              }`}
            >
              {cat}
              <span className="ml-2 text-xs font-bold opacity-60">
                ({staffData.filter(m => m.category === cat).length})
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {filtered.map((member, index) => (
            <div key={index}><StaffCard member={member} /></div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs mt-10 italic">
          Staff names and photos will be updated progressively. Add details via the Staff Portal.
        </p>
      </div>
    </div>
  );
};

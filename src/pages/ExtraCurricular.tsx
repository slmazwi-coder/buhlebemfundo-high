import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Music, Users, Star, Dumbbell } from 'lucide-react';

const programs = [
  { name: 'Rugby', icon: Dumbbell, description: 'Our flagship sport with a rich history of regional dominance.', image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=500' },
  { name: 'Netball', icon: Users, description: 'Competitive teams across all age groups with provincial accolades.', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=500' },
  { name: 'Choral Music', icon: Music, description: 'Award-winning choir known for excellence in regional competitions.', image: 'https://images.unsplash.com/photo-1514320298304-df441862776a?auto=format&fit=crop&q=80&w=500' },
  { name: 'Debating & Public Speaking', icon: Star, description: 'Developing critical thinkers and eloquent future leaders.', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=500' },
];

const accolades = [
  { title: "Regional Rugby Champions", year: "2024", category: "Sport" },
  { title: "Provincial Choir Competition - 1st Place", year: "2023", category: "Music" },
  { title: "National Spelling Bee Finalist", year: "2025", category: "Academic" },
  { title: "District Netball Gold Medalists", year: "2024", category: "Sport" },
];

export const ExtraCurricular = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">Sports & Culture</h1>
        
        <p className="text-center text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          At Nyanga High School, we believe in a holistic education. Our extra-curricular programs are designed to discover and nurture the diverse talents of our learners.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {programs.map((prog, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="card text-center p-0 overflow-hidden"
            >
              <div className="aspect-video relative">
                <img 
                  src={prog.image} 
                  alt={prog.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=500`;
                  }}
                />
                <div className="absolute inset-0 bg-school-green/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                   <prog.icon size={48} className="text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{prog.name}</h3>
                <p className="text-gray-600">{prog.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <section>
            <h2 className="text-3xl font-bold text-school-green mb-8 flex items-center gap-3">
              <Trophy className="text-yellow-600" /> Recent Accolades
            </h2>
            <div className="space-y-4">
              {accolades.map((acc, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-lg">{acc.title}</h4>
                    <p className="text-gray-500">{acc.category} • {acc.year}</p>
                  </div>
                  <div className="p-2 bg-yellow-50 text-yellow-600 rounded-lg">
                    <Trophy size={20} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-school-green mb-8">Hall of Fame</h2>
            <div className="bg-school-green rounded-3xl p-8 text-white">
              <p className="text-lg italic mb-8">
                "Recognizing those who have gone above and beyond in representing Nyanga High School at regional, provincial, and national levels."
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold">1</div>
                  <div>
                    <p className="font-bold">L. Ndlovu</p>
                    <p className="text-sm text-green-100">National Rugby U18 Representative (2024)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold">2</div>
                  <div>
                    <p className="font-bold">S. Mbeki</p>
                    <p className="text-sm text-green-100">Provincial Choir Soloist Winner (2023)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold">3</div>
                  <div>
                    <p className="font-bold">M. Dlamini</p>
                    <p className="text-sm text-green-100">Regional Chess Champion (2025)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

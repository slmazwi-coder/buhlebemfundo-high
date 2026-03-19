import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Star, TrendingUp, BarChart3 } from 'lucide-react';

const subjectStats = [
  { subject: "Accounting", rate: 90.6 },
  { subject: "Agricultural Sciences", rate: 97.9 },
  { subject: "Business Studies", rate: 98.1 },
  { subject: "Economics", rate: 96.2 },
  { subject: "English FAL", rate: 100 },
  { subject: "Geography", rate: 99.3 },
  { subject: "IsiXhosa HL", rate: 100 },
  { subject: "History", rate: 97.9 },
  { subject: "Life Orientation", rate: 100 },
  { subject: "Life Sciences", rate: 97 },
  { subject: "Mathematics", rate: 71.1 },
  { subject: "Physical Sciences", rate: 82.1 },
];

const hallOfFame = [
  { name: "John Doe", achievement: "Top 10 in Province - Position 2", year: "2024", image: "https://i.pravatar.cc/400?img=12" },
  { name: "Jane Smith", achievement: "Top Achiever in Mathematics", year: "2024", image: "https://i.pravatar.cc/400?img=24" },
  { name: "Robert Brown", achievement: "Top Achiever in Physical Sciences", year: "2024", image: "https://i.pravatar.cc/400?img=36" },
];

export const Achievements = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">Academic Achievements Board</h1>

        {/* 2025 Matric Summary */}
        <section className="mb-24">
          <div className="bg-school-green rounded-3xl p-10 text-white shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Trophy size={200} />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <Star className="text-yellow-400" /> 2025 Matric Results Summary
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <p className="text-5xl font-bold mb-2">89.9%</p>
                  <p className="text-green-100 font-medium">Overall Pass Rate</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <p className="text-5xl font-bold mb-2">206</p>
                  <p className="text-green-100 font-medium">Bachelor Passes (71.8%)</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <p className="text-5xl font-bold mb-2">451</p>
                  <p className="text-green-100 font-medium">Total Distinctions</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <p className="text-5xl font-bold mb-2">287</p>
                  <p className="text-green-100 font-medium">Learners Wrote</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subject Pass Rates */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-school-green mb-10 flex items-center gap-3">
            <BarChart3 /> Subject Pass Rate Percentages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjectStats.map((stat, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-bold text-gray-700">{stat.subject}</span>
                  <span className="text-school-green font-bold">{stat.rate}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.rate}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.05 }}
                    className="bg-school-green h-2.5 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hall of Fame */}
        <section>
          <h2 className="text-3xl font-bold text-school-green mb-10 flex items-center gap-3">
            <Trophy className="text-yellow-600" /> Hall of Fame: Top Achievers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {hallOfFame.map((person, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-xl border-4 border-school-green/10">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://i.pravatar.cc/400?img=${i + 20}`;
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{person.name}</h3>
                <p className="text-school-green font-semibold mb-2">{person.achievement}</p>
                <span className="px-4 py-1 bg-gray-100 rounded-full text-sm font-bold text-gray-500">Class of {person.year}</span>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

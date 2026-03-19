import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Download, Search, Folder } from 'lucide-react';
import { cn } from '../lib/utils';

const grades = ['Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];

const documents = [
  { id: 1, title: "Term 1 Timetable", grade: "Grade 12", size: "1.2 MB", type: "PDF" },
  { id: 2, title: "Mathematics Study Guide", grade: "Grade 12", size: "4.5 MB", type: "PDF" },
  { id: 3, title: "Physical Sciences Schedule", grade: "Grade 11", size: "0.8 MB", type: "PDF" },
  { id: 4, title: "English FAL Workbook", grade: "Grade 10", size: "2.1 MB", type: "PDF" },
  { id: 5, title: "Grade 8 Orientation Pack", grade: "Grade 8", size: "3.2 MB", type: "PDF" },
  { id: 6, title: "History Revision Notes", grade: "Grade 12", size: "1.5 MB", type: "PDF" },
  { id: 7, title: "Accounting Practice Paper", grade: "Grade 12", size: "2.0 MB", type: "PDF" },
  { id: 8, title: "Life Sciences Lab Manual", grade: "Grade 10", size: "1.8 MB", type: "PDF" },
];

export const Documents = () => {
  const [selectedGrade, setSelectedGrade] = useState('Grade 12');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDocs = documents.filter(doc => 
    doc.grade === selectedGrade && 
    doc.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">Student Documents & Resources</h1>
        
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {grades.map((grade) => (
                <button
                  key={grade}
                  onClick={() => setSelectedGrade(grade)}
                  className={cn(
                    "px-6 py-2 rounded-full font-semibold transition-all",
                    selectedGrade === grade 
                      ? "bg-school-green text-white shadow-lg" 
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  )}
                >
                  {grade}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search documents..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-school-green/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.length > 0 ? (
            filteredDocs.map((doc) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                key={doc.id}
                className="card group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-50 text-school-green rounded-xl group-hover:bg-school-green group-hover:text-white transition-colors">
                    <FileText size={24} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-gray-800 mb-1">{doc.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{doc.type} • {doc.size}</p>
                    <button className="flex items-center gap-2 text-school-green font-bold hover:underline">
                      <Download size={16} /> Download
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <Folder size={64} className="mx-auto text-gray-200 mb-4" />
              <p className="text-gray-500 text-xl">No documents found for this grade.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

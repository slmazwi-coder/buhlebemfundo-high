import React, { useState } from 'react';
import { getContact, setContact, type ContactInfo } from '../utils/storage';
import { Save } from 'lucide-react';

export const ContactEditor = () => {
  const [info, setInfo] = useState<ContactInfo>(getContact());
  const [saved, setSaved] = useState(false);

  const save = () => {
    setContact(info);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Contact Information Editor</h1>
        <button onClick={save} className="flex items-center gap-2 bg-school-green text-white px-6 py-2 rounded-xl font-medium hover:bg-green-800">
          <Save size={18} /> {saved ? 'Saved ✓' : 'Save Changes'}
        </button>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 space-y-5">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Address</label>
          <input value={info.address} onChange={(e) => setInfo({ ...info, address: e.target.value })} className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Phone Number</label>
            <input value={info.phone} onChange={(e) => setInfo({ ...info, phone: e.target.value })} className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email Address</label>
            <input value={info.email} onChange={(e) => setInfo({ ...info, email: e.target.value })} className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white" />
          </div>
        </div>
        <h3 className="text-lg font-bold text-white pt-4 border-t border-gray-700">School Hours</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Mon – Thu</label>
            <input value={info.monThu} onChange={(e) => setInfo({ ...info, monThu: e.target.value })} className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Friday</label>
            <input value={info.friday} onChange={(e) => setInfo({ ...info, friday: e.target.value })} className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Sat – Sun</label>
            <input value={info.weekend} onChange={(e) => setInfo({ ...info, weekend: e.target.value })} className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

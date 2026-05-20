import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Staff', path: '/staff' },
  { name: 'Documents', path: '/documents' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Sport', path: '/sport' },
  { name: 'Activities', path: '/activities' },
  { name: 'Extra-Curricular', path: '/extra-curricular' },
  { name: 'General Application', path: '/admissions' },
  { name: 'Boarding Application', path: '/boarding' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl overflow-hidden flex items-center justify-center border border-school-primary/20 shadow-lg">
                <img src="/Logo/Badge.jpg" alt="Buhlebemfundo Logo" className="h-full w-full object-contain bg-white" />
              </div>
              <div className="hidden md:block">
                <span className="text-xl font-bold text-school-primary block leading-none">BUHLEBEMFUNDO</span>
                <span className="text-sm font-semibold text-gray-500">SECONDARY SCHOOL</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap",
                  location.pathname === link.path
                    ? "text-school-primary bg-blue-50 font-bold"
                    : "text-gray-600 hover:text-school-primary hover:bg-gray-50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/student/login"
              className={cn(
                'ml-2 px-4 py-2 rounded-lg text-sm font-bold transition-colors inline-flex items-center gap-2',
                location.pathname.startsWith('/student')
                  ? 'text-white bg-school-primary'
                  : 'text-school-primary border-2 border-school-primary hover:bg-school-primary hover:text-white'
              )}
            >
              <User size={15} /> Student Portal
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-school-primary p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  location.pathname === link.path
                    ? "text-school-primary bg-blue-50"
                    : "text-gray-600 hover:text-school-primary hover:bg-gray-50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-200">
              <Link
                to="/student/login"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-md text-base font-bold",
                  location.pathname.startsWith('/student')
                    ? 'text-white bg-school-primary'
                    : 'text-school-primary hover:bg-blue-50'
                )}
              >
                <User size={15} /> Student Portal
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

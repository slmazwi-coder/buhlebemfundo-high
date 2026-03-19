import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { NewsSection } from './components/NewsSection';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Documents } from './pages/Documents';
import { Achievements } from './pages/Achievements';
import { ExtraCurricular } from './pages/ExtraCurricular';
import { Admissions } from './pages/Admissions';
import { Contact } from './pages/Contact';

const HomePage = () => (
  <>
    <Hero />
    <NewsSection />
    <Home />
  </>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/extra-curricular" element={<ExtraCurricular />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

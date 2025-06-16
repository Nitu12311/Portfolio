import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SunIcon, MoonIcon, ArrowUpIcon } from 'lucide-react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import MarketingSection from './components/MarketingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
export function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return <div className={`${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-800'} min-h-screen transition-colors duration-300`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="w-full">
        <HeroSection darkMode={darkMode} />
        <AboutSection darkMode={darkMode} />
        <PortfolioSection darkMode={darkMode} />
        <MarketingSection darkMode={darkMode} />
        <ContactSection darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
      <AnimatePresence>
        {showScrollTop && <motion.button initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: 20
      }} onClick={scrollToTop} className={`fixed bottom-8 right-8 p-3 rounded-full ${darkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-pink-500 hover:bg-pink-600'} text-white shadow-lg transition-all`} aria-label="Scroll to top">
            <ArrowUpIcon size={24} />
          </motion.button>}
      </AnimatePresence>
    </div>;
}
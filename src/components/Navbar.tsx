import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from 'lucide-react';
interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  toggleDarkMode
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Portfolio',
    href: '#portfolio'
  }, {
    name: 'Marketing',
    href: '#marketing'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5
  }} className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? darkMode ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.2
        }} className="flex items-center">
            <a href="#home" className="text-2xl font-bold tracking-tighter">
              <span className={darkMode ? 'text-indigo-400' : 'text-pink-500'}>
                Nitu
              </span>
              <span> Jha</span>
            </a>
          </motion.div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <motion.a key={link.name} href={link.href} className={`font-medium transition-colors hover:${darkMode ? 'text-indigo-400' : 'text-pink-500'}`} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
                {link.name}
              </motion.a>)}
            <motion.button onClick={toggleDarkMode} className={`p-2 rounded-full ${darkMode ? 'bg-indigo-600 text-white' : 'bg-pink-100 text-pink-500'} transition-colors`} whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
              {darkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            </motion.button>
          </nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button onClick={toggleDarkMode} className={`p-2 mr-2 rounded-full ${darkMode ? 'bg-indigo-600 text-white' : 'bg-pink-100 text-pink-500'} transition-colors`} whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
              {darkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            </motion.button>
            <motion.button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-md" whileTap={{
            scale: 0.95
          }} aria-label="Toggle mobile menu">
              {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </motion.button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && <motion.div initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: 1,
      height: 'auto'
    }} exit={{
      opacity: 0,
      height: 0
    }} className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map(link => <a key={link.name} href={link.href} className={`py-2 font-medium ${darkMode ? 'hover:text-indigo-400' : 'hover:text-pink-500'}`} onClick={() => setMobileMenuOpen(false)}>
                  {link.name}
                </a>)}
            </nav>
          </div>
        </motion.div>}
    </motion.header>;
};
export default Navbar;
import React from 'react';
import { motion } from 'framer-motion';
interface FooterProps {
  darkMode: boolean;
}
const Footer: React.FC<FooterProps> = ({
  darkMode
}) => {
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
  return <footer className={`py-12 ${darkMode ? 'bg-gray-800' : 'bg-gray-900'} text-white`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="mb-8">
            <h2 className="text-2xl font-bold">
              <span className={darkMode ? 'text-indigo-400' : 'text-pink-400'}>
                Nitu
              </span>{' '}
              Jha
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Designing Impact, Driving Digital.
            </p>
          </motion.div>
          <motion.nav initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
            {navLinks.map(link => <a key={link.name} href={link.href} className={`text-sm transition-colors ${darkMode ? 'hover:text-indigo-400' : 'hover:text-pink-400'}`}>
                {link.name}
              </a>)}
          </motion.nav>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} viewport={{
          once: true
        }} className="text-center">
            <div className="w-24 h-0.5 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 mb-6"></div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Nitu Jha. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>;
};
export default Footer;
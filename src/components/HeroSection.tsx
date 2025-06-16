import React, { useEffect, useState, Children } from 'react';
import { motion } from 'framer-motion';
interface HeroSectionProps {
  darkMode: boolean;
}
const HeroSection: React.FC<HeroSectionProps> = ({
  darkMode
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };
  return <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => <motion.div key={index} initial={{
        opacity: 0
      }} animate={{
        opacity: index === currentImageIndex ? 0.15 : 0
      }} transition={{
        duration: 1
      }} className="absolute inset-0">
            <img src={img} alt="Background" className="w-full h-full object-cover" />
          </motion.div>)}
        <div className={`absolute inset-0 ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'}`}></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col lg:flex-row items-center justify-between">
        <motion.div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h2 variants={itemVariants} className={`text-lg font-semibold ${darkMode ? 'text-indigo-300' : 'text-pink-500'} mb-2`}>
            Hello, I'm
          </motion.h2>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            Nitu Jha
          </motion.h1>
          <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
            <span className="text-xl md:text-2xl font-medium">
              Graphic Designer
            </span>
            <span className={`block h-1.5 w-1.5 rounded-full ${darkMode ? 'bg-indigo-400' : 'bg-pink-500'}`}></span>
            <span className="text-xl md:text-2xl font-medium">
              Digital Marketer
            </span>
          </motion.div>
          <motion.p variants={itemVariants} className="text-xl mb-8 max-w-lg mx-auto lg:mx-0">
            <span className={`font-bold ${darkMode ? 'text-indigo-400' : 'text-pink-500'}`}>
              Designing Impact, Driving Digital.
            </span>
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#portfolio" className={`px-8 py-3 rounded-full ${darkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-pink-500 hover:bg-pink-600'} text-white font-medium transition-colors duration-300`}>
              View My Work
            </a>
            <a href="#contact" className={`px-8 py-3 rounded-full ${darkMode ? 'bg-transparent border border-indigo-600 text-indigo-400 hover:bg-indigo-900/30' : 'bg-transparent border border-pink-500 text-pink-500 hover:bg-pink-50'} font-medium transition-colors duration-300`}>
              Contact Me
            </a>
          </motion.div>
        </motion.div>
        <motion.div className="w-full lg:w-1/2 flex justify-center" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.5
      }}>
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {images.map((img, index) => <motion.div key={index} className="absolute inset-0 rounded-full overflow-hidden shadow-xl" initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: index === currentImageIndex ? 1 : 0,
            scale: index === currentImageIndex ? 1 : 0.8
          }} transition={{
            duration: 0.8
          }}>
                <img src={img} alt={`Nitu Jha - ${index}`} className="w-full h-full object-cover" />
              </motion.div>)}
          </div>
        </motion.div>
      </div>
      <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2" animate={{
      y: [0, 10, 0]
    }} transition={{
      repeat: Infinity,
      duration: 1.5
    }}>
        <a href="#about" aria-label="Scroll down" className={`flex items-center justify-center w-10 h-10 rounded-full ${darkMode ? 'bg-indigo-600 text-white' : 'bg-pink-500 text-white'}`}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 15L3 8H17L10 15Z" fill="currentColor" />
          </svg>
        </a>
      </motion.div>
    </section>;
};
export default HeroSection;
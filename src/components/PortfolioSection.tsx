import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
interface PortfolioSectionProps {
  darkMode: boolean;
}
const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  darkMode
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2
  });
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = [{
    id: 'all',
    name: 'All Works'
  }, {
    id: 'logos',
    name: 'Logo Designs'
  }, {
    id: 'social',
    name: 'Social Media'
  }, {
    id: 'posters',
    name: 'Posters'
  }, {
    id: 'mockups',
    name: 'Mockups'
  }];
  const portfolioItems = [{
    id: 1,
    title: 'Modern Logo Design',
    category: 'logos',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }, {
    id: 2,
    title: 'Instagram Post Design',
    category: 'social',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }, {
    id: 3,
    title: 'Event Poster',
    category: 'posters',
    image: 'https://images.unsplash.com/photo-1583203986390-bbe1fd72a01d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }, {
    id: 4,
    title: 'Product Mockup',
    category: 'mockups',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }, {
    id: 5,
    title: 'Brand Identity',
    category: 'logos',
    image: 'https://images.unsplash.com/photo-1600877685303-857fde8d40d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }, {
    id: 6,
    title: 'Facebook Campaign',
    category: 'social',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }, {
    id: 7,
    title: 'Marketing Poster',
    category: 'posters',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }, {
    id: 8,
    title: 'Packaging Mockup',
    category: 'mockups',
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }];
  const filteredItems = activeCategory === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === activeCategory);
  return <section id="portfolio" ref={ref} className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{' '}
            <span className={darkMode ? 'text-indigo-400' : 'text-pink-500'}>
              Portfolio
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-6 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Explore my graphic design projects showcasing creativity and
            attention to detail across different mediums.
          </p>
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => <motion.button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id ? darkMode ? 'bg-indigo-600 text-white' : 'bg-pink-500 text-white' : darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`} whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
              {category.name}
            </motion.button>)}
        </motion.div>
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => <motion.div key={item.id} layout initial={{
          opacity: 0,
          scale: 0.8
        }} animate={isInView ? {
          opacity: 1,
          scale: 1
        } : {
          opacity: 0,
          scale: 0.8
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="group relative overflow-hidden rounded-xl shadow-lg" whileHover={{
          y: -5
        }}>
              <div className="aspect-w-4 aspect-h-3">
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className={`absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm capitalize">
                    {item.category}
                  </p>
                </div>
              </div>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};
export default PortfolioSection;
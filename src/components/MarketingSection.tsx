import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BarChartIcon, MailIcon, SearchIcon, LineChartIcon } from 'lucide-react';
interface MarketingSectionProps {
  darkMode: boolean;
}
const MarketingSection: React.FC<MarketingSectionProps> = ({
  darkMode
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2
  });
  const marketingServices = [{
    title: 'Email Campaigns',
    description: 'HubSpot-powered email marketing campaigns with high open rates and conversion optimization.',
    icon: <MailIcon size={32} />,
    stats: '25% avg. open rate',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }, {
    title: 'SEO Strategy',
    description: 'Data-driven SEO strategies that improve search visibility and organic traffic growth.',
    icon: <SearchIcon size={32} />,
    stats: '40% traffic increase',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }, {
    title: 'Google Ads',
    description: 'Performance-focused Google Ad campaigns with optimized bidding and targeting strategies.',
    icon: <BarChartIcon size={32} />,
    stats: '3.5x ROAS',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }, {
    title: 'Meta Ads',
    description: 'Engaging Facebook and Instagram ad campaigns designed for maximum engagement and conversions.',
    icon: <LineChartIcon size={32} />,
    stats: '2.8% CTR',
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }];
  return <section id="marketing" ref={ref} className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
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
            Digital{' '}
            <span className={darkMode ? 'text-indigo-400' : 'text-pink-500'}>
              Marketing
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-6 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Strategic digital marketing solutions that drive growth, engagement,
            and measurable results.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {marketingServices.map((service, index) => <motion.div key={service.title} initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 30
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} className={`group rounded-2xl overflow-hidden shadow-xl ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className={`p-3 rounded-lg inline-flex ${darkMode ? 'bg-indigo-600 text-white' : 'bg-pink-500 text-white'}`}>
                      {service.icon}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-indigo-600/90 text-white' : 'bg-pink-500/90 text-white'}`}>
                      {service.stats}
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {service.description}
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className={`inline-flex items-center text-sm font-medium ${darkMode ? 'text-indigo-400' : 'text-pink-500'}`}>
                    Learn more
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>)}
        </div>
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }} transition={{
        duration: 0.6,
        delay: 0.5
      }} className={`mt-16 p-8 rounded-2xl ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-xl`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">
                Ready to boost your digital presence?
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                Let's collaborate on your next digital marketing campaign and
                achieve measurable results that drive your business forward.
              </p>
              <motion.a href="#contact" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className={`inline-flex items-center px-6 py-3 rounded-full ${darkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-pink-500 hover:bg-pink-600'} text-white font-medium transition-colors duration-300`}>
                Start a Project
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </motion.a>
            </div>
            <div className="md:w-1/3">
              <div className={`p-1 rounded-xl ${darkMode ? 'bg-gradient-to-br from-indigo-500 to-purple-600' : 'bg-gradient-to-br from-pink-500 to-purple-600'}`}>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-full rounded-full bg-gray-200 dark:bg-gray-600">
                      <div className="h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 w-3/4"></div>
                    </div>
                    <div className="h-4 w-full rounded-full bg-gray-200 dark:bg-gray-600">
                      <div className="h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 w-1/2"></div>
                    </div>
                    <div className="h-4 w-full rounded-full bg-gray-200 dark:bg-gray-600">
                      <div className="h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default MarketingSection;
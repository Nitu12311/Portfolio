import React, { useRef, Children } from 'react';
import { motion, useInView } from 'framer-motion';
import nitu from "../images/Nitu.png";
interface AboutSectionProps {
  darkMode: boolean;
}
const AboutSection: React.FC<AboutSectionProps> = ({
  darkMode
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3
  });
  const skills = [{
    name: 'Photoshop',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg'
    }, {
    name: 'Illustrator',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg'
  }, {
    name: 'Canva',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg'
  }, {
    name: 'HubSpot',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968872.png'
  }, {
    name: 'Google Ads',
    icon: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png'
  }, {
    name: 'Meta Ads',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png'
  }, {
    name: 'SEO',
    icon: 'https://cdn-icons-png.flaticon.com/512/3800/3800033.png'
  }, {
    name: 'HTML/CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  }, {
    name: 'UI Design',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png'
    
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
        duration: 0.6
      }
    }
  };
  return <section id="about" ref={ref} className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
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
            About{' '}
            <span className={darkMode ? 'text-indigo-400' : 'text-pink-500'}>
              Me
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-6 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: -50
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative">
            <div className={`absolute -inset-4 rounded-xl ${darkMode ? 'bg-indigo-500/10' : 'bg-pink-500/10'} -z-10 transform rotate-3`}></div>
            <div className={`absolute -inset-4 rounded-xl ${darkMode ? 'bg-purple-500/10' : 'bg-blue-500/10'} -z-10 transform -rotate-3`}></div>
            <img src={nitu} alt="Nitu Jha" className="w-full h-auto rounded-xl shadow-xl" />
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-6">
              Hello, I'm Nitu Jha
            </motion.h3>
            <motion.p variants={itemVariants} className="text-lg mb-6 leading-relaxed">
              I'm a passionate graphic designer and digital marketer currently
              pursuing B.Tech in IT at Dr. A.P.J. Abdul Kalam Women's Institute
              of Technology. I specialize in logo design, mockups, posters, and
              social media creatives. With hands-on experience in HubSpot email
              campaigns, Google Ads, Meta Ads, and SEO, I blend design with
              marketing to create impactful results.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg mb-8 leading-relaxed">
              Based in Darbhanga, Bihar, I'm a final-year student with a
              creative mindset and analytical approach to digital solutions. I
              constantly strive to merge aesthetic appeal with data-driven
              strategies to deliver compelling campaigns that drive engagement
              and conversions.
            </motion.p>
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold mb-4">My Skills & Tools</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {skills.map((skill, index) => <motion.div key={skill.name} className={`flex flex-col items-center p-4 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} shadow-md transition-all duration-300`} whileHover={{
                y: -5
              }} initial={{
                opacity: 0,
                y: 20
              }} animate={isInView ? {
                opacity: 1,
                y: 0
              } : {
                opacity: 0,
                y: 20
              }} transition={{
                duration: 0.5,
                delay: 0.1 * index
              }}>
                    <img src={skill.icon} alt={skill.name} className="w-10 h-10 mb-2" />
                    <p className="text-sm font-medium">{skill.name}</p>
                  </motion.div>)}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default AboutSection;
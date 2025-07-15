import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { LinkedinIcon, GithubIcon, SendIcon } from 'lucide-react';
interface ContactSectionProps {
  darkMode: boolean;
}
const ContactSection: React.FC<ContactSectionProps> = ({
  darkMode
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2
  });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        service: '',
        message: ''
      });
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  return <section id="contact" ref={ref} className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
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
            Get In{' '}
            <span className={darkMode ? 'text-indigo-400' : 'text-pink-500'}>
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-6 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's collaborate and create something
            amazing together.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
          duration: 0.6,
          delay: 0.2
        }}>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Location</h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Darbhanga, Bihar, India
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Email</h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  krinitudbg23@gmail.com
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Education</h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  B.Tech in Information Technology
                  <br />
                  Dr. A.P.J. Abdul Kalam Women's Institute of Technology
                </p>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                <motion.a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 text-indigo-400 hover:bg-indigo-600 hover:text-white' : 'bg-gray-100 text-pink-500 hover:bg-pink-500 hover:text-white'} transition-colors duration-300`} whileHover={{
                scale: 1.1
              }} whileTap={{
                scale: 0.9
              }} aria-label="LinkedIn">
                  <LinkedinIcon size={24} />
                </motion.a>
                <motion.a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 text-indigo-400 hover:bg-indigo-600 hover:text-white' : 'bg-gray-100 text-pink-500 hover:bg-pink-500 hover:text-white'} transition-colors duration-300`} whileHover={{
                scale: 1.1
              }} whileTap={{
                scale: 0.9
              }} aria-label="GitHub">
                  <GithubIcon size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: 50
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }}>
            <div className={`p-8 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-100'}`}>
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              {isSubmitted ? <motion.div initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} className={`p-4 rounded-lg ${darkMode ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700'} mb-6`}>
                  <p className="font-medium">
                    Thank you for your message! I'll get back to you soon.
                  </p>
                </motion.div> : null}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} required className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-indigo-500 focus:ring-indigo-500' : 'bg-gray-50 border-gray-300 focus:border-pink-500 focus:ring-pink-500'} border focus:outline-none focus:ring-2 transition-colors`} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} required className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-indigo-500 focus:ring-indigo-500' : 'bg-gray-50 border-gray-300 focus:border-pink-500 focus:ring-pink-500'} border focus:outline-none focus:ring-2 transition-colors`} />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Type
                  </label>
                  <select id="service" name="service" value={formState.service} onChange={handleChange} required className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-indigo-500 focus:ring-indigo-500' : 'bg-gray-50 border-gray-300 focus:border-pink-500 focus:ring-pink-500'} border focus:outline-none focus:ring-2 transition-colors`}>
                    <option value="">Select a service</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="logo-design">Logo Design</option>
                    <option value="social-media">Social Media Design</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="seo">SEO Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea id="message" name="message" value={formState.message} onChange={handleChange} required rows={4} className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-indigo-500 focus:ring-indigo-500' : 'bg-gray-50 border-gray-300 focus:border-pink-500 focus:ring-pink-500'} border focus:outline-none focus:ring-2 transition-colors`} />
                </div>
                <motion.button type="submit" disabled={isSubmitting} className={`w-full px-6 py-3 rounded-lg ${darkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-pink-500 hover:bg-pink-600'} text-white font-medium flex items-center justify-center transition-colors duration-300`} whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }}>
                  {isSubmitting ? <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg> : <SendIcon size={18} className="mr-2" />}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ContactSection;
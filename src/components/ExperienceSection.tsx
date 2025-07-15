import React from 'react';
import { Calendar, MapPin, ExternalLink, Award, Users, TrendingUp } from 'lucide-react';

interface ExperienceSectionProps {
  darkMode: boolean;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ darkMode }) => {

  const experiences = [
    {
      title: "Senior Digital Marketing Specialist",
      company: "Tech Solutions Inc.",
      location: "Remote",
      duration: "Jan 2023 - Present",
      type: "Full-time",
      description: "Led comprehensive digital marketing campaigns across multiple channels, driving 150% increase in online engagement and 40% growth in lead generation.",
      achievements: [
        "Managed $50K+ monthly ad spend across Google, Facebook, and LinkedIn",
        "Developed brand identity for 15+ clients resulting in 200% social media growth",
        "Implemented data-driven strategies that improved ROI by 65%"
      ],
      skills: ["Google Ads", "Facebook Marketing", "Brand Strategy", "Analytics"],
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "Graphic Designer & Social Media Manager",
      company: "Creative Studio Agency",
      location: "New York, NY",
      duration: "Jun 2021 - Dec 2022",
      type: "Full-time",
      description: "Created compelling visual content and managed social media presence for diverse clientele, from startups to established brands.",
      achievements: [
        "Designed 200+ marketing materials including logos, brochures, and web graphics",
        "Grew client social media followers by average of 300% within 6 months",
        "Collaborated with cross-functional teams on 25+ successful campaigns"
      ],
      skills: ["Adobe Creative Suite", "Social Media Strategy", "Content Creation", "Brand Design"],
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "Freelance Digital Marketing Consultant",
      company: "Self-Employed",
      location: "Remote",
      duration: "Mar 2020 - May 2021",
      type: "Freelance",
      description: "Provided strategic digital marketing solutions to small and medium businesses, focusing on brand development and online presence optimization.",
      achievements: [
        "Successfully launched digital presence for 20+ local businesses",
        "Achieved average 180% increase in client website traffic",
        "Built long-term relationships with 85% client retention rate"
      ],
      skills: ["SEO/SEM", "Content Marketing", "Email Marketing", "Client Relations"],
      icon: <Users className="w-5 h-5" />
    }
  ];

  return (
    <section className={`w-full transition-all duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          
          <h1 className={`text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Experience
          </h1>
          <p className={`text-xl ${
            darkMode ? 'text-purple-400' : 'text-pink-500'
          } font-medium`}>
            My Professional Journey
          </p>
          <p className={`text-lg mt-4 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Crafting digital experiences and driving meaningful results through strategic design and marketing
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
            darkMode ? 'bg-purple-600' : 'bg-pink-500'
          } hidden md:block`}></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 md:ml-16">
              {/* Timeline Dot */}
              <div className={`absolute -left-[70px] top-6 w-4 h-4 rounded-full ${
                darkMode ? 'bg-purple-600' : 'bg-pink-500'
              } hidden md:block`}></div>

              {/* Experience Card */}
              <div className={`${
                darkMode 
                  ? 'bg-slate-800/50 border-slate-700' 
                  : 'bg-white/80 border-gray-200'
              } backdrop-blur-sm border rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]`}>
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${
                        darkMode ? 'bg-purple-600/20 text-purple-400' : 'bg-pink-100 text-pink-600'
                      }`}>
                        {exp.icon}
                      </div>
                      <h3 className={`text-2xl font-bold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {exp.title}
                      </h3>
                    </div>
                    
                    <p className={`text-lg font-semibold mb-2 ${
                      darkMode ? 'text-purple-400' : 'text-pink-600'
                    }`}>
                      {exp.company}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className={`flex items-center gap-1 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className={`flex items-center gap-1 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        darkMode 
                          ? 'bg-purple-600/20 text-purple-400' 
                          : 'bg-pink-100 text-pink-600'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className={`text-lg mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className={`text-lg font-semibold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className={`flex items-start gap-3 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          darkMode ? 'bg-purple-400' : 'bg-pink-500'
                        }`}></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h4 className={`text-lg font-semibold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Skills & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className={`px-4 py-2 rounded-full text-sm font-medium ${
                        darkMode 
                          ? 'bg-slate-700 text-gray-300 border border-slate-600' 
                          : 'bg-gray-100 text-gray-700 border border-gray-300'
                      } hover:scale-105 transition-transform`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${
            darkMode 
              ? 'bg-purple-600 hover:bg-purple-700' 
              : 'bg-pink-500 hover:bg-pink-600'
          } text-white font-semibold transition-colors cursor-pointer group`}>
            <span>View My Portfolio</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import AnimatedCard from '../components/AnimatedCard';
import { Calendar, GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Lovely Professional University",
      duration: "2024 - 2027",
      description: "Specialized in Artificial Intelligence and Machine Learning. Graduated with honors and completed thesis on Neural Networks for Natural Language Processing.",
      icon: <GraduationCap className="w-8 h-8 text-primary-500" />,
    },
    {
      degree: "High School Diploma",
      institution: "Lovely Professional University",
      duration: "2021 - 2024",
      description: "Focused on Science and Mathematics. Participated in national level programming competitions and secured top ranks.",
      icon: <Award className="w-8 h-8 text-secondary-500" />,
    }
  ];

  return (
    <section id="education" className="py-20 bg-dark-950/50 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-900/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Education" 
          subtitle="My academic journey and qualifications that have shaped my knowledge and skills."
        />
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></div>
          
          {/* Education items */}
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <motion.div 
                  className={`absolute left-[-8px] md:left-1/2 md:transform md:translate-x-[-50%] w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 z-10 hidden md:block`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                />
                
                <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Date pill */}
                  <motion.div 
                    className="flex items-center mb-4 md:mb-0 md:w-1/2"
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={`inline-flex items-center px-4 py-2 rounded-full bg-dark-800 border border-dark-700 shadow-lg ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                      <Calendar className="w-4 h-4 mr-2 text-accent-500" />
                      <span className="text-sm font-medium">{item.duration}</span>
                    </div>
                  </motion.div>
                  
                  {/* Card content */}
                  <div className="md:w-1/2">
                    <AnimatedCard 
                      delay={0.3} 
                      className={`${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}
                    >
                      <div className="flex items-start">
                        <div className="mr-4 mt-1">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
                          <h4 className="text-primary-400 mb-3">{item.institution}</h4>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    </AnimatedCard>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
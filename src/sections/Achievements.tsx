import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Award, Trophy, Medal, Star } from 'lucide-react';

const Achievement = ({ 
  title, 
  description, 
  icon, 
  index 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <motion.div 
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
      
      <div className="relative p-6 rounded-xl bg-gradient-to-br from-dark-800/90 to-dark-900/90 border border-dark-700 group-hover:border-primary-500/50 shadow-lg backdrop-blur-sm transition-all duration-300">
        <div className="flex items-start gap-5">
          <div className="relative">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center text-primary-400 group-hover:text-primary-300 transition-colors">
              {icon}
            </div>
            <motion.div 
              className="absolute -top-1 -right-1 w-4 h-4"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Star className="w-full h-full text-accent-500 fill-accent-500" />
            </motion.div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary-300 transition-colors">
              {title}
            </h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
          </div>
        </div>
        
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  const achievements = [
    {
      title: "Inno Tech Winner",
      description: "First place in the  Inno Tech 2024, competing against 200+ teams from universities .",
      icon: <Trophy className="w-7 h-7" />
    },
    
    {
      title: "Published Research Paper",
      description: "Co-authored a research paper on 'Neural Networks in Natural Language Processing' published in the International Journal of Computer Science.",
      icon: <Star className="w-7 h-7" />
    },
    {
      title: "Outstanding Academic Achievement",
      description: "Graduated in the top 5% of my class with a perfect GPA in all programming courses.",
      icon: <Medal className="w-7 h-7" />
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor to major open source projects with over 50 merged pull requests and 1000+ GitHub stars.",
      icon: <Star className="w-7 h-7" />
    },
    
  ];
  
  return (
    <section id="achievements" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-900/10 via-dark-950 to-dark-950"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Achievements" 
          subtitle="Recognition and accomplishments throughout my academic and professional journey." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Achievement 
              key={index}
              title={achievement.title}
              description={achievement.description}
              icon={achievement.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

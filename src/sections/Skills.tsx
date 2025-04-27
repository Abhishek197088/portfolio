import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import AnimatedCard from '../components/AnimatedCard';
import { Code, Server, Palette, BookOpen, Brain, Database } from 'lucide-react';

const SkillBar = ({ name, percentage, color }: { name: string; percentage: number; color: string }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{name}</span>
        <span className="text-gray-400">{percentage}%</span>
      </div>
      <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full ${color}`}
        />
      </div>
    </div>
  );
};

const SkillCircle = ({ name, percentage, icon, delay = 0 }: { name: string; percentage: number; icon: React.ReactNode; delay?: number }) => {
  const circumference = 2 * Math.PI * 44; // 44 is the radius of the circle
  const offset = circumference - (percentage / 100) * circumference;
  
  return (
    <motion.div 
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="relative w-28 h-28 mb-3">
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="transform -rotate-90">
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="#1E1E2D"
            strokeWidth="8"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="8"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <div className="text-3xl mb-1 text-gray-200">{percentage}<span className="text-base">%</span></div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="mb-1">{icon}</div>
        <h4 className="font-medium text-center text-white">{name}</h4>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML & CSS', percentage: 95, color: 'bg-primary-500' },
    { name: 'JavaScript', percentage: 90, color: 'bg-primary-600' },
    { name: 'React', percentage: 85, color: 'bg-primary-700' },
    { name: 'TypeScript', percentage: 80, color: 'bg-primary-800' },
  ];
  
  const backendSkills = [
    { name: 'Node.js', percentage: 85, color: 'bg-secondary-500' },
    { name: 'Python', percentage: 80, color: 'bg-secondary-600' },
    { name: 'Java', percentage: 75, color: 'bg-secondary-700' },
    { name: 'SQL', percentage: 85, color: 'bg-secondary-800' },
  ];
  
  const coreSkills = [
    { name: 'Frontend', percentage: 90, icon: <Code className="w-6 h-6 text-primary-500" /> },
    { name: 'Backend', percentage: 85, icon: <Server className="w-6 h-6 text-secondary-500" /> },
    { name: 'Database', percentage: 80, icon: <Database className="w-6 h-6 text-accent-500" /> },
    { name: 'UI/UX', percentage: 75, icon: <Palette className="w-6 h-6 text-primary-400" /> },
    { name: 'Learning', percentage: 95, icon: <BookOpen className="w-6 h-6 text-secondary-400" /> },
    { name: 'Problem Solving', percentage: 85, icon: <Brain className="w-6 h-6 text-accent-400" /> },
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute top-40 right-0 w-80 h-80 rounded-full bg-primary-900/10 filter blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-secondary-900/10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="My Skills" 
          subtitle="A comprehensive overview of my technical expertise and professional capabilities."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <AnimatedCard delay={0.1}>
            <h3 className="text-xl font-bold mb-6 text-white">Frontend Development</h3>
            <div>
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} percentage={skill.percentage} color={skill.color} />
              ))}
            </div>
          </AnimatedCard>
          
          <AnimatedCard delay={0.3}>
            <h3 className="text-xl font-bold mb-6 text-white">Backend Development</h3>
            <div>
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} percentage={skill.percentage} color={skill.color} />
              ))}
            </div>
          </AnimatedCard>
        </div>
        
        <h3 className="text-2xl font-bold text-center mb-12 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
          Core Competencies
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {coreSkills.map((skill, index) => (
            <SkillCircle 
              key={index} 
              name={skill.name} 
              percentage={skill.percentage} 
              icon={skill.icon} 
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
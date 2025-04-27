import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';
import TypewriterText from '../components/TypewriterText';
import { Brain, Code, Database, LineChart, GitBranch, Award, ExternalLink } from 'lucide-react';

interface MLProjectProps {
  project: {
    title: string;
    description: string;
    tools: string[];
    metrics?: { label: string; value: string }[];
    github?: string;
    demo?: string;
    image: string;
  };
  index: number;
}

const MLProject: React.FC<MLProjectProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      
      <div className="relative overflow-hidden rounded-xl bg-dark-800/90 border border-dark-700 group-hover:border-primary-500/50 transition-all duration-300">
        <div className="aspect-w-16 aspect-h-9 relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent"></div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-400 mb-4 line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tools.map((tool, i) => (
              <span 
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-primary-900/30 border border-primary-700/30 text-primary-400"
              >
                {tool}
              </span>
            ))}
          </div>
          
          {project.metrics && (
            <div className="grid grid-cols-2 gap-4 mb-4">
              {project.metrics.map((metric, i) => (
                <div key={i} className="text-center p-2 rounded-lg bg-dark-700/50">
                  <div className="text-sm text-gray-400">{metric.label}</div>
                  <div className="text-lg font-bold text-primary-400">{metric.value}</div>
                </div>
              ))}
            </div>
          )}
          
          <div className="flex gap-3">
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-dark-700 hover:bg-dark-600 text-white text-sm transition-colors"
              >
                <GitBranch className="w-4 h-4 mr-2" />
                View Code
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SkillCloud = () => {
  const skills = [
    { name: 'Python', icon: <Code className="w-5 h-5" /> },
    { name: 'TensorFlow', icon: <Brain className="w-5 h-5" /> },
    { name: 'PyTorch', icon: <Brain className="w-5 h-5" /> },
    { name: 'Scikit-learn', icon: <Database className="w-5 h-5" /> },
    { name: 'Deep Learning', icon: <Brain className="w-5 h-5" /> },
    { name: 'NLP', icon: <Brain className="w-5 h-5" /> },
    { name: 'Computer Vision', icon: <LineChart className="w-5 h-5" /> },
    { name: 'Data Analysis', icon: <Database className="w-5 h-5" /> },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="relative group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="p-4 rounded-xl bg-dark-800/80 border border-dark-700 group-hover:border-primary-500/50 transition-all duration-300">
            <div className="flex items-center space-x-3">
              <div className="text-primary-500 group-hover:text-primary-400 transition-colors">
                {skill.icon}
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const MachineLearning = () => {
  const mlProjects = [
    {
      title: "Crop Recommendation System",
      description: "An intelligent system that recommends optimal crops based on soil composition and climate data using Random Forest algorithm.",
      tools: ["Python", "Scikit-learn", "Pandas", "Random Forest"],
      metrics: [
        { label: "Accuracy", value: "95%" },
        { label: "Features", value: "12" }
      ],
      image: "https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Sentiment Analysis on Helpdesk",
      description: "Real-time sentiment analysis system for customer support interactions using BERT-based model.",
      tools: ["PyTorch", "BERT", "FastAPI", "Redis"],
      metrics: [
        { label: "Accuracy", value: "92%" },
        { label: "Response Time", value: "100ms" }
      ],
      image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Stock Price Predictor",
      description: "LSTM-based deep learning model for stock price prediction using historical market data.",
      tools: ["TensorFlow", "LSTM", "Pandas", "Plotly"],
      metrics: [
        { label: "RMSE", value: "0.023" },
        { label: "MAE", value: "0.018" }
      ],
      image: "https://images.pexels.com/photos/7567473/pexels-photo-7567473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="machine-learning" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-900/10 via-dark-950 to-dark-950"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <TypewriterText
            sequence={[
              'Exploring the World of Machine Learning',
              2000,
              'Data-Driven Innovation',
              2000
            ]}
            wrapper="h2"
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent"
          />
        </div>
        
        <SectionTitle 
          title="Machine Learning Journey" 
          subtitle="Transforming data into intelligent solutions through innovative ML applications." 
        />
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-white">ML Expertise</h3>
          <SkillCloud />
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-white">Featured ML Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mlProjects.map((project, index) => (
              <MLProject key={index} project={project} index={index} />
            ))}
          </div>
        </div>
        
        <GlassCard className="text-center p-8">
          <Award className="w-12 h-12 text-primary-500 mx-auto mb-4" />
          <p className="text-xl text-gray-300 italic">
            "Machine learning isn't magic. It's math, data, and a lot of coffee. ☕"
          </p>
          <p className="text-primary-400 mt-2">– Abhishek Kumar</p>
        </GlassCard>
      </div>
    </section>
  );
};

export default MachineLearning;
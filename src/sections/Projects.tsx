import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { ExternalLink, Github, X } from 'lucide-react';

const ProjectCard = ({ project, onClick }: { project: any; onClick: () => void }) => {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-xl bg-dark-800/50 border border-dark-700"
      whileHover={{ y: -10 }}
      layoutId={`project-container-${project.id}`}
    >
      <motion.div 
        className="relative h-48 overflow-hidden"
        layoutId={`project-image-container-${project.id}`}
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-70"></div>
      </motion.div>
      
      <motion.div 
        className="p-6"
        layoutId={`project-content-${project.id}`}
      >
        <motion.h3 
          className="text-xl font-bold mb-2 text-white"
          layoutId={`project-title-${project.id}`}
        >
          {project.title}
        </motion.h3>
        
        <motion.div 
          className="flex flex-wrap gap-2 mb-4"
          layoutId={`project-tags-${project.id}`}
        >
          {project.tags.map((tag: string, index: number) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-dark-700 text-primary-400"
            >
              {tag}
            </span>
          ))}
        </motion.div>
        
        <motion.p 
          className="text-gray-400 text-sm mb-4 line-clamp-2"
          layoutId={`project-description-short-${project.id}`}
        >
          {project.description}
        </motion.p>
        
        <button 
          onClick={onClick}
          className="text-primary-400 hover:text-primary-300 font-medium text-sm flex items-center"
        >
          View Details
          <ExternalLink size={14} className="ml-1" />
        </button>
      </motion.div>
    </motion.div>
  );
};

const ProjectDetail = ({ project, onClose }: { project: any; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-dark-950/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        className="relative bg-dark-800 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        layoutId={`project-container-${project.id}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 p-2 rounded-full bg-dark-700 text-gray-400 hover:text-white z-10"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        
        <motion.div 
          className="relative h-64 md:h-96"
          layoutId={`project-image-container-${project.id}`}
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-70"></div>
        </motion.div>
        
        <motion.div 
          className="p-6 md:p-8"
          layoutId={`project-content-${project.id}`}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold mb-4 text-white"
            layoutId={`project-title-${project.id}`}
          >
            {project.title}
          </motion.h3>
          
          <motion.div 
            className="flex flex-wrap gap-2 mb-6"
            layoutId={`project-tags-${project.id}`}
          >
            {project.tags.map((tag: string, index: number) => (
              <span 
                key={index} 
                className="text-xs px-3 py-1 rounded-full bg-dark-700 text-primary-400"
              >
                {tag}
              </span>
            ))}
          </motion.div>
          
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-2 text-gray-200">Project Overview</h4>
            <motion.p className="text-gray-300 mb-4">
              {project.description}
            </motion.p>
            
            {project.longDescription && (
              <p className="text-gray-400">
                {project.longDescription}
              </p>
            )}
          </div>
          
          {project.features && (
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-2 text-gray-200">Key Features</h4>
              <ul className="list-disc pl-5 text-gray-400 space-y-1">
                {project.features.map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="flex flex-wrap gap-4">
            {project.liveDemo && (
              <a 
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg flex items-center shadow-lg"
              >
                <ExternalLink size={16} className="mr-2" />
                Live Demo
              </a>
            )}
            
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-dark-700 hover:bg-dark-600 text-white rounded-lg flex items-center"
              >
                <Github size={16} className="mr-2" />
                View Code
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  
  const projects = [
    {
      id: 1,
      title: "E-Governance Chatbot",
      tags: ["AI", "NLP", "Python", "ReactJS"],
      description: "An intelligent chatbot designed to streamline citizen queries for government services using advanced NLP techniques.",
      longDescription: "This project aims to bridge the gap between citizens and government services through an intuitive AI-powered interface. It uses natural language processing to understand user queries and provide accurate information about various government schemes, document requirements, and application procedures.",
      features: [
        "Intent recognition with 95% accuracy",
        "Multi-language support for regional inclusivity",
        "Document upload and verification assistance",
        "Integration with government database APIs",
        "User-friendly conversational interface"
      ],
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com",
      liveDemo: "https://demo.com"
    },
    {
      id: 2,
      title: "Clothing Management System",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      description: "A comprehensive inventory management solution for retail clothing stores with real-time stock tracking and analytics.",
      longDescription: "Developed for small to medium clothing retailers, this full-stack application provides end-to-end inventory management with powerful analytics. It features barcode scanning, automated reorder notifications, and detailed sales reporting to optimize stock levels and increase profitability.",
      features: [
        "Real-time inventory tracking with barcode integration",
        "Sales and trend analytics with visual reports",
        "Employee management with role-based access",
        "Automated purchase order generation",
        "Customer relationship management"
      ],
      image: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com",
      liveDemo: "https://demo.com"
    },
    {
      id: 3,
      title: "Sentiment Analysis Helpdesk",
      tags: ["Machine Learning", "JavaScript", "Python", "Flask"],
      description: "A customer support system that analyzes sentiment in real-time to prioritize urgent negative feedback.",
      longDescription: "This innovative customer support tool uses machine learning to analyze incoming customer messages and prioritize them based on sentiment analysis. The system automatically escalates negative feedback, allowing support teams to address critical issues first while providing appropriate tone suggestions for responses.",
      features: [
        "Real-time sentiment analysis with 92% accuracy",
        "Automated ticket prioritization based on emotion detection",
        "Response suggestion system with tone matching",
        "Integration with popular CRM platforms",
        "Detailed analytics on customer satisfaction trends"
      ],
      image: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com",
      liveDemo: "https://demo.com"
    },
    {
      id: 4,
      title: "Smart Home Automation",
      tags: ["IoT", "Raspberry Pi", "React", "Node.js"],
      description: "A comprehensive smart home solution that integrates various IoT devices for automated control and monitoring.",
      longDescription: "This project creates a unified interface for controlling various smart home devices regardless of manufacturer. The system uses a Raspberry Pi as a central hub that communicates with different IoT protocols and presents a single, intuitive dashboard for users to monitor and control their entire home environment.",
      features: [
        "Unified control of multi-vendor smart devices",
        "Energy usage monitoring and optimization",
        "Voice control integration with major assistants",
        "Customizable automation rules and schedules",
        "Security camera integration and motion alerts"
      ],
      image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com",
      liveDemo: "https://demo.com"
    },
    {
      id: 5,
      title: "E-Learning Platform",
      tags: ["React", "Node.js", "MongoDB", "WebRTC"],
      description: "A comprehensive online learning platform with interactive courses, live sessions, and progress tracking.",
      longDescription: "This full-featured e-learning platform allows educators to create engaging courses with various content types while providing students with an interactive learning experience. The platform includes live session capabilities, automated assessment tools, and detailed progress analytics.",
      features: [
        "Course creation tools with multimedia support",
        "Live virtual classrooms with recording",
        "Progress tracking and personalized learning paths",
        "Automated assessment and certification",
        "Discussion forums and peer collaboration tools"
      ],
      image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com",
      liveDemo: "https://demo.com"
    },
    {
      id: 6,
      title: "Health Monitoring System",
      tags: ["IoT", "Machine Learning", "React Native", "Flask"],
      description: "A personal health tracking system that uses wearable data to provide insights and health recommendations.",
      longDescription: "This health monitoring system combines data from wearable devices with machine learning algorithms to provide users with actionable health insights. The application tracks various metrics like heart rate, sleep patterns, and activity levels to generate personalized recommendations for improving overall health.",
      features: [
        "Integration with major wearable device APIs",
        "Personalized health insights using ML algorithms",
        "Medication and appointment reminders",
        "Health trend visualization and reporting",
        "Emergency contact system for critical situations"
      ],
      image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com",
      liveDemo: "https://demo.com"
    }
  ];
  
  return (
    <section id="projects" className="py-20 bg-dark-950/50 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-900/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-900/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="Explore my most significant work and the problems I've solved through code." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
        
        <AnimatePresence>
          {selectedProject && (
            <ProjectDetail 
              project={selectedProject} 
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
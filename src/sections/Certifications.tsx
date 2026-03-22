import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import AnimatedCard from '../components/AnimatedCard';
import { ExternalLink } from 'lucide-react';

const CertificationCard = ({ certification, index }: { certification: any; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <AnimatedCard delay={index * 0.1}>
      <div className="h-[400px] perspective-1000">
        <motion.div 
          className="relative w-full h-full cursor-pointer preserve-3d"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          onClick={() => setIsFlipped(!isFlipped)}
          whileHover={{ scale: 1.02 }}
        >
          {/* Front */}
          <div className="absolute inset-0 w-full h-full backface-hidden">
            <div className="h-full p-6 bg-gradient-to-br from-dark-800/80 to-dark-900/80 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-colors duration-300 flex flex-col items-center justify-center">
              <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 p-4 flex items-center justify-center">
                <img 
                  src={certification.logo} 
                  alt={certification.issuer} 
                  className="w-full h-full object-contain opacity-90"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">{certification.name}</h3>
              <div className="text-primary-400 mb-3">{certification.issuer}</div>
              <div className="text-sm text-gray-400 px-4 py-1 rounded-full bg-dark-700/50 inline-block">
                {certification.date}
              </div>
              <div className="mt-4 text-xs text-gray-500 opacity-60">
                Click to view details
              </div>
            </div>
          </div>
          
          {/* Back */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
            <div className="h-full p-6 bg-gradient-to-br from-dark-800 to-dark-900 rounded-xl border border-dark-700 shadow-xl flex flex-col">
              <h3 className="text-xl font-bold text-white mb-3">{certification.name}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{certification.description}</p>
              
              <div className="space-y-2 text-sm">
                <div className="text-gray-400">
                  <span className="text-primary-400 font-semibold">Credential ID:</span> {certification.credentialId}
                </div>
                <div className="text-gray-400">
                  <span className="text-primary-400 font-semibold">Issued:</span> {certification.date}
                </div>
              </div>
              
              {certification.skills && (
                <div className="mt-4 flex-grow">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Skills Acquired</h4>
                  <div className="flex flex-wrap gap-2">
                    {certification.skills.map((skill: string, i: number) => (
                      <span 
                        key={i} 
                        className="text-xs px-3 py-1 bg-primary-900/30 border border-primary-700/30 rounded-full text-primary-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {certification.url && (
                <a 
                  href={certification.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg text-sm font-medium text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Certificate
                  <ExternalLink size={14} className="ml-2" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedCard>
  );
};

const Certifications = () => {
  const certifications = [
    {
      name: "Machine Learning Specialization",
      issuer: "Coursera",
      date: "January 2025",
      description: "Comprehensive specialization covering machine learning algorithms, neural networks, and practical ML deployment.",
      logo: "https://images.pexels.com/photos/11035381/pexels-photo-11035381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      credentialId: "CRSML-1234-ABCD",
      skills: ["Machine Learning", "Python", "TensorFlow", "Neural Networks"],
      url: "https://coursera.org"
    },
    {
      name: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "March 2024",
      description: "Professional certification validating expertise in designing distributed systems on AWS platform.",
      logo: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      credentialId: "AWS-SA-1234-5678",
      skills: ["AWS", "Cloud Architecture", "Security", "Scalability"],
      url: "https://aws.amazon.com"
    },
    {
      name: "Full-Stack Development",
      issuer: "Udemy",
      date: "November 2024",
      description: "Comprehensive course covering modern web development technologies and best practices.",
      logo: "https://images.pexels.com/photos/4497189/pexels-photo-4497189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      credentialId: "UDMY-FS-9876-WXYZ",
      skills: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
      url: "https://udemy.com"
    },
    {
      name: "Data Science Professional",
      issuer: "IBM",
      date: "July 2023",
      description: "Professional certification covering data analysis, visualization, and machine learning techniques.",
      logo: "https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      credentialId: "IBM-DS-5678-EFGH",
      skills: ["Data Analysis", "Statistics", "Python", "Pandas", "Visualization"],
      url: "https://ibm.com"
    },
    {
      name: "Professional Scrum Master",
      issuer: "Scrum.org",
      date: "April 2023",
      description: "Certification validating knowledge of Scrum framework and its application in Agile development.",
      logo: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      credentialId: "PSM-I-1234-5678",
      skills: ["Agile", "Scrum", "Project Management", "Team Leadership"],
      url: "https://scrum.org"
    },
    {
      name: "Google UX Design",
      issuer: "Google",
      date: "February 2022",
      description: "Professional certification in user experience design methodologies and principles.",
      logo: "https://images.pexels.com/photos/5359815/pexels-photo-5359815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      credentialId: "GGL-UXD-8765-ABCD",
      skills: ["UX Research", "Prototyping", "User Testing", "Wireframing"],
      url: "https://google.com"
    }
  ];
  
  return (
    <section id="certifications" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/50 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Certifications" 
          subtitle="Professional certifications and courses I've completed to enhance my skills." 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification, index) => (
            <CertificationCard key={index} certification={certification} index={index} />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Certifications;

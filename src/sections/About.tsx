import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import AnimatedText from '../components/AnimatedText';
import { Users, Lightbulb, Target } from 'lucide-react';
import ParallaxWrapper from '../components/ParallaxWrapper';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-40 left-10 w-64 h-64 bg-primary-900/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-secondary-900/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know me better - my background, skills, and what drives me." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <ParallaxWrapper direction="right" speed={0.3}>
            <div className="relative">
              <motion.div 
                className="w-full md:w-[90%] h-[400px] rounded-lg overflow-hidden border-4 border-dark-700 shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Abhishek Kumar" 
                  className="w-full h-full object-cover" 
                />
              </motion.div>
              
              {/* Floating frame decoration */}
              <motion.div 
                className="absolute -bottom-10 -right-10 w-36 h-36 rounded-lg bg-gradient-to-br from-primary-600 to-primary-900 hidden md:flex items-center justify-center"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold">1+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </motion.div>
            </div>
          </ParallaxWrapper>
          
          <ParallaxWrapper direction="left" speed={0.3}>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                <AnimatedText 
                  text="Passionate Developer & Problem Solver" 
                  animation="fade"
                />
              </h3>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  Hello! I'm Abhishek Kumar, a passionate software developer with expertise in building 
                  innovative solutions. I specialize in full-stack development, focusing on creating 
                  elegant, efficient, and user-centric applications.
                </p>
                <p>
                  With a strong foundation in computer science and a keen eye for detail, I thrive on 
                  tackling complex problems and transforming ideas into reality through clean, 
                  maintainable code.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  or sharing knowledge through tech blogs and community events.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <motion.div 
                  className="p-4 rounded-lg bg-dark-800/50 border border-dark-700"
                  whileHover={{ y: -5 }}
                >
                  <Users className="w-10 h-10 text-primary-500 mb-3" />
                  <h4 className="font-semibold mb-1">Teamwork</h4>
                  <p className="text-sm text-gray-400">Collaborative problem-solver</p>
                </motion.div>
                
                <motion.div 
                  className="p-4 rounded-lg bg-dark-800/50 border border-dark-700"
                  whileHover={{ y: -5 }}
                >
                  <Lightbulb className="w-10 h-10 text-primary-500 mb-3" />
                  <h4 className="font-semibold mb-1">Creativity</h4>
                  <p className="text-sm text-gray-400">Innovative thinker</p>
                </motion.div>
                
                <motion.div 
                  className="p-4 rounded-lg bg-dark-800/50 border border-dark-700"
                  whileHover={{ y: -5 }}
                >
                  <Target className="w-10 h-10 text-primary-500 mb-3" />
                  <h4 className="font-semibold mb-1">Leadership</h4>
                  <p className="text-sm text-gray-400">Goal-oriented guide</p>
                </motion.div>
              </div>
            </div>
          </ParallaxWrapper>
        </div>
      </div>
    </section>
  );
};

export default About;

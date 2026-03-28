import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import { Github, Linkedin, Download, Mail } from 'lucide-react';

const Hero = () => {
  const [currentTag, setCurrentTag] = useState(0);
  const tags = ['Innovator', 'Coder', 'Learner', 'Dreamer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTag((prev) => (prev + 1) % tags.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-500 rounded-full opacity-20"
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight
              ],
            }}
            transition={{
              duration: 20 + Math.random() * 30,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col-reverse lg:flex-row items-center justify-between">
        <motion.div 
          className="w-full lg:w-1/2 text-center lg:text-left mt-12 lg:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-secondary-400 font-medium mb-2">
            <AnimatedText text="Hello, I'm" animation="fade" />
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <AnimatedText 
              text="Abhishek Kumar" 
              el="span" 
              className="block bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent"
              animation="typewriter"
            />
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-300 h-8 mb-6">
            <span className="inline-block mr-2">I am a</span>
            <span className="inline-block relative">
              <motion.span
                key={currentTag}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="inline-block text-accent-400 font-semibold"
              >
                {tags[currentTag]}
              </motion.span>
            </span>
          </h2>
          
          <p className="text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
            Passionate about crafting innovative solutions and bringing ideas to life through code.
            Let's build something amazing together.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white rounded-full font-medium shadow-lg shadow-primary-900/20 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} className="mr-2" />
              Hire Me
            </motion.a>
            
            <motion.a
              href="#"
              className="px-8 py-3 border border-primary-500 text-primary-400 hover:text-white hover:bg-primary-500/20 rounded-full font-medium flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </motion.a>
          </div>
          
          <div className="mt-10 flex gap-5 justify-center lg:justify-start">
            <motion.a 
              href="https://github.com/Abhishek197088"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-900 transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/abhishek-kumar-2b664a21b/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-900 transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              href="mailto:abhishek@example.com"
              className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-900 transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <motion.div 
              className="absolute inset-0 border-4 border-primary-500 rounded-full opacity-30"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity }}
            />
            <motion.div 
              className="absolute inset-4 border-4 border-dashed border-secondary-500 rounded-full opacity-20"
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="w-full h-full rounded-full overflow-hidden border-4 border-primary-700 shadow-xl shadow-primary-900/20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src="https://i.ibb.co/wNfqZyGL/IMG-1275.jpg" 
                alt="Abhishek Kumar" 
                className="w-full h-full object-cover" 
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-primary-400 transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <span className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-1">
            <motion.span 
              className="w-1.5 h-1.5 bg-gray-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </span>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

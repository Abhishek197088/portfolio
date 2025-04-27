import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-dark-900 border-t border-dark-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              <span className="text-primary-500">A</span>bhishek Kumar
            </h3>
            <p className="text-gray-400 mb-4">
              A passionate developer dedicated to creating innovative solutions and delivering exceptional user experiences.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="text-primary-500 mr-2">Email:</span>
                <a href="mailto:abhishek@example.com" className="hover:text-primary-400 transition-colors">
                  abhishek@example.com
                </a>
              </li>
              <li className="text-gray-400">
                <span className="text-primary-500 mr-2">Phone:</span>
                <a href="tel:+910000000000" className="hover:text-primary-400 transition-colors">
                  +91 00000 00000
                </a>
              </li>
              <li className="text-gray-400">
                <span className="text-primary-500 mr-2">Location:</span>
                Bangalore, India
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-800 pt-8 text-center">
          <p className="text-gray-400 flex flex-wrap items-center justify-center">
            <span>© {currentYear} Abhishek Kumar. All rights reserved.</span>
            <span className="mx-2">|</span>
            <span className="flex items-center">
              Designed & Developed with
              <motion.span
                className="inline-block mx-1 text-red-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              >
                <Heart className="w-4 h-4 fill-current" />
              </motion.span>
              by Abhishek Kumar
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
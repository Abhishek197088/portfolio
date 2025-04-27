import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative group ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
      <div className="relative backdrop-blur-sm bg-dark-800/40 border border-dark-700 group-hover:border-primary-500/50 rounded-xl p-6 shadow-xl transition-all duration-300">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
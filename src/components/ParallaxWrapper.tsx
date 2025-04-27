import React, { useRef, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxWrapperProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  speed?: number;
  className?: string;
}

const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({
  children,
  direction = 'up',
  speed = 0.5,
  className = '',
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Calculate movement based on direction
  const getMovement = () => {
    const amount = 100 * speed;
    switch (direction) {
      case 'up':
        return useTransform(scrollYProgress, [0, 1], [amount, -amount]);
      case 'down':
        return useTransform(scrollYProgress, [0, 1], [-amount, amount]);
      case 'left':
        return useTransform(scrollYProgress, [0, 1], [amount, -amount]);
      case 'right':
        return useTransform(scrollYProgress, [0, 1], [-amount, amount]);
      default:
        return useTransform(scrollYProgress, [0, 1], [amount, -amount]);
    }
  };

  const y = direction === 'up' || direction === 'down' ? getMovement() : 0;
  const x = direction === 'left' || direction === 'right' ? getMovement() : 0;

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Merge refs
  const mergeRefs = (el: any) => {
    ref.current = el;
    inViewRef(el);
  };

  return (
    <motion.div
      ref={mergeRefs}
      style={{ 
        x, 
        y,
        opacity: inView ? 1 : 0,
        transition: 'opacity 0.8s ease-out',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxWrapper;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedTextProps {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  animation?: 'typewriter' | 'sequential' | 'fade';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  el: Wrapper = 'span',
  className,
  once = true,
  repeatDelay = 3000,
  animation = 'sequential'
}) => {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: 0.2,
  });

  const baseVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { 
        delay: i * 0.03,
        duration: 0.3 
      }
    })
  };

  const typewriterVariants = {
    hidden: { width: '0%' },
    visible: {
      width: '100%',
      transition: {
        duration: Math.min(3, text.length * 0.06),
      }
    }
  };

  const fadeVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  if (animation === 'typewriter') {
    return (
      <div className={`inline-block overflow-hidden ${className}`} ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={typewriterVariants}
          className="whitespace-nowrap"
        >
          <Wrapper>{text}</Wrapper>
        </motion.div>
      </div>
    );
  }

  if (animation === 'fade') {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeVariants}
        className={className}
      >
        <Wrapper>{text}</Wrapper>
      </motion.div>
    );
  }

  // Default: Sequential character animation
  return (
    <Wrapper className={`inline-block ${className}`} ref={ref}>
      {text.split('').map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          custom={i}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={baseVariants}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </Wrapper>
  );
};

export default AnimatedText;
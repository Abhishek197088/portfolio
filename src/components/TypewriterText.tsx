import React from 'react';
import { TypeAnimation } from 'react-type-animation';

interface TypewriterTextProps {
  sequence: (string | number)[];
  className?: string;
  wrapper?: keyof JSX.IntrinsicElements;
  repeat?: number;
  speed?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  sequence,
  className = '',
  wrapper = 'span',
  repeat = Infinity,
  speed = 50
}) => {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper={wrapper}
      speed={speed}
      repeat={repeat}
      className={className}
    />
  );
};

export default TypewriterText;
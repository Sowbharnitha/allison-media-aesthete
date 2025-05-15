
import { ReactNode, useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/utils/useIntersectionObserver';

type AnimationType = 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'scale-in';

interface AnimatedElementProps {
  children: ReactNode;
  type?: AnimationType;
  delay?: 'delay-100' | 'delay-200' | 'delay-300' | 'delay-400' | 'delay-500' | 'delay-600' | 'delay-700' | 'delay-800';
  threshold?: number;
  className?: string;
}

export const AnimatedElement = ({ 
  children, 
  type = 'fade-in', 
  delay,
  threshold = 0.1,
  className = '' 
}: AnimatedElementProps) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isIntersecting, hasAnimated]);

  const animationClass = `${type} ${delay || ''} ${hasAnimated ? 'appear' : ''}`;

  return (
    <div ref={ref} className={`${animationClass} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedElement;

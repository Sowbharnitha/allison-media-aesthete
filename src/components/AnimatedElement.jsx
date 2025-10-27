
import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/utils/useIntersectionObserver';

const AnimatedElement = ({ 
  children, 
  type = 'fade-in', 
  delay,
  threshold = 0.1,
  className = '' 
}) => {
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

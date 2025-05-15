
import { ArrowDown } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import AnimatedElement from './AnimatedElement';

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Calculate parallax intensity based on viewport height
  const getParallaxValue = () => {
    if (!heroRef.current) return 0;
    const viewportHeight = window.innerHeight;
    const scrollRatio = Math.min(scrollPosition / viewportHeight, 1);
    return scrollPosition * 0.4 * scrollRatio;
  };

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      <div 
        className="absolute inset-0 z-0 parallax-bg" 
        style={{ transform: `translateY(${getParallaxValue()}px)` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
          alt="Azhizen Media photography hero" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hero-content">
        <AnimatedElement type="fade-in">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl text-azhizen-light font-playfair font-semibold mb-8 leading-tight parallax-text" 
            style={{ transform: `translateY(${-scrollPosition * 0.15}px)` }}
          >
            Azhizen Media
          </h1>
        </AnimatedElement>
        
        <AnimatedElement type="fade-in" delay="delay-300">
          <p 
            className="text-xl md:text-2xl lg:text-3xl text-azhizen-light max-w-2xl mx-auto mb-16 parallax-text" 
            style={{ transform: `translateY(${-scrollPosition * 0.1}px)` }}
          >
            Elevating brands through captivating visuals and compelling storytelling
          </p>
        </AnimatedElement>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <AnimatedElement type="fade-in-left" delay="delay-500">
            <button 
              onClick={() => {
                const portfolioSection = document.getElementById('portfolio');
                if (portfolioSection) {
                  portfolioSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-transparent hover:bg-azhizen-light text-azhizen-light hover:text-azhizen-dark border-2 border-azhizen-light px-8 py-4 text-lg transition-all duration-500 hover:scale-105"
            >
              View Our Work
            </button>
          </AnimatedElement>
          
          <AnimatedElement type="fade-in-right" delay="delay-600">
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-azhizen-light text-azhizen-dark hover:bg-transparent hover:text-azhizen-light border-2 border-azhizen-light px-8 py-4 text-lg transition-all duration-500 hover:scale-105"
            >
              Get In Touch
            </button>
          </AnimatedElement>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout} 
        className="scroll-down-button" 
        aria-label="Scroll to About section"
      >
        <ArrowDown className="text-white animate-bounce mt-6" />
      </button>
    </section>
  );
};

export default HeroSection;

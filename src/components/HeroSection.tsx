
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
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

  return (
    <section id="home" className="hero-section">
      <div className="absolute inset-0 z-0 parallax-bg" style={{ transform: `translateY(${scrollPosition * 0.5}px)` }}>
        <img 
          src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
          alt="Azhizen Media photography hero" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hero-content">
        <div className="animate-fade-in max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-azhizen-light font-playfair font-semibold mb-8 leading-tight parallax-text" style={{ transform: `translateY(${-scrollPosition * 0.2}px)` }}>
            Azhizen Media
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-azhizen-light max-w-2xl mx-auto mb-16 animate-fade-in-up parallax-text" style={{ transform: `translateY(${-scrollPosition * 0.1}px)` }}>
            Elevating brands through captivating visuals and compelling storytelling
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => {
                const portfolioSection = document.getElementById('portfolio');
                if (portfolioSection) {
                  portfolioSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-transparent hover:bg-azhizen-light text-azhizen-light hover:text-azhizen-dark border-2 border-azhizen-light px-8 py-4 text-lg transition-colors duration-300 animate-fade-in-up"
            >
              View Our Work
            </button>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-azhizen-light text-azhizen-dark hover:bg-transparent hover:text-azhizen-light border-2 border-azhizen-light px-8 py-4 text-lg transition-colors duration-300 animate-fade-in-up"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      <button onClick={scrollToAbout} className="scroll-down-button" aria-label="Scroll to About section">
        <ArrowDown className="text-white animate-bounce mt-6" />
      </button>
    </section>
  );
};

export default HeroSection;

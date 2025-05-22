import { ArrowDown } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import AnimatedElement from './AnimatedElement';
import liveWallpaper from '../assets/videos/live-wallpaper.mp4'; // Import the video

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const heroRef = useRef(null);
  
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
    <section id="home" className="hero-section relative min-h-screen flex flex-col justify-center items-center" ref={heroRef}>
      <style>
        {`
          .wave-gradient {
            background: linear-gradient(
              45deg,
              #ff6b6b,
              #4ecdc4,
              #45b7d1,
              #96c93d,
              #ff6b6b
            );
            background-size: 400%;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: wave 10s ease-in-out forwards;
          }

          @keyframes wave {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 400% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
      {/* Note: This component does not rely on third-party cookies. However, if your site uses third-party services (e.g., analytics, ads, or embeds), ensure they function without third-party cookies, as Chrome users may disable them in Privacy Settings. */}
      <div 
        className="absolute inset-0 z-0 parallax-bg" 
        style={{ transform: `translateY(${getParallaxValue()}px)` }}
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-80"
          style={{ backgroundColor: '#1a1a1a' }} // Fallback background color
        >
          <source 
            src={liveWallpaper} // Use the imported video
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-content max-w-6xl mx-auto text-center relative z-10">
        <AnimatedElement type="fade-in">
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-sans font-bold mb-6 leading-tight tracking-tighter parallax-text wave-gradient" 
            style={{ transform: `translateY(${-scrollPosition * 0.15}px)` }}
          >
            Azhizen Media
          </h1>
        </AnimatedElement>
        
        <AnimatedElement type="fade-in" delay="delay-300">
          <p 
            className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 parallax-text" 
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
              className="bg-transparent hover:bg-white text-white hover:text-black border border-white px-8 py-4 text-lg transition-all duration-500 hover:scale-105"
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
              className="bg-white text-black hover:bg-transparent hover:text-white border border-white px-8 py-4 text-lg transition-all duration-500 hover:scale-105"
            >
              Get In Touch
            </button>
          </AnimatedElement>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout} 
        className="scroll-down-button absolute bottom-8 z-10" 
        aria-label="Scroll to About section"
      >
        <ArrowDown className="text-white animate-bounce mt-6" />
      </button>
    </section>
  );
};

export default HeroSection;
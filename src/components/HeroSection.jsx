import { ArrowDown } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import AnimatedElement from './AnimatedElement';
import liveWallpaper from '../assets/videos/live-wallpaper.mp4';

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isGradientDone, setIsGradientDone] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const gradientTimeout = setTimeout(() => {
      setIsGradientDone(true);
    }, 6800);

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(gradientTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getParallaxValue = () => {
    if (!heroRef.current) return 0;
    const viewportHeight = window.innerHeight;
    const scrollRatio = Math.min(scrollPosition / viewportHeight, 1);
    return scrollPosition * 0.4 * scrollRatio;
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="hero-section relative h-screen w-full flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Gradient animation */}
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
            animation: wave 7s ease-in-out forwards;
          }

          @keyframes wave {
            0% { background-position: 0% 50%; }
            50% { background-position: 400% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      {/* Background Video */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${getParallaxValue()}px)` }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
          style={{ backgroundColor: '#1a1a1a' }}
        >
          <source src={liveWallpaper} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Main Content */}
      <div className="hero-content max-w-6xl mx-auto text-center relative z-10 px-4">
        <AnimatedElement type="fade-in">
          <h1
            className={`text-[6rem] md:text-[8rem] lg:text-[10rem] font-sans font-bold mb-6 tracking-tighter ${
              isGradientDone ? 'text-white' : 'wave-gradient'
            }`}
            style={{
              transform: `translateY(${-scrollPosition * 0.15}px)`,
              transition: 'color 0.3s ease-in-out',
            }}
          >
            Azhizen Media
          </h1>
        </AnimatedElement>

        <AnimatedElement type="fade-in" delay="delay-300">
          <p
            className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12"
            style={{ transform: `translateY(${-scrollPosition * 0.1}px)` }}
          >
            Elevating brands through captivating visuals and compelling storytelling
          </p>
        </AnimatedElement>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <AnimatedElement type="fade-in-left" delay="delay-500">
            <button
              onClick={() =>
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-transparent border border-white text-white px-8 py-4 text-lg hover:bg-white hover:text-black transition-all duration-500 hover:scale-105"
            >
              View Our Work
            </button>
          </AnimatedElement>

          <AnimatedElement type="fade-in-right" delay="delay-600">
            <button
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-white text-black border border-white px-8 py-4 text-lg hover:bg-transparent hover:text-white transition-all duration-500 hover:scale-105"
            >
              Get In Touch
            </button>
          </AnimatedElement>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 z-10"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="text-white animate-bounce mt-6" />
      </button>
    </section>
  );
};

export default HeroSection;

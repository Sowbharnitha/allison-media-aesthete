
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486718448742-163732cd1544" 
          alt="Allison Media photography hero" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hero-content">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-allison-light font-playfair font-semibold mb-6 animate-fade-in">
          Captivating Visuals<br />Compelling Stories
        </h1>
        <p className="text-xl md:text-2xl text-allison-light max-w-2xl mx-auto mb-12 animate-fade-in-up">
          Premium photography and media services for discerning clients who demand excellence
        </p>
        <button 
          onClick={() => {
            const portfolioSection = document.getElementById('portfolio');
            if (portfolioSection) {
              portfolioSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="bg-transparent hover:bg-allison-light text-allison-light hover:text-allison-dark border border-allison-light px-8 py-3 text-lg transition-colors duration-300 animate-fade-in-up"
        >
          View Our Work
        </button>
      </div>
      <button onClick={scrollToAbout} className="scroll-down" aria-label="Scroll to About section">
        <ArrowDown className="text-white animate-bounce mt-6" />
      </button>
    </section>
  );
};

export default HeroSection;


import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-md py-3 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <AnimatedElement type="fade-in">
          <div className="text-foreground font-sans text-2xl font-bold tracking-tight">
            Azhizen
          </div>
        </AnimatedElement>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          <AnimatedElement type="fade-in" delay="delay-100">
            <button onClick={() => scrollToSection('home')} className={`nav-link ${isScrolled ? 'text-foreground' : 'text-white'}`}>Home</button>
          </AnimatedElement>
          <AnimatedElement type="fade-in" delay="delay-200">
            <button onClick={() => scrollToSection('about')} className={`nav-link ${isScrolled ? 'text-foreground' : 'text-white'}`}>About</button>
          </AnimatedElement>
          <AnimatedElement type="fade-in" delay="delay-300">
            <button onClick={() => scrollToSection('services')} className={`nav-link ${isScrolled ? 'text-foreground' : 'text-white'}`}>Services</button>
          </AnimatedElement>
          <AnimatedElement type="fade-in" delay="delay-400">
            <button onClick={() => scrollToSection('portfolio')} className={`nav-link ${isScrolled ? 'text-foreground' : 'text-white'}`}>Portfolio</button>
          </AnimatedElement>
          <AnimatedElement type="fade-in" delay="delay-500">
            <button onClick={() => scrollToSection('testimonials')} className={`nav-link ${isScrolled ? 'text-foreground' : 'text-white'}`}>Testimonials</button>
          </AnimatedElement>
          <AnimatedElement type="fade-in" delay="delay-600">
            <button onClick={() => scrollToSection('contact')} className={`nav-link ${isScrolled ? 'text-foreground' : 'text-white'}`}>Contact</button>
          </AnimatedElement>
        </div>

        {/* Mobile Navigation Trigger */}
        <button 
          className={`md:hidden ${isScrolled ? 'text-foreground' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-lg transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <button onClick={() => scrollToSection('home')} className="text-2xl text-foreground hover:text-accent transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-2xl text-foreground hover:text-accent transition-colors">About</button>
          <button onClick={() => scrollToSection('services')} className="text-2xl text-foreground hover:text-accent transition-colors">Services</button>
          <button onClick={() => scrollToSection('portfolio')} className="text-2xl text-foreground hover:text-accent transition-colors">Portfolio</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-2xl text-foreground hover:text-accent transition-colors">Testimonials</button>
          <button onClick={() => scrollToSection('contact')} className="text-2xl text-foreground hover:text-accent transition-colors">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

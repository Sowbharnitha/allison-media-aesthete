
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-allison-dark py-2' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="text-allison-light font-playfair text-2xl font-medium">
          Allison Media
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
          <button onClick={() => scrollToSection('portfolio')} className="nav-link">Portfolio</button>
          <button onClick={() => scrollToSection('testimonials')} className="nav-link">Testimonials</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
        </div>

        {/* Mobile Navigation Trigger */}
        <button 
          className="md:hidden text-allison-light"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-allison-dark transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <button onClick={() => scrollToSection('home')} className="text-2xl text-allison-light hover:text-allison-accent">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-2xl text-allison-light hover:text-allison-accent">About</button>
          <button onClick={() => scrollToSection('services')} className="text-2xl text-allison-light hover:text-allison-accent">Services</button>
          <button onClick={() => scrollToSection('portfolio')} className="text-2xl text-allison-light hover:text-allison-accent">Portfolio</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-2xl text-allison-light hover:text-allison-accent">Testimonials</button>
          <button onClick={() => scrollToSection('contact')} className="text-2xl text-allison-light hover:text-allison-accent">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

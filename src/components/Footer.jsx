  
import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div>
            <AnimatedElement type="fade-in">
              <h3 className="font-sans text-2xl font-bold mb-6">Azhizen</h3>
              <p className="text-background/70 mb-6 leading-relaxed">
                Premium photography and media services for discerning clients who demand excellence in visual storytelling.
              </p>
              <div className="flex space-x-6">
                <a href="https://www.instagram.com/azhizen_solutions?igsh=MWVrb3JrOXFqNzdpcA==" className="text-background hover:text-background/70 transition-colors duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-background hover:text-background/70 transition-colors duration-300">
                  <Facebook size={20} />
                </a>
                <a href="https://www.linkedin.com/company/azhizensolutions/" className="text-background hover:text-background/70 transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="azhizensolutions@azhizen.com" className="text-background hover:text-background/70 transition-colors duration-300">
                  <Mail size={20} />
                </a>
              </div>
            </AnimatedElement>
          </div>
          
          {/* Navigation Links */}
          <div className="md:ml-12">
            <AnimatedElement type="fade-in" delay="delay-200">
              <h4 className="text-xl mb-6 font-medium">Explore</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-background/70 hover:text-background transition-colors duration-300">Home</a></li>
                <li><a href="#about" className="text-background/70 hover:text-background transition-colors duration-300">About Us</a></li>
                <li><a href="#services" className="text-background/70 hover:text-background transition-colors duration-300">Services</a></li>
                <li><a href="#portfolio" className="text-background/70 hover:text-background transition-colors duration-300">Portfolio</a></li>
                <li><a href="#testimonials" className="text-background/70 hover:text-background transition-colors duration-300">Testimonials</a></li>
                <li><a href="#contact" className="text-background/70 hover:text-background transition-colors duration-300">Contact</a></li>
              </ul>
            </AnimatedElement>
          </div>
          
          {/* Services */}
          <div>
            <AnimatedElement type="fade-in" delay="delay-400">
              <h4 className="text-xl mb-6 font-medium">Services</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3">
                <li><a href="#" className="text-background/70 hover:text-background transition-colors duration-300">Photography</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors duration-300">Videography</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors duration-300">Graphic Design</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors duration-300">Video Editing</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors duration-300">Content Creation</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors duration-300">Digital Marketing</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors duration-300">Media Support</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors duration-300">Paid Ads Management</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors duration-300">Search Engine Optimization</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors duration-300">Social Media Management</a></li>
                
              </ul>
            </AnimatedElement>
          </div>
        </div>
        
        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/50">&copy; {currentYear} Azhizen Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

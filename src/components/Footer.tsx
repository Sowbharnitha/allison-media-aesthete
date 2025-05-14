
import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-allison-dark text-allison-light py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div>
            <h3 className="font-playfair text-2xl mb-6">Allison Media</h3>
            <p className="text-allison-accent mb-6 leading-relaxed">
              Premium photography and media services for discerning clients who demand excellence in visual storytelling.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-allison-light hover:text-allison-accent transition-colors duration-300">
                <Instagram />
              </a>
              <a href="#" className="text-allison-light hover:text-allison-accent transition-colors duration-300">
                <Facebook />
              </a>
              <a href="#" className="text-allison-light hover:text-allison-accent transition-colors duration-300">
                <Linkedin />
              </a>
              <a href="#" className="text-allison-light hover:text-allison-accent transition-colors duration-300">
                <Mail />
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="md:ml-12">
            <h4 className="text-xl mb-6 font-medium">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-allison-accent hover:text-allison-light transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-allison-accent hover:text-allison-light transition-colors duration-300">About Us</a></li>
              <li><a href="#services" className="text-allison-accent hover:text-allison-light transition-colors duration-300">Services</a></li>
              <li><a href="#portfolio" className="text-allison-accent hover:text-allison-light transition-colors duration-300">Portfolio</a></li>
              <li><a href="#testimonials" className="text-allison-accent hover:text-allison-light transition-colors duration-300">Testimonials</a></li>
              <li><a href="#contact" className="text-allison-accent hover:text-allison-light transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl mb-6 font-medium">Services</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3">
              <li><a href="#" className="text-allison-accent hover:text-allison-light transition-colors duration-300">Photography</a></li>
              <li><a href="#" className="text-allison-accent hover:text-allison-light transition-colors duration-300">Videography</a></li>
              <li><a href="#" className="text-allison-accent hover:text-allison-light transition-colors duration-300">Graphic Design</a></li>
              <li><a href="#" className="text-allison-accent hover:text-allison-light transition-colors duration-300">Video Editing</a></li>
              <li><a href="#" className="text-allison-accent hover:text-allison-light transition-colors duration-300">Content Creation</a></li>
              <li><a href="#" className="text-allison-accent hover:text-allison-light transition-colors duration-300">Digital Marketing</a></li>
              <li><a href="#" className="text-allison-accent hover:text-allison-light transition-colors duration-300">Media Support</a></li>
              <li><a href="#" className="text-allison-accent hover:text-allison-light transition-colors duration-300">Social Media</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {currentYear} Allison Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

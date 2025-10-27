import { FcCamera, FcMultipleCameras, FcPicture, FcVideoFile, FcAddImage, FcBarChart, FcCustomerSupport, FcShare, FcSearch, FcAdvertising, FcSalesPerformance } from "react-icons/fc";
import { FaCameraRetro, FaVideo, FaPaintBrush ,FaFilm,FaPenNib,FaChartLine, FaHeadset,FaShareAlt,FaSearch,FaBullhorn,FaUserPlus} from "react-icons/fa";
import { useEffect } from 'react';

const services = [
  {
    title: "Photography",
    icon: FaCameraRetro,
    description: "Professional photography services tailored to capture your vision, from corporate events to artistic portfolios.",
    image: "https://images.unsplash.com/photo-1565004569929-4f400c11e9ef?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww"
  },
  {
    title: "Videography",
    icon: FaVideo,
    description: "Dynamic video production services, creating compelling visual stories that engage and inspire your audience.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Graphic Design",
    icon:  FaPaintBrush,
    description: "Creative graphic design solutions that communicate your brand message with clarity and visual impact.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Video Editing & Animation",
    icon: FaFilm,
    description: "Expert post-production services transforming raw footage into polished, professional final products.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Content Creation",
    icon: FaPenNib,
    description: "Strategic content creation combining visual assets and messaging for maximum engagement.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Digital Marketing",
    icon: FaChartLine,
    description: "Data-driven digital marketing strategies to elevate your brand's online presence and reach.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Media Support",
    icon:  FaHeadset,
    description: "Comprehensive media support services to ensure your projects run smoothly from concept to completion.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Social Media Management",
    icon: FaShareAlt,
    description: "End-to-end social media management, building community and driving engagement across platforms.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Search Engine Optimization",
    icon: FaSearch,
    description: "SEO is a core component of a digital marketing strategy, working alongside other channels like social media and email marketing to drive traffic.",
    image: "https://images.unsplash.com/photo-1637606346315-d23ed32a6cfc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNlYXJjaCUyMGVuZ2luZSUyMG9wdGltaXphdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Paid Ads Management",
    icon:FaBullhorn,
    description: "Paid ads management is the strategic process of creating, optimizing, and managing digital advertising campaigns to drive specific business goals.",
    image: "https://images.unsplash.com/photo-1636442486733-c9c7a7a573aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGFpZCUyMGFkZHMlMjBNYW5hZ2VtZW50fGVufDB8fDB8fHww"
  },
  {
    title: "Lead Generation Growth Market",
    icon: FaUserPlus,
    description: "Lead generation is the process of attracting and converting strangers and prospects into someone who has indicated interest in your company's product or service.",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhZCUyMGdlbmVyYXRpb258ZW58MHx8MHx8fDA%3D"
  }
];

const ServicesSection = () => {
  // Initialize animation elements when component mounts
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.service-card');
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.85;
        
        if (isVisible) {
          setTimeout(() => {
            element.classList.add('visible');
          }, index * 100); // Staggered animation
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on mount
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base text-muted-foreground">
              We offer a comprehensive suite of creative services designed to elevate your brand and captivate your audience.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card opacity-0 transform translate-y-10 transition-all duration-700 group cursor-pointer bg-card rounded-xl shadow-soft hover:shadow-elegant border border-border aesthetic-blur h-[220px]"
            >
              <div className="p-4 flex flex-col items-center text-center h-full relative overflow-hidden">
                {/* Background Image (Hidden by default, shown on hover) */}
                <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover absolute inset-0 z-0"
                  />
                  <div className="absolute inset-0 bg-black/70 z-10"></div>
                </div>
                
                <div className="relative z-20 transition-transform duration-500 group-hover:opacity-0 flex flex-col items-center justify-center h-full">
                  <service.icon className="h-8 w-8 mb-3 transition-all duration-500" />
                  <h3 className="text-sm font-semibold mb-1">{service.title}</h3>
                </div>
                
                <div className="absolute inset-0 z-30 flex items-center justify-center p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-xs leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
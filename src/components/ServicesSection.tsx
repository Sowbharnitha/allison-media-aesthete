import {
  FcCamera,
  FcMultipleCameras,
  FcPicture,
  FcVideoFile,
  FcAddImage,
  FcBarChart,
  FcCustomerSupport,
  FcShare,
  FcSearch,
  FcAdvertising,
  FcSalesPerformance
} from "react-icons/fc";

import {
  FaCameraRetro,
  FaVideo,
  FaPaintBrush,
  FaFilm,
  FaPenNib,
  FaChartLine,
  FaHeadset,
  FaShareAlt,
  FaSearch,
  FaBullhorn,
  FaUserPlus
} from "react-icons/fa";

import { useEffect } from 'react';
import AnimatedElement from './AnimatedElement';

const services = [
  {
    title: "Photography",
    icon: FaCameraRetro,
    description:
      "Professional photography services tailored to capture your vision, from corporate events to artistic portfolios.",
    image:
      "https://images.unsplash.com/photo-1565004569929-4f400c11e9ef?w=1000&auto=format&fit=crop&q=60"
  },
  {
    title: "Videography",
    icon: FaVideo,
    description:
      "Dynamic video production services, creating compelling visual stories that engage and inspire your audience.",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Graphic Design",
    icon: FaPaintBrush,
    description:
      "Creative graphic design solutions that communicate your brand message with clarity and visual impact.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Video Editing & Animation",
    icon: FaFilm,
    description:
      "Expert post-production services transforming raw footage into polished, professional final products.",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Content Creation",
    icon: FaPenNib,
    description:
      "Strategic content creation combining visual assets and messaging for maximum engagement.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Digital Marketing",
    icon: FaChartLine,
    description:
      "Data-driven digital marketing strategies to elevate your brand's online presence and reach.",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Media Support",
    icon: FaHeadset,
    description:
      "Comprehensive media support services to ensure your projects run smoothly from concept to completion.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Social Media Management",
    icon: FaShareAlt,
    description:
      "End-to-end social media management, building community and driving engagement across platforms.",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Search Engine Optimization",
    icon: FaSearch,
    description:
      "SEO works alongside social media and email marketing to drive sustainable traffic growth.",
    image:
      "https://images.unsplash.com/photo-1637606346315-d23ed32a6cfc?w=1000&auto=format&fit=crop&q=60"
  },
  {
    title: "Paid Ads Management",
    icon: FaBullhorn,
    description:
      "Strategic creation, optimization, and management of paid advertising campaigns to achieve business goals.",
    image:
      "https://images.unsplash.com/photo-1636442486733-c9c7a7a573aa?w=600&auto=format&fit=crop&q=60"
  },
  {
    title: "Lead Generation Growth Market",
    icon: FaUserPlus,
    description:
      "Attracting and converting prospects into qualified leads interested in your product or service.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1000&auto=format&fit=crop&q=60"
  }
];

const ServicesSection = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.service-card');
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.85) {
          setTimeout(() => {
            element.classList.add('visible');
          }, index * 100);
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive suite of creative services designed to elevate your brand and captivate your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card opacity-0 translate-y-10 transition-all duration-700 group cursor-pointer bg-card rounded-xl shadow-soft hover:shadow-elegant border border-border h-[220px]"
            >
              <div className="p-4 flex flex-col items-center text-center h-full relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/70"></div>
                </div>

                <div className="relative z-20 group-hover:opacity-0 transition-opacity duration-500 flex flex-col items-center justify-center h-full">
                  <service.icon className="h-8 w-8 mb-3" />
                  <h3 className="text-sm font-semibold">{service.title}</h3>
                </div>

                <div className="absolute inset-0 z-30 flex items-center justify-center p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-xs leading-relaxed">
                    {service.description}
                  </p>
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

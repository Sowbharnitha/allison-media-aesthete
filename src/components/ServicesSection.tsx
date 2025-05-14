
import { Camera, Video, Image, Film, Pencil, LineChart, Headphones, Instagram } from 'lucide-react';

const services = [
  {
    title: "Photography",
    icon: Camera,
    description: "Professional photography services tailored to capture your vision, from corporate events to artistic portfolios."
  },
  {
    title: "Videography",
    icon: Video,
    description: "Dynamic video production services, creating compelling visual stories that engage and inspire your audience."
  },
  {
    title: "Graphic Design",
    icon: Image,
    description: "Creative graphic design solutions that communicate your brand message with clarity and visual impact."
  },
  {
    title: "Video Editing & Animation",
    icon: Film,
    description: "Expert post-production services transforming raw footage into polished, professional final products."
  },
  {
    title: "Content Creation",
    icon: Pencil,
    description: "Strategic content creation combining visual assets and messaging for maximum engagement."
  },
  {
    title: "Digital Marketing",
    icon: LineChart,
    description: "Data-driven digital marketing strategies to elevate your brand's online presence and reach."
  },
  {
    title: "Media Support",
    icon: Headphones,
    description: "Comprehensive media support services to ensure your projects run smoothly from concept to completion."
  },
  {
    title: "Social Media Management",
    icon: Instagram,
    description: "End-to-end social media management, building community and driving engagement across platforms."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card p-8 flex flex-col items-center text-center animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <service.icon className="service-icon" />
              <h3 className="service-title text-allison-dark">{service.title}</h3>
              <div className="service-overlay text-allison-light">
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Star, Check, MessageCircle, Quote } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Creative Director",
    company: "Luxe Interiors",
    testimonial: "Azhizen Media transformed our brand imagery with their exceptional photography. Their team understood our aesthetic perfectly and delivered beyond our expectations. The attention to detail and professionalism throughout the project was outstanding.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    status: "Verified Client",
    project: "Brand Photography",
    date: "March 2025"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CEO",
    company: "Vertex Studios",
    testimonial: "Working with Azhizen Media on our corporate videos was a seamless experience from start to finish. Their attention to detail and creative vision elevated our messaging. The team's ability to translate our brand values into compelling visual content has significantly improved our market presence.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    status: "Returning Client",
    project: "Corporate Video Series",
    date: "January 2025"
  },
  {
    id: 3,
    name: "Sarah Reynolds",
    position: "Marketing Director",
    company: "Boutique Fashion",
    testimonial: "The social media content created by Azhizen Media has significantly increased our engagement metrics. Their strategic approach to visual storytelling has been invaluable. Within just three months of working together, we've seen a 40% increase in social media engagement and a 25% growth in our online following.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    status: "Verified Client",
    project: "Social Media Campaign",
    date: "February 2025"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          className={`w-5 h-5 group-hover:text-yellow-400 group-hover:fill-yellow-400 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
        />
      );
    }
    return stars;
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedElement>
          <h2 className="section-heading">Client Testimonials</h2>
        </AnimatedElement>
        
        <AnimatedElement type="fade-in">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700">
              Hear what our clients have to say about their experiences working with Azhizen Media.
            </p>
          </div>
        </AnimatedElement>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Testimonials Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <AnimatedElement type="fade-in">
                    <div className="group bg-white hover:bg-black rounded-lg shadow-lg p-8 md:p-10 relative transition-colors duration-300">
                      {/* Large quote mark in background */}
                      <div className="absolute top-6 right-6 text-gray-100 group-hover:text-gray-700">
                        <Quote size={120} />
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-8 relative z-10">
                        <div className="md:w-1/3">
                          <div className="flex flex-col items-center md:items-start">
                            <div className="relative mb-4">
                              <img 
                                src={testimonial.avatar} 
                                alt={testimonial.name} 
                                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                              />
                              <span className="absolute -bottom-2 -right-2 bg-black text-white p-1 rounded-full group-hover:bg-white group-hover:text-black">
                                <MessageCircle className="w-4 h-4" />
                              </span>
                            </div>
                            
                            <h4 className="text-xl font-bold group-hover:text-white">{testimonial.name}</h4>
                            <p className="text-gray-600 group-hover:text-gray-300">{testimonial.position}</p>
                            <p className="text-gray-800 font-medium mt-1 group-hover:text-white">{testimonial.company}</p>
                            
                            <div className="flex mt-3">
                              {renderStars(testimonial.rating)}
                            </div>
                            
                            <div className="mt-4 text-sm text-gray-500 group-hover:text-gray-300 flex flex-col items-center md:items-start">
                              <span className="flex items-center text-green-600 group-hover:text-green-400 mb-1">
                                <Check className="w-4 h-4 mr-1" />
                                {testimonial.status}
                              </span>
                              <span className="mb-1">{testimonial.project}</span>
                              <span>{testimonial.date}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="md:w-2/3 flex items-center">
                          <blockquote>
                            <p className="text-gray-700 italic text-lg md:text-xl leading-relaxed group-hover:text-white">"{testimonial.testimonial}"</p>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </AnimatedElement>
                </div>
              ))}
            </div>
          </div>
          
          {/* Controls */}
          <div className="mt-10 flex justify-center space-x-4">
            <button 
              onClick={prevTestimonial} 
              className="p-3 border border-black hover:bg-black hover:text-white transition-colors duration-300 rounded-full"
              disabled={isAnimating}
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-3 border border-black hover:bg-black hover:text-white transition-colors duration-300 rounded-full"
              disabled={isAnimating}
              aria-label="Next testimonial"
            >
              <ArrowRight size={24} />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="mt-6 flex justify-center space-x-3">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => !isAnimating && setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-black' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
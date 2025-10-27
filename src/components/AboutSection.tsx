
import { AspectRatio } from "@/components/ui/aspect-ratio";
import AnimatedElement from "./AnimatedElement";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedElement>
          <h2 className="section-heading">About Azhizen Media</h2>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <AnimatedElement type="fade-in-left">
              <h3 className="text-3xl font-playfair mb-6 text-azhizen-dark relative after:content-[''] after:block 
              after:w-16 after:h-0.5 after:bg-azhizen-dark after:mt-4">Our Story</h3>
              
              <p className="mb-6 text-gray-700 leading-relaxed text-lg">
                Founded with a vision to redefine visual storytelling, Azhizen Media has evolved from a passionate 
                photography studio to a full-service creative powerhouse. Our journey began with a simple mission: 
                to capture authentic moments and transform them into compelling visual narratives.
              </p>
            </AnimatedElement>
            
            <AnimatedElement type="fade-in-left" delay="delay-200">
              <p className="mb-6 text-gray-700 leading-relaxed text-lg">
                Today, we bring together a diverse team of visionaries, technicians, and strategists who share 
                a common purpose: to create impactful visual content that resonates deeply with audiences 
                and delivers meaningful results for our clients.
              </p>
            </AnimatedElement>
            
            <AnimatedElement type="fade-in" delay="delay-400">
              <div className="border-l-4 border-azhizen-dark pl-6 my-8">
                <p className="text-xl font-playfair italic text-azhizen-dark">
                  "We don't just create images and videos – we craft visual experiences that tell your unique story."
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement type="fade-in-left" delay="delay-600">
              <p className="text-gray-700 leading-relaxed text-lg">
                What distinguishes us is our unwavering commitment to excellence, our collaborative approach, 
                and our ability to see beyond the obvious to capture the extraordinary in every project.
              </p>
            </AnimatedElement>
          </div>
          
          <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
            <div className="space-y-4">
              <AnimatedElement type="scale-in">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <AspectRatio ratio={3/4}>
                    <img 
                      src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" 
                      alt="Azhizen Media team" 
                      className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                    />
                  </AspectRatio>
                </div>
              </AnimatedElement>
              
              <AnimatedElement type="scale-in" delay="delay-300">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <AspectRatio ratio={1/1}>
                    <img 
                      src="https://images.unsplash.com/photo-1589663923617-baab87300c76?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Creative process" 
                      className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                    />
                  </AspectRatio>
                </div>
              </AnimatedElement>
            </div>
            
            <div className="space-y-4 mt-8">
              <AnimatedElement type="scale-in" delay="delay-200">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <AspectRatio ratio={1/1}>
                    <img 
                      src="https://images.unsplash.com/photo-1568086456294-1de64a726415?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFyY2hpdGVjdHVyZSUyMHBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D" 
                      alt="Photography equipment" 
                      className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                    />
                  </AspectRatio>
                </div>
              </AnimatedElement>
              
              <AnimatedElement type="scale-in" delay="delay-500">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <AspectRatio ratio={3/4}>
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                      alt="Client meeting" 
                      className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                    />
                  </AspectRatio>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

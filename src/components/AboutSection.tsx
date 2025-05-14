
const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">About Allison Media</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-playfair mb-6">Our Story</h3>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Founded in 2015, Allison Media has grown from a passionate photography studio to a full-service creative agency. 
              Our journey began with a simple mission: to capture moments with honesty and transform them into timeless visual stories.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Today, we bring together a diverse team of creatives, technicians, and strategists who share a common vision: 
              to create impactful visual content that resonates deeply with audiences and achieves our clients' objectives.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What sets us apart is our meticulous attention to detail, our collaborative approach, and our unwavering 
              commitment to excellence in everything we deliver.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" 
                alt="Allison Media team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden mt-12">
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" 
                alt="Photography equipment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                alt="Creative process" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden mt-12">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Client meeting" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

<<<<<<< HEAD

import AnimatedElement from './AnimatedElement';
=======
import AnimatedElement from './AnimatedElement';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
>>>>>>> main

const portfolioItems = [
  {
    id: 1,
    title: "Architectural Photography",
    category: "Photography",
<<<<<<< HEAD
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544"
=======
    description: "Modern architectural compositions capturing light and form",
    image: "https://images.unsplash.com/photo-1649673225564-456b7105336d?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "architectural-photography"
>>>>>>> main
  },
  {
    id: 2,
    title: "Brand Campaign",
    category: "Marketing",
<<<<<<< HEAD
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
=======
    description: "Strategic visual storytelling for premium brands",
    image: "https://i.pinimg.com/1200x/3e/43/bb/3e43bbe3369aa024d0ca4189d1a5073f.jpg",
    slug: "brand-campaign"
>>>>>>> main
  },
  {
    id: 3,
    title: "Product Showcase",
    category: "Photography",
<<<<<<< HEAD
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
=======
    description: "Elegant product photography with artistic flair",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    slug: "product-showcase"
>>>>>>> main
  },
  {
    id: 4,
    title: "Corporate Event",
    category: "Videography",
<<<<<<< HEAD
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
=======
    description: "Professional event documentation and highlights",
    image: "https://plus.unsplash.com/premium_photo-1661304812608-cef75b63a95f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "corporate-event"
>>>>>>> main
  },
  {
    id: 5,
    title: "Editorial Shoot",
    category: "Photography",
<<<<<<< HEAD
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
=======
    description: "Fashion and lifestyle editorial photography",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    slug: "editorial-shoot"
>>>>>>> main
  },
  {
    id: 6,
    title: "Social Media Campaign",
    category: "Content Creation",
<<<<<<< HEAD
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedElement>
          <h2 className="section-heading">Portfolio</h2>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <AnimatedElement 
              key={item.id} 
              type="fade-in" 
              delay={`delay-${(index % 3) * 100}`} 
              threshold={0.1}
            >
              <div className="portfolio-item group h-[400px] relative cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="portfolio-overlay">
                  <h3 className="text-xl font-sans font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.category}</p>
                </div>
=======
    description: "Engaging content for digital platforms",
    image: "https://i.pinimg.com/1200x/d5/20/fa/d520fac8a38813af49a1737c82415a06.jpg",
    slug: "social-media-campaign"
  }
];

const categories = ['All', 'Photography', 'Marketing', 'Videography', 'Content Creation'];
const PortfolioSection = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredItem, setHoveredItem] = useState(null);

  const handlePortfolioClick = (slug) => {
    navigate(`/portfolio/${slug}`);
  };

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="section-heading">Portfolio</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
              A curated collection of our finest work across photography, videography, and creative campaigns
            </p>
          </div>
        </AnimatedElement>

        {/* Category Filter */}
        <AnimatedElement type="fade-in" delay="delay-200">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-black text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedElement>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <AnimatedElement 
              key={`${item.id}-${activeCategory}`}
              type="scale-in" 
              delay={`delay-${(index % 3) * 100}`} 
              threshold={0.1}
            >
              <div
                className="portfolio-item group relative cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-700 h-[600px]"
                onClick={() => handlePortfolioClick(item.slug)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 left-4 z-30 bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}

                {/* Image with enhanced hover effects */}
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                    style={{ aspectRatio: '4/3' }}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Enhanced overlay content */}
                <div className="portfolio-overlay group-hover:opacity-100">
                  <div className="text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-3 text-white/90">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-white/80 text-sm mb-4 max-w-xs mx-auto leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-white/90">
                      <span className="text-sm font-medium">View Project</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hover border effect */}
                <div className={`absolute inset-0 border-2 border-white/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  hoveredItem === item.id ? 'animate-pulse' : ''
                }`} />
>>>>>>> main
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default PortfolioSection;
=======
export default PortfolioSection;
>>>>>>> main

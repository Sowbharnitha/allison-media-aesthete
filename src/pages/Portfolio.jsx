import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedElement from '../components/AnimatedElement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const portfolioItems = [
  {
    id: 1,
    title: "Architectural Photography",
    category: "Photography",
    description: "Modern architectural compositions capturing light and form",
    image: "https://images.unsplash.com/photo-1649673225564-456b7105336d?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: true,
    year: "2024",
    client: "Modern Spaces Inc."
  },
  {
    id: 2,
    title: "Brand Campaign",
    category: "Marketing",
    description: "Strategic visual storytelling for premium brands",
    image: "https://i.pinimg.com/1200x/3e/43/bb/3e43bbe3369aa024d0ca4189d1a5073f.jpg",
    featured: false,
    year: "2024",
    client: "Luxury Brand Co."
  },
  {
    id: 3,
    title: "Product Showcase",
    category: "Photography",
    description: "Elegant product photography with artistic flair",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    featured: true,
    year: "2023",
    client: "Artisan Goods"
  },
  {
    id: 4,
    title: "Corporate Event",
    category: "Videography",
    description: "Professional event documentation and highlights",
    image: "https://plus.unsplash.com/premium_photo-1661304812608-cef75b63a95f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: false,
    year: "2024",
    client: "Tech Summit"
  },
  {
    id: 5,
    title: "Editorial Shoot",
    category: "Photography",
    description: "Fashion and lifestyle editorial photography",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    featured: true,
    year: "2023",
    client: "Fashion Weekly"
  },
  {
    id: 6,
    title: "Social Media Campaign",
    category: "Content Creation",
    description: "Engaging content for digital platforms",
    image: "https://i.pinimg.com/1200x/d5/20/fa/d520fac8a38813af49a1737c82415a06.jpg",
    featured: false,
    year: "2024",
    client: "Digital Agency"
  },
  {
    id: 7,
    title: "Wedding Photography",
    category: "Photography",
    description: "Romantic and timeless wedding moments",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    featured: false,
    year: "2023",
    client: "Private Client"
  },
  {
    id: 8,
    title: "Music Video",
    category: "Videography",
    description: "Creative music video production",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
    featured: true,
    year: "2024",
    client: "Independent Artist"
  }
];

const categories = ['All', 'Photography', 'Marketing', 'Videography', 'Content Creation'];

const Portfolio = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [hoveredItem, setHoveredItem] = useState(null);

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const handleItemClick = (itemId) => {
    navigate(`/portfolio/${itemId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedElement>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
                Our Portfolio
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A comprehensive showcase of our creative work across photography, videography, 
                and digital campaigns. Each project represents our commitment to excellence and innovation.
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                <span>{portfolioItems.length} Projects</span>
                <span>•</span>
                <span>5 Categories</span>
                <span>•</span>
                <span>2023-2024</span>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Filter and View Controls */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            
            {/* Category Filter */}
            <AnimatedElement type="fade-in-left">
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-black text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </AnimatedElement>

            {/* View Mode Toggle */}
            <AnimatedElement type="fade-in-right">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">View:</span>
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      viewMode === 'grid' 
                        ? 'bg-white text-black shadow-sm' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      viewMode === 'list' 
                        ? 'bg-white text-black shadow-sm' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    List
                  </button>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Portfolio Grid/List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          
          {viewMode === 'grid' ? (
            // Grid View
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <AnimatedElement 
                  key={`${item.id}-${activeCategory}`}
                  type="scale-in" 
                  delay={`delay-${(index % 3) * 100}`}
                  threshold={0.1}
                >
                  <div
                    className={`portfolio-item group relative cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-700 bg-white ${
                      item.featured ? 'ring-2 ring-black/10' : ''
                    }`}
                    onClick={() => handleItemClick(item.id)}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {/* Featured Badge */}
                    {item.featured && (
                      <div className="absolute top-4 left-4 z-30 bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </div>
                    )}

                    {/* Image Container */}
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110"
                        style={{ aspectRatio: '16/10' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {item.category}
                        </span>
                        <span className="text-xs text-gray-400">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-black group-hover:text-gray-700 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{item.client}</span>
                        <div className="flex items-center text-black group-hover:translate-x-1 transition-transform duration-300">
                          <span className="text-sm font-medium mr-1">View</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className={`absolute inset-0 border-2 border-black/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      hoveredItem === item.id ? 'animate-pulse' : ''
                    }`} />
                  </div>
                </AnimatedElement>
              ))}
            </div>
          ) : (
            // List View
            <div className="space-y-6">
              {filteredItems.map((item, index) => (
                <AnimatedElement 
                  key={`${item.id}-${activeCategory}-list`}
                  type="fade-in" 
                  delay={`delay-${index * 50}`}
                  threshold={0.1}
                >
                  <div
                    className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer group"
                    onClick={() => handleItemClick(item.id)}
                  >
                    <div className="md:w-1/3 h-64 md:h-48 relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        style={{ aspectRatio: '16/10' }}
                      />
                      {item.featured && (
                        <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="md:w-2/3 p-8 flex flex-col justify-center">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                          {item.category}
                        </span>
                        <span className="text-sm text-gray-400">{item.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-black group-hover:text-gray-700 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Client: {item.client}</span>
                        <div className="flex items-center text-black group-hover:translate-x-2 transition-transform duration-300">
                          <span className="font-medium mr-2">View Project</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredItems.length === 0 && (
            <AnimatedElement>
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">No projects found</h3>
                <p className="text-gray-600 mb-6">Try selecting a different category to see more work.</p>
                <button
                  onClick={() => setActiveCategory('All')}
                  className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
                >
                  View All Projects
                </button>
              </div>
            </AnimatedElement>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedElement>
            <h2 className="text-4xl font-bold mb-6 text-black">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with the same attention to detail and creativity you see in our portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/#contact')}
                className="px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => navigate('/')}
                className="px-8 py-4 border-2 border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-all duration-300"
              >
                Back to Home
              </button>
            </div>
          </AnimatedElement>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
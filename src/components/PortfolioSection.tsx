
const portfolioItems = [
  {
    id: 1,
    title: "Architectural Photography",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544"
  },
  {
    id: 2,
    title: "Brand Campaign",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    id: 3,
    title: "Product Showcase",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: 4,
    title: "Corporate Event",
    category: "Videography",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  },
  {
    id: 5,
    title: "Editorial Shoot",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
  },
  {
    id: 6,
    title: "Social Media Campaign",
    category: "Content Creation",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="portfolio-item group animate-fade-in-up"
              style={{animationDelay: `${item.id * 0.1}s`}}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-96 object-cover"
              />
              <div className="portfolio-overlay">
                <h3 className="text-xl font-playfair mb-2">{item.title}</h3>
                <p className="text-sm text-allison-accent">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import AnimatedElement from "./AnimatedElement";
import Navbar from "./Navbar";
import { ChevronLeft, ChevronRight, X, Camera, Mail, Phone } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const portfolioDetails = [
  {
    id: 1,
    title: "Architectural Photography",
    category: "Architecture",
    description: "Immerse yourself in the mesmerizing world of architectural photography, where we capture the essence of modern structures, intricate details, and breathtaking perspectives. Our expert lens reveals the soul of buildings, from sleek skyscrapers to timeless heritage sites, showcasing innovative designs and masterful craftsmanship that define urban landscapes.",
    heroImage: "https://plus.unsplash.com/premium_photo-1747722370543-c119da6f83a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1N3xNOGpWYkxiVFJ3c3x8ZW58MHx8fHx8",
    heroTheme: {
      overlay: "from-black/70 via-black/50 to-black/70",
      text: "text-white",
      badge: "bg-white/20 text-white border border-white/30",
    },
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568086456294-1de64a726415?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFyY2hpdGVjdHVyZSUyMHBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D"
    ]
  },
  {
    id: 2,
    title: "Brand Campaign",
    category: "Marketing",
    description: "Transform your brand into a visual masterpiece with our strategic campaign photography. We craft compelling narratives that resonate with audiences, blending artistic vision with marketing savvy to create campaigns that not only look stunning but drive real business results and brand loyalty.",
    heroImage: "https://images.unsplash.com/photo-1750768145390-f0ad18d3e65b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxCcmFuZCUyMGNhbXBpYWduJTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    heroTheme: {
      overlay: "from-white/85 via-white/70 to-white/85",
      text: "text-gray-900",
      badge: "bg-white/75 text-gray-900 border border-gray-200",
    },
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1000&auto=format&fit=crop",
      "https://plus.unsplash.com/premium_photo-1736892868674-a79d83a1baf8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEJyYW5kJTIwY2FtcGlhZ24lMjBtZWV0aW5nfGVufDB8fDB8fHww"
    ]
  },
  {
    id: 3,
    title: "Product Showcase",
    category: "Commercial",
    description: "Elevate your products to star status with our professional product photography. Every shot is meticulously crafted to highlight your items' best features, using expert lighting, composition, and styling to create images that not only showcase products but tell their unique stories and drive consumer desire.",
    heroImage: "https://images.unsplash.com/photo-1632835222323-c134fbb4e606?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heroTheme: {
      overlay: "from-black/80 via-black/60 to-black/80",
      text: "text-white",
      badge: "bg-black/40 text-white border border-white/20",
    },
    images: [
      "https://images.unsplash.com/photo-1756723901890-4d8a4b4cddaf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhhcmR3YXJlJTIwUHJvZHVjdCUyMFNob3djYXNlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1726219836525-7038d30f8219?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGhhcmR3YXJlJTIwUHJvZHVjdCUyMFNob3djYXNlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1635501108508-8ca1523a099e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGhhcmR3YXJlJTIwUHJvZHVjdCUyMFNob3djYXNlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1580686954168-b08d0309d203?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1666401565408-9b6b0741f0d6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1589663923617-baab87300c76?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 4,
    title: "Corporate Event",
    category: "Events",
    description: "Capture the pulse of corporate excellence with our dynamic event photography. From high-stakes conferences to celebratory gatherings, we document every moment with precision and artistry, creating visual records that reflect professionalism, energy, and the human connections that drive business success.",
    heroImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
    heroTheme: {
      overlay: "from-black/70 via-black/50 to-black/70",
      text: "text-white",
      badge: "bg-black/35 text-white border border-white/20",
    },
    images: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: 5,
    title: "Editorial Shoot",
    category: "Fashion",
    description: "Step into worlds of imagination with our editorial photography that transcends mere images. Each shoot is a carefully curated story, blending fashion, art, and narrative to create visual editorials that captivate readers and set trends, perfect for magazines, campaigns, and artistic expression.",
    heroImage: "https://images.unsplash.com/photo-1704541360587-0169796805d4?q=80&w=885&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heroTheme: {
      overlay: "from-black/75 via-black/55 to-black/75",
      text: "text-white",
      badge: "bg-black/35 text-white border border-white/20",
    },
    images: [
      "https://plus.unsplash.com/premium_photo-1757338343058-6bde68e54937?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1682531571794-ff120669d1ca?q=80&w=1135&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1730065016779-da112df0e6ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1673976173755-7b107346c51f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RWRpdG9yaWFsJTIwU2hvb3QlMjBuYXR1cmUlMjBza3l8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1565004569929-4f400c11e9ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWRpdG9yaWFsJTIwU2hvb3QlMjBuYXR1cmUlMjAlMjBwaG90b2dyYXBoZXJ8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1719707509155-a88ae7f6a00b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fEVkaXRvcmlhbCUyMFNob290JTIwbmF0dXJlJTIwJTIwbW91bnRhaW58ZW58MHx8MHx8fDA%3D"
    ]
  },
  {
    id: 6,
    title: "Social Media Campaign",
    category: "Digital",
    description: "Ignite digital conversations with our vibrant social media content creation. We design eye-catching visuals, engaging graphics, and compelling imagery that cuts through the noise, builds brand awareness, and fosters meaningful connections across all social platforms.",
    heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    heroTheme: {
      overlay: "from-black/65 via-black/45 to-black/65",
      text: "text-white",
      badge: "bg-black/30 text-white border border-white/25",
    },
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop"
    ]
  }
];

const PortfolioDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Map slugs to portfolio details
  const slugToIdMap = {
    'architectural-photography': 1,
    'brand-campaign': 2,
    'product-showcase': 3,
    'corporate-event': 4,
    'editorial-shoot': 5,
    'social-media-campaign': 6
  };
  
  const detail = portfolioDetails.find(item => item.id === slugToIdMap[slug]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const heroTheme = detail?.heroTheme ?? {
    overlay: "from-black/60 via-black/40 to-black/60",
    text: "text-white",
    badge: "bg-white/20 text-white border border-white/30",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!detail) {
    return (
      <div className="container mx-auto px-4 py-24 text-center min-h-screen flex items-center justify-center">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Portfolio Item Not Found</h2>
          <button
            className="px-6 py-3 bg-gradient-to-r from-black to-gray-800 text-white rounded-lg hover:from-gray-800 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            onClick={() => navigate('/')}
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setIsDialogOpen(true);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % detail.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + detail.images.length) % detail.images.length);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={detail.heroImage}
          alt={detail.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/1200x800/333333/ffffff?text=Hero+Image';
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${heroTheme.overlay}`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`text-center ${heroTheme.text} max-w-4xl px-4`}>
            <AnimatedElement type="fade-in-up" delay="delay-200">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {detail.title}
              </h1>
            </AnimatedElement>
            <AnimatedElement type="fade-in-up" delay="delay-400">
              <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                {detail.description.split('.')[0]}.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Back Button and Content Description */}
            <div className="mb-12">
              <AnimatedElement type="fade-in-up" className="mb-8">
                <button
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 hover:-translate-x-0.5"
                  onClick={() => navigate(-1)}
                >
                  ← Back
                </button>
              </AnimatedElement>

              <AnimatedElement type="fade-in-up" delay="delay-200">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Camera className="w-8 h-8 text-gray-600" />
                  <span className="text-lg font-medium text-gray-600 uppercase tracking-wider">
                    {detail.category} Portfolio
                  </span>
                  <Camera className="w-8 h-8 text-gray-600" />
                </div>
              </AnimatedElement>

              <AnimatedElement type="fade-in-up" delay="delay-400">
                <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                  {detail.description}
                </p>
              </AnimatedElement>
            </div>

            {/* Image Grid - Fixed aspect ratio and proper alignment */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {detail.images.map((img, idx) => (
                <AnimatedElement
                  key={idx}
                  type="zoom-in"
                  delay={`delay-${(idx % 6 + 1) * 100}`}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2 hover:scale-[1.02]">
                    <Dialog open={isDialogOpen && selectedImageIndex === idx} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <button
                          onClick={() => openLightbox(idx)}
                          className="w-full overflow-hidden focus:outline-none"
                        >
                          <AspectRatio ratio={4 / 3} className="relative">
                            <img
                              src={img}
                              alt={`${detail.title} ${idx + 1}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/600x450/cccccc/666666?text=Image+Not+Available';
                              }}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                                  <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </AspectRatio>
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-5xl w-full h-[90vh] p-0 bg-black/95">
                        <div className="relative w-full h-full flex items-center justify-center">
                          <button
                            onClick={() => setIsDialogOpen(false)}
                            className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                          >
                            <X className="w-6 h-6" />
                          </button>

                          <button
                            onClick={prevImage}
                            className="absolute left-4 z-10 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition-colors"
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </button>

                          <img
                            src={detail.images[selectedImageIndex]}
                            alt={`${detail.title} ${selectedImageIndex + 1}`}
                            className="max-w-full max-h-full object-contain transition-opacity duration-300"
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/800x600/cccccc/666666?text=Image+Not+Available';
                            }}
                          />

                          <button
                            onClick={nextImage}
                            className="absolute right-4 z-10 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition-colors"
                          >
                            <ChevronRight className="w-6 h-6" />
                          </button>

                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                            {selectedImageIndex + 1} / {detail.images.length}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedElement type="fade-in-up">
            <h3 className="text-4xl font-bold mb-6">
              Ready to Create Something Amazing?
            </h3>
          </AnimatedElement>

          <AnimatedElement type="fade-in-up" delay="delay-200">
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life. Our team is ready to capture your story with the same level of excellence and creativity.
            </p>
          </AnimatedElement>

          <AnimatedElement type="fade-in-up" delay="delay-400">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
             
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default PortfolioDetail;
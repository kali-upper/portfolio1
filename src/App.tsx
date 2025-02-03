import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Camera, Download, Instagram, Linkedin, Mail, Palette, ChevronRight, ArrowRight, ArrowUp } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const photoSectionRef = useRef(null);
  const logoSectionRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const photoProjects = [
    {
      title: "Portrait Photography",
      description: "Professional portrait photography series showcasing creative lighting and composition techniques.",
      image: "https://images.unsplash.com/photo-1594751543129-6701ad444259?auto=format&fit=crop&q=80&w=800",
      tags: ["Photography", "Retouching"]
    },
    {
      title: "Product Photography",
      description: "High-end product photography with advanced post-processing and color grading.",
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800",
      tags: ["Photography", "Editing"]
    },
    {
      title: "Digital Art Series",
      description: "Creative digital artwork combining photography and graphic design elements.",
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80&w=800",
      tags: ["Digital Art", "Editing"]
    }
  ];

  const logoProjects = [
    {
      title: "Brand Identity Design",
      description: "Complete brand redesign for a tech startup, including logo design, color palette, and brand guidelines.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
      tags: ["Branding", "Logo Design"]
    },
    {
      title: "Logo Collection",
      description: "A curated collection of minimalist logo designs created for various industries and businesses.",
      image: "https://images.unsplash.com/photo-1560157368-946d9c8f7cb6?auto=format&fit=crop&q=80&w=800",
      tags: ["Logo Design", "Branding"]
    },
    {
      title: "Corporate Branding",
      description: "Full corporate identity package including logo, stationery, and marketing materials.",
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800",
      tags: ["Branding", "Design"]
    }
  ];

  const renderProjects = (projects) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group relative bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ChevronRight className="w-6 h-6 text-white" />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark:bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`fixed w-full transition-all duration-300 z-50 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <a
                  onClick={() => scrollToSection(photoSectionRef)}
                  className="relative group cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-white dark:bg-gray-900 px-4 py-2 rounded-lg">
                    <Camera className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                </a>
                <a
                  onClick={() => scrollToSection(logoSectionRef)}
                  className="relative group cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-white dark:bg-gray-900 px-4 py-2 rounded-lg">
                    <Palette className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </a>
              </div>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              {darkMode ? (
                <Sun className="w-6 h-6 text-yellow-500" />
              ) : (
                <Moon className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-6 animate-fade-in">
              Creative Vision,
              <br />
              Perfect Execution
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 animate-fade-in-delay">
              Transforming ideas into stunning visuals through expert photo editing and logo design
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-delay-2">
              <a
                href="https://example.com/portfolio.pdf"
                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium bg-indigo-600 rounded-lg text-white hover:bg-indigo-700 transition-all duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <Download className="w-5 h-5 mr-2" />
                <span>Download Portfolio</span>
              </a>
              <button
                onClick={() => scrollToSection(photoSectionRef)}
                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium border-2 border-purple-500 text-purple-500 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Editing Section */}
      <section ref={photoSectionRef} className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Camera className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
              Photo Editing
            </h2>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Professional photo editing services that bring out the best in every image
          </p>
          {renderProjects(photoProjects)}
        </div>
      </section>

      {/* Logo Design Section */}
      <section ref={logoSectionRef} className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Palette className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
              Logo Design & Branding
            </h2>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Creating memorable brand identities through innovative logo design
          </p>
          {renderProjects(logoProjects)}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to start a project? Reach out through any of these platforms
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com/example"
              className="group relative p-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
            >
              <Instagram className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/example"
              className="group relative p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="group relative p-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full hover:from-red-600 hover:to-pink-600 transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center space-x-2">
              <Camera className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <Palette className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <p className="text-center text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Your Creative Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-indigo-600 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-indigo-700 hover:scale-110 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
}

export default App;
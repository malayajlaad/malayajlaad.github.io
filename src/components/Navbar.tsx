
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { id: "about", text: "About" },
    { id: "skills", text: "Skills" },
    { id: "experience", text: "Experience" },
    { id: "projects", text: "Projects" },
    { id: "contact", text: "Contact" },
  ];
  
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };
  
  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-portfolio-dark-navy/90 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a 
          href="#" 
          className="text-portfolio-teal font-mono text-xl font-semibold"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          ML
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link, i) => (
              <li key={link.id}>
                <button 
                  onClick={() => scrollTo(link.id)}
                  className="nav-link font-mono"
                >
                  <span className="text-portfolio-teal">{`0${i + 1}.`}</span> {link.text}
                </button>
              </li>
            ))}
          </ul>
          <a 
            href="#" 
            className="border border-portfolio-teal text-portfolio-teal rounded px-4 py-2 hover:bg-portfolio-teal/10 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://linkedin.com/in/malayajlaad", "_blank");
            }}
          >
            Resume
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-teal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-portfolio-light-navy/95 transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col items-center space-y-8">
            {navLinks.map((link, i) => (
              <li key={link.id}>
                <button 
                  onClick={() => scrollTo(link.id)}
                  className="font-mono text-xl"
                >
                  <span className="text-portfolio-teal">{`0${i + 1}.`}</span> {link.text}
                </button>
              </li>
            ))}
            <li>
              <a 
                href="#" 
                className="border border-portfolio-teal text-portfolio-teal rounded px-6 py-2 hover:bg-portfolio-teal/10 transition-colors duration-300 mt-4"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://linkedin.com/in/malayajlaad", "_blank");
                  setIsMobileMenuOpen(false);
                }}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import { useState } from "react";
import { Terminal, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#hero", label: "./home" },
    { href: "#about", label: "./about" },
    { href: "#experience", label: "./experience" },
    { href: "#projects", label: "./projects" },
    { href: "#skills", label: "./skills" },
    { href: "#contact", label: "./contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-darker/90 backdrop-blur-sm border-b border-matrix/30" data-testid="navigation">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-matrix font-bold text-xl" data-testid="logo">
            <span className="text-white">root@</span>virendra<span className="text-cyber">:~$</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8" data-testid="desktop-menu">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="hover:text-matrix transition-colors duration-300"
                data-testid={`nav-${item.label.replace('./', '')}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-matrix"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X /> : <Terminal />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-darker border-t border-matrix/30" data-testid="mobile-menu">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left hover:text-matrix transition-colors"
                data-testid={`mobile-nav-${item.label.replace('./', '')}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

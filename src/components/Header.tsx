
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-rspamd-dark">Rspamd</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#overview" className="nav-link">
              Overview
            </a>
            <a href="#features" className="nav-link">
              Documentation
            </a>
            <a href="#downloads" className="nav-link">
              Downloads
            </a>
            <a href="#" className="nav-link">
              Blog
            </a>
            <a href="#" className="nav-link">
              GitHub
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden py-4 border-t border-gray-100 bg-white animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            <a 
              href="#overview" 
              className="py-2 nav-link"
              onClick={() => setIsOpen(false)}
            >
              Overview
            </a>
            <a 
              href="#features" 
              className="py-2 nav-link"
              onClick={() => setIsOpen(false)}
            >
              Documentation
            </a>
            <a 
              href="#downloads" 
              className="py-2 nav-link"
              onClick={() => setIsOpen(false)}
            >
              Downloads
            </a>
            <a 
              href="#" 
              className="py-2 nav-link"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </a>
            <a 
              href="#" 
              className="py-2 nav-link"
              onClick={() => setIsOpen(false)}
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

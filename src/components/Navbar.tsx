import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "What We Do", path: "/what-we-do" },
    { label: "Platform", path: "/platform" },
    { label: "Why Us", path: "/why-us" },
    { label: "Services", path: "/services" },
    { label: "Team & Testimonials", path: "/team" },
    { label: "Contact", path: "/contact" },
  ];

  const isActiveLink = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
           <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 font-orbitron font-bold text-2xl text-primary hover:text-primary-glow transition-colors">
            <img
              src="/meta forge xr.png" // If in public folder
              alt="Metaforge XR Logo"
              className="w-10 h-auto"
            />
            <span>Metaforge_XR</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-inter font-medium transition-colors ${
                  isActiveLink(link.path)
                    ? "text-primary bg-primary/10"
                    : "text-text-secondary hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-primary hover:bg-primary-glow text-primary-foreground font-inter font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-glow-primary"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-inter font-medium transition-colors ${
                    isActiveLink(link.path)
                      ? "text-primary bg-primary/10"
                      : "text-text-secondary hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button 
                  asChild
                  className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-inter font-semibold"
                >
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
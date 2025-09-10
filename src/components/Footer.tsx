import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="font-orbitron font-bold text-xl text-primary mb-4">
              Metaforge_XR
            </h3>
            <p className="text-text-secondary mb-6 font-inter">
              Empowering the Next Generation of Field Technicians.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-inter font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-text-secondary font-inter">0706 961 9645</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-text-secondary font-inter">contact@metaforgexr.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-secondary font-inter">
                  No 6 Benin street wadata makurdi, Benue state
                </span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col justify-end">
            <p className="text-text-muted text-sm font-inter">
              Copyright © 2025 Metaforge XR
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
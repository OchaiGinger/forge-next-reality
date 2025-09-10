import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Factory, Fuel, Zap, Plane, Phone, Mail, MapPin } from "lucide-react";

const Services = () => {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing & Assembly Lines",
      description: "Streamline production processes with AR-guided assembly instructions, real-time quality control, and predictive maintenance for manufacturing equipment.",
      features: ["Assembly line optimization", "Quality assurance AR", "Equipment health monitoring", "Worker training simulations"]
    },
    {
      icon: Fuel,
      title: "Oil & Gas Facilities",
      description: "Enhance safety and efficiency in high-risk environments with remote monitoring, hazard detection, and expert-guided maintenance procedures.",
      features: ["Pipeline integrity monitoring", "Safety protocol AR", "Remote expert assistance", "Emergency response training"]
    },
    {
      icon: Zap,
      title: "Utilities & Smart Grids",
      description: "Modernize power infrastructure with smart grid visualization, outage prediction, and AR-assisted field operations for utility technicians.",
      features: ["Grid visualization", "Outage prediction AI", "Meter reading automation", "Maintenance scheduling"]
    },
    {
      icon: Plane,
      title: "Aviation & Rail",
      description: "Ensure transportation safety with comprehensive maintenance tracking, parts identification, and compliance verification systems.",
      features: ["Aircraft inspection AR", "Parts identification", "Maintenance logging", "Compliance verification"]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-orbitron font-bold text-4xl md:text-6xl text-foreground mb-6">
            Who We <span className="text-primary">Serve</span>
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-text-secondary font-inter leading-relaxed">
              Metaforge XR delivers industry-specific solutions across critical infrastructure sectors, 
              helping organizations achieve operational excellence through immersive technology.
            </p>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {industries.map((industry, index) => (
            <Card 
              key={index}
              className="bg-card border-card-border shadow-card hover:shadow-elevated hover:border-primary/30 transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-orbitron font-bold text-xl text-foreground mb-4">
                  {industry.title}
                </h3>
                <p className="text-text-secondary font-inter leading-relaxed mb-6">
                  {industry.description}
                </p>
                <div className="space-y-2">
                  {industry.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-text-secondary font-inter">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Get Started Section */}
        <div className="bg-surface-elevated border border-primary/20 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="font-orbitron font-bold text-3xl text-foreground mb-4">
              Partner with Metaforge XR
            </h2>
            <p className="text-xl text-text-secondary font-inter max-w-2xl mx-auto">
              Transform your industrial operations with XR-powered intelligence. 
              Our team is ready to design a custom solution for your specific needs.
            </p>
          </div>
          
          <div className="text-center mb-8">
            <Button 
              asChild 
              size="lg"
              className="bg-secondary hover:bg-secondary-glow text-secondary-foreground font-inter font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-glow-secondary"
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-card border border-card-border rounded-2xl shadow-card p-8">
          <h2 className="font-orbitron font-bold text-2xl text-foreground text-center mb-8">
            Get in Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-orbitron font-semibold text-lg text-foreground mb-2">Phone</h3>
              <p className="text-text-secondary font-inter">0706 961 9645</p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-orbitron font-semibold text-lg text-foreground mb-2">Email</h3>
              <p className="text-text-secondary font-inter">contact@metaforgexr.com</p>
            </div>

            {/* Address */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-orbitron font-semibold text-lg text-foreground mb-2">Address</h3>
              <p className="text-text-secondary font-inter text-sm">
                No 6 Benin street wadata<br />
                makurdi, Benue state
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="text-center mt-8 pt-8 border-t border-border">
            <h3 className="font-orbitron font-semibold text-lg text-foreground mb-4">Business Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto text-text-secondary font-inter">
              <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
              <div>Saturday: 9:00 AM - 2:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
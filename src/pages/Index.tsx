import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Eye, Cpu, Zap, Users } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import ceoProfile from "@/assets/ceo-profile.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/70"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-orbitron font-bold text-5xl md:text-7xl text-foreground mb-6 animate-fade-in">
              Metaforge XR – <span className="text-primary">Reinventing</span> Industrial Operations
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-8 font-inter animate-slide-up">
              Immersive, AI-driven XR solutions for maintenance, diagnostics, and training.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground font-inter font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-glow-primary animate-glow-pulse"
            >
              <Link to="/what-we-do" className="inline-flex items-center">
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-text-secondary font-inter leading-relaxed">
              Metaforge XR merges extended reality, AI, and IoT to deliver immersive, real-time industrial maintenance, 
              repair, and training solutions. Welcome to the future of Industry 4.0.
            </p>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-foreground mb-4">
              Leadership
            </h2>
          </div>
          
          <div className="max-w-md mx-auto mb-12">
            <Card className="bg-card border-card-border shadow-card hover:shadow-elevated transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary">
                  <img 
                    src={ceoProfile} 
                    alt="Catherine Erdoo Esihe - CEO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-orbitron font-bold text-xl text-foreground mb-2">
                  Catherine Erdoo Esihe
                </h3>
                <p className="text-primary font-inter font-medium">CEO</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              asChild 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Link to="/team" className="inline-flex items-center">
                Meet the Full Team <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-foreground mb-4">
              Client Success Stories
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="bg-surface border-primary/20 shadow-card hover:shadow-glow-subtle transition-all duration-300">
              <CardContent className="p-6">
                <p className="text-text-secondary font-inter italic mb-4">
                  "Metaforge XR's solutions reduced our maintenance downtime by 40%. The AR-guided repairs are game-changing."
                </p>
                <div className="text-primary font-inter font-semibold">— Industrial Manager, Lagos</div>
              </CardContent>
            </Card>
            
            <Card className="bg-surface border-primary/20 shadow-card hover:shadow-glow-subtle transition-all duration-300">
              <CardContent className="p-6">
                <p className="text-text-secondary font-inter italic mb-4">
                  "The predictive AI caught failures before they happened. Saved us millions in potential damages."
                </p>
                <div className="text-primary font-inter font-semibold">— Operations Director, Port Harcourt</div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              asChild 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Link to="/team" className="inline-flex items-center">
                Read More Testimonials <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our Core Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <Card className="bg-card border-card-border shadow-card hover:shadow-elevated hover:border-primary/30 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-orbitron font-bold text-xl text-foreground mb-4">
                  AR-Enabled Repair Instructions
                </h3>
                <p className="text-text-secondary font-inter">
                  Step-by-step holographic guidance overlaid directly on equipment for precision maintenance.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-card-border shadow-card hover:shadow-elevated hover:border-primary/30 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Cpu className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-orbitron font-bold text-xl text-foreground mb-4">
                  IoT-Driven Diagnostics
                </h3>
                <p className="text-text-secondary font-inter">
                  Real-time sensor data analysis providing instant equipment health insights and alerts.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-card-border shadow-card hover:shadow-elevated hover:border-primary/30 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-orbitron font-bold text-xl text-foreground mb-4">
                  AI Failure Prediction Engine
                </h3>
                <p className="text-text-secondary font-inter">
                  Machine learning algorithms that predict equipment failures before they occur.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              asChild 
              className="bg-secondary hover:bg-secondary-glow text-secondary-foreground font-inter font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-glow-secondary"
            >
              <Link to="/services" className="inline-flex items-center">
                Explore Our Services <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
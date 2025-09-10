import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Cpu, Cloud, Smartphone, Monitor, Headphones } from "lucide-react";
import platformGraphic from "@/assets/platform-graphic.jpg";

const Platform = () => {
  const features = [
    {
      icon: Eye,
      title: "Spatial Computing Engine",
      description: "Advanced AR/VR rendering with real-time object recognition and tracking for seamless digital overlay integration."
    },
    {
      icon: Cpu,
      title: "Edge AI Processing",
      description: "On-device machine learning for instant decision-making without relying on cloud connectivity in remote locations."
    },
    {
      icon: Cloud,
      title: "IoT Data Integration",
      description: "Seamless connection to thousands of sensors and devices across your industrial infrastructure."
    },
    {
      icon: Smartphone,
      title: "Cross-Device Compatibility",
      description: "Works across AR headsets, tablets, smartphones, and industrial terminals for maximum flexibility."
    },
    {
      icon: Monitor,
      title: "Digital Twin Visualization",
      description: "Real-time 3D models of your equipment synchronized with live sensor data and operational metrics."
    },
    {
      icon: Headphones,
      title: "Voice-Activated Controls",
      description: "Hands-free operation through natural language processing and voice commands for safer work environments."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-orbitron font-bold text-4xl md:text-6xl text-foreground mb-6">
            <span className="text-primary">Visualize.</span> Diagnose. <span className="text-secondary">Resolve.</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-text-secondary font-inter leading-relaxed mb-8">
              Our spatial computing engine links real-world assets to XR overlays with real-time IoT telemetry, 
              enabling hands-free intelligence at your fingertips.
            </p>
          </div>
        </div>

        {/* Platform Graphic */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-elevated">
            <img 
              src={platformGraphic} 
              alt="XR Platform Architecture - Headset with AI circuits and IoT cloud" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          </div>
        </div>

        {/* Platform Features */}
        <div className="mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-center text-foreground mb-12">
            Platform Capabilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-card border-card-border shadow-card hover:shadow-elevated hover:border-primary/30 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-orbitron font-bold text-xl text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary font-inter leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-surface-elevated border border-primary/20 rounded-2xl p-8 mb-16">
          <h2 className="font-orbitron font-bold text-2xl text-foreground mb-8 text-center">
            Technical Architecture
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-orbitron font-semibold text-lg text-primary mb-4">Hardware Support</h3>
              <ul className="space-y-2 text-text-secondary font-inter">
                <li>• Microsoft HoloLens 2 & HoloLens 3</li>
                <li>• Magic Leap 2 Enterprise</li>
                <li>• Industrial Android & iOS tablets</li>
                <li>• Windows Mixed Reality headsets</li>
                <li>• Industrial wearable displays</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-orbitron font-semibold text-lg text-primary mb-4">Integration Protocols</h3>
              <ul className="space-y-2 text-text-secondary font-inter">
                <li>• OPC-UA industrial communication</li>
                <li>• MQTT IoT messaging</li>
                <li>• REST APIs for system integration</li>
                <li>• WebRTC for real-time collaboration</li>
                <li>• Enterprise SSO authentication</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-card border-primary/20 shadow-card text-center">
            <CardContent className="p-8">
              <div className="text-4xl font-orbitron font-bold text-primary mb-2">95%</div>
              <div className="text-text-secondary font-inter">Prediction Accuracy</div>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-primary/20 shadow-card text-center">
            <CardContent className="p-8">
              <div className="text-4xl font-orbitron font-bold text-primary mb-2">&lt;100ms</div>
              <div className="text-text-secondary font-inter">Response Latency</div>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-primary/20 shadow-card text-center">
            <CardContent className="p-8">
              <div className="text-4xl font-orbitron font-bold text-primary mb-2">24/7</div>
              <div className="text-text-secondary font-inter">Continuous Monitoring</div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-surface-elevated border border-secondary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="font-orbitron font-bold text-2xl text-foreground mb-4">
              Experience the Future of Industrial Operations
            </h2>
            <p className="text-text-secondary font-inter mb-6">
              Schedule a personalized demonstration of our XR platform and see how it can transform your workflow.
            </p>
            <Button 
              asChild 
              className="bg-secondary hover:bg-secondary-glow text-secondary-foreground font-inter font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-glow-secondary"
            >
              <a href="/contact">Request Demo</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
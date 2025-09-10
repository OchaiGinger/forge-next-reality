import { Card, CardContent } from "@/components/ui/card";
import { Eye, Cpu, Zap, Shield, Network, Brain, Wrench, BarChart3 } from "lucide-react";

const WhatWeDo = () => {
  const services = [
    {
      icon: Eye,
      title: "AR-Enabled Repair Instructions",
      description: "Step-by-step holographic guidance overlaid directly on equipment for precision maintenance. Our AR system provides contextual information, safety warnings, and interactive 3D models to ensure accurate repairs every time.",
    },
    {
      icon: Cpu,
      title: "IoT-Driven Diagnostics",
      description: "Real-time sensor data analysis providing instant equipment health insights and alerts. Connect thousands of sensors across your facility for comprehensive monitoring and predictive maintenance scheduling.",
    },
    {
      icon: Zap,
      title: "AI Failure Prediction Engine",
      description: "Machine learning algorithms that predict equipment failures before they occur. Our AI analyzes historical data, sensor readings, and environmental factors to forecast maintenance needs with 95% accuracy.",
    },
    {
      icon: Shield,
      title: "Safety Protocol Integration",
      description: "Immersive safety training and real-time hazard detection through XR interfaces. Keep your workforce safe with virtual safety drills and augmented reality safety warnings.",
    },
    {
      icon: Network,
      title: "Digital Twin Technology",
      description: "Create perfect virtual replicas of your industrial assets for simulation and testing. Run scenarios, optimize processes, and train staff without risking real equipment or production time.",
    },
    {
      icon: Brain,
      title: "Cognitive Assistance",
      description: "AI-powered knowledge base that provides instant access to technical documentation, troubleshooting guides, and expert recommendations through natural language processing.",
    },
    {
      icon: Wrench,
      title: "Remote Expert Support",
      description: "Connect field technicians with remote experts through AR-enabled video calls. Share visual context, annotations, and guidance in real-time for complex repair procedures.",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive dashboards tracking equipment efficiency, maintenance costs, and operational metrics. Turn data into actionable insights for continuous improvement.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-orbitron font-bold text-4xl md:text-6xl text-foreground mb-6">
            XR-Powered <span className="text-primary">Smart Maintenance</span>
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-text-secondary font-inter leading-relaxed">
              From remote factories to high-risk plants, Metaforge helps reduce downtime and accelerate performance 
              through cutting-edge extended reality and artificial intelligence solutions.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-card border-card-border shadow-card hover:shadow-elevated hover:border-primary/30 transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-orbitron font-bold text-xl text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-text-secondary font-inter leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-surface-elevated border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="font-orbitron font-bold text-2xl text-foreground mb-4">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-text-secondary font-inter mb-6">
              Discover how Metaforge XR can revolutionize your industrial processes with immersive technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/platform"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-glow text-primary-foreground font-inter font-semibold rounded-lg transition-all duration-300 hover:shadow-glow-primary"
              >
                Explore Our Platform
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-semibold rounded-lg transition-all duration-300"
              >
                Schedule a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Shield, Zap, Network, Users, Award, Clock, Target } from "lucide-react";

const WhyUs = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Cross-device Compatibility",
      description: "Works seamlessly across AR headsets, tablets, smartphones, and industrial terminals. No vendor lock-in.",
      benefit: "Maximize existing hardware investments"
    },
    {
      icon: Network,
      title: "Digital Twin Visualization",
      description: "Real-time 3D models of your equipment synchronized with live IoT data for complete operational visibility.",
      benefit: "Reduce troubleshooting time by 60%"
    },
    {
      icon: Zap,
      title: "Edge-based ML Diagnostics",
      description: "On-device machine learning processes data locally, ensuring instant responses even in remote locations.",
      benefit: "99.9% uptime guaranteed"
    },
    {
      icon: Users,
      title: "Collaborative Workflows",
      description: "Multi-user AR sessions enable remote expert assistance and team-based problem solving in real-time.",
      benefit: "Faster issue resolution"
    },
    {
      icon: Award,
      title: "Industry-Leading Accuracy",
      description: "95% prediction accuracy for equipment failures, validated across multiple industrial environments.",
      benefit: "Prevent costly unexpected breakdowns"
    },
    {
      icon: Clock,
      title: "Rapid Deployment",
      description: "Quick integration with existing systems through standardized industrial protocols and APIs.",
      benefit: "ROI within 6 months"
    },
    {
      icon: Target,
      title: "Customizable Solutions",
      description: "Tailored implementations for specific industrial environments and operational requirements.",
      benefit: "Perfect fit for your workflow"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "End-to-end encryption, role-based access control, and compliance with industrial security standards.",
      benefit: "Protect critical infrastructure"
    }
  ];

  const metrics = [
    { value: "40%", label: "Reduction in Maintenance Downtime" },
    { value: "60%", label: "Faster Troubleshooting" },
    { value: "85%", label: "Improved First-Time Fix Rate" },
    { value: "50%", label: "Lower Training Costs" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-orbitron font-bold text-4xl md:text-6xl text-foreground mb-6">
            <span className="text-primary">Safer.</span> Faster. <span className="text-secondary">More Connected.</span>
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-text-secondary font-inter leading-relaxed">
              Metaforge XR delivers proven results through cutting-edge technology, 
              industry expertise, and unwavering commitment to operational excellence.
            </p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-surface-elevated border-primary/20 shadow-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-orbitron font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-sm text-text-secondary font-inter">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advantages Grid */}
        <div className="mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-center text-foreground mb-12">
            Why Leading Industries Choose Metaforge XR
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <Card 
                key={index}
                className="bg-card border-card-border shadow-card hover:shadow-elevated hover:border-primary/30 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <advantage.icon className="w-5 h-5 text-primary mr-2" />
                        <h3 className="font-orbitron font-bold text-lg text-foreground">
                          {advantage.title}
                        </h3>
                      </div>
                      <p className="text-text-secondary font-inter mb-3 leading-relaxed">
                        {advantage.description}
                      </p>
                      <div className="inline-block px-3 py-1 bg-primary/10 rounded-full">
                        <span className="text-primary font-inter font-medium text-sm">
                          {advantage.benefit}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Comparison Section */}
        <div className="bg-surface-elevated border border-primary/20 rounded-2xl p-8 mb-16">
          <h2 className="font-orbitron font-bold text-2xl text-foreground mb-8 text-center">
            Metaforge XR vs Traditional Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-orbitron font-semibold text-lg text-secondary mb-4">Traditional Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-text-secondary font-inter">
                  <div className="w-2 h-2 bg-text-muted rounded-full mr-3"></div>
                  Reactive maintenance only
                </li>
                <li className="flex items-center text-text-secondary font-inter">
                  <div className="w-2 h-2 bg-text-muted rounded-full mr-3"></div>
                  Paper-based documentation
                </li>
                <li className="flex items-center text-text-secondary font-inter">
                  <div className="w-2 h-2 bg-text-muted rounded-full mr-3"></div>
                  Limited remote support
                </li>
                <li className="flex items-center text-text-secondary font-inter">
                  <div className="w-2 h-2 bg-text-muted rounded-full mr-3"></div>
                  High training costs
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-orbitron font-semibold text-lg text-primary mb-4">Metaforge XR Solution</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-text-secondary font-inter">
                  <Check className="w-4 h-4 text-primary mr-3" />
                  Predictive AI maintenance
                </li>
                <li className="flex items-center text-text-secondary font-inter">
                  <Check className="w-4 h-4 text-primary mr-3" />
                  Interactive AR documentation
                </li>
                <li className="flex items-center text-text-secondary font-inter">
                  <Check className="w-4 h-4 text-primary mr-3" />
                  Real-time expert collaboration
                </li>
                <li className="flex items-center text-text-secondary font-inter">
                  <Check className="w-4 h-4 text-primary mr-3" />
                  Immersive training simulations
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Security & Compliance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-card border-card-border shadow-card">
            <CardContent className="p-8">
              <h3 className="font-orbitron font-bold text-xl text-foreground mb-4">
                Security First
              </h3>
              <ul className="space-y-2 text-text-secondary font-inter">
                <li>• End-to-end AES-256 encryption</li>
                <li>• Role-based access controls</li>
                <li>• On-premises deployment options</li>
                <li>• SOC 2 Type II compliance</li>
                <li>• Regular security audits</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-card-border shadow-card">
            <CardContent className="p-8">
              <h3 className="font-orbitron font-bold text-xl text-foreground mb-4">
                Proven Results
              </h3>
              <ul className="space-y-2 text-text-secondary font-inter">
                <li>• 50+ successful deployments</li>
                <li>• 95% client retention rate</li>
                <li>• 6-month average ROI</li>
                <li>• 24/7 technical support</li>
                <li>• Continuous platform updates</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-surface-elevated border border-secondary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="font-orbitron font-bold text-2xl text-foreground mb-4">
              Ready to Lead Your Industry?
            </h2>
            <p className="text-text-secondary font-inter mb-6">
              Join forward-thinking companies already transforming their operations with Metaforge XR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                className="bg-primary hover:bg-primary-glow text-primary-foreground font-inter font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-glow-primary"
              >
                <a href="/services">Explore Solutions</a>
              </Button>
              <Button 
                asChild 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-semibold px-8 py-3 rounded-xl transition-all duration-300"
              >
                <a href="/contact">Schedule Consultation</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
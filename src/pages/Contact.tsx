import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-orbitron font-bold text-4xl md:text-6xl text-foreground mb-6">
            Get <span className="text-primary">Started</span>
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-text-secondary font-inter leading-relaxed">
              Ready to transform your industrial operations? Let's discuss how Metaforge XR 
              can deliver customized XR solutions for your specific needs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-card-border shadow-elevated">
              <CardContent className="p-8">
                <h2 className="font-orbitron font-bold text-2xl text-foreground mb-6">
                  Send us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-foreground font-inter">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        className="mt-1 bg-surface border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-foreground font-inter">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        className="mt-1 bg-surface border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground font-inter">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1 bg-surface border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-foreground font-inter">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      className="mt-1 bg-surface border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="industry" className="text-foreground font-inter">Industry</Label>
                    <Select name="industry">
                      <SelectTrigger className="mt-1 bg-surface border-border focus:border-primary">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manufacturing">Manufacturing & Assembly</SelectItem>
                        <SelectItem value="oil-gas">Oil & Gas</SelectItem>
                        <SelectItem value="utilities">Utilities & Smart Grids</SelectItem>
                        <SelectItem value="aviation">Aviation & Rail</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="interest" className="text-foreground font-inter">Area of Interest</Label>
                    <Select name="interest">
                      <SelectTrigger className="mt-1 bg-surface border-border focus:border-primary">
                        <SelectValue placeholder="What are you most interested in?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ar-maintenance">AR-Guided Maintenance</SelectItem>
                        <SelectItem value="predictive-ai">Predictive AI Analytics</SelectItem>
                        <SelectItem value="iot-diagnostics">IoT Diagnostics</SelectItem>
                        <SelectItem value="training">XR Training Solutions</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground font-inter">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your project requirements and how we can help..."
                      className="mt-1 bg-surface border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-inter font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-glow-primary disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="bg-surface-elevated border-primary/20 shadow-card">
              <CardContent className="p-8">
                <h3 className="font-orbitron font-bold text-xl text-foreground mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-foreground">Phone</h4>
                      <p className="text-text-secondary font-inter">0706 961 9645</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-foreground">Email</h4>
                      <p className="text-text-secondary font-inter">contact@metaforgexr.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-foreground">Address</h4>
                      <p className="text-text-secondary font-inter">
                        No 6 Benin street wadata<br />
                        makurdi, Benue state
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="bg-surface-elevated border-primary/20 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 text-primary mr-2" />
                  <h3 className="font-orbitron font-bold text-lg text-foreground">
                    Business Hours
                  </h3>
                </div>
                
                <div className="space-y-2 text-text-secondary font-inter">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Promise */}
            <Card className="bg-card border-secondary/20 shadow-card">
              <CardContent className="p-6 text-center">
                <h3 className="font-orbitron font-bold text-lg text-foreground mb-2">
                  Quick Response Guarantee
                </h3>
                <p className="text-text-secondary font-inter text-sm">
                  We respond to all inquiries within 24 hours during business days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-surface-elevated border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="font-orbitron font-bold text-2xl text-foreground mb-4">
              Prefer to Talk Directly?
            </h2>
            <p className="text-text-secondary font-inter mb-6">
              Schedule a 30-minute consultation call to discuss your XR implementation strategy.
            </p>
            <Button 
              asChild 
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-inter font-semibold px-8 py-3 rounded-xl transition-all duration-300"
            >
              <a href="tel:+2347069619645">Call Now: 0706 961 9645</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
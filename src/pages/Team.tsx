import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Award, Users, Target } from "lucide-react";
import ceoProfile from "@/assets/ceo-profile.jpg";

const Team = () => {
   const teamMembers = [
    {
      name: "Catherine Erdoo Esihe",
      role: "Chief Executive Officer",
      image: "ceoProfile",
      description: "Visionary leader with 15+ years in industrial technology and XR innovation. Pioneer in bringing immersive solutions to Nigerian industries.",
      expertise: ["Industrial IoT", "XR Strategy", "Business Development"]
    },
    {
      name: "Dr. Adebayo Okonkwo",
      role: "Chief Technology Officer",
      image: "adebayo.png",
      description: "Former Microsoft engineer specializing in mixed reality and AI systems. PhD in Computer Vision from University of Lagos.",
      expertise: ["Mixed Reality", "Computer Vision", "Machine Learning"]
    },
    {
      name: "Amara Nwosu",
      role: "Head of Product Development",
      image: "amara.png",
      description: "Product strategist with expertise in user experience design for industrial applications and AR interface development.",
      expertise: ["UX Design", "Product Strategy", "AR Interfaces"]
    },
    {
      name: "Kemi Adebola",
      role: "VP of Engineering",
      image: "kemi.png",
      description: "Full-stack developer and systems architect with experience building scalable industrial IoT platforms and edge computing solutions.",
      expertise: ["IoT Architecture", "Edge Computing", "Cloud Systems"]
    },
    {
      name: "Chidi Okwu",
      role: "Head of Sales & Partnerships",
      image: "chidi.png",
      description: "Industrial sales expert with deep connections across Nigeria's manufacturing, oil & gas, and utilities sectors.",
      expertise: ["B2B Sales", "Partnership Development", "Industry Relations"]
    },
    {
      name: "Fatima Ibrahim",
      role: "Lead AI Researcher",
      image: "fatima.png",
      description: "Machine learning specialist focused on predictive maintenance algorithms and industrial automation systems.",
      expertise: ["Predictive Analytics", "Deep Learning", "Industrial AI"]
    }
  ];

  const testimonials = [
    {
      quote: "Metaforge XR's AR-guided maintenance system reduced our equipment downtime by 40% within the first quarter. The ROI was immediate and substantial.",
      author: "Eng. James Adeyemi",
      position: "Plant Manager, Dangote Cement",
      company: "Lagos Manufacturing Facility"
    },
    {
      quote: "The predictive AI caught three critical failures before they happened, saving us over ₦50 million in potential damages and production losses.",
      author: "Dr. Sarah Okafor",
      position: "Operations Director",
      company: "Shell Nigeria Exploration"
    },
    {
      quote: "Training new technicians used to take months. With Metaforge's immersive simulations, we're getting them field-ready in weeks.",
      author: "Ahmed Bello",
      position: "Training Supervisor",
      company: "Nigerian National Petroleum Corporation"
    },
    {
      quote: "The digital twin visualization gave us insights into our grid operations that we never had before. Game-changing technology.",
      author: "Engr. Grace Okoye",
      position: "Chief Engineer",
      company: "Abuja Electricity Distribution Company"
    },
    {
      quote: "Remote expert support through AR saved us countless trips to offshore platforms. The cost savings alone justified the investment.",
      author: "Captain Emeka Nnaji",
      position: "Offshore Operations Manager",
      company: "TotalEnergies Nigeria"
    },
    {
      quote: "Quality control has never been more accurate. AR overlay detection catches defects that human inspectors might miss.",
      author: "Mrs. Blessing Okoro",
      position: "Quality Assurance Manager",
      company: "Innoson Vehicle Manufacturing"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-orbitron font-bold text-4xl md:text-6xl text-foreground mb-6">
            Meet Our <span className="text-primary">Team</span>
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-text-secondary font-inter leading-relaxed">
              Our diverse team combines deep technical expertise with extensive industry experience 
              to deliver transformative XR solutions for Nigeria's industrial sectors.
            </p>
          </div>
        </div>

        {/* CEO Spotlight */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="bg-surface-elevated border-primary/20 shadow-elevated">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="text-center md:text-left">
                  <div className="w-48 h-48 mx-auto md:mx-0 rounded-2xl overflow-hidden border-4 border-primary shadow-glow-primary">
                    <img 
                      src={ceoProfile} 
                      alt="Catherine Erdoo Esihe - CEO" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-2 text-center md:text-left">
                  <h2 className="font-orbitron font-bold text-3xl text-foreground mb-2">
                    Catherine Erdoo Esihe
                  </h2>
                  <p className="text-primary font-inter font-semibold text-lg mb-4">
                    Chief Executive Officer & Founder
                  </p>
                  <p className="text-text-secondary font-inter leading-relaxed mb-6">
                    Visionary leader with 15+ years in industrial technology and XR innovation. 
                    Catherine is pioneering the adoption of immersive technologies across Nigerian industries, 
                    with a focus on empowering local technicians and improving operational safety.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {["Industrial IoT", "XR Strategy", "Business Development"].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-inter">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Grid */}
        <div className="mb-20">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-center text-foreground mb-12">
            Leadership Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(1).map((member, index) => (
              <Card 
                key={index}
                className="bg-card border-card-border shadow-card hover:shadow-elevated hover:border-primary/30 transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary flex items-center justify-center">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-orbitron font-bold text-xl text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-inter font-semibold mb-4">{member.role}</p>
                  <p className="text-text-secondary font-inter text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-inter">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          <Card className="bg-surface-elevated border-primary/20 shadow-card text-center">
            <CardContent className="p-6">
              <Award className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-orbitron font-bold text-foreground mb-1">50+</div>
              <div className="text-sm text-text-secondary font-inter">Projects Delivered</div>
            </CardContent>
          </Card>
          
          <Card className="bg-surface-elevated border-primary/20 shadow-card text-center">
            <CardContent className="p-6">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-orbitron font-bold text-foreground mb-1">25+</div>
              <div className="text-sm text-text-secondary font-inter">Team Members</div>
            </CardContent>
          </Card>
          
          <Card className="bg-surface-elevated border-primary/20 shadow-card text-center">
            <CardContent className="p-6">
              <Target className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-orbitron font-bold text-foreground mb-1">95%</div>
              <div className="text-sm text-text-secondary font-inter">Client Retention</div>
            </CardContent>
          </Card>
          
          <Card className="bg-surface-elevated border-primary/20 shadow-card text-center">
            <CardContent className="p-6">
              <Linkedin className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-orbitron font-bold text-foreground mb-1">15+</div>
              <div className="text-sm text-text-secondary font-inter">Industry Awards</div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-center text-foreground mb-12">
            What Our Clients Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="bg-surface border-primary/20 shadow-card hover:shadow-glow-subtle transition-all duration-300"
              >
                <CardContent className="p-6">
                  <p className="text-text-secondary font-inter italic leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <div className="font-orbitron font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-primary font-inter font-medium text-sm">{testimonial.position}</div>
                    <div className="text-text-muted font-inter text-xs">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Mail, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/futuristic-tech-team-collaboration-with-neon-li.png"
            alt="Tech team collaboration background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-mono font-black text-4xl md:text-6xl text-foreground neon-text mb-8">Meet Our Team</h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            Visionary leaders driving the future of industrial extended reality solutions.
          </p>
        </div>
      </section>

      {/* Full Team Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-foreground text-center mb-16 neon-text">
            Leadership Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Catherine Erdoo Esihe - CEO */}
            <Card className="glassmorphism bg-card/50 border-primary/20 hover:neon-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary neon-glow">
                  <img
                    src="/professional-nigerian-woman-ceo-in-black-suit-with.png"
                    alt="Catherine Erdoo Esihe - CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-mono font-bold text-2xl text-foreground mb-2">Catherine Erdoo Esihe</h3>
                <p className="text-primary font-semibold mb-4">Chief Executive Officer</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Visionary leader with 15+ years in industrial technology and XR innovation. Catherine drives our
                  mission to revolutionize field operations through cutting-edge extended reality solutions.
                </p>
                <div className="flex justify-center space-x-4">
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    <Twitter className="h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Sadiq Bello - Lead XR Systems Engineer */}
            <Card className="glassmorphism bg-card/50 border-secondary/20 hover:neon-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 border-secondary neon-glow">
                  <img
                    src="/professional-nigerian-man-lead-engineer-in-bla.png"
                    alt="Sadiq Bello - Lead XR Systems Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-mono font-bold text-2xl text-foreground mb-2">Sadiq Bello</h3>
                <p className="text-secondary font-semibold mb-4">Lead XR Systems Engineer</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Expert in spatial computing and AR/VR development with deep expertise in industrial IoT integration.
                  Sadiq architects our core XR platform and ensures seamless hardware compatibility.
                </p>
                <div className="flex justify-center space-x-4">
                  <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors duration-300">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors duration-300">
                    <Twitter className="h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Bolanle Ogunlana - Director of Product & UX */}
            <Card className="glassmorphism bg-card/50 border-accent/20 hover:neon-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 border-accent neon-glow">
                  <img
                    src="/professional-nigerian-woman-director-in-black-.png"
                    alt="Bolanle Ogunlana - Director of Product & UX"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-mono font-bold text-2xl text-foreground mb-2">Bolanle Ogunlana</h3>
                <p className="text-accent font-semibold mb-4">Director of Product & UX</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Product strategist and UX designer specializing in industrial interfaces and human-centered design.
                  Bolanle ensures our XR solutions are intuitive and effective for field technicians.
                </p>
                <div className="flex justify-center space-x-4">
                  <Link href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                    <Twitter className="h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Full Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-foreground text-center mb-16 neon-text">
            Client Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glassmorphism bg-card/50 border-primary/20 hover:neon-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-4xl text-primary mb-4 neon-text">"</div>
                <p className="text-foreground mb-6 leading-relaxed">
                  Metaforge XR transformed our maintenance operations. Our technicians can now diagnose issues 60%
                  faster with their AR guidance system. The ROI was evident within the first quarter.
                </p>
                <div className="border-t border-border/20 pt-4">
                  <p className="text-muted-foreground font-medium">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Operations Director, TechCorp Manufacturing</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glassmorphism bg-card/50 border-secondary/20 hover:neon-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-4xl text-secondary mb-4 neon-text">"</div>
                <p className="text-foreground mb-6 leading-relaxed">
                  The IoT integration and predictive analytics have reduced our downtime by 40%. This technology is
                  revolutionary for industrial operations. Our team loves the intuitive interface.
                </p>
                <div className="border-t border-border/20 pt-4">
                  <p className="text-muted-foreground font-medium">Michael Chen</p>
                  <p className="text-sm text-muted-foreground">Plant Manager, Global Energy Solutions</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glassmorphism bg-card/50 border-accent/20 hover:neon-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-4xl text-accent mb-4 neon-text">"</div>
                <p className="text-foreground mb-6 leading-relaxed">
                  Training new technicians used to take months. With Metaforge XR's immersive training modules, we've
                  cut that time in half while improving safety compliance scores across all our facilities.
                </p>
                <div className="border-t border-border/20 pt-4">
                  <p className="text-muted-foreground font-medium">Dr. Amara Okafor</p>
                  <p className="text-sm text-muted-foreground">Training Director, Nigerian Oil & Gas</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glassmorphism bg-card/50 border-primary/20 hover:neon-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-4xl text-primary mb-4 neon-text">"</div>
                <p className="text-foreground mb-6 leading-relaxed">
                  The remote expert assistance feature has been a game-changer for our offshore operations. We can now
                  get specialist support instantly, regardless of location or weather conditions.
                </p>
                <div className="border-t border-border/20 pt-4">
                  <p className="text-muted-foreground font-medium">James Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Field Operations Manager, Atlantic Drilling</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glassmorphism bg-card/50 border-secondary/20 hover:neon-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-4xl text-secondary mb-4 neon-text">"</div>
                <p className="text-foreground mb-6 leading-relaxed">
                  Implementing Metaforge XR's digital twin technology gave us unprecedented visibility into our power
                  grid. We can now predict and prevent outages before they impact our customers.
                </p>
                <div className="border-t border-border/20 pt-4">
                  <p className="text-muted-foreground font-medium">Lisa Thompson</p>
                  <p className="text-sm text-muted-foreground">Grid Operations Chief, PowerGrid Utilities</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glassmorphism bg-card/50 border-accent/20 hover:neon-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-4xl text-accent mb-4 neon-text">"</div>
                <p className="text-foreground mb-6 leading-relaxed">
                  The AR-guided maintenance procedures have eliminated human error in our critical aircraft inspections.
                  Safety and efficiency have both improved dramatically since implementation.
                </p>
                <div className="border-t border-border/20 pt-4">
                  <p className="text-muted-foreground font-medium">Captain David Okonkwo</p>
                  <p className="text-sm text-muted-foreground">Maintenance Director, West African Airlines</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-foreground text-center mb-16 neon-text">
            Contact Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="glassmorphism bg-card/50 border-primary/20 hover:neon-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <Phone className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">Call us directly</p>
                  </div>
                </div>
                <p className="text-2xl font-mono text-primary">07069619645</p>
              </CardContent>
            </Card>

            <Card className="glassmorphism bg-card/50 border-secondary/20 hover:neon-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <MapPin className="h-8 w-8 text-secondary" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Address</h3>
                    <p className="text-muted-foreground">Visit our office</p>
                  </div>
                </div>
                <p className="text-foreground">
                  No 6 Benin Street, Wadata
                  <br />
                  Makurdi, Benue State
                  <br />
                  Nigeria
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="glassmorphism bg-card/50 border-accent/20 neon-glow">
            <CardContent className="p-12 text-center">
              <Mail className="h-16 w-16 text-accent mx-auto mb-6" />
              <h3 className="font-mono font-bold text-2xl text-foreground mb-4">Ready to Transform Your Operations?</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Get in touch with our team to discuss how Metaforge XR can revolutionize your industrial processes.
                We're here to help you forge the future of field operations.
              </p>
              <Button
                size="lg"
                className="gradient-neon neon-glow hover:shadow-xl transition-all duration-300 text-lg px-8 py-4 font-semibold"
                asChild
              >
                <Link href="tel:07069619645">
                  Call Now
                  <Phone className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}

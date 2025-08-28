import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Factory, Fuel, Zap, Plane, Phone, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/industrial-sectors-collage-with-neon-overlays-ma.png"
            alt="Industrial sectors background"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-mono font-black text-4xl md:text-6xl text-foreground neon-text mb-8">
            Industries We Serve
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            Transforming operations across critical industrial sectors with cutting-edge XR technology.
          </p>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-foreground text-center mb-16 neon-text">
            Who We Serve
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Manufacturing & Assembly Lines */}
            <Card className="glassmorphism bg-card/50 border-primary/20 hover:neon-glow transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <Factory className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-foreground text-2xl text-center">Manufacturing & Assembly Lines</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <img
                    src="/manufacturing-factory-with-neon-holographic-ov.png"
                    alt="Manufacturing with neon overlays"
                    className="w-full h-48 object-cover rounded-lg opacity-80"
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Streamline production workflows with AR-guided assembly instructions, real-time quality control, and
                  predictive maintenance alerts directly on the factory floor.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Reduce assembly errors by 85%</li>
                  <li>• Accelerate training for new workers</li>
                  <li>• Monitor equipment health in real-time</li>
                  <li>• Optimize production line efficiency</li>
                </ul>
              </CardContent>
            </Card>

            {/* Oil & Gas Facilities */}
            <Card className="glassmorphism bg-card/50 border-secondary/20 hover:neon-glow transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Fuel className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-foreground text-2xl text-center">Oil & Gas Facilities</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <img
                    src="/oil-refinery-with-glowing-neon-pipeline-overl.png"
                    alt="Oil refinery with glowing pipelines"
                    className="w-full h-48 object-cover rounded-lg opacity-80"
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Enhance safety and efficiency in hazardous environments with remote diagnostics, AR safety protocols,
                  and expert guidance for complex maintenance procedures.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Improve safety compliance by 90%</li>
                  <li>• Reduce downtime with predictive analytics</li>
                  <li>• Enable remote expert consultation</li>
                  <li>• Visualize underground pipeline networks</li>
                </ul>
              </CardContent>
            </Card>

            {/* Utilities & Smart Grids */}
            <Card className="glassmorphism bg-card/50 border-accent/20 hover:neon-glow transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-foreground text-2xl text-center">Utilities & Smart Grids</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <img
                    src="/electric-power-grid-with-neon-energy-lines-a.png"
                    alt="Electric grid with neon energy lines"
                    className="w-full h-48 object-cover rounded-lg opacity-80"
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Modernize power grid maintenance with AR visualization of electrical systems, IoT sensor integration,
                  and AI-powered load balancing optimization.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Visualize invisible electrical fields</li>
                  <li>• Predict equipment failures before outages</li>
                  <li>• Optimize energy distribution networks</li>
                  <li>• Enhance technician safety protocols</li>
                </ul>
              </CardContent>
            </Card>

            {/* Aviation & Rail */}
            <Card className="glassmorphism bg-card/50 border-primary/20 hover:neon-glow transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <Plane className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-foreground text-2xl text-center">Aviation & Rail</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <img
                    src="/aviation-and-rail-with-holographic-maintenan.png"
                    alt="Aviation and rail with holographic maintenance"
                    className="w-full h-48 object-cover rounded-lg opacity-80"
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ensure critical transportation infrastructure reliability with precision maintenance, AR-guided
                  inspections, and comprehensive digital documentation systems.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Accelerate aircraft maintenance checks</li>
                  <li>• Improve rail system reliability</li>
                  <li>• Digital maintenance record keeping</li>
                  <li>• Reduce inspection time by 60%</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="glassmorphism bg-card/50 border-primary/20 neon-glow">
            <CardContent className="p-12">
              <h2 className="font-mono font-bold text-3xl md:text-4xl text-foreground mb-8 neon-text">
                Forge the Future of Field Operations
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                Join global leaders in transforming how industries train, maintain, and repair. Metaforge XR is the
                trusted partner for digital transformation in the field.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">85%</div>
                  <div className="text-muted-foreground">Error Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">60%</div>
                  <div className="text-muted-foreground">Faster Training</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">40%</div>
                  <div className="text-muted-foreground">Less Downtime</div>
                </div>
              </div>

              <Button
                size="lg"
                className="gradient-neon neon-glow hover:shadow-xl transition-all duration-300 text-lg px-12 py-4 font-semibold mb-8"
                asChild
              >
                <Link href="/team#contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <p className="text-sm text-muted-foreground">
                Ready to revolutionize your operations? Get in touch with our team today.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Info Block */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-mono font-bold text-2xl md:text-3xl text-foreground text-center mb-12 neon-text">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glassmorphism bg-card/50 border-primary/20 hover:neon-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground">07069619645</p>
              </CardContent>
            </Card>

            <Card className="glassmorphism bg-card/50 border-secondary/20 hover:neon-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Address</h3>
                <p className="text-muted-foreground">
                  No 6 Benin Street, Wadata
                  <br />
                  Makurdi, Benue State
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

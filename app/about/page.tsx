import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Zap, Brain, Headphones, Cpu, Shield, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/digital-twin-hologram-visualization-with-neon-glo.png"
            alt="Digital twin visualization background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-mono font-black text-4xl md:text-6xl text-foreground neon-text mb-8">
            About Metaforge XR
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            Pioneering the future of industrial operations through extended reality, artificial intelligence, and IoT
            integration.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-foreground text-center mb-16 neon-text">
            What We Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glassmorphism bg-card/50 border-primary/20 hover:neon-glow transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <Zap className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-foreground text-xl">AR-Enabled Repair Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Overlay holographic step-by-step repair guides directly onto equipment, reducing error rates and
                  training time by up to 70%.
                </p>
              </CardContent>
            </Card>

            <Card className="glassmorphism bg-card/50 border-secondary/20 hover:neon-glow transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Cpu className="h-10 w-10 text-secondary" />
                </div>
                <CardTitle className="text-foreground text-xl">IoT Sensor Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Connect real-time sensor data to visual overlays, enabling technicians to see invisible system states
                  and performance metrics.
                </p>
              </CardContent>
            </Card>

            <Card className="glassmorphism bg-card/50 border-accent/20 hover:neon-glow transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <Brain className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="text-foreground text-xl">AI Failure Prediction Engine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Machine learning algorithms analyze patterns to predict equipment failures before they occur,
                  preventing costly downtime.
                </p>
              </CardContent>
            </Card>

            <Card className="glassmorphism bg-card/50 border-primary/20 hover:neon-glow transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <Headphones className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-foreground text-xl">Remote XR Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Connect field technicians with remote experts through immersive headset experiences for real-time
                  guidance and support.
                </p>
              </CardContent>
            </Card>

            <Card className="glassmorphism bg-card/50 border-secondary/20 hover:neon-glow transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Shield className="h-10 w-10 text-secondary" />
                </div>
                <CardTitle className="text-foreground text-xl">Safety Protocol Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Embed safety warnings and protocols directly into the technician's field of view, ensuring compliance
                  and reducing accidents.
                </p>
              </CardContent>
            </Card>

            <Card className="glassmorphism bg-card/50 border-accent/20 hover:neon-glow transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <Globe className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="text-foreground text-xl">Cross-Device Compatibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Seamlessly work across smartphones, tablets, AR glasses, and VR headsets with unified data
                  synchronization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Platform Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-mono font-bold text-3xl md:text-4xl text-foreground mb-8 neon-text">
                Visualize. Diagnose. Resolve.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our spatial computing engine connects real-world assets to digital overlays using IoT telemetry.
                Technicians can visualize internal systems, monitor live data, and follow AI-generated repair
                guides—hands-free.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="text-foreground">Real-time data visualization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="text-foreground">Hands-free operation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="text-foreground">AI-powered guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="text-foreground">Cloud-based synchronization</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="glassmorphism bg-card/50 border-primary/20 neon-glow">
                <CardContent className="p-8">
                  <img
                    src="/dna-digital-twin-hologram-visualization-neon-g.png"
                    alt="Digital twin DNA visualization"
                    className="w-full h-64 object-cover rounded-lg opacity-80"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Metaforge XR Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-foreground text-center mb-16 neon-text">
            Why Metaforge XR
          </h2>
          <h3 className="text-2xl md:text-3xl text-primary text-center mb-12 font-semibold">
            Safer, Faster, More Connected
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glassmorphism bg-card/50 border-primary/20">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 neon-glow" />
                    <div>
                      <h4 className="text-foreground font-semibold mb-2">Cross-Device Compatibility</h4>
                      <p className="text-muted-foreground">
                        Works seamlessly across smartphones, tablets, AR glasses, and VR headsets
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 neon-glow" />
                    <div>
                      <h4 className="text-foreground font-semibold mb-2">Digital Twin Visualization</h4>
                      <p className="text-muted-foreground">
                        Create accurate 3D models of equipment with real-time data overlays
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 neon-glow" />
                    <div>
                      <h4 className="text-foreground font-semibold mb-2">Edge-Based ML Diagnostics</h4>
                      <p className="text-muted-foreground">
                        Process data locally for instant insights without network dependency
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glassmorphism bg-card/50 border-secondary/20">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 neon-glow" />
                    <div>
                      <h4 className="text-foreground font-semibold mb-2">Collaborative Workflows</h4>
                      <p className="text-muted-foreground">
                        Enable multiple technicians to work together across different sites
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 neon-glow" />
                    <div>
                      <h4 className="text-foreground font-semibold mb-2">Enterprise Security</h4>
                      <p className="text-muted-foreground">
                        Bank-level encryption and compliance with industrial security standards
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 neon-glow" />
                    <div>
                      <h4 className="text-foreground font-semibold mb-2">Scalable Infrastructure</h4>
                      <p className="text-muted-foreground">
                        Cloud-native architecture that grows with your organization
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

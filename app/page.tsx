import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Zap, Brain, Headphones, Cpu } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/futuristic-industrial-factory-with-holographic-xr-.png"
            alt="Futuristic industrial background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto responsive-padding text-center">
          <h1 className="font-mono font-black responsive-text-3xl text-foreground neon-text mb-4 sm:mb-6">
            Metaforge XR
          </h1>
          <h2 className="font-mono font-bold responsive-text-xl text-primary mb-6 sm:mb-8">
            Reinventing Industrial Operations
          </h2>
          <p className="responsive-text-lg text-muted-foreground mb-8 sm:mb-12 leading-relaxed">
            Enable smarter fieldwork, faster diagnostics, and safer workflows from anywhere.
          </p>
          <Button
            size="lg"
            className="gradient-neon neon-glow hover:shadow-xl transition-all duration-300 responsive-text-base px-6 sm:px-8 py-3 sm:py-4 font-semibold focus-neon"
            asChild
          >
            <Link href="/about">
              Explore Solutions
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 sm:py-20 responsive-padding">
        <div className="max-w-4xl mx-auto">
          <Card className="glassmorphism bg-card/50 border-primary/20 neon-glow interactive-card">
            <CardContent className="p-6 sm:p-8 md:p-12">
              <p className="responsive-text-base text-foreground leading-relaxed text-center">
                Metaforge XR merges extended reality, AI, and IoT to deliver immersive, real-time industrial
                maintenance, repair, and training solutions. Welcome to the future of Industry 4.0.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 sm:py-20 responsive-padding bg-background/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-mono font-bold responsive-text-2xl text-foreground mb-8 sm:mb-12 neon-text">
            Leadership Team
          </h2>

          <Card className="glassmorphism bg-card/50 border-primary/20 max-w-md mx-auto mb-6 sm:mb-8 interactive-card">
            <CardContent className="p-4 sm:p-6">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary neon-glow">
                <img
                  src="/professional-nigerian-woman-ceo-in-black-suit-with.png"
                  alt="Catherine Erdoo Esihe - CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold responsive-text-lg text-foreground mb-2">Catherine Erdoo Esihe</h3>
              <p className="text-primary font-medium responsive-text-sm">Chief Executive Officer</p>
            </CardContent>
          </Card>

          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent focus-neon"
            asChild
          >
            <Link href="/team">
              Meet the Full Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* What We Do Preview */}
      <section className="py-16 sm:py-20 responsive-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-mono font-bold responsive-text-2xl text-foreground text-center mb-8 sm:mb-12 neon-text">
            Our Solutions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <Card className="glassmorphism bg-card/50 border-primary/20 hover:neon-glow transition-all duration-300 interactive-card">
              <CardHeader className="text-center p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="text-foreground responsive-text-sm">AR-Enabled Repair</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-muted-foreground text-center text-sm leading-relaxed">
                  Holographic repair instructions overlaid on real equipment
                </p>
              </CardContent>
            </Card>

            <Card className="glassmorphism bg-card/50 border-secondary/20 hover:neon-glow transition-all duration-300 interactive-card">
              <CardHeader className="text-center p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Cpu className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
                </div>
                <CardTitle className="text-foreground responsive-text-sm">IoT Integration</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-muted-foreground text-center text-sm leading-relaxed">
                  Real-time sensor data integration and monitoring
                </p>
              </CardContent>
            </Card>

            <Card className="glassmorphism bg-card/50 border-accent/20 hover:neon-glow transition-all duration-300 interactive-card">
              <CardHeader className="text-center p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                </div>
                <CardTitle className="text-foreground responsive-text-sm">AI Prediction</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-muted-foreground text-center text-sm leading-relaxed">
                  Machine learning failure prediction engine
                </p>
              </CardContent>
            </Card>

            <Card className="glassmorphism bg-card/50 border-primary/20 hover:neon-glow transition-all duration-300 interactive-card">
              <CardHeader className="text-center p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <Headphones className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="text-foreground responsive-text-sm">Remote XR Assistance</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-muted-foreground text-center text-sm leading-relaxed">
                  Expert guidance through immersive headset experiences
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              className="gradient-neon neon-glow hover:shadow-xl transition-all duration-300 font-semibold focus-neon"
              asChild
            >
              <Link href="/about">
                See Our Full Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 sm:py-20 responsive-padding bg-background/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-mono font-bold responsive-text-2xl text-foreground text-center mb-8 sm:mb-12 neon-text">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <Card className="glassmorphism bg-card/50 border-primary/20 interactive-card">
              <CardContent className="p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl text-primary mb-4">"</div>
                <p className="text-foreground mb-4 leading-relaxed responsive-text-sm">
                  Metaforge XR transformed our maintenance operations. Our technicians can now diagnose issues 60%
                  faster with their AR guidance system.
                </p>
                <p className="text-muted-foreground font-medium text-sm">— Sarah Johnson, Operations Director</p>
              </CardContent>
            </Card>

            <Card className="glassmorphism bg-card/50 border-primary/20 interactive-card">
              <CardContent className="p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl text-primary mb-4">"</div>
                <p className="text-foreground mb-4 leading-relaxed responsive-text-sm">
                  The IoT integration and predictive analytics have reduced our downtime by 40%. This technology is
                  revolutionary for industrial operations.
                </p>
                <p className="text-muted-foreground font-medium text-sm">— Michael Chen, Plant Manager</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent focus-neon"
              asChild
            >
              <Link href="/team#testimonials">
                Read More Testimonials
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

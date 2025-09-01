import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Mail, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

// Team data
const teamMembers = [
  {
    name: "Ngozi Erdoo Esihe",
    role: "Chief Executive Officer",
    image: "/catherine.png",
    border: "border-primary",
    textColor: "text-primary",
    description:
      "Visionary leader with 15+ years in industrial technology and XR innovation. Catherine drives our mission to revolutionize field operations through cutting-edge extended reality solutions.",
  },
  {
    name: "Sadiq Bello",
    role: "Lead XR Systems Engineer",
    image: "/sadiq.png",
    border: "border-secondary",
    textColor: "text-secondary",
    description:
      "Expert in spatial computing and AR/VR development with deep expertise in industrial IoT integration. Sadiq architects our core XR platform and ensures seamless hardware compatibility.",
  },
  {
    name: "Bolanle Ogunlana",
    role: "Director of Product & UX",
    image: "/bolanle.png",
    border: "border-accent",
    textColor: "text-accent",
    description:
      "Product strategist and UX designer specializing in industrial interfaces and human-centered design. Bolanle ensures our XR solutions are intuitive and effective for field technicians.",
  },
]

// Testimonials data (all Nigerian names, matching image filenames)
const testimonials = [
  {
    name: "Sarah Okon",
    role: "Operations Director, TechCorp Manufacturing",
    image: "/sarah.png",
    text: "Metaforge XR transformed our maintenance operations. Our technicians can now diagnose issues 60% faster with their AR guidance system. The ROI was evident within the first quarter.",
  },
  {
    name: "Michael Adeyemi",
    role: "Plant Manager, Global Energy Solutions",
    image: "/michael.png",
    text: "The IoT integration and predictive analytics have reduced our downtime by 40%. This technology is revolutionary for industrial operations. Our team loves the intuitive interface.",
  },
  {
    name: "Ahamed Yusuf",
    role: "Training Director, Nigerian Oil & Gas",
    image: "/ahamed.png",
    text: "Training new technicians used to take months. With Metaforge XR's immersive training modules, we've cut that time in half while improving safety compliance scores across all our facilities.",
  },
  {
    name: "Jennifer Eze",
    role: "Field Operations Manager, Atlantic Drilling",
    image: "/jennifer.png",
    text: "The remote expert assistance feature has been a game-changer for our offshore operations. We can now get specialist support instantly, regardless of location or weather conditions.",
  },
  {
    name: "Lisa Chukwu",
    role: "Grid Operations Chief, PowerGrid Utilities",
    image: "/lisa.png",
    text: "Implementing Metaforge XR's digital twin technology gave us unprecedented visibility into our power grid. We can now predict and prevent outages before they impact our customers.",
  },
  {
    name: "David Okonkwo",
    role: "Maintenance Director, West African Airlines",
    image: "/david.png",
    text: "The AR-guided maintenance procedures have eliminated human error in our critical aircraft inspections. Safety and efficiency have both improved dramatically since implementation.",
  },
]

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
          <h1 className="font-mono font-black text-4xl md:text-6xl text-foreground neon-text mb-8">
            Meet Our Team
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            Visionary leaders driving the future of industrial extended reality solutions.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-foreground text-center mb-16 neon-text">
            Leadership Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card
                key={member.name}
                className={`glassmorphism bg-card/50 ${member.border}/20 hover:neon-glow transition-all duration-300`}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 ${member.border} neon-glow`}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-mono font-bold text-2xl text-foreground mb-2">{member.name}</h3>
                  <p className={`${member.textColor} font-semibold mb-4`}>{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{member.description}</p>
                  <div className="flex justify-center space-x-4">
                    <Link href="#"><Linkedin className="h-5 w-5" /></Link>
                    <Link href="#"><Twitter className="h-5 w-5" /></Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-foreground text-center mb-16 neon-text">
            Client Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <Card
                key={t.name}
                className="glassmorphism bg-card/50 border-border/20 hover:neon-glow transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary neon-glow">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed">{t.text}</p>
                  <div className="border-t border-border/20 pt-4">
                    <p className="text-muted-foreground font-medium">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

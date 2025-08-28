import Link from "next/link"
import { Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/20">
      <div className="max-w-7xl mx-auto responsive-padding py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="space-y-4 text-center sm:text-left">
            <Link href="/" className="flex items-center justify-center sm:justify-start space-x-2">
              <span className="font-mono font-bold responsive-text-lg text-primary neon-text">Metaforge XR</span>
            </Link>
            <p className="text-muted-foreground responsive-text-xs leading-relaxed">
              Empowering the Next Generation of Field Technicians.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="font-semibold text-foreground responsive-text-sm">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center sm:justify-start space-x-3 responsive-text-xs text-muted-foreground">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>07069619645</span>
              </div>
              <div className="flex items-start justify-center sm:justify-start space-x-3 responsive-text-xs text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>No 6 Benin Street, Wadata, Makurdi, Benue State</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="font-semibold text-foreground responsive-text-sm">Follow Us</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:neon-glow focus-neon"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:neon-glow focus-neon"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/20">
          <p className="text-center responsive-text-xs text-muted-foreground">
            Copyright © 2025 Metaforge XR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

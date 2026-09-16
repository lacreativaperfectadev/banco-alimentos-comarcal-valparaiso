import { SiteHeader } from '../components/landing/site-header'
import { HeroSection } from '../components/landing/hero-section'
import { ServicesSection } from '../components/landing/services-section'
import { PricingSection } from '../components/landing/pricing-section'
import { TeamSection } from '../components/landing/team-section'
import { TrustSection } from '../components/landing/trust-section'
import { FaqSection } from '../components/landing/faq-section'
import { ContactSection } from '../components/landing/contact-section'
import { SiteFooter } from '../components/landing/site-footer'
import { CookieBanner } from '../components/landing/cookie-banner'

export function LandingPage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <TeamSection />
        <TrustSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <CookieBanner />
    </div>
  )
}

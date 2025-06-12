// Instructions: Create the complete SmartFit homepage with all sections

import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import GymFinder from '@/components/GymFinder'
import PricingPlans from '@/components/PricingPlans'
import ExperienceSection from '@/components/ExperienceSection'
import GroupClasses from '@/components/GroupClasses'
import MobileApp from '@/components/MobileApp'
import AdditionalServices from '@/components/AdditionalServices'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <GymFinder />
      <Footer />
      <CookieConsent />
    </main>
  )
}

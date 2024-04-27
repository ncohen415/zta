// SECTIONS
import HeroSection from "@/components/sections/HeroSection/HeroSection"
import AboutUsSection from "@/components/sections/AboutUsSection/AboutUsSection"
import OurSpecialtiesSection from "@/components/sections/OurSpecialtiesSection/OurSpecialtiesSection"
import TeamSection from "@/components/sections/TeamSection/TeamSection"
import TrainingsSection from "@/components/sections/TrainingsSection/TrainingsSection"
import ContactSection from "@/components/sections/ContactSection/ContactSection"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <OurSpecialtiesSection />
      <TeamSection />
      <TrainingsSection />
      <ContactSection />
    </div>
  )
}

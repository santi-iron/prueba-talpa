import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import MovementSection from "@/components/movement-section"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <MovementSection />
    </main>
  )
}

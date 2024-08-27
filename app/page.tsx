import AdvantageSection from '@/components/advantages-section'
import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
import Hero from '@/components/hero'

export default function Page() {
  return (
    <div className="min-h-screen bg-primary text-secondary overflow-hidden">
      <Header />

      <main className="container max-w-6xl mx-auto px-4 isolate relative">
        <Hero />
        <AdvantageSection />
      </main>

      <Footer />
    </div>
  )
}

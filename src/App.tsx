import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features, ProductIntro } from '@/components/Features';
import { CustomerToAdmin } from '@/components/CustomerToAdmin';
import { HowItWorks, QRSection } from '@/components/HowItWorks';
import { DashboardShowcase, MenuShowcase, CheckoutShowcase } from '@/components/Showcases';
import { Benefits, PremiumVisual } from '@/components/Benefits';
import { CTASection, Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-flowup-navy">
      {/* Skip link for accessibility */}
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-flowup-orange focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <Features />
        <ProductIntro />
        <CustomerToAdmin />
        <HowItWorks />
        <QRSection />
        <DashboardShowcase />
        <MenuShowcase />
        <CheckoutShowcase />
        <Benefits />
        <PremiumVisual />
        <CTASection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

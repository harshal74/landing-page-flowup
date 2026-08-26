import { MessageCircle, Mail, Instagram, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/ProductMocks';
import { Button } from '@/components/ui';

const WHATSAPP_URL = `https://wa.me/919284574374?text=${encodeURIComponent('Hi FlowUp, I want to enquire about FlowUp for my restaurant. Please share more details and arrange a demo.')}`;
const EMAIL = 'harshalnpatil185@gmail.com';
const INSTAGRAM_URL = 'https://www.instagram.com/flowup_restaurant';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms', href: '#' },
];

const PRODUCT_LINKS = [
  { label: 'Digital Menu', href: '#features' },
  { label: 'QR Ordering', href: '#how-it-works' },
  { label: 'Online Ordering', href: '#features' },
  { label: 'Restaurant Dashboard', href: '#dashboard' },
  { label: 'Analytics', href: '#features' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-flowup-border-soft bg-flowup-navy-2/50">
      {/* Final CTA banner */}
      <div className="container-px py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl2 border border-flowup-border-soft bg-gradient-to-br from-flowup-card/60 to-flowup-navy-2 p-8 text-center sm:p-12">
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-flowup-orange/15 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Your Restaurant. Your Flow. <span className="text-gradient-orange">Smarter with FlowUp.</span>
            </h2>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="primary" size="lg" href="#contact">
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="secondary" size="lg" href="#contact">
                Talk to Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="container-px border-t border-flowup-border-soft py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-flowup-muted">Smart Restaurant Management</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-flowup-muted-2">
              Everything your restaurant needs. One intelligent platform.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Navigation</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-flowup-muted transition-colors hover:text-flowup-orange">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Product</h3>
            <ul className="space-y-2.5">
              {PRODUCT_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-flowup-muted transition-colors hover:text-flowup-orange">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-flowup-muted transition-colors hover:text-success"
                >
                  <MessageCircle className="h-4 w-4" />
                  +91 9284574374
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2.5 text-sm text-flowup-muted transition-colors hover:text-flowup-orange"
                >
                  <Mail className="h-4 w-4" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-flowup-muted transition-colors hover:text-flowup-orange"
                >
                  <Instagram className="h-4 w-4" />
                  @flowup_restaurant
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-flowup-border-soft pt-6 sm:flex-row">
          <p className="text-sm text-flowup-muted-2">© 2026 FlowUp. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-9 w-9 place-items-center rounded-lg border border-flowup-border-soft bg-flowup-card/50 text-flowup-muted transition-colors hover:border-success/50 hover:text-success"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
              className="grid h-9 w-9 place-items-center rounded-lg border border-flowup-border-soft bg-flowup-card/50 text-flowup-muted transition-colors hover:border-flowup-orange/50 hover:text-flowup-orange"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-lg border border-flowup-border-soft bg-flowup-card/50 text-flowup-muted transition-colors hover:border-flowup-orange/50 hover:text-flowup-orange"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

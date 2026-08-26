import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/ProductMocks';
import { Button } from '@/components/ui';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'For Restaurants', href: '#dashboard' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`transition-all duration-300 ${
          scrolled
            ? 'glass border-b border-flowup-border-soft'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-px flex h-16 items-center justify-between sm:h-18">
          <a href="#top" aria-label="FlowUp home" className="shrink-0">
            <Logo />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-flowup-muted transition-colors hover:bg-flowup-card/50 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2.5 lg:flex">
            <Button variant="secondary" href="#contact" size="md">
              Book a Demo
            </Button>
            <Button variant="primary" href="#contact" size="md">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-flowup-border-soft bg-flowup-card/50 text-white lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-flowup-navy/95 backdrop-blur-lg" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 280 }}
              className="absolute right-0 top-0 h-full w-[82%] max-w-sm border-l border-flowup-border-soft bg-flowup-navy-2 p-6"
            >
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                    className="rounded-xl px-4 py-3 text-base font-medium text-flowup-muted transition-colors hover:bg-flowup-card hover:text-white"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <Button variant="secondary" href="#contact" size="lg" onClick={() => setOpen(false)}>
                  Book a Demo
                </Button>
                <Button variant="primary" href="#contact" size="lg" onClick={() => setOpen(false)}>
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

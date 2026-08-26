import { motion } from 'framer-motion';
import {
  QrCode,
  ClipboardList,
  UtensilsCrossed,
  Receipt,
  BarChart3,
  ShoppingBag,
  MapPin,
  User,
  CheckCircle2,
  Smartphone,
  LayoutDashboard,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui';
import { CheckoutMock, DashboardMock } from '@/components/ProductMocks';

const CUSTOMER_STEPS = [
  { icon: <UtensilsCrossed className="h-4 w-4" />, text: 'Choose dine-in or delivery' },
  { icon: <QrCode className="h-4 w-4" />, text: 'Scan & view menu' },
  { icon: <ShoppingBag className="h-4 w-4" />, text: 'Add items to cart' },
  { icon: <User className="h-4 w-4" />, text: 'Enter customer details' },
  { icon: <MapPin className="h-4 w-4" />, text: 'Add delivery address' },
  { icon: <Receipt className="h-4 w-4" />, text: 'Review bill & place order' },
];

const ADMIN_STEPS = [
  { icon: <ClipboardList className="h-4 w-4" />, text: 'Receive orders instantly' },
  { icon: <UtensilsCrossed className="h-4 w-4" />, text: 'Manage menu & categories' },
  { icon: <User className="h-4 w-4" />, text: 'Track customers' },
  { icon: <BarChart3 className="h-4 w-4" />, text: 'View revenue & analytics' },
  { icon: <CheckCircle2 className="h-4 w-4" />, text: 'Monitor order status' },
  { icon: <Receipt className="h-4 w-4" />, text: 'Manage tables & staff' },
];

export function CustomerToAdmin() {
  return (
    <section id="solutions" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-flowup-border to-transparent" />
      <div className="container-px">
        <SectionHeading
          eyebrow="The FlowUp Ecosystem"
          title="One Flow. Two Experiences."
          description="The customer journey and the restaurant backend are part of the same connected flow — Customer → FlowUp → Restaurant."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Customer side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl2 border border-flowup-border-soft bg-flowup-card/30 p-6 sm:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-flowup-orange/15 text-flowup-orange">
                <Smartphone />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">Customer Experience</h3>
                <p className="text-sm text-flowup-muted">A modern ordering experience</p>
              </div>
            </div>

            <div className="mb-6 overflow-hidden rounded-xl2 border border-flowup-border-soft shadow-card">
              <CheckoutMock />
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {CUSTOMER_STEPS.map((s, i) => (
                <motion.div
                  key={s.text}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-2 rounded-lg border border-flowup-border-soft bg-flowup-navy-2/60 px-3 py-2"
                >
                  <span className="text-flowup-orange">{s.icon}</span>
                  <span className="text-[11px] font-medium text-white/90">{s.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Admin side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl2 border border-flowup-border-soft bg-flowup-card/30 p-6 sm:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-flowup-orange/15 text-flowup-orange">
                <LayoutDashboard />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">Restaurant Experience</h3>
                <p className="text-sm text-flowup-muted">Full operational control</p>
              </div>
            </div>

            <div className="mb-6 space-y-3">
              <div className="overflow-hidden rounded-xl2 border border-flowup-border-soft shadow-card">
                <DashboardMock />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {ADMIN_STEPS.map((s, i) => (
                <motion.div
                  key={s.text}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-2 rounded-lg border border-flowup-border-soft bg-flowup-navy-2/60 px-3 py-2"
                >
                  <span className="text-flowup-orange">{s.icon}</span>
                  <span className="text-[11px] font-medium text-white/90">{s.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Animated flow line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mt-10 flex items-center justify-center gap-3 sm:gap-6"
        >
          <span className="text-sm font-semibold text-flowup-muted">Customer</span>
          <svg width="200" height="24" viewBox="0 0 200 24" className="hidden sm:block" aria-hidden="true">
            <line x1="0" y1="12" x2="200" y2="12" stroke="#344154" strokeWidth="2" strokeDasharray="6 6" />
            <motion.line
              x1="0" y1="12" x2="200" y2="12"
              stroke="#FF6B00" strokeWidth="2.5" strokeLinecap="round"
              strokeDasharray="200" strokeDashoffset="200"
              initial={{ strokeDashoffset: 200 }}
              whileInView={{ strokeDashoffset: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
            <circle cx="100" cy="12" r="5" fill="#FF6B00" />
          </svg>
          <span className="rounded-full border border-flowup-orange/40 bg-flowup-orange/10 px-4 py-1 text-sm font-bold text-flowup-orange">FlowUp</span>
          <svg width="200" height="24" viewBox="0 0 200 24" className="hidden sm:block" aria-hidden="true">
            <line x1="0" y1="12" x2="200" y2="12" stroke="#344154" strokeWidth="2" strokeDasharray="6 6" />
            <motion.line
              x1="0" y1="12" x2="200" y2="12"
              stroke="#FF6B00" strokeWidth="2.5" strokeLinecap="round"
              strokeDasharray="200" strokeDashoffset="200"
              initial={{ strokeDashoffset: 200 }}
              whileInView={{ strokeDashoffset: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
            />
            <circle cx="100" cy="12" r="5" fill="#FF6B00" />
          </svg>
          <span className="text-sm font-semibold text-flowup-muted">Restaurant</span>
        </motion.div>
      </div>
    </section>
  );
}



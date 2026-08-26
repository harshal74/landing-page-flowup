import { motion } from 'framer-motion';
import { Settings, ShoppingBag, LayoutDashboard } from 'lucide-react';
import { SectionHeading } from '@/components/ui';
import { PhoneMock } from '@/components/ProductMocks';

const STEPS = [
  { num: '01', icon: <Settings className="h-6 w-6" />, title: 'Set Up', text: 'Add your restaurant, menu, categories, tables, and operational details.' },
  { num: '02', icon: <ShoppingBag className="h-6 w-6" />, title: 'Customers Order', text: 'Customers discover your menu through QR ordering or online ordering.' },
  { num: '03', icon: <LayoutDashboard className="h-6 w-6" />, title: 'You Manage Everything', text: 'Orders, customers, revenue, menu, tables, and operations are managed from FlowUp.' },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="How FlowUp Works"
          title="Get started in three simple steps"
          description="From setup to serving customers — FlowUp keeps your entire restaurant operation flowing."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-3xl2 border border-flowup-border-soft bg-flowup-card/40 p-8"
            >
              <div className="pointer-events-none absolute -right-4 -top-4 font-display text-8xl font-extrabold text-flowup-orange/5 transition-all duration-500 group-hover:text-flowup-orange/10">
                {s.num}
              </div>
              <div className="relative">
                <span className="font-display text-5xl font-extrabold text-gradient-orange">{s.num}</span>
                <div className="mt-4 grid h-12 w-12 place-items-center rounded-xl border border-flowup-border bg-flowup-navy-2 text-flowup-orange transition-transform duration-300 group-hover:scale-110">
                  {s.icon}
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-flowup-muted">{s.text}</p>
              </div>
              {i < STEPS.length - 1 && (
                <div className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-8 -translate-y-1/2 translate-x-full bg-gradient-to-r from-flowup-orange/40 to-transparent md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* QR / Digital Menu section */
export function QRSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-flowup-orange/10 blur-[120px]" />
      <div className="container-px relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <SectionHeading
              align="left"
              eyebrow="QR Ordering"
              title={<>Scan. Browse. <span className="text-gradient-orange">Order.</span></>}
              description="Give your customers a faster way to discover your menu and place orders. No app downloads, no waiting — just scan the QR code and order instantly from their phone."
            />
            <div className="mt-8 space-y-3">
              {[
                'Instant access — no app required',
                'Works on any smartphone camera',
                'Real-time menu with live availability',
                'Seamless checkout in a few taps',
              ].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-flowup-orange/15 text-flowup-orange">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span className="text-base text-white/90">{t}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="order-1 flex justify-center lg:order-2"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <PhoneMock />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

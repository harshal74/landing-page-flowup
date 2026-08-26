import { motion } from 'framer-motion';
import {
  ShoppingBag,
  TrendingUp,
  Users,
  Clock,
  BarChart3,
  ClipboardList,
  UtensilsCrossed,
  Tag,
  Leaf,
  CheckCircle2,
  Star,
  MapPin,
  User,
  Receipt,
  Truck,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui';
import { DashboardMock, MenuMock, CheckoutMock } from '@/components/ProductMocks';

/* Dashboard showcase */
export function DashboardShowcase() {
  const labels = [
    { icon: <ShoppingBag className="h-3.5 w-3.5" />, text: 'Orders', pos: 'left-0 top-[18%]' },
    { icon: <TrendingUp className="h-3.5 w-3.5" />, text: 'Revenue', pos: 'right-0 top-[28%]' },
    { icon: <Users className="h-3.5 w-3.5" />, text: 'Customers', pos: 'left-0 top-[48%]' },
    { icon: <Clock className="h-3.5 w-3.5" />, text: 'Pending Orders', pos: 'right-0 top-[52%]' },
    { icon: <BarChart3 className="h-3.5 w-3.5" />, text: 'Analytics', pos: 'left-0 bottom-[12%]' },
    { icon: <ClipboardList className="h-3.5 w-3.5" />, text: 'Order Status', pos: 'right-0 bottom-[8%]' },
  ];

  return (
    <section id="dashboard" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-[500px] -translate-y-1/2 rounded-full bg-flowup-orange/5 blur-[140px]" />
      <div className="container-px relative">
        <SectionHeading
          eyebrow="Restaurant Dashboard"
          title="Your Restaurant. At a Glance."
          description="A centralized view of everything happening in your restaurant — orders, revenue, customers, and performance, all in one place."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative mx-auto mt-14 max-w-5xl"
        >
          {/* Frame */}
          <div className="relative rounded-3xl2 border border-flowup-border bg-flowup-navy-2 p-3 shadow-glow-sm sm:p-5">
            <div className="overflow-hidden rounded-xl2 border border-flowup-border-soft">
              <DashboardMock />
            </div>
          </div>

          {/* Animated labels */}
          {labels.map((l, i) => (
            <motion.div
              key={l.text}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
              className={`absolute ${l.pos} hidden items-center gap-2 rounded-full border border-flowup-orange/40 bg-flowup-navy/90 px-3.5 py-1.5 text-xs font-semibold text-white shadow-glow-sm backdrop-blur md:flex`}
            >
              <span className="text-flowup-orange">{l.icon}</span>
              {l.text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* Menu Management showcase */
export function MenuShowcase() {
  const highlights = [
    { icon: <UtensilsCrossed className="h-5 w-5" />, text: 'Menu items & categories' },
    { icon: <Tag className="h-5 w-5" />, text: 'Pricing & discounted pricing' },
    { icon: <Leaf className="h-5 w-5" />, text: 'Vegetarian / Non-veg labels' },
    { icon: <CheckCircle2 className="h-5 w-5" />, text: 'Live availability toggles' },
    { icon: <Star className="h-5 w-5" />, text: 'Recommended items' },
    { icon: <Receipt className="h-5 w-5" />, text: 'Images & descriptions' },
  ];

  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-3xl2 border border-flowup-border bg-flowup-navy-2 p-4 shadow-card">
              <MenuMock />
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Menu Management"
              title={<>Your Menu, <span className="text-gradient-orange">Your Way.</span></>}
              description="Create, update, organize, and manage your restaurant menu from one place. Full control over items, categories, pricing, and availability."
            />
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.text}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 rounded-xl border border-flowup-border-soft bg-flowup-card/40 px-4 py-3"
                >
                  <span className="text-flowup-orange">{h.icon}</span>
                  <span className="text-sm font-medium text-white/90">{h.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Checkout showcase */
export function CheckoutShowcase() {
  const callouts = [
    { icon: <UtensilsCrossed className="h-4 w-4" />, text: 'Dine-in / Delivery', pos: 'left-2 top-[8%]' },
    { icon: <User className="h-4 w-4" />, text: 'Customer details', pos: 'right-2 top-[22%]' },
    { icon: <MapPin className="h-4 w-4" />, text: 'Delivery address', pos: 'left-2 top-[42%]' },
    { icon: <Receipt className="h-4 w-4" />, text: 'Item total & charges', pos: 'right-2 top-[58%]' },
    { icon: <Truck className="h-4 w-4" />, text: 'Place order', pos: 'left-2 bottom-[8%]' },
  ];

  return (
    <section className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-flowup-orange/8 blur-[120px]" />
      <div className="container-px relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Customer Checkout"
              title={<>A Better Ordering Experience <span className="text-gradient-orange">for Your Customers.</span></>}
              description="A clean, modern checkout that makes ordering effortless — from choosing dine-in or delivery to placing the final order."
            />
            <div className="mt-8 space-y-3">
              {[
                'Dine-in or delivery options',
                'Customer details & delivery address',
                'Order notes for special requests',
                'Transparent item total & delivery charge',
                'One-tap place order',
              ].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-flowup-orange/15 text-flowup-orange">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span className="text-base text-white/90">{t}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl2 border border-flowup-border bg-flowup-navy-2 p-4 shadow-card">
              <CheckoutMock />
            </div>
            {callouts.map((c, i) => (
              <motion.div
                key={c.text}
                initial={{ opacity: 0, x: c.pos.includes('left') ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.12 }}
                className={`absolute ${c.pos} hidden items-center gap-2 rounded-full border border-flowup-orange/40 bg-flowup-navy/90 px-3 py-1.5 text-xs font-semibold text-white shadow-glow-sm backdrop-blur md:flex`}
              >
                <span className="text-flowup-orange">{c.icon}</span>
                {c.text}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

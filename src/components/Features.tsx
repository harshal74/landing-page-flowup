import { motion } from 'framer-motion';
import {
  QrCode,
  Smartphone,
  ShoppingBag,
  ClipboardList,
  LayoutDashboard,
  BarChart3,
  Table2,
  Users,
  Receipt,
  UserCog,
} from 'lucide-react';
import { SectionHeading, FeatureCard } from '@/components/ui';
import { CheckoutMock, MenuMock } from '@/components/ProductMocks';

const FEATURES = [
  { icon: <QrCode className="h-6 w-6" />, title: 'Digital Menu', description: 'Create and manage beautiful digital menus that customers can access instantly.' },
  { icon: <Smartphone className="h-6 w-6" />, title: 'QR Ordering', description: 'Customers scan, browse, and order directly from their table or phone.' },
  { icon: <ShoppingBag className="h-6 w-6" />, title: 'Online Ordering', description: 'Accept restaurant orders digitally with a streamlined customer checkout experience.' },
  { icon: <ClipboardList className="h-6 w-6" />, title: 'Order Management', description: 'Manage incoming orders efficiently and keep restaurant staff informed in real time.' },
  { icon: <LayoutDashboard className="h-6 w-6" />, title: 'Restaurant Dashboard', description: 'Get a centralized view of restaurant activity, orders, and performance.' },
  { icon: <BarChart3 className="h-6 w-6" />, title: 'Analytics', description: 'Understand orders, revenue, customers, and restaurant performance at a glance.' },
  { icon: <Table2 className="h-6 w-6" />, title: 'Table Management', description: 'Manage restaurant tables and improve dine-in operations.' },
  { icon: <Users className="h-6 w-6" />, title: 'Customer Management', description: 'Keep track of customer activity and improve the overall experience.' },
  { icon: <Receipt className="h-6 w-6" />, title: 'Billing', description: 'Manage billing information and order totals efficiently from one place.' },
];

export function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Features"
          title="One Platform. Complete Restaurant Control."
          description="FlowUp connects your restaurant's customer experience and operational backend — from digital menus and QR ordering to billing, tables, staff, and analytics."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* Product Introduction — split layout */
export function ProductIntro() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-flowup-orange/8 blur-[120px]" />
      <div className="container-px relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Connected Platform"
              title={<>The customer experience and your operations, <span className="text-gradient-orange">finally connected.</span></>}
              description="FlowUp brings the front-of-house customer journey and back-of-house management into a single intelligent platform. What your customers see and what your team manages stay perfectly in sync."
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 space-y-3"
            >
              {[
                { icon: <Smartphone className="h-5 w-5" />, text: 'Customer-facing ordering that works on any phone' },
                { icon: <LayoutDashboard className="h-5 w-5" />, text: 'Admin dashboard for full operational control' },
                { icon: <BarChart3 className="h-5 w-5" />, text: 'Real-time data flowing between both sides' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-flowup-border-soft bg-flowup-card/50 text-flowup-orange">
                    {item.icon}
                  </div>
                  <p className="text-base text-white/90">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative space-y-4">
              <MenuMock className="shadow-card" />
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 top-1/3 w-44 hidden sm:block"
              >
                <CheckoutMock />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

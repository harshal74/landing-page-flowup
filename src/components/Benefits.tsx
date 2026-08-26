import { motion } from 'framer-motion';
import { ClipboardList, Zap, Eye, Layers } from 'lucide-react';
import { SectionHeading } from '@/components/ui';

const BENEFITS = [
  { icon: <ClipboardList className="h-7 w-7" />, title: 'Less Manual Work', text: 'Reduce repetitive operational tasks with a connected, automated platform.' },
  { icon: <Zap className="h-7 w-7" />, title: 'Faster Ordering', text: 'Give customers a streamlined digital ordering experience from scan to checkout.' },
  { icon: <Eye className="h-7 w-7" />, title: 'Better Visibility', text: 'Understand what is happening in your restaurant with real-time dashboards and analytics.' },
  { icon: <Layers className="h-7 w-7" />, title: 'One Connected Platform', text: 'Bring important restaurant workflows into one system — no more switching between tools.' },
];

export function Benefits() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Benefits"
          title="Built to Make Restaurant Operations Simpler."
          description="FlowUp is designed around the real, day-to-day needs of running a restaurant — less friction, more flow."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl2 border border-flowup-border-soft bg-flowup-card/40 p-7 transition-colors hover:border-flowup-orange/50"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-flowup-orange/0 blur-2xl transition-all duration-500 group-hover:bg-flowup-orange/20" />
              <div className="relative">
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-flowup-border bg-flowup-navy-2 text-flowup-orange transition-transform duration-300 group-hover:scale-110">
                  {b.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-flowup-muted">{b.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Premium visual section — glowing orange flow path */
const FLOW_NODES = [
  { label: 'QR Menu', x: 8, y: 50 },
  { label: 'Order', x: 28, y: 25 },
  { label: 'Kitchen', x: 50, y: 60 },
  { label: 'Billing', x: 72, y: 25 },
  { label: 'Analytics', x: 92, y: 50 },
];

export function PremiumVisual() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-flowup-orange/10 blur-[140px]" />

      <div className="container-px relative">
        <SectionHeading
          eyebrow="The Connected Flow"
          title="The Future of Restaurant Operations Is Connected."
          description="From the moment a customer scans your menu to the moment you analyze the sale — every step flows through one connected system."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mx-auto mt-16 h-[280px] max-w-5xl sm:h-[320px]"
        >
          {/* Flow path */}
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="flow-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#FF7A00" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FF6B00" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              d="M8,50 Q18,25 28,25 Q40,25 50,60 Q62,25 72,25 Q82,25 92,50"
              fill="none"
              stroke="url(#flow-grad)"
              strokeWidth="0.8"
              strokeLinecap="round"
            />
            <motion.path
              d="M8,50 Q18,25 28,25 Q40,25 50,60 Q62,25 72,25 Q82,25 92,50"
              fill="none"
              stroke="#FF6B00"
              strokeWidth="0.6"
              strokeLinecap="round"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: 'easeInOut' }}
            />
          </svg>

          {/* Nodes */}
          {FLOW_NODES.map((node, i) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.25, type: 'spring', stiffness: 200 }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                className="flex flex-col items-center gap-2"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-flowup-orange/40 bg-flowup-card/80 text-flowup-orange shadow-glow-sm backdrop-blur sm:h-16 sm:w-16">
                  <span className="font-display text-lg font-extrabold">{i + 1}</span>
                </div>
                <span className="rounded-full border border-flowup-border-soft bg-flowup-navy/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {node.label}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

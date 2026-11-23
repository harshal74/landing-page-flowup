import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, ShoppingBag, TrendingUp, Users, QrCode, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui';
import { DashboardMock } from '@/components/ProductMocks';

function FloatingCard({
  children,
  className = '',
  delay = 0,
  depth = 1,
  mouseX,
  mouseY,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  depth: number;
  mouseX: any;
  mouseY: any;
}) {
  const x = useTransform(mouseX, [0, 1], [-depth * 14, depth * 14]);
  const y = useTransform(mouseY, [0, 1], [-depth * 14, depth * 14]);
  return (
    <motion.div
      style={{ x, y }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4 + depth, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.05 }}
        className="rounded-2xl border border-flowup-border-soft bg-flowup-card/80 p-3.5 shadow-card backdrop-blur-md"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 120, damping: 20 });
  const sy = useSpring(my, { stiffness: 120, damping: 20 });

  const rotateX = useTransform(sy, [0, 1], [8, -8]);
  const rotateY = useTransform(sx, [0, 1], [-10, 10]);
  const glowX = useTransform(sx, [0, 1], ['-30%', '30%']);
  const glowY = useTransform(sy, [0, 1], ['-30%', '30%']);

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    // FIX: overflow-x-hidden instead of overflow-hidden so the section
    // doesn't clip the bottom of the dashboard mockup on mobile.
    <section id="top" className="relative overflow-x-hidden pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-flowup-orange/20 blur-[120px]"
      />
      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-flowup-orange/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-flowup-orange-bright/10 blur-[120px]" />

      <div className="container-px relative">
        {/* FIX: reduced gap on mobile so the content fits in fewer vertical pixels */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-8">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-flowup-border-soft bg-flowup-card/50 px-4 py-2 text-xs font-semibold text-flowup-muted backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5 text-flowup-orange" />
              Built for modern restaurants
            </motion.span>

            {/* FIX: reduced base font size so the heading wraps cleanly at 320px,
                while keeping the desktop size unchanged via lg: */}
            <h1 className="mt-5 font-display text-[1.875rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[4.25rem]">
              Run Your Restaurant <span className="text-gradient-orange">Smarter.</span>
            </h1>
            {/* FIX: reduce sub-heading on mobile */}
            <p className="mt-3 font-display text-lg font-semibold text-white/90 sm:text-2xl lg:text-3xl">
              Everything You Need. One Flow.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-flowup-muted sm:text-base sm:mt-5 lg:mx-0 lg:text-lg">
              Smart restaurant management, digital ordering, and real-time operations — all in one
              platform. Accept dine-in, delivery, and take away orders while managing your menu,
              billing, staff, and analytics from one place.
            </p>

            {/* FIX: w-full on mobile so buttons fill the screen width and are easy to tap */}
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <Button variant="primary" size="lg" href="#contact" className="w-full sm:w-auto">
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="secondary" size="lg" href="#features" className="w-full sm:w-auto">
                Explore FlowUp
              </Button>
            </div>
          </motion.div>

          {/* Right: 3D product showcase
              FIX: remove the fixed h-[420px] on mobile — let the container
              grow to fit the dashboard content. Fixed height only applied at lg:
              where the layout is side-by-side and height matching is needed. */}
          <div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className="relative [perspective:1200px] lg:h-[560px]"
          >
            {/* FIX: on mobile, use normal document flow (relative + w-full) so the
                dashboard takes its natural height. At lg: switch back to absolute
                inset-0 positioning used by the 3D transform effect. */}
            <motion.div
              style={{ rotateX, rotateY }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
              className="relative lg:absolute lg:inset-0 [transform-style:preserve-3d]"
            >
              {/* Dashboard — on mobile: normal flow, full-width.
                  At lg: absolutely centered via translate trick. */}
              <div className="relative w-full lg:absolute lg:left-1/2 lg:top-1/2 lg:w-[92%] lg:max-w-[560px] lg:-translate-x-1/2 lg:-translate-y-1/2">
                <DashboardMock />
              </div>

              {/* Floating cards — hidden on mobile to avoid overflow and clutter.
                  At sm they appear with their original positioning. */}
              <FloatingCard depth={1.4} mouseX={sx} mouseY={sy} delay={0.6} className="hidden sm:block left-0 top-4 sm:-left-2">
                <div className="flex items-center gap-2.5">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-success/15 text-success">
                    <ShoppingBag className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-flowup-muted">New Order</p>
                    <p className="text-sm font-bold text-white">Veg Cheese Burger</p>
                    <p className="text-xs font-semibold text-flowup-orange">₹119</p>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-success" />
                  <span className="text-[10px] font-medium text-success">Order received</span>
                </div>
              </FloatingCard>

              <FloatingCard depth={1.8} mouseX={sx} mouseY={sy} delay={0.75} className="hidden sm:block right-0 top-2 sm:-right-2">
                <div className="flex items-center gap-2.5">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-flowup-orange/15 text-flowup-orange">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-flowup-muted">Revenue</p>
                    <p className="text-sm font-bold text-white">₹14,920</p>
                    <p className="text-[10px] font-medium text-success">+8% today</p>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard depth={1.2} mouseX={sx} mouseY={sy} delay={0.9} className="hidden sm:block bottom-4 left-2 sm:-left-1">
                <div className="flex items-center gap-2.5">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-flowup-orange/15 text-flowup-orange">
                    <QrCode className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-flowup-muted">Digital Menu</p>
                    <p className="text-sm font-bold text-white">QR Ordering</p>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard depth={2} mouseX={sx} mouseY={sy} delay={1.05} className="hidden sm:block bottom-6 right-2 sm:-right-1">
                <div className="flex items-center gap-2.5">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-flowup-orange/15 text-flowup-orange">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-flowup-muted">Customers</p>
                    <p className="text-sm font-bold text-white">342 active</p>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard depth={1.6} mouseX={sx} mouseY={sy} delay={1.2} className="bottom-20 left-1/2 -translate-x-1/2 hidden sm:block">
                <div className="flex items-center gap-2.5">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-flowup-orange/15 text-flowup-orange">
                    <UtensilsCrossed className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-flowup-muted">Order Status</p>
                    <p className="text-sm font-bold text-white">7 preparing</p>
                  </div>
                </div>
              </FloatingCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

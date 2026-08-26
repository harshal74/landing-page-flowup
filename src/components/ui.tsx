import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/* ---------- Button ---------- */
type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  ariaLabel?: string;
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  ariaLabel,
}: ButtonProps) {
  const base =
    'group relative inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flowup-orange/60 focus-visible:ring-offset-2 focus-visible:ring-offset-flowup-navy';
  const sizes = {
      md: 'rounded-xl px-5 py-2.5 text-sm',
      lg: 'rounded-xl px-7 py-3.5 text-base',
    };
  const variants = {
    primary:
      'bg-gradient-to-r from-flowup-orange to-flowup-orange-bright text-white shadow-glow-sm hover:shadow-glow hover:-translate-y-0.5',
    secondary:
      'border border-flowup-border bg-flowup-card/60 text-white hover:border-flowup-orange/60 hover:bg-flowup-card',
    ghost: 'text-flowup-muted hover:text-white',
  };
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    const external = href.startsWith('http') || href.startsWith('mailto') || href.startsWith('https');
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        {...(external ? { target: href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

/* ---------- SectionHeading ---------- */
type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'center' | 'left';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-flowup-orange/30 bg-flowup-orange/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-flowup-orange">
          <span className="h-1.5 w-1.5 rounded-full bg-flowup-orange" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-flowup-muted sm:text-lg">{description}</p>
      )}
    </motion.div>
  );
}

/* ---------- FeatureCard ---------- */
type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
};

export function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-xl2 border border-flowup-border-soft bg-flowup-card/40 p-6 transition-colors duration-300 hover:border-flowup-orange/50"
    >
      {/* glow */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-flowup-orange/0 blur-2xl transition-all duration-500 group-hover:bg-flowup-orange/20" />
      <div className="relative">
        <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl border border-flowup-border bg-flowup-navy-2 text-flowup-orange transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
          {icon}
        </div>
        <h3 className="mb-2 font-display text-lg font-bold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-flowup-muted">{description}</p>
      </div>
    </motion.div>
  );
}

/* ---------- StatCard ---------- */
type StatCardProps = {
  label: string;
  value: string;
  icon: ReactNode;
  delay?: number;
};

export function StatCard({ label, value, icon, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="rounded-xl2 border border-flowup-border-soft bg-flowup-card/50 p-5 backdrop-blur"
    >
      <div className="mb-3 text-flowup-orange">{icon}</div>
      <p className="font-display text-2xl font-extrabold text-white sm:text-3xl">{value}</p>
      <p className="mt-1 text-sm text-flowup-muted">{label}</p>
    </motion.div>
  );
}

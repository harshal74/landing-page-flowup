import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send, CheckCircle2, MessageCircle, Mail, Instagram } from 'lucide-react';
import { SectionHeading, Button } from '@/components/ui';

const WHATSAPP_URL = `https://wa.me/919284574374?text=${encodeURIComponent('Hi FlowUp, I want to enquire about FlowUp for my restaurant. Please share more details and arrange a demo.')}`;
const EMAIL = 'harshalnpatil185@gmail.com';
const INSTAGRAM_URL = 'https://www.instagram.com/flowup_restaurant';

type FormState = {
  name: string;
  restaurant: string;
  phone: string;
  email: string;
  city: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-flowup-orange/15 blur-[130px]" />

      <div className="container-px relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl2 border border-flowup-orange/30 bg-gradient-to-br from-flowup-navy-2 to-flowup-card/60 p-8 text-center shadow-glow sm:p-14"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-flowup-orange/20 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Move Your Restaurant Forward?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-flowup-muted sm:text-lg">
              Bring your restaurant's ordering and management experience into one smarter flow.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="primary" size="lg" href="#contact">
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="secondary" size="lg" href="#contact">
                Talk to Us
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    restaurant: '',
    phone: '',
    email: '',
    city: '',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.restaurant.trim()) e.restaurant = 'Please enter your restaurant name';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number';
    else if (!/^[+]?[\d\s-]{8,15}$/.test(form.phone.trim())) e.phone = 'Please enter a valid phone number';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Please enter a valid email';
    if (!form.message.trim()) e.message = 'Please enter a message';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSending(true);
    setSendError(null);

    // Backend API base. In prod set VITE_API_URL (e.g. https://your-backend.onrender.com/api).
    const apiBase = (import.meta.env.VITE_API_URL as string) || '/api';

    try {
      const res = await fetch(`${apiBase}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.success) {
        throw new Error(data?.message || 'Failed to send enquiry.');
      }

      setSubmitted(true);
      setForm({ name: '', restaurant: '', phone: '', email: '', city: '', message: '' });
      setTimeout(() => setSubmitted(false), 10000);
    } catch (err: any) {
      // Graceful fallback: let the visitor email us directly.
      setSendError(
        `Couldn't send your enquiry right now. Please email us at ${EMAIL} or reach us on WhatsApp.`
      );
      console.error('[Contact] submit failed:', err?.message || err);
    } finally {
      setSending(false);
    }
  };

  const inputCls = (field: keyof FormState) =>
    `w-full rounded-xl border bg-flowup-navy-2/60 px-4 py-3 text-sm text-white placeholder:text-flowup-muted-2 transition-colors focus:outline-none focus:ring-2 focus:ring-flowup-orange/50 ${
      errors[field] ? 'border-red-500/60' : 'border-flowup-border-soft focus:border-flowup-orange/60'
    }`;

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-flowup-border to-transparent" />
      <div className="container-px">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's Talk About Your Restaurant"
          description="Tell us about your restaurant and we'll show you how FlowUp can streamline your operations and ordering."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} noValidate className="rounded-3xl2 border border-flowup-border-soft bg-flowup-card/40 p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white/90">
                    Name <span className="text-flowup-orange">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={inputCls('name')}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="restaurant" className="mb-1.5 block text-sm font-medium text-white/90">
                    Restaurant Name <span className="text-flowup-orange">*</span>
                  </label>
                  <input
                    id="restaurant"
                    type="text"
                    value={form.restaurant}
                    onChange={(e) => handleChange('restaurant', e.target.value)}
                    className={inputCls('restaurant')}
                    placeholder="Your restaurant"
                  />
                  {errors.restaurant && <p className="mt-1 text-xs text-red-400">{errors.restaurant}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-white/90">
                    Phone Number <span className="text-flowup-orange">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className={inputCls('phone')}
                    placeholder="+91 92845 74374"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white/90">
                    Email <span className="text-flowup-orange">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={inputCls('email')}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-white/90">
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    value={form.city}
                    onChange={(e) => handleChange('city', e.target.value)}
                    className={inputCls('city')}
                    placeholder="Your city"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white/90">
                    Message <span className="text-flowup-orange">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className={`${inputCls('message')} resize-none`}
                    placeholder="Tell us about your restaurant and what you're looking for..."
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-flowup-orange to-flowup-orange-bright px-6 py-3.5 text-base font-bold text-white shadow-glow-sm transition-all hover:shadow-glow hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
              >
                {sending ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Enquiry
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 rounded-xl border border-success/40 bg-success/10 px-4 py-4 text-sm"
                >
                  <div className="flex items-center gap-2 font-semibold text-success mb-1">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    Enquiry Sent Successfully
                  </div>
                  <p className="text-flowup-muted text-xs leading-relaxed">
                    Thank you for your interest in FlowUp. We'll contact you shortly to discuss your restaurant and arrange a demo.
                  </p>
                </motion.div>
              )}

              {sendError && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-300"
                >
                  {sendError}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="flex h-full flex-col gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-flowup-border-soft bg-flowup-card/40 p-5 transition-all hover:border-success/50 hover:bg-flowup-card/60"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-success/15 text-success transition-transform group-hover:scale-110">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-flowup-muted">WhatsApp</p>
                  <p className="font-display text-lg font-bold text-white">+91 9284574374</p>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-4 rounded-2xl border border-flowup-border-soft bg-flowup-card/40 p-5 transition-all hover:border-flowup-orange/50 hover:bg-flowup-card/60"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-flowup-orange/15 text-flowup-orange transition-transform group-hover:scale-110">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-flowup-muted">Email</p>
                  <p className="truncate font-display text-base font-bold text-white">{EMAIL}</p>
                </div>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-flowup-border-soft bg-flowup-card/40 p-5 transition-all hover:border-flowup-orange/50 hover:bg-flowup-card/60"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#E1306C] to-[#F77737] text-white transition-transform group-hover:scale-110">
                  <Instagram className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-flowup-muted">Instagram</p>
                  <p className="truncate font-display text-base font-bold text-white">Follow FlowUp on Instagram</p>
                </div>
              </a>

              <div className="mt-auto rounded-2xl border border-flowup-border-soft bg-flowup-navy-2/40 p-5">
                <p className="text-sm leading-relaxed text-flowup-muted">
                  Prefer to talk directly? Reach us on WhatsApp or email — we typically respond within a few hours during business hours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

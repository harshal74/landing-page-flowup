import { motion } from 'framer-motion';

/* FlowUp Logo — renders from /flowup-logo.png (official brand asset).
   The showWordmark prop controls whether the text "FlowUp" appears beside the mark.
   If your logo image already contains the wordmark text, pass showWordmark={false}. */
export function Logo({ className = '', showWordmark = true }: { className?: string; showWordmark?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="/flowup-logo.png"
        alt="FlowUp — Smart Restaurant Management"
        width={36}
        height={36}
        className="h-9 w-9 rounded-full object-cover"
      />
      {showWordmark && (
        <span className="font-display text-xl font-extrabold tracking-tight text-white">
          Flow<span className="text-flowup-orange">Up</span>
        </span>
      )}
    </div>
  );
}

/* Restaurant Admin Dashboard mockup — derived from FlowUp product UI */
export function DashboardMock({ className = '' }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl2 border border-flowup-border bg-flowup-navy-2 ${className}`}>
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-flowup-border-soft px-5 py-3.5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </div>
          <span className="ml-3 text-[11px] font-medium text-flowup-muted">app.flowup.restaurant / dashboard</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-flowup-card" />
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-flowup-orange to-flowup-orange-bright" />
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden w-[52px] flex-col items-center gap-4 border-r border-flowup-border-soft py-4 sm:flex">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-flowup-orange/15 text-flowup-orange">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          </div>
          {['M5 8h14M5 8a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-6a2 2 0 00-2-2', 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z', 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2zM3 7l4 4 3-3 5 5 6-6'].map((d, i) => (
            <div key={i} className="grid h-8 w-8 place-items-center rounded-lg text-flowup-muted-2 hover:bg-flowup-card hover:text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={d} /></svg>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-flowup-muted">Overview</p>
              <h3 className="font-display text-base font-bold text-white sm:text-lg">Restaurant Dashboard</h3>
            </div>
            <div className="hidden items-center gap-2 rounded-lg border border-flowup-border-soft bg-flowup-card px-3 py-1.5 sm:flex">
              <span className="h-2 w-2 rounded-full bg-success" />
              <span className="text-[11px] font-medium text-flowup-muted">Live</span>
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
            {[
              { label: 'Orders Today', value: '128', delta: '+12%', icon: 'M5 8h14M5 8a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-6a2 2 0 00-2-2M5 8a2 2 0 00-2 2' },
              { label: 'Revenue', value: '₹14.9k', delta: '+8%', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1' },
              { label: 'Customers', value: '342', delta: '+5%', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
              { label: 'Pending', value: '7', delta: '-3', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-flowup-border-soft bg-flowup-card/60 p-3">
                <div className="mb-2 flex items-center justify-between">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2"><path d={s.icon} /></svg>
                  <span className="text-[10px] font-semibold text-success">{s.delta}</span>
                </div>
                <p className="font-display text-lg font-bold text-white sm:text-xl">{s.value}</p>
                <p className="text-[10px] text-flowup-muted">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Chart + orders */}
          <div className="mt-3 grid gap-2.5 sm:grid-cols-5 sm:gap-3">
            <div className="rounded-xl border border-flowup-border-soft bg-flowup-card/60 p-3 sm:col-span-3">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[11px] font-semibold text-white">Revenue This Week</p>
                <span className="text-[10px] text-flowup-muted">7 days</span>
              </div>
              <div className="flex h-20 items-end gap-1.5 sm:h-24">
                {[40, 65, 50, 80, 60, 95, 75].map((h, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-1">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.08, ease: 'easeOut' }}
                      className="w-full rounded-t-md bg-gradient-to-t from-flowup-orange/40 to-flowup-orange"
                    />
                    <span className="text-[8px] text-flowup-muted-2">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-flowup-border-soft bg-flowup-card/60 p-3 sm:col-span-2">
              <p className="mb-2 text-[11px] font-semibold text-white">Recent Orders</p>
              <div className="space-y-2">
                {[
                  { id: '#1042', item: 'Veg Burger', status: 'Preparing', color: 'text-amber-400' },
                  { id: '#1041', item: 'Margherita', status: 'Ready', color: 'text-success' },
                  { id: '#1040', item: 'Coke Float', status: 'Delivered', color: 'text-flowup-muted' },
                ].map((o) => (
                  <div key={o.id} className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-semibold text-white">{o.id}</p>
                      <p className="text-[9px] text-flowup-muted">{o.item}</p>
                    </div>
                    <span className={`text-[9px] font-medium ${o.color}`}>{o.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Customer Checkout mockup */
export function CheckoutMock({ className = '' }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl2 border border-flowup-border bg-flowup-navy-2 ${className}`}>
      <div className="flex items-center justify-between border-b border-flowup-border-soft px-4 py-3">
        <div className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2"><path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
          <span className="text-[11px] font-semibold text-white">Checkout</span>
        </div>
        <div className="flex gap-1.5">
          <span className="rounded-md bg-flowup-orange px-2 py-0.5 text-[9px] font-semibold text-white">Delivery</span>
          <span className="rounded-md bg-flowup-card px-2 py-0.5 text-[9px] font-medium text-flowup-muted">Dine-in</span>
        </div>
      </div>

      <div className="p-4">
        {/* Items */}
        <div className="space-y-2">
          {[
            { name: 'Veg Cheese Burger', price: '₹119', qty: 2 },
            { name: 'Margherita Pizza', price: '₹249', qty: 1 },
            { name: 'Coca-Cola', price: '₹49', qty: 2 },
          ].map((it) => (
            <div key={it.name} className="flex items-center justify-between rounded-lg border border-flowup-border-soft bg-flowup-card/50 px-3 py-2">
              <div className="flex items-center gap-2.5">
                <div className="grid h-8 w-8 place-items-center rounded-md bg-flowup-orange/15 text-[10px] font-bold text-flowup-orange">
                  {it.qty}x
                </div>
                <span className="text-[11px] font-medium text-white">{it.name}</span>
              </div>
              <span className="text-[11px] font-semibold text-white">{it.price}</span>
            </div>
          ))}
        </div>

        {/* Customer details */}
        <div className="mt-3 space-y-2">
          <div className="rounded-lg border border-flowup-border-soft bg-flowup-card/40 px-3 py-2">
            <p className="text-[8px] uppercase tracking-wide text-flowup-muted">Name</p>
            <p className="text-[11px] font-medium text-white">Rahul Sharma</p>
          </div>
          <div className="rounded-lg border border-flowup-border-soft bg-flowup-card/40 px-3 py-2">
            <p className="text-[8px] uppercase tracking-wide text-flowup-muted">Delivery Address</p>
            <p className="text-[11px] font-medium text-white">12 MG Road, Pune, 411001</p>
          </div>
        </div>

        {/* Bill summary */}
        <div className="mt-3 space-y-1.5 rounded-lg bg-flowup-card/50 p-3">
          <div className="flex justify-between text-[10px] text-flowup-muted">
            <span>Item Total</span><span className="text-white">₹535</span>
          </div>
          <div className="flex justify-between text-[10px] text-flowup-muted">
            <span>Delivery Charge</span><span className="text-white">₹30</span>
          </div>
          <div className="my-1 border-t border-flowup-border-soft" />
          <div className="flex justify-between text-[12px] font-bold">
            <span className="text-white">Total</span><span className="text-flowup-orange">₹565</span>
          </div>
        </div>

        <button className="mt-3 w-full rounded-lg bg-gradient-to-r from-flowup-orange to-flowup-orange-bright py-2.5 text-[12px] font-bold text-white">
          Place Order
        </button>
      </div>
    </div>
  );
}

/* Menu Management mockup */
export function MenuMock({ className = '' }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl2 border border-flowup-border bg-flowup-navy-2 ${className}`}>
      <div className="flex items-center justify-between border-b border-flowup-border-soft px-4 py-3">
        <div className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h7" /></svg>
          <span className="text-[11px] font-semibold text-white">Menu Management</span>
        </div>
        <span className="rounded-md bg-flowup-orange px-2.5 py-1 text-[9px] font-bold text-white">+ Add Item</span>
      </div>

      <div className="flex gap-3 p-4">
        {/* Categories */}
        <div className="hidden w-24 shrink-0 space-y-1.5 sm:block">
          <p className="mb-1 text-[8px] font-semibold uppercase tracking-wide text-flowup-muted">Categories</p>
          {['Burgers', 'Pizza', 'Drinks', 'Desserts'].map((c, i) => (
            <div key={c} className={`rounded-md px-2 py-1.5 text-[10px] font-medium ${i === 0 ? 'bg-flowup-orange/15 text-flowup-orange' : 'text-flowup-muted'}`}>
              {c}
            </div>
          ))}
        </div>

        {/* Items */}
        <div className="flex-1 space-y-2">
          {[
            { name: 'Veg Cheese Burger', price: '₹119', old: '₹149', veg: true, tag: 'Recommended' },
            { name: 'Chicken Supreme Burger', price: '₹179', old: '', veg: false, tag: '' },
            { name: 'Margherita Pizza', price: '₹249', old: '₹299', veg: true, tag: '' },
          ].map((it) => (
            <div key={it.name} className="flex items-center gap-3 rounded-lg border border-flowup-border-soft bg-flowup-card/50 p-2.5">
              <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-md ${it.veg ? 'bg-success/15' : 'bg-red-500/15'}`}>
                <span className={`h-2.5 w-2.5 rounded-full border ${it.veg ? 'border-success' : 'border-red-500'}`} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="truncate text-[11px] font-semibold text-white">{it.name}</p>
                  {it.tag && <span className="shrink-0 rounded bg-flowup-orange/15 px-1.5 py-0.5 text-[8px] font-semibold text-flowup-orange">{it.tag}</span>}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold text-white">{it.price}</span>
                  {it.old && <span className="text-[9px] text-flowup-muted line-through">{it.old}</span>}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="h-4 w-7 rounded bg-success/20" />
                <span className="text-[8px] font-semibold text-success">ON</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Phone mockup for QR / digital menu */
export function PhoneMock({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative mx-auto w-[200px] rounded-[2.2rem] border-[6px] border-flowup-border bg-flowup-navy-2 p-2 shadow-card">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-flowup-navy" />
        <div className="overflow-hidden rounded-[1.7rem] bg-flowup-navy">
          {/* Status bar */}
          <div className="flex items-center justify-between px-4 pt-7 pb-1.5 text-[8px] text-flowup-muted">
            <span>9:41</span>
            <div className="flex gap-1">
              <span>●●●</span>
            </div>
          </div>
          {/* App header */}
          <div className="flex items-center justify-between px-3 py-2">
            <div className="flex items-center gap-1.5">
              <div className="grid h-5 w-5 place-items-center rounded-md bg-flowup-orange">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M4 6h16M4 12h16M4 18h7" /></svg>
              </div>
              <span className="text-[9px] font-bold text-white">FlowUp Menu</span>
            </div>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8A94A6" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
          {/* Hero banner */}
          <div className="mx-3 mb-2 rounded-lg bg-gradient-to-br from-flowup-orange to-flowup-orange-bright p-2.5">
            <p className="text-[8px] font-bold text-white">Scan. Browse. Order.</p>
            <p className="text-[7px] text-white/80">Table 7 · Dine-in</p>
          </div>
          {/* Menu items */}
          <div className="space-y-1.5 px-3 pb-3">
            {[
              { n: 'Veg Cheese Burger', p: '₹119', v: true },
              { n: 'Margherita Pizza', p: '₹249', v: true },
              { n: 'Chicken Burger', p: '₹179', v: false },
              { n: 'Coca-Cola', p: '₹49', v: true },
            ].map((it) => (
              <div key={it.n} className="flex items-center gap-2 rounded-md bg-flowup-card/60 p-1.5">
                <div className={`h-5 w-5 shrink-0 rounded ${it.v ? 'bg-success/20' : 'bg-red-500/20'}`} />
                <div className="flex-1">
                  <p className="text-[8px] font-medium text-white">{it.n}</p>
                  <p className="text-[8px] font-bold text-flowup-orange">{it.p}</p>
                </div>
                <div className="grid h-4 w-4 place-items-center rounded bg-flowup-orange text-[8px] font-bold text-white">+</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

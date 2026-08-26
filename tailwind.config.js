/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        flowup: {
          orange: '#FF6B00',
          'orange-bright': '#FF7A00',
          'orange-soft': '#FF8C33',
          navy: '#080D17',
          'navy-2': '#101827',
          card: '#1D2939',
          border: '#344154',
          'border-soft': '#243044',
          muted: '#8A94A6',
          'muted-2': '#6B7689',
        },
        success: '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        xl2: '20px',
        '3xl2': '28px',
      },
      boxShadow: {
        glow: '0 0 60px -15px rgba(255,107,0,0.35)',
        'glow-sm': '0 0 30px -10px rgba(255,107,0,0.3)',
        card: '0 20px 50px -20px rgba(0,0,0,0.6)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'pulse-glow': {
          '0%,100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'dash-flow': {
          '0%': { strokeDashoffset: '200' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'dash-flow': 'dash-flow 3s linear infinite',
      },
    },
  },
  plugins: [],
};

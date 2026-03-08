import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#080c14',
        surface: '#0f1624',
        'surface-elevated': '#162032',
        primary: '#0ea5e9',
        'primary-light': '#38bdf8',
        gold: '#f59e0b',
        'text-primary': '#f0f9ff',
        'text-muted': '#94a3b8',
        'nav-border': '#1e3a5f',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #080c14 0%, #0f1624 50%, #080c14 100%)',
        'sky-gradient': 'linear-gradient(135deg, #0ea5e9 0%, #1d4ed8 100%)',
        'gold-gradient': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      },
      boxShadow: {
        'sky-glow': '0 0 30px rgba(14, 165, 233, 0.3)',
        'sky-glow-sm': '0 0 15px rgba(14, 165, 233, 0.2)',
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 8s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

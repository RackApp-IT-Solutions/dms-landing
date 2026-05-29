import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#053B61',
          50: '#eef6fc',
          100: '#d6e8f4',
          200: '#a9cde6',
          300: '#74acd2',
          400: '#3d83b6',
          500: '#0a5a94',
          600: '#053B61',
          700: '#04304f',
          800: '#03253d',
          900: '#021b2d',
          dark: '#032a47',
          light: '#0a5a94',
        },
        accent: {
          DEFAULT: '#FE7702',
          50: '#fff4e8',
          100: '#ffe2c2',
          200: '#ffc486',
          300: '#ffa54a',
          400: '#fe8e1f',
          500: '#FE7702',
          600: '#e56a00',
          700: '#b35200',
          dark: '#e56a00',
        },
        'background-light': '#f7f8fa',
        'background-dark': '#0c1a2a',
        'navy-dark': '#021e36',
        'navy-light': '#0a3050',
        danger: '#ef4444',
        success: '#10b981',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      borderRadius: {
        DEFAULT: '0.375rem',
        lg: '0.625rem',
        xl: '0.875rem',
        '2xl': '1.125rem',
        '3xl': '1.5rem',
        full: '9999px',
      },
      boxShadow: {
        soft: '0 4px 24px -6px rgba(15, 23, 42, 0.08)',
        card: '0 10px 40px -12px rgba(15, 23, 42, 0.12)',
        elevated: '0 24px 60px -20px rgba(15, 23, 42, 0.18)',
        glow: '0 0 30px rgba(5, 59, 97, 0.35)',
        'glow-accent': '0 0 30px rgba(254, 119, 2, 0.35)',
        'inner-soft': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
      },
      backgroundImage: {
        'grid-slate': "linear-gradient(to right, rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.08) 1px, transparent 1px)",
        'radial-fade': 'radial-gradient(ellipse at top, rgba(10, 90, 148, 0.18), transparent 60%)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        marquee: 'marquee 32s linear infinite',
        shimmer: 'shimmer 2.4s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [typography],
} satisfies Partial<Config>

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#4ade80',
          dim: 'rgba(74, 222, 128, 0.15)',
          border: 'rgba(74, 222, 128, 0.20)',
          glow: 'rgba(74, 222, 128, 0.08)',
          hover: '#86efac',
        },
        bg: '#050505',
        surface: {
          DEFAULT: '#0a0a0a',
          2: '#0f0f0f',
        },
        border: 'rgba(255, 255, 255, 0.07)',
        'white-60': 'rgba(255, 255, 255, 0.6)',
        'white-40': 'rgba(255, 255, 255, 0.4)',
        'white-20': 'rgba(255, 255, 255, 0.2)',
        'white-10': 'rgba(255, 255, 255, 0.1)',
        'white-6': 'rgba(255, 255, 255, 0.06)',
        'white-4': 'rgba(255, 255, 255, 0.04)',
        'white-3': 'rgba(255, 255, 255, 0.03)',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(2.8rem, 7vw, 5.5rem)', { lineHeight: '1.0', letterSpacing: '-0.035em' }],
        'section': ['clamp(1.8rem, 3.5vw, 2.8rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'body-lg': ['clamp(1rem, 2vw, 1.1875rem)', { lineHeight: '1.65' }],
      },
      maxWidth: {
        content: '1040px',
        mockup: '960px',
        cta: '680px',
        'hero-text': '780px',
        'hero-sub': '520px',
        'cta-input': '440px',
      },
      boxShadow: {
        'green-card': '0 0 0 1px rgba(74, 222, 128, 0.2), 0 40px 80px rgba(0,0,0,0.6)',
        'green-focus': '0 0 0 1px rgba(74, 222, 128, 0.4)',
        'mockup': '0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(74, 222, 128, 0.2)',
        'logo-dot': '0 0 8px #4ade80',
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s infinite',
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

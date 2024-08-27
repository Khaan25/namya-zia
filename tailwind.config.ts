import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        mono: ['var(--font-geist-mono)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        'heading-1': ['64px', { lineHeight: '79.36px', letterSpacing: '-0.03em' }],
        'heading-2': ['48px', { lineHeight: '64px', letterSpacing: '-0.03em' }],
        'heading-3': ['14px', { lineHeight: '20px', letterSpacing: '0.04em', fontWeight: '500' }],
        'heading-4': ['48px', { lineHeight: '64px', letterSpacing: '-0.03em', fontWeight: '500' }],
        body: ['16px', { lineHeight: '19.84px', letterSpacing: '-0.03em' }],
      },
      colors: {
        primary: '#000000',
        secondary: '#FFFFFF',
      },
      animation: {
        flip: 'flip 6s infinite steps(2, end)',
        rotate: 'rotate 3s linear infinite both',
      },
      keyframes: {
        flip: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
        rotate: {
          to: {
            transform: 'rotate(90deg)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config

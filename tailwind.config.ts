import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette - Serene Nursery Luxe
        sage: {
          50: '#f6f7f4',
          100: '#e8ebe3',
          200: '#d4dbc9',
          300: '#b5c2a4',
          400: '#93a67d',
          500: '#768b5f',
          600: '#5c6f4a',
          700: '#49583c',
          800: '#3d4833',
          900: '#343d2d',
        },
        blush: {
          50: '#fdf6f5',
          100: '#fceae8',
          200: '#f9d8d4',
          300: '#f3bdb5',
          400: '#ea9488',
          500: '#dd6b5d',
          600: '#c84f3f',
          700: '#a83f32',
          800: '#8c372d',
          900: '#75332b',
        },
        cream: {
          50: '#fffdf9',
          100: '#fef9f0',
          200: '#fcf3e3',
          300: '#f9e9ce',
          400: '#f5d9ae',
          500: '#f0c48a',
          600: '#e5a35c',
          700: '#d68640',
          800: '#b26d36',
          900: '#925a2f',
        },
        gold: {
          50: '#fdfbf3',
          100: '#fcf5de',
          200: '#f8e9bc',
          300: '#f2d68f',
          400: '#ebbd5e',
          500: '#e4a63a',
          600: '#d48a2a',
          700: '#b16b24',
          800: '#8f5524',
          900: '#754720',
        },
        charcoal: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c7c7c7',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#2a2a2a',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
        script: ['var(--font-dancing-script)', 'Dancing Script', 'cursive'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
        '10xl': ['10rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'gentle-bounce': 'gentleBounce 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 8px 40px rgba(0, 0, 0, 0.06)',
        'soft-xl': '0 16px 60px rgba(0, 0, 0, 0.08)',
        'gold': '0 4px 20px rgba(228, 166, 58, 0.15)',
        'inner-soft': 'inset 0 2px 10px rgba(0, 0, 0, 0.03)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
export default config

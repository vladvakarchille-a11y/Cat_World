/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: '#244B3C', light: '#2F5F4C', dark: '#193228' },
        cream: { DEFAULT: '#F6F1E8', soft: '#FBF8F2' },
        gold: { DEFAULT: '#C5A46D', soft: '#DCC9A3' },
        ink: '#333333',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: { '2xl': '1.25rem', '3xl': '1.75rem' },
      boxShadow: {
        soft: '0 4px 20px -8px rgba(36,75,60,0.15)',
        card: '0 10px 40px -12px rgba(36,75,60,0.18)',
      },
    },
  },
  plugins: [],
}
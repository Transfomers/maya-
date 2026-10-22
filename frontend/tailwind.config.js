/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc5fb',
          400: '#38a5f8',
          500: '#0267b5',
          600: '#015294',
          700: '#024278',
          800: '#063761',
          900: '#0b2b4b',
          950: '#071b30',
        },
        jevelin: {
          coral: '#eb583d',
          coralHover: '#d9472d',
          charcoal: '#383d41',
          orange: '#eb583d',
          orangeHover: '#d9472d',
          orangeLight: '#fff5f3',
          dark: '#192f45',
          darker: '#0e1b28',
          slate: '#475569',
          lightBg: '#f8fafc',
          border: '#e2e8f0',
        },
        navy: {
          800: '#233d59',
          850: '#192f45',
          900: '#122232',
          950: '#0b1520',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#ffad02',
          600: '#d97706',
          700: '#b45309',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

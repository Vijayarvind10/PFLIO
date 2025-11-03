/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      colors: {
        peach: '#f7c8a9',
        mint: '#8ed1c1',
        sand: '#f9e7d3',
        soot: '#322f30',
        dusk: '#2f2a3d'
      },
      fontFamily: {
        sans: ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 30px rgba(47, 42, 61, 0.12)'
      },
      borderRadius: {
        xl: '1.25rem'
      }
    }
  },
  plugins: []
};

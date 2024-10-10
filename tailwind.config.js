/** @type {import('tailwindcss').Config} */
const textShadowDead = '8px 2px 0px #450a0a';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jersey': ['Jersey', 'sans-serif'],
        'rosarivo': ['Rosarivo', 'serif'],
        'pixelify': ['Pixelify', 'monospace']
      },
      textShadow: {
        'dead': textShadowDead
      }
    },
  },
  plugins: [
    function ({addUtilities}) {
      const shadows = {
        '.text-shadow-dead': {
          textShadow: textShadowDead,
        }
      }
      addUtilities(shadows, ['responsive', 'hover']);
    }
  ],
}
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'inter': ["Inter", "Segoe UI"],
        'sfmono': ["SFMono"]
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          light: '#7396D3',
          DEFAULT: '#3B69BA',
          dark: '#223D6D',
        },
        purple: {
          light: '#b6a3f5',
          DEFAULT: '#866FF7',
          vibrant: '#4016ca',
          dark: '#5E49A3'
        }
      },
      boxShadow: {
        purple : '0 0px 15px 0px rgba(139, 108, 239, 0.7)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

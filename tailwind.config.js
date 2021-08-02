module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'inter': ["Inter", "Segoe UI"],
        'sfmono': ["SFMono"],
        'sfdisplay': ["SFDisplay"],
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
        },
        emerald: {
          light: '#92DDAB',
          DEFAULT: '#3BBA65',
          dark: '#226D3A',
        }
      },
      boxShadow: {
        purple : '0 0px 15px 0px rgba(80, 200, 120, 0.7)'
      },
      inset: {
        '3/10': "30%",
        '-3/10': "-30%"
      },
      translate: {
        '3/10': "30%",
        '-3/10': "-30%"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

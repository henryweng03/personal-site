module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Segoe UI"],
        sfmono: ["SFMono"],
        messinasans: ["MessinaSans", "Segoe UI"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          light: "#7396D3",
          DEFAULT: "#3B69BA",
          dark: "#141414",
        },
        secondary: {
          light: "#7396D3",
          DEFAULT: "#3B69BA",
          dark: "#223D6D",
        },
      },
      boxShadow: {
        green: "0 0px 15px 0px rgba(80, 200, 120, 0.7)",
      },
      height: {
        screenBigger: "125vh",
      },
      listStyleType: {
        square: "square",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

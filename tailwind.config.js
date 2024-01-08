module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
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
          dark: "#141421",
        },
        secondary: {
          light: "#AEC8F5",
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
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};

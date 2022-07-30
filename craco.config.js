// craco.config.js
module.exports = {
  style: {
    postOptions: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};

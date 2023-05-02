

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'main': '#071936',
      'primary': '#0d2f66',
      'red': '#f43f5e',
    },
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'], 
      }, //end of fontFamily
      backgroundImage: {
        'login-pattern': "url('/src/assets/login-left-bg.338d556f.png')",
        'login-pattern-right': "url('/src/assets/brand-icon.png')",
      }
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};

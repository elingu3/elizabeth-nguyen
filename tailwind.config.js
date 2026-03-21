import colors from 'tailwindcss/colors'; 


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        matcha: "#7BC47F",
      },
    },
  },
  plugins: [],
};

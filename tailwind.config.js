/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    daisyui: {
      themes: ["bumblebee", "dark", "cupcake"],
    },
  },
  plugins: [require("daisyui")],
}


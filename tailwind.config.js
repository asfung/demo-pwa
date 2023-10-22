/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6867C5",
      },
    },
    container: {
      screens: {
        sm: "470px",
        md: "598px",
        lg: "854px",
        xl: "1110px",
      },
      center: true,
    }
  },
  plugins: [],
}
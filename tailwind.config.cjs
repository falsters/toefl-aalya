/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        toefl: {
          primary: "#1B5E20",
          secondary: "#66BB6A"
        }
      }
    }
  },
  plugins: []
};

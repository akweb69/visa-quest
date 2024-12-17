/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        visa: ["Bokor", "system-ui"],
        quest: ["Playfair Display", "serif"],
      },
      backgroundImage: {
        s1: "url('/src/assets/images/s1.jpg')",
        s2: "url('/src/assets/images/s2.jpg')",
        s3: "url('/src/assets/images/s3.jpg')",
        s4: "url('/src/assets/images/s4.jpg')",
        bg404: "url('/src/assets/images/404.gif')",
      },
    },
  },
  darkMode: "class",
  plugins: [require("daisyui")],
};

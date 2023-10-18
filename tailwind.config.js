/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flex: {
        nav: "1 0 0",
      },
      backgroundImage: {
        generic:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.5) 100%), url('/Replace.png')",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
        Rajdhani: ["Rajdhani", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern":
          "url('/src/assets/backgrounds/pexels-mr-borys-12275368 (1080p).gif')",
      },
    },
  },
  plugins: [],
};

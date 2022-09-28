/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "admit-red": "#FF595A",
        "admit-blue": "#002856",
        "admit-dark-blue": "#002A3A",
        "admit-light-blue":"#74C3D5",

        "admit-blue-pressed": "#075985",
      },
      backgroundImage: {
        studio: "url('/studio.webp')",
      },
      fontFamily: {
        'admitTitle': ['"DM Serif Display"', 'serif'],
        // 'admitText': ['"Mukta"', 'serif'],
        'heroSubText': ["'Barlow'",'sans-serif'],
        // 'weAdmit' : [ "'Qwitcher Grypen'", "cursive"],
    },
    animation: {
      'pulse-once': 'pulse 2s ease',
      'ping-once': 'ping 1s infinite',
      "wiggle-once": 'wiggle 5s infinite',
      "spin-slow": 'spin 100s infinite',
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      }
    }
    },
  },
  plugins: [],
};

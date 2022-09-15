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

        "admit-blue-pressed": "#075985",
      },
      backgroundImage: {
        studio: "url('/studio.png')",
      },
      fontFamily: {
        'admitTitle': ['"DM Serif Display"', 'serif'],
        'admitText': ['"Mukta"', 'serif'],
        'heroSubText': ['Barlow','sans-serif'],
        'weAdmit' : [ "'Qwitcher Grypen'", "cursive"],
    },
    animation: {
      'pulse-once': 'pulse 3s linear',
      "wiggle-once": 'wiggle 5s ease-in-out',
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

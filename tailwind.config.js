/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3A7065',
        secondary: '#70798B',
        yellow_light: "#EBB817"
      },
    },
    screens: {
      'xs': '340px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    boxShadow: {
      'btn-shadow': '0px 20px 26.1625px rgba(33, 94, 233, 0.04), 0px 8.14815px 13.1185px rgba(33, 94, 233, 0.0314074), 0px 1.85185px 6.33565px rgba(33, 94, 233, 0.0192593)',
      'medium-btn-shadow': '-10px 40px 70px rgba(171, 175, 199, 0.3)',
      'hero-shadow': '0px 8px 16px rgba(8, 35, 48, 0.1), 0px 4px 8px rgba(8, 35, 48, 0.16);'
    },

    fontFamily: {
      'Nunito': ['Nunito', 'sans-serif'],
      'Quicksand': ['Quicksand', 'sans-serif'],
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens:{
        "xs":'480px',
        "2xs":'360px',
        "3xs":'200px',
      },
      colors: {
        customGreen: '#03b95b',
        'navy-blue': '#4c669f',
      },
      width: {
        '125': '500px', // Custom width class
      },
      height: {
        '12': '50px', // Custom height class
      },
    },
  },
  plugins: [],
};

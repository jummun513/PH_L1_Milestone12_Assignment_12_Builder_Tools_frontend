/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navBg': '#2F4858',
        'primary': '#F17626',
        'secondary': '#D15C03',
        'grad': '#E85462',
      },
      screens: {
        xsm: '400px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px',
        xxxl: '1792px',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          accent: "#2F4858",
        },
      },
    ],
  },
}


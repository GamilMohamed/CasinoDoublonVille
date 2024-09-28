/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'myblack': '#404040',
        'primary': '#188060',
        'secondary': '#28a068'
      },
    },
    
  },
  plugins: [],
}


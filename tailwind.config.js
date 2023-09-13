/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-yellow":"#EEA302",
        "my-blue":"#80D8DA",
        "my-red":"#FF3B25",
        "dark-blue":"116DFF",
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'sans-serif'],
        montserrat:['Montserrat']
        
      },
    },
  },
  plugins: [],
};

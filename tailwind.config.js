/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    //Or if using src directory
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens:{
      phones:'310px',
      tablet:'640px',
      laptop:'1024px',
      desktop:'1280px',
    },
    extend: {},
  },
  plugins: [],
}


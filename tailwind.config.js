/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
           extend: {
        colors: {
          "light-purple":"#815CC8",
          "light-blue":"#1BABFE"
                }
    
      },
    },
    plugins: [],
  }
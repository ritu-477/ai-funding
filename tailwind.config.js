/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },

      fontFamily: {
        'poppins': "'poppins', sans-serif",
      },

      fontSize: {
        'custom-xl': "22px",
        'custom-2xl': "28px",
        'custom-3xl': "39.42px",
        'custom-4xl': "47px",
        'custom-5xl': "50px",
        'custom-6xl': "62.12px",
      },
      
      lineHeight: {
        'custom-xl': "18px",
        'custom-2xl': "22px",
        'custom-3xl': "30px",
        'custom-4xl': "45.15px",
        'custom-5xl': "55px",
        'custom-6xl': "66px",
        'custom-7xl': "68.71px",
      },
      colors: {
        'ink-blue': "#4C57FF",
        'charcoal-black': "#0E1122",
        'gray': "#76767F",
        'creamy': "#EFECE6", 
        'transparent-white': "F3F5FF4D",
      },

      backgroundImage: {
        'hero': "url('./assets/images/webp/hero-bg.webp')",
      },
    },
  },
  plugins: [],
};

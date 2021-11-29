module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Nunito",
          "Roboto",
          "sans-serif",
          "Akaya Kanadaka",
          "Mulish",
          "Poppins",
        ],
      },

      colors: {
        background: "#f1f1f1"
      },

      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '2550px',
        // => @media (min-width: 2550px) { ... }
      }
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        'as': '0 2px 2px rgba(0, 0, 0, 1.0)',
        'as2': '0px 1px 1px rgba(255, 255, 255, 1.0)',
      },
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
        "as-blue-dark": "#16166B",
        "as-blue-md": "#094B71",
        "as-blue-light": "#0E71AA",
        "as-green-i": "#ADD8E6",
        
        
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
        "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
        "ccolor": "url('./assets/profile_pic_color.png')",
        
      }),
      fontFamily: {
        museomoderno: ["MuseoModerno", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        profilepiccolor: "url('./assets/profile_pic_color.png')",
        evolvetext: "url('./assets/EvolveText.png')",
        brushstrokebg: "url('./assets/brush_stroke_bg.png')",
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
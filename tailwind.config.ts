import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  darkMode:"class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        raleway: ['Abril Fatface', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        "primary": "#ECEEFF",
        "vitage": "#F0F0F0",
        "coral-blue": "#579BB1",
        "coral-red": "#C63D2F",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        "wide": "1440px"
      },
      backgroundImage: {
        "hero-bgimage": "url('src/assets/images/paint-bg.png')"
      }
    },
  },
  plugins: [],
};
export default config;

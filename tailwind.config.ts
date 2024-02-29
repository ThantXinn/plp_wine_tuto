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
        "Navbar-Color": "#EAEAEA",
        "Navbar-Dark-Color": "#1E293B",
        "Button-Color": "#BF4147",
        "AddtoCartTitle-Color":"#333333",
        "Main": "#F9F7F6",
        "Accent-Color": "#5F9EA0",
        "Background-Color": "#E6E6E6",
        "Secondary-Color": "#0E172A",
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
};
export default config;

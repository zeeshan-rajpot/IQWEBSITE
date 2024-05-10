/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins, sans-serif"],
      },
      lineHeight: {
        lineHeight: 1.5,
      },
      colors: {
        theme: "#1A9AFF",
        ptheme :"#646464",
        
      },
      boxShadow: {
        textShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0)",
      },
      backgroundImage: {
        logo:
          "url('/logo.png')",
        servicesBg:
          "linear-gradient(to right, #1293EC0D, #A976FD26, #1293EC0D)",
        bghero: "url('/public/Group 498.jpg')",
        bgellipse: "url('/Ellipse.svg')",
      },
    },
  },
  plugins: [],
}


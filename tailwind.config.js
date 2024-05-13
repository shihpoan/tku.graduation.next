/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "tku-bg": "url('/bg.jpg')",
      },
      animation: {
        zoom: "zoom 3s linear infinite",
        rotate: "rotate 3s linear infinite",
      },
      keyframes: {
        zoom: {
          "0%": { transform: "scale(1)", filter: "brightness(100%)" },
          "50%": { transform: "scale(2)", filter: "brightness(200%)" },
          "100%": { transform: "scale(1)", filter: "brightness(100%)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(2)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "focus"],
    },
  },
  plugins: [],
};

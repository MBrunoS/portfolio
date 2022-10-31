/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "rgb(var(--primary-color) / <alpha-value>)",
        "secondary-color": "rgb(var(--secondary-color) / <alpha-value>)",
        "disabled-color": "rgb(var(--disabled-color) / <alpha-value>)",
        "highlight-color": "rgb(var(--highlight-color) / <alpha-value>)",
      },
      backgroundImage: {
        "card-gradient":
          "linear-gradient(to bottom left, rgba(12, 21, 28, 0.35) 0%, rgb(var(--highlight-color) / 0.35) 100%)",
      },
      animation: {
        glow: "glow 8s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%, 100%": {
            "box-shadow": "0px 4px 120px 10px rgb(var(--primary-color) / 0.7)",
          },
          "50%": {
            "box-shadow": "0px 4px 40px 0px rgb(var(--primary-color) / 0.7)",
          },
        },
      },
    },
  },
  plugins: [],
};

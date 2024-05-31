/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./formkit.theme.ts", // <-- add your theme file
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#000000", // Black
          secondary: "#ffffff", // White
          accent: "#ff0000", // Red
          neutral: "#f4f4f4", // Light grey
          "base-100": "#ffffff", // White
          info: "#0000ff", // Blue
          success: "#00ff00", // Green
          warning: "#ffff00", // Yellow
          error: "#ff0000", // Red
        },
        dark: {
          primary: "#ffffff", // White
          secondary: "#000000", // Black
          accent: "#ff0000", // Red
          neutral: "#333333", // Dark grey
          "base-100": "#000000", // Black
          info: "#0000ff", // Blue
          success: "#00ff00", // Green
          warning: "#ffff00", // Yellow
          error: "#ff0000", // Red
        },
      },
    ],
  },
};

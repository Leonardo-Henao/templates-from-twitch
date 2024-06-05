/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: "#FE8235",
        secondary: "#898989",
        tertiary: "#222222",
        dark: "#131313",
        light: "#F5F5F5",
      },
    },
  },
  plugins: [],
};

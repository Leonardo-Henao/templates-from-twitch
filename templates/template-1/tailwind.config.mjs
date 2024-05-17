/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#B772FF",
        secondary: "#E683C6",
        tertiary: "#F78AB3",
        fontcolor: "#25193C",
      },
    },
  },
  plugins: [],
};

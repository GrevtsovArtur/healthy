/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { ink: "#171C18", lime: "#B8EF75", milk: "#F4F3ED", clay: "#E6A16D" },
      fontFamily: { sans: ["var(--font-manrope)", "Inter", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};

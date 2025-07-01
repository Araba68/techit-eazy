/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Tailwind scans all files in /src
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3F8EFC',
        secondary: '#74CBE3',
        violet: '#8B5CF6',
      },
    },
  },
  plugins: [],
}

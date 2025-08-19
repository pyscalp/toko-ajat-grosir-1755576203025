/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // blue-500
        secondary: '#4F46E5', // indigo-600
        accent: '#8B5CF6' // purple-500
      }
    },
  },
  plugins: [],
}
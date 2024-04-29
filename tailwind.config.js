/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'Black' : '#1e2832',
        'PrimaryBg' : '#1e28320d',
        // 'PrimaryBg' : '#1e28320d',
      },
      fontFamily : {
        'Poppins' : ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
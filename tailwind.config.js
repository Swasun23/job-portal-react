/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'logo': ['Fredoka One', 'system-ui', 'sans-serif'],
    },
  },
  plugins: [],
}
}

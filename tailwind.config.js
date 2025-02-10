/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'logo': ['Fredoka One', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
        'lexend': ['Lexend', 'sans-serif'],
    },
    animation: {
        slowbounce: "bounce 3s infinite ease-in-out",
        fastbounce: "bounce 1s infinite ease-in-out",
      },
  },
  plugins: [],
}
}

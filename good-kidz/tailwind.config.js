/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Opción recomendada: usa la clase `dark` para habilitar el modo oscuro
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Añade la nueva fuente aquí
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}



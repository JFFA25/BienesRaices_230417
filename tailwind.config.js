/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./Views/**/*.pug'],
  theme: {
    extend: {
      colors: {
        blanco: '#FFFFFF',
        azulMunsell: '#3D95A9',
        azulClaro: '#0B6C95',
        negro: '#040506',
        azulPrusia: '#063156',
        error: '#FF5252',
      },
    },
  },
  plugins: [],
}
import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {keyframes: {
       levitate : {
       '0%': {
            transform: 'translateY(0)'
        },
    
        '30%': {
            transform: 'translateY(-10px)'
        }
    ,
        '50%': {
            transform: 'translateY(4px)'
        }
    ,
        '70%': {
            transform: 'translateY(-15px)'
        }
 
    }
    }},
  },
  darkMode: "class",
  plugins: [nextui()],
}

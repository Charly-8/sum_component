/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        'light-red': 'hsl(0, 100%, 67%)',
        'light-red-c': 'hsl(0, 100%, 95%)',
        'orangey-yellow': 'hsl(39, 100%, 56%)',
        'orangey-yellow-c': 'hsl(39, 100%, 95%)',
        'green-teal': 'hsl(166, 100%, 37%)',
        'green-teal-c': 'hsl(166, 100%, 95%)',
        'cobalt-blue': 'hsl(234, 85%, 45%)',
        'cobalt-blue-c': 'hsl(234, 85%, 95%)',
        'light-slate-blue': 'hsl(252, 100%, 67%)',
        'light-royal-blue': 'hsl(241, 81%, 54%)',
        'violet-blue': 'hsla(256, 72%, 46%, 1)',
        'persian-blue': 'hsla(241, 72%, 46%, 0)',
        'pale-blue': 'hsl(221, 100%, 96%)',
        'light-lavender': 'hsl(241, 100%, 89%)',
        'dark-gray-blue': 'hsl(224, 30%, 27%)',
        'white': 'hsl(0, 0%, 100%)' 
      },
      screens: {
        'lg': {'min': '801px'},
        'md': {'min': '481', 'max': '800px'},
        'sm': {'max': '480px'}
      }
    },
  },
  plugins: [],
}


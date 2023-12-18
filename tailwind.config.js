/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': {
          'purple': 'hsl(259, 100%, 65%)',
          'red': 'hsl(0, 100%, 67%)',
        },
        'neutral': {
          'offwhite': 'hsl(0, 0%, 94%)',
          'lightgrey': 'hsl(0, 0%, 86%)',
          'smokeygrey': 'hsl(0, 1%, 44%)',
          'offblack': 'hsl(0, 0%, 8%)',
        }
      }
    },
  },
  plugins: [],
}

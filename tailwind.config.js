const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      m_white: '#FCFCFC',
      m_primary: '#735AFF',
      m_primary_light: '#dfdbff',
      m_dark: '#141414',
      m_primary_dark: '#6146F9'
    },
    screens: {
      'sm': {'min': '360px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
    extend: {},
  },
  variants: {
    extend: {
      margin: ['last'],
      width: ['first']
    },
  },
  plugins: [],
}

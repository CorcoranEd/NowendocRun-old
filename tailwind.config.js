/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fontFamily: {
      display: ['Work Sans', 'sans-serif'],
      body: ['Work Sans', 'sans-serif']
    },
    extend: {
      zIndex: {
        '-10': '-10'
      },
      inset: {
        '-1/2': '-50%',
        '-1/4': '-25%',
        '1/2': '50%',
        '1/4': '25%'
      },
      opacity: {
        '5': '.05'
      },
      spacing: {
        '128': '32rem'
      }
    }
  },
  variants: {},
  plugins: []
}

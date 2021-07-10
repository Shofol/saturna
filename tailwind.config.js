// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'br-primary': '#F1A1E1',
        'br-secondary': '#FDF1FB',
        'br-tertiary': '#9D72E3',
        'br-bold': '#E06AC8',
        'br-dark': '#4B4B4B',
        'br-gray': '#f5f5f5',
        'br-gray-100': '#F8F7F8'
      },
      flex: {
        '2': '2 2 0%'
      },
      backgroundImage: theme => ({
        'hor': "linear-gradient(180deg, #AE3AF5 0%, #6067F3 100%)",
        'rev-hor': "linear-gradient(270deg, #AE3AF5 0%, #6067F3 100%)",
        'ver': "linear-gradient(0deg, #AE3AF5 0%, #6067F3 100%)",
        'rev-ver': "linear-gradient(180deg, #AE3AF5 0%, #6067F3 100%)",
      }),
      boxShadow: {
        inner: '0px -2px 10px #0000004D;',
        navInner: 'inset 0px 0px 6px #AE3AF5, 0px 0px 6px #AE3AF5;',
        btnShadow: '0px 30px 60px rgba(195, 192, 195, 0.1)',
        nftShadow: '0px 15px 40px rgba(0, 0, 0, 0.05)',
        nftTxnShadow: '0px 30px 60px rgba(195, 192, 195, 0.2);'
      },
      fontFamily: {
        'botrio': ['Botrio', 'sans-serif']
      },
      maxWidth: {
        'tiny': '17rem'
      }
    }
  },
  variants: {
    extend: {
      textColor: ['hover', 'focus'],
    },
  },
  plugins: [],
}
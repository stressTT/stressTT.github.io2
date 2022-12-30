module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        'logoyellow': '#f4d848',
        'logoblack': '#4a4b4d',
        'Orang': '#FBA311',
        'mainCol': '#3f235d',
        'grayText': '#737171',
        'discount': 'rgb(115, 190, 111)',
        'credit': 'rgb(244, 128, 18)',
        'orangelight': '#fdf8e2'
      },
      width: {
        '79': '79%',
        '19': '19%'
      }
    },
  },
  plugins: [],
}
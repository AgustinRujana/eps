module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './content/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBlue: '#002857',
        lightBlue: '#00a4e47',
        mainGray: '#b3b2b8',
        lightGray: '#d9d9dc'
      },     
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"]
      },
      spacing: {
        '1/8': '12.5%',
        '1/10': '10%',
        '1/20': '5%'
      }
    },
  }
};
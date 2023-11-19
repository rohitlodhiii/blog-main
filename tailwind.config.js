const withMT = require("@material-tailwind/react/utils/withMT");
 
 module.exports = withMT({
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
    
     
     extend: {
      dropShadow: {
        'md': '0 35px 35px rgba(240, 0, 0, 0.7)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      fontFamily: {
        rohit: ['"Montserrat"'],
        avi :["Roboto Mono"],
        ram:["Hachi Maru Pop"],
        sfs:["Poppins"],
      }
     },
   },
   plugins: [],
 });
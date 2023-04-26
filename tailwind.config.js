/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html",

  ],
  theme: {
    extend: {

      mytheme: {
          

 
        "primary": "#7ae2ad",
                  
        
         
        "secondary": "#add2ea",
                  
        
         
        "accent": "#f486d1",
                  
        
         
        "neutral": "#2B313B",
                  
        
         
        "base-100": "#EFF0F6",
                  
        
         
        "info": "#A5B8EE",
                  
        
         
        "success": "#10562B",
                  
        
         
        "warning": "#D4A50C",
                  
        
         
        "error": "#F81234",
                  },


    },
  },
  plugins: [ 
  
    require("@tailwindcss/typography"), require("daisyui"),

 

],
}


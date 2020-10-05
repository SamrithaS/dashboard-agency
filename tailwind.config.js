module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      screens: {
        xs: { max: "520px" },
        xl: { max: "1279px" },

        lg: { max: "1023px" },

        md: { max: "767px" },
        sm: { max: "620px" }
      },
      colors: {
        primary: "#58666F",
        blackish:"#2B3942",
        grey:"#F2F5F7",
        grey2:"#808C94",
        white:"#FFFFFF",
        darkgreen:'#1F513A',
        lightgreen:'#DCF9E5'
      },
      fontSize: {
        fifteen:'15px',
        twentyeight:'28px',
        twentytwo:'22px',
        thirteen:'13px',
        eighteen:'18px'
      }
    },
    boxShadow: {
      g: "0px 0.5px 2px rgba(0, 0, 0, 0.3), 0px 2px 4px rgba(0, 0, 0, 0.04)",
      xs: "inset 0px -1px 0px #E3E9ED"
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: []
};

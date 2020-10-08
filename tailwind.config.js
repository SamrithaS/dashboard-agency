module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      boxShadow: {
        g: "0px 0.5px 2px rgba(0, 0, 0, 0.3), 0px 2px 4px rgba(0, 0, 0, 0.04)",
        xs: "inset 0px -1px 0px #E3E9ED",
        rect:
          "0px -7px 10px rgba(0, 0, 0, 0.02), 0px 4px 14px rgba(0, 0, 0, 0.1)",
          login:"inset 0px -0.5px 0px #F2F5F7"
      },
      inset:{
        '-9':'-40px'
      },
      margin: {
        "88": "3.625rem"
      },
      padding: {
        "88": "12.5rem"
      },
      screens: {
        lg: { max: "1023px" },
        md: { max: "921px" },
        sm: { max: "589px" },
        xs: { max: "479px" }
      },
      colors: {
        primary: "#58666F",
        blackish: "#2B3942",
        grey: "#F2F5F7",
        grey2: "#808C94",
        white: "#FFFFFF",
        darkgreen: "#1F513A",
        lightgreen: "#DCF9E5"
      },
      fontSize: {
        fifteen: "15px",
        twentyeight: "28px",
        twentytwo: "22px",
        thirteen: "13px",
        eighteen: "18px",
        twentyfour: "24px"
      },
      maxWidth: {
        "5xl": "69.375rem",
        "7xl": "57rem",
        s: "16rem"
      }
    },

    borderRadius: {
      md: "8px"
    }
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    textColor: ["responsive", "hover", "focus", "active"]
  },
  plugins: []
};

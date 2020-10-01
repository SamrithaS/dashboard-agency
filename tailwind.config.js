module.exports = {
  purge: [],
  theme: {
    boxShadow: {
      g: "0px 0.5px 2px rgba(0, 0, 0, 0.3), 0px 2px 4px rgba(0, 0, 0, 0.04)",
      xs: "inset 0px -1px 0px #E3E9ED"
    },
    screens: {
      xs: { max: "520px" },
      xl: { max: "1279px" },

      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "620px" }
    },
    colors: {
      primary: "#3490dc",
      secondary: "#ffed4a",
      danger: "#e3342f"
    }
  },

  variants: {
    backgroundPosition: ["responsive"],
    backgroundPosition: ["responsive", "hover", "focus"]
  },
  plugins: []
};

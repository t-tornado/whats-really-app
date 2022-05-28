module.exports = {
  content: ["./src/**/*.{jsx,tsx,ts,js}"],
  theme: {
    extend: {
      colors: {
        default: "#000",
        lightBlue: "#7579E7",
        darkBlue: "#0E185F",
        gray: "#F3F1F5",
        navBg: "#d9d9d9",
        active: "#83BD75",
      },
      fontFamily: {
        poppins: ["Poppins"],
        poppinsBold: ["PoppinsBold"],
        poppinsMedium: ["PoppinsMedium"],
        poppinsLight: ["PoppinsLight"],
      },
      transitionProperty: {
        width: "width",
        height: "height",
      },
    },
  },
  plugins: [],
};

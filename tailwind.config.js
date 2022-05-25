module.exports = {
  content: ["./src/**/*.{jsx,tsx,ts,js}"],
  theme: {
    extend: {
      colors: {
        default: "#000",
        lightBlue: "#7579E7",
        darkBlue: "#120078",
        gray: "#c4c4c4",
      },
      fontFamily: {
        poppins: ["Poppins"],
        poppinsBold: ["PoppinsBold"],
        poppinsMedium: ["PoppinsMedium"],
        poppinsLight: ["PoppinsLight"],
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};

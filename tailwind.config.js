module.exports = {
  content: ["./src/**/*.{jsx,tsx,ts,js}"],
  theme: {
    extend: {
      colors: {
        default: "#000",
        lightBlue: "#7579E7",
        darkBlue: "#120078",
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

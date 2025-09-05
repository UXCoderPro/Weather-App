module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        amiri: ['"Amiri"', "serif"],
        publicSans: ['"Public Sans"', "sans-serif"],
      },
      colors: {
        textShade: "rgba(255,255,255,0.80)",
        bg: "#0C0C0C",
        bgShade: "#1C1A1B",
      },
      backgroundImage: {
        "bigBox-gradient":
          "linear-gradient(140deg,#434142 0%,#272627 32.07%,#151414 100%)",
        "smallBox-gradient":
          "linear-gradient(140deg,#434142 0%,#222 32.07%,#121212 100%)",
        "highLighter-gradient":
          "linear-gradient(104deg,#F051A3 -7.37%,#2067F4 129.34%)",
        "stroke-gradient":
          "linear-gradient(140deg,#434142 0%,#272627 32.07%,#151414 100%)",
      },
    },
  },
  plugins: [],
};

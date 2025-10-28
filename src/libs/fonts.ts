import localFont from "next/font/local";

const customFont = localFont({
  src: [
    {
      path: "../../public/fonts/Agatho/Agatho_Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--agatho-font", // CSS variable for the font
  display: "swap", // Font-display behavior
});

export default customFont;

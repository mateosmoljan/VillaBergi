import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
      center: true,

      screens: {
        sm: "36rem",
        md: "42rem",
        lg: "56rem",
        xl: "72rem",
      },
    },
    extend: {
      padding: {
        "1/10": "10%",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontWeight: {
        titleBold: "var(--titleBold)",
        PRegular: "var(--PRegular)",
        Bold: "var(--Bold)",
        medium: "var(--medium)",
        ExtraBold: "var(--ExtraBold)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        arbutus: ["var(--font-arbutus)"],
      },
      colors: {
        background: "#001f3f",
        secondary_background: "#0a192f",
        surface: "#1e293b",
        text_primary: "#ffffff",
        text_secondary: "#cbd5e1",
        accent_primary: "#0ea5e9",
        accent_secondary: "#06b6d4",
        success: "#10b981",
        warning: "#f59e0b",
        brown: "#755B3E",
        darkbrown: "#54422e",
        yellow: "#B29600",
        light_blue: "#91D8F7",
        blue: "#0098DA",
        pink: "#cc3bb1",
        dark_yellow: "#857001",
        dark_blue_black: "#343a40",
        grey: "rgba(0, 0, 0, 0.6)",
        grey1: "#495057",
        grey2: "#e9ecef",
        grey3: "#6c757d",
      },
      inset: {
        "1/20": "5%",
      },
      letterSpacing: {
        widest: ".25em",
      },
    },
  },
  plugins: [],
};
export default config;

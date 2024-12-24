import { colors } from "./src/theme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontSize: {
      xs: "0.875rem",
      base: "1rem",
      sm: "1rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "1.875rem",
    },
    fontWeight: {
      light: "300",
      normal: "400",
      bold: "500",
      black: "700",
    },

    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "2rem",
        xl: "4rem",
        "2xl": "4rem",
      },
      screens: {
        "@screen 2xl": {
          min: "1200px",
        }
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      fontSize: {
        xs: [
          "12px",
          {
            lineHeight: "16.37px",
            fontWeight: "800",
          },
        ],
        sm: [
          "14px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        base: [
          "16px",
          {
            lineHeight: "21.82px",
            fontWeight: "800",
          },
        ],
        lg: [
          "20px",
          {
            lineHeight: "27.28px",
            fontWeight: "800px",
          },
        ],
        "2lg": [
          "24px",
          {
            lineHeight: "32.74px",
            fontWeight: "800",
          },
        ],
        "2xl": [
          "28px",
          {
            lineHeight: "38.19px",
            fontWeight: "800",
          },
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;

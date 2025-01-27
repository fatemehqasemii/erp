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
        darkGray: "#383838",
        charcoalBlack: "#272525",
        smokyBlack: "#121212",
        lightGray: "#A3A3A3",
        lightSilver: "#D0D0D0",
        dimGray: "#515151",
        white: "#FFFFFF",
        black: "#000000",
        charcoal: "#262626",
        pumpkinOrange: "#F29425",
        vibrantGreen: "#10A142",
        reddish: "#E54F53",
        scarletRed: "#ED3237",
        vividPurple: "#A601FF",
        ghostWhite: "#F8F9FD",
        cloudWhite: "#F2F2F2",
        charcoalBlue: "#172437",
        aliceBlue: "#F2F7FF",
        steelBlue: "#5584CE",
      },
      fontSize: {
        "body/1-Large": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        "body/2-normal": [
          "14px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        "body/3-Small": [
          "12px",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
        ],
        "heading/2": [
          "28px",
          {
            lineHeight: "38.19px",
            fontWeight: "800",
          },
        ],
        "heading/3": [
          "24px",
          {
            lineHeight: "32.74px",
            fontWeight: "800",
          },
        ],
        "heading/4": [
          "20px",
          {
            lineHeight: "27.28px",
            fontWeight: "800px",
          },
        ],
        "heading/5": [
          "16px",
          {
            lineHeight: "21.82px",
            fontWeight: "800",
          },
        ],
        "heading/6": [
          "14px",
          {
            lineHeight: "19.1px",
            fontWeight: "700",
          },
        ],
        "heading/7": [
          "12px",
          {
            lineHeight: "16.37px",
            fontWeight: "800",
          },
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;

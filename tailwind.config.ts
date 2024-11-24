import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          default: "#FEDE67",
          dark: "#fdce20",
        },
        secondary: {
          light: "#3C5F48",
          dark: "#2A4032",
        },
        accent: "#f7f7f7",
      },
      fontFamily: {
        kodchasan: ["var(--font-kodchasan)"],
        qwigley: ["var(--font-qwigley)"],
      },
    },
  },
  plugins: [],
}
export default config

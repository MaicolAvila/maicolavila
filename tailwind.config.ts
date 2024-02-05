import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      green: {
        1000: "#263E40",
        900: "#2D4D4F",
      },
      red: {
        1000: "#D52941",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        green: "0 0 0 3px rgba(17, 27, 28, 0.1)",
        "green-hv": "0 0 0 3px rgba(17, 27, 28, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;

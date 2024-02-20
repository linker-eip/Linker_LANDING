import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 25px 80px 8px rgb(0, 0, 0, 45%)'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blue: {
          100: "#003751",
          200: "#009BDF"
        },
        gray: {
          100: "#212529",
          200: "#646669",
          300: "ffffff7f"
        }
      }
    }
  },
  plugins: []
};
export default config;

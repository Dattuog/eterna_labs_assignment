import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        base: {
          900: "#07090d",
          800: "#0b0f14",
          700: "#0f131a",
          600: "#151a22",
        },
        surface: {
          900: "#0d1016",
          800: "#111520",
          700: "#151b26",
        },
        accent: {
          blue: "#4c82ff",
          green: "#16d37e",
          red: "#f26b7a",
          yellow: "#f5b041",
          purple: "#a78bfa",
          cyan: "#21d4fd",
        },
        text: {
          primary: "#f5f7ff",
          secondary: "#b1b6c6",
          muted: "#8a8fa3",
        },
        border: {
          subtle: "#1b1f2d",
          strong: "#2a3041",
        },
      },
      boxShadow: {
        card: "0 10px 40px rgba(0,0,0,0.35)",
        glow: "0 0 0 1px rgba(76,130,255,0.28)",
      },
      borderRadius: {
        xl: "16px",
        "2xl": "20px",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-400px 0" },
          "100%": { backgroundPosition: "400px 0" },
        },
        "flash-up": {
          "0%": { backgroundColor: "rgba(22, 211, 126, 0.28)" },
          "100%": { backgroundColor: "transparent" },
        },
        "flash-down": {
          "0%": { backgroundColor: "rgba(242, 107, 122, 0.22)" },
          "100%": { backgroundColor: "transparent" },
        },
      },
      animation: {
        shimmer: "shimmer 1.2s ease-in-out infinite",
        "flash-up": "flash-up 1.4s ease-out",
        "flash-down": "flash-down 1.4s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;

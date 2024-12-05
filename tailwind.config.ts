import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        motocross: {
          primary: "#ff6a00",
          "primary-content": "#ffffff",
          secondary: "#006f67",
          "secondary-content": "#ffffff",
          accent: "#ffcc00",
          "accent-content": "#212121",
          neutral: "#333333",
          "neutral-content": "#ffffff",
          "base-100": "#1e1e1e",
          "base-200": "#2a2a2a",
          "base-300": "#383838",
          "base-content": "#ffffff",
          info: "#00bcd4",
          "info-content": "#212121",
          success: "#4caf50",
          "success-content": "#ffffff",
          warning: "#ff9800",
          "warning-content": "#212121",
          error: "#f44336",
          "error-content": "#ffffff",
        },
      },
    ],
  },
} satisfies Config;

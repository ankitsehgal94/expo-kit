/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        border: "hsl(214 32% 91%)",
        "border-dark": "hsl(217 33% 17%)",
        input: "hsl(214 32% 91%)",
        "input-dark": "hsl(217 33% 17%)",
        ring: "hsl(222 84% 5%)",
        "ring-dark": "hsl(213 27% 84%)",
        background: "hsl(0 0% 100%)",
        "background-dark": "hsl(222 84% 5%)",
        foreground: "hsl(222 84% 5%)",
        "foreground-dark": "hsl(210 40% 98%)",
        primary: {
          DEFAULT: "hsl(210 100% 50%)",
          foreground: "hsl(0 0% 100%)",
        },
        secondary: {
          DEFAULT: "hsl(195 100% 54%)",
          foreground: "hsl(0 0% 100%)",
        },
        destructive: {
          DEFAULT: "hsl(0 84% 60%)",
          foreground: "hsl(0 0% 100%)",
        },
        muted: {
          DEFAULT: "hsl(210 40% 96%)",
          foreground: "hsl(215 16% 47%)",
          dark: "hsl(217 33% 17%)",
          "foreground-dark": "hsl(215 20% 65%)",
        },
        accent: {
          DEFAULT: "hsl(352 100% 58%)",
          foreground: "hsl(0 0% 100%)",
          dark: "hsl(217 33% 17%)",
        },
        popover: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(222 84% 5%)",
          dark: "hsl(222 84% 5%)",
          "foreground-dark": "hsl(210 40% 98%)",
        },
        card: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(222 84% 5%)",
          dark: "hsl(224 71% 4%)",
          "foreground-dark": "hsl(210 40% 98%)",
        },
      },
    },
  },
  plugins: [],
}
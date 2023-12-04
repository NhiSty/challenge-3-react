/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        glass:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
      },
      colors: {
        text: {
          DEFAULT: "hsl(140, 43%, 3%)",
          50: "hsl(136, 44%, 95%)",
          100: "hsl(140, 41%, 90%)",
          200: "hsl(140, 43%, 80%)",
          300: "hsl(140, 42%, 70%)",
          400: "hsl(140, 43%, 60%)",
          500: "hsl(140, 43%, 50%)",
          600: "hsl(140, 43%, 40%)",
          700: "hsl(140, 42%, 30%)",
          800: "hsl(140, 43%, 20%)",
          900: "hsl(140, 41%, 10%)",
          950: "hsl(142, 44%, 5%)",
        },
        background: {
          DEFAULT: "hsl(142, 27%, 92%)",
          50: "hsl(137, 28%, 95%)",
          100: "hsl(143, 25%, 90%)",
          200: "hsl(141, 27%, 80%)",
          300: "hsl(142, 27%, 70%)",
          400: "hsl(143, 27%, 60%)",
          500: "hsl(142, 27%, 50%)",
          600: "hsl(143, 27%, 40%)",
          700: "hsl(142, 27%, 30%)",
          800: "hsl(141, 27%, 20%)",
          900: "hsl(143, 25%, 10%)",
          950: "hsl(146, 28%, 5%)",
        },
        primary: {
          DEFAULT: "hsl(141, 38%, 54%)",
          50: "hsl(144, 38%, 95%)",
          100: "hsl(142, 37%, 90%)",
          200: "hsl(141, 37%, 80%)",
          300: "hsl(141, 39%, 70%)",
          400: "hsl(141, 38%, 60%)",
          500: "hsl(141, 38%, 50%)",
          600: "hsl(141, 38%, 40%)",
          700: "hsl(141, 39%, 30%)",
          800: "hsl(141, 37%, 20%)",
          900: "hsl(142, 37%, 10%)",
          950: "hsl(138, 38%, 5%)",
        },
        secondary: {
          DEFAULT: "hsl(253, 31%, 71%)",
          50: "hsl(255, 31%, 95%)",
          100: "hsl(252, 29%, 90%)",
          200: "hsl(253, 31%, 80%)",
          300: "hsl(253, 31%, 70%)",
          400: "hsl(253, 31%, 60%)",
          500: "hsl(253, 31%, 50%)",
          600: "hsl(253, 31%, 40%)",
          700: "hsl(253, 31%, 30%)",
          800: "hsl(253, 31%, 20%)",
          900: "hsl(252, 29%, 10%)",
          950: "hsl(255, 31%, 5%)",
        },
        accent: {
          DEFAULT: "hsl(45, 43%, 64%)",
          50: "hsl(44, 44%, 95%)",
          100: "hsl(46, 41%, 90%)",
          200: "hsl(45, 43%, 80%)",
          300: "hsl(45, 42%, 70%)",
          400: "hsl(45, 43%, 60%)",
          500: "hsl(45, 43%, 50%)",
          600: "hsl(45, 43%, 40%)",
          700: "hsl(45, 42%, 30%)",
          800: "hsl(45, 43%, 20%)",
          900: "hsl(46, 41%, 10%)",
          950: "hsl(44, 44%, 5%)",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};

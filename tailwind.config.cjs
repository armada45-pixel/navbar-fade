/** @type {import('tailwindcss').Config} */

// const withMT = require("@material-tailwind/react/utils/withMT")

module.exports =
// withMT(
{
  // daisyui: {
  //   themes: ["light", "dark"],
  // },
  // important: "#_app",
  important: true,
  // corePlugins: {
  //   preflight: false,
  // },
  darkMode: "class",
  content: [
    "./index.html", // react
    "./src/**/*.{js,ts,jsx,tsx}", // react
    // "./app/**/*.{js,ts,jsx,tsx}", // next
    // "./pages/**/*.{js,ts,jsx,tsx}", // next
    // "./components/**/*.{js,ts,jsx,tsx}", // next Using the app directory
    // "./src/**/*.{js,ts,jsx,tsx}", // next if using `src` directory:
    // "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // flowbite
    // "./node_modules/tw-elements/dist/js/**/*.js", // tw-elements
    // "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}", // @material-tailwind
    // "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}", // @material-tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // require("tw-elements/dist/plugin"),
    // require("daisyui"),
    // require("flowbite/plugin"),
    // require("@tailwindcss/forms"),
  ],
}
// )

const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};
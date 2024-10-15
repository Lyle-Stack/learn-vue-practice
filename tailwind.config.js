/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "jf-open-huninn": ["jf-open-huninn", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

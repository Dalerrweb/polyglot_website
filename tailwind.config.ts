import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      screens: {
         sm: "640px",
         // => @media (min-width: 640px) { ... }

         md: "768px",
         // => @media (min-width: 768px) { ... }

         lg: "1024px",
         // => @media (min-width: 1024px) { ... }

         xl: "1280px",
         // => @media (min-width: 1280px) { ... }

         "2xl": "1536px",
         // => @media (min-width: 1536px) { ... }

         "3xl": "1920px",
         // => @media (min-width: 1920px) { ... }
      },
      colors: {
         orange: "#EC8D18",
         blue: "#21209C",
         white: "#FFFFFF",
         black: "#000000",
         gray: "#D9D9D9",
      },
      extend: {},
   },
   plugins: [
      require('tailwindcss-animated')
    ],
};
export default config;

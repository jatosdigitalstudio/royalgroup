/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        text: ['var(--font-text)'],
        style: ['var(--font-style)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: "#F6EFE5",
        blue: "#1B3251"
      },
      backgroundImage: {
        sector1 : "/images/defence_security_01.jpg",
        sector2 : "/images/digital_transformation.jpg",
        sector3 : "/images/biotech_01.jpg",
        sector4 : "/images/sustainability_01.jpg",
        sector5 : "/images/lifestyle_03.jpg",
      }
    },
  },
  plugins: [],
};

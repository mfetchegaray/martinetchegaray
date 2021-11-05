module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ['Vollkorn', 'Serif'],
      sans: ['IBM Plex Sans', 'sans'],
      mono: ['IBM Plex Mono', 'sans'],
      condenced: ['IBM Plex Sans Condensed', 'sans'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
  ],

  daisyui: {
    themes: [
      {
        stnTheme: {
          // custom theme
          secondary: "#ea5234",
          "secondary-focus": "#d43616",
          "secondary-content": "#ffffff",
          primary: "#1867B6",
          "primary-focus": "#3d77b0",
          "primary-content": "#ffffff",
          // other colors
        },
      },
      "emerald", // and some pre-defined theme
    ],
  },
};

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    // add other paths as needed
  ],
  theme: {
    extend: {
      backgroundImage: {
        "body-pattern": "url('./bg.png')",
      },
    },
  },
  plugins: [
    // other plugins...
  ],
};

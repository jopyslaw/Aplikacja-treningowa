/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        image: "url('./Images/hp.jpg')",
        image1: "url('./Images/sports.jpg')",
        image2: "url('./Images/TrainCalculator.jpg')",
        woman: "url('./Images/woman.png')",
        man: "url('./Images/man.png')",
        user: "url('./Images/user.png')",
      }),
    },
  },
  plugins: [],
};

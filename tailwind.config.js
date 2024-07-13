/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      label: ["ImpactLabel", "sans-serif"],
    },
    extend: {
      colors: {
				"verdant-green": "#56966e",
				"verdant-orange": "#dc8c61",
				"verdant-red": "#c14d53",
				"verdant-blue": "#6e95bd",
				"verdant-purple": "#a56db1",
				"verdant-bg": "#ffffff",
				"verdant-bg-light": "#131313",
				"verdant-bg-light-2": "#1b1b1b",
				"verdant-bg-light-3": "#272727",
				"verdant-fg": "#000000",
				"verdant-fg-dark": "#000000",
				"verdant-fg-dark-2": "#000000",
				"verdant-fg-dark-3": "#000000"
			}
    },
  },
  plugins: [],
}


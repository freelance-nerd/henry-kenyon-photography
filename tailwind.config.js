/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      label: ["ImpactLabel", "sans-serif"],
    },
    extend: {
      colors: {
				"verdant-blue": "#6e95bd",
				"verdant-red": "#9f1212",
				"verdant-bg": "#faf2f2",
				"verdant-fg": "#402121",
			}
    },
  },
  plugins: [],
}


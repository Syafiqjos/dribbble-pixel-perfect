// tailwind.config.cjs
module.exports = {
	content: [
		"./public/**/*.html",
		"./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
	],
	theme: {
		extend: {
			colors: {
				"neutral-bg": "rgba(94, 101, 104, 0.7)",
				"neutral-shadow": "rgba(0, 0, 0, 0.48)",
				"neutral-dark": "#494949",
				"neutral-light-dark": "#8E8E8E",
				primary: "#2F3132",
				secondary: "#FFFFFF",
			},
		},
		fontFamily: {
			body: "'Montserrat', sans-serif",
		},
		gridTemplateAreas: {
			layout: ["header  preview", "main    preview"],
			"layout-mobile": ["header", "preview", "main"],
		},
		gridTemplateColumns: {
			layout: "46% auto",
			"layout-mobile": "100%",
		},
		gridTemplateRows: {
			layout: "max-content auto",
		},
	},
	plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};

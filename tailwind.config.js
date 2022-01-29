module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			animation: {
				"reverse-spin": "reverse-spin 1.2s ease-in-out infinite",
				"fade-in": "fade-in 1s ease-in-out",
				"fade-out": "fade-out .5s ease-in-out",
				"fade-back-up": "fade-back-up 1s ease-in-out"
			},
			keyframes: {
				"reverse-spin": {
					from: { transform: "rotate(360deg)" },
				},
				"fade-in": {
					from: { opacity: "0" },
					to: { opacity: "1" },
				},
				"fade-out": {
					from: { opacity: 1 },
					to: { opacity: 0 },
				},
				"fade-back-up": {
					from: {
						opacity: 1,
					},
					to: {
						opacity: 0,
						transform: 'translateY(-100px)'
					}
				}
			},
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
};

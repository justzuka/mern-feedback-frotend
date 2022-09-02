/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		screens: {
			ms: "640px",
			md: "768px",
			mdlg: "850px",
			lg: "1024px",
			xl: "1280px",
		},
		extend: {
			colors: {
				bgColor: "#f7f8fd",
				itemColor: "#ffffff",
				pinkButton: "#ae1feb",
				tagBgColor: "#f3f3ff",
				tagTextColor: "#8795dd",
				tagSelectedColor: "#4662e9",
				bgDarkBlue: "#373e68",
				bgButtonPink: "#ad1fec",
			},
		},
	},
	plugins: [],
};

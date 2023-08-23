/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			purpleBrown: "#231f20",
			eggShell: "#e8e4d2",
			darkPeach: "#e26961",
			purple: "#3f3cbb",
			midnight: "#121063",
			metal: "#565584",
			tahiti: "#3ab7bf",
			silver: "#ecebff",
			"bubble-gum": "#ff77e9",
			bermuda: "#78dcca",
			pinkJapan: "#DC9FB4",
		},
		fontFamily: {
			NotoSansJP: "Noto Sans JP",
			Mulish: "Mulish",
			Satisfy: "Satisfy",
			Sigmar: "Sigmar",
			Alegreya: "Alegreya"
		},
	},
	plugins: [],
};

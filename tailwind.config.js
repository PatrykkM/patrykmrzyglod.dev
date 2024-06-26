/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			keyframes: {
				shake: {
					"0%, 100%": { transform: "translateX(0)" },
					"10%, 30%, 50%, 70%, 90%": { transform: "translateX(-5px)" },
					"20%, 40%, 60%, 80%": { transform: "translateX(5px)" },
				},
			},
			animation: {
				shake: "shake 0.4s cubic-bezier(.36,.07,.19,.97) both",
			},
			zIndex: {
				9999: "9999",
			},
			fontFamily: {
				sans: ["Poppins", "serif"],
			},
			colors: {
				"main-dark": "#0A0F1A",
				"dynamic-menu": "#111725",
				"light-blue": "#2B5FDA",
				"Jobs-blue": "#203E83",
				"Grey-Wave": "#151924",
				"main-light": "#E5EAF5",
				"mian-text-light": "#0D0D0D",
				"light-mode-items": "#DAE0EF",
			},
			minWidth: {
				"314px": "314px",
				"1280px": "1280px",
			},
			width: {
				92: "22.5rem",
				112: "28rem",
				128: "32rem",
			},
			height: {
				18: "4.5rem",
			},
			margin: {
				18: "4.5rem",
				17: "4.25rem",
			},
		},
	},
	plugins: ["prettier-plugin-tailwindcss"],
};

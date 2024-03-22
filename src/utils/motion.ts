export const ContactformVariants = {
	offscreen: {
		x: -100,
		opacity: 0,
	},
	onscreen: {
		x: 0,
		opacity: 1,
		transition: {
			type: "tween",
			duration: 1,
		},
	},
};
export const Planet3DformVariants = {
	offscreen: {
		x: 100,
		opacity: 0,
	},
	onscreen: {
		x: 0,
		opacity: 1,
		transition: {
			type: "tween",
			duration: 1,
		},
	},
};

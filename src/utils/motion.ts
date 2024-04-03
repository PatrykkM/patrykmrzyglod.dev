export const contactformVariants = {
	offscreen: {
		x: -100,
		opacity: 0,
	},
	onscreen: {
		x: 0,
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 1,
		},
	},
};

export const projectVariants = {
	offscreen: {
		x: -100,
		opacity: 0,
	},
	onscreen: {
		x: 0,
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 0.8,
		},
	},
};

export const projectsHeaderVariants = {
	hidden: { opacity: 0, y: -50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

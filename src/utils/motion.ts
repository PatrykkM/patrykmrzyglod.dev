export const titleOfSectionVariants = {
  offscreen: { opacity: 0, y: -50 },
  onscreen: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const contactformVariants = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

export const projectVariants = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

export const projectsHeaderVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const singleTechnologyVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
};
export const techsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.2 },
  },
};

export const workExperienceMobileVariants = {
  offscreen: { x: 100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.5 },
  },
};

export const helloSectionTitleVariants = {
  offscreen: { y: -50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
  },
};

export const workExperienceDesktopDescribeVariants = {
  leftVariant: {
    offscreen: { opacity: 0, x: -100 },
    onscreen: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.2 } },
  },
  rightVariant: {
    offscreen: { opacity: 0, x: 100 },
    onscreen: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.2 } },
  },
};

export const logoVariants = {
  offscreen: { opacity: 0, scale: 0 },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 20,
      duration: 0.3,
      bounce: 0.25,
    },
  },
};

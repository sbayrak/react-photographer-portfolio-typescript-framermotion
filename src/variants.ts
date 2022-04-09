import { Variants } from 'framer-motion';

export const navbarFadeIn: Variants = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 1,
    },
  },
};

export const navbarIconSvg: Variants = {
  initial: {
    rotate: 0,
    y: 20,
    opacity: 0,
  },
  animate: {
    rotate: -90,
    y: 0,
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      delay: 1.5,
      delayChildren: 1,
      duration: 1,
    },
  },
};

export const navbarIconPath: Variants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },

  exit: {
    opacity: 0,
    origin: 0,
  },
};

export const staggerVariant: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const navbarLi: Variants = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};

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

export const liItem = (item: string): Variants => {
  return {
    initial: {
      opacity: 0,
      y: item === 'navbar' ? -10 : -30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
      },
    },
    exit: {
      opacity: 0,
    },
  };
};

export const welcomerImgContainer: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 3,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const welcomerBackdrop: Variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
};

export const welcomerImg = (item: string): Variants => {
  return {
    initial: {
      scale: item === 'img' ? 0.99 : item === 'men' ? 1.1 : 1,
    },
    animate: {
      scale: item === 'img' ? 1 : item === 'men' ? 1 : 1.05,
      transition: {
        duration: 3,
      },
    },
  };
};

export const welcomerText = (type: string): Variants => {
  return {
    initial: {
      // x: type === 'topbottom' ? -10 : -20,
      opacity: 0,
    },
    animate: {
      // x: 0,
      opacity: 1,
      transition: {
        duration: type === 'topbottom' ? 1 : 6,
      },
    },
  };
};

export const welcomerTextMid: Variants = {
  initial: {
    y: 250,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

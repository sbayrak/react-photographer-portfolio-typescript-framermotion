import { motion } from 'framer-motion';
import { navbarIconPath, staggerVariant } from './variants';

export const Menu = () => {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      variants={staggerVariant}
      initial='initial'
      animate='animate'
      key={2}
    >
      <motion.line
        variants={navbarIconPath}
        initial='initial'
        animate='animate'
        exit='exit'
        x1='3'
        y1='12'
        x2='21'
        y2='12'
      ></motion.line>
      <motion.line
        variants={navbarIconPath}
        initial='initial'
        animate='animate'
        exit='exit'
        x1='3'
        y1='6'
        x2='21'
        y2='6'
      ></motion.line>
      <motion.line
        variants={navbarIconPath}
        initial='initial'
        animate='animate'
        exit='exit'
        x1='3'
        y1='18'
        x2='21'
        y2='18'
      ></motion.line>
    </motion.svg>
  );
};

export const Close = () => {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      key={1}
    >
      <motion.line
        variants={navbarIconPath}
        initial='initial'
        animate='animate'
        exit='exit'
        x1='18'
        y1='6'
        x2='6'
        y2='18'
      ></motion.line>
      <motion.line
        variants={navbarIconPath}
        initial='initial'
        animate='animate'
        exit='exit'
        x1='6'
        y1='6'
        x2='18'
        y2='18'
      ></motion.line>
    </motion.svg>
  );
};

export const ArrowRight = () => {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <motion.line
        variants={navbarIconPath}
        initial='initial'
        animate='animate'
        x1='5'
        y1='12'
        x2='19'
        y2='12'
      ></motion.line>
      <motion.polyline
        variants={navbarIconPath}
        initial='initial'
        animate='animate'
        points='12 5 19 12 12 19'
      ></motion.polyline>
    </motion.svg>
  );
};

export const Camera = () => {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <motion.path
        variants={navbarIconPath}
        initial='initial'
        animate='animate'
        d='M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z'
      ></motion.path>
      <motion.circle
        variants={navbarIconPath}
        initial='initial'
        animate='animate'
        cx='12'
        cy='13'
        r='4'
      ></motion.circle>
    </motion.svg>
  );
};

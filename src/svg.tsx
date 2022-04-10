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

export const facebook = () => {
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
      <motion.path
        variants={navbarIconPath}
        initial='initial'
        animate='animate'
        d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'
      ></motion.path>
    </motion.svg>
  );
};

export const instagram = () => {
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
      <motion.rect
        variants={navbarIconPath}
        initial='initial'
        animate='animate'
        x='2'
        y='2'
        width='20'
        height='20'
        rx='5'
        ry='5'
      ></motion.rect>
      <motion.path
        variants={navbarIconPath}
        initial='initial'
        animate='animate'
        d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'
      ></motion.path>
      <motion.line
        variants={navbarIconPath}
        initial='initial'
        animate='animate'
        x1='17.5'
        y1='6.5'
        x2='17.51'
        y2='6.5'
      ></motion.line>
    </motion.svg>
  );
};

export const twitter = () => {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <motion.path
        variants={navbarIconPath}
        initial='initial'
        animate='animate'
        d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'
      ></motion.path>
    </motion.svg>
  );
};

export const dribble = () => {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <motion.circle
        variants={navbarIconPath}
        initial='initial'
        animate='animate'
        cx='12'
        cy='12'
        r='10'
      ></motion.circle>
      <motion.path
        variants={navbarIconPath}
        initial='initial'
        animate='animate'
        d='M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32'
      ></motion.path>
    </motion.svg>
  );
};

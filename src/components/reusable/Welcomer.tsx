import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import {
  liItem,
  staggerVariant,
  welcomerBackdrop,
  welcomerImg,
  welcomerText,
  welcomerTextMid,
} from '../../variants';
import Button from './Button';
import { dribble, facebook, instagram, twitter } from '../../svg';

const Welcomer = () => {
  const { scrollYProgress } = useViewportScroll();
  const parallax = useTransform(scrollYProgress, [0, 1], [0, 75]);
  const parallax2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const parallaxMountain = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <div className='welcomer-container'>
      <div className='text'>
        <div className='container-lg'>
          <div className='text__mid'>
            <motion.span
              className='text__title'
              variants={welcomerTextMid}
              initial='initial'
              animate='animate'
            >
              moments.
            </motion.span>
          </div>
          <div className='text__bottom'>
            <motion.div
              className='text__desc'
              variants={staggerVariant}
              initial='initial'
              animate='animate'
            >
              <motion.span
                className='text__span'
                variants={welcomerText('topbottom')}
              >
                WE TAKE
              </motion.span>
              <motion.span
                className='text__span text__span--active'
                variants={welcomerText('img')}
              >
                IMPORTANT
              </motion.span>
              <motion.span
                className='text__span'
                variants={welcomerText('topbottom')}
              >
                MOMENTS FOR YOU
              </motion.span>
            </motion.div>

            <motion.ul
              className='text__list'
              variants={staggerVariant}
              initial='initial'
              animate='animate'
            >
              <motion.li className='text__item' variants={liItem('welcomer')}>
                <a href='#!' className='text__link'>
                  {facebook()}
                </a>
              </motion.li>
              <motion.li className='text__item' variants={liItem('welcomer')}>
                <a href='#!' className='text__link'>
                  {instagram()}
                </a>
              </motion.li>
              <motion.li className='text__item' variants={liItem('welcomer')}>
                <a href='#!' className='text__link'>
                  {twitter()}
                </a>
              </motion.li>
              <motion.li className='text__item' variants={liItem('welcomer')}>
                <a href='#!' className='text__link'>
                  {dribble()}
                </a>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </div>
      <motion.div
        className='img-backdrop'
        variants={welcomerBackdrop}
        initial='initial'
        animate='animate'
      ></motion.div>

      <motion.div
        className='img-container'
        variants={staggerVariant}
        initial='initial'
        animate='animate'
      >
        <motion.img
          id='img-welcomer'
          src='./Frame3.png'
          alt=''
          variants={welcomerImg('img')}
          initial='initial'
          animate='animate'
          style={{ translateY: parallax }}
        />

        <motion.img
          id='mountain'
          src='./mountain2.png'
          alt=''
          variants={welcomerImg('mountain')}
          initial='initial'
          animate='animate'
          style={{ translateX: parallaxMountain, translateY: parallax }}
        />
        <motion.img
          id='men'
          src='./men2.png'
          alt=''
          variants={welcomerImg('men')}
          initial='initial'
          animate='animate'
          style={{ translateY: parallax2 }}
        />
      </motion.div>
    </div>
  );
};

export default Welcomer;

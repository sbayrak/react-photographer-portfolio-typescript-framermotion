import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { staggerVariant, welcomerBackdrop, welcomerImg } from '../../variants';
import Button from './Button';
import { dribble, facebook, instagram, twitter } from '../../svg';

const Welcomer = () => {
  const { scrollYProgress } = useViewportScroll();
  const parallax = useTransform(scrollYProgress, [0, 1], [0, 75]);
  const parallax2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const parallaxMountain = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <div className='welcomer-container'>
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

      {/* <div className="text-container">
        <div className="text-top">
            <span>WE TAKE</span>
            <span>IMPORTANT</span>
            <span>MOMENTS FOR YOU</span>
        </div>
        <div className="text-bottom">
            <Button />
            <ul>
                <li>{facebook}</li>
                <li>{instagram}</li>
                <li>{twitter}</li>
                <li>{dribble}</li>
            </ul>
        </div>


      </div> */}
    </div>
  );
};

export default Welcomer;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AnimatePresence,
  motion,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import { navbarFadeIn, navbarLi, staggerVariant } from '../../variants';
import { ArrowRight, Camera, Close, Menu } from '../../svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [border, setBorder] = useState(false);
  const [backdropFilter, setBackdropFilter] = useState(false);
  const { scrollYProgress, scrollY } = useViewportScroll();
  // const heightChange = useTransform(scrollYProgress, [0, 1], ['10vh', '11vh']);
  // const backdropFilter = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   ['blur(0px)', 'blur(8px)']
  // );

  useEffect(() => {
    const borderBottomFunction = () => {
      if (scrollY.get() > 50) {
        setBorder(true);
        setBackdropFilter(true);
      } else if (scrollY.get() <= 50) {
        setBackdropFilter(false);
        setBorder(false);
      }
    };
    document.addEventListener('scroll', borderBottomFunction);

    console.log(backdropFilter);

    return () => document.removeEventListener('scroll', borderBottomFunction);
  }, [scrollY.get()]);

  return (
    <motion.div
      className='navbar'
      style={{
        transition: '0.8s ease-in-out',
        borderBottom: border
          ? `1px solid #404252`
          : '1px solid rgba(0,0,0,0.0)',
        backdropFilter: backdropFilter ? 'blur(8px)' : 'blur(0px)',
      }}
    >
      <motion.div
        className='n-container container-lg'
        // style={{
        //   height: heightChange,
        // }}
      >
        <div className='n-left'>
          <Link to='/'>
            <Camera />

            <motion.span
              className='n-title'
              variants={navbarFadeIn}
              initial='initial'
              animate='animate'
            >
              sbstudio.
            </motion.span>
          </Link>
        </div>

        <div className='n-right'>
          <motion.ul
            variants={staggerVariant}
            initial='initial'
            animate='animate'
          >
            <motion.li variants={navbarLi}>
              <Link to='/'>SERVICES</Link>
            </motion.li>
            <motion.li variants={navbarLi}>
              <Link to='/'>ABOUT</Link>
            </motion.li>
            <motion.li variants={navbarLi}>
              <Link to='/'>CONTACT</Link>
            </motion.li>
          </motion.ul>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className='mobile-menu'
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                exit={{ x: '100vw' }}
                transition={{ duration: 1, delay: 0.5, type: 'spring' }}
              >
                <motion.ul
                  variants={staggerVariant}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                >
                  <motion.li variants={navbarLi}>
                    <Link to='/'>
                      <ArrowRight /> SERVICES
                    </Link>
                  </motion.li>
                  <motion.li variants={navbarLi}>
                    <Link to='/'>
                      <ArrowRight /> ABOUT
                    </Link>
                  </motion.li>
                  <motion.li variants={navbarLi}>
                    <Link to='/'>
                      <ArrowRight /> CONTACT
                    </Link>
                  </motion.li>
                </motion.ul>
                <div className='container-lg'>
                  <motion.div
                    variants={staggerVariant}
                    initial='initial'
                    animate='animate'
                    className='mobile-contact'
                  >
                    <motion.span variants={navbarLi} id='touch'>
                      Get in touch
                    </motion.span>
                    <motion.span variants={navbarLi} id='mail'>
                      <a href='mailto:info@sbstudio.com'>info@sbstudio.com</a>
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className='menu-svg' onClick={() => setMenuOpen(!menuOpen)}>
            <AnimatePresence exitBeforeEnter>
              {menuOpen ? <Close /> : <Menu />}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;

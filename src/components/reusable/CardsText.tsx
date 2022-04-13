import React from 'react';
import { motion } from 'framer-motion';
import { cardTextImgsVariant, cardTextImgsVariantY } from '../../variants';

const CardsText = () => {
  return (
    <div className='cards'>
      <div className='cards__wrapper'>
        <div className='cards__imgs'>
          <motion.img
            variants={cardTextImgsVariant}
            initial='initial'
            whileInView='whileInView'
            src='/card1.jpg'
            alt='#'
            className='cards__img'
          />
          <motion.img
            variants={cardTextImgsVariantY('bottom')}
            initial='initial'
            whileInView='whileInView'
            src='/card2.jpg'
            alt='#'
            className='cards__img'
            id='card2'
          />
          <motion.img
            variants={cardTextImgsVariantY('top')}
            initial='initial'
            whileInView='whileInView'
            src='/card3.jpg'
            alt='#'
            className='cards__img'
            id='card3'
          />
          <motion.img
            variants={cardTextImgsVariant}
            initial='initial'
            whileInView='whileInView'
            src='/card4.jpg'
            alt='#'
            className='cards__img'
          />
        </div>
        <span className='cards__title'>moments.</span>
        <p className='cards__text'>
          Being a photographer is a journey that you learn a lot. This interest
          of mine starting with taking a picture of things around me. Literally,
          most of the objects I see, I tried to take better pictures with every
          shot. Day by day I realized my passion about photographing and
          travelling.
        </p>
      </div>
    </div>
  );
};

export default CardsText;

import React from 'react';
import CardsText from '../reusable/CardsText';
import Welcomer from '../reusable/Welcomer';

const Home = () => {
  return (
    <>
      <Welcomer />
      {/* <div style={{ height: '100vh', width: '100%' }}></div> */}
      <CardsText />
    </>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  text: string;
}

const Button = () => {
  return (
    <Link to='/' className='btn-link'>
      <span className='btn-text'>Contact</span>
    </Link>
  );
};

export default Button;

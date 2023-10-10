import React from 'react';

import { styles } from '../styles';
import { logo } from '../assets';

const Footer = () => {
  return (
    <div className={`${styles.paddingX} w-full flex justify-center items-center py-4 bg-peacockGreen drop-shadow-lg`}>
      <div className='w-full flex justify-center items-center max-w-7xl mx-auto'>
        <img src={logo} alt='logo' className='w-10 h-10 object-contain mr-4' />
        <p className='text-primary text-[16px] font-bold'>
          Built In 2023.
        </p>
      </div>
    </div>
  )
}

export default Footer;

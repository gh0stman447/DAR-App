import React from 'react';
import Dish from './Dish';

const RecepesBlock = () => {
  return (
    <div className='w-full bg-light-grey '>
      <div className='h-14 bg-white flex gap-3 text-[20px] font-medium items-center'>
        Найденные рецепты <span className='text-[14px] font-normal opacity-45'>229</span>
      </div>
      <div className='flex flex-wrap justify-between gap-2'>
        <Dish />
        <Dish />
        <Dish />
        <Dish />
        <Dish />
        <Dish />
        <Dish />
        <Dish />
        <Dish />
      </div>
    </div>
  );
};

export default RecepesBlock;

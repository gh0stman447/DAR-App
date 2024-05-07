import React, { useEffect, useState } from 'react';
import Dish from './Dish';
import {} from 'react-redux';
import { useAppDispatch, useAppSelector } from '../hooks';
import { STATUS } from '../constants/status';
import { Spinner } from '@radix-ui/themes';

const RecipesBlock = () => {
  const { filteredRecipes, status } = useAppSelector((state) => state.recipes);

  if (status === STATUS.loading) return <Spinner size={'3'} />;

  return (
    <div className='w-full flex flex-col gap-3 bg-light-grey'>
      <div className='h-14 bg-white flex gap-3 text-[20px] font-medium items-center py-4 px-6'>
        Найденные рецепты{' '}
        <span className='text-[14px] font-normal opacity-45 mt-[3px]'>
          {filteredRecipes.length}
        </span>
      </div>
      <div className='flex flex-wrap justify-between gap-2'>
        {filteredRecipes.map((recipe) => (
          <Dish key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipesBlock;

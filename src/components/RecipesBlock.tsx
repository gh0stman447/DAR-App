import React, { useEffect, useState } from 'react';
import Dish from './Dish';
import {} from 'react-redux';
import { STATUS } from '../constants/status';
import { Spinner } from '@radix-ui/themes';
import { useAppSelector } from '../hooks';

const RecipesBlock = () => {
  const { filteredRecipes, status } = useAppSelector((state) => state.recipes);

  if (status === STATUS.loading) return <Spinner size={'3'} />;

  return (
    <div className='w-full flex flex-col bg-light-grey gap-3'>
      <div className='h-14 bg-white flex gap-3 text-[20px] font-medium items-center py-4 px-6'>
        Найденные рецепты{' '}
        <span className='text-[14px] font-normal opacity-45 mt-[3px]'>
          {filteredRecipes.length}
        </span>
      </div>
      <div className='2xl:grid 2xl:grid-cols-2 3xl:flex-wrap 4xl:flex gap-3 px-3 justify-center'>
        {filteredRecipes.map((recipe) => (
          <Dish key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipesBlock;

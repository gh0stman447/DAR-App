import React, { useEffect, useState } from 'react';
import Dish from './Dish';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../hook';
import { STATUS } from '../constants/status';
import { getRecipesListAction } from '../state/recipes/recipesSlice';

const RecepesBlock = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getRecipesListAction());
  }, []);

  const { recipesList, status } = useAppSelector((state) => state.recipes);

  if (status === STATUS.loading) return <div>Loading...</div>;
  return (
    <div className='w-full bg-light-grey '>
      <div className='h-14 bg-white flex gap-3 text-[20px] font-medium items-center'>
        Найденные рецепты{' '}
        <span className='text-[14px] font-normal opacity-45'>{recipesList.recipes.length}</span>
      </div>
      <div className='flex flex-wrap justify-between gap-2'>
        {recipesList.recipes.map((recipe) => (
          <Dish recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecepesBlock;

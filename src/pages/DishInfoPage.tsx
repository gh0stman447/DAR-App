import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useAppDispatch, useAppSelector } from '../hooks';
import { STATUS } from '../constants/status';
import { Spinner } from '@radix-ui/themes';
import { getRecipesListAction } from '../state/recipes/recipesSlice';

// import InfoBlock from '../components/InfoBlock';

// const dishInfo = {
//   cuisine: 'Европейская',
//   tags: '#Выпечка',
//   calories: { value: '444 ккал', weight: '100 грамм' },
//   servings: 4,
//   description:
//     'Традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепешки, выпекаемой с уложенной сверху начинкой из томатного соуса, сыра и зачастую других ингредиентов, таких как мясо, овощи, грибы и прочие продукты. Небольшую пиццу иногда называют пиццеттой.',
// };

const DishInfoPage = () => {
  const { id } = useParams();
  const { recipesList, status } = useAppSelector((state) => state.recipes);

  if (status === STATUS.loading) return <Spinner size={'3'} />;

  const recipe = recipesList.recipes.find((recipe) => recipe.id.toString() === id);
  if (!recipe) return <div>Рецепт не найден:(</div>;

  return (
    <div className='flex flex-col gap-y-4 bg-grey'>
      <Header title={recipe.name} />
      <div className='flex gap-x-4'>
        <div className='flex flex-col gap-3 max-w-[465px] w-full bg-grey'>
          {/* {Object.entries(dishInfo).map(([title, info], index) => (
            <InfoBlock key={index} title={title} info={info} />
          ))} */}
          <div className='divide-y bg-white'>
            <div className='py-4 px-6 font-medium text-[16px]'>Кухня</div>
            <div className='py-6 px-6'>{recipe.cuisine}</div>
          </div>
          <div className='divide-y bg-white'>
            <div className='py-4 px-6 font-medium text-[16px]'>Теги</div>
            <div className='py-6 px-6 opacity-45'>
              {recipe.tags.map((tag) => (
                <span key={tag} className='mr-2'>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className='divide-y bg-white'>
            <div className='py-4 px-6 font-medium text-[16px]'>Калорийность</div>
            <div className='py-6 px-6 flex flex-col gap-2'>
              <span>{recipe.caloriesPerServing}</span>
              <span className='opacity-45'>100 грамм</span>
            </div>
          </div>
          <div className='divide-y bg-white'>
            <div className='py-4 px-6 font-medium text-[16px]'>Количество порций</div>
            <div className='py-6 px-6 text-[20px] font-bold'>{recipe.servings}</div>
          </div>
          <div className='divide-y bg-white flex-grow'>
            <div className='py-4 px-6 font-medium text-[16px]'>Описание</div>
            <div className='py-6 px-6 opacity-45'>
              <p>
                Традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки,
                выпекаемой с уложенной сверху начинкой из томатного соуса, сыра и зачастую других
                ингредиентов, таких как мясо, овощи, грибы и прочие продукты. Небольшую пиццу иногда
                называют пиццеттой.
              </p>
            </div>
          </div>
        </div>
        <div className='max-w-[465px] w-full bg-grey flex flex-col gap-3'>
          <div className='divide-y bg-white'>
            <div className='py-4 px-6 font-medium text-[16px]'>Общее время приготовления</div>
            <div className='py-6 px-6'>{recipe.cookTimeMinutes + recipe.prepTimeMinutes} минут</div>
          </div>
          <div className='bg-white flex-grow'>
            <div className='divide-y bg-white'>
              <div className='py-4 px-6 font-medium text-[16px]'>Инструкции по приготовлению</div>
              <div className='flex flex-col gap-5 pl-12 py-6 px-6'>
                {recipe.instructions.map((step) => (
                  <p
                    key={step}
                    className='relative before:content-[""] before:block before:w-2 before:h-2 before:absolute before:top-2 before:-left-6 before:rounded-full before:border-[2px] before:border-blue'
                  >
                    {step}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='bg-light-grey w-full flex flex-col gap-3'>
          <div className='flex-grow p-3'>
            <img src={recipe.image} alt={recipe.name} />
          </div>
          <div className='h-14 flex items-center  justify-center py-3 gap-2'>
            <button className='p-[10px] bg-white border-2 border-grey rounded-md hover:bg-light-grey'>
              <ChevronLeftIcon />
            </button>
            <button className='p-[10px] bg-white border-2 border-grey rounded-md hover:bg-light-grey'>
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishInfoPage;

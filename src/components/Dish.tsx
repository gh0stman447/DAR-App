import { TimerIcon, StarIcon, StarFilledIcon } from '@radix-ui/react-icons';
import { FC } from 'react';
import { Recipe } from '../state/recipes/recipesSlice';

interface DishProps {
  recipe: Recipe;
}

const Dish: FC<DishProps> = ({ recipe }) => {
  return (
    <div className='flex bg-white max-w-[452px]'>
      <div>
        <div className='font-medium text-[16px] px-6 py-[22px] text-center '>{recipe.name}</div>
        <div className='bg-[#fafafa] w-[226px] h-[294px]'>
          <img src={recipe.image} alt={recipe.name} />
        </div>
      </div>
      <div className='flex flex-col gap-2 p-6'>
        <div className='text-[10px] opacity-45'>
          Традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки, выпекаемой с
          уложенной сверху начинкой из томатного соуса, сыра и зачастую других ингредиентов, таких
          как мясо, овощи, грибы и прочие продукты. Небольшую пиццу иногда называют пиццеттой.
        </div>
        <div className='flex flex-col gap-2 text-[12px]'>
          <div className='flex gap-2 items-center'>
            <TimerIcon />
            <span> {recipe.cookTimeMinutes}</span>
          </div>
          <div className='flex gap-2 items-center'>
            Cложность: {recipe.difficulty}
            <StarFilledIcon /> <StarIcon /> <StarIcon />
          </div>
          <div>{recipe.cuisine}</div>
          <div>{recipe.mealType.map((type) => type)}</div>
        </div>
      </div>
    </div>
  );
};

export default Dish;

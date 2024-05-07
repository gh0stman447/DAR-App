import { TimerIcon, StarIcon, StarFilledIcon } from '@radix-ui/react-icons';
import { FC } from 'react';
import { Recipe } from '../state/recipes/recipesSlice';
import { Link } from 'react-router-dom';

interface DishProps {
  recipe: Recipe;
}

const Dish: FC<DishProps> = ({ recipe }) => {
  return (
    <Link to={`/dish/${recipe.id}`}>
      <div className='flex bg-white max-w-[452px]'>
        <div>
          <div className='font-medium text-[16px] px-6 py-[22px] text-center '>{recipe.name}</div>
          <div className='bg-[#fafafa] w-[200px]'>
            <img src={recipe.image} alt={recipe.name} />
          </div>
        </div>
        <div className='flex flex-col gap-2 p-6'>
          <div className='text-[10px] opacity-45'>
            Традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки, выпекаемой
            с уложенной сверху начинкой из томатного соуса, сыра и зачастую других ингредиентов,
            таких как мясо, овощи, грибы и прочие продукты. Небольшую пиццу иногда
            называют пиццеттой.
          </div>
          <div className='flex flex-col gap-2 text-[12px]'>
            <div className='flex gap-2 items-center'>
              <TimerIcon />
              <span> {recipe.cookTimeMinutes} минут</span>
            </div>
            <div className='flex gap-2 items-center'>
              Cложность: {recipe.difficulty}
              <StarFilledIcon /> <StarIcon /> <StarIcon />
            </div>
            <div>{recipe.cuisine}</div>

            <div className='flex gap-1'>
              {recipe.mealType.map((type, index) => (
                <span>
                  {type}
                  {index !== recipe.mealType.length - 1 && ','}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Dish;

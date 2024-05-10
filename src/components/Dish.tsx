import { TimerIcon, StarIcon, StarFilledIcon } from '@radix-ui/react-icons';
import { FC } from 'react';
import { Recipe } from '../state/recipes/recipesSlice';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks';

interface DishProps {
  recipe: Recipe;
}

const Dish: FC<DishProps> = ({ recipe }) => {
  const difficulties = useAppSelector((state) => state.recipes.filters.difficulty.avaible);
  const difficultyIndex = difficulties.indexOf(recipe.difficulty);

  return (
    <Link to={`/dish/${recipe.id}`}>
      <div className='mb-3 2xl:mb-0 flex bg-white 4xl:w-[450px] lg:h-[450px] hover:shadow-black hover:shadow-2xl transition-all hover:scale-105 duration-200'>
        <div className='flex flex-col'>
          <div className='font-medium text-[16px] px-6 py-[22px] text-center'>{recipe.name}</div>
          <div className='bg-[#fafafa] grow'>
            <img
              src={recipe.image}
              alt={recipe.name}
              className='max-w-[140px] md:max-w-[220px] h-full object-cover'
            />
          </div>
        </div>
        <div className='flex flex-col gap-2 p-6'>
          <div className='text-[10px] opacity-45'>{recipe.instructions}</div>
          <div className='flex flex-col gap-2 text-[12px]'>
            <div className='flex gap-2 items-center'>
              <TimerIcon />
              <span> {recipe.cookTimeMinutes} минут</span>
            </div>
            <div className='flex gap-2 items-center'>
              Cложность:
              {[0, 1, 2].map((index) =>
                index <= difficultyIndex ? <StarFilledIcon /> : <StarIcon />,
              )}
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

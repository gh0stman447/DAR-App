import { StarFilledIcon, StarIcon, TimerIcon } from '@radix-ui/react-icons';
import { FC } from 'react';
import { useAppSelector } from '../hooks';
import { Recipe } from '../lib/types';

interface RecipeInfoProps {
  recipe: Recipe;
}
const RecipeInfo: FC<RecipeInfoProps> = ({ recipe }) => {
  const difficulties = useAppSelector((state) => state.recipes.filters.difficulty.avaible);
  const difficultyIndex = difficulties.indexOf(recipe.difficulty);

  return (
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
            index <= difficultyIndex ? <StarFilledIcon key={index} /> : <StarIcon key={index} />,
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
  );
};

export default RecipeInfo;

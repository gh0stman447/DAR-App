import { FC } from 'react';
import { Link } from 'react-router-dom';
import RecipeInfo from './RecipeInfo';
import RecipeImage from './RecipeImage';
import { Recipe } from '../lib/types';

interface RecipeItemProps {
  recipe: Recipe;
}

const RecipeItem: FC<RecipeItemProps> = ({ recipe }) => {
  return (
    <Link to={`/dish/${recipe.id}`}>
      <div className='mb-3 2xl:mb-0 flex bg-white 4xl:w-[452px] lg:h-[380px] hover:shadow-black hover:shadow-2xl transition-all hover:scale-105 duration-200'>
        <div className='flex flex-col'>
          <div className='font-medium text-[16px] px-6 py-[22px] text-center'>{recipe.name}</div>
          <RecipeImage recipe={recipe} />
        </div>
        <RecipeInfo recipe={recipe} />
      </div>
    </Link>
  );
};

export default RecipeItem;

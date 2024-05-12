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
    <Link to={`/recipe/${recipe.id}`} className='h-fit'>
      <div className='mb-3 2xl:mb-0 flex bg-white 4xl:max-w-[452px] lg:max-h-[354px] hover:shadow-black hover:shadow-2xl transition-all hover:scale-105 duration-200'>
        <div className='flex flex-col max-w-[120px] sm:max-w-[200px] md:max-w-[226px]'>
          <div className='font-medium text-[16px] px-6 py-[22px] h-fit truncate'>{recipe.name}</div>
          <RecipeImage recipe={recipe} />
        </div>
        <RecipeInfo recipe={recipe} />
      </div>
    </Link>
  );
};

export default RecipeItem;

import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Recipe } from '../lib/types';

interface RecipeNavigationButtonsProps {
  id: string;
  recipesList: {
    recipes: Recipe[];
  };
}
const RecipeNavigationButtons: FC<RecipeNavigationButtonsProps> = ({ id, recipesList }) => {
  const navigate = useNavigate();
  const recipeIndex = recipesList.recipes.findIndex((recipe) => recipe.id.toString() === id);

  return (
    <div className='h-14 flex items-center justify-center py-3 gap-2'>
      <button
        className='p-[10px] bg-white border-2 border-grey rounded-md hover:bg-light-grey hover:scale-125 duration-300'
        onClick={() =>
          recipeIndex !== 0 && navigate(`/recipe/${recipesList.recipes[recipeIndex - 1].id}`)
        }
        disabled={recipeIndex === 0}
      >
        <ChevronLeftIcon />
      </button>
      <button
        className='p-[10px] bg-white border-2 border-grey rounded-md hover:bg-light-grey hover:scale-125 duration-300'
        onClick={() =>
          recipeIndex !== recipesList.recipes.length - 1 &&
          navigate(`/recipe/${recipesList.recipes[recipeIndex + 1].id}`)
        }
        disabled={recipeIndex === recipesList.recipes.length - 1}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default RecipeNavigationButtons;

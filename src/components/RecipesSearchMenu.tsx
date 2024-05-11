import { Spinner } from '@radix-ui/themes';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../lib/types';

interface RecipesSearchMenuProps {
  isLoading: boolean;
  searchedRecipes: Recipe[];
  setSearchRecipe: React.Dispatch<React.SetStateAction<string>>;
}
const RecipesSearchMenu: FC<RecipesSearchMenuProps> = ({
  isLoading,
  searchedRecipes,
  setSearchRecipe,
}) => {
  return (
    <div className='flex flex-col w-[300px] divide-y divide-black/15 gap-2 border border-black/25 bg-light-grey absolute max-h-[200px] overflow-y-scroll z-20 font-light text-[18px]'>
      {isLoading ? (
        <span className='p-4 '>
          <Spinner size={'3'} />
        </span>
      ) : searchedRecipes.length > 0 ? (
        searchedRecipes.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
            <div className='flex gap-2 px-2 py-2 items-center' onClick={() => setSearchRecipe('')}>
              <div className='max-w-[70px]'>
                <img src={recipe.image} alt={recipe.name} className='' />
              </div>
              <div className='truncate'>{recipe.name}</div>
            </div>
          </Link>
        ))
      ) : (
        <div className='p-2'>Not found recipe</div>
      )}
    </div>
  );
};

export default RecipesSearchMenu;

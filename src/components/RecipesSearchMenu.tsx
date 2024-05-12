import { Spinner } from '@radix-ui/themes';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../lib/types';
import SearchedRecipeInput from './SearchedRecipeInput';

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
    <div className='flex flex-col w-[300px] divide-y divide-black/15 border border-black/25 bg-light-grey absolute max-h-[200px] overflow-y-scroll z-20 font-light text-[18px] rounded-md'>
      {isLoading ? (
        <span className='p-4 '>
          <Spinner size={'3'} />
        </span>
      ) : searchedRecipes.length > 0 ? (
        searchedRecipes.map((recipe) => (
          <SearchedRecipeInput recipe={recipe} key={recipe.id} setSearchRecipe={setSearchRecipe} />
        ))
      ) : (
        <div className='p-2'>Not found recipe</div>
      )}
    </div>
  );
};

export default RecipesSearchMenu;

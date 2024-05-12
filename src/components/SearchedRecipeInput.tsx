import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../lib/types';

interface SearchedRecipeInputProps {
  recipe: Recipe;
  setSearchRecipe: React.Dispatch<React.SetStateAction<string>>;
}
const SearchedRecipeInput: FC<SearchedRecipeInputProps> = ({ recipe, setSearchRecipe }) => {
  return (
    <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
      <div
        className='flex gap-2 px-2 py-2 items-center hover:bg-black/15 hover:scale-95 duration-200'
        onClick={() => setSearchRecipe('')}
      >
        <div className='max-w-[70px]'>
          <img src={recipe.image} alt={recipe.name} className='rounded-lg' />
        </div>
        <div className='truncate'>{recipe.name}</div>
      </div>
    </Link>
  );
};

export default SearchedRecipeInput;

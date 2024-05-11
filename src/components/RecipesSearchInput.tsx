import React, { FC } from 'react';

interface RecipesSearchInputProps {
  searchRecipe: string;
  handleSearchRecipe: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const RecipesSearchInput: FC<RecipesSearchInputProps> = ({ searchRecipe, handleSearchRecipe }) => {
  return (
    <input
      className='text-[16px] px-2 border border-black/25 rounded-md py-2 w-[300px]'
      placeholder='Поиск рецептов'
      value={searchRecipe}
      onChange={handleSearchRecipe}
    />
  );
};

export default RecipesSearchInput;

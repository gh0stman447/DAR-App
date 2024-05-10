import React, { FC } from 'react';

interface RecipeImageProps {
  recipe: {
    image: string;
    name: string;
  };
}
const RecipeImage: FC<RecipeImageProps> = ({ recipe }) => {
  return (
    <div className='bg-[#fafafa] grow'>
      <img
        src={recipe.image}
        alt={recipe.name}
        className='max-w-[140px] md:max-w-[220px] h-full object-cover'
      />
    </div>
  );
};

export default RecipeImage;

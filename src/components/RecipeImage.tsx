import { FC } from 'react';

interface RecipeImageProps {
  recipe: {
    image: string;
    name: string;
  };
}
const RecipeImage: FC<RecipeImageProps> = ({ recipe }) => {
  return (
    <div className='bg-[#fafafa] grow h-[170px] w-[120px] sm:h-[250px] sm:w-[200px] md:w-[226px] md:h-[294px]'>
      <img src={recipe.image} alt={recipe.name} className=' h-full w-full object-cover' />
    </div>
  );
};

export default RecipeImage;

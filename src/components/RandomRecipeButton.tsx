import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { Button } from '@radix-ui/themes';

const RandomRecipeButton = () => {
  const recipes = useAppSelector((state) => state.recipes.filteredRecipes);

  const navigate = useNavigate();

  return (
    <div className='self-start mt-2 hover:scale-110 transition-all'>
      <Button
        variant='outline'
        color='gray'
        size={'3'}
        onClick={() => navigate(`/dish/${getRandomInt(1, recipes.length + 1)}`)}
      >
        <span className='font-normal text-[14px]'> Мне повезёт!</span>
      </Button>
    </div>
  );
};

function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

export default RandomRecipeButton;

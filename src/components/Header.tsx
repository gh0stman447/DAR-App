import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { FC, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { Recipe } from '../lib/types';
import RecipesSearchMenu from './RecipesSearchMenu';
import RecipesSearchInput from './RecipesSearchInput';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  const [searchRecipe, setSearchRecipe] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [searchedRecipes, setSearchedRecipes] = useState<Recipe[]>([]);
  const { filteredRecipes } = useAppSelector((state) => state.recipes);

  const location = useLocation();

  const menuRef = useRef<HTMLDivElement>(null);

  const handleSearchRecipe = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchRecipe(event.target.value);
  };

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;

    const handleSearchInput = (searchRecipe: string) => {
      setIsLoading(true);
      timerId = setTimeout(() => {
        const searchedRecipes = filteredRecipes.filter((recipe) =>
          recipe.name.toLowerCase().includes(searchRecipe.toLowerCase()),
        );
        setSearchedRecipes(searchedRecipes);
        setIsLoading(false);
      }, 300);
    };

    handleSearchInput(searchRecipe);

    return () => clearInterval(timerId);
  }, [searchRecipe, filteredRecipes]);

  const handleMenuClose = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setSearchRecipe('');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleMenuClose);
    return () => {
      document.removeEventListener('click', handleMenuClose);
    };
  }, []);

  const showArrow = location.pathname.startsWith('/recipe/');

  return (
    <div className='font-medium justify-between items-center py-4 px-6 gap-y-4 bg-white text-[20px] md:text-[24px] lg:h-[72px] lg:flex '>
      <div className='flex gap-4 items-center mb-4 lg:mb-0'>
        {showArrow && (
          <Link to={'/'}>
            <ArrowLeftIcon className='cursor-pointer' height={20} width={20} />
          </Link>
        )}
        <h1>{title}</h1>
      </div>
      <div className='mt-4 md:mt-0 relative w-fit' ref={menuRef}>
        <RecipesSearchInput searchRecipe={searchRecipe} handleSearchRecipe={handleSearchRecipe} />
        {searchRecipe && (
          <RecipesSearchMenu
            searchedRecipes={searchedRecipes}
            isLoading={isLoading}
            setSearchRecipe={setSearchRecipe}
          />
        )}
      </div>
    </div>
  );
};

export default Header;

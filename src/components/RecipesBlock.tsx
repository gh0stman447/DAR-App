import { useEffect, useState } from 'react';
import Recipe from './RecipeItem';
import { Spinner } from '@radix-ui/themes';
import { useAppSelector } from '../hooks';
import PaginationRounded from './UI/PaginationRounded';
import { Status } from '../lib/constants';

const RecipesBlock = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(6);

  const { filteredRecipes, status, filters } = useAppSelector((state) => state.recipes);

  useEffect(() => {
    setCurrentPage(0);
  }, [filters]);

  const indexOfLastItem = (currentPage + 1) * limit;
  const indexOfFirstItem = indexOfLastItem - limit;
  const paginatedList = filteredRecipes.slice(indexOfFirstItem, indexOfLastItem);

  if (status === Status.LOADING) return <Spinner size={'3'} />;
  if (status === Status.ERROR) return <div>Произошла ошибка на стороне сервера :(</div>;

  return (
    <div className='w-full flex flex-col bg-light-grey gap-3'>
      <div className='h-14 bg-white flex gap-3 text-[16px] md:text-[20px] font-medium items-center py-4 px-6 mt-3 lg:mt-0'>
        <h2> Найденные рецепты </h2>
        <span className='text-[14px] font-normal opacity-45 mt-[3px]'>
          {filteredRecipes.length}
        </span>
      </div>
      <div className='flex flex-col'>
        {paginatedList.length <= 0 ? (
          <div className='text-4xl text-center'>Рецепты не найдены :(</div>
        ) : (
          <>
            <div className='2xl:grid 2xl:grid-cols-2 4xl:grid-cols-3 gap-y-2 gap-x-3 px-3 justify-center'>
              {paginatedList.map((recipe) => (
                <Recipe key={recipe.id} recipe={recipe} />
              ))}
            </div>
            <div className='pt-6 pb-3'>
              <PaginationRounded
                count={Math.ceil(filteredRecipes.length / limit)}
                setCurrentPage={setCurrentPage}
                limit={limit}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RecipesBlock;

import ItemFilter from './ItemFilter';
import { useAppDispatch } from '../hooks';
import { changeFilter, resetFilters } from '../state/recipes/recipesSlice';
import { useEffect, useState } from 'react';
import DifficultyFilter from './DifficultyFilter';
import ResetFilters from './ResetFilters';
import RandomRecipeButton from './RandomRecipeButton';
import TextSection from './TextSection';

const FilterBlock = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  const handleResetFilters = () => {
    dispatch(resetFilters());
    setSelectedFilter(null);
  };

  useEffect(() => {
    dispatch(changeFilter({ field: 'difficulty', value: selectedFilter }));
  }, [selectedFilter, dispatch]);
  return (
    <div className='w-full flex flex-col gap-y-12 bg-white p-6 lg:max-w-[465px]'>
      <div className='p-6 4xl:grow'>
        <div className='bg-[##fafafa] mb-6 max-w-[370px] h-[160px] overflow-hidden mx-auto'>
          <img src={'/assets/eda.jpeg'} alt='Еда вкусная' className=' w-full object-cover' />
        </div>
        <TextSection />
      </div>
      <div className='flex flex-col gap-4 sticky top-4'>
        <ItemFilter keyFilter='cuisine' label='Кухни:' />
        <ItemFilter keyFilter='mealType' label='Тип блюда:' />
        <DifficultyFilter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
        <ResetFilters handleResetFilters={handleResetFilters} />
        <p className='text-black/50 text-[16px] '>А еще можно попробовать на вкус удачу!</p>
        <RandomRecipeButton />
      </div>
    </div>
  );
};

export default FilterBlock;

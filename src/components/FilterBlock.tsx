import ItemFilter from './ItemFilter';
import { useAppDispatch, useAppSelector } from '../hooks';
import { changeFilter, isFiltersNull, resetFilters } from '../state/recipes/recipesSlice';
import { useNavigate } from 'react-router-dom';
import { Button } from '@radix-ui/themes';
import { useEffect, useState } from 'react';
import DifficultyFilter from './DifficultyFilter';
import ResetFilters from './ResetFilters';
import RandomRecipeButton from './RandomRecipeButton';

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
    <div className='w-full mb-3 flex flex-col gap-y-4 bg-white p-6 lg:max-w-[465px] lg:mb-0'>
      <div>
        <div className='bg-[##fafafa] mb-6'>
          <img src={'/assets/gramotniy-racion3.jpg'} alt='' />
        </div>
        <div className='flex flex-col gap-4 mb-12'>
          <p>
            В нашей жизни, когда время становится все более ценным ресурсом, задача планирования
            приема пищи становится все более сложной.
          </p>
          <p>
            Часто мы сталкиваемся с дилеммой: что приготовить на завтрак, обед или ужин? Каким
            образом мы можем легко и быстро определиться с выбором блюда и не тратить много времени
            на принятие этого решения?
          </p>
          <p>Наш сервис поможет: выбирайте параметры - и вперед!</p>
        </div>
      </div>
      <div className='flex flex-col gap-4 sticky top-4'>
        <ItemFilter keyFilter='cuisine' label='Кухни:' />
        <ItemFilter keyFilter='mealType' label='Тип блюда:' />
        <DifficultyFilter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
        <ResetFilters handleResetFilters={handleResetFilters} />
        <p className='text-black/50'>А еще можно попробовать на вкус удачу!</p>
        <RandomRecipeButton />
      </div>
    </div>
  );
};

export default FilterBlock;

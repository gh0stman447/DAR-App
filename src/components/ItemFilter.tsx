import { FC } from 'react';
import { changeFilter } from '../state/recipes/recipesSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './UI/Select';
import { Filters } from '../lib/types';
import { ChevronDownIcon } from '@radix-ui/themes';

interface recipeFilterProps {
  label: string;
  keyFilter: keyof Filters;
}
const ItemFilter: FC<recipeFilterProps> = ({ label, keyFilter }) => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.recipes.filters[keyFilter]);

  const handleChange = (event: string) => {
    dispatch(changeFilter({ field: keyFilter, value: event === '-' ? null : event }));
  };

  return (
    <div className='sm:flex gap-3 justify-end items-center'>
      <div className='mb-2 sm:mb-0 font-bold'>{label}</div>
      <div className='flex flex-col max-w-[285px] w-full'>
        <Select onValueChange={handleChange} value={filter?.value || '-'}>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Theme' />
            <ChevronDownIcon />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={'-'}>
              {keyFilter === 'cuisine' ? 'Все страны и регионы' : 'Все типы'}
            </SelectItem>
            {filter?.avaible.map((value) => (
              <SelectItem key={value} value={value}>
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ItemFilter;

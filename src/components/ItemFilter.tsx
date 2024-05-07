import { Flex } from '@radix-ui/themes';
import React, { FC } from 'react';
import { Filters, changeFilter } from '../state/recipes/recipesSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './UI/Select';

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
    <div className='flex gap-3 justify-end'>
      <div>{label}</div>
      <div className='flex flex-col max-w-[285px] w-full'>
        <Select onValueChange={handleChange} value={filter?.value || '-'}>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Theme' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={'-'}>Любой</SelectItem>
            {filter?.avaible.map((value) => (
              <SelectItem value={value}>{value}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ItemFilter;

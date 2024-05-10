import React, { FC } from 'react';
import { isFiltersNull } from '../state/recipes/recipesSlice';
import { useAppSelector } from '../hooks';

interface ResetFiltersProps {
  handleResetFilters: () => void;
}

const ResetFilters: FC<ResetFiltersProps> = ({ handleResetFilters }) => {
  const filters = useAppSelector((state) => state.recipes.filters);

  return (
    <button
      className={`text-blue w-fit mb-12 ${isFiltersNull(filters) ? 'opacity-50' : ''}`}
      onClick={handleResetFilters}
      disabled={isFiltersNull(filters)}
    >
      Сбросить все фильтры
    </button>
  );
};

export default ResetFilters;

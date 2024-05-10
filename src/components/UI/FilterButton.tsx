import React from 'react';
import { useAppSelector } from '../../hooks';
import { PredictedRecipesFilters } from '../../lib/constants';

interface ButtonProps {
  filtersArray: string[];
  filter: string;
  selectedFilter: string | null;
  onClick: () => void;
  index: number;
}
const FilterButton: React.FC<ButtonProps> = ({
  filtersArray,
  filter,
  selectedFilter,
  onClick,
  index,
}) => {
  const item = useAppSelector(
    (state) =>
      state.recipes.filters.difficulty.avaible.find(
        (value) => value.toLowerCase() === filter.toLowerCase(),
      )!,
  );

  const isDisabled = !filtersArray.includes(item ?? '');
  const isAnyButton = filter.toLowerCase() === PredictedRecipesFilters.ANY.toLowerCase();

  return (
    <button
      disabled={!isAnyButton && isDisabled}
      className={`py-2 px-3 border border-[#d9d9d9] ${
        selectedFilter === filter || (selectedFilter === null && isAnyButton)
          ? 'bg-blue text-white'
          : ''
      } ${isDisabled && !isAnyButton ? 'opacity-50' : ''}`}
      onClick={onClick}
    >
      {filter}
    </button>
  );
};

export default FilterButton;

import React, { useState } from 'react';
import { useAppSelector } from '../../hooks';

interface ButtonProps {
  filtersArray: string[];
  filter: string;
  selectedFilter: string | null;
  onClick: () => void;
}
const FilterButton: React.FC<ButtonProps> = ({ filtersArray, filter, selectedFilter, onClick }) => {
  const item = useAppSelector(
    (state) =>
      state.recipes.filters.difficulty.avaible.find(
        (value) => value.toLowerCase() === filter.toLowerCase(),
      )!,
  );

  const isDisabled = !filtersArray.includes(item ?? '');
  const isAnyButton = filter.toLowerCase() === 'any';

  return (
    <button
      disabled={!isAnyButton && isDisabled}
      className={`py-2 px-3 border border-[#d9d9d9] ${
        selectedFilter === filter || (selectedFilter === null && filter.toLowerCase() === 'any')
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

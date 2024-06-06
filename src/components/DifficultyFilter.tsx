import React from 'react';
import FilterButton from './UI/FilterButton';
import { PredictedRecipesFilters } from '../lib/constants';

interface DiffficultyFilterProps {
  selectedFilter: string | null;
  setSelectedFilter: (filter: string | null) => void;
}

const filtersArray = Object.values(PredictedRecipesFilters);

const DifficultyFilter: React.FC<DiffficultyFilterProps> = ({
  selectedFilter,
  setSelectedFilter,
}) => {
  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter === 'Любая' ? null : filter);
  };

  return (
    <div className='sm:flex gap-2 sm:justify-end sm:items-center'>
      <div className='sm:text-right mb-2 sm:mb-0 font-bold'>Сложность&nbsp; приготовления:</div>
      <div className='flex'>
        <div className='flex font-normal'>
          {filtersArray.map((filter, index, arr) => (
            <FilterButton
              index={index}
              filter={filter}
              filtersArray={arr}
              key={filter}
              selectedFilter={selectedFilter}
              onClick={() => handleFilterClick(filter)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DifficultyFilter;

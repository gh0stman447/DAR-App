import React from 'react';
import FilterButton from './UI/FilterButton';

const filtersArray = ['Any', 'Easy', 'Medium', 'Hard'];

interface DiffficultyFilterProps {
  selectedFilter: string | null;
  setSelectedFilter: (filter: string | null) => void;
}
const DifficultyFilter: React.FC<DiffficultyFilterProps> = ({
  selectedFilter,
  setSelectedFilter,
}) => {
  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter === 'Any' ? null : filter);
  };
  return (
    <div className='flex gap-2 justify-end items-center'>
      <div className='text-right'>Сложность&nbsp; приготовления:</div>
      <div
        className='flex
          '
      >
        <div className='flex'>
          {filtersArray.map((filter, _, arr) => (
            <FilterButton
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

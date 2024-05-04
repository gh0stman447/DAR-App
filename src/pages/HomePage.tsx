import React, { useEffect } from 'react';
import Header from '../components/Header';
import FilterBlock from '../components/FilterBlock';
import RecepesBlock from '../components/RecipesBlock';

const HomePage = () => {
  return (
    <div className='flex flex-col gap-y-4 bg-grey'>
      <Header title='Сборник рецептов из разных стран мира' />
      <div className='flex gap-x-4'>
        <FilterBlock />
        <RecepesBlock />
      </div>
    </div>
  );
};

export default HomePage;

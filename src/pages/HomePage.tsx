import Header from '../components/Header';
import FilterBlock from '../components/FilterBlock';
import RecipesBlock from '../components/RecipesBlock';

const HomePage = () => {
  return (
    <div className='flex flex-col gap-y-4 bg-grey font-normal text-[14px]'>
      <Header title='Сборник рецептов из разных стран мира' />
      <div className='lg:flex lg:gap-x-4'>
        <FilterBlock />
        <RecipesBlock />
      </div>
    </div>
  );
};

export default HomePage;

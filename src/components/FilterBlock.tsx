import { Button } from '@radix-ui/themes';
import ItemFilter from './ItemFilter';
import { useAppDispatch, useAppSelector } from '../hooks';
import { changeFilter, isFiltersNull, resetFilters } from '../state/recipes/recipesSlice';
import { useNavigate } from 'react-router-dom';

const FilterBlock = () => {
  const { avaible } = useAppSelector((state) => state.recipes.filters.difficulty!);
  const recipes = useAppSelector((state) => state.recipes.filteredRecipes);
  const filters = useAppSelector((state) => state.recipes.filters);
  console.log(recipes);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
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
        <div className='flex gap-2 justify-end items-center max-w-[417px]'>
          <div className='text-right'>Сложность&nbsp; приготовления:</div>
          <div
            className='flex
          '
          >
            <Button onClick={() => dispatch(changeFilter({ field: 'difficulty', value: null }))}>
              Любая
            </Button>
            {avaible.map((variant) => (
              <Button
                onClick={() => dispatch(changeFilter({ field: 'difficulty', value: variant }))}
                key={variant}
                variant='outline'
              >
                {variant}
              </Button>
            ))}
          </div>
        </div>
        <button
          className={`text-blue w-fit mb-12 ${isFiltersNull(filters) ? 'opacity-50' : ''}`}
          onClick={() => dispatch(resetFilters())}
          disabled={isFiltersNull(filters)}
        >
          Сбросить все фильтры
        </button>
        <p className='text-black/50'>А еще можно попробовать на вкус удачу!</p>
        <div className='self-start mt-2 hover:scale-110 transition-all'>
          <Button
            variant='outline'
            color='gray'
            size={'3'}
            onClick={() => navigate(`/dish/${getRandomInt(1, recipes.length + 1)}`)}
          >
            Мне повезёт!
          </Button>
        </div>
      </div>
    </div>
  );
};

function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
export default FilterBlock;

import Header from '../components/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { Spinner } from '@radix-ui/themes';
import { useAppSelector } from '../hooks';
import RecipeInstruction from '../components/RecipeInstruction';
import RecipeNavigationButtons from '../components/RecipeNavigationButtons';
import { Status } from '../lib/constants';

const DishInfoPage = () => {
  const { id } = useParams();

  const { recipesList, status } = useAppSelector((state) => state.recipes);

  if (status === Status.LOADING) return <Spinner size={'3'} />;

  if (status === Status.ERROR) return <div>Произошла ошибка на стороне сервера :(</div>;

  const recipe = recipesList.recipes.find((recipe) => recipe.id.toString() === id);

  if (!id || !recipe) return <div>Рецепт не найден:(</div>;

  return (
    <div className='flex flex-col gap-y-4 bg-grey font-medium text-[16px]'>
      <Header title={recipe.name} />
      <div className='lg:grid lg:grid-cols-2 gap-x-4 3xl:flex-nowrap 3xl:flex'>
        <div className='flex flex-col gap-3 w-full 3xl:max-w-[465px] bg-grey'>
          <div className='divide-y bg-white'>
            <h5 className='py-4 px-6'>Кухня</h5>
            <div className='py-6 px-6 font-normal'>{recipe.cuisine}</div>
          </div>
          <div className='divide-y bg-white'>
            <h5 className='py-4 px-6 '>Теги</h5>
            <div className='py-6 px-6 opacity-45 text-[14px] font-normal'>
              {recipe.tags.map((tag) => (
                <span key={tag} className='mr-2'>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className='divide-y bg-white'>
            <h5 className='py-4 px-6 '>Калорийность</h5>
            <div className='py-6 px-6 flex flex-col gap-2 text-[14px] font-normal'>
              <span>{recipe.caloriesPerServing}</span>
              <span className='opacity-45'>100 грамм</span>
            </div>
          </div>
          <div className='divide-y bg-white'>
            <h5 className='py-4 px-6 '>Количество порций</h5>
            <div className='py-6 px-6 text-[20px] font-bold'>{recipe.servings}</div>
          </div>
          <div className='divide-y bg-white flex-grow md:mb-3 3xl:mb-0'>
            <h5 className='py-4 px-6 '>Описание</h5>
            <div className='py-6 px-6 opacity-4 text-[14px] font-normal'>
              <p>{recipe.instructions}</p>
            </div>
          </div>
        </div>
        <div className='w-full 3xl:max-w-[465px] bg-grey flex flex-col gap-3'>
          <div className='divide-y bg-white'>
            <h5 className='py-4 px-6 '>Общее время приготовления</h5>
            <div className='py-6 px-6 font-normal'>
              {recipe.cookTimeMinutes + recipe.prepTimeMinutes} минут
            </div>
          </div>
          <div className='bg-white flex-grow mb-3 3xl:mb-0'>
            <div className='divide-y bg-white'>
              <RecipeInstruction recipe={recipe} />
            </div>
          </div>
        </div>
        <div className='bg-light-grey w-full flex flex-col gap-3 col-span-2 '>
          <div className='flex-grow p-3 '>
            <img
              src={recipe.image}
              alt={recipe.name}
              className='w-full 3xl:w-[918px] max-h-[760px] object-cover'
            />
          </div>
          <RecipeNavigationButtons recipesList={recipesList} id={id} />
        </div>
      </div>
    </div>
  );
};

export default DishInfoPage;

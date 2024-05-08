import Header from '../components/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { STATUS } from '../constants/status';
import { Spinner } from '@radix-ui/themes';
import { useAppSelector } from '../hooks';

// import InfoBlock from '../components/InfoBlock';

// const dishInfo = {
//   cuisine: 'Европейкая',
//   tags: '#Выпечка',
//   calories: { value: '444 ккал', weight: '100 грамм' },
//   servings: 4,
//   description:
//     'Традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепешки, выпекаемой с уложенной сверху начинкой из томатного соуса, сыра и зачастую других ингредиентов, таких как мясо, овощи, грибы и прочие продукты. Небольшую пиццу иногда называют пиццеттой.',
// };

const DishInfoPage = () => {
  const { id } = useParams();
  const { recipesList, status } = useAppSelector((state) => state.recipes);
  const navigate = useNavigate();

  if (status === STATUS.loading) return <Spinner size={'3'} />;

  const recipe = recipesList.recipes.find((recipe) => recipe.id.toString() === id);
  const recipeIndex = recipesList.recipes.findIndex((recipe) => recipe.id.toString() === id);

  if (!recipe) return <div>Рецепт не найден:(</div>;

  return (
    <div className='flex flex-col gap-y-4 bg-grey'>
      <Header title={recipe.name} />
      <div className='lg:grid lg:grid-cols-2 gap-x-4 3xl:flex-nowrap 3xl:flex'>
        <div className='flex flex-col gap-3 w-full 3xl:max-w-[465px] bg-grey'>
          {/* {Object.entries(dishInfo).map(([title, info], index) => (
            <InfoBlock key={index} title={title} info={info} />
          ))} */}
          <div className='divide-y bg-white'>
            <div className='py-4 px-6 font-medium text-[16px]'>Кухня</div>
            <div className='py-6 px-6'>{recipe.cuisine}</div>
          </div>
          <div className='divide-y bg-white'>
            <div className='py-4 px-6 font-medium text-[16px]'>Теги</div>
            <div className='py-6 px-6 opacity-45'>
              {recipe.tags.map((tag) => (
                <span key={tag} className='mr-2'>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className='divide-y bg-white'>
            <div className='py-4 px-6 font-medium text-[16px]'>Калорийность</div>
            <div className='py-6 px-6 flex flex-col gap-2'>
              <span>{recipe.caloriesPerServing}</span>
              <span className='opacity-45'>100 грамм</span>
            </div>
          </div>
          <div className='divide-y bg-white'>
            <div className='py-4 px-6 font-medium text-[16px]'>Количество порций</div>
            <div className='py-6 px-6 text-[20px] font-bold'>{recipe.servings}</div>
          </div>
          <div className='divide-y bg-white flex-grow md:mb-3 3xl:mb-0'>
            <div className='py-4 px-6 font-medium text-[16px]'>Описание</div>
            <div className='py-6 px-6 opacity-45'>
              <p>{recipe.instructions}</p>
            </div>
          </div>
        </div>
        <div className='w-full 3xl:max-w-[465px] bg-grey flex flex-col gap-3'>
          <div className='divide-y bg-white'>
            <div className='py-4 px-6 font-medium text-[16px]'>Общее время приготовления</div>
            <div className='py-6 px-6'>{recipe.cookTimeMinutes + recipe.prepTimeMinutes} минут</div>
          </div>
          <div className='bg-white flex-grow mb-3 3xl:mb-0'>
            <div className='divide-y bg-white'>
              <div className='py-4 px-6 font-medium text-[16px]'>Инструкция по приготовлению</div>
              <div className='flex flex-col gap-5 pl-12 py-6 px-6'>
                {recipe.instructions.map((step) => (
                  <p
                    key={step}
                    className='relative before:content-[""] before:block before:w-2 before:h-2 before:absolute before:top-2 before:-left-6 before:rounded-full before:border-[2px] before:border-blue'
                  >
                    {step}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='bg-light-grey w-full flex flex-col gap-3 col-span-2 '>
          <div className='flex-grow p-3 '>
            <img src={recipe.image} alt={recipe.name} className='w-full h-full object-cover' />
          </div>
          <div className='h-14 flex items-center  justify-center py-3 gap-2'>
            <button
              className='p-[10px] bg-white border-2 border-grey rounded-md hover:bg-light-grey hover:scale-125 duration-300'
              onClick={() =>
                recipeIndex !== 0 && navigate(`/dish/${recipesList.recipes[recipeIndex - 1].id}`)
              }
              disabled={recipeIndex === recipesList.recipes[0].id}
            >
              <ChevronLeftIcon />
            </button>
            <button
              className='p-[10px] bg-white border-2 border-grey rounded-md hover:bg-light-grey hover:scale-125 duration-300'
              onClick={() =>
                recipeIndex !== recipesList.recipes.length - 1 &&
                navigate(`/dish/${recipesList.recipes[recipeIndex + 1].id}`)
              }
              disabled={recipeIndex === recipesList.recipes.length - 1}
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishInfoPage;

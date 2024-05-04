import { TimerIcon, StarIcon, StarFilledIcon } from '@radix-ui/react-icons';

const Dish = () => {
  return (
    <div className='flex bg-white max-w-[452px]'>
      <div>
        <div className='font-medium text-[16px] px-6 py-[22px] text-center '>
          Наименование блюда
        </div>
        <div className='bg-[#fafafa] w-[226px] h-[294px]'>Картинка</div>
      </div>
      <div className='flex flex-col gap-2 p-6'>
        <div className='text-[10px] opacity-45'>
          Традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки, выпекаемой с
          уложенной сверху начинкой из томатного соуса, сыра и зачастую других ингредиентов, таких
          как мясо, овощи, грибы и прочие продукты. Небольшую пиццу иногда называют пиццеттой.
        </div>
        <div className='flex flex-col gap-2 text-[12px]'>
          <div className='flex gap-2 items-center'>
            <TimerIcon />
            <span> 30 минут</span>
          </div>
          <div className='flex gap-2 items-center'>
            Cложность:
            <StarFilledIcon /> <StarIcon /> <StarIcon />
          </div>
          <div>Европейская кухня</div>
          <div>Завтрак, Обед, Ужин</div>
        </div>
      </div>
    </div>
  );
};

export default Dish;

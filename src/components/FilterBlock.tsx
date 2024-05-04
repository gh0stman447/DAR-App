import { Button } from '@radix-ui/themes';
import ItemFilter from './ItemFilter';

const FilterBlock = () => {
  return (
    <div className='max-w-[465px] w-full flex flex-col gap-y-4 bg-white p-6'>
      <div>
        <div className='bg-[##fafafa] w-[369px] h-[160px]'></div>
        <div className='flex flex-col gap-4'>
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
      <ItemFilter obj={{}} label='Кухни:' />
      <ItemFilter obj={{}} label='Тип блюда:' />
      <div className='flex gap-2'>
        <div className='text-right'>Сложность приготовления:</div>
        <div className='flex-grow'>
          <Button variant='outline'>Любая</Button>
          <Button color='grass' className='text-white'>
            Любая
          </Button>
          <Button>Любая</Button>
          <Button disabled>Любая</Button>
        </div>
      </div>
      <p className='text-blue/50'>Сбросить все фильтры</p>
      <p className='text-black/50'>А еще можно попробовать на вкус удачу</p>
      <Button variant='outline' color='gray' size={'1'} className='inline'>
        Мне повезёт!
      </Button>
    </div>
  );
};

export default FilterBlock;

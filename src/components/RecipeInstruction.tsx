import { FC } from 'react';

interface RecipeInstructionProps {
  recipe: {
    instructions: string[];
  };
}
const RecipeInstruction: FC<RecipeInstructionProps> = ({ recipe }) => {
  return (
    <>
      <div className='bg-white flex-grow mb-3 3xl:mb-0'>
        <div className='divide-y divide-grey'>
          <div className='py-4 px-6'>Инструкция по приготовлению</div>
          <div className='flex flex-col gap-5 pl-12 py-6 px-6 font-normal text-[14px]'>
            {recipe.instructions.map((step) => (
              <p
                key={step}
                className='relative before:content-[""] before:block before:w-[10px] before:h-[10px] before:absolute before:top-[5px] before:-left-6 before:rounded-full before:border-[2.3px] before:border-blue'
              >
                {step}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeInstruction;

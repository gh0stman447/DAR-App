import { FC } from 'react';

interface RecipeInstructionProps {
  recipe: {
    instructions: string[];
  };
}
const RecipeInstruction: FC<RecipeInstructionProps> = ({ recipe }) => {
  return (
    <>
      <div className='py-4 px-6'>Инструкция по приготовлению</div>
      <div className='flex flex-col gap-5 pl-12 py-6 px-6 font-normal text-[14px]'>
        {recipe.instructions.map((step) => (
          <p
            key={step}
            className='relative before:content-[""] before:block before:w-2 before:h-2 before:absolute before:top-2 before:-left-6 before:rounded-full before:border-[2px] before:border-blue'
          >
            {step}
          </p>
        ))}
      </div>
    </>
  );
};

export default RecipeInstruction;

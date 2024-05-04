import { Flex, Select } from '@radix-ui/themes';
import React, { FC } from 'react';

interface recipeFilterProps {
  label: string;
  obj: Object;
}

const ItemFilter: FC<recipeFilterProps> = ({ obj, label }) => {
  return (
    <div className='flex gap-3 justify-end'>
      <div>{label}</div>
      <div className=' flex flex-col max-w-[285px] w-full'>
        <Select.Root defaultValue='apple'>
          <Select.Trigger />
          <Select.Content>
            <Select.Group>
              <Select.Label>Fruits</Select.Label>
              <Select.Item value='orange'>Orange</Select.Item>
              <Select.Item value='apple'>Apple</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  );
};

export default ItemFilter;

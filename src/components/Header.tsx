import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  const location = useLocation();
  const showArrow = location.pathname.startsWith('/recipe/');
  return (
    <div className='h-[72px] font-medium  flex items-center py-4 px-6 gap-y-4 bg-white text-[20px] md:text-[24px]'>
      <div className='flex gap-4 items-center'>
        {showArrow && (
          <Link to={'/'}>
            <ArrowLeftIcon className='cursor-pointer' height={20} width={20} />
          </Link>
        )}
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Header;

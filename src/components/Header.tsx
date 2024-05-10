import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  const location = useLocation();
  const showArrow = location.pathname.startsWith('/dish/');
  return (
    <div className='h-[72px] font-medium text-[24px] flex items-center py-4 px-6 gap-y-4 bg-white'>
      <div className='flex gap-4 items-center'>
        {showArrow && (
          <Link to={'/'}>
            <ArrowLeftIcon className='cursor-pointer' height={20} width={20} />
          </Link>
        )}
        {title}
      </div>
    </div>
  );
};

export default Header;

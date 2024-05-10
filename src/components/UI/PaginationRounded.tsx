import React, { useEffect } from 'react';
import Pagination from '@mui/material/Pagination';

interface PaginationRoundedProps {
  count: number;
  setCurrentPage: (page: number) => void;
  limit: number;
}

const PaginationRounded: React.FC<PaginationRoundedProps> = ({ count = 1, setCurrentPage }) => {
  const changePageHandler = (page: number, setCurrentPage: (page: number) => void) => {
    setCurrentPage(page - 1);
  };

  return (
    <div className='flex justify-center'>
      <Pagination
        count={count}
        variant='outlined'
        shape='rounded'
        onChange={(_, page) => changePageHandler(page, setCurrentPage)}
        className='hover:border-blue'
      />
    </div>
  );
};

export default PaginationRounded;

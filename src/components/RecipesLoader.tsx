import React, { useEffect } from 'react';
import { useAppDispatch } from '../hooks';
import { getInitialDataAction } from '../state/recipes/recipesSlice';

interface RecipesLoaderProps {
  children: React.ReactElement;
}
const RecipesLoader = ({ children }: RecipesLoaderProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getInitialDataAction());
  }, []);

  return children;
};

export default RecipesLoader;

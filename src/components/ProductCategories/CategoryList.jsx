import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from 'redux/operations';
import { selectCategories } from 'redux/selectors';
import { ProductCategories } from './ProductCategories';

export const CategoryList = () => {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <div>
      <ProductCategories categories={categories} />
    </div>
  );
};

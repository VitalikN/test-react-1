import { useSelector } from 'react-redux';
import { selectError, selectIsLoading, selectProducts } from 'redux/selectors';

import { fetchProducts } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ProductsList } from 'components/ProductsList/ProductsList';
import { CategoryList } from 'components/ProductCategories/CategoryList';
import { NotFound } from 'components/NotFound/NotFound';
import { Spinner } from 'components/Spinner/Spinner';

export const Home = () => {
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div>
      <CategoryList />
      {products.length > 0 ? <ProductsList /> : <NotFound />}
      {isLoading && !error && <Spinner />}
    </div>
  );
};

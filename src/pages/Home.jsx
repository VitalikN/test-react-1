import { ProductsList } from 'components/ProductsList/ProductsList';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading, selectProducts } from 'redux/selectors';

import { fetchProducts } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ProductCategories } from 'components/productCategories/productCategories';

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
      <ProductCategories />
      {products.length > 0 ? <ProductsList /> : <p> sorry 0 </p>}
      {isLoading && !error && <b>Request in progress...</b>}
    </div>
  );
};

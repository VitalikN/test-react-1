import { ProductsList } from 'components/ProductsList/ProductsList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from 'redux/operations';
import { selectError, selectIsLoading, selectProducts } from 'redux/selectors';

export const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      {products.length > 0 ? <ProductsList /> : <p> sorry 0 </p>}
      {isLoading && !error && <b>Request in progress...</b>}
    </div>
  );
};

import { ProductsList } from 'components/ProductsList/ProductsList';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading, selectProducts } from 'redux/selectors';

export const Home = () => {
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div>
      {products.length > 0 ? <ProductsList /> : <p> sorry 0 </p>}
      {isLoading && !error && <b>Request in progress...</b>}
    </div>
  );
};

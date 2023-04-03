import { ProductsListMarkup } from 'components/ProductsListMarkup/ProductsListMarkup';
import { useSelector } from 'react-redux';
import { selectProducts } from 'redux/selectors';

export const ProductsList = () => {
  const products = useSelector(selectProducts);

  return (
    <div>
      <ProductsListMarkup products={products} />
    </div>
  );
};

import { BackLink } from 'components/BackLink/BackLink';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { selectProducts } from 'redux/selectors';

export const ProductDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const { productId } = useParams();
  const products = useSelector(selectProducts);

  console.log('productId', productId);
  console.log('products', products);
  const visibleProduct = products.filter(product => product.id === productId);
  console.log(visibleProduct);

  return (
    <div>
      Description of product details
      <BackLink to={backLinkHref}>come back </BackLink>
    </div>
  );
};

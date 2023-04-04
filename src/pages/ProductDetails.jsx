import { BackLink } from 'components/BackLink/BackLink';
import { useLocation } from 'react-router-dom';

export const ProductDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  // const { productId } = useParams();

  return (
    <div>
      Description of product details
      <BackLink to={backLinkHref}>come back </BackLink>
    </div>
  );
};

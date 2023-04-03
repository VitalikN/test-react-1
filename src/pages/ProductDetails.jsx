import { BackLink } from 'components/BackLink/BackLink';
import { useLocation } from 'react-router-dom';

export const ProductDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <div>
      ProductDetails
      <BackLink to={backLinkHref}>come back </BackLink>
    </div>
  );
};

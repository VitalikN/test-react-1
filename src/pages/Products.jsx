import { BackLink } from 'components/BackLink/BackLink';
import { useLocation } from 'react-router-dom';

export const Products = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <div>
      Products
      <BackLink to={backLinkHref}>come back </BackLink>
    </div>
  );
};

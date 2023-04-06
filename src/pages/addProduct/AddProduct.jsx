import { BackLink } from 'components/BackLink/BackLink';
import { useLocation } from 'react-router-dom';

export const AddProduct = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <div>
      <BackLink to={backLinkHref}>come back </BackLink>
      addProduct
    </div>
  );
};

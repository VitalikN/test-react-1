import { BackLink } from 'components/BackLink/BackLink';
// import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Products = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  // const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {}, []);
  // if (searchParams.get('searchQuery') === null) return;
  // // const searchTitle = searchParams.get('searchQuery');

  return (
    <div>
      <label>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search product"
          name="searchQuery"
          // value={filter}
          // onChange={handleFilter}
        />
      </label>
      <BackLink to={backLinkHref}>come back </BackLink>
    </div>
  );
};

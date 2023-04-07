import { BackLink } from 'components/BackLink/BackLink';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { searchProduct } from 'redux/operations';
// import { selectVisibleProducts } from 'redux/selectors';

export const Products = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  // const [searchProducts, setSearchProducts] = useState([]);

  useEffect(() => {
    if (searchParams.get('searchQuery') === null) return;
    const searchTitle = searchParams.get('searchQuery');

    dispatch(searchProduct(searchTitle));

    // setSearchProducts();
  }, [dispatch, searchParams]);

  const handleOnChange = evt => {
    setQuery(evt.target.value);
    setSearchParams({ searchQuery: query });
  };

  return (
    <div>
      <label>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search product"
          name="searchQuery"
          value={query}
          onChange={handleOnChange}
        />
      </label>

      <BackLink to={backLinkHref}>come back </BackLink>
    </div>
  );
};

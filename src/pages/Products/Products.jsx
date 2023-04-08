import { BackLink } from 'components/BackLink/BackLink';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { searchProduct } from 'redux/operations';
import { Container, Input, Label } from './Products.styled';
// import { selectVisibleProducts } from 'redux/selectors';

export const Products = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [searchProducts, setSearchProducts] = useState(null);

  useEffect(() => {
    if (searchParams.get('searchQuery') === null) return;
    const searchTitle = searchParams.get('searchQuery');

    const results = dispatch(searchProduct(searchTitle));

    setSearchProducts(results);
  }, [dispatch, searchParams]);

  const handleOnChange = evt => {
    setQuery(evt.target.value);
    setSearchParams({ searchQuery: query });
  };

  console.log(searchProducts);
  return (
    <>
      <BackLink to={backLinkHref}>come back </BackLink>

      <Container>
        <Label>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search product"
            name="searchQuery"
            value={query}
            onChange={handleOnChange}
          />
        </Label>
      </Container>
    </>
  );
};

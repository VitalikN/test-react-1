import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { searchProduct } from 'redux/operations';
import { Container, Input, Label } from './Products.styled';
import { ProductsList } from 'components/ProductsList/ProductsList';

export const Products = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');

  const searchTitle = searchParams.get('searchQuery');

  useEffect(() => {
    if (!searchTitle) return;

    dispatch(searchProduct(searchTitle));
  }, [dispatch, searchTitle]);

  const handleOnChange = evt => {
    setQuery(evt.target.value);
    setSearchParams({ searchQuery: evt.target.value });
  };

  return (
    <>
      <Container>
        <Label>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search product"
            name="searchQuery"
            value={query ?? searchTitle}
            onChange={handleOnChange}
          />
        </Label>
      </Container>
      {query && <ProductsList />}
    </>
  );
};

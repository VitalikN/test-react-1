import { useState } from 'react';
import { Form, Select } from './ProductCategories.styled';
import { useDispatch } from 'react-redux';
import { productCategories } from 'redux/operations';

export const ProductCategories = ({ categories }) => {
  const dispatch = useDispatch();
  const [searchCategories, setSearchCategories] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const selectElement = event.target.elements.categorie;
    const selectedValue = selectElement.value;
    setSearchCategories('');
    dispatch(productCategories(selectedValue));
  };

  const onHandleChange = evt => {
    setSearchCategories(evt.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <button type="submit">Search</button>

      <Select
        aria-label="select"
        name="categorie"
        onChange={onHandleChange}
        required
      >
        <option selected disabled defaultValue="">
          all
        </option>

        {categories &&
          categories.map(categorie => (
            <option key={categorie} value={categorie}>
              {categorie}
            </option>
          ))}
      </Select>
    </Form>
  );
};

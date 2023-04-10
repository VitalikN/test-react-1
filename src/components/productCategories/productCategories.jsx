import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productCategories } from 'redux/operations';

export const ProductCategories = () => {
  const dispatch = useDispatch();
  const [searchCategories, setSearchCategories] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(productCategories(evt.target.value));

    console.log('11 рядок ', evt.currentTarget.value);
    console.log(searchCategories);
    setSearchCategories('');
  };

  const onHandleChange = evt => {
    setSearchCategories(evt.target.value);
    console.log('18hz', evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Search</button>

      <select
        aria-label="select"
        name="categorie"
        onChange={onHandleChange}
        required
      >
        <option
        //   selected disabled defaultValue=""
        >
          All Categories
        </option>

        {/* {categories &&
                  categories.map(categorie => */}
        <option value="">smartphones</option>
        {/* )} */}
      </select>
    </form>
  );
};

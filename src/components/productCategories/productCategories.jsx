import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productCategories } from 'redux/operations';

export const ProductCategories = () => {
  const [searchCategories, setSearchCategories] = useState('');

  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(productCategories());
  //   }, [dispatch]);

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(productCategories(evt.target.value));
    console.log(searchCategories);
    setSearchCategories('');
  };

  const onHandleChange = evt => {
    setSearchCategories(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Search</button>

      <select
        aria-label="select"
        name="region"
        onChange={onHandleChange}
        required
      >
        <option
        //   selected disabled defaultValue="categories"
        >
          All Categories
        </option>

        {/* regions && */}
        {/* regions.map(({ id, name, value }) => ( */}
        <option value="">Categories</option>
        {/* ))} */}
      </select>
    </form>
  );
};

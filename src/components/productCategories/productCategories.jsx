import { Form, Select, Button } from './ProductCategories.styled';
import { useDispatch } from 'react-redux';
import { fetchProducts, productCategories } from 'redux/operations';
import { useSearchParams } from 'react-router-dom';
import { GrSearch } from 'react-icons/gr';

export const ProductCategories = ({ categories }) => {
  const dispatch = useDispatch();

  const [, setSearchParams] = useSearchParams();

  const handleSubmit = evt => {
    evt.preventDefault();
    const selectElement = evt.target.elements.categorie;
    const Category = selectElement.value;
    setSearchParams({ category: Category });

    if (Category === 'allCategories') {
      dispatch(fetchProducts());
    } else {
      dispatch(productCategories(Category));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Select
          aria-label="select"
          name="categorie"
          defaultValue="allCategories"
          required
        >
          <option value="allCategories">All Categories</option>
          {categories &&
            categories.map(categorie => (
              <option key={categorie} value={categorie}>
                {categorie[0].toUpperCase() + categorie.slice(1)}
              </option>
            ))}
        </Select>
        <Button type="submit">
          <GrSearch />
        </Button>
      </Form>
    </>
  );
};

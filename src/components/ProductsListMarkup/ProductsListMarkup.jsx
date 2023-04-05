import { useLocation } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md';

import {
  Img,
  Item,
  StyledLink,
  List,
  Subject,
  Title,
  Btn,
} from './ProductsListMarkup.styled';
import { useDispatch } from 'react-redux';
import { removeProduct } from 'redux/operations';

export const ProductsListMarkup = ({ products }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleRemove = productId => {
    dispatch(removeProduct(productId));
  };
  return (
    <div>
      <List>
        {products.map(({ id, brand, images, title }) => (
          <Item key={id}>
            <StyledLink
              id={`${id}`}
              to={`/products/${id}`}
              state={{ from: location }}
            >
              <Img src={`${images[0]}`} alt={title} width="200px" />

              <Title>{brand}</Title>
              <Subject> {title}</Subject>
            </StyledLink>
            <Btn type="button" onClick={() => handleRemove(id)}>
              <MdDeleteForever />
            </Btn>
          </Item>
        ))}
      </List>
    </div>
  );
};

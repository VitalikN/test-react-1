import { BackLink } from 'components/BackLink/BackLink';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { productDetails } from 'redux/operations';
import { selectProductId } from 'redux/selectors';
import {
  Img,
  Container,
  Text,
  Title,
  TextPrice,
} from './ProductDetails.styled';

export const ProductDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector(selectProductId);

  useEffect(() => {
    dispatch(productDetails(productId));
  }, [dispatch, productId]);
  if (!product) return;

  const { id, images, brand, title, description, stock, rating, price } =
    product;

  return (
    <div>
      <BackLink to={backLinkHref}>come back </BackLink>
      <>
        <Container key={id}>
          <div>
            <Img src={images[0]} alt={title} />
          </div>
          <div>
            <Title>
              {brand}: {title}
            </Title>

            <Text>{description}</Text>
            <Text>Stock: {stock}</Text>
            <Text>Rating: {rating}</Text>
            <TextPrice>Price: {price}$</TextPrice>
          </div>
        </Container>
      </>
    </div>
  );
};

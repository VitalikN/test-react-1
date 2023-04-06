import { BackLink } from 'components/BackLink/BackLink';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { productDetails } from 'redux/operations';
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
  const product = useSelector(state => state.products.productId);
  console.log(product);

  useEffect(() => {
    dispatch(productDetails(productId));
  }, [dispatch, productId]);

  return (
    <div>
      <BackLink to={backLinkHref}>come back </BackLink>
      <>
        {product.map(
          ({ id, images, brand, title, description, stock, rating, price }) => (
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
          )
        )}
      </>
    </div>
  );
};

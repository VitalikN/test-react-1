import { BackLink } from 'components/BackLink/BackLink';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { selectProducts } from 'redux/selectors';
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
  const { productId } = useParams();
  const products = useSelector(selectProducts);

  const visibleProduct = products.filter(
    product => product.id === Number(productId)
  );

  return (
    <div>
      <BackLink to={backLinkHref}>come back </BackLink>
      <>
        {visibleProduct.map(
          ({
            id,
            category,
            images,
            brand,
            title,
            description,
            stock,
            rating,
            price,
          }) => (
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

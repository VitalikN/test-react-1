export const ProductsListMarkup = ({ products }) => {
  console.log(products);
  return (
    <div>
      <ul>
        {products.map(({ id, brand, images, title }) => (
          <li key={id}>
            <h2>{brand}</h2>
            <h3> {title}</h3>
            <img src={`${images[0]}`} alt={title} width="200px" />
          </li>
        ))}
      </ul>
    </div>
  );
};

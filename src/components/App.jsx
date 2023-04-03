import { Home } from 'pages/Home';
import { ProductDetails } from 'pages/ProductDetails';
import { Products } from 'pages/Products';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './NotFound';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

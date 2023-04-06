import { Home } from 'pages/Home';
import { ProductDetails } from 'pages/ProductDetails/ProductDetails';
import { Products } from 'pages/Products';
import { Route, Routes } from 'react-router-dom';
import { AddProduct } from 'pages/addProduct/AddProduct';
import { NotFound } from './NotFound';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="products/" element={<Products />} />
          <Route path="addProduct/" element={<AddProduct />} />
          <Route path="products/:productId" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

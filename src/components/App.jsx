import { Home } from 'pages/Home';
import { ProductDetails } from 'pages/ProductDetails/ProductDetails';
import { Products } from 'pages/Products/Products';
import { Route, Routes } from 'react-router-dom';
import { FormikForm } from 'pages/FormikForm/FormikForm';
import { NotFound } from './NotFound';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { fetchProducts } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="products/" element={<Products />} />
          <Route path="addProduct/" element={<FormikForm />} />
          <Route path="products/:productId" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

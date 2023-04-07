import { BackLink } from 'components/BackLink/BackLink';
import { Formik } from 'formik';
import { useLocation } from 'react-router-dom';
import { Form, FormField, Input, ErrorMessage } from './FormikForm.styled';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addProduct } from 'redux/operations';

const FormikSchema = Yup.object().shape({
  brand: Yup.string().required(),
  title: Yup.string().required(),
  imageUrl: Yup.string().url().required(),
  year: Yup.number().required().positive(),
  rating: Yup.number().required().positive(),
  price: Yup.number().required().positive(),
});

export const FormikForm = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const dispatch = useDispatch();

  const handleSubmit = newProduct => {
    // const { brand: newBrand } = newProduct;
    // const newProduct = evt.target;
    dispatch(addProduct(newProduct));
    console.log(newProduct);
  };

  return (
    <div>
      <BackLink to={backLinkHref}>come back </BackLink>

      <Formik
        initialValues={{
          brand: '',
          title: '',
          imageUrl: '',
          year: 0,
          rating: 0,
          price: 0,
        }}
        onSubmit={(values, { resetForm }) => {
          handleSubmit({
            ...values,
          });
          // resetForm();
        }}
        validationSchema={FormikSchema}
      >
        <Form>
          <FormField>
            Brand
            <Input type="text" name="brand" />
            <ErrorMessage component="span" name="brand" />
          </FormField>
          <FormField>
            Title
            <Input type="text" name="title" />
            <ErrorMessage component="span" name="title" />
          </FormField>
          <FormField>
            Year of publication
            <Input name="imageUrl" placeholder="https://www.google.com" />
            <ErrorMessage component="span" name="imageUrl" />
          </FormField>
          <FormField>
            Year of publication
            <Input type="number" name="year" />
            <ErrorMessage component="span" name="year" />
          </FormField>
          <FormField>
            Rating
            <Input type="number" name="rating" />
            <ErrorMessage component="span" name="rating" />
          </FormField>
          <FormField>
            Price
            <Input type="number" name="price" />
            <ErrorMessage component="span" name="price" />
          </FormField>
          <button type="submit">Save product</button>
        </Form>
      </Formik>
    </div>
  );
};

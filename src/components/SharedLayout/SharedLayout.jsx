import { Outlet } from 'react-router-dom';
import { Header, StyledLink, Main } from './SharedLayout.styled';
import { FaPlus } from 'react-icons/fa';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="products">Products</StyledLink>
          <StyledLink to="addProduct">
            <FaPlus />
          </StyledLink>
        </nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};

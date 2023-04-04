import { Outlet } from 'react-router-dom';
import { Header, StyledLink, Main } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/products">Products</StyledLink>
        </nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};

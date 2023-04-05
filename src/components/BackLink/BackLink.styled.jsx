import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 20px;
  margin: 20px;

  font-size: 20px;
  font-weight: 600;
  color: #888;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #fff;
  }
`;

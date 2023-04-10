import styled from '@emotion/styled';

export const Subject = styled.h2`
  display: grid;
  place-items: center;
  font-size: 25px;
  font-weight: 700;
  margin: 30px;
  color: #888;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #fff;
  }
`;

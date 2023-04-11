import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Select = styled.select`
  width: 100%;
  max-width: 200px;
  box-sizing: border-box;
  padding: 10px;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 10px 0 0 10px;
  box-shadow: inset 0 2px 10px 1px rgba(0, 0, 0, 0.5),
    inset 0 0 0 60px rgba(0, 0, 0, 0.5), 0 1px rgba(40, 186, 104, 0.08);
  transition: 0.5s linear;
  &:focus,
  &:hover {
    color: #0f0f0f;
    outline: none;
    box-shadow: inset 0 1px 3px 1px rgba(0, 0, 0, 0.5),
      inset 0 0 0 60px rgba(0, 0, 0, 0), 0 1px rgba(133, 23, 23, 0.08);
  }
`;

export const Button = styled.button`
  width: 40px;
  box-sizing: border-box;
  padding: 10px;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 0 10px 10px 0;
  box-shadow: inset 0 2px 10px 1px rgba(0, 0, 0, 0.5),
    inset 0 0 0 60px rgba(0, 0, 0, 0.5), 0 1px rgba(40, 186, 104, 0.08);
  transition: 0.5s linear;
  &:focus,
  &:hover {
    color: #0f0f0f;
    outline: none;
    box-shadow: inset 0 1px 3px 1px rgba(0, 0, 0, 0.5),
      inset 0 0 0 60px rgba(0, 0, 0, 0), 0 1px rgba(133, 23, 23, 0.08);
  }
`;

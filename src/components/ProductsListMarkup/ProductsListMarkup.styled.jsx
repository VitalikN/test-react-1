import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: calc(100vw - 48px);
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const Item = styled.li`
  position: relative;
  background: #0f0f0f;
  padding: 18px;
  width: 280px;
  border-radius: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

export const Img = styled.img`
  display: block;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  height: auto;
  width: 175px;
  height: 175px;
  border-radius: 10px;
  transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.1);
  }
`;
export const Title = styled.h2`
  font-size: 20px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #888;
  font-weight: 600;
  justify-content: center;
  margin-top: 25px;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #fff;
  }
`;

export const Subject = styled.h3`
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #888;
  font-weight: 500;
  justify-content: center;
  margin-top: 10px;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #fff;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;
export const Text = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  color: #888;
  text-align: left;
  padding: 5px;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #fff;
  }
`;
export const Btn = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background-color: #0f0f0f;
  border: none;
  border-radius: 50%;
  padding: 10px;
`;

export const Chip = styled.span`
  background-color: #0f0f0f;

  color: #888;
  font-size: 25px;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #fff;
  }
`;

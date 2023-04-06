import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px 20px;
  margin-top: 10px;
  background: #0f0f0f;
  /* width: 100%; */
  /* height: 100%; */

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Img = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 10px;

  margin-right: 30px;
  transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.04);
  }
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;
export const Title = styled.h2`
  font-size: 24px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #fff;
  font-weight: 600;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 15px;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #888;
  text-align: left;
  padding: 5px;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #fff;
  }
`;
export const TextPrice = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 18px;
  color: #888;
  text-align: left;
  padding: 5px;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #fff;
  }
`;

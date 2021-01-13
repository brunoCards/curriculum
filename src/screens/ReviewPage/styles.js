import styled from 'styled-components';

export const ReviewPageMainContainer = styled.main`
  width: 100vw;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

export const ReviewDataContainer = styled.div`
  width: 70%;
  height: 100%;
  padding: 10px;
  border: 4px solid var(--black);
  border-radius: 8px 0 0 8px;

  background-color: var(--blue);
`;

export const ReviewDataTitle = styled.h3`
  width: 100%;

  font-family: 'Baloo 2', cursive;
  font-size: 34px;
  color: var(--purple);
`;

export const ReviewFooter = styled.footer`
  width: 100%;
  height: 10vh;
`;

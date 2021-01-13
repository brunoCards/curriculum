import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  height: 65vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

export const LargeMain = styled.main`
  width: 100%;
  height: 60vh;

  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;

  &.isDescription {
    padding-top: 7vh;
  }

  &.isActivities {
    padding-top: 15vh;
  }
`;

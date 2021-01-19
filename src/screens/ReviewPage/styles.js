import styled from 'styled-components';

export const ReviewPageLayout = styled.div`
  width: 100vw;
  margin: 10px;

  display: grid;
  grid-template-areas:
    'pd . ac'
    'pd . ac'
    'pd . ac'
    'pd . id'
    'pd . pr';
  grid-template-columns: 25vw 30px 65vw;
`;

export const PersonalData = styled.section`
  width: 100%;

  grid-area: pd;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #00cec9;
  font-weight: bold;
`;

export const ReviewPageTitle = styled.h3`
  width: 90%;
  height: 100%;

  font-size: 43px;
`;

export const ReviewPageCityState = styled.div`
  width: 90%;
  margin-top: 5vh;
`;

export const CityStateText = styled.h5`
  font-size: 25px;
  font-weight: bold;
`;

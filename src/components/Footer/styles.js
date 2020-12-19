import styled from 'styled-components';

export const MainFooter = styled.footer`
  width: 100%;
  height: 10%;
  padding-top: 60px;

  display: flex;
  justify-content: flex-end;
`;

export const WithAddButtonFooter = styled.footer`
  width: 100%;
  height: 15%;
  padding-top: 60px;

  display: flex;
  justify-content: space-between;
`;

export const NextButton = styled.img`
  width: 120px;
  object-fit: contain;

  cursor: pointer;

  &:hover {
    background-color: rgba(142, 68, 173, 0.8);
    border-radius: 50%;
  }
`;

export const AddButton = styled.img`
  width: 70px;
  margin-top: 50px;
  object-fit: contain;

  cursor: pointer;

  &:hover {
    background-color: rgba(80, 255, 146, 0.8);
    border-radius: 50%;
  }
`;

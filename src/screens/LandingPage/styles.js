import styled from 'styled-components';
import { Box } from '@material-ui/core';

export const MainContainer = styled.main`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
`;

export const CartoonMan = styled.img`
  width: 650px;

  object-fit: contain;
`;

export const StartButton = styled.img`
  width: 250px;

  object-fit: contain;

  cursor: pointer;

  &:hover {
    background-color: rgba(142, 68, 173, 0.8);
    border-radius: 50%;
  }
`;

export const MainParagraph = styled.p`
  width: 340px;

  font-size: 30px;
  font-weight: bold;
  text-align: justify;

  .green {
    color: var(--green_text);
  }

  .purple {
    color: var(--purple_text_add_button);
  }

  .red {
    color: var(--red_text);
  }
`;

export const AdjustLayoutBox = styled(Box)`
  height: 500px;
  margin-left: 50px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

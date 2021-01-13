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
    color: var(--red);
  }
`;

export const AdjustLayoutBox = styled(Box)`
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
`;

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

export const StartButton = styled.button`
  width: 340px;
  height: 70px;
  border-radius: 6px;
  box-shadow: 0 0 10px 10px var(--text_input);
  outline: none;

  color: #6a6a6a;
  font-size: 25px;
  font-weight: bold;

  opacity: 0.9;

  cursor: pointer;

  background-color: #555555;

  &:hover {
    transition: 0.3s cubic-bezier(0.6, 0.04, 0.98, 0.335);
    background-color: #27ae60;
    color: var(--purple_text_next_button);

    opacity: 1;

    box-shadow: none;

    border: 3px solid var(--text_input);
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

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
`;

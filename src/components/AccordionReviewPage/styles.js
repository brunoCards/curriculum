import styled from 'styled-components';

//imports material-ui
import { Container } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetail from '@material-ui/core/AccordionDetails';

import { withStyles } from '@material-ui/core/styles';

export const ReviewPageMainContainer = styled(Container)`
  width: 100vw;
  display: flex;
  justify-content: center;
  padding-top: 5vh;
`;

export const AccordionContainer = withStyles({
  root: {
    width: '100%',
    marginBottom: '1vh',
    borderStyle: 'solid',
    borderRadius: 8,
    backgroundColor: '#dff9fb',

    '&:hover': {
      backgroundColor: '#bee8ea',
    },

    '&:nth-child(3)': {
      width: '92.5%',
      marginLeft: '6vw',
    },

    '&:nth-child(4)': {
      width: '85%',
      marginLeft: '12vw',
    },
  },
})(Accordion);
export const AccordionBoxDetail = withStyles({
  root: {
    width: '100%',
    height: '100%',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
  },
})(AccordionDetail);

export const AccordionText = styled.p`
  width: 100%;
  height: 100px;
  border: 1px dotted var(--text_input);

  padding-left: 16px;

  font-size: 20px;
  text-align: justify;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: var(--purple_text_next_button);
    cursor: pointer;
  }
`;

export const AccordionTitle = styled.h3`
  font-size: 43px;
  font-family: 'Baloo 2', cursive;

  color: var(--purple_text_next_button);
`;

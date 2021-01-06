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
`;

export const AccordionContainer = withStyles({
  root: {
    width: '100%',
    marginBottom: '1vh',
    borderStyle: 'solid',
    borderRadius: 8,
    backgroundColor: 'rgba(176, 255, 240, 0.6)',
  },
})(Accordion);

export const AccordionBoxDetail = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
})(AccordionDetail);

export const AccordionText = styled.p`
  width: 100%;
  height: 40%;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AccordionTitle = styled.h3`
  font-size: 35px;
  font-family: 'Baloo 2', cursive;
`;

import React from 'react';

//material-ui/core
import { IconButton } from '@material-ui/core';

//styled-components
import {
  MainFooter,
  NextButton,
  NextButtonWithAdd,
  AddButton,
  WithAddButtonFooter,
} from './styles';

const Footer = ({ tosubmit, toAdd, hasAddButton }) => {
  return (
    <>
      {hasAddButton ? (
        <WithAddButtonFooter>
          <input accept="image/*" id="icon-arrow-button" type="submit" />
          <label htmlFor="icon-arrow-button">
            <IconButton>
              <AddButton />
            </IconButton>
          </label>
          <input accept="image/*" id="icon-arrow-button" type="submit" />
          <label htmlFor="icon-arrow-button">
            <IconButton>
              <NextButtonWithAdd onClick={tosubmit} />
            </IconButton>
          </label>
        </WithAddButtonFooter>
      ) : (
        <MainFooter>
          <input accept="image/*" id="icon-arrow-button" type="submit" />
          <label htmlFor="icon-arrow-button">
            <IconButton>
              <NextButton onClick={tosubmit} />
            </IconButton>
          </label>
        </MainFooter>
      )}
    </>
  );
};

export default Footer;

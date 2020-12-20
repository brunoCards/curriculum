import React from 'react';

//imagens
import nextbutton from '../../assets/next_button.svg';
import addbutton from '../../assets/add_button.svg';

//styled-components
import {
  MainFooter,
  NextButton,
  AddButton,
  WithAddButtonFooter,
} from './styles';

const Footer = ({ tosubmit, toAdd, hasAddButton }) => {
  return (
    <>
      {hasAddButton ? (
        <WithAddButtonFooter>
          <AddButton
            src={addbutton}
            alt="botão redondo com seta pra direita"
            onClick={toAdd}
          />
          <NextButton
            src={nextbutton}
            alt="botão redondo com seta pra direita"
          />
        </WithAddButtonFooter>
      ) : (
        <MainFooter>
          <NextButton
            src={nextbutton}
            alt="botão redondo com seta pra direita"
          />
        </MainFooter>
      )}
    </>
  );
};

export default Footer;

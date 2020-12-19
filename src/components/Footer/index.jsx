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
            type="submit"
          />
          <NextButton
            src={nextbutton}
            alt="botão redondo com seta pra direita"
            onClick={tosubmit}
            type="submit"
          />
        </WithAddButtonFooter>
      ) : (
        <MainFooter>
          <NextButton
            src={nextbutton}
            alt="botão redondo com seta pra direita"
            onClick={tosubmit}
            type="submit"
          />
        </MainFooter>
      )}
    </>
  );
};

export default Footer;

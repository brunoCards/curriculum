import React from 'react';

//imagens
import nextbutton from '../../assets/next_button.svg';

//styled-components
import { MainFooter, NextButton } from './styles';

const Footer = ({ tosubmit }) => {
  return (
    <>
      <MainFooter>
        <NextButton
          src={nextbutton}
          alt="botão redondo com seta pra direita"
          onClick={tosubmit}
          type="submit"
        />
      </MainFooter>
    </>
  );
};

export default Footer;

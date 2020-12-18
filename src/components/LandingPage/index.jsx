import React from 'react';
//imagens
import cartoonchar from '../../assets/cartoon_char.svg';
import enterbutton from '../../assets/enter_button.svg';

//styled-components
import {
  LandingPageContainer,
  CartoonMan,
  MainContainer,
  StartButton,
  MainParagraph,
  AdjustLayoutBox,
} from './styles';

//components
import Header from '../Header';

const LandingPage = () => {
  return (
    <>
      <LandingPageContainer>
        <Header isHome />
        <MainContainer>
          <CartoonMan src={cartoonchar} alt="homem-cartoonizado-no-notebook" />
          <AdjustLayoutBox>
            <StartButton src={enterbutton} alt="botão-redondo-seta-entrar" />
            <MainParagraph>
              Alguns <span className="green">minutinhos</span> e tenha seu
              <span className="purple"> currículo </span>prontinho em um
              <span className="red"> &nbsp; arquivo.pdf</span>
            </MainParagraph>
          </AdjustLayoutBox>
        </MainContainer>
      </LandingPageContainer>
    </>
  );
};

export default LandingPage;

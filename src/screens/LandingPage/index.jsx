import React from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import routers-goTo's
import { goToNamePage } from '../../routers/goToPages';

//imagens
import cartoonchar from '../../assets/cartoon_char.svg';

//styled-components
import {
  CartoonMan,
  MainContainer,
  StartButton,
  MainParagraph,
  AdjustLayoutBox,
} from './styles';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';

//components
import Header from '../../components/Header';

const LandingPage = () => {
  const { history } = useFormulary();
  return (
    <>
      <Header isHome />
      <PagesContainer>
        <MainContainer>
          <CartoonMan src={cartoonchar} alt="homem-cartoonizado-no-notebook" />
          <AdjustLayoutBox>
            <StartButton onClick={() => goToNamePage(history)}>
              Quero um CurriculuM
            </StartButton>
            <MainParagraph>
              Alguns <span className="green">minutinhos</span> e tenha seu
              <span className="purple"> currículo </span>prontinho em
              <span className="red"> arquivo.pdf</span>
            </MainParagraph>
          </AdjustLayoutBox>
        </MainContainer>
      </PagesContainer>
    </>
  );
};

export default LandingPage;

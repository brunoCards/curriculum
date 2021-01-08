import React from 'react';

//Global-components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GlobalForm from '../../components/GlobalForm';
import Text from '../../components/Text';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
<<<<<<< HEAD
import { Main } from '../../styles/Components/MainContainer/styles';
import { Input } from '../../styles/Components/Input/styles';
import { BoxIcon } from '../../styles/Components/BoxIcon/styles';

import {
  BackButton,
  NextButton,
  BackToButton,
} from '../../styles/Components/Buttons/styles';

const CityInputPage = ({ navigation, formData, setForm, go }) => {
  const { city } = formData;
=======
import { MainContainer } from '../../styles/Components/MainContainer/styles';

const CityInputPage = () => {
>>>>>>> 99bb68f104945ad5eacbc8428db44c5f61efb7a7
  return (
    <>
      <Header />
      <PagesContainer>
<<<<<<< HEAD
        <Main>
          <BoxIcon>
            {city !== '' ? (
              <BackToButton onClick={() => go('review')} />
            ) : (
              <BackToButton className="ishidden" onClick={() => go('review')} />
            )}
          </BoxIcon>
=======
        <MainContainer>
>>>>>>> 99bb68f104945ad5eacbc8428db44c5f61efb7a7
          <Text
            content="Qual a cidade que"
            span="você"
            continueContent="mora?"
          />
          <GlobalForm isOneInput isCity />
        </MainContainer>
        <Footer />
      </PagesContainer>
    </>
  );
};
export default CityInputPage;

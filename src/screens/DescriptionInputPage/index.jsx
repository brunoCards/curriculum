import React from 'react';

//Global-components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GlobalForm from '../../components/GlobalForm';
import Text from '../../components/Text';

<<<<<<< HEAD
//import FooterStyleComponents
import { LargeFooter } from '../../styles/Components/Footer/styles';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { LargeMain } from '../../styles/Components/MainContainer/styles';
import { LargeInput } from '../../styles/Components/Input/styles';
import { BoxIcon } from '../../styles/Components/BoxIcon/styles';

import {
  BackButton,
  NextButton,
  BackToButton,
} from '../../styles/Components/Buttons/styles';

const DescriptionInputPage = ({ navigation, formData, setForm, go }) => {
  const { description } = formData;
=======
//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { MainContainer } from '../../styles/Components/MainContainer/styles';
>>>>>>> 99bb68f104945ad5eacbc8428db44c5f61efb7a7

const DescriptionInputPage = () => {
  return (
    <>
      <Header />
      <PagesContainer>
<<<<<<< HEAD
        <LargeMain>
          <BoxIcon>
            {description !== '' ? (
              <BackToButton onClick={() => go('review')} />
            ) : (
              <BackToButton className="ishidden" onClick={() => go('review')} />
            )}
          </BoxIcon>
=======
        <MainContainer>
>>>>>>> 99bb68f104945ad5eacbc8428db44c5f61efb7a7
          <Text
            content="Faça uma breve descrição sobre"
            span="você, e o"
            isgreen="seu"
            continueContent="momento atual. E o que"
            isPurple="você"
            afterEmphasys="espera de uma empresa?"
            hasParagraph
          />
<<<<<<< HEAD
          <LargeInput
            name="description"
            value={description}
            onChange={setForm}
          />
        </LargeMain>
        <LargeFooter>
          <BackButton onClick={() => navigation.previous()} />
          <NextButton onClick={() => navigation.next()} />
        </LargeFooter>
=======
          <GlobalForm isOneInput isDescription />
        </MainContainer>

        <Footer />
>>>>>>> 99bb68f104945ad5eacbc8428db44c5f61efb7a7
      </PagesContainer>
    </>
  );
};
export default DescriptionInputPage;

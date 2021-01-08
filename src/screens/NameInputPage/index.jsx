import React from 'react';

//Global-components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GlobalForm from '../../components/GlobalForm';
import Text from '../../components/Text';
<<<<<<< HEAD
import { Main } from '../../styles/Components/MainContainer/styles';
import { Input } from '../../styles/Components/Input/styles';

//import FooterStyleComponents
import { MainFooter } from '../../styles/Components/Footer/styles';

import {
  BackButton,
  NextButton,
  BackToButton,
} from '../../styles/Components/Buttons/styles';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { BoxIcon } from '../../styles/Components/BoxIcon/styles';

const NameInputPage = ({ navigation, formData, setForm, go }) => {
  const { name } = formData;

=======

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { MainContainer } from '../../styles/Components/MainContainer/styles';

const NameInputPage = () => {
>>>>>>> 99bb68f104945ad5eacbc8428db44c5f61efb7a7
  return (
    <>
      <Header />
      <PagesContainer>
<<<<<<< HEAD
        <Main>
          <BoxIcon>
            {name !== '' ? (
              <BackToButton onClick={() => go('review')} />
            ) : (
              <BackToButton className="ishidden" onClick={() => go('review')} />
            )}
          </BoxIcon>
          <Text content="Olá como" span="você" continueContent="se chama?" />
          <Input name="name" value={name} onChange={setForm} />
        </Main>
        <MainFooter>
          <BackButton onClick={() => navigation.previous()} />
          <NextButton onClick={() => navigation.next()} />
        </MainFooter>
=======
        <MainContainer>
          <Text content="Olá como " span="você" continueContent="se chama?" />
          <GlobalForm isOneInput isName />
        </MainContainer>
        <Footer />
>>>>>>> 99bb68f104945ad5eacbc8428db44c5f61efb7a7
      </PagesContainer>
    </>
  );
};
export default NameInputPage;

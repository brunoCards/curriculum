import React from 'react';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';

//import FooterStyleComponents
import { MainFooter } from '../../styles/Components/Footer/styles';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { LargeMain } from '../../styles/Components/MainContainer/styles';
import { LargeInput } from '../../styles/Components/Input/styles';
import { BackButton, NextButton } from '../../styles/Components/Buttons/styles';

const DescriptionInputPage = ({ navigation, formData, setForm }) => {
  const { description } = formData;

  return (
    <>
      <Header />
      <PagesContainer>
        <LargeMain>
          <Text
            content="Faça uma breve descrição sobre"
            span="você, e o"
            isgreen="seu"
            continueContent="momento atual. E o que"
            ispurple="você"
            afterEmphasys="espera de uma empresa?"
            hasParagraph
          />
          <LargeInput
            name="description"
            value={description}
            onChange={setForm}
          />
        </LargeMain>
        <MainFooter>
          <BackButton onClick={() => navigation.previous()} />
          <NextButton onClick={() => navigation.next()} />
        </MainFooter>
      </PagesContainer>
    </>
  );
};
export default DescriptionInputPage;

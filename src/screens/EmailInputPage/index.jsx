import React from 'react';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';
import { Main } from '../../styles/Components/MainContainer/styles';

//import FooterStyleComponents
import { MainFooter } from '../../styles/Components/Footer/styles';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { Input } from '../../styles/Components/Input/styles';
import { BackButton, NextButton } from '../../styles/Components/Buttons/styles';

const EmailInputPage = ({ navigation, formData, setForm }) => {
  const { email } = formData;

  return (
    <>
      <Header />
      <PagesContainer>
        <Main>
          <Text content="Qual o" span="seu" continueContent="melhor email?" />
          <Input name="email" value={email} onChange={setForm} />
        </Main>
        <MainFooter>
          <BackButton onClick={() => navigation.previous()} />
          <NextButton onClick={() => navigation.next()} />
        </MainFooter>
      </PagesContainer>
    </>
  );
};
export default EmailInputPage;

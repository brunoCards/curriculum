import React from 'react';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';

//import FooterStyleComponents
import { MainFooter } from '../../styles/Components/Footer/styles';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { Main } from '../../styles/Components/MainContainer/styles';
import { Input } from '../../styles/Components/Input/styles';
import { BackButton, NextButton } from '../../styles/Components/Buttons/styles';

const StartDatePage = ({ navigation, formData, setForm }) => {
  const { startDate } = formData;

  return (
    <>
      <Header />
      <PagesContainer>
        <Main>
          <Text
            content="Qual a data de"
            span="início"
            continueContent=" do curso?"
          />
          <Input name="startDate" value={startDate} onChange={setForm} />
        </Main>
        <MainFooter>
          <BackButton onClick={() => navigation.previous()} />
          <NextButton onClick={() => navigation.next()} />
        </MainFooter>
      </PagesContainer>
    </>
  );
};

export default StartDatePage;

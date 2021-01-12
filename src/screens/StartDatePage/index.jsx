import React from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import routers-goTo's
import { goToEndDateCoursePage, goBack } from '../../routers/goToPages';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';

//import FooterStyleComponents
import { MainFooter } from '../../styles/Components/Footer/styles';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { Main } from '../../styles/Components/MainContainer/styles';
import { Input } from '../../styles/Components/Input/styles';
import { BoxIcon } from '../../styles/Components/BoxIcon/styles';

import {
  BackButton,
  NextButton,
  BackToButton,
} from '../../styles/Components/Buttons/styles';

const StartDatePage = () => {
  const { history, form, handleOnchangeInput } = useFormulary();
  return (
    <>
      <Header />
      <PagesContainer>
        <Main>
          <BoxIcon>
            {form.startdate !== '' ? (
              <BackToButton />
            ) : (
              <BackToButton className="ishidden" />
            )}
          </BoxIcon>
          <Text
            content="Qual a data de"
            span="início"
            continueContent=" do curso?"
          />
          <Input
            name="startdate"
            value={form.startdate}
            onChange={handleOnchangeInput}
          />
        </Main>
        <MainFooter>
          <BackButton onClick={() => goBack(history)} />
          <NextButton onClick={() => goToEndDateCoursePage(history)} />
        </MainFooter>
      </PagesContainer>
    </>
  );
};

export default StartDatePage;

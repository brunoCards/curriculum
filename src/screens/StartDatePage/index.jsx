import React from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import routers-goTo's
import { goToEndDateCoursePage, goBack } from '../../routers/goToPages';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';

//styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { HeaderTitle } from '../../styles/Components/HeaderTitle/styles';
import { Main } from '../../styles/Components/MainContainer/styles';
import { InputBox } from '../../styles/Components/InputBox/styles';
import { Input } from '../../styles/Components/Input/styles';
import { MainFooter } from '../../styles/Components/Footer/styles';
import {
  BackButton,
  NextButton,
  BackToButton,
} from '../../styles/Components/Buttons/styles';

const StartDatePage = () => {
  const { history, form, handleOnchangeInput } = useFormulary();
  return (
    <>
      <Header>
        <HeaderTitle className="isAcademic">Dados Acadêmicos</HeaderTitle>
      </Header>
      <PagesContainer>
        <Main>
          <Text
            content="Qual a data de"
            span="início"
            continueContent=" do curso?"
          />
          <InputBox>
            {form.startdate !== '' ? (
              <BackToButton />
            ) : (
              <BackToButton className="ishidden" />
            )}
            <Input
              className="withoutAdd"
              name="startdate"
              value={form.startdate}
              onChange={handleOnchangeInput}
            />
          </InputBox>
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

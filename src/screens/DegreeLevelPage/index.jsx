import React from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import routers-goTo's
import {
  goToCourseNamePage,
  goBack,
  goToReviewPage,
} from '../../routers/goToPages';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';

//styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { HeaderTitle } from '../../styles/Components/HeaderTitle/styles';
import { Main } from '../../styles/Components/MainContainer/styles';
import { InputBox } from '../../styles/Components/InputBox/styles';
import { Input } from '../../components/Input/styles';
import { MainFooter } from '../../styles/Components/Footer/styles';

import {
  BackButton,
  NextButton,
  BackToButton,
} from '../../styles/Components/Buttons/styles';

const DegreeLevelPage = () => {
  const { history, form, handleOnchangeInput } = useFormulary();

  return (
    <>
      <Header>
        <HeaderTitle className="isAcademic">Dados Acadêmicos</HeaderTitle>
      </Header>
      <PagesContainer>
        <Main>
          <Text
            content="Nível de"
            span="graduação"
            continueContent="do curso"
          />
          <InputBox>
            {form.degree !== '' ? (
              <BackToButton onClick={() => goToReviewPage(history)} />
            ) : (
              <BackToButton className="isHidden" />
            )}
            <Input
              className="withoutAdd"
              name="degree"
              value={form.degree}
              onChange={handleOnchangeInput}
              placeholder="Ex: Especialização, Graduação, MBA"
            />
          </InputBox>
        </Main>
        <MainFooter>
          <BackButton onClick={() => goBack(history)} />
          <NextButton onClick={() => goToCourseNamePage(history)} />
        </MainFooter>
      </PagesContainer>
    </>
  );
};

export default DegreeLevelPage;

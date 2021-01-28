import React from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import routers-goTo's
import {
  goToActtvitiesPage,
  goBack,
  goToReviewPage,
} from '../../routers/goToPages';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';
import InputComponent from '../../components/Input';

//styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { HeaderTitle } from '../../styles/Components/HeaderTitle/styles';
import { Main } from '../../styles/Components/MainContainer/styles';
import { InputBox } from '../../styles/Components/InputBox/styles';
import { MainFooter } from '../../styles/Components/Footer/styles';
import {
  BackButton,
  NextButton,
  BackToButton,
} from '../../styles/Components/Buttons/styles';

const ResignDatePage = () => {
  const { history, form, handleOnchangeInput } = useFormulary();

  return (
    <>
      <Header>
        <HeaderTitle className="isProffesional">
          Dados Profissionais
        </HeaderTitle>
      </Header>
      <PagesContainer>
        <Main>
          <Text content="Qual a data de" span="recisão?" />
          <InputBox>
            {form.resigndate !== '' ? (
              <BackToButton onClick={() => goToReviewPage(history)} />
            ) : (
              <BackToButton className="isHidden" />
            )}
            <InputComponent
              className="withoutAdd"
              name="resigndate"
              value={form.resigndate}
              onChange={handleOnchangeInput}
              placeholder={'Ex: jul/2020'}
              mask="aaa/9999"
            />
          </InputBox>
        </Main>
        <MainFooter>
          <BackButton onClick={() => goBack(history)} />
          <NextButton onClick={() => goToActtvitiesPage(history)} />
        </MainFooter>
      </PagesContainer>
    </>
  );
};

export default ResignDatePage;

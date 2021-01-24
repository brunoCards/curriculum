import React from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import routers-goTo's
import {
  goToDegreePage,
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
import { Input } from '../../styles/Components/Input/styles';
import { MainFooter } from '../../styles/Components/Footer/styles';
import {
  BackButton,
  NextButton,
  BackToButton,
} from '../../styles/Components/Buttons/styles';

const EducationalInstitutionPage = () => {
  const { history, form, handleOnchangeInput } = useFormulary();

  return (
    <>
      <Header>
        <HeaderTitle className="isAcademic">Dados Acadêmicos</HeaderTitle>
      </Header>
      <PagesContainer>
        <Main>
          <Text
            content="Qual o"
            span="nome"
            continueContent="da instituição?"
          />
          <InputBox>
            {form.institution !== '' ? (
              <BackToButton onClick={() => goToReviewPage(history)} />
            ) : (
              <BackToButton className="ishidden" />
            )}
            <Input
              className="withoutAdd"
              name="institution"
              value={form.institution}
              onChange={handleOnchangeInput}
              placeholder="Ex: Nome da minha faculdade"
            />
          </InputBox>
        </Main>
        <MainFooter>
          <BackButton onClick={() => goBack(history)} />
          <NextButton onClick={() => goToDegreePage(history)} />
        </MainFooter>
      </PagesContainer>
    </>
  );
};

export default EducationalInstitutionPage;

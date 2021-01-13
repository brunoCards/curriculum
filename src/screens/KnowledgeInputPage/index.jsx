import React from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import routers-goTo's
import { goToInstitutionPage, goBack } from '../../routers/goToPages';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';

//styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { HeaderTitle } from '../../styles/Components/HeaderTitle/styles';
import { BoxIcon } from '../../styles/Components/BoxIcon/styles';
import { Main } from '../../styles/Components/MainContainer/styles';
import { InputBox } from '../../styles/Components/InputBox/styles';
import { Input } from '../../styles/Components/Input/styles';
import { MainFooter } from '../../styles/Components/Footer/styles';
import {
  BackButton,
  NextButton,
  BackToButton,
  AddButton,
} from '../../styles/Components/Buttons/styles';

const KnowledgeInputPage = () => {
  const {
    history,
    form,
    handleOnchangeInput,
    handleAddingKnowledges,
    knowledges,
  } = useFormulary();

  return (
    <>
      <Header>
        <HeaderTitle className="isPersonal">Dados Pessoais</HeaderTitle>
      </Header>
      <PagesContainer>
        <Main>
          <BoxIcon>
            {form.knowledge !== '' ? (
              <BackToButton />
            ) : (
              <BackToButton className="ishidden" />
            )}
          </BoxIcon>
          {knowledges.length > 0 ? (
            <Text
              span="Você"
              continueContent="possui, mais algum conhecimento?"
            />
          ) : (
            <Text
              content="Quais os conhecimentos que"
              span="você"
              continueContent="possui"
            />
          )}
          <InputBox>
            <Input
              name="knowledge"
              value={form.knowledge}
              onChange={handleOnchangeInput}
            />
            {form.knowledge !== '' ? (
              <AddButton
                onClick={() => handleAddingKnowledges(form.knowledge)}
              />
            ) : (
              <AddButton className="isdisabled" aria-disabled="true" />
            )}
          </InputBox>
        </Main>
        <MainFooter>
          <BackButton onClick={() => goBack(history)} />
          <NextButton onClick={() => goToInstitutionPage(history)} />
        </MainFooter>
      </PagesContainer>
    </>
  );
};

export default KnowledgeInputPage;

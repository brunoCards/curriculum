import React from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import routers-goTo's
import {
  goToKnowledgesPage,
  goBack,
  goToReviewPage,
} from '../../routers/goToPages';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';

//styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { HeaderTitle } from '../../styles/Components/HeaderTitle/styles';
import { LargeMain } from '../../styles/Components/MainContainer/styles';
import { LargeInputBox } from '../../styles/Components/InputBox/styles';
import { LargeInput } from '../../styles/Components/Input/styles';
import { LargeFooter } from '../../styles/Components/Footer/styles';
import {
  BackButton,
  NextButton,
  BackToButton,
} from '../../styles/Components/Buttons/styles';

const DescriptionInputPage = () => {
  const { history, form, handleOnchangeInput } = useFormulary();

  return (
    <>
      <Header>
        <HeaderTitle className="isPersonal">Dados Pessoais</HeaderTitle>
      </Header>
      <PagesContainer>
        <LargeMain className="isDescription">
          <Text
            content="Faça uma breve descrição sobre"
            span="você,"
            isgreen="seu momento"
            continueContent="atual. E o que"
            ispurple="você"
            afterEmphasys="espera de uma empresa?"
            hasParagraph
          />
          <LargeInputBox>
            {form.description !== '' ? (
              <BackToButton onClick={() => goToReviewPage(history)} />
            ) : (
              <BackToButton className="ishidden" />
            )}
            <LargeInput
              className="withoutAdd"
              name="description"
              value={form.description}
              onChange={handleOnchangeInput}
              placeholder="Sou uma pessoa legal, já fui Super-Heroi, mas hoje busco um emprego, pois fui demitido da Liga da Justiça."
            />
          </LargeInputBox>
        </LargeMain>
        <LargeFooter>
          <BackButton onClick={() => goBack(history)} />
          <NextButton onClick={() => goToKnowledgesPage(history)} />
        </LargeFooter>
      </PagesContainer>
    </>
  );
};
export default DescriptionInputPage;

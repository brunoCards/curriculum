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
import { LargeInput } from '../../components/Input/styles';
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
            content="Faça um breve resumo sobre"
            span="você,"
            isgreen="suas experiências em projetos"
            continueContent="ou trabalhos que"
            ispurple="você"
            afterEmphasys="ja fez ou participou:"
            hasParagraph
          />
          <LargeInputBox>
            {form.description !== '' ? (
              <BackToButton onClick={() => goToReviewPage(history)} />
            ) : (
              <BackToButton className="isHidden" />
            )}
            <LargeInput
              className="withoutAdd"
              name="description"
              value={form.description}
              onChange={handleOnchangeInput}
              placeholder="Já transformei um carro do exército americano em um batmóvel, lutei contra muitos vilões usando meus batequipamentos, fui treinado pelo Ra's al Ghul, e me tornei o Batman"
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

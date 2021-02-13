import React from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import routers-goTo's
import {
  goToStateInputPage,
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

const NameInputPage = () => {
  const { history, form, handleOnchangeInput } = useFormulary();

  return (
    <>
      <Header>
        <HeaderTitle className="isPersonal">Dados Pessoais</HeaderTitle>
      </Header>
      <PagesContainer>
        <Main>
          <Text content="Olá como" span=" você " continueContent="se chama?" />
          <InputBox>
            <Input
              className="leftborderRadius"
              name="name"
              value={form.name}
              onChange={handleOnchangeInput}
              placeholder="Ex: Bruce Wayne"
            />
            {form.name !== '' ? (
              <BackToButton
                className="rightradius"
                onClick={() => goToReviewPage(history)}
              />
            ) : (
              <BackToButton id="rightradius" className="isHidden" />
            )}
          </InputBox>
        </Main>
        <MainFooter>
          <BackButton onClick={() => goBack(history)} />
          <NextButton onClick={() => goToStateInputPage(history)} />
        </MainFooter>
      </PagesContainer>
    </>
  );
};
export default NameInputPage;

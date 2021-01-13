import React from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import routers-goTo's
import { goToDescriptionPage, goBack } from '../../routers/goToPages';

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

const PhoneInputPage = () => {
  const {
    history,
    form,
    handleOnchangeInput,
    handleAddingPhones,
    phones,
  } = useFormulary();

  return (
    <>
      <Header>
        <HeaderTitle className="isPersonal">Dados Pessoais</HeaderTitle>
      </Header>
      <PagesContainer>
        <Main>
          <BoxIcon>
            {phones.length > 0 ? (
              <BackToButton />
            ) : (
              <BackToButton className="ishidden" />
            )}
          </BoxIcon>
          {phones.length > 0 ? (
            <Text
              span="Você"
              continueContent="deseja adicionar mais algum telefone?"
            />
          ) : (
            <Text
              content="Qual o"
              span="seu"
              continueContent="telefone principal?"
            />
          )}
          <InputBox>
            <Input
              name="phone"
              value={form.phone}
              onChange={handleOnchangeInput}
            />
            {form.phone !== '' ? (
              <AddButton onClick={() => handleAddingPhones(form.phone)} />
            ) : (
              <AddButton className="isdisabled" aria-disabled="true" />
            )}
          </InputBox>
        </Main>
        <MainFooter>
          <BackButton onClick={() => goBack(history)} />
          <NextButton onClick={() => goToDescriptionPage(history)} />
        </MainFooter>
      </PagesContainer>
    </>
  );
};
export default PhoneInputPage;

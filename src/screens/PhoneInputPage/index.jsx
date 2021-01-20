import React from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import routers-goTo's
import {
  goToDescriptionPage,
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
import { PhonesIcon } from '../../styles/Components/Icons/styles';
import { ListBox, ListItem } from '../../styles/Components/List/styles';
import { PhonesArea } from '../../components/Text/styles';
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
            {phones.length > 0 ? (
              <BackToButton onClick={() => goToReviewPage(history)} />
            ) : (
              <BackToButton className="ishidden" />
            )}
            <Input
              className="withAdd"
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
          <InputBox className="phone">
            <ListBox>
              {phones.map((phone) => {
                return (
                  <ListItem>
                    <PhonesArea>
                      <PhonesIcon />
                      {phone}
                    </PhonesArea>
                  </ListItem>
                );
              })}
            </ListBox>
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

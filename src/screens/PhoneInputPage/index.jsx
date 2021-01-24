import React from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import react-hook
import usePhoneHandler from '../../hooks/usePhoneHandler';

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
import { MainFooter } from '../../styles/Components/Footer/styles';

import {
  BackButton,
  NextButton,
  BackToButton,
  AddButton,
  DeleteButton,
} from '../../styles/Components/Buttons/styles';

const PhoneInputPage = () => {
  const { history, form, handleOnchangeInput, phones } = useFormulary();
  const [
    handleAddingPhones,
    handleEditphone,
    handleDeletePhone,
  ] = usePhoneHandler();

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
              placeholder="Ex: (xx) 99999-9999"
            />
            {form.phone !== '' ? (
              <AddButton onClick={() => handleAddingPhones(form.phone)} />
            ) : (
              <AddButton className="isdisabled" aria-disabled="true" />
            )}
          </InputBox>
          <InputBox className="phone">
            <ListBox className="phones">
              {phones.map((phone) => {
                return phone.id !== undefined ? (
                  <ListItem className="phone" key={phone.id}>
                    <PhonesIcon onClick={() => handleEditphone(phone.id)} />
                    {phone.number}
                    <DeleteButton onClick={() => handleDeletePhone(phone.id)} />
                  </ListItem>
                ) : (
                  ''
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

import React from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import routers-goTo's
import { goToPhonePage, goBack, goToReviewPage } from '../../routers/goToPages';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';

//styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { Main } from '../../styles/Components/MainContainer/styles';
import { InputBox } from '../../styles/Components/InputBox/styles';
import { Input } from '../../styles/Components/Input/styles';
import { ListBox, ListItem } from '../../styles/Components/List/styles';
import { EmailsIcon } from '../../styles/Components/Icons/styles';
import { MainFooter } from '../../styles/Components/Footer/styles';
import { HeaderTitle } from '../../styles/Components/HeaderTitle/styles';
import {
  BackButton,
  NextButton,
  BackToButton,
  AddButton,
} from '../../styles/Components/Buttons/styles';

const EmailInputPage = () => {
  const {
    history,
    form,
    handleOnchangeInput,
    handleAddingEmails,
    emails,
  } = useFormulary();

  return (
    <>
      <Header>
        <HeaderTitle className="isPersonal">Dados Pessoais</HeaderTitle>
      </Header>
      <PagesContainer>
        <Main>
          {emails.length > 0 ? (
            <Text span="Você" continueContent="quer adicionar mais um email?" />
          ) : (
            <Text content="Qual o" span="seu" continueContent="melhor email?" />
          )}
          <InputBox>
            {emails.length > 0 ? (
              <BackToButton onClick={() => goToReviewPage(history)} />
            ) : (
              <BackToButton className="ishidden" />
            )}
            <Input
              className="withAdd"
              name="email"
              value={form.email}
              onChange={handleOnchangeInput}
            />
            {form.email !== '' ? (
              <AddButton onClick={() => handleAddingEmails(form.email)} />
            ) : (
              <AddButton className="isdisabled" aria-disabled="true" />
            )}
          </InputBox>
          <InputBox className="email">
            <ListBox>
              {emails.map((email) => {
                return (
                  <ListItem>
                    <EmailsIcon />
                    {email}
                  </ListItem>
                );
              })}
            </ListBox>
          </InputBox>
        </Main>
        <MainFooter>
          <BackButton onClick={() => goBack(history)} />
          <NextButton onClick={() => goToPhonePage(history)} />
        </MainFooter>
      </PagesContainer>
    </>
  );
};
export default EmailInputPage;

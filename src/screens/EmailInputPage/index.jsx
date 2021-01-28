import React, { useEffect } from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import react-hook
import useEmailHandler from '../../hooks/useEmailHandler';

//import routers-goTo's
import { goToPhonePage, goBack, goToReviewPage } from '../../routers/goToPages';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';

//styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { Main } from '../../styles/Components/MainContainer/styles';
import { InputBox } from '../../styles/Components/InputBox/styles';
import { Input } from '../../components/Input/styles';
import { ListBox, ListItem } from '../../styles/Components/List/styles';
import { EmailsIcon } from '../../styles/Components/Icons/styles';
import { MainFooter } from '../../styles/Components/Footer/styles';
import { HeaderTitle } from '../../styles/Components/HeaderTitle/styles';
import {
  BackButton,
  NextButton,
  BackToButton,
  AddButton,
  DeleteButton,
} from '../../styles/Components/Buttons/styles';

const EmailInputPage = () => {
  const {
    history,
    form,
    handleOnchangeInput,
    emails,
    setEmails,
  } = useFormulary();

  const [
    handleAddingEmails,
    handleEditEmail,
    handleDeleteEmail,
  ] = useEmailHandler();

  useEffect(() => {
    const persistEmails = window.localStorage.getItem('emails');
    if (persistEmails) {
      setEmails(JSON.parse(persistEmails));
    }
  }, []);
  useEffect(() => {
    window.localStorage.setItem('emails', JSON.stringify(emails));
  });

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
              <BackToButton className="isHidden" />
            )}
            <Input
              className="withAdd"
              name="email"
              type="email"
              value={form.email}
              onChange={handleOnchangeInput}
              placeholder="Ex: emaildobatman@gothan.com"
              title="Insira aqui um email válido"
              required
            />
            {form.email !== '' ? (
              <AddButton onClick={() => handleAddingEmails(form.email)} />
            ) : (
              <AddButton className="isdisabled" />
            )}
          </InputBox>
          <InputBox className="email">
            <ListBox className="email">
              {emails.map((email) => {
                return email.id !== undefined ? (
                  <ListItem className="email" key={email.id}>
                    <EmailsIcon onClick={() => handleEditEmail(email.id)} />
                    {email.text}
                    <DeleteButton onClick={() => handleDeleteEmail(email.id)} />
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
          {emails.length > 0 ? (
            <NextButton onClick={() => goToPhonePage(history)} />
          ) : (
            <NextButton
              onClick={() =>
                alert("Você adicionou um e-mail clicando no botão '+'")
              }
            />
          )}
        </MainFooter>
      </PagesContainer>
    </>
  );
};
export default EmailInputPage;

import React from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import routers-goTo's
import { goToPhonePage, goBack } from '../../routers/goToPages';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';

//styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
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
      <Header />
      <PagesContainer>
        <Main>
          <BoxIcon>
            {emails.length > 0 ? (
              <BackToButton />
            ) : (
              <BackToButton className="ishidden" />
            )}
          </BoxIcon>
          {emails.length > 0 ? (
            <Text span="Você" continueContent="quer adicionar mais um email?" />
          ) : (
            <Text content="Qual o" span="seu" continueContent="melhor email?" />
          )}
          <InputBox>
            <Input
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

import React from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import routers-goTo's
import { goToAgePage, goBack } from '../../routers/goToPages';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';
import { Main } from '../../styles/Components/MainContainer/styles';
import { Input } from '../../styles/Components/Input/styles';

//import FooterStyleComponents
import { MainFooter } from '../../styles/Components/Footer/styles';

import {
  BackButton,
  NextButton,
  BackToButton,
} from '../../styles/Components/Buttons/styles';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { BoxIcon } from '../../styles/Components/BoxIcon/styles';

const NameInputPage = () => {
  const { history, form, handleOnchangeInput } = useFormulary();

  return (
    <>
      <Header />
      <PagesContainer>
        <Main>
          {
            <BoxIcon>
              {form.name !== '' ? (
                <BackToButton />
              ) : (
                <BackToButton className="ishidden" />
              )}
            </BoxIcon>
          }
          <Text content="Olá como" span="você" continueContent="se chama?" />
          <Input name="name" value={form.name} onChange={handleOnchangeInput} />
        </Main>
        <MainFooter>
          <BackButton onClick={() => goBack(history)} />
          <NextButton onClick={() => goToAgePage(history)} />
        </MainFooter>
      </PagesContainer>
    </>
  );
};
export default NameInputPage;

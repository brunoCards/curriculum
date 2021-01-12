import React from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import routers-goTo's
import { goToAdmitDatePage, goBack } from '../../routers/goToPages';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';

//import FooterStyleComponents
import { MainFooter } from '../../styles/Components/Footer/styles';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { Main } from '../../styles/Components/MainContainer/styles';
import { Input } from '../../styles/Components/Input/styles';
import { BoxIcon } from '../../styles/Components/BoxIcon/styles';

import {
  BackButton,
  NextButton,
  BackToButton,
} from '../../styles/Components/Buttons/styles';

const CompanyNamePage = () => {
  const { history, form, handleOnchangeInput } = useFormulary();

  return (
    <>
      <Header />
      <PagesContainer>
        <Main>
          <BoxIcon>
            {form.company !== '' ? (
              <BackToButton />
            ) : (
              <BackToButton className="ishidden" />
            )}
          </BoxIcon>
          <Text content="Qual o" span="nome" continueContent="da empresa?" />
          <Input
            name="company"
            value={form.company}
            onChange={handleOnchangeInput}
          />
        </Main>
        <MainFooter>
          <BackButton onClick={() => goBack(history)} />
          <NextButton onClick={() => goToAdmitDatePage(history)} />
        </MainFooter>
      </PagesContainer>
    </>
  );
};
export default CompanyNamePage;

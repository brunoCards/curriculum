import React from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import routers-goTo's
import { goToCompanyNamePage, goBack } from '../../routers/goToPages';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';

//styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { HeaderTitle } from '../../styles/Components/HeaderTitle/styles';
import { BoxIcon } from '../../styles/Components/BoxIcon/styles';
import { Main } from '../../styles/Components/MainContainer/styles';
import { Input } from '../../styles/Components/Input/styles';
import { MainFooter } from '../../styles/Components/Footer/styles';
import {
  BackButton,
  NextButton,
  BackToButton,
} from '../../styles/Components/Buttons/styles';

const LanguageLevelPage = () => {
  const { history, form, handleOnchangeInput } = useFormulary();

  return (
    <>
      <Header>
        <HeaderTitle className="isLanguage">Outros Idiomas</HeaderTitle>
      </Header>
      <PagesContainer>
        <Main>
          <BoxIcon>
            {form.level !== '' ? (
              <BackToButton />
            ) : (
              <BackToButton className="ishidden" />
            )}
          </BoxIcon>
          <Text content="Qual o" span="nível" continueContent="de domínio?" />
          <Input
            name="level"
            value={form.level}
            onChange={handleOnchangeInput}
          />
        </Main>
        <MainFooter>
          <BackButton onClick={() => goBack(history)} />
          <NextButton onClick={() => goToCompanyNamePage(history)} />
        </MainFooter>
      </PagesContainer>
    </>
  );
};
export default LanguageLevelPage;

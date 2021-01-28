import React from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import routers-goTo's
import {
  goToCompanyNamePage,
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

const LanguageLevelPage = () => {
  const { history, form, handleOnchangeInput } = useFormulary();

  return (
    <>
      <Header>
        <HeaderTitle className="isLanguage">Outros Idiomas</HeaderTitle>
      </Header>
      <PagesContainer>
        <Main>
          <Text content="Qual o" span="nível" continueContent="de domínio?" />
          <InputBox>
            {form.level !== '' ? (
              <BackToButton onClick={() => goToReviewPage(history)} />
            ) : (
              <BackToButton className="isHidden" />
            )}
            <Input
              className="withoutAdd"
              name="level"
              value={form.level}
              onChange={handleOnchangeInput}
              placeholder="Ex: Fluente(quando estou de capa)"
            />
          </InputBox>
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

import React from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import routers-goTo's
import { goToReviewPage, goBack } from '../../routers/goToPages';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { HeaderTitle } from '../../styles/Components/HeaderTitle/styles';
import { LargeInputBox } from '../../styles/Components/InputBox/styles';
import { LargeMain } from '../../styles/Components/MainContainer/styles';
import { LargeInput } from '../../styles/Components/Input/styles';
import { LargeFooter } from '../../styles/Components/Footer/styles';
import {
  BackButton,
  NextButton,
  BackToButton,
} from '../../styles/Components/Buttons/styles';

const ActivitiesInputPage = () => {
  const { history, form, handleOnchangeInput } = useFormulary();

  return (
    <>
      <Header>
        <HeaderTitle className="isProffesional">
          Dados Profissionais
        </HeaderTitle>
      </Header>
      <PagesContainer>
        <LargeMain className="isActivities">
          <Text content="Atividades" span="desempenhadas" />
          <LargeInputBox>
            {form.activities !== '' ? (
              <BackToButton onClick={() => goToReviewPage(history)} />
            ) : (
              <BackToButton className="ishidden" />
            )}
            <LargeInput
              className="withoutAdd"
              name="activities"
              value={form.activities}
              onChange={handleOnchangeInput}
            />
          </LargeInputBox>
        </LargeMain>
        <LargeFooter>
          <BackButton onClick={() => goBack(history)} />
          <NextButton onClick={() => goToReviewPage(history)} />
        </LargeFooter>
      </PagesContainer>
    </>
  );
};
export default ActivitiesInputPage;

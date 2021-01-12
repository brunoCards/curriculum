import React from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import routers-goTo's
import { goToReviewPage, goBack } from '../../routers/goToPages';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';

//import FooterStyleComponents
import { LargeFooter } from '../../styles/Components/Footer/styles';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { LargeMain } from '../../styles/Components/MainContainer/styles';
import { LargeInput } from '../../styles/Components/Input/styles';
import { BoxIcon } from '../../styles/Components/BoxIcon/styles';

import {
  BackButton,
  NextButton,
  BackToButton,
} from '../../styles/Components/Buttons/styles';

const ActivitiesInputPage = () => {
  const { history, form, handleOnchangeInput } = useFormulary();

  return (
    <>
      <Header />
      <PagesContainer>
        <LargeMain>
          <BoxIcon>
            {form.activities !== '' ? (
              <BackToButton />
            ) : (
              <BackToButton className="ishidden" />
            )}
          </BoxIcon>
          <Text content="Atividades" span="desempenhadas" />
          <LargeInput
            name="activities"
            value={form.activities}
            onChange={handleOnchangeInput}
          />
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

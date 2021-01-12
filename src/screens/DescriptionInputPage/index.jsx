import React from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import routers-goTo's
import { goToKnowledgesPage, goBack } from '../../routers/goToPages';

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

const DescriptionInputPage = () => {
  const { history, form, handleOnchangeInput } = useFormulary();

  return (
    <>
      <Header />
      <PagesContainer>
        <LargeMain>
          <BoxIcon>
            {form.description !== '' ? (
              <BackToButton />
            ) : (
              <BackToButton className="ishidden" />
            )}
          </BoxIcon>
          <Text
            content="Faça uma breve descrição sobre"
            span="você, e o"
            isgreen="seu"
            continueContent="momento atual. E o que"
            ispurple="você"
            afterEmphasys="espera de uma empresa?"
            hasParagraph
          />
          <LargeInput
            name="description"
            value={form.description}
            onChange={handleOnchangeInput}
          />
        </LargeMain>
        <LargeFooter>
          <BackButton onClick={() => goBack(history)} />
          <NextButton onClick={() => goToKnowledgesPage(history)} />
        </LargeFooter>
      </PagesContainer>
    </>
  );
};
export default DescriptionInputPage;

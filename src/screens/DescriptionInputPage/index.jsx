import React from 'react';

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

const DescriptionInputPage = ({ navigation, formData, setForm, go }) => {
  const { description } = formData;

  return (
    <>
      <Header />
      <PagesContainer>
        <LargeMain>
          <BoxIcon>
            {description !== '' ? (
              <BackToButton onClick={() => go('review')} />
            ) : (
              <BackToButton className="ishidden" onClick={() => go('review')} />
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
            value={description}
            onChange={setForm}
          />
        </LargeMain>
        <LargeFooter>
          <BackButton onClick={() => navigation.previous()} />
          <NextButton onClick={() => navigation.next()} />
        </LargeFooter>
      </PagesContainer>
    </>
  );
};
export default DescriptionInputPage;

import React from 'react';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';
import { Main } from '../../styles/Components/MainContainer/styles';

//import FooterStyleComponents
import { MainFooter } from '../../styles/Components/Footer/styles';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { Input } from '../../styles/Components/Input/styles';
import { BoxIcon } from '../../styles/Components/BoxIcon/styles';

import {
  BackButton,
  NextButton,
  BackToButton,
} from '../../styles/Components/Buttons/styles';

const PhoneInputPage = ({ navigation, formData, setForm, go }) => {
  const { phone } = formData;

  return (
    <>
      <Header />
      <PagesContainer>
        <Main>
          <BoxIcon>
            {phone !== '' ? (
              <BackToButton onClick={() => go('review')} />
            ) : (
              <BackToButton className="ishidden" onClick={() => go('review')} />
            )}
          </BoxIcon>
          <Text
            content="Qual o"
            span="seu"
            continueContent="telefone principal?"
          />
          <Input name="phone" value={phone} onChange={setForm} />
        </Main>
        <MainFooter>
          <BackButton onClick={() => navigation.previous()} />
          <NextButton onClick={() => navigation.next()} />
        </MainFooter>
      </PagesContainer>
    </>
  );
};
export default PhoneInputPage;

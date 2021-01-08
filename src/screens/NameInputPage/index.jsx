import React from 'react';

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

const NameInputPage = ({ navigation, formData, setForm, go }) => {
  const { name } = formData;

  return (
    <>
      <Header />
      <PagesContainer>
        <Main>
          <BoxIcon>
            {name !== '' ? (
              <BackToButton onClick={() => go('review')} />
            ) : (
              <BackToButton className="ishidden" onClick={() => go('review')} />
            )}
          </BoxIcon>
          <Text content="Olá como" span="você" continueContent="se chama?" />
          <Input name="name" value={name} onChange={setForm} />
        </Main>
        <MainFooter>
          <BackButton onClick={() => navigation.previous()} />
          <NextButton onClick={() => navigation.next()} />
        </MainFooter>
      </PagesContainer>
    </>
  );
};
export default NameInputPage;

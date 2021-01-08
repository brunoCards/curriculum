import React from 'react';

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

const CompanyNamePage = ({ navigation, formData, setForm, go }) => {
  const { company } = formData;
  return (
    <>
      <Header />
      <PagesContainer>
        <Main>
          <BoxIcon>
            {company !== '' ? (
              <BackToButton onClick={() => go('review')} />
            ) : (
              <BackToButton className="ishidden" onClick={() => go('review')} />
            )}
          </BoxIcon>
          <Text content="Qual o" span="nome" continueContent="da empresa?" />
          <Input name="company" value={company} onChange={setForm} />
        </Main>
        <MainFooter>
          <BackButton onClick={() => navigation.previous()} />
          <NextButton onClick={() => navigation.next()} />
        </MainFooter>
      </PagesContainer>
    </>
  );
};
export default CompanyNamePage;

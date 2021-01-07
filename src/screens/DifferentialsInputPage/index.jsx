import React from 'react';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';
import { Main } from '../../styles/Components/MainContainer/styles';

//import FooterStyleComponents
import { MainFooter } from '../../styles/Components/Footer/styles';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import {
  BackButton,
  NextButton,
  BackToButton,
} from '../../styles/Components/Buttons/styles';
import { Input } from '../../styles/Components/Input/styles';
import { BoxIcon } from '../../styles/Components/BoxIcon/styles';

const DifferentialsInputPage = ({ navigation, formData, setForm, go }) => {
  const { differentials } = formData;

  return (
    <>
      <Header />
      <PagesContainer>
        <Main>
          <BoxIcon>
            {differentials !== '' ? (
              <BackToButton onClick={() => go('review')} />
            ) : (
              <BackToButton className="ishidden" onClick={() => go('review')} />
            )}
          </BoxIcon>
          <Text
            content="Conte um ou mais diferenciais pessoais ou profissionais os quais"
            span="você"
            continueContent="pode oferecer para as empresas"
            hasParagraph
          />
          <Input
            name="differentials"
            value={differentials}
            onChange={setForm}
          />
        </Main>
        <MainFooter>
          <BackButton onClick={() => navigation.previous()} />
          <NextButton onClick={() => navigation.next()} />
        </MainFooter>
      </PagesContainer>
    </>
  );
};
export default DifferentialsInputPage;

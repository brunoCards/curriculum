import React from 'react';

//Global-components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GlobalForm from '../../components/GlobalForm';
import Text from '../../components/Text';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
<<<<<<< HEAD
import {
  BackButton,
  NextButton,
  BackToButton,
} from '../../styles/Components/Buttons/styles';
import { Input } from '../../styles/Components/Input/styles';
import { BoxIcon } from '../../styles/Components/BoxIcon/styles';

const DifferentialsInputPage = ({ navigation, formData, setForm, go }) => {
  const { differentials } = formData;
=======
import { MainContainer } from '../../styles/Components/MainContainer/styles';
>>>>>>> 99bb68f104945ad5eacbc8428db44c5f61efb7a7

const DifferentialsInputPage = () => {
  return (
    <>
      <Header />
      <PagesContainer>
<<<<<<< HEAD
        <Main>
          <BoxIcon>
            {differentials !== '' ? (
              <BackToButton onClick={() => go('review')} />
            ) : (
              <BackToButton className="ishidden" onClick={() => go('review')} />
            )}
          </BoxIcon>
=======
        <MainContainer>
>>>>>>> 99bb68f104945ad5eacbc8428db44c5f61efb7a7
          <Text
            content="Conte um ou mais diferenciais que"
            span="você "
            continueContent="&nbsp; pode &nbsp;oferecer para as empresas"
            hasParagraph
          />
          <GlobalForm isOneInput isDifferentials />
        </MainContainer>

        <Footer />
      </PagesContainer>
    </>
  );
};
export default DifferentialsInputPage;

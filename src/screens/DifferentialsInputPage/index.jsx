import React from 'react';

//Global-components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GlobalForm from '../../components/GlobalForm';
import Text from '../../components/Text';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { MainContainer } from '../../styles/Components/MainContainer/styles';

const DifferentialsInputPage = () => {
  return (
    <>
      <Header />
      <PagesContainer>
        <MainContainer>
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

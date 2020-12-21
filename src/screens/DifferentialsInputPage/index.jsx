import React from 'react';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';
import Footer from '../../components/Footer';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { Form } from '../../styles/Components/Form/styles';
import { Input } from '../../styles/Components/Input/styles';
import { MainContainer } from '../../styles/Components/MainContainer/styles';

const DifferentialsInputPage = () => {
  return (
    <>
      <Header />
      <PagesContainer>
        <MainContainer>
          <Text
            content="Conte um ou mais diferenciais que"
            span="você"
            continueContent="pode oferecer para as empresas"
            hasParagraph
          />
        </MainContainer>
        <Form>
          <Input type="text" name="description" />
        </Form>

        <Footer />
      </PagesContainer>
    </>
  );
};
export default DifferentialsInputPage;

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

const CityInputPage = () => {
  return (
    <>
      <Header />
      <PagesContainer>
        <MainContainer>
          <Text
            content="Qual a cidade que"
            span="você"
            continueContent="mora?"
          />
        </MainContainer>
        <Form>
          <Input type="text" />
        </Form>

        <Footer />
      </PagesContainer>
    </>
  );
};
export default CityInputPage;

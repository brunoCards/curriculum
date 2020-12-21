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

//styled-components

const AgeInputPage = () => {
  return (
    <>
      <Header />
      <PagesContainer>
        <MainContainer>
          <Text content="Qual a" span="sua" continueContent="idade?" />
        </MainContainer>
        <Form>
          <Input type="text" name="age" />
        </Form>

        <Footer />
      </PagesContainer>
    </>
  );
};
export default AgeInputPage;

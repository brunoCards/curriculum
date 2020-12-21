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

const StateInputPage = () => {
  return (
    <>
      <Header />
      <PagesContainer>
        <MainContainer>
          <Text content="E o estado?" />
        </MainContainer>
        <Form>
          <Input type="text" name="state" />
        </Form>

        <Footer />
      </PagesContainer>
    </>
  );
};
export default StateInputPage;

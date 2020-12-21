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

const PhoneInputPage = () => {
  return (
    <>
      <Header />
      <PagesContainer>
        <MainContainer>
          <Text
            content="Qual o"
            span="seu"
            continueContent="telefone principal?"
          />
        </MainContainer>
        <Form>
          <Input type="text" name="phone" />
        </Form>

        <Footer hasAddButton />
      </PagesContainer>
    </>
  );
};
export default PhoneInputPage;

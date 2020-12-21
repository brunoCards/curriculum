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

const DescriptionInputPage = () => {
  return (
    <>
      <Header />
      <PagesContainer>
        <MainContainer>
          <Text
            content="Faça uma breve descrição sobre"
            span="você, e o"
            isgreen="seu"
            continueContent="momento atual. E o que"
            ispurple="você"
            afterEmphasys="espera de uma empresa?"
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
export default DescriptionInputPage;

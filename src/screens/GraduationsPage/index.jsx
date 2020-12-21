import React from 'react';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { SecondForm } from '../../styles/Components/Form/styles';

const GraduationsPage = () => {
  return (
    <>
      <PagesContainer>
        <Header />
        <SecondForm>
          <Text content="Conte um ou mais diferenciais que" hasParagraph />
        </SecondForm>
      </PagesContainer>
    </>
  );
};

export default GraduationsPage;

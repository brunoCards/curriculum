import React from 'react';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';

const ProffessionalExpPage = () => {
  return (
    <>
      <PagesContainer>
        <Header />
        <Text content="Conte um ou mais diferenciais que" hasParagraph />
      </PagesContainer>
    </>
  );
};
export default ProffessionalExpPage;

import React from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//components
import Header from '../../components/Header';

//styled-components
import { PageLayout } from './styles';

const ReviewPage = () => {
  const { form } = useFormulary();
  return (
    <>
      <Header />
      <PageLayout>
        
      </PageLayout>
    </>
  );
};

export default ReviewPage;

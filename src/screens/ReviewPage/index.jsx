import React from 'react';

//import routers-goTo's
import {
  goToNamePage,
  goToStateInputPage,
  goToPhonePage,
  goToEmailPage,
  goToDescriptionPage,
  goToInstitutionPage,
  goToCompanyNamePage,
} from '../../routers/goToPages';

//import context
import { useFormulary } from '../../contexts/FormContext';

const ReviewPage = () => {
  const { form, emails, phones, knowledges, history } = useFormulary();

  return <></>;
};

export default ReviewPage;

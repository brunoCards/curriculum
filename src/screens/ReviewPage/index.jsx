import React from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//ownStyles
import {
  ReviewPageMainContainer,
  ReviewDataContainer,
  ReviewDataTitle,
  ReviewFooter,
} from './styles';

//components
import Header from '../../components/Header';

import {
  Submit,
  ExitReviewButton,
  HomeButton,
} from '../../styles/Components/Buttons/styles';

import { BoxIcon, BoxTwinIcons } from '../../styles/Components/BoxIcon/styles';

const ReviewPage = () => {
  const { form, emails, phones, knowledges, history } = useFormulary();

  return (
    <>
      <ReviewPageMainContainer>
        <h1>Review Page</h1>
      </ReviewPageMainContainer>
    </>
  );
};

export default ReviewPage;

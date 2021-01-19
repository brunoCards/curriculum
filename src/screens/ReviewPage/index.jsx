import React from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//ownStyles
import {
  ReviewPageLayout,
  PersonalData,
  ReviewPageTitle,
  ReviewPageCityState,
  CityStateText,
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
      <ReviewPageLayout>
        <PersonalData>
          <ReviewPageTitle>
            {form.name}
            {form.city}
          </ReviewPageTitle>
          <ReviewPageCityState>
            <CityStateText>{form.state}</CityStateText>
          </ReviewPageCityState>
        </PersonalData>
      </ReviewPageLayout>
    </>
  );
};

export default ReviewPage;

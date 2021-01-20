import React from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//ownStyles
import {
  ReviewPageLayout,
  PersonalData,
  ReviewPageTitle,
  AddressBox,
  ReviewPageCityState,
  CityStateText,
  ReviewPageContacts,
  ContactsBox,
  PinIcon,
  PhoneIcon,
  WhatsIcon,
  EmailIcon,
  ContactsText,
  ResumeBox,
  SectionsTitle,
  SectionsParagraph,
  AcademicData,
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
  const { form, address, emails, phones, knowledges, history } = useFormulary();

  return (
    <>
      <ReviewPageLayout>
        <PersonalData>
          <ReviewPageTitle>{form.name}</ReviewPageTitle>
          <ReviewPageCityState>
            <AddressBox>
              <PinIcon />
              <CityStateText>
                {address.localidade + ' - '}
                {address.uf}
              </CityStateText>
            </AddressBox>
          </ReviewPageCityState>
          <ReviewPageContacts>
            <ContactsBox>
              <PhoneIcon />
              <ContactsText>{phones[0]}</ContactsText>
            </ContactsBox>
            <ContactsBox>
              <WhatsIcon />
              <ContactsText>{phones[1]}</ContactsText>
            </ContactsBox>
            <ContactsBox>
              <EmailIcon />
              <ContactsText>{emails[0]}</ContactsText>
            </ContactsBox>
            <ResumeBox>
              <SectionsTitle>Resumo</SectionsTitle>
              <SectionsParagraph>{form.description}</SectionsParagraph>
            </ResumeBox>
          </ReviewPageContacts>
        </PersonalData>
        <AcademicData>
          <SectionsTitle>Informações Acadêmicas</SectionsTitle>
        </AcademicData>
      </ReviewPageLayout>
    </>
  );
};

export default ReviewPage;

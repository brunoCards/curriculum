import React from 'react';

//imports screens/inputs
import ActivitiesInputPage from '../../screens/ActivitiesInputPage';
import AdmitDatePage from '../../screens/AdmitDatePage';
import AgeInputPage from '../../screens/AgeInputPage';
import CityInputPage from '../../screens/CityInputPage';
import CompanyNamePage from '../../screens/CompanyNamePage';
import CourseNamePage from '../../screens/CourseNamePage';
import DegreeLevelPage from '../../screens/DegreeLevelPage';
import DescriptionInputPage from '../../screens/DescriptionInputPage';
import DifferentialsInputPage from '../../screens/DifferentialsInputPage';
// import { DownloadPage } from '../../screens/DownloadPage';
import EducationalInstitutionPage from '../../screens/EducationalInstitutionPage';
import EmailInputPage from '../../screens/EmailInputPage';
import EndDatePage from '../../screens/EndDatePage';
import KnowledgeInputPage from '../../screens/KnowledgeInputPage';
import LandingPage from '../../screens/LandingPage';
import LanguageInputPage from '../../screens/LanguageInputPage';
import LanguageLevelPage from '../../screens/LanguageLevelPage';
import NameInputPage from '../../screens/NameInputPage';
import PhoneInputPage from '../../screens/PhoneInputPage';
import ResignDatePage from '../../screens/ResignDatePage';
import ReviewPage from '../../screens/ReviewPage';
import StateInputPage from '../../screens/StateInputPage';
import StartDatePage from '../../screens/StartDatePage';

//imports react-hooks-helper
import { useForm, useStep } from 'react-hooks-helper';

const defaultData = {
  activities: '',
  actualWork: false,
  admitdate: '',
  age: '',
  city: '',
  company: '',
  course: '',
  degree: '',
  description: '',
  differentials: '',
  email: '',
  endate: '',
  knowledge: '',
  institution: '',
  language: '',
  level: '',
  name: '',
  phone: '',
  resigndate: '',
  startdate: '',
  state: '',
};

const steps = [
  { id: 'landing' },
  { id: 'name' },
  { id: 'age' },
  { id: 'city' },
  { id: 'state' },
  { id: 'phone' },
  { id: 'email' },
  { id: 'description' },
  { id: 'differentials' },
  { id: 'institution' },
  { id: 'course' },
  { id: 'degree' },
  { id: 'startdate' },
  { id: 'endate' },
  { id: 'language' },
  { id: 'level' },
  { id: 'knowledge' },
  { id: 'company' },
  { id: 'admitdate' },
  { id: 'resigndate' },
  { id: 'activities' },
  { id: 'review' },
  // { id: 'download' },
];

const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ steps, initialStep: 0 });

  const props = { step, navigation, formData, setForm };

  switch (step.id) {
    case 'landing':
      return <LandingPage {...props} />;

    case 'name':
      return <NameInputPage {...props} />;

    case 'age':
      return <AgeInputPage {...props} />;

    case 'city':
      return <CityInputPage {...props} />;

    case 'state':
      return <StateInputPage {...props} />;

    case 'phone':
      return <PhoneInputPage {...props} />;

    case 'email':
      return <EmailInputPage {...props} />;

    case 'description':
      return <DescriptionInputPage {...props} />;

    case 'differentials':
      return <DifferentialsInputPage {...props} />;

    case 'institution':
      return <EducationalInstitutionPage {...props} />;

    case 'course':
      return <CourseNamePage {...props} />;

    case 'degree':
      return <DegreeLevelPage {...props} />;

    case 'startdate':
      return <StartDatePage {...props} />;

    case 'endate':
      return <EndDatePage {...props} />;

    case 'language':
      return <LanguageInputPage {...props} />;

    case 'level':
      return <LanguageLevelPage {...props} />;

    case 'knowledge':
      return <KnowledgeInputPage {...props} />;

    case 'company':
      return <CompanyNamePage {...props} />;

    case 'admitdate':
      return <AdmitDatePage {...props} />;

    case 'resigndate':
      return <ResignDatePage {...props} />;

    case 'activities':
      return <ActivitiesInputPage {...props} />;

    case 'review':
      return <ReviewPage {...props} />;

    // case 'download':
    //   return <DownloadPage {...props} />;

    default:
      return <LandingPage {...props} />;
  }

  // eslint-disable-next-line no-unreachable
  return <></>;
};

export default MultiStepForm;

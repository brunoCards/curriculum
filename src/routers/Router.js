//screens
import ActivitiesInputPage from '../screens/ActivitiesInputPage';
import AdmitDatePage from '../screens/AdmitDatePage';
import AgeInputPage from '../screens/AgeInputPage';
import CityInputPage from '../screens/CityInputPage';
import CompanyNamePage from '../screens/CompanyNamePage';
import CourseNamePage from '../screens/CourseNamePage';
import DegreeLevelPage from '../screens/DegreeLevelPage';
import DescriptionInputPage from '../screens/DescriptionInputPage';
// import DownloadPdfPage from '../screens/DownloadPdfPage';
import EducationalInstitutionPage from '../screens/EducationalInstitutionPage';
import EmailInputPage from '../screens/EmailInputPage';
import EndDatePage from '../screens/EndDatePage';
import KnowledgeInputPage from '../screens/KnowledgeInputPage';
import LandingPage from '../screens/LandingPage';
import LanguageInputPage from '../screens/LanguageInputPage';
import LanguageLevelPage from '../screens/LanguageLevelPage';
import NameInputPage from '../screens/NameInputPage';
import PhoneInputPage from '../screens/PhoneInputPage';
import ResignDatePage from '../screens/ResignDatePage';
import ReviewPage from '../screens/ReviewPage';
import StateInputPage from '../screens/StateInputPage';
import StartDatePage from '../screens/StartDatePage';

//import Context
import { FormProvider } from '../contexts/FormContext';

//import react-router-dom
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <FormProvider>
          <Switch>
            <Route path="/">
              <LandingPage />
            </Route>
            <Route path="/dados-pessoais/nome">
              <NameInputPage />
            </Route>
            <Route path="/dados-pessoais/idade">
              <AgeInputPage />
            </Route>
            <Route path="/dados-pessoais/cidade">
              <CityInputPage />
            </Route>
            <Route path="/dados-pessoais/estado">
              <StateInputPage />
            </Route>
            <Route path="/dados-pessoais/telefones">
              <PhoneInputPage />
            </Route>
            <Route path="/dados-pessoais/emails">
              <EmailInputPage />
            </Route>
            {/* <Route path="/dados-pessoais/linkedin">
              <EmailInputPage />
            </Route>
            <Route path="/dados-pessoais/portfolio">
              <EmailInputPage />
            </Route> */}
            <Route path="/dados-pessoais/descricao">
              <DescriptionInputPage />
            </Route>
            <Route path="/dados-pessoais/conhecimentos">
              <KnowledgeInputPage />
            </Route>
            <Route path="/dados-academicos/nome/instituicao">
              <EducationalInstitutionPage />
            </Route>
            <Route path="/dados-academicos/graduacao">
              <DegreeLevelPage />
            </Route>
            <Route path="/dados-academicos/nome/curso">
              <CourseNamePage />
            </Route>
            {/* <Route path="/dados-academicos/descricao/curso">
              <EmailInputPage />
            </Route> */}
            <Route path="/dados-academicos/data/inicio">
              <StartDatePage />
            </Route>
            <Route path="/dados-academicos/data/termino">
              <EndDatePage />
            </Route>
            <Route path="/dados-academicos/idiomas">
              <LanguageInputPage />
            </Route>
            <Route path="/dados-academicos/idiomas/nivel">
              <LanguageLevelPage />
            </Route>
            <Route path="/dados-profissionais/nome-empresa">
              <CompanyNamePage />
            </Route>
            {/* <Route path="/dados-profissionais/cargo">
              <PostInputPage />
            </Route> */}
            <Route path="/dados-profissionais/data/admissao">
              <AdmitDatePage />
            </Route>
            <Route path="/dados-profissionais/data/recisao">
              <ResignDatePage />
            </Route>
            <Route path="/dados-profissionais/atividades">
              <ActivitiesInputPage />
            </Route>
            <Route path="/review">
              <ReviewPage />
            </Route>
          </Switch>
        </FormProvider>
      </BrowserRouter>
    </>
  );
};

export default Router;

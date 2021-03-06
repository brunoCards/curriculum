//screens
//import react-router-dom
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Context
import { FormProvider } from '../contexts/FormContext';
import ActivitiesInputPage from '../screens/ActivitiesInputPage';
import AdmitDatePage from '../screens/AdmitDatePage';
import CityInputPage from '../screens/CityInputPage';
import CompanyNamePage from '../screens/CompanyNamePage';
import CourseNamePage from '../screens/CourseNamePage';
import DegreeLevelPage from '../screens/DegreeLevelPage';
import DescriptionInputPage from '../screens/DescriptionInputPage';
import EducationalInstitutionPage from '../screens/EducationalInstitutionPage';
import EmailInputPage from '../screens/EmailInputPage';
import EndDatePage from '../screens/EndDatePage';
import KnowledgeInputPage from '../screens/KnowledgeInputPage';
import LandingPage from '../screens/LandingPage';
import LanguageInputPage from '../screens/LanguageInputPage';
import LanguageLevelPage from '../screens/LanguageLevelPage';
import LinkedinInputPage from '../screens/LinkedinInputPage';
import NameInputPage from '../screens/NameInputPage';
import PhoneInputPage from '../screens/PhoneInputPage';
import PortfolioInputPage from '../screens/PortfolioInputPage';
import ResignDatePage from '../screens/ResignDatePage';
import ReviewPage from '../screens/ReviewPage';
import StartDatePage from '../screens/StartDatePage';
import StateInputPage from '../screens/StateInputPage';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <FormProvider>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/dados-pessoais/nome">
              <NameInputPage />
            </Route>
            <Route exact path="/dados-pessoais/estado">
              <StateInputPage />
            </Route>
            <Route path="/dados-pessoais/cidade/:id">
              <CityInputPage />
            </Route>
            <Route exact path="/dados-pessoais/emails">
              <EmailInputPage />
            </Route>
            <Route exact path="/dados-pessoais/telefones">
              <PhoneInputPage />
            </Route>
            <Route exact path="/dados-pessoais/linkedin">
              <LinkedinInputPage />
            </Route>
            <Route exact path="/dados-pessoais/portfolio">
              <PortfolioInputPage />
            </Route>
            <Route exact path="/dados-pessoais/descricao">
              <DescriptionInputPage />
            </Route>
            <Route exact path="/dados-pessoais/conhecimentos">
              <KnowledgeInputPage />
            </Route>
            <Route exact path="/dados-academicos/nome/instituicao">
              <EducationalInstitutionPage />
            </Route>
            <Route exact path="/dados-academicos/graduacao">
              <DegreeLevelPage />
            </Route>
            <Route exact path="/dados-academicos/nome/curso">
              <CourseNamePage />
            </Route>
            <Route exact path="/dados-academicos/data/inicio">
              <StartDatePage />
            </Route>
            <Route exact path="/dados-academicos/data/termino">
              <EndDatePage />
            </Route>
            <Route exact path="/dados-academicos/idiomas">
              <LanguageInputPage />
            </Route>
            <Route exact path="/dados-academicos/idiomas/nivel">
              <LanguageLevelPage />
            </Route>
            <Route exact path="/dados-profissionais/nome-empresa">
              <CompanyNamePage />
            </Route>
            <Route exact path="/dados-profissionais/data/admissao">
              <AdmitDatePage />
            </Route>
            <Route exact path="/dados-profissionais/data/recisao">
              <ResignDatePage />
            </Route>
            <Route exact path="/dados-profissionais/atividades">
              <ActivitiesInputPage />
            </Route>
            <Route exact path="/review">
              <ReviewPage />
            </Route>
          </Switch>
        </FormProvider>
      </BrowserRouter>
    </>
  );
};

export default Router;

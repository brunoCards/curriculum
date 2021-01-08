import React from 'react';

//components
import Header from '../../components/Header';
import { LargeFooter } from '../../styles/Components/Footer/styles';

import AccordionReviewPage from '../../components/AccordionReviewPage';
import {
  ReviewPageMainContainer,
  AccordionTitle,
  AccordionContainer,
} from '../../components/AccordionReviewPage/styles';

import { HomeButton } from '../../styles/Components/Buttons/styles';
import { BoxIcon } from '../../styles/Components/BoxIcon/styles';

import {
  Submit,
  ExitReviewButton,
} from '../../styles/Components/Buttons/styles';

//import material-ui
import AccordionSummary from '@material-ui/core/AccordionSummary';

//import material-icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ReviewPage = ({ title, formData, navigation }) => {
  const { go } = navigation;
  const {
    activities,
    // actualWork,
    admitdate,
    age,
    city,
    company,
    course,
    degree,
    description,
    differentials,
    email,
    enddate,
    knowledge,
    institution,
    language,
    level,
    name,
    phone,
    resigndate,
    startdate,
    state,
  } = formData;
  return (
    <>
      <Header />
      <ReviewPageMainContainer>
        <BoxIcon>
          <HomeButton onClick={() => go('landing')} />
        </BoxIcon>
        <AccordionContainer>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <AccordionTitle>{(title = 'Dados Pessoais')}</AccordionTitle>
          </AccordionSummary>
          <AccordionReviewPage
            summary="name"
            details={[{ Nome: name }]}
            go={go}
          />
          <AccordionReviewPage
            summary="age"
            details={[{ Idade: age }]}
            go={go}
          />
          <AccordionReviewPage
            summary="city"
            details={[{ Cidade: city }]}
            go={go}
          />
          <AccordionReviewPage
            summary="state"
            details={[{ Estado: state }]}
            go={go}
          />
          <AccordionReviewPage
            summary="phone"
            details={[{ Celular: phone }]}
            go={go}
          />
          <AccordionReviewPage
            summary="email"
            details={[{ Email: email }]}
            go={go}
          />
          <AccordionReviewPage
            summary="description"
            details={[{ Resumo: description }]}
            go={go}
          />
          <AccordionReviewPage
            summary="differentials"
            details={[{ Diferenciais: differentials }]}
            go={go}
          />
        </AccordionContainer>
        <AccordionContainer>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <AccordionTitle>{(title = 'Dados Acadêmicos')}</AccordionTitle>
          </AccordionSummary>
          <AccordionReviewPage
            summary="institution"
            details={[{ Instituição: institution }]}
            go={go}
          />
          <AccordionReviewPage
            summary="course"
            details={[{ 'Nome do Curso': course }]}
            go={go}
          />
          <AccordionReviewPage
            summary="degree"
            details={[{ 'Nível de graduação': degree }]}
            go={go}
          />
          <AccordionReviewPage
            summary="startdate"
            details={[{ 'Data de início': startdate }]}
            go={go}
          />
          <AccordionReviewPage
            summary="enddate"
            details={[{ 'Data de conclusão': enddate }]}
            go={go}
          />
          <AccordionReviewPage
            summary="language"
            details={[{ Idiomas: language }]}
            go={go}
          />
          <AccordionReviewPage
            summary="level"
            details={[{ Nível: level }]}
            go={go}
          />
          <AccordionReviewPage
            summary="knowledge"
            details={[{ Conhecimentos: knowledge }]}
            go={go}
          />
        </AccordionContainer>
        <AccordionContainer>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <AccordionTitle>
              {(title = 'Experiência Profissional')}
            </AccordionTitle>
          </AccordionSummary>
          <AccordionReviewPage
            summary="company"
            details={[{ 'Nome da empresa': company }]}
            go={go}
          />
          <AccordionReviewPage
            summary="admitdate"
            details={[{ 'Data de entrada': admitdate }]}
            go={go}
          />
          <AccordionReviewPage
            summary="resigndate"
            details={[{ 'Data de saída': resigndate }]}
            go={go}
          />
          <AccordionReviewPage
            summary="activities"
            details={[{ 'Atividades desempenhadas': activities }]}
            go={go}
          />
        </AccordionContainer>
        <LargeFooter>
          <ExitReviewButton />
          <Submit />
        </LargeFooter>
      </ReviewPageMainContainer>
    </>
  );
};

export default ReviewPage;

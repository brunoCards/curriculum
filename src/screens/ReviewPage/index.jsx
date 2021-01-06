import React from 'react';

//components
import Header from '../../components/Header';
import { MainFooter } from '../../styles/Components/Footer/styles';
import { BackButton } from '../../styles/Components/Buttons/styles';

import AccordionReviewPage from '../../components/AccordionReviewPage';
import {
  ReviewPageMainContainer,
  AccordionTitle,
  AccordionContainer,
} from '../../components/AccordionReviewPage/styles';

//import material-ui
import AccordionSummary from '@material-ui/core/AccordionSummary';

//import material-icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ReviewPage = ({ title, formData, navigation }) => {
  const { go } = navigation;
  const {
    activities,
    // actualWork,
    admitDate,
    age,
    city,
    company,
    course,
    degree,
    description,
    differentials,
    email,
    endDate,
    knowledge,
    institution,
    language,
    level,
    name,
    phone,
    resignDate,
    startDate,
    state,
  } = formData;
  return (
    <>
      <Header />
      <ReviewPageMainContainer>
        <AccordionTitle onClick={() => navigation.previous()}>X</AccordionTitle>
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
            summary="startDate"
            details={[{ 'Data de início': startDate }]}
            go={go}
          />
          <AccordionReviewPage
            summary="endDate"
            details={[{ 'Data de conclusão': endDate }]}
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
            summary="admitDate"
            details={[{ 'Data de entrada': admitDate }]}
            go={go}
          />
          <AccordionReviewPage
            summary="resignDate"
            details={[{ 'Data de saída': resignDate }]}
            go={go}
          />
          <AccordionReviewPage
            summary="activities"
            details={[{ 'Atividades desempenhadas': activities }]}
            go={go}
          />
        </AccordionContainer>
        <MainFooter />
      </ReviewPageMainContainer>
    </>
  );
};

export default ReviewPage;

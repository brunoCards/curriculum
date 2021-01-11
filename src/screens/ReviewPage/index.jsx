import React from 'react';

//ownStyles
import {
  ReviewPageMainContainer,
  ReviewDataContainer,
  ReviewDataTitle,
  ReviewFooter,
} from './styles';

//components
import Header from '../../components/Header';
import DetailsReviewPage from '../../components/DetailsReviewPage';

import {
  Submit,
  ExitReviewButton,
  HomeButton,
} from '../../styles/Components/Buttons/styles';

import { BoxIcon, BoxTwinIcons } from '../../styles/Components/BoxIcon/styles';

const ReviewPage = ({ title, formData, navigation, summary }) => {
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

      <BoxIcon>
        <HomeButton onClick={() => go('landing')} />
      </BoxIcon>
      <ReviewPageMainContainer>
        <ReviewDataContainer>
          <ReviewDataTitle>Dados Pessoais</ReviewDataTitle>
          <DetailsReviewPage
            summary="name"
            details={[{ Nome: name }]}
            go={go}
          />
          <DetailsReviewPage summary="age" details={[{ Idade: age }]} go={go} />

          <DetailsReviewPage
            summary="city"
            details={[{ Cidade: city }]}
            go={go}
          />

          <DetailsReviewPage
            summary="state"
            details={[{ Estado: state }]}
            go={go}
          />

          <DetailsReviewPage
            summary="phone"
            details={[{ Celular: phone }]}
            go={go}
          />

          <DetailsReviewPage
            summary="email"
            details={[{ Email: email }]}
            go={go}
          />

          <DetailsReviewPage
            summary="description"
            details={[{ Resumo: description }]}
            go={go}
          />

          <DetailsReviewPage
            summary="differentials"
            details={[{ Diferenciais: differentials }]}
            go={go}
          />
        </ReviewDataContainer>
        <ReviewDataContainer>
          <ReviewDataTitle>Dados Acadêmicos</ReviewDataTitle>
          <DetailsReviewPage
            summary="institution"
            details={[{ Instituição: institution }]}
            go={go}
          />
          <DetailsReviewPage
            summary="course"
            details={[{ 'Nome do Curso': course }]}
            go={go}
          />
          <DetailsReviewPage
            summary="degree"
            details={[{ 'Nível de graduação': degree }]}
            go={go}
          />
          <DetailsReviewPage
            summary="startdate"
            details={[{ 'Data de início': startdate }]}
            go={go}
          />
          <DetailsReviewPage
            summary="enddate"
            details={[{ 'Data de conclusão': enddate }]}
            go={go}
          />
          <DetailsReviewPage
            summary="language"
            details={[{ Idiomas: language }]}
            go={go}
          />
          <DetailsReviewPage
            summary="level"
            details={[{ Nível: level }]}
            go={go}
          />
          <DetailsReviewPage
            summary="knowledge"
            details={[{ Conhecimentos: knowledge }]}
            go={go}
          />
        </ReviewDataContainer>
        <ReviewDataContainer>
          <ReviewDataTitle>Experiência Profissional</ReviewDataTitle>
          <DetailsReviewPage
            summary="company"
            details={[{ 'Nome da empresa': company }]}
            go={go}
          />
          <DetailsReviewPage
            summary="admitdate"
            details={[{ 'Data de entrada': admitdate }]}
            go={go}
          />
          <DetailsReviewPage
            summary="resigndate"
            details={[{ 'Data de saída': resigndate }]}
            go={go}
          />
          <DetailsReviewPage
            summary="activities"
            details={[{ 'Atividades desempenhadas': activities }]}
            go={go}
          />
          <BoxTwinIcons>
            <ExitReviewButton onClick={() => navigation.previous()} />
            <Submit onClick={() => navigation.next()} />
          </BoxTwinIcons>
        </ReviewDataContainer>
      </ReviewPageMainContainer>
      <ReviewFooter />
    </>
  );
};

export default ReviewPage;

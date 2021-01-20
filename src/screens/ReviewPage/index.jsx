import React from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//ownStyles
import {
  ReviewPageLayout,
  PersonalDataSection,
  FullName,
  AddressBox,
  AddressContainer,
  Address,
  Contacts,
  ContactsBox,
  PinIcon,
  PhoneIcon,
  EmailIcon,
  ContactsText,
  ResumeBox,
  SectionsTitle,
  SectionsParagraph,
  AcademicData,
  AcademicBox,
  BoxSubtitle,
  KnowledgesData,
  ProffesionalData,
  SectionBox,
} from './styles';

//components
import Header from '../../components/Header';

//styled-components
import {
  Submit,
  ExitReviewButton,
  HomeButton,
} from '../../styles/Components/Buttons/styles';
import { ListBox, ListItem } from '../../styles/Components/List/styles';

const ReviewPage = () => {
  const { form, address, emails, phones, knowledges, history } = useFormulary();

  return (
    <>
      <ReviewPageLayout>
        <PersonalDataSection>
          <FullName>{form.name}</FullName>
          <AddressContainer>
            <AddressBox>
              <PinIcon />
              <Address>
                {address.localidade + ' - '}
                {address.uf}
              </Address>
            </AddressBox>
          </AddressContainer>
          <Contacts>
            <ContactsBox>
              {phones.map((phone) => {
                return (
                  <ContactsText className="phone">
                    <PhoneIcon />
                    {phone}
                  </ContactsText>
                );
              })}
            </ContactsBox>
            <ContactsBox>
              {emails.map((email) => {
                return (
                  <ContactsText className="email">
                    <EmailIcon />
                    {email}
                  </ContactsText>
                );
              })}
            </ContactsBox>
            <ResumeBox>
              <SectionsTitle className="resume">Resumo</SectionsTitle>
              <SectionsParagraph className="resume">
                {form.description}
              </SectionsParagraph>
            </ResumeBox>
          </Contacts>
        </PersonalDataSection>
        <AcademicData>
          <SectionsTitle className="academicSectionTitle">
            Informações Acadêmicas
          </SectionsTitle>
          <AcademicBox>
            <BoxSubtitle className="course">{form.institution}</BoxSubtitle>
            <BoxSubtitle className="fontSizeAdjust">
              {form.degree} {form.course}
            </BoxSubtitle>
            <SectionsParagraph>
              Curso de 6 meses de duração, com 1000 horas de estudos em aulas,
              exercícios e projetos práticos, o curso me trouxe até meu nível de
              aprendizado atual. Aprendi Javascript, React, Node JS, consumo e
              criação de API’S REST (Express) , uso de banco de dados utilizando
              a linguagem mySQL.
            </SectionsParagraph>
            <SectionsParagraph>
              Início em {form.startdate} até {form.enddate}
            </SectionsParagraph>

            <BoxSubtitle className="course">{form.institution}</BoxSubtitle>
            <BoxSubtitle className="fontSizeAdjust">
              {form.degree} {form.course}
            </BoxSubtitle>
            <SectionsParagraph>
              Curso de 6 meses de duração, com 1000 horas de estudos em aulas,
              exercícios e projetos práticos, o curso me trouxe até meu nível de
              aprendizado atual. Aprendi Javascript, React, Node JS, consumo e
              criação de API’S REST (Express) , uso de banco de dados utilizando
              a linguagem mySQL.
            </SectionsParagraph>
            <SectionsParagraph>
              Início em {form.startdate} até {form.enddate}
            </SectionsParagraph>
          </AcademicBox>
        </AcademicData>
        <KnowledgesData>
          <SectionsTitle className="KnowledgesSectionTitle">
            Qualificações e Idiomas
          </SectionsTitle>
          <SectionBox>
            <ListBox className="knowledges">
              {knowledges.map((knowledge) => {
                return <ListItem>{knowledge}</ListItem>;
              })}
            </ListBox>
            <ListBox className="languages">
              <ListItem>{form.language}</ListItem>
              <ListItem>{form.level}</ListItem>
            </ListBox>
          </SectionBox>
        </KnowledgesData>
        <ProffesionalData>
          <SectionsTitle className="proffesionalSectionTitle">
            Experiências Profisisonais
          </SectionsTitle>
          <BoxSubtitle className="company">{form.company}</BoxSubtitle>
          <SectionsParagraph className="company">
            {form.activities}
          </SectionsParagraph>
          <SectionsParagraph className="company">
            Início em {form.admitdate} até {form.resigndate}
          </SectionsParagraph>
        </ProffesionalData>
      </ReviewPageLayout>
    </>
  );
};

export default ReviewPage;

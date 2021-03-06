import React, { useEffect } from 'react';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import react-hook
import useKnowledgeHandler from '../../hooks/useKnowledgeHandler';

//import routers-goTo's
import {
  goToInstitutionPage,
  goBack,
  goToReviewPage,
} from '../../routers/goToPages';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';

//styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { HeaderTitle } from '../../styles/Components/HeaderTitle/styles';
import { Main } from '../../styles/Components/MainContainer/styles';
import { InputBox } from '../../styles/Components/InputBox/styles';
import { Input } from '../../components/Input/styles';
import { CodesIcon } from '../../styles/Components/Icons/styles';
import { ListBox, ListItem } from '../../styles/Components/List/styles';
import { MainFooter } from '../../styles/Components/Footer/styles';
import {
  BackButton,
  NextButton,
  BackToButton,
  AddButton,
  DeleteButton,
} from '../../styles/Components/Buttons/styles';

const KnowledgeInputPage = () => {
  const {
    history,
    form,
    handleOnchangeInput,
    knowledges,
    setKnowledges,
  } = useFormulary();
  const [
    handleAddingKnowledges,
    handleEditKnowledge,
    handleDeleteKnowledge,
  ] = useKnowledgeHandler();

  useEffect(() => {
    const persistKnowledges = window.localStorage.getItem('knowledges');
    if (persistKnowledges) {
      setKnowledges(JSON.parse(persistKnowledges));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('knowledges', JSON.stringify(knowledges));
  });

  return (
    <>
      <Header>
        <HeaderTitle className="isPersonal">Dados Pessoais</HeaderTitle>
      </Header>
      <PagesContainer>
        <Main>
          {knowledges.length > 0 ? (
            <Text
              content="mais algum"
              span="conhecimento"
              continueContent="?"
            />
          ) : (
            <Text
              content="Adicione aqui os"
              span="seus"
              continueContent="conhecimentos"
            />
          )}
          <InputBox>
            {knowledges.length > 0 ? (
              <BackToButton onClick={() => goToReviewPage(history)} />
            ) : (
              <BackToButton className="isHidden" />
            )}
            <Input
              className="withAdd"
              name="knowledge"
              value={form.knowledge}
              onChange={handleOnchangeInput}
              placeholder="Ex: HTML"
            />
            {form.knowledge !== '' ? (
              <AddButton
                onClick={() => handleAddingKnowledges(form.knowledge)}
              />
            ) : (
              <AddButton className="isdisabled" aria-disabled="true" />
            )}
          </InputBox>
          <InputBox className="knowledge">
            <ListBox className="knowledge">
              {knowledges.map((knowledge) => {
                return (
                  <ListItem className="knowledge" key={knowledge.id}>
                    <CodesIcon
                      onClick={() => handleEditKnowledge(knowledge.id)}
                    />
                    {knowledge.text}
                    <DeleteButton
                      onClick={() => handleDeleteKnowledge(knowledge.id)}
                    />
                  </ListItem>
                );
              })}
            </ListBox>
          </InputBox>
        </Main>
        <MainFooter>
          <BackButton onClick={() => goBack(history)} />
          {knowledges.length > 0 ? (
            <NextButton onClick={() => goToInstitutionPage(history)} />
          ) : (
            <NextButton
              onClick={() =>
                alert(
                  "Adicione pelo menos 1 conhecimento clicando no botão '+'"
                )
              }
            />
          )}
        </MainFooter>
      </PagesContainer>
    </>
  );
};

export default KnowledgeInputPage;

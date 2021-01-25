import React, { useEffect, useState } from 'react';

//import api-instance
import api from '../../services/api';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import routers-goTo's
import {
  goToCityInputPage,
  goBack,
  goToReviewPage,
} from '../../routers/goToPages';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';
import Select from '../../components/Select';

//styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { HeaderTitle } from '../../styles/Components/HeaderTitle/styles';
import { Main } from '../../styles/Components/MainContainer/styles';
import { InputBox } from '../../styles/Components/InputBox/styles';
import { SelectOption } from '../../components/Select/styles';
import { MainFooter } from '../../styles/Components/Footer/styles';
import {
  BackButton,
  NextButton,
  BackToButton,
  OpenSelect,
} from '../../styles/Components/Buttons/styles';

const StateInputPage = () => {
  const {
    history,
    states,
    setStates,
    selectedOption,
    setSelectedOption,
    isOpen,
    setIsOpen,
  } = useFormulary();

  const getState = async () => {
    try {
      const response = await api.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados`
      );
      response.data.sort((a, b) => a.nome.localeCompare(b.nome));
      setStates(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getState();
  }, []);

  const handleOnOptionClicked = (id) => () => {
    setSelectedOption(id);
    if (selectedOption) {
      setSelectedOption();
    }
  };

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Header>
        <HeaderTitle className="isPersonal">Dados Pessoais</HeaderTitle>
      </Header>
      <PagesContainer>
        <Main>
          <Text
            content="Informe o Estado onde"
            span="você"
            continueContent="mora"
          />
          <InputBox>
            <BackToButton
              onClick={() => goToReviewPage(history)}
              className="state"
            />
            <Select isState>
              {states.map((state) => {
                return (
                  <SelectOption
                    aria-required="true"
                    style={{
                      backgroundColor:
                        selectedOption === state ? 'var(--purple)' : '',
                    }}
                    key={state.id}
                    onClick={handleOnOptionClicked(state)}
                  >
                    {state.nome}
                  </SelectOption>
                );
              })}
            </Select>
            <OpenSelect onClick={handleToggle} />
          </InputBox>
        </Main>
        <MainFooter>
          <BackButton onClick={() => goBack(history)} />
          {selectedOption !== null ? (
            <NextButton onClick={() => goToCityInputPage(history)} />
          ) : (
            <NextButton onClick={() => alert('Selecione um estado')} />
          )}
        </MainFooter>
      </PagesContainer>
    </>
  );
};
export default StateInputPage;

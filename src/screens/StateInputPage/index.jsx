import React, { useEffect } from 'react';

//import api-instance
import api from '../../webServices/api';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import routers-goTo's
import { goToCityPage, goBack } from '../../routers/goToPages';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';

//styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { HeaderTitle } from '../../styles/Components/HeaderTitle/styles';
import { Main } from '../../styles/Components/MainContainer/styles';
import { InputBox } from '../../styles/Components/InputBox/styles';
import {
  Select,
  Option,
  AdjustSelectBox,
} from '../../styles/Components/Input/styles';
import { MainFooter } from '../../styles/Components/Footer/styles';
import {
  BackButton,
  NextButton,
  BackToButton,
} from '../../styles/Components/Buttons/styles';

const StateInputPage = () => {
  const {
    history,
    params,
    form,
    handleOnchangeInput,
    setStates,
    states,
  } = useFormulary();

  useEffect(() => {
    getStates();
  }, []);

  const getStates = () => {
    api
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`
      )
      .then((response) => {
        setStates(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(form.state);

  return (
    <>
      <Header>
        <HeaderTitle className="isPersonal">Dados Pessoais</HeaderTitle>
      </Header>
      <PagesContainer>
        <Main>
          <Text
            content="Qual é o estado que"
            span="você"
            continueContent="mora?"
          />
          <InputBox>
            {form.state !== '' ? (
              <BackToButton />
            ) : (
              <BackToButton className="ishidden" />
            )}
            <AdjustSelectBox className="select-wrapper">
              <Select
                className="withoutAdd"
                name="state"
                value={form.state}
                onChange={handleOnchangeInput}
              >
                <Option disabled value="">
                  Selecione um estado
                </Option>
                {states.map((state) => (
                  <Option key={state.id} value={state.id}>
                    {state.nome}
                  </Option>
                ))}
              </Select>
            </AdjustSelectBox>
          </InputBox>
        </Main>
        <MainFooter>
          <BackButton onClick={() => goBack(history)} />
          <NextButton onClick={() => goToCityPage(history)} />
        </MainFooter>
      </PagesContainer>
    </>
  );
};
export default StateInputPage;

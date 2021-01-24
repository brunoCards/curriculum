import React, { useEffect, useState } from 'react';

//import api-instance
import api from '../../services/api';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import routers-goTo's
import { goToEmailPage, goBack, goToReviewPage } from '../../routers/goToPages';

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
  OptionContainer,
  OptionBox,
  OptionItem,
  OptionItemText,
} from '../../styles/Components/Select/styles';
import { MainFooter } from '../../styles/Components/Footer/styles';
import {
  BackButton,
  NextButton,
  BackToButton,
  OpenSelect,
} from '../../styles/Components/Buttons/styles';

const StateInputPage = () => {
  const [isHidden, setIsHidden] = useState(true);

  const {
    history,
    form,
    handleOnchangeInput,
    states,
    setStates,
  } = useFormulary();

  const getState = async () => {
    try {
      const response = await api.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados
          `
      );
      console.log(response.data);
      response.data.sort((a, b) => a.nome.localeCompare(b.nome));
      setStates(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getState();
  }, []);

  const handleBoxVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <Header>
        <HeaderTitle className="isPersonal">Dados Pessoais</HeaderTitle>
      </Header>
      <PagesContainer>
        <Main className="state">
          <Text
            content="Informe o Estado onde"
            span="você"
            continueContent="mora"
          />
          <InputBox className>
            <BackToButton className="state" />
            <Select
              name="state"
              value={form.state}
              onChange={handleOnchangeInput}
              id="select"
            >
              <OptionItem className="grey" value="">
                Selecione um estado
              </OptionItem>
              {states.map(({ nome, id }) => {
                return (
                  <OptionItem key={id} value={id}>
                    {nome}
                  </OptionItem>
                );
              })}
            </Select>

            <OpenSelect />
          </InputBox>
        </Main>
        <MainFooter>
          <BackButton onClick={() => goBack(history)} />
          <NextButton onClick={() => goToEmailPage(history)} />
        </MainFooter>
      </PagesContainer>
    </>
  );
};
export default StateInputPage;

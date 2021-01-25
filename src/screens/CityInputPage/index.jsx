import React, { useEffect, useState } from 'react';

//import api-instance
import api from '../../services/api';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import routers-goTo's
import { goToPhonePage, goBack, goToReviewPage } from '../../routers/goToPages';

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

const CityInputPage = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const {
    history,
    cities,
    setCities,
    selectedOption,
    setSelectedOption,
    isOpen,
    setIsOpen,
  } = useFormulary();

  const getCities = async (id) => {
    try {
      const response = await api.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedOption.id}/municipios`
      );
      response.data.sort((a, b) => a.nome.localeCompare(b.nome));
      setCities(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    (id) => {
      getCities();
    },
    [selectedOption.id]
  );

  const handleOnOptionClicked = (id) => () => {
    setSelectedCity(id);
    console.log(id);
    console.log(selectedCity);
    if (selectedCity) {
      setSelectedCity();
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
          <Text content="Informe também a Cidade" />
          <InputBox>
            <BackToButton
              onClick={() => goToReviewPage(history)}
              className="state"
            />
            <Select>
              {cities.map((city) => {
                return (
                  <SelectOption
                    style={{
                      backgroundColor:
                        selectedCity === city ? 'var(--purple)' : '',
                    }}
                    key={city.id}
                    onClick={handleOnOptionClicked(city)}
                  >
                    {city.nome}
                  </SelectOption>
                );
              })}
            </Select>
            <OpenSelect onClick={handleToggle} />
          </InputBox>
        </Main>
        <MainFooter>
          <BackButton onClick={() => goBack(history)} />
          <NextButton onClick={() => goToPhonePage(history)} />
        </MainFooter>
      </PagesContainer>
    </>
  );
};
export default CityInputPage;

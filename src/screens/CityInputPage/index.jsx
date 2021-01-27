import React, { useEffect } from 'react';

//import api-instance
import api from '../../services/api';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import routers-goTo's
import { goToEmailPage, goBack, goToReviewPage } from '../../routers/goToPages';
import { useParams } from 'react-router-dom';

//components
import StateInputPage from '../StateInputPage';
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
  const {
    history,
    cities,
    setCities,
    selectedOption,
    selectedCity,
    setSelectedCity,
    isOpen,
    setIsOpen,
  } = useFormulary();

  const getCities = async (id) => {
    try {
      const response = await api.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${option.id}/municipios`
      );
      response.data.sort((a, b) => a.nome.localeCompare(b.nome));
      setCities(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCities();
  }, []);

  const option = useParams();

  const handleOnOptionClicked = (id) => () => {
    setSelectedCity(id);
    console.log(id);
  };

  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const persistSelectedCity = window.localStorage.getItem('selectedCity');
    if (persistSelectedCity) {
      setSelectedCity(JSON.parse(persistSelectedCity));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('selectedCity', JSON.stringify(selectedCity));
  });

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
                return selectedCity === null ? (
                  <SelectOption
                    key={city.id}
                    onClick={handleOnOptionClicked(city)}
                  >
                    {city.nome}
                  </SelectOption>
                ) : (
                  <SelectOption
                    style={{
                      backgroundColor:
                        selectedCity.id === city.id ? 'var(--purple)' : '',
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
          <NextButton onClick={() => goToEmailPage(history)} />
        </MainFooter>
      </PagesContainer>
    </>
  );
};
export default CityInputPage;

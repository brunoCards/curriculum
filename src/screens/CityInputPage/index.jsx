import React, { useEffect } from 'react';

//import api-instance
import api from '../../webServices/api';

//import context
import { useFormulary } from '../../contexts/FormContext';

//import routers-goTo's
import { goToEmailPage, goBack } from '../../routers/goToPages';

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

const CityInputPage = () => {
  const {
    history,
    form,
    handleOnchangeInput,
    cities,
    setCities,
  } = useFormulary();

  useEffect(() => {
    if (form.state) {
      getCities(form.state);
    }
  }, [form.state]);

  const getCities = (id) => {
    api
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${form.state}/municipios?orderBy=nome`
      )
      .then((response) => {
        const results = response.data;
        results.sort((a, b) => a.nome.localeCompare(b.nome));
        setCities(results);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Header>
        <HeaderTitle className="isPersonal">Dados Pessoais</HeaderTitle>
      </Header>
      <PagesContainer>
        <Main>
          <Text content="E a" span="cidade?" />
          <InputBox>
            {form.city !== '' ? (
              <BackToButton />
            ) : (
              <BackToButton className="ishidden" />
            )}
            <AdjustSelectBox className="select-wrapper">
              <Select
                className="withoutAdd"
                name="city"
                value={form.city}
                onChange={handleOnchangeInput}
              >
                <Option disabled value="">
                  cidades
                </Option>
                {cities.map((city) => (
                  <Option key={city.id}>{city.nome}</Option>
                ))}
              </Select>
            </AdjustSelectBox>
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

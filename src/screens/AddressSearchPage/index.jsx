import React, { useEffect } from 'react';

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
import { Input } from '../../styles/Components/Input/styles';
import { AddressArea } from '../../components/Text/styles';
import { MainFooter } from '../../styles/Components/Footer/styles';
import { AddresPinIcon } from '../../styles/Components/Icons/styles';
import {
  BackButton,
  NextButton,
  BackToButton,
  SearchButton,
} from '../../styles/Components/Buttons/styles';

const AddressSearchPage = () => {
  const {
    history,
    form,
    handleOnchangeInput,
    address,
    setAddress,
    setForm,
  } = useFormulary();

  const getAddress = (cep) => {
    api.get(`https://viacep.com.br/ws/${cep}/json`).then((response) => {
      const result = response.data;
      setAddress(result);
    });
  };
  return (
    <>
      <Header>
        <HeaderTitle className="isPersonal">Dados Pessoais</HeaderTitle>
      </Header>
      <PagesContainer>
        <Main>
          <Text
            content="Informe o cep de onde"
            span="você"
            continueContent="mora"
          />
          <InputBox>
            {form.cep !== '' ? (
              <BackToButton onClick={() => goToReviewPage(history)} />
            ) : (
              <BackToButton className="ishidden" />
            )}
            <Input
              name="cep"
              value={form.cep}
              onChange={handleOnchangeInput}
              placeholder="Digite seu CEP"
            />
            <SearchButton onClick={() => getAddress(form.cep)} />
          </InputBox>
          {address.length !== 0 ? (
            <InputBox className="address">
              <AddressArea>
                <AddresPinIcon />
                {address.localidade + ' - '}
                {address.uf}
              </AddressArea>
            </InputBox>
          ) : (
            <InputBox>
              <AddressArea className="hide">
                {address.localidade + ' - '}
                {address.uf}
              </AddressArea>
            </InputBox>
          )}
        </Main>
        <MainFooter>
          <BackButton onClick={() => goBack(history)} />
          <NextButton onClick={() => goToEmailPage(history)} />
        </MainFooter>
      </PagesContainer>
    </>
  );
};
export default AddressSearchPage;

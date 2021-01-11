import React from 'react';

import { useFormulary } from '../../contexts/FormContext';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';
import { Main } from '../../styles/Components/MainContainer/styles';
import { Input } from '../../styles/Components/Input/styles';

//import FooterStyleComponents
import { MainFooter } from '../../styles/Components/Footer/styles';

import {
  BackButton,
  NextButton,
  BackToButton,
} from '../../styles/Components/Buttons/styles';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { BoxIcon } from '../../styles/Components/BoxIcon/styles';

const NameInputPage = () => {
  const { formData, setForm } = useFormulary();

  const { name } = formData;

  console.log(formData);

  return (
    <>
      <Header />
      <PagesContainer>
        <Main>
          {
            <BoxIcon>
              {name !== '' ? (
                <BackToButton onClick={() => go('review')} />
              ) : (
                <BackToButton
                  className="ishidden"
                  onClick={() => go('review')}
                />
              )}
            </BoxIcon>
          }
          <Text content="Olá como" span="você" continueContent="se chama?" />
          <Input name="name" value={name} onChange={setForm} />
        </Main>
        <MainFooter>
          <BackButton />
          <NextButton />
        </MainFooter>
      </PagesContainer>
    </>
  );
};
export default NameInputPage;

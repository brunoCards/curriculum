import React from 'react';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';

//import FooterStyleComponents
import { LargeFooter } from '../../styles/Components/Footer/styles';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { LargeMain } from '../../styles/Components/MainContainer/styles';
import { LargeInput } from '../../styles/Components/Input/styles';
import { BoxIcon } from '../../styles/Components/BoxIcon/styles';

import {
  BackButton,
  NextButton,
  BackToButton,
} from '../../styles/Components/Buttons/styles';

const ActivitiesInputPage = ({ navigation, formData, setForm, go }) => {
  const { activities } = formData;
  return (
    <>
      <Header />
      <PagesContainer>
        <LargeMain>
          <BoxIcon>
            {activities !== '' ? (
              <BackToButton onClick={() => go('review')} />
            ) : (
              <BackToButton className="ishidden" onClick={() => go('review')} />
            )}
          </BoxIcon>
          <Text content="Atividades" span="desempenhadas" />
          <LargeInput name="activities" value={activities} onChange={setForm} />
        </LargeMain>
        <LargeFooter>
          <BackButton onClick={() => navigation.previous()} />
          <NextButton onClick={() => navigation.next()} />
        </LargeFooter>
      </PagesContainer>
    </>
  );
};
export default ActivitiesInputPage;

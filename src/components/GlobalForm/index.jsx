import React from 'react';

import { Form, SecondForm } from './styles';
import GlobalInput from '../GlobalInput';
import LandingPage from '../../screens/LandingPage';

const GlobalForm = ({
  isName,
  isAge,
  isCity,
  isState,
  isPhone,
  isEmail,
  isDescription,
  isDifferentials,
  isOneInput,
}) => {
  return (
    <>
      {isOneInput ? (
        <Form>
          {() => {
            switch ({}) {
              case isName:
                <GlobalInput />;
                break;

              case isAge:
                <GlobalInput />;
                break;

              case isCity:
                <GlobalInput />;

                break;
              case isState:
                <GlobalInput />;

                break;
              case isPhone:
                <GlobalInput />;

                break;
              case isEmail:
                <GlobalInput />;

                break;
              case isDescription:
                <GlobalInput />;

                break;
              case isDifferentials:
                <GlobalInput />;

                break;

              default:
                <LandingPage />;
                break;
            }
          }}
        </Form>
      ) : (
        <SecondForm></SecondForm>
      )}
    </>
  );
};

export default GlobalForm;

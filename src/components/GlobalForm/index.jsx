import React from 'react';

import { Form } from './styles';
import GlobalInput from '../GlobalInput';

const GlobalForm = ({ isOneInput }) => {
  return (
    <>
      {isOneInput ? (
        <Form>
          <GlobalInput />
        </Form>
      ) : (
        <Form>
          <GlobalInput />
        </Form>
      )}
    </>
  );
};

export default GlobalForm;

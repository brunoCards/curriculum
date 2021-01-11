import React, { createContext, useContext } from 'react';

//import react-hooks-helper
import { useForm } from 'react-hooks-helper';

//import react-router-dom
import { useHistory } from 'react-router-dom';

const defaultData = {
  activities: '',
  actualWork: false,
  admitdate: '',
  age: '',
  city: '',
  company: '',
  course: '',
  degree: '',
  description: '',
  differentials: '',
  email: '',
  enddate: '',
  knowledge: '',
  institution: '',
  language: '',
  level: '',
  name: '',
  phone: '',
  resigndate: '',
  startdate: '',
  state: '',
};

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setForm] = useForm(defaultData);
  const history = useHistory();

  return (
    <FormContext.Provider
      value={{
        formData,
        setForm,
        history,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormulary = () => {
  const context = useContext(FormContext);
  const { formData, setForm } = context;

  return { formData, setForm };
};

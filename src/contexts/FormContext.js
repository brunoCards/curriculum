import React, { createContext, useContext, useState, useEffect } from 'react';

// //import react-hook
import useForm from '../hooks/useForm';

//import react-router-dom
import { useHistory } from 'react-router-dom';

const FormContext = createContext();

const initialState = {
  activities: '',
  actualWork: false,
  admitdate: '',
  age: '',
  city: '',
  company: '',
  course: '',
  degree: '',
  description: '',
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

export const FormProvider = ({ children }) => {
  const history = useHistory();
  const [emails, setEmails] = useState([]);
  const [phones, setPhones] = useState([]);
  const [knowledges, setKnowledges] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  // hooks
  const [form, handleOnchangeInput, setForm] = useForm(initialState);

  return (
    <FormContext.Provider
      value={{
        form,
        setForm,
        handleOnchangeInput,
        emails,
        setEmails,
        phones,
        setPhones,
        knowledges,
        setKnowledges,
        states,
        setStates,
        cities,
        setCities,
        history,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormulary = () => {
  const context = useContext(FormContext);
  const {
    form,
    setForm,
    handleOnchangeInput,
    emails,
    setEmails,
    phones,
    setPhones,
    knowledges,
    setKnowledges,
    states,
    setStates,
    cities,
    setCities,
    history,
  } = context;

  return {
    form,
    setForm,
    handleOnchangeInput,
    emails,
    setEmails,
    phones,
    setPhones,
    knowledges,
    setKnowledges,
    states,
    setStates,
    cities,
    setCities,
    history,
  };
};

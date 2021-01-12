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

  const [form, handleOnchangeInput, resetState, setForm] = useForm(
    initialState
  );

  //verificar refatoração futura

  const handleAddingEmails = (input) => {
    setEmails([...emails, input]);

    return resetState();
  };

  const handleAddingPhones = (input) => {
    setPhones([...phones, input]);

    return resetState();
  };

  const handleAddingKnowledges = (input) => {
    setKnowledges([...knowledges, input]);

    return resetState();
  };

  useEffect(() => {
    const formdata = sessionStorage.getItem('form');
    if (formdata) {
      setForm(JSON.parse(formdata));
    }
  }, []);

  useEffect(() => {
    const emailsdata = sessionStorage.getItem('emails');
    if (emailsdata) {
      setEmails(JSON.parse(emailsdata));
    }
  }, []);

  useEffect(() => {
    const phonesdata = localStorage.getItem('phones');
    if (phonesdata) {
      setPhones(JSON.parse(phonesdata));
    }
  }, []);

  useEffect(() => {
    const knowledgesdata = sessionStorage.getItem('knowledges');
    if (knowledgesdata) {
      setKnowledges(JSON.parse(knowledgesdata));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('form', JSON.stringify(form));
    sessionStorage.setItem('emails', JSON.stringify(emails));
    sessionStorage.setItem('phones', JSON.stringify(phones));
    sessionStorage.setItem('knowledges', JSON.stringify(knowledges));
  });
  // até aqui

  return (
    <FormContext.Provider
      value={{
        history,
        form,
        handleOnchangeInput,
        handleAddingEmails,
        handleAddingPhones,
        handleAddingKnowledges,
        emails,
        phones,
        knowledges,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormulary = () => {
  const context = useContext(FormContext);
  const {
    history,
    form,
    handleOnchangeInput,
    handleAddingEmails,
    handleAddingPhones,
    handleAddingKnowledges,
    emails,
    phones,
    knowledges,
  } = context;

  return {
    history,
    form,
    handleOnchangeInput,
    handleAddingEmails,
    handleAddingPhones,
    handleAddingKnowledges,
    emails,
    phones,
    knowledges,
  };
};

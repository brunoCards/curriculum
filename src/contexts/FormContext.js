import React, { createContext, useContext, useState, useEffect } from 'react';

// //import react-hook
import useForm from '../hooks/useForm';

//import react-router-dom
import { useHistory, useParams } from 'react-router-dom';

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
  state: {
    id: '',
    nome: '',
  },
};

export const FormProvider = ({ children }) => {
  const history = useHistory();
  const params = useParams();
  const [emails, setEmails] = useState([]);
  const [phones, setPhones] = useState([]);
  const [knowledges, setKnowledges] = useState([]);
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [stateName, setStateName] = useState('Selecione um estado');

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
    const statesData = sessionStorage.getItem('states');
    if (statesData) {
      setStates(JSON.parse(statesData));
    }
  }, []);

  useEffect(() => {
    const citiesData = sessionStorage.getItem('cities');
    if (citiesData) {
      setCities(JSON.parse(citiesData));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('form', JSON.stringify(form));
    sessionStorage.setItem('emails', JSON.stringify(emails));
    sessionStorage.setItem('phones', JSON.stringify(phones));
    sessionStorage.setItem('knowledges', JSON.stringify(knowledges));
    sessionStorage.setItem('states', JSON.stringify(states));
    sessionStorage.setItem('cities', JSON.stringify(cities));
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
        cities,
        setCities,
        states,
        setStates,
        params,
        stateName,
        setStateName,
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
    cities,
    setCities,
    states,
    setStates,
    params,
    stateName,
    setStateName,
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
    cities,
    setCities,
    states,
    setStates,
    params,
    stateName,
    setStateName,
  };
};

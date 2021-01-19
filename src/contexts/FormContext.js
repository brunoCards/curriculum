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
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [emails, setEmails] = useState([]);
  const [phones, setPhones] = useState([]);
  const [knowledges, setKnowledges] = useState([]);

  const [form, handleOnchangeInput, setForm] = useForm(initialState);

  //handlers
  const handleAddingEmails = (input) => {
    setEmails([...emails, input]);

    setForm({ ...form, email: '' });
  };

  const handleAddingPhones = (input) => {
    setPhones([...phones, input]);

    setForm({ ...form, phone: '' });
  };

  const handleAddingKnowledges = (input) => {
    setKnowledges([...knowledges, input]);

    setForm({ ...form, knowledge: '' });
  };

  //data persist

  //emails
  useEffect(() => {
    const persistEmails = window.localStorage.getItem('emails');
    if (persistEmails) {
      setEmails(JSON.parse(persistEmails));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('emails', JSON.stringify(emails));
  });

  //phones
  useEffect(() => {
    const persistPhones = window.localStorage.getItem('phones');
    if (persistPhones) {
      setPhones(JSON.parse(persistPhones));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('phones', JSON.stringify(phones));
  });

  //knowledges
  useEffect(() => {
    const persistKnowledges = window.localStorage.getItem('knowledges');
    if (persistKnowledges) {
      setKnowledges(JSON.parse(persistKnowledges));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('knowledges', JSON.stringify(knowledges));
  });

  //states
  useEffect(() => {
    const persistStates = window.localStorage.getItem('states');
    if (persistStates) {
      setStates(JSON.parse(persistStates));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('states', JSON.stringify(states));
  });

  //cities
  useEffect(() => {
    const persistCities = window.localStorage.getItem('cities');
    if (persistCities) {
      setCities(JSON.parse(persistCities));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('cities', JSON.stringify(cities));
  });

  return (
    <FormContext.Provider
      value={{
        history,
        form,
        cities,
        setCities,
        states,
        setStates,
        emails,
        phones,
        knowledges,
        handleOnchangeInput,
        handleAddingEmails,
        handleAddingPhones,
        handleAddingKnowledges,
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
  };
};

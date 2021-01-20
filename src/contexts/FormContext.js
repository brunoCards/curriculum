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
  cep: '',
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
};

export const FormProvider = ({ children }) => {
  const history = useHistory();
  const [address, setAddress] = useState([]);
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

  //address
  useEffect(() => {
    const persistAddress = window.localStorage.getItem('address');
    if (persistAddress) {
      setAddress(JSON.parse(persistAddress));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('address', JSON.stringify(address));
  });

  return (
    <FormContext.Provider
      value={{
        form,
        address,
        setAddress,
        emails,
        phones,
        knowledges,
        history,
        handleOnchangeInput,
        handleAddingEmails,
        handleAddingPhones,
        handleAddingKnowledges,
        setForm,
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
    history,
    handleOnchangeInput,
    handleAddingEmails,
    handleAddingPhones,
    handleAddingKnowledges,
    emails,
    phones,
    knowledges,
    address,
    setAddress,
    setForm,
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
    address,
    setAddress,
    setForm,
  };
};

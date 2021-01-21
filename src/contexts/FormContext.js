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
  isEdditing: false,
};

export const FormProvider = ({ children }) => {
  const history = useHistory();
  const [address, setAddress] = useState([]);
  const [emails, setEmails] = useState([]);
  const [phones, setPhones] = useState([]);
  const [knowledges, setKnowledges] = useState([]);

  const [form, handleOnchangeInput, setForm] = useForm(initialState);

  //Emailhandlers
  const handleAddingEmails = () => {
    const newEmail = {
      id: new Date().getTime(),
      email: form.email,
    };
    setEmails([...emails].concat(newEmail));
    setForm({ ...form, email: '' });
  };

  const handleDeleteEmail = (id) => {
    const emailFilter = [...emails].filter((email) => email.id !== id);
    setEmails(emailFilter);
  };

  //Phonehandlers
  const handleAddingPhones = () => {
    const newPhone = {
      id: new Date().getTime(),
      phone: form.phone,
    };
    setPhones([...phones].concat(newPhone));
    setForm({ ...form, phone: '' });
  };

  const handleDeletePhone = (id) => {
    const phoneFilter = [...phones].filter((phone) => phone.id !== id);

    setPhones(phoneFilter);
  };

  //Knowledgehandlers

  const handleAddingKnowledges = () => {
    const newKnowledge = {
      id: new Date().getTime(),
      knowledge: form.knowledge,
    };
    setKnowledges([...knowledges].concat(newKnowledge));
    setForm({ ...form, knowledge: '' });
  };

  const handleDeleteknowledge = (id) => {
    const knowledgeFilter = [...knowledges].filter(
      (knowledge) => knowledge.id !== id
    );
    setKnowledges(knowledgeFilter);
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
        setForm,
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
        handleDeleteEmail,
        handleDeletePhone,
        handleDeleteknowledge,
        handleEditEmail,
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
    history,
    handleOnchangeInput,
    handleAddingEmails,
    handleAddingPhones,
    handleAddingKnowledges,
    handleDeleteEmail,
    handleDeletePhone,
    handleDeleteknowledge,
    handleEditEmail,
    emails,
    phones,
    knowledges,
    address,
    setAddress,
  } = context;

  return {
    history,
    form,
    setForm,
    handleOnchangeInput,
    handleDeleteEmail,
    handleDeletePhone,
    handleAddingEmails,
    handleAddingPhones,
    handleAddingKnowledges,
    handleDeleteknowledge,
    handleEditEmail,
    emails,
    phones,
    knowledges,
    address,
    setAddress,
  };
};

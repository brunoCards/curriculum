import React, { createContext, useContext, useState } from 'react';
//import react-router-dom
import { useHistory } from 'react-router-dom';
// //import react-hook
import useForm from '../hooks/useForm';

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
  linkedin: '',
  name: '',
  phone: '',
  portfolio: '',
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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

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
        isOpen,
        setIsOpen,
        selectedOption,
        setSelectedOption,
        selectedCity,
        setSelectedCity,
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
    isOpen,
    setIsOpen,
    selectedOption,
    setSelectedOption,
    selectedCity,
    setSelectedCity,
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
    isOpen,
    setIsOpen,
    selectedOption,
    setSelectedOption,
    selectedCity,
    setSelectedCity,
    history,
  };
};

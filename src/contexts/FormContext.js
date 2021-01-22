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
  email: {
    id: null,
    text: '',
  },
  enddate: '',
  knowledge: {
    id: null,
    text: '',
  },
  institution: '',
  language: '',
  level: '',
  name: '',
  phone: {
    id: null,
    number: '',
  },
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
      text: form.email,
    };
    if (
      emails.find((email) => email.text.toLowerCase === form.email.toLowerCase)
    ) {
      alert('Este email já está em uso');
      return;
    }
    setEmails([...emails].concat(newEmail));
    setForm({ ...form, email: '' });
  };

  const handleDeleteEmail = (id) => {
    setEmails(emails.filter((email) => email.id !== id));
  };

  const handleEditEmail = (id) => {
    if (form.email !== '') {
      alert('Você já está editando um email');
      return;
    }
    const findEmail = emails.find((email) => email.id === id);
    if (findEmail !== -1) {
      emails.pop(findEmail, 1);
      setForm({ ...form, email: findEmail.text });
    }
  };

  //Phonehandlers
  const handleAddingPhones = () => {
    const newPhone = {
      id: new Date().getTime(),
      number: form.phone,
    };
    if (phones.find((phone) => phone.number === form.phone)) {
      alert('Este telefone já está em uso');
      return;
    }
    setPhones([...phones].concat(newPhone));
    setForm({ ...form, phone: '' });
  };

  const handleDeletePhone = (id) => {
    const phoneFilter = [...phones].filter((phone) => phone.id !== id);

    setPhones(phoneFilter);
  };

  const handleEditphone = (id) => {
    if (form.phone !== '') {
      alert('Você já está editando um telefone');
      return;
    }
    const findPhone = phones.find((phone) => phone.id === id);
    if (findPhone !== -1) {
      phones.pop(findPhone, 1);
      setForm({ ...form, phone: findPhone.number });
    }
  };

  //Knowledgehandlers

  const handleAddingKnowledges = () => {
    const newKnowledge = {
      id: new Date().getTime(),
      text: form.knowledge,
    };
    if (
      knowledges.find(
        (knowledge) => knowledge.text.toLowerCase === form.knowledge.toLowerCase
      )
    ) {
      alert('Este conhecimento já foi adicionado');
      return;
    }
    setKnowledges([...knowledges].concat(newKnowledge));
    setForm({ ...form, knowledge: '' });
  };

  const handleDeleteknowledge = (id) => {
    const knowledgeFilter = [...knowledges].filter(
      (knowledge) => knowledge.id !== id
    );
    setKnowledges(knowledgeFilter);
  };

  const handleEditKnowledge = (id) => {
    if (form.knowledge !== '') {
      alert('Você já está editando este conhecimento');
      return;
    }
    const findKnowledge = knowledges.find((knowledge) => knowledge.id === id);
    if (findKnowledge !== -1) {
      phones.pop(findKnowledge, 1);
      setForm({ ...form, knowledge: findKnowledge.text });
    }
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
        handleEditphone,
        handleEditKnowledge,
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
    handleEditphone,
    handleEditKnowledge,
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
    handleEditphone,
    handleEditKnowledge,
    emails,
    phones,
    knowledges,
    address,
    setAddress,
  };
};

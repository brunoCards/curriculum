import React, { useState, createContext } from 'react';

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [form, setForm] = useState({
    name: '',
    age: '',
    city: '',
    state: '',
    phone: '',
    email: '',
    description: '',
    differentials: '',
  });
  const onChangeInput = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChangeInput(name, value);

    setForm({ ...form, value });
  };

  return (
    <FormContext.Provider value={{ form, handleInputChange }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;

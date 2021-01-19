import { useState, useEffect } from 'react';

const useForm = (props) => {
  let initialState = { ...props };

  const [form, setForm] = useState(initialState);

  const handleOnchangeInput = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    const persistFormData = window.localStorage.getItem('form');
    if (persistFormData) {
      setForm(JSON.parse(persistFormData));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('form', JSON.stringify(form));
  });

  return [form, handleOnchangeInput, setForm];
};

export default useForm;

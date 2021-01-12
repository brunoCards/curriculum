import { useState } from 'react';

const useForm = (props) => {
  let initialState = { ...props };

  const [form, setForm] = useState(initialState);

  const handleOnchangeInput = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const resetState = () => {
    setForm({ ...initialState });
  };

  return [form, handleOnchangeInput, resetState, setForm];
};

export default useForm;

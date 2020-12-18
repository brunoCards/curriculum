import { useState } from 'react';

/*
 * Hook para inputs controlados
 * função que usa do spread operator para copiar os valores atuais do form
 * e substituirá os inputs que tiverem as propriedades name, e value por
 * valores dinâmicos, e finalizo atualizando o estado do form com esses valores
 *
 * e aproveitando o código para criar um reset nos inputs para seus estados iniciais
 */
const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChangeInput = (name, value) => {
    const newForm = { ...form, [name]: value };

    setForm(newForm);
  };

  const resetState = () => {
    setForm(initialState);
  };

  return [form, onChangeInput, resetState];
};

export default useForm;

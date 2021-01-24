import { useCallback } from 'react';

const useInputMaskHandler = () => {
  const handleInputMask = useCallback((event) => {
    event.currentTarget.maxLength = 9;
    let value = event.currentTarget.value;
    value = value.replace(/\D/g, ''); // exclui tudo que não é numero.
    value = value.replace(/^(\d{5})(\d)/, '$1-$2'); // procura desde o inicio do input, conta 5 digitos numericos e colocará o hifen e depois do hifen adicionara o restante
    event.currentTarget.value = value;
  }, []);

  return [handleInputMask];
};

export default useInputMaskHandler;

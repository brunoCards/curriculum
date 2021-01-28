import React from 'react';
import { InputMasked } from './styles';

const handleCastingToNumbers = (string) => string.replace(/]/g, ''); //encontre tudo que não for de 0 a 9 e torne uma string vazia

const InputComponent = ({
  mask,
  value,
  onChange,
  name,
  placeholder,
  isNumbers,
}) => {
  const handleChangeNumbers = (event) => {
    onChange({
      ...event,
      target: {
        ...event.target,
        name,
        value: handleCastingToNumbers(event.target.value),
      },
    });
  };
  const handleChangeCharsENumbers = (event) => {
    onChange({
      ...event,
      target: {
        ...event.target,
        name,
        value: event.target.value,
      },
    });
  };

  return (
    <>
      {isNumbers ? (
        <InputMasked
          name={name}
          mask={mask}
          value={value}
          onChange={handleChangeNumbers}
          placeholder={placeholder}
        />
      ) : (
        <InputMasked
          name={name}
          mask={mask}
          value={value}
          placeholder={placeholder}
          onChange={handleChangeCharsENumbers}
        />
      )}
    </>
  );
};

export default InputComponent;

import React from 'react';

//import styled-components
import {
  SelectContainer,
  SelectInputHeader,
  SelectListContainer,
  SelectInput,
} from './styles';

//import context
import { useFormulary } from '../../contexts/FormContext';

const Select = ({ children, isState }) => {
  const { isOpen, setIsOpen } = useFormulary();

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <>
      {isState ? (
        <SelectContainer>
          {isOpen === true ? (
            <SelectInputHeader className="textOpacity" onClick={handleToggle}>
              Selecione um estado
            </SelectInputHeader>
          ) : (
            <SelectInputHeader onClick={handleToggle}>
              Selecione um estado
            </SelectInputHeader>
          )}

          {isOpen && (
            <SelectListContainer>
              <SelectInput>{children}</SelectInput>
            </SelectListContainer>
          )}
        </SelectContainer>
      ) : (
        <SelectContainer>
          {isOpen === true ? (
            <SelectInputHeader className="textOpacity" onClick={handleToggle}>
              Selecione uma cidade
            </SelectInputHeader>
          ) : (
            <SelectInputHeader onClick={handleToggle}>
              Selecione uma cidade
            </SelectInputHeader>
          )}

          {isOpen && (
            <SelectListContainer>
              <SelectInput>{children}</SelectInput>
            </SelectListContainer>
          )}
        </SelectContainer>
      )}
    </>
  );
};

export default Select;

import styled from 'styled-components';

export const Select = styled.select`
  width: 100%;
  height: 50px;
  padding-left: 10px;
  border: 3px solid var(--black);
  border-radius: 0 6px 0 0;
  background-color: var(--blue);

  display: flex;

  font-size: 25px;

  appearance: none;

  position: relative;

  &:acitive {
    position: relative;
    top: 50%;
  }
`;

export const OptionItem = styled.option``;

import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 3px solid var(--black);

  background-color: var(--blue);

  font-size: 25px;
  color: var(--black);
  text-align: center;

  &.withoutAdd {
    border-radius: 0 6px 6px 0;
  }
`;

export const LargeInput = styled.textarea`
  width: 50%;
  height: 180px;
  padding: 10px;

  font-size: 25px;
  color: var(--black);
  text-align: justify;

  border: 3px solid var(--black);

  background-color: var(--blue);
  &.withoutAdd {
    border-radius: 0 6px 6px 6px;
  }
`;

export const AdjustSelectBox = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  &.select-wrapper {
    position: relative;
  }

  &.select-wrapper::after {
    content: '↴';
    font-size: 25px;
    font-weight: bold;
    top: 10px;
    right: 10px;
    position: absolute;
    cursor: pointer;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 50px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: 3px solid var(--black);
  background-color: var(--blue);

  appearance: none;

  font-size: 25px;

  &.withoutAdd {
    padding: 0 10px;
    border-radius: 0 6px 6px 0;
  }
`;

export const Option = styled.option`
  font-size: 25px;
  color: var(--black);
`;

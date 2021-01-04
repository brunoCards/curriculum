import styled from 'styled-components';

export const Input = styled.input`
  width: 50%;
  height: 50px;
  border: 3px solid var(--text_input);
  border-radius: 6px;

  background-color: var(--blue_bg_input);

  font-size: 25px;
  font-weight: bold;
  color: var(--text_input);
  text-align: center;
`;

export const LargeInput = styled.textarea`
  width: 50%;
  height: 260px;

  font-size: 25px;
  font-weight: bold;
  color: var(--text_input);

  border: 3px solid var(--text_input);
  border-radius: 6px;

  background-color: var(--blue_bg_input);
`;

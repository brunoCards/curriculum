import styled from 'styled-components';

export const Input = styled.input`
  width: 50%;
  height: 50px;
  border: 3px solid var(--text_input);
  border-radius: 6px 0 0 6px;

  background-color: var(--blue_bg_input);

  font-size: 25px;
  font-weight: bold;
  color: var(--text_input);
  text-align: center;
`;

export const LargeInput = styled.textarea`
  width: 50%;
  height: 260px;
  padding: 10px;

  font-size: 25px;
  font-weight: bold;
  color: var(--text_input);
  text-align: justify;

  border: 3px solid var(--text_input);
  border-radius: 6px;

  background-color: var(--blue_bg_input);
`;

import styled from 'styled-components';
import InputMask from 'react-input-mask';

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

export const InputMasked = styled(InputMask)`
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

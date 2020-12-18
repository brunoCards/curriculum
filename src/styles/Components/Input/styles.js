import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const Input = styled(TextField)`
  width: 50%;

  .MuiInputBase-input {
    font-size: 25px;
    font-weight: bold;
    color: var(--text_input);
    text-align: center;
  }

  .MuiInput-underline:before {
    border-bottom: 3px solid var(--text_input);
  }
`;

import styled from 'styled-components';

import { Box } from '@material-ui/core';

export const InputBox = styled(Box)`
  width: 50%;

  display: flex;
  gap: 7px;
  align-items: center;
  justify-content: center;

  &.email {
    flex-direction: column;
  }
`;

export const LargeInputBox = styled(Box)`
  width: 100%;
  padding-right: 70px;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

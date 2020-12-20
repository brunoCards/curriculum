import styled from 'styled-components';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

export const MainFooter = styled.footer`
  width: 100%;
  padding-top: 80px;

  display: flex;
  justify-content: flex-end;

  #icon-arrow-button {
    display: none;
  }

  label {
    width: 300px;
  }
`;

export const WithAddButtonFooter = styled.footer`
  width: 100%;
  padding-top: 80px;

  display: flex;
  justify-content: space-between;

  #icon-arrow-button {
    display: none;
  }

  label {
    width: 300px;
  }
`;

export const NextButton = styled(PlayCircleFilledIcon)`
  &.MuiSvgIcon-root {
    width: 40%;
    height: 40%;
    margin-left: 250px;

    font-size: 120px;
    fill: var(--purple_text_next_button);
    background-color: #c0c0c0;
    border-radius: 50%;

    &:hover {
      fill: var(--green_text_green_button);
      border-radius: 50%;
    }
  }
`;

export const NextButtonWithAdd = styled(PlayCircleFilledIcon)`
  &.MuiSvgIcon-root {
    width: 40%;
    height: 40%;
    margin-left: 250px;

    font-size: 120px;
    fill: var(--purple_text_next_button);
    background-color: #c0c0c0;
    border-radius: 50%;

    &:hover {
      fill: var(--green_text_green_button);
      border-radius: 50%;
    }
  }
`;

export const AddButton = styled(AddCircleIcon)`
  &.MuiSvgIcon-root {
    margin-top: 20px;

    font-size: 100px;
    fill: var(--add_button);
    fill-opacity: 1;
    border-radius: 50%;

    &:hover {
      fill: var(--hover_add_button);
    }
  }
`;

import styled from 'styled-components';

import { withStyles } from '@material-ui/core/styles';
import ArrowLeftRoundedIcon from '@material-ui/icons/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import HistoryRoundedIcon from '@material-ui/icons/HistoryRounded';
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import UndoRoundedIcon from '@material-ui/icons/UndoRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
export const StartButton = styled.button`
  width: 340px;
  height: 70px;
  border: 3px solid var(--text_input);
  border-radius: 6px;
  outline: none;

  background-color: transparent;

  font-size: 25px;
  font-weight: bold;

  cursor: pointer;

  &:hover {
    transition: 0.3s cubic-bezier(0.6, 0.04, 0.98, 0.335);
    background-color: #27ae60;
    color: var(--purple_text_next_button);
  }
`;

export const BackButton = withStyles({
  root: {
    width: 70,
    height: 70,
    color: 'var(--text_input)',
    fontSize: 61,
    borderRadius: 50,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: 'var(--blue_bg_input)',
      transition: 'ease-in-out .4s',
      transform: 'scale(1.2)',
    },

    '&:active': {
      transition: 'ease-in .2s',
    },
  },
})(ArrowLeftRoundedIcon);

export const NextButton = withStyles({
  root: {
    width: 70,
    height: 70,
    color: 'var(--text_input)',
    fontSize: 61,
    borderRadius: 50,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: 'var(--blue_bg_input)',
      transition: 'ease-in-out .4s',
      transform: 'scale(1.2)',
    },

    '&:active': {
      transition: 'ease-in .2s',
    },
  },
})(ArrowRightRoundedIcon);

export const AddButton = withStyles({
  root: {
    width: 60,
    height: 50,

    color: 'var(--text_input)',
    backgroundColor: 'var(--blue_bg_input)',
    fontSize: 61,
    fontWeight: 'bold',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    cursor: 'pointer',

    '&:hover': {
      transform: 'scale(1.1)',
      transition: 'ease-in-out .3s',
    },

    '&:active': {
      transition: 'ease-in .2s',
    },
    '&.isdisabled': {
      opacity: '0.3',
      transition: 'ease-in-out .5s',
    },
  },
})(AddRoundedIcon);

export const BackToButton = withStyles({
  root: {
    width: 60,
    height: 50,
    borderStyle: 'solid',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,

    color: 'var(--text_input)',
    backgroundColor: 'var(--blue_bg_input)',
    fontSize: 30,
    cursor: 'pointer',

    '&:hover': {
      transition: 'ease-in-out .4s',
      transform: 'scale(1.2)',
    },

    '&:active': {
      transition: 'ease-in .2s',
    },

    '&.ishidden': {
      opacity: '0.3',
      transition: 'ease-in-out .5s',
    },
  },
})(HistoryRoundedIcon);

export const HomeButton = withStyles({
  root: {
    width: 40,
    height: 40,
    marginBottom: '5vh',
    color: 'var(--text_input)',
    cursor: 'pointer',
    backgroundColor: 'var(--blue_bg_input)',

    '&:hover': {
      transition: 'ease-in-out .4s',
      transform: 'scale(1.2)',
    },

    '&:active': {
      transition: 'ease-in .2s',
    },
  },
})(HomeRoundedIcon);

export const ExitReviewButton = withStyles({
  root: {
    width: 60,
    height: 55,
    padding: 10,

    color: 'var(--red_text)',
    fontSize: 40,
    fontWeight: 'bolder',
    cursor: 'pointer',
    backgroundColor: 'var(--blue_bg_input)',

    '&:hover': {
      transition: 'ease-in-out .4s',

      color: 'var(--blue_bg_input)',
      backgroundColor: 'var(--red_text)',
    },

    '&:active': {
      transition: 'ease-in .2s',
    },

    '&.ishidden': {
      visibility: 'hidden',
    },
  },
})(UndoRoundedIcon);

export const Submit = withStyles({
  root: {
    width: 60,
    height: 55,
    padding: 10,
    color: 'var(--green_text_green_button)',
    fontSize: 40,
    fontWeight: 'bolder',
    cursor: 'pointer',

    '&:hover': {
      transition: 'ease-in-out .4s',
      color: 'var(--blue_bg_input)',
      backgroundColor: 'var(--green_text_green_button)',
    },

    '&:active': {
      transition: '1s',
    },

    '&.ishidden': {
      visibility: 'hidden',
    },
  },
})(DoneRoundedIcon);

export const DownloadButton = withStyles({
  root: {
    width: 60,
    height: 60,
    padding: 10,
    color: 'var(--purple_text_next_button)',
    fontSize: 40,
    fontWeight: 'bolder',
    cursor: 'pointer',
    alignSelf: 'end',
    backgroundColor: 'var(--blue_bg_input)',

    '&:hover': {
      transition: 'ease-in-out .4s',
      transform: 'scale(1.2)',
    },

    '&:active': {
      transition: 'ease-in .2s',
    },

    '&.ishidden': {
      visibility: 'hidden',
    },
  },
})(GetAppRoundedIcon);

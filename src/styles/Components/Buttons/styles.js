import { withStyles } from '@material-ui/core/styles';
import ArrowLeftRoundedIcon from '@material-ui/icons/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import RateReviewIcon from '@material-ui/icons/RateReview';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import UndoRoundedIcon from '@material-ui/icons/UndoRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

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
})(AddRoundedIcon);

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

export const BackToButton = withStyles({
  root: {
    width: 50,
    height: 50,
    color: 'var(--text_input)',
    fontSize: 30,
    borderRadius: 50,
    cursor: 'pointer',
    alignSelf: 'end',

    '&:hover': {
      backgroundColor: 'var(--blue_bg_input)',
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
})(RateReviewIcon);

export const Submit = withStyles({
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
})(DoneRoundedIcon);

export const ExitReviewButton = withStyles({
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
})(UndoRoundedIcon);

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

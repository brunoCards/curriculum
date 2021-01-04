import { withStyles } from '@material-ui/core/styles';
import ArrowLeftRoundedIcon from '@material-ui/icons/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

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

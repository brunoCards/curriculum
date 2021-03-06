// import styled-components
import styled from 'styled-components';

//import material-ui
import { withStyles } from '@material-ui/core/styles';

//imports material-ui/icons
import ArrowLeftRoundedIcon from '@material-ui/icons/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import HistoryRoundedIcon from '@material-ui/icons/HistoryRounded';
import UndoRoundedIcon from '@material-ui/icons/UndoRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

export const StartButton = styled.button`
  width: 340px;
  height: 70px;
  border: 3px solid var(--black);
  border-radius: 6px;
  outline: none;

  background-color: transparent;

  font-size: 25px;
  font-weight: bold;

  cursor: pointer;

  &:hover {
    transition: 0.3s cubic-bezier(0.6, 0.04, 0.98, 0.335);
    background-color: #27ae60;
    color: var(--purple);
  }
`;

export const BackButton = withStyles({
  root: {
    width: 70,
    height: 70,
    color: 'var(--black)',
    fontSize: 61,
    borderRadius: 50,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: 'var(--purple)',
      color: 'var(--white)',

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
    color: 'var(--black)',
    fontSize: 61,
    borderRadius: 50,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: 'var(--purple)',
      color: 'var(--white)',
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

    color: 'var(--black)',
    backgroundColor: 'var(--blue)',
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

    color: 'var(--black)',
    backgroundColor: 'var(--blue)',
    fontSize: 30,
    cursor: 'pointer',

    '&:hover': {
      transition: 'ease-in-out .4s',
      transform: 'scale(1.1)',
    },

    '&:active': {
      transition: 'ease-in .2s',
    },

    '&.isHidden': {
      opacity: '0.3',
      transition: 'ease-in-out .5s',
    },

    '&.rightradius': {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: 6,
      borderBottomRightRadius: 6,
    },
    '&#rightradius': {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: 6,
      borderBottomRightRadius: 6,
    },

    '&.state': {
      borderBottomLeftRadius: 0,
    },
  },
})(HistoryRoundedIcon);

export const HomeButton = withStyles({
  root: {
    width: 40,
    height: 40,
    marginBottom: '5vh',
    color: 'var(--black)',
    cursor: 'pointer',
    backgroundColor: 'var(--blue)',

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

    color: 'var(--red)',
    fontSize: 40,
    fontWeight: 'bolder',
    cursor: 'pointer',
    backgroundColor: 'var(--blue)',

    '&:hover': {
      transition: 'ease-in-out .4s',

      color: 'var(--blue)',
      backgroundColor: 'var(--red)',
    },

    '&:active': {
      transition: 'ease-in .2s',
    },

    '&.ishidden': {
      visibility: 'hidden',
    },
  },
})(UndoRoundedIcon);

export const EditButton = withStyles({
  root: {
    width: 30,
    height: 30,
    marginBottom: 20,
    marginRight: 10,
    color: 'var(--blue)',
    fontSize: 30,
    cursor: 'pointer',

    '&:hover': {
      transition: 'ease-in-out .4s',
      transform: 'scale(1.1)',
    },

    '&:active': {
      transition: 'ease-in .2s',
    },

    '&.ishidden': {
      opacity: '0.3',
      transition: 'ease-in-out .5s',
    },
  },
})(EditIcon);

export const DeleteButton = withStyles({
  root: {
    width: 20,
    height: 20,
    color: 'var(--black)',
    cursor: 'pointer',

    '&:hover': {
      transition: 'ease-in-out .4s',
      transform: 'scale(1.1)',
      color: 'var(--red)',
    },

    '&:active': {
      transition: 'ease-in .2s',
    },

    '&.ishidden': {
      opacity: '0.3',
      transition: 'ease-in-out .5s',
    },
  },
})(DeleteOutlineIcon);

export const OpenSelect = withStyles({
  root: {
    width: 50,
    height: 40,

    color: 'var(--black)',
    fontSize: 30,
    cursor: 'pointer',
    position: 'relative',
    right: '4vw',

    '&:hover': {
      transition: 'ease-in-out .4s',
      transform: 'scale(1.2)',
    },

    '&:active': {
      transition: 'ease-in .2s',
    },
  },
})(ExpandMoreRoundedIcon);

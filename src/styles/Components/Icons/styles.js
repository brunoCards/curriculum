//import material-ui
import { withStyles } from '@material-ui/core/styles';

//imports material-ui/icons
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CodeIcon from '@material-ui/icons/Code';

export const AddresPinIcon = withStyles({
  root: {
    fontSize: '16px',
  },
})(RoomOutlinedIcon);

export const PhonesIcon = withStyles({
  root: {
    fontSize: '16px',
    marginTop: 3,
    cursor: 'pointer',
  },
})(PhoneIphoneOutlinedIcon);

export const EmailsIcon = withStyles({
  root: {
    fontSize: '16px',
    cursor: 'pointer',

    '&.ishide': {
      visibility: 'hidden',
    },
  },
})(MailOutlineIcon);

export const CodesIcon = withStyles({
  root: {
    fontSize: '16px',
    cursor: 'pointer',
  },
})(CodeIcon);

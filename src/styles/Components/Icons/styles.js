// import styled-components
import styled from 'styled-components';

//import material-ui
import { withStyles } from '@material-ui/core/styles';

//imports material-ui/icons
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

export const AddresPinIcon = withStyles({
  root: {
    fontSize: '16px',
  },
})(RoomOutlinedIcon);

export const PhonesIcon = withStyles({
  root: {
    fontSize: '16px',
  },
})(PhoneIphoneOutlinedIcon);

export const EmailsIcon = withStyles({
  root: {
    fontSize: '16px',
  },
})(MailOutlineIcon);

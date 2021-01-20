//import styled-components
import styled from 'styled-components';

//import material-ui
import { withStyles } from '@material-ui/core';

//imports material-ui/icons
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

export const ReviewPageLayout = styled.div`
  width: 100vw;
  height: 97vh;
  margin: 10px;

  display: grid;
  grid-template-areas:
    'pd . ac'
    'pd . ac'
    'pd . ac'
    'pd . id'
    'pd . pr';
  grid-template-columns: 30vw 15px 67vw;
`;

export const PersonalData = styled.section`
  width: 100%;
  border: 3px solid var(--black);
  border-radius: 6px 0 0 0;

  grid-area: pd;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--purple);
`;

export const ReviewPageTitle = styled.h3`
  width: 90%;

  font-size: 43px;
  color: #d5d5d5;
`;

export const AddressBox = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ReviewPageCityState = styled.div`
  width: 90%;
  margin-top: 5vh;
`;

export const PinIcon = withStyles({
  root: {
    fontSize: '26px',
    color: '#d5d5d5',
  },
})(RoomOutlinedIcon);

export const CityStateText = styled.h5`
  padding-top: 5px;

  font-size: 25px;
  font-weight: bold;
`;

export const ReviewPageContacts = styled.div`
  width: 90%;
  margin-top: 5vh;
`;

export const ContactsBox = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PhoneIcon = withStyles({
  root: {
    fontSize: '21px',
    color: '#d5d5d5',
  },
})(PhoneIphoneOutlinedIcon);

export const WhatsIcon = withStyles({
  root: {
    fontSize: '21px',
    color: '#d5d5d5',
  },
})(WhatsAppIcon);

export const EmailIcon = withStyles({
  root: {
    fontSize: '21px',
    color: '#d5d5d5',
  },
})(MailOutlineIcon);

export const ContactsText = styled.p`
  width: 80%;
  font-size: 21px;
`;

export const ResumeBox = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const SectionsTitle = styled.h5`
  padding-bottom: 20px;

  font-size: 25px;
  text-transform: uppercase;
`;

export const SectionsParagraph = styled.p`
  font-size: 17px;
  text-align: justify;
`;

export const AcademicData = styled.section`
  width: 100%;
  border: 3px solid var(--black);
  border-radius: 0 6px 6px 0;

  grid-area: ac;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--blue_secondary);
`;

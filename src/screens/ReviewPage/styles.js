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
  height: 98.9vh;
  margin: 5px 10px 0 10px;

  display: grid;
  row-gap: 10px;
  grid-template-areas:
    'pd . ac .'
    'pd . ac .'
    'pd . ac .'
    'pd . kn pr'
    'pd . kn pr';
  grid-template-columns: 30vw 15px 33.35vw 33.35vw;

  overflow: hidden;
`;

export const PersonalDataSection = styled.section`
  width: 100%;
  border: 3px solid var(--black);
  border-radius: 6px 0 0 6px;

  grid-area: pd;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--blue);
`;

export const FullName = styled.h3`
  width: 90%;
  margin-top: 10px;
  border-radius: 6px;

  font-size: 43px;
  color: var(--purple);
  background-color: var(--black);
`;

export const AddressBox = styled.div`
  width: 75%;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--black);
`;

export const AddressContainer = styled.div`
  width: 90%;
  margin-top: 5vh;
`;

export const PinIcon = withStyles({
  root: {
    fontSize: '26px',
    color: 'var(--blue)',
  },
})(RoomOutlinedIcon);

export const Address = styled.h5`
  padding: 5px 5px 0 0;

  font-size: 25px;
  font-weight: bold;

  color: var(--purple);
`;

export const Contacts = styled.div`
  width: 90%;
  margin-top: 5vh;
`;

export const ContactsBox = styled.div`
  width: 90%;
  padding: 5px;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background-color: var(--black);
`;

export const PhoneIcon = withStyles({
  root: {
    fontSize: '21px',
    color: 'var(--blue)',
  },
})(PhoneIphoneOutlinedIcon);

export const WhatsIcon = withStyles({
  root: {
    fontSize: '21px',
    color: 'var(--blue)',
  },
})(WhatsAppIcon);

export const EmailIcon = withStyles({
  root: {
    fontSize: '21px',
    color: 'var(--blue)',
  },
})(MailOutlineIcon);

export const ContactsText = styled.p`
  width: 80%;
  font-size: 21px;
  color: var(--purple);

  &.phone {
    width: 50%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &.email {
    width: 77%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ResumeBox = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const SectionsTitle = styled.h5`
  padding-bottom: 20px;
  border-radius: 6px;

  color: var(--purple);
  font-size: 30px;
  text-transform: uppercase;

  &.resume {
    width: 60%;
    padding: 5px;
    background-color: var(--black);
  }

  &.academicSectionTitle {
    width: 95%;
    height: 100%;
    padding: 0;
    margin-top: 10px;

    display: flex;
    align-items: center;

    background-color: var(--black);
  }

  &.KnowledgesSectionTitle {
    width: 80%;
    height: 20%;
    margin: 5px 0 0 20px;

    display: flex;
    justify-content: center;

    color: var(--blue);
    background-color: var(--black);
  }

  &.proffesionalSectionTitle {
    width: 90%;
    height: 20%;
    padding-left: 20px;
    margin-top: 10px;
    background-color: var(--black);
  }
`;

export const SectionsParagraph = styled.p`
  font-size: 17px;
  text-align: justify;

  &.resume {
    margin-top: 10px;
    border-radius: 6px;
    padding: 10px;
    background-color: var(--black);
    color: var(--blue);
  }

  &.company {
    padding: 10px 20px;
  }
`;

export const AcademicData = styled.section`
  width: 67.9vw;
  padding-bottom: 10px;
  border: 3px solid var(--black);
  border-radius: 0 6px 0 0;

  grid-area: ac;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--blue);
`;

export const AcademicBox = styled.div`
  width: 95%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const BoxSubtitle = styled.h6`
  font-size: 25px;
  color: var(--purple);

  &.course {
    width: 15%;
    border-radius: 6px;
    background-color: var(--black);

    color: var(--blue);
  }

  &.fontSizeAdjust {
    font-size: 21px;
  }

  &.company {
    width: 100%;
    margin-top: 10px;
    padding-left: 20px;

    font-size: 16px;
  }
`;

export const KnowledgesData = styled.section`
  width: 34.5vw;
  height: 36vh;
  border: 3px solid var(--black);
  border-right: none;

  grid-area: kn;

  display: flex;
  flex-direction: column;

  background-color: var(--blue);
`;

export const ProffesionalData = styled.section`
  width: 34.5vw;
  height: 36vh;
  border: 3px solid var(--black);
  border-left: none;
  border-radius: 0 0 6px 0;

  display: flex;
  flex-direction: column;

  grid-area: pr;

  background-color: var(--blue);
`;

export const SectionBox = styled.div`
  width: 100%;
  height: 75%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

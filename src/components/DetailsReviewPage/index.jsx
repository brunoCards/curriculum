import React from 'react';

//import material-icons
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

import { BoxDetails, BoxDetailsTitle, BoxDetailsText } from './styles';

const DetailsReviewPage = ({ summary, details, go }) => {
  return (
    <>
      {details.map((data, index) => {
        const objKey = Object.keys(data)[0];
        const objValue = data[Object.keys(data)[0]];

        return (
          <>
            <BoxDetails onClick={() => go(`${summary.toLowerCase()}`)}>
              <BoxDetailsTitle>{`${objKey}: `}</BoxDetailsTitle>
              <BoxDetailsText>{`${objValue}`}</BoxDetailsText>
              <IconButton>
                <EditIcon />
              </IconButton>
            </BoxDetails>
          </>
        );
      })}
    </>
  );
};

export default DetailsReviewPage;

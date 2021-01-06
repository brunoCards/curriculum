import React from 'react';

import { AccordionBoxDetail } from './styles';

//styles
import { AccordionText } from './styles';

import IconButton from '@material-ui/core/IconButton';

//import material-icons
import EditIcon from '@material-ui/icons/Edit';

const AccordionReviewPage = ({ summary, details, go }) => {
  return (
    <>
      {details.map((data, index) => {
        const objKey = Object.keys(data)[0];
        const objValue = data[Object.keys(data)[0]];

        return (
          <>
            <AccordionBoxDetail onClick={() => go(`${summary.toLowerCase()}`)}>
              <AccordionText key={index}>
                {`${objKey}: ${objValue}`}
                <IconButton>
                  <EditIcon />
                </IconButton>
              </AccordionText>
            </AccordionBoxDetail>
          </>
        );
      })}
    </>
  );
};

export default AccordionReviewPage;

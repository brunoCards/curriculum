import React from 'react';
import ReactDOM from 'react-dom';
import Pdf from 'react-to-pdf';

import { DownloadButton } from '../../styles/Components/Buttons/styles';

const DownloadPage = () => {
  const ref = React.createRef();
  return (
    <>
      <Pdf targetRef={ref} filename="CurriculuM Modelo 1">
        {({ toPdf }) => <DownloadButton onClick={toPdf} />}
      </Pdf>
    </>
  );
};

export default DownloadPage;

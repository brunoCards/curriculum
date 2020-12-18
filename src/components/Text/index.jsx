import React from 'react';

//styled-components
import { TextArea } from './styles';

function Text({ content, span, continueContent }) {
  return (
    <>
      <TextArea>
        {content} <span className="purple">{span}</span> {continueContent}
      </TextArea>
    </>
  );
}

export default Text;

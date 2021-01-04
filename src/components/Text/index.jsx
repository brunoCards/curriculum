import React from 'react';

//styled-components
import { TextArea, ParagraphArea } from './styles';

const Text = ({
  content,
  span,
  continueContent,
  hasParagraph,
  isgreen,
  isPurple,
  afterEmphasys,
}) => {
  return (
    <>
      {hasParagraph ? (
        <ParagraphArea>
          {content} <span className="purple"> {span} </span>
          <span className="green"> {isgreen} </span>
          {continueContent} <span className="purple"> {isPurple} </span>
          {afterEmphasys}
        </ParagraphArea>
      ) : (
        <TextArea>
          {content} <span className="purple"> {span} </span>
          {continueContent}
        </TextArea>
      )}
    </>
  );
};

export default Text;

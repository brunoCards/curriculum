import React from 'react';

//styled-components
import { TextArea, ParagraphArea } from './styles';

function Text({
  content,
  span,
  continueContent,
  hasParagraph,
  isgreen,
  ispurple,
  afterEmphasys,
}) {
  return (
    <>
      {hasParagraph ? (
        <ParagraphArea>
          {content} <span className="purple"> {span} </span>
          <span className="green"> {isgreen} </span>
          {continueContent} <span className="purple"> {ispurple} </span>
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
}

export default Text;

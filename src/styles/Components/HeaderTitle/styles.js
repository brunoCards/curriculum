import styled from 'styled-components';

export const HeaderTitle = styled.h1`
  width: 13vw;
  border: 3px solid var(--text_input);
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 21px;
  color: var(--text_input);

  &.isPersonal {
    background-color: var(--purple_text_next_button);
    opacity: 0.8;
  }
  &.isProffesional {
    background-color: #f7f1e3;
    opacity: 0.8;
  }
  &.isAcademic {
    background-color: #4834d4;
    opacity: 0.8;
  }
  &.isLanguage {
    background-color: #eb4d4b;
    opacity: 0.8;
  }
`;

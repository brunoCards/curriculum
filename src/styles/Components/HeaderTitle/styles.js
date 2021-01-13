import styled from 'styled-components';

export const HeaderTitle = styled.h1`
  width: 13vw;
  border: 3px solid var(--black);
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 21px;
  color: var(--black);

  &.isPersonal {
    background-color: var(--purple);
    opacity: 0.8;
  }
  &.isProffesional {
    background-color: var(--grey);
    opacity: 0.8;
  }
  &.isAcademic {
    background-color: var(--blue_secondary);
    opacity: 0.8;
  }
  &.isLanguage {
    background-color: var(--red_secondary);
    opacity: 0.8;
  }
`;

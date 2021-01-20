import styled from 'styled-components';

export const ListBox = styled.ul`
  width: 100%;
  margin-top: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;

  list-style: none;

  &.knowledges {
    width: 30%;
    height: 100%;
    border: 3px solid var(--black);
    border-radius: 6px;

    justify-content: center;

    background-color: var(--black);
    color: var(--blue);
  }

  &.languages {
    width: 30%;
    height: 100%;
    border: 3px solid var(--black);
    border-radius: 6px;

    justify-content: center;

    background-color: var(--black);
    color: var(--blue);
  }
`;

export const ListItem = styled.li`
  width: 100%;

  font-size: 16px;
  font-style: italic;

  display: flex;
  justify-content: center;
  align-items: center;

  &.languagesLevel {
    font-size: 16px;
  }
`;

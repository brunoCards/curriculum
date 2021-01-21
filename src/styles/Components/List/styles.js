import styled from 'styled-components';

export const ListBox = styled.ul`
  width: 100%;
  margin-top: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;

  list-style: none;

  &.knowledge {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 7px;
  }

  &.knowledges {
    width: 30%;
    height: 100%;
    cursor: pointer;

    border: 3px solid var(--black);
    border-radius: 6px;

    justify-content: center;

    background-color: var(--black);
    color: var(--blue);
  }

  &.languages {
    width: 30%;
    height: 100%;
    cursor: pointer;

    border: 3px solid var(--black);
    border-radius: 6px;

    justify-content: center;

    background-color: var(--black);
    color: var(--blue);
  }

  &.phones {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 7px;
  }

  &.email {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 7px;
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

  &.email {
    width: 40%;
    padding-top: 3px;
    border: 3px solid var(--black);
    border-radius: 6px;

    gap: 7px;
    background-color: var(--purple);
  }

  &.phone {
    width: 30%;
    padding-top: 3px;
    border: 3px solid var(--black);
    border-radius: 6px;

    gap: 7px;
    align-items: flex-start;
    background-color: var(--purple);
  }

  &.knowledge {
    width: 30%;
    padding-top: 5px;
    border: 3px solid var(--black);
    border-radius: 6px;

    gap: 7px;
    align-items: center;
    background-color: var(--purple);
  }
`;

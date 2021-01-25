import styled from 'styled-components';

export const SelectContainer = styled.div`
  width: 100%;
  height: 50px;
`;

export const SelectInputHeader = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 5px;
  border: 3px solid var(--black);
  cursor: pointer;

  display: flex;
  align-items: center;

  font-size: 25px;
  background-color: var(--blue);

  &.textOpacity {
    opacity: 0.3;
    transition: ease-in-out 0.1s;
  }
`;

export const SelectListContainer = styled.div`
  width: 100%;
  background-color: var(--blue);
`;

export const SelectInput = styled.ul`
  width: 100%;
  height: 15vh;
  margin-top: 2vh;
  border: 3px solid var(--black);
  border-radius: 0 0 6px 6px;

  background-color: var(--blue);

  overflow-y: scroll;
`;

export const SelectOption = styled.li`
  width: 100%;
  list-style: none;
  font-size: 25px;

  display: flex;
  padding-left: 5px;
  cursor: pointer;
`;

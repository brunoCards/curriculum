import styled from 'styled-components';

export const BoxDetails = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  margin: 10px 0;
  border: 1px dotted var(--text_input);

  display: flex;
  align-items: center;

  text-align: justify;

  &:hover {
    background-color: var(--purple_text_next_button);
    transition: 1s cubic-bezier(0.23, 1, 0.32, 1);
  }
`;

export const BoxDetailsTitle = styled.h5`
  width: 30%;
  font-size: 20px;
  font-weight: bold;
`;

export const BoxDetailsText = styled.p`
  width: 60%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;

  font-size: 20px;
  text-align: justify;

  &:nth-child(8) {
    height: 100px;
  }
`;

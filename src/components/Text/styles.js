import styled from 'styled-components';

export const TextArea = styled.p`
  width: 100%;

  display: flex;
  justify-content: center;

  color: var(--black);
  text-align: center;

  .purple {
    color: var(--purple);
    font-weight: bold;
  }
`;

export const ParagraphArea = styled.p`
  width: 50%;

  font-size: 30px;
  color: var(--black);
  text-align: justify;

  .purple {
    color: var(--purple);
    font-weight: bold;
  }

  .green {
    color: var(--green);
    font-weight: bold;
  }
`;

export const AddressArea = styled.p`
  padding-top: 20px;
  font-size: 21px;
  color: var(--black);

  &.hide {
    visibility: hidden;
  }
`;

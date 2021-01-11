import styled from 'styled-components';

export const LayoutDownloadPage = styled.div`
  padding-top: 20px;
  display: grid;
  grid-template-columns: 10px 40% 10px 55% 10px;
  grid-template-areas:
    '. PD . GR .'
    '. PD . LN .'
    '. PD . EP .'; ;
`;

export const DownloadPageHeader = styled.header`
  height: 161vh;
  padding-top: 50px;

  display: flex;
  flex-direction: column;

  grid-area: PD;

  background-color: var(--blue_bg_input);

  text-align: center;
`;

export const DownloadPageSections = styled.section`
  display: flex;
  flex-direction: column;

  text-align: justify;

  &#graduations {
    grid-area: GR;
  }
  &#language {
    grid-area: LN;
  }
  &#proffesional {
    grid-area: EP;
  }
`;

export const DownloadPageFooter = styled.footer`
  background-color: var(--blue_bg_input);

  grid-area: FT;
`;

export const DownloadPageMainTitle = styled.h2`
  display: flex;
  justify-content: center;

  font-size: 25px;
  color: var(--purple_text_next_button);
`;

export const DownloadPageSectionTitle = styled.h4`
  font-size: 34px;
  text-transform: uppercase;
  color: var(--purple_text_next_button);
`;

export const SectionsParagraph = styled.p`
  display: flex;
  justify-content: center;

  font-size: 16px;
`;

export const goBack = (history) => {
  history.goBack();
};

export const goToNamePage = (history) => {
  history.push('/dados-pessoais/nome');
};

export const goToStateInputPage = (history) => {
  history.push('/dados-pessoais/estado');
};

export const goToCityInputPage = (history) => {
  history.push('/dados-pessoais/cidade');
};

export const goToPhonePage = (history) => {
  history.push('/dados-pessoais/telefones');
};

export const goToEmailPage = (history) => {
  history.push('/dados-pessoais/emails');
};

export const goToDescriptionPage = (history) => {
  history.push('/dados-pessoais/descricao');
};

// export const goToLinkedinPage = (history) => {
//   history.push('/dados-pessoais/linkedin');
// };

// export const goToGithubPage = (history) => {
//   history.push('/dados-pessoais/portfolio');
// };

export const goToKnowledgesPage = (history) => {
  history.push('/dados-pessoais/conhecimentos');
};

export const goToInstitutionPage = (history) => {
  history.push('/dados-academicos/nome/instituicao');
};

export const goToDegreePage = (history) => {
  history.push('/dados-academicos/graduacao');
};

export const goToCourseNamePage = (history) => {
  history.push('/dados-academicos/nome/curso');
};

// export const goToDescriptionCoursePage = (history) => {
//   history.push('/dados-academicos/descricao/curso');
// };

export const goToStartDateCoursePage = (history) => {
  history.push('/dados-academicos/data/inicio');
};

export const goToEndDateCoursePage = (history) => {
  history.push('/dados-academicos/data/termino');
};

export const goToLanguagesPage = (history) => {
  history.push('/dados-academicos/idiomas');
};

export const goToLanguagesLevelPage = (history) => {
  history.push('/dados-academicos/idiomas/nivel');
};

export const goToCompanyNamePage = (history) => {
  history.push('/dados-profissionais/nome-empresa');
};

// export const goToResponsibilityPage = (history) => {
//   history.push('/dados-profissionais/cargo');
// };

export const goToAdmitDatePage = (history) => {
  history.push('/dados-profissionais/data/admissao');
};

export const goToResignDatePage = (history) => {
  history.push('/dados-profissionais/data/recisao');
};

export const goToActtvitiesPage = (history) => {
  history.push('/dados-profissionais/atividades');
};

export const goToReviewPage = (history) => {
  history.push('/review');
};

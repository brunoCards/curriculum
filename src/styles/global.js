import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    width: 100vw;
    height: 100vh;  
  }

  body {
    font: 50px 'Roboto', sans-serif ;
    background: var(--primary);
  }

  :root {
    --primary: rgba(241, 196, 15, 0.3);
    --green_text: #27AE60;  
    --green_button: #50FF92;
    --purple_text_add_button: #8E44AD;
    --red_text: #C0392B;
    --blue_bg_input: #B0FFF0;
    --text_input: #000000;
  }
`;

export default GlobalStyle;

// SERÁ USAOD PARA A PAGINA FINAL
// font-family: 'Baloo 2', cursive;

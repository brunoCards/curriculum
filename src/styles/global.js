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
  
  button, input {
    outline: none;
    font: 50px 'Roboto', sans-serif ;

  }

  body {
    font: 50px 'Roboto', sans-serif ;
    background: var(--primary);
  }

  :root {
    --primary: rgba(241, 196, 15, 0.3);
    --green_text_green_button: #27AE60;
    --purple_text_next_button: #8E44AD;
    --add_button: #c0c0c0;
    --hover_add_button: #9b59b6;
    --red_text: #C0392B;
    --blue_bg_input: #B0FFF0;
    --text_input: #000000;
  }
`;

export default GlobalStyle;

// SERÁ USAOD PARA A PAGINA FINAL
// font-family: 'Baloo 2', cursive;

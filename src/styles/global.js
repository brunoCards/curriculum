import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Baloo+2&family=Roboto:wght@500&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    width: 100vw;    
  }

  body {
    font: 50px 'Roboto', sans-serif ;    
  }

  :root {
    --primary: #F1C40F;
    --green_text: #27AE60;  
    --green_button: #50FF92;
    --purple_text_add_button: #8E44AD;
    --red_text: #C0392B;
    --blue_bg_input: #B0FFF0;
  }
`;

export default GlobalStyle;

// font-family: 'Baloo 2', cursive;

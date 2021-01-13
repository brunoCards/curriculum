import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

 
  button, input {
    outline: none;
    font: 50px 'Baloo 2', cursive;
  }

  body{
    font: 50px 'Baloo 2', cursive;;
    overflow-x: hidden;
    background-color: var(--background_yellow);

    color: #000020;
  }

  :root {
    --white:#ffffff;
    --red: #C0392B;
    --red_secondary: #eb4d4b;
    --green: #27AE60;
    --blue: #B0FFF0;
    --blue_secondary: #2980b9;
    --background_yellow: rgba(241, 196, 15, 0.3);
    --purple: #8E44AD;
    --grey: #f7f1e3;
    --black: #00000e;
  }
`;

export default GlobalStyle;

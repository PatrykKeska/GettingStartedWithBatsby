import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: calc(1vw + 1em); 
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0 auto;
padding : 50px 15px 15px 15px;
    font-family: 'Montserrat';
    overflow-x: hidden;
    
    
  }
  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
  }
  p {
    font-size: 16px;
  }
  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
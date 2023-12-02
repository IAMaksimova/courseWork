import {createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box; //вспомнить бокс сайзинг
  }

  body {
    margin: 0;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.2;
    font-weight: 200;

  }

  a {
    text-decoration: none;
    cursor: pointer;


  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;

    &:hover {
      transition: 0.4s ease-in-out;
    }
  }

  section:nth-child(odd) {
    color: white;
  }

  section {
    height: 100vh;
  }

`


